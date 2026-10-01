"""How often NeonPlan 3D was installed or updated through HACS: the download counts of the
neonplan3d.zip asset of every GitHub release (HACS downloads exactly this file).

    python tools/downloads.py            (needs the GitHub CLI "gh", logged in)

Each install and each update counts once; the sum over all releases is therefore "installs + updates",
the newest release's count roughly the installations that are up to date.
"""

from __future__ import annotations

import json
import subprocess

REPO = "Mastershort/neonplan3d"


def main() -> None:
    out = subprocess.run(
        ["gh", "api", f"repos/{REPO}/releases", "--paginate"], check=True, capture_output=True, text=True
    ).stdout
    releases = json.loads(out)
    total = 0
    print(f"{'Release':<12} {'Datum':<12} {'Downloads':>10}")
    for r in releases:
        n = sum(a["download_count"] for a in r.get("assets", []) if a["name"].endswith(".zip"))
        total += n
        print(f"{r['tag_name']:<12} {r['published_at'][:10] if r.get('published_at') else 'Entwurf':<12} {n:>10}")
    print(f"{'Summe':<25} {total:>10}")


if __name__ == "__main__":
    main()
