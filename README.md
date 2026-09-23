# 4M Studio — website

The marketing site for **4M Studio** and its iOS apps — AvatarTracker, StoryReel,
MeetLog, QQNest (鹊巢), Wearly (衣见) and WorthView — in **English and 中文**.
Live at <https://4m-studio.github.io/>, served by GitHub Pages from `main`.

Plain static HTML, CSS and JS. The pages are generated from two JSON files by a
small Python script that uses only the standard library — nothing to install.

---

## 1. Editing the site

```bash
# 1. change text in content/apps.json or content/site.json
# 2. rebuild every page
python3 tools/build.py
# 3. preview
python3 -m http.server 8000      # → http://localhost:8000
# 4. publish
git add -A && git commit -m "Update site" && git push
```

**Never edit the generated HTML by hand** (`index.html`, `zh/`, `apps/`,
`privacy/`, `404.html`, `sitemap.xml`, `robots.txt`) — the next build overwrites
it. Change the content files or `tools/build.py` instead.

| To change… | Edit |
|---|---|
| An app's name, tagline, headline, description, features, privacy bullets, requirements, news card | `content/apps.json` |
| An App Store link | `"appStore"` in `content/apps.json` — while empty, the button reads "Coming soon" instead of linking nowhere |
| Nav, section titles, studio copy, footer, button labels (both languages) | `content/site.json` → `"t"` |
| Support email, GitHub link, site URL | top of `content/site.json` |
| A privacy policy | `content/privacy/<slug>.html` (English) |
| Phone mock-up contents | `mock()` in `tools/build.py` |
| Colours, spacing, motion | `assets/css/main.css` (tokens at the top) |

Every text field is `{"en": "…", "zh": "…"}`. Headlines may contain
`<br>` and `<span class="grad-text">…</span>` (the gradient part, tinted with
the app's accent colour).

### Adding an app

1. Add an entry to `content/apps.json` (copy an existing one; `slug` becomes the URL).
2. Add its icon to `assets/img/` and a `--<slug>` accent gradient in `:root` of `main.css`.
3. Add `content/privacy/<slug>.html`.
4. Add a mock-up branch in `mock()` in `tools/build.py` (or reuse `"visual"` of another app).
5. `python3 tools/build.py`. The carousel slide, Apps menu, home grid, app page,
   footer links, sitemap and "More from 4M" rows all appear automatically.

---

## 2. What's on the site

```
/                      home — hero carousel (one slide per app), apps grid, studio, updates, contact
/apps/<slug>/          one page per app: hero, features, privacy at a glance, details, support, more apps
/zh/…                  the same pages in Chinese
/privacy/<slug>.html   privacy policies (English; the Chinese pages link to them marked （英文）)
/404.html              bilingual not-found page
```

- **Hero carousel** (`assets/js/carousel.js`) — arrows, app tabs, swipe/drag,
  ←/→ keys, deep links (`/#slide-wearly`). No autoplay, on purpose: the first
  slide is MieMie. Hidden slides are `inert`.
- **Apps menu** — opens on hover, click/tap or ↓; ↑/↓ move through it, Esc
  closes. On phones it's shown inline in the menu.
- **Language** — the globe button switches to the same page in the other
  language and remembers the choice. On a first visit, a Chinese-language
  browser is sent from `/` to `/zh/` once. Every page declares `hreflang`
  alternates, and the sitemap lists both languages.

## 3. MieMie

`assets/js/miemie.js` is a browser port of AvatarTracker's
`Layered2DAvatarRenderer`, driven by the same `MieMie.avatarpkg` rig (layer
rectangles, head pivot, eye apertures and arm skeleton copied from its
`avatar.json`, 1024×1920 canvas). Her 36 layers are WebP files in
`assets/img/miemie/` (~200 KB).

- She stands in a tilted glass frame that starts at chin height, so her head and
  raised arms break out over its top edge; the frame tilts with her gaze while
  she stays square to the viewer — that's the pop-out 3D effect. Change where
  the frame starts with `data-frame-top` (canvas px) in `miemie()` in `build.py`.
- Looks at the pointer, blinks, hair lags on a spring.
- Click/tap/Enter cycles gestures; the emoji row picks one: wave, finger heart,
  big heart, peace, thumbs up, clap, dance, excited, shy. New gestures are a few
  numbers in `GESTURES` (wrist targets in canvas px → two-bone IK). Keep hand
  targets for "hand by the face" poses out at shoulder height — her arms are
  long, and closer in the IK can only fold with the elbow up.
- Pauses off screen; with *Reduce Motion* she holds still and gestures jump to
  their key pose.

To refresh the art: convert each `MieMie.avatarpkg/layers/*.png` to WebP at 50%
into `assets/img/miemie/`. If a layer's rectangle changes in `avatar.json`,
update its row in the `L` table.

## 4. Before launch — still placeholder

| What | Where |
|---|---|
| `hello@4mstudio.app` / `privacy@4mstudio.app` | `content/site.json`, `content/privacy/*.html` |
| App Store links | `"appStore"` in `content/apps.json` |
| News dates and copy | `"news"` in `content/apps.json` |
| The four **M** values | `v1_t` … `v4_b` in `content/site.json` |
| WorthView icon | `assets/img/icon-worthview.svg` (placeholder in the house style) |
| Privacy policies | each has a yellow *Template notice* — review against the app, then delete the box |

## 5. Hosting notes

- Repo `4m-studio/4m-studio.github.io`, Pages source `main` / root. `.nojekyll`
  makes Pages serve files as-is.
- Custom domain later: add a `CNAME` file with the domain, point DNS at GitHub
  Pages, set `"baseUrl"` in `content/site.json`, rebuild.
- No external requests, no trackers, no cookies. `localStorage` only remembers
  the language choice.
