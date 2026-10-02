# Mochi on the web

`mochi3d.src.js` is a port of the app's `PrimitiveChibiBody.swift` (shapes, colours, outlines,
face, arms) plus the lights and camera from `RealityAvatarRenderer.swift`, written for three.js.

The site loads the bundled file `assets/js/mochi3d.js` (Mochi plus only the parts of three.js
it uses, ~130 KB gzipped), and only when someone picks Mochi on the AvatarTracker page.

To rebuild it after changing `mochi3d.src.js`:

```sh
cd tools/mochi
npm install
npm run build
cd ../.. && python3 tools/build.py
```
