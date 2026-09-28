// Shader patch that hides folded wall parts on the GPU. Geometry carries a "fold" attribute (see
// build.ts); a per-floor bit mask says which wall buckets currently stand. Hidden vertices are moved
// outside the clip volume, so their triangles and lines are dropped before rasterising.

import type { Material } from "three";

export interface FoldMask {
  value: number;
}

export function makeFoldable<T extends Material>(material: T, mask: FoldMask): T {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uStanding = mask;
    shader.vertexShader = shader.vertexShader.replace("#include <common>", "#include <common>\nattribute float fold;\nuniform int uStanding;").replace(
      "#include <project_vertex>",
      `#include <project_vertex>
      if (fold > -0.5) {
        int fp3dFold = int(fold + 0.5);
        bool fp3dCutPart = fp3dFold >= 16;
        int fp3dBucket = fp3dCutPart ? fp3dFold - 16 : fp3dFold;
        bool fp3dStanding = ((uStanding >> fp3dBucket) & 1) == 1;
        if (fp3dStanding == fp3dCutPart) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`,
    );
  };
  material.customProgramCacheKey = () => "fp3d-fold";
  return material;
}
