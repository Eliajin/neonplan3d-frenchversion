<?php
/**
 * NeonPlan 3D – customer keys, installation binding and pack delivery for WooCommerce.
 *
 * Every customer gets one key (NP-XXXX-XXXX-XXXX-XXXX) with the first pack purchase. The key is shown
 * in the order e-mail, on the thank-you page and in "My account". In NeonPlan 3D the customer enters
 * it once: the integration then lists the bought packs, installs them signed for that installation
 * (its fingerprint goes into the signature, so a copied file is refused elsewhere) and checks once a
 * day for updates and new purchases. A key can be bound to a few installations (a move to new
 * hardware is fine, handing it around is not).
 *
 * REST API (used by the integration, custom_components/neonplan3d/license.py):
 *   POST /wp-json/neonplan/v1/catalog  {key, instance}        -> {licensee, packs: [{id, name, release, url}]}
 *   POST /wp-json/neonplan/v1/pack     {key, instance, pack}  -> the signed pack file (JSON)
 * Errors are JSON {code, message} with HTTP 4xx; codes: invalid_key, activation_limit, not_owned, not_found.
 *
 * Setup: same as ms-np-sign.php (seed in wp-config.php, <pack>.canonical.json next to the pack files,
 * products carry _ms_np_key = pack key or a comma-separated list for the bundle); drop this file next to
 * ms-np-sign.php. Both files share the helpers ms_np_put_licensee / ms_np_put_instance.
 */

if (!defined('ABSPATH')) {
    exit;
}

const MS_NP_LICENSE_META = '_ms_np_license';
const MS_NP_INSTANCES_META = '_ms_np_instances';
/** How many different installations a key may be bound to at once, and how many new bindings a year allows. */
const MS_NP_MAX_INSTANCES = 3;
const MS_NP_BINDINGS_PER_YEAR = 5;
/** Meta key of the log of new bindings (timestamps), so moves are counted even after the oldest binding dropped out. */
const MS_NP_BIND_LOG_META = '_ms_np_bind_log';
/** Requests per hour and IP before the API answers 429. */
const MS_NP_RATE_LIMIT = 120;
const MS_NP_SHOP_PAGE = 'https://mastershort.de/neonplan3d/';

// ------------------------------------------------------------------------------------ keys

/** The customer's key, created with the first pack order; '' when the order holds no pack. */
function ms_np_ensure_license(WC_Order $order): string
{
    if (!ms_np_order_pack_keys($order)) {
        return '';
    }
    $user_id = $order->get_customer_id();
    if ($user_id) {
        $key = (string) get_user_meta($user_id, MS_NP_LICENSE_META, true);
        if ($key === '') {
            $key = ms_np_new_key();
            update_user_meta($user_id, MS_NP_LICENSE_META, $key);
        }
        return $key;
    }
    // guest order: the key lives on the order (its e-mail is the account)
    $key = (string) $order->get_meta(MS_NP_LICENSE_META);
    if ($key === '') {
        foreach (ms_np_guest_orders($order->get_billing_email()) as $other) {
            $key = (string) $other->get_meta(MS_NP_LICENSE_META);
            if ($key !== '') {
                break;
            }
        }
        if ($key === '') {
            $key = ms_np_new_key();
        }
        $order->update_meta_data(MS_NP_LICENSE_META, $key);
        $order->save();
    }
    return $key;
}

function ms_np_new_key(): string
{
    // no 0/O/1/I, so the key can be read aloud
    $alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    $parts = [];
    for ($i = 0; $i < 4; $i++) {
        $part = '';
        for ($j = 0; $j < 4; $j++) {
            $part .= $alphabet[random_int(0, strlen($alphabet) - 1)];
        }
        $parts[] = $part;
    }
    return 'NP-' . implode('-', $parts);
}

