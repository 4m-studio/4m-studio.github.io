# AvatarTracker's 3D characters on the web

Both 3D characters share one bundle, `assets/js/avatar3d.js` (the characters plus only the parts of
three.js they use, ~130 KB gzipped). The AvatarTracker page fetches it the first time someone picks
Mochi or Taro, never before, and only once for both.

- `mochi3d.src.js` — Mochi, a port of the app's `PrimitiveChibiBody.swift` (shapes, colours,
  outlines, face, arms) plus the lights and camera from `RealityAvatarRenderer.swift`.
- `taro.js` — Taro, the app's own three.js mirror of `PrimitiveCatBody.swift`
  (`AvatarTracker/Tools/taro3d/taro.js`), copied unchanged. When the app's copy changes, copy it
  again and rebuild.
- `taro3d.src.js` — the renderer, lights and camera around Taro, and the page's pose turned into his.
- `avatar3d.src.js` — the bundle's entry.

To rebuild after changing any of them:

```sh
cd tools/avatar3d
npm install
npm run build
cd ../.. && python3 tools/build.py
```
