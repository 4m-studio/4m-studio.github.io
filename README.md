# 4M Studio — website

A static, dependency-free marketing site for **4M Studio** and its iOS apps
(AvatarTracker, Wearly, WorthView, StoryReel, MeetLog, QQNest). Built to be dropped straight onto GitHub Pages.

No build step, no framework, no npm install.

---

## 1. Files

```
4m-studio/
├── index.html              ← the whole homepage
├── 404.html                ← custom not-found page
├── robots.txt
├── sitemap.xml
├── .nojekyll               ← tells GitHub Pages to serve files as-is
├── privacy/
│   ├── avatartracker.html  ← App Store privacy URL for AvatarTracker
│   ├── wearly.html
│   ├── worthview.html
│   ├── storyreel.html
│   ├── meetlog.html
│   └── qqnest.html
└── assets/
    ├── css/main.css        ← all styling; design tokens at the top
    ├── js/main.js          ← nav, scroll reveals, counters, parallax
    ├── js/miemie.js        ← the live MieMie character in the AvatarTracker card
    └── img/
        ├── favicon.svg
        ├── og.svg / og.jpg ← social share image (1200×630)
        ├── miemie/*.webp   ← MieMie's 36 rig layers (from MieMie.avatarpkg, half size)
        ├── icon-avatartracker.png ← real app icon (from the Xcode asset catalog)
        ├── icon-wearly.svg ← real app icon (Wearly/Design/AppIcon.svg)
        ├── icon-worthview.svg ← PLACEHOLDER in the same orange family
        ├── icon-storyreel.svg
        ├── icon-meetlog.svg
        └── icon-qqnest.svg
```

---

## 2. Deploy to GitHub Pages

### Option A — browser only (no terminal)

1. Go to <https://github.com/new>, name the repo **`4m-studio`**, make it
   **Public**, and click *Create repository*.
2. On the new repo page click **uploading an existing file**.
3. Drag in *everything inside* the `4m-studio` folder — `index.html`, the
   `assets` folder, the `privacy` folder, and the rest. Commit.
   - GitHub's web uploader hides dotfiles. Add `.nojekyll` afterwards with
     **Add file → Create new file**, name it `.nojekyll`, leave it empty, commit.
4. **Settings → Pages**. Under *Build and deployment*, set Source to
   **Deploy from a branch**, branch **`main`**, folder **`/ (root)`**. Save.
5. Wait ~1 minute. Your site is live at:
   `https://YOUR-USERNAME.github.io/4m-studio/`

### Option B — command line

```bash
cd 4m-studio
git init -b main
git add -A
git commit -m "4M Studio website"
gh repo create 4m-studio --public --source=. --push
# then: Settings → Pages → Deploy from branch → main → / (root)
```

Or, with the `gh` CLI doing the Pages bit too:

```bash
gh api -X POST repos/:owner/4m-studio/pages -f "source[branch]=main" -f "source[path]=/"
```

### Want the URL to be `https://YOUR-USERNAME.github.io/` (no `/4m-studio`)?

Name the repo **`YOUR-USERNAME.github.io`** instead. Everything else is identical.

### Custom domain (e.g. `4mstudio.app`)

