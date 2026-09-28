// Top-view symbols of furniture for the 2D editor, in local metres (x across, z depth, front at +z).
// The editor places them with translate/rotate/scale; strokes keep their width on screen.

import { nothing, svg, type SVGTemplateResult } from "lit";

type Part = SVGTemplateResult;

const rect = (x0: number, z0: number, x1: number, z1: number, cls = "") => svg`<rect class=${cls} x=${Math.min(x0, x1)} y=${Math.min(z0, z1)} width=${Math.abs(x1 - x0)} height=${Math.abs(z1 - z0)} />`;
const line = (x0: number, z0: number, x1: number, z1: number, cls = "") => svg`<line class=${cls} x1=${x0} y1=${z0} x2=${x1} y2=${z1} />`;
const circle = (x: number, z: number, r: number, cls = "") => svg`<circle class=${cls} cx=${x} cy=${z} r=${r} />`;
const ellipse = (x: number, z: number, rx: number, rz: number, cls = "") => svg`<ellipse class=${cls} cx=${x} cy=${z} rx=${rx} ry=${rz} />`;

/** Door or drawer divisions along the front edge. */
function fronts(w: number, d: number, n: number): Part[] {
  const out: Part[] = [];
  for (let i = 1; i < n; i++) {
    const x = -w / 2 + (w / n) * i;
    out.push(line(x, d / 2, x, d / 2 - Math.min(0.12, d * 0.3)));
  }
  return out;
}

function seating(w: number, d: number, seats: number, arms: boolean): Part[] {
  const back = Math.min(0.24, d * 0.28);
  const arm = arms ? Math.min(0.2, w * 0.12) : 0;
  const out: Part[] = [rect(-w / 2, -d / 2, w / 2, -d / 2 + back, "fp3d-sym-fill")];
  if (arms) out.push(rect(-w / 2, -d / 2, -w / 2 + arm, d / 2, "fp3d-sym-fill"), rect(w / 2 - arm, -d / 2, w / 2, d / 2, "fp3d-sym-fill"));
  const inner = w - 2 * arm;
  for (let i = 1; i < seats; i++) {
    const x = -w / 2 + arm + (inner / seats) * i;
    out.push(line(x, -d / 2 + back, x, d / 2 - 0.02));
  }
  return out;
}