/** The pack keys (living, kitchen, …) an order contains; the bundle lists several, comma-separated. */
function ms_np_order_pack_keys(WC_Order $order): array
{
    $keys = [];
    foreach ($order->get_items() as $item) {
        $product = $item->get_product();
        if (!$product) {
            continue;
        }
        $meta = (string) $product->get_meta('_ms_np_key');
        if ($meta === '' && $product->get_parent_id()) {
            $meta = (string) wc_get_product($product->get_parent_id())->get_meta('_ms_np_key');
        }
        foreach (array_filter(array_map('trim', explode(',', $meta))) as $key) {
            if (preg_match('/^[a-z0-9_]+$/', $key)) {
                $keys[$key] = true;
            }
        }
    }
    return array_keys($keys);
}

function ms_np_guest_orders(string $email): array
{
    if ($email === '') {
        return [];
    }
    return wc_get_orders(['billing_email' => $email, 'customer_id' => 0, 'status' => ['completed', 'processing'], 'limit' => 50]);
}

add_action('woocommerce_order_status_completed', 'ms_np_on_order_paid');
add_action('woocommerce_order_status_processing', 'ms_np_on_order_paid');
function ms_np_on_order_paid(int $order_id): void
{
    $order = wc_get_order($order_id);
    if ($order) {
        ms_np_ensure_license($order);
    }
}

/** The key in the order e-mail, on the thank-you page and in the order details. */
add_action('woocommerce_email_after_order_table', 'ms_np_key_in_mail', 10, 4);
function ms_np_key_in_mail(WC_Order $order, bool $sent_to_admin, bool $plain_text, $email): void
{
    if ($sent_to_admin) {
        return;
    }
    $key = ms_np_ensure_license($order);
    if ($key === '') {
        return;
    }
    if ($plain_text) {
        echo "\n" . 'NeonPlan 3D – Lizenzschlüssel: ' . $key . "\n" . 'In NeonPlan 3D unter Erweiterungen > Shop-Verbindung eintragen; die gekauften Packs erscheinen dann dort und bekommen Updates von selbst.' . "\n\n";
        return;
    }
    echo '<h2>NeonPlan 3D – Lizenzschlüssel</h2><p style="font-size:1.3em;font-family:monospace"><b>' . esc_html($key) . '</b></p>'
        . '<p>In NeonPlan 3D unter <i>Erweiterungen › Shop-Verbindung</i> eintragen. Die gekauften Packs erscheinen dann dort und bekommen Updates von selbst. Alles Installierte funktioniert auch ohne Verbindung.</p>';
}

add_action('woocommerce_order_details_after_order_table', 'ms_np_key_in_order');
function ms_np_key_in_order(WC_Order $order): void
{
    $key = ms_np_ensure_license($order);
    if ($key !== '') {
        echo '<section class="ms-np-license"><h2>NeonPlan 3D – Lizenzschlüssel</h2><p style="font-size:1.3em;font-family:monospace"><b>' . esc_html($key) . '</b></p>'
            . '<p>In NeonPlan 3D unter <i>Erweiterungen › Shop-Verbindung</i> eintragen.</p></section>';
    }
}

add_action('woocommerce_account_dashboard', 'ms_np_key_in_account');
function ms_np_key_in_account(): void
{
    $key = (string) get_user_meta(get_current_user_id(), MS_NP_LICENSE_META, true);
    if ($key !== '') {
        echo '<section class="ms-np-license"><h3>NeonPlan 3D – Lizenzschlüssel</h3><p style="font-size:1.3em;font-family:monospace"><b>' . esc_html($key) . '</b></p>'
            . '<p>In NeonPlan 3D unter <i>Erweiterungen › Shop-Verbindung</i> eintragen. Gekaufte Packs erscheinen dort und bekommen Updates von selbst.</p></section>';
    }
}

// ------------------------------------------------------------------------------- lookup

/**
 * Who owns a key: ['user_id' => int, 'orders' => WC_Order[], 'name' => string] or null.
 */
