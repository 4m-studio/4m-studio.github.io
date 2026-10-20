/* AvatarTracker's 3D characters for the web, in one bundle so three.js is
   downloaded once: Mochi (PrimitiveChibiBody), Taro (PrimitiveCatBody),
   MieMie 3D (PrimitiveMieMieBody) and Zhuzhu (PrimitivePigBody). Built into assets/js/avatar3d.js (see
   README.md) and fetched only when someone picks a 3D character on the
   AvatarTracker page.
   AvatarSample B (a modelled VRM, sampleb3d.src.js) needs three-vrm and the glTF
   loader on top, so she is split into her own chunk (assets/js/3d/) that is
   fetched only when she is picked; the parts of three.js the others use are
   shared, not downloaded twice. */
export { createMochi } from './mochi3d.src.js';
export { createTaro3D } from './taro3d.src.js';
export { createMieMie3D } from './miemie3d.src.js';
export { createZhuzhu3D } from './zhuzhu3d.src.js';

// Returns her handle at once (as the others do); `ready` settles when the model is in.
export function createSampleB3D(canvas, view, opts) {
  let inner = null, dead = false, size = null;
  const ready = import('./sampleb3d.src.js').then((m) => {
    if (dead) return;
    inner = m.createSampleB3D(canvas, view, opts);
    if (size) inner.setSize(...size);
    return inner.ready;
  });
  return {
    ready,
    setSize(w, h, dpr) { size = [w, h, dpr]; if (inner) inner.setSize(w, h, dpr); },
    apply(p, dt) { if (inner) inner.apply(p, dt); },
    render() { if (inner) inner.render(); },
    dispose() { dead = true; if (inner) inner.dispose(); }
  };
}
