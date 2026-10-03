# NeonPlan 3D – notes for Claude

- Spec and phase plan: `docs/plan.md` (German). This is the French fork (`Eliajin/neonplan3d-frenchversion`): talk to the user in French; code, identifiers and comments in English.
- French UI strings live in `frontend/src/i18n-fr.ts`; every new key in `i18n.ts` needs a French entry there (the typecheck enforces it).
- After merging a release of the original, raise `UPSTREAM_BASE_VERSION` in `const.py` to it (upstream.py warns while the original is ahead).
- Domain `neonplan3d`, repo `mastershort/neonplan3d`, minimum Home Assistant 2025.1.
- Frontend lives in `frontend/` (Lit 3 + TypeScript, no decorators; three.js in a separate lazily loaded bundle).
  Bundles are committed to `custom_components/neonplan3d/frontend/`, and CI fails when they are stale, so run `npm run build` before committing.
- Checks: `npm test`, `npm run typecheck`, `npm run build` (size budgets), `ruff check` / `ruff format`.
  HA integration tests only run in the Linux CI.
- Visual self-check: `npm run screenshot` renders `preview/index.html` (invented demo data, mock hass) into `preview/screenshots/`.
- Deploy to the user's HA: `npm run deploy` (target in the untracked `deploy.local.json`). Never commit real floor plans, IPs or device names.
- After each phase: bump the version in `manifest.json` *before* `npm run build` (the bundle embeds it; a mismatch shows a false "restart Home Assistant" notice), commit, push, check CI, and tell the user in French what is new and how to test it.
