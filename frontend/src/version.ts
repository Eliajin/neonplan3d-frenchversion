// Comparing integration versions ("1.8.3"), to tell a stale page from a backend that waits for a restart.

/** Whether version a is newer than b (numeric parts; anything else counts as 0). */
export function isNewer(a: string, b: string): boolean {
  const pa = a.split(".").map((p) => parseInt(p, 10) || 0);
  const pb = b.split(".").map((p) => parseInt(p, 10) || 0);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (d) return d > 0;
  }
  return false;
}
