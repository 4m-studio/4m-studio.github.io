/* AvatarTracker's 3D characters for the web, in one bundle so three.js is
   downloaded once: Mochi (PrimitiveChibiBody), Taro (PrimitiveCatBody),
   MieMie 3D (PrimitiveMieMieBody) and Zhuzhu (PrimitivePigBody). Built into assets/js/avatar3d.js (see
   README.md) and fetched only when someone picks a 3D character on the
   AvatarTracker page. */
export { createMochi } from './mochi3d.src.js';
export { createTaro3D } from './taro3d.src.js';
export { createMieMie3D } from './miemie3d.src.js';
export { createZhuzhu3D } from './zhuzhu3d.src.js';
