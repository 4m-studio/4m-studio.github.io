# AvatarTracker's 3D characters on the web

All four 3D characters share one bundle, `assets/js/avatar3d.js` (the characters plus only the parts
of three.js they use). The AvatarTracker page fetches it the first time someone picks Mochi, Taro,
MieMie 3D or Zhuzhu, never before, and only once for all of them.

- `mochi3d.src.js` — Mochi, a port of the app's `PrimitiveChibiBody.swift` (shapes, colours,
  outlines, face, arms) plus the lights and camera from `RealityAvatarRenderer.swift`.
- `taro.js` — Taro, the app's own three.js mirror of `PrimitiveCatBody.swift`
  (`AvatarTracker/Tools/taro3d/taro.js`), copied unchanged. When the app's copy changes, copy it
  again and rebuild.
- `taro3d.src.js` — the renderer, lights and camera around Taro, and the page's pose turned into his.
- `miemie.js` — MieMie 3D, the app's own three.js mirror of `PrimitiveMieMieBody.swift`
  (`AvatarTracker/Tools/miemie3d/miemie.js`), copied unchanged. When the app's copy changes, copy it
  again and rebuild.
- `miemie3d.src.js` — the renderer, lights and camera around her, and the page's wrist targets turned
  into her two arm angles (2-bone IK, elbow out and low, as Mochi's).
- `pig.js` — Zhuzhu, the app's own three.js mirror of `PrimitivePigBody.swift`
  (`AvatarTracker/Tools/pig3d/pig.js`), copied unchanged. When the app's copy changes, copy it
  again and rebuild.
- `zhuzhu3d.src.js` — the renderer, lights (the app's render-tool levels, as MieMie 3D's) and camera
  around her, and the page's pose turned into her stub arms (as Taro's).
- `avatar3d.src.js` — the bundle's entry.

To rebuild after changing any of them:

```sh
cd tools/avatar3d
npm install
npm run build
cd ../.. && python3 tools/build.py
```