/** Symbol parts for a furniture type of size w × d (metres). */
export function furnitureSymbol(type: string, w: number, d: number): Part[] | typeof nothing {
  switch (type) {
    case "sofa":
      return seating(w, d, Math.max(1, Math.round((w - 0.4) / 0.62)), true);
    case "armchair":
      return seating(w, d, 1, true);
    case "bench":
      return [rect(-w / 2, -d / 2, w / 2, -d / 2 + 0.08, "fp3d-sym-fill")];
    case "corner_bench": {
      const depth = Math.min(0.5, d * 0.4);
      return [
        rect(-w / 2, -d / 2, w / 2, -d / 2 + 0.08, "fp3d-sym-fill"),
        rect(-w / 2, -d / 2, -w / 2 + 0.08, d / 2, "fp3d-sym-fill"),
        line(-w / 2 + depth, -d / 2 + depth, w / 2, -d / 2 + depth),
        line(-w / 2 + depth, -d / 2 + depth, -w / 2 + depth, d / 2),
      ];
    }
    case "chair":
      return [rect(-w / 2, -d / 2, w / 2, -d / 2 + 0.06, "fp3d-sym-fill")];
    case "office_chair":
      return [circle(0, 0.03, Math.min(w, d) * 0.36), rect(-w * 0.35, -d / 2 + 0.02, w * 0.35, -d / 2 + 0.1, "fp3d-sym-fill")];
    case "bar_stool":
    case "table_round":
      return [circle(0, 0, Math.min(w, d) * 0.42)];
    case "stool":
      return [rect(-w / 2 + 0.04, -d / 2 + 0.04, w / 2 - 0.04, d / 2 - 0.04)];
    case "table":
    case "coffee_table":
    case "desk": {
      const out = [rect(-w / 2 + 0.05, -d / 2 + 0.05, w / 2 - 0.05, d / 2 - 0.05)];
      if (type === "desk") out.push(line(-0.3, -d / 2 + 0.1, 0.3, -d / 2 + 0.1, "fp3d-sym-strong"));
      return out;
    }
    case "bed":
    case "bunk_bed": {
      const pillows = w > 1.2 ? 2 : 1;
      const pw = (w - 0.2) / pillows;
      const out: Part[] = [rect(-w / 2, -d / 2, w / 2, -d / 2 + 0.07, "fp3d-sym-fill"), line(-w / 2, -d / 2 + (d - 0.1) * 0.36, w / 2, -d / 2 + (d - 0.1) * 0.36)];
      for (let i = 0; i < pillows; i++) out.push(rect(-w / 2 + 0.13 + pw * i, -d / 2 + 0.12, -w / 2 + 0.07 + pw * (i + 1), -d / 2 + 0.12 + Math.min(0.4, d * 0.18)));
      return out;
    }
    case "nightstand":
    case "wardrobe":
    case "dresser":
    case "sideboard":
    case "tall_cabinet":
    case "kitchen":
    case "kitchen_wall":
    case "kitchen_tall":
    case "shelf":
      return fronts(w, d, type === "nightstand" || type === "tall_cabinet" || type === "kitchen_tall" ? 1 : Math.max(2, Math.round(w / 0.5)));
    case "coat_rack":
      return [rect(-w / 2, -d / 2, w / 2, -d / 2 + 0.03, "fp3d-sym-fill"), ...fronts(w, d, Math.max(2, Math.round(w / 0.5)))];
    case "island":
      // cabinets on the back side, overhanging worktop on the front
      return [line(-w / 2, d / 2 - 0.3, w / 2, d / 2 - 0.3)];
    case "fridge":
      return [line(-w / 2 + 0.06, d / 2 - 0.04, w / 2 - 0.06, d / 2 - 0.04, "fp3d-sym-strong")];
    case "stove": {
      const r = Math.min(w, d) * 0.14;
      return [circle(-w * 0.22, -d * 0.2, r), circle(w * 0.22, -d * 0.2, r * 0.8), circle(-w * 0.22, d * 0.2, r * 0.8), circle(w * 0.22, d * 0.2, r)];
    }
    case "sink": {
      const bw = Math.min(0.5, w - 0.2);
      return [rect(-bw / 2, -d / 2 + 0.1, bw / 2, d / 2 - 0.08), circle(0, -d / 2 + 0.06, 0.025, "fp3d-sym-fill")];
    }
    case "dishwasher":
      return [line(-w / 2 + 0.08, d / 2 - 0.05, w / 2 - 0.08, d / 2 - 0.05, "fp3d-sym-strong")];
    case "washer":
    case "dryer":
      return [circle(0, 0.05, Math.min(w, d) * 0.3), line(-w / 2, -d / 2 + 0.1, w / 2, -d / 2 + 0.1)];
    case "bathtub":
      return [rect(-w / 2 + 0.07, -d / 2 + 0.07, w / 2 - 0.07, d / 2 - 0.07), circle(-w / 2 + 0.14, 0, 0.03, "fp3d-sym-fill")];
    case "shower":
      return [line(-w / 2, -d / 2, w / 2, d / 2), line(w / 2, -d / 2, -w / 2, d / 2), circle(0, 0, 0.04)];
    case "wc":
      return [rect(-w / 2, -d / 2, w / 2, -d / 2 + Math.min(0.18, d * 0.3), "fp3d-sym-fill"), ellipse(0, d * 0.1, w * 0.36, d * 0.3)];
    case "washbasin":
      return [ellipse(0, 0.03, w * 0.34, d * 0.3)];
    case "tv_board":
      return [line(-Math.min(w * 0.4, 0.72), -d / 2 + 0.14, Math.min(w * 0.4, 0.72), -d / 2 + 0.14, "fp3d-sym-strong"), ...fronts(w, d, Math.max(2, Math.round(w / 0.6)))];
    case "tv_wall":
      return [line(-w / 2, 0, w / 2, 0, "fp3d-sym-strong")];
    case "plant":
      return [circle(0, 0, Math.min(w, d) * 0.46), circle(0, 0, Math.min(w, d) * 0.25)];
    case "rug":
      return [rect(-w / 2 + 0.1, -d / 2 + 0.1, w / 2 - 0.1, d / 2 - 0.1)];
    case "stairs": {
      // steps and an arrow pointing up the stair (towards the back)
      const n = Math.max(3, Math.round(d / 0.26));
      const out: Part[] = [];
      for (let i = 1; i < n; i++) out.push(line(-w / 2, d / 2 - (d / n) * i, w / 2, d / 2 - (d / n) * i));
      out.push(line(0, d / 2 - 0.1, 0, -d / 2 + 0.25, "fp3d-sym-strong"), line(-0.15, -d / 2 + 0.45, 0, -d / 2 + 0.25, "fp3d-sym-strong"), line(0.15, -d / 2 + 0.45, 0, -d / 2 + 0.25, "fp3d-sym-strong"));
      return out;
    }
    default:
      return nothing;
  }
}