1. Create a file named `CNAME` in the repo root containing just: `4mstudio.app`
2. At your DNS provider add four `A` records for the apex pointing to
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`,
   and a `CNAME` for `www` → `YOUR-USERNAME.github.io`.
3. **Settings → Pages → Custom domain**, enter the domain, tick *Enforce HTTPS*.

---

## 3. Before you publish — the placeholder checklist

Everything below is invented copy meant to be replaced. Search-and-replace makes
short work of it.

| Find | Where | Replace with |
|---|---|---|
| `YOUR-USERNAME` | `index.html`, `robots.txt`, `sitemap.xml` | your GitHub username |
| `hello@4mstudio.app` | `index.html`, footer, privacy pages | your real support address |
| `privacy@4mstudio.app` | `privacy/*.html` | your real privacy address |
| `href="#"` on App Store buttons | `index.html` (6 places) | real App Store URLs |
| Hero stats (6 / 120K+ / 4.8★) | `index.html`, `data-count` attributes | your real numbers, or delete the block |
| App descriptions & feature bullets | `index.html` | what the apps actually do |
| The six "Updates" cards | `index.html` | real release notes, or delete the section |
| WorthView's `$248,310` demo figures | `index.html` WorthView mock-up | keep (labelled demo data) or change |
| `icon-worthview.svg` | `assets/img/` | the real WorthView icon |
| The four **M** values | `index.html` `.values` | what the 4 Ms actually stand for |

**Privacy pages:** each one carries a yellow *Template notice* box. Read the
policy against what your app really does, fix anything that doesn't match,
then delete that box. It is a starting point, not legal advice.

**App icons:** `assets/img/icon-*.svg` are placeholders. Drop in your real
1024×1024 icons as PNG and update the three `<img src>` values in `index.html`
(and the one in each privacy page).

**Screenshots:** the phone mock-ups are drawn in HTML/CSS (`.screen-ui` blocks).
To use real screenshots instead, replace the `<div class="screen-ui">…</div>`
inside a `.phone__screen` with
`<img src="assets/img/shot-storyreel.png" alt="" style="width:100%;height:100%;object-fit:cover">`.

---

## 4. MieMie (AvatarTracker card)

`assets/js/miemie.js` is a small browser port of AvatarTracker's
`Layered2DAvatarRenderer`, using the same `MieMie.avatarpkg` rig: layer
rectangles, head pivot, eye apertures and arm skeleton are copied from its
`avatar.json` (1024×1920 canvas) into the `L`, `HEAD_PIVOT`, `APERTURE` and
`ARM` tables at the top.

- **Looks at the pointer** — head roll, 2.5D face parallax, irises clipped to
  each eye's aperture, back hair counter-moves, front hair lags on a spring.
- **Blinks** on her own (lid fades in, then the open eye fades out — the same
  sequencing as the app).
- **Click / tap / Enter** cycles through gestures; the emoji row triggers one
  directly: wave, heart, peace, thumbs up, clap, dance, excited, shy. She waves
  once by herself the first time she scrolls into view.
- Arms are posed with two-bone IK from a wrist target, so a new gesture is just
  a few numbers in `GESTURES` (wrist x/y in canvas px, hand drawing, expression).
- Pauses when off screen; with *reduce motion* on she holds still and gestures
  jump to their key pose.

To refresh the art after re-exporting MieMie, convert each
`MieMie.avatarpkg/layers/*.png` to WebP at 50% (the rig coordinates don't
change) and drop them into `assets/img/miemie/`. If a layer's rectangle moves in
`avatar.json`, update its row in `L`.

---

## 5. Changing the look

All colours, radii and motion live in the `:root` block at the top of
`assets/css/main.css`:

```css
--brand:      #7c5cff;   /* primary accent          */
--brand-2:    #ff4d8d;   /* gradient partner        */
--brand-grad: linear-gradient(115deg, …);  /* used for every gradient text/button */
--storyreel:  linear-gradient(…);  /* per-app accent */
--meetlog:    linear-gradient(…);
--qqnest:     linear-gradient(…);
--avatartracker / --wearly / --worthview: linear-gradient(…);
```

Change those six values and the entire site re-themes — buttons, glows, icons
backgrounds, card auras and all.

To add a fourth app: copy one `<article class="app-card">` block in
`index.html`, give it `style="--accent: var(--yourapp)"`, and define
`--yourapp` in `:root`.

---

## 6. Notes

- Works offline and without JavaScript — JS only adds motion and the counters.
- Honours `prefers-reduced-motion`; all animation is disabled for users who ask.
- Fully responsive down to 320px, mobile nav included.
- About 420 KB in total (MieMie's layers are ~200 KB of that), no external requests, no trackers.
- Local preview: `python3 -m http.server 8000` inside the folder, then open
  <http://localhost:8000>.