function ms_np_find_license(string $key): ?array
{
    $users = get_users(['meta_key' => MS_NP_LICENSE_META, 'meta_value' => $key, 'number' => 1, 'fields' => 'ID']);
    if ($users) {
        $user_id = (int) $users[0];
        $orders = wc_get_orders(['customer_id' => $user_id, 'status' => ['completed', 'processing'], 'limit' => -1]);
        $user = get_userdata($user_id);
        $name = $user ? trim($user->first_name . ' ' . $user->last_name) : '';
        if ($name === '' && $orders) {
            $name = ms_np_buyer_name($orders[0]);
        }
        return ['user_id' => $user_id, 'orders' => $orders, 'name' => $name !== '' ? $name : ($user ? $user->display_name : 'Kunde')];
    }
    $orders = wc_get_orders(['meta_key' => MS_NP_LICENSE_META, 'meta_value' => $key, 'status' => ['completed', 'processing'], 'limit' => 1]);
    if (!$orders) {
        return null;
    }
    $all = ms_np_guest_orders($orders[0]->get_billing_email()) ?: $orders;
    return ['user_id' => 0, 'orders' => $all, 'name' => ms_np_buyer_name($orders[0])];
}

/** Pack keys the customer owns, from all paid orders. */
function ms_np_owned_pack_keys(array $owner): array
{
    $keys = [];
    foreach ($owner['orders'] as $order) {
        foreach (ms_np_order_pack_keys($order) as $key) {
            $keys[$key] = true;
        }
    }
    return array_keys($keys);
}

/** id, name and release of a pack from its canonical template (cached a few minutes). */
function ms_np_pack_meta(string $pack_key): ?array
{
    $cached = get_transient('ms_np_meta_' . $pack_key);
    if (is_array($cached)) {
        return $cached;
    }
    $uploads = wp_upload_dir();
    $template = trailingslashit($uploads['basedir']) . MS_NP_UPLOAD_DIR . '/' . $pack_key . '.canonical.json';
    if (!is_readable($template)) {
        return null;
    }
    $payload = json_decode((string) file_get_contents($template), true);
    if (!is_array($payload) || empty($payload['id'])) {
        return null;
    }
    $meta = [
        'key' => $pack_key,
        'id' => (string) $payload['id'],
        'name' => (string) ($payload['name'] ?? $pack_key),
        'release' => (int) ($payload['release'] ?? 1),
    ];
    set_transient('ms_np_meta_' . $pack_key, $meta, 10 * MINUTE_IN_SECONDS);
    return $meta;
}

/** A product saved or published: the cached shop pages and pack details are dropped at once. */
add_action('save_post_product', 'ms_np_flush_caches');
function ms_np_flush_caches(): void
{
    global $wpdb;
    $wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '\_transient\_ms\_np\_url\_%' OR option_name LIKE '\_transient\_timeout\_ms\_np\_url\_%' OR option_name LIKE '\_transient\_ms\_np\_meta\_%' OR option_name LIKE '\_transient\_timeout\_ms\_np\_meta\_%'");
    wp_cache_flush_group('transient');
}

/** The shop page of a pack: the product with this _ms_np_key (not the bundle). */
function ms_np_pack_url(string $pack_key): string
{
    $cached = get_transient('ms_np_url_' . $pack_key);
    if (is_string($cached)) {
        return $cached;
    }
    $url = MS_NP_SHOP_PAGE;
    $ids = wc_get_products(['meta_key' => '_ms_np_key', 'meta_value' => $pack_key, 'limit' => 1, 'return' => 'ids']);
    if ($ids) {
        $url = (string) get_permalink($ids[0]);
    }
    set_transient('ms_np_url_' . $pack_key, $url, HOUR_IN_SECONDS);
    return $url;
}

// --------------------------------------------------------------------------- binding

/** Where a key's installations (and its binding log) are kept: user meta, or the first order of a guest. */
function ms_np_instances(array $owner, string $meta = MS_NP_INSTANCES_META): array
{
    if ($owner['user_id']) {
        $list = get_user_meta($owner['user_id'], $meta, true);
    } else {
        $list = $owner['orders'] ? $owner['orders'][0]->get_meta($meta) : [];
    }
    return is_array($list) ? $list : [];
}

function ms_np_save_instances(array $owner, array $list, string $meta = MS_NP_INSTANCES_META): void
{
    if ($owner['user_id']) {
        update_user_meta($owner['user_id'], $meta, $list);
    } elseif ($owner['orders']) {
        $owner['orders'][0]->update_meta_data($meta, $list);
        $owner['orders'][0]->save();
    }
}

/**
 * Binds an installation to the key. Already bound: fine. A new one is allowed while fewer than
 * MS_NP_BINDINGS_PER_YEAR new bindings happened in the last 365 days; at most MS_NP_MAX_INSTANCES stay
 * bound at once, the oldest one drops out (a move to new hardware just works). False at the limit.
 */
function ms_np_bind_instance(array $owner, string $instance): bool
{
    $list = ms_np_instances($owner);
    foreach ($list as $entry) {
        if (($entry['fp'] ?? '') === $instance) {
            return true;
        }
    }
    $year_ago = time() - 365 * DAY_IN_SECONDS;
    // the log counts every new binding of the year, also ones that dropped out of the list since;
    // bindings from before the log existed count through their own timestamps
    $log = array_map('intval', ms_np_instances($owner, MS_NP_BIND_LOG_META));
    if (!$log) {
        $log = array_map(fn ($e) => (int) ($e['at'] ?? 0), $list);
    }
    $log = array_values(array_filter($log, fn ($t) => $t > $year_ago));
    if (count($log) >= MS_NP_BINDINGS_PER_YEAR) {
        return false;
    }
    $list[] = ['fp' => $instance, 'at' => time()];
    while (count($list) > MS_NP_MAX_INSTANCES) {
        array_shift($list);
    }
    $log[] = time();
    ms_np_save_instances($owner, $list);
    ms_np_save_instances($owner, $log, MS_NP_BIND_LOG_META);
    return true;
}

/** The installation a key was bound to last (for downloads from the website), or null. */
function ms_np_latest_instance_of_key(string $key): ?string
{
    $owner = ms_np_find_license($key);
    if (!$owner) {
        return null;
    }
    $list = ms_np_instances($owner);
    $last = end($list);
    return $last && !empty($last['fp']) ? (string) $last['fp'] : null;
}

// ------------------------------------------------------------------------------ REST

add_action('rest_api_init', function (): void {
    register_rest_route('neonplan/v1', '/catalog', [
        'methods' => 'POST',
        'callback' => 'ms_np_rest_catalog',
        'permission_callback' => '__return_true',
    ]);
    register_rest_route('neonplan/v1', '/pack', [
        'methods' => 'POST',
        'callback' => 'ms_np_rest_pack',
        'permission_callback' => '__return_true',
    ]);
});

/** Validates key and instance of a request; returns [owner, key, instance] or a WP_Error. */
function ms_np_rest_auth(WP_REST_Request $req)
{
    $ip = (string) ($_SERVER['REMOTE_ADDR'] ?? '');
    $bucket = 'ms_np_rate_' . md5($ip);
    $count = (int) get_transient($bucket);
    if ($count >= MS_NP_RATE_LIMIT) {
        return new WP_Error('ms_np_rate_limit', 'Too many requests', ['status' => 429]);
    }
    set_transient($bucket, $count + 1, HOUR_IN_SECONDS);

    $key = strtoupper(trim((string) $req->get_param('key')));
    $instance = strtolower(trim((string) $req->get_param('instance')));
    if (!preg_match('/^NP(-[A-Z0-9]{4}){4}$/', $key) || !preg_match('/^[0-9a-f]{16}$/', $instance)) {
        return new WP_Error('ms_np_invalid_key', 'Unknown key', ['status' => 404]);
    }
    $owner = ms_np_find_license($key);
    if (!$owner) {
        return new WP_Error('ms_np_invalid_key', 'Unknown key', ['status' => 404]);
    }
    if (!ms_np_bind_instance($owner, $instance)) {
        return new WP_Error('ms_np_activation_limit', 'This key is already bound to the allowed number of installations', ['status' => 403]);
    }
    return [$owner, $key, $instance];
}

function ms_np_rest_catalog(WP_REST_Request $req)
{
    $auth = ms_np_rest_auth($req);
    if (is_wp_error($auth)) {
        return $auth;
    }
    [$owner] = $auth;
    $packs = [];
    foreach (ms_np_owned_pack_keys($owner) as $pack_key) {
        $meta = ms_np_pack_meta($pack_key);
        if ($meta) {
            $packs[] = ['id' => $meta['id'], 'name' => $meta['name'], 'release' => $meta['release'], 'url' => ms_np_pack_url($pack_key)];
        }
    }
    return new WP_REST_Response(['licensee' => mb_substr($owner['name'], 0, 80), 'packs' => $packs]);
}

function ms_np_rest_pack(WP_REST_Request $req)
{
    $auth = ms_np_rest_auth($req);
    if (is_wp_error($auth)) {
        return $auth;
    }
    [$owner, , $instance] = $auth;
    $wanted = (string) $req->get_param('pack');
    foreach (ms_np_owned_pack_keys($owner) as $pack_key) {
        $meta = ms_np_pack_meta($pack_key);
        if (!$meta || $meta['id'] !== $wanted) {
            continue;
        }
        $body = ms_np_signed_pack($pack_key, mb_substr($owner['name'], 0, 80), $instance);
        if ($body === null) {
            return new WP_Error('ms_np_not_found', 'Pack file missing', ['status' => 404]);
        }
        nocache_headers();
        header('Content-Type: application/json; charset=utf-8');
        header('Content-Length: ' . strlen($body));
        echo $body;
        exit;
    }
    return new WP_Error('ms_np_not_owned', 'This pack is not in the account', ['status' => 403]);
}

/** The pack file signed for a buyer and (optionally) an installation; null without seed or template. */
function ms_np_signed_pack(string $pack_key, string $name, ?string $instance): ?string
{
    if (!defined('MS_NP_SIGNING_SEED') || !function_exists('sodium_crypto_sign_seed_keypair')) {
        return null;
    }
    $uploads = wp_upload_dir();
    $template = trailingslashit($uploads['basedir']) . MS_NP_UPLOAD_DIR . '/' . $pack_key . '.canonical.json';
    if (!is_readable($template)) {
        return null;
    }
    $payload = ms_np_put_licensee((string) file_get_contents($template), $name);
    if ($payload === null) {
        return null;
    }
    if ($instance !== null) {
        $payload = ms_np_put_instance($payload, $instance);
        if ($payload === null) {
            return null;
        }
    }
    $seed = base64_decode(MS_NP_SIGNING_SEED, true);
    if ($seed === false || strlen($seed) !== SODIUM_CRYPTO_SIGN_SEEDBYTES) {
        return null;
    }
    $keypair = sodium_crypto_sign_seed_keypair($seed);
    $sig = sodium_crypto_sign_detached($payload, sodium_crypto_sign_secretkey($keypair));
    return '{"payload":' . $payload . ',"signature":{"key":"' . MS_NP_KEY_ID . '","sig":"' . base64_encode($sig) . '"}}';
}

/**
 * Puts the installation's fingerprint into the canonical template: the LAST "instance":null belongs
 * to the pack itself (items come after it, but carry no such key). Templates made before binding
 * existed have no marker: they stay unbound.
 */
function ms_np_put_instance(string $canonical, string $instance): ?string
{
    if (!preg_match('/^[0-9a-f]{16}$/', $instance)) {
        return null;
    }
    $marker = '"instance":null';
    $at = strrpos($canonical, $marker);
    if ($at === false) {
        return $canonical;
    }
    return substr($canonical, 0, $at) . '"instance":"' . $instance . '"' . substr($canonical, $at + strlen($marker));
}
