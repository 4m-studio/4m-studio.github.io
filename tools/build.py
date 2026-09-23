#!/usr/bin/env python3
"""
4M Studio — static site generator (Python 3 standard library only).

    python3 tools/build.py

Reads   content/site.json      site-wide strings (English + 中文)
        content/apps.json      one entry per app (English + 中文)
        content/privacy/<slug>(.zh).html, content/legal/terms(.zh).html
Writes  index.html, zh/index.html                    home (hero carousel)
        apps/<slug>/index.html, zh/apps/<slug>/...   one page per app
        privacy/, privacy/<slug>.html, terms/ (+ zh/)  legal pages
        404.html, sitemap.xml, robots.txt

Every page is plain static HTML — GitHub Pages serves the output as is.
Edit the JSON, run the script, commit. Never edit the generated HTML by hand.
"""
import hashlib
import html
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LANGS = ["en", "zh"]
HTML_LANG = {"en": "en", "zh": "zh-CN"}

with open(os.path.join(ROOT, "content", "site.json"), encoding="utf-8") as f:
    SITE = json.load(f)
with open(os.path.join(ROOT, "content", "apps.json"), encoding="utf-8") as f:
    APPS = json.load(f)
BASE = SITE["baseUrl"]
EULA = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
EMAIL = SITE["email"]


def ver(rel):
    """Short content hash for cache-busting: main.css?v=1a2b3c4d.
    Browsers cache CSS/JS (GitHub Pages sends max-age=600); without this a
    visitor can get new HTML with an old stylesheet and a broken layout."""
    with open(os.path.join(ROOT, rel), "rb") as f:
        return hashlib.md5(f.read()).hexdigest()[:8]


def T(key, lang, **kw):
    s = SITE["t"][key][lang]
    for k, v in kw.items():
        s = s.replace("{" + k + "}", str(v))
    return s


def L(obj, lang):
    """Pick one language out of an {en, zh} object (or return plain values)."""
    return obj[lang] if isinstance(obj, dict) and lang in obj else obj


def esc(s):
    return html.escape(s, quote=True)


# Every app has an English and a Chinese name. English pages show only the
# English name, Chinese pages only the Chinese one. NM() is plain text,
# NMH() the escaped markup version.
def NM(a, lang):
    return a["name"][lang]


def NMH(a, lang):
    return esc(a["name"][lang])


def month(date, lang):
    y, m = date.split("-")
    if lang == "zh":
        return f"{y} 年 {int(m)} 月"
    return f"{SITE['months']['en'][int(m) - 1]} {y}"


# ---------- paths ----------
# A "page path" is language-neutral: "" (home) or "apps/<slug>/".
def out_file(lang, path):
    prefix = "zh/" if lang == "zh" else ""
    p = prefix + path
    return p + "index.html" if (p == "" or p.endswith("/")) else p


def rel_root(lang, path):
    depth = (1 if lang == "zh" else 0) + path.count("/")
    return "../" * depth


def href(cur_lang, cur_path, lang, path):
    """Relative link from the current page to (lang, path)."""
    return rel_root(cur_lang, cur_path) + ("zh/" if lang == "zh" else "") + path


def abs_url(lang, path):
    return BASE + ("zh/" if lang == "zh" else "") + path


# ---------- shared bits ----------
APPLE = ('<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.9-1.4-.1-2.8.9-3.5.9s-1.8-.9-3-.8c-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.9 2.2 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.3 0 2.1-1.1 2.8-2.2.9-1.2 1.3-2.5 1.3-2.5s-2.4-1-2.5-3.5zM14.2 5.2c.6-.8 1-1.9.9-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-.9 2.9 1 .1 2-.5 2.7-1.3z"/></svg>')
ARROW = ('<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" '
         'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>')
CHEVRON = ('<svg class="chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" '
           'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>')


def app_store_btn(app, lang, small=True):
    cls = "btn btn--primary" + (" btn--sm" if small else "")
    name = NM(app, lang)
    if app.get("appStore"):
        return (f'<a class="{cls}" href="{esc(app["appStore"])}" target="_blank" rel="noopener" '
                f'aria-label="{esc(name)} — App Store">{APPLE} {T("app_store", lang)}</a>')
    # No store link yet: an honest, non-clickable pill instead of href="#".
    return (f'<span class="btn btn--soon{" btn--sm" if small else ""}" aria-disabled="true">'
            f'{APPLE} {T("coming_soon", lang)}</span>')


def icon(app, root, size=76, cls="app-icon"):
    return (f'<img class="{cls}" src="{root}assets/img/{app["icon"]}" alt="" width="{size}" height="{size}" '
            f'style="--accent: var(--{app["accent"]})" loading="lazy" decoding="async">')


# ---------- phone mock-ups (HTML, no images) ----------
def mock(app, lang, cls=""):
    v = app["visual"]
    zh = lang == "zh"
    inner = ""
    if v == "storyreel":
        inner = f'''
            <div class="screen-ui__head">{"京都之旅" if zh else "Kyoto trip"}</div>
            <p class="screen-ui__sub">{"5 个章节 · 86 张照片" if zh else "5 chapters · 86 photos"}</p>
            <div class="route" aria-hidden="true"><svg viewBox="0 0 200 90" preserveAspectRatio="none">
              <path d="M16 70 C 60 10, 110 20, 130 44 S 176 72, 186 24" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="2" stroke-dasharray="4 5"/>
              <circle cx="16" cy="70" r="5" fill="#ff6a3d"/><circle cx="130" cy="44" r="5" fill="#ff2e8b"/><circle cx="186" cy="24" r="5" fill="#a24bff"/></svg></div>
            <div class="tile tile--accent">▶ {"开场 → 路线总览 → 章节 → 结尾" if zh else "Opening → Route → Chapters → Ending"}</div>
            <div class="tile">🎬 {"主题：蓝色星球" if zh else "Theme: Blue Planet"}</div>
            <div class="tile">🎵 {"配乐：旅行 · 0:58" if zh else "Music: Travel · 0:58"}</div>
            <div class="bar"><i style="width:64%"></i></div>'''
    elif v == "meetlog":
        inner = f'''
            <div class="screen-ui__head">{"周会" if zh else "Weekly sync"}</div>
            <p class="screen-ui__sub">{"录音中 · 12:04 · 中英" if zh else "Recording · 12:04 · EN/中文"}</p>
            <div class="wave">{"".join(f'<i style="animation-delay:{i*0.12:.2f}s"></i>' for i in range(12))}</div>
            <div class="tile tile--accent">{"已生成总结 · 2 个决定" if zh else "Summary ready · 2 decisions"}</div>
            <div class="tile tile--tall">☐ {"发送方案" if zh else "Send the deck"}<br>☐ {"确认上线日期" if zh else "Confirm launch date"}<br>? {"定价谁来定？" if zh else "Who owns pricing?"}</div>'''
    elif v == "qqnest":
        inner = f'''
            <div class="screen-ui__head">{"桥鹊的小窝" if zh else "Qiao Que's nest"}</div>
            <p class="screen-ui__sub">{"亲密度 Lv.4 · 心动" if zh else "Bond Lv.4 · Sweetheart"}</p>
            <div class="nest" aria-hidden="true"><span>🐦</span></div>
            <div class="bar"><i style="width:68%"></i></div>
            <div class="tile tile--accent">🍰 {"投喂草莓蛋糕 +12" if zh else "Strawberry cake +12"}</div>
            <div class="tile">🧩 1024 · {"最高分 8,420" if zh else "best 8,420"}</div>
            <div class="tile">🏆 {"今日任务 2/3" if zh else "Daily tasks 2/3"}</div>'''
    elif v == "wearly":
        inner = f'''
            <div class="screen-ui__head">{"今天" if zh else "Today"}</div>
            <p class="screen-ui__sub">☀️ {"16° → 24°C · 10:00 团队会议" if zh else "61° → 76°F · Team meeting 10:00"}</p>
            <div class="outfit" aria-hidden="true">
              <span style="--c:#f4efe6">👚</span><span style="--c:#8fb0d8">👖</span>
              <span style="--c:#e3cfb0">🧥</span><span style="--c:#d8c1a0">👞</span>
            </div>
            <div class="tile tile--accent">{"白衬衫 · 直筒牛仔裤 · 米色乐福鞋" if zh else "White blouse · straight-leg jeans · beige loafers"}</div>
            <div class="tile tile--tall" style="opacity:.82">{"为什么这样穿：开会够得体，晚餐也轻松；天热了开衫可以脱下。" if zh else "Why this works — polished enough for your meeting, relaxed for dinner. The cardigan comes off as it warms up."}</div>
            <div class="tile">↻ {"换一套" if zh else "Show me another"}</div>'''
    elif v == "worthview":
        inner = f'''
            <div class="screen-ui__head">{"总览" if zh else "Overview"}</div>
            <p class="screen-ui__sub">{"净资产 · 演示数据" if zh else "NET WORTH · demo data"}</p>
            <div class="networth">$248,310<small>▲ 2.4% · {"近 30 天" if zh else "30 days"}</small></div>
            <svg class="spark" viewBox="0 0 200 56" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 44 L20 40 L40 42 L60 34 L80 36 L100 28 L120 30 L140 22 L160 24 L180 14 L200 10 L200 56 L0 56Z" fill="rgba(62,224,161,.18)"/>
              <path d="M0 44 L20 40 L40 42 L60 34 L80 36 L100 28 L120 30 L140 22 L160 24 L180 14 L200 10" fill="none" stroke="#3ee0a1" stroke-width="2.4" stroke-linejoin="round"/>
            </svg>
            <div class="tile">🏦 {"储蓄与支票账户 · 只读" if zh else "Checking & savings · Read only"}</div>
            <div class="tile tile--accent">📈 {"券商 · 14 个持仓" if zh else "Brokerage · 14 holdings"}</div>
            <div class="tile">🏠 {"房产" if zh else "Home"} · 🚗 {"汽车 · 手动" if zh else "Car · manual"}</div>'''
    return (f'<div class="phone phone--solo {cls}" style="--accent: var(--{app["accent"]})" aria-hidden="true">'
            f'<div class="phone__screen"><span class="phone__notch"></span><div class="screen-ui">{inner}'
            f'</div></div></div>')


GESTURES = [("wave", "👋"), ("heart", "🫶"), ("bigheart", "💗"), ("peace", "✌️"), ("thumbs", "👍"),
            ("clap", "👏"), ("dance", "💃"), ("surprised", "✨"), ("shy", "😳")]


def miemie(lang, root, width=420):
    buttons = "".join(
        f'<button type="button" data-gesture="{g}" title="{esc(T("g_" + g, lang))}" '
        f'aria-label="{esc(T("g_" + g, lang))}" aria-pressed="false">{e}</button>' for g, e in GESTURES)
    return f'''<div class="miemie" data-miemie data-src="{root}assets/img/miemie/" data-frame-top="640" style="--mm-w:{width}px"
               data-hint-touch="{esc(T("mm_hint_touch", lang))}">
            <div class="mm-stage" tabindex="0" role="button" aria-label="{esc(T("mm_label", lang))}">
              <div class="mm-frame"><span class="mm-live"><i></i>{T("mm_live", lang)}</span></div>
              <span class="mm-bubble" aria-live="polite"></span>
            </div>
            <div class="mm-actions" role="group" aria-label="{esc(T("mm_actions", lang))}">{buttons}</div>
            <p class="mm-hint">{T("mm_hint", lang)}</p>
          </div>'''


def visual(app, lang, root, big=False):
    if app["visual"] == "miemie":
        return miemie(lang, root, 440 if big else 400)
    return f'<div class="solo-stage">{mock(app, lang)}</div>'


# ---------- chrome ----------
def nav(lang, path):
    root = rel_root(lang, path)
    home = href(lang, path, lang, "")
    other = "zh" if lang == "en" else "en"
    items = "".join(
        f'<a class="menu__item" role="menuitem" href="{href(lang, path, lang, "apps/" + a["slug"] + "/")}" '
        f'style="--accent: var(--{a["accent"]})">{icon(a, root, 40, "menu__icon")}'
        f'<span><b>{NMH(a, lang)}{" <em>" + T("hero_new", lang) + "</em>" if a.get("isNew") else ""}</b>'
        f'<small>{esc(L(a["tagline"], lang))}</small></span></a>' for a in APPS)
    return f'''<a class="skip" href="#main">{T("skip", lang)}</a>
<header class="nav">
  <div class="wrap nav__inner">
    <a class="brand" href="{home}" aria-label="4M Studio">
      <span class="brand__mark">4M</span><span>4M&nbsp;Studio</span>
    </a>
    <nav class="nav__links" aria-label="Primary">
      <div class="nav__item" data-menu>
        <a class="nav__apps" href="{home}#apps" aria-haspopup="true" aria-expanded="false">{T("nav_apps", lang)} {CHEVRON}</a>
        <div class="menu" role="menu">
          <div class="menu__grid">{items}</div>
          <a class="menu__all" href="{home}#apps">{T("nav_all_apps", lang)} {ARROW}</a>
        </div>
      </div>
      <a href="{home}#studio">{T("nav_studio", lang)}</a>
      <a href="{home}#updates">{T("nav_updates", lang)}</a>
      <a href="{home}#contact">{T("nav_contact", lang)}</a>
      <a class="lang" href="{href(lang, path, other, path)}" hreflang="{HTML_LANG[other]}" lang="{HTML_LANG[other]}"
         data-set-lang="{other}" aria-label="{esc(T("lang_label", lang))}">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/></svg>
        {T("lang_switch", lang)}</a>
    </nav>
    <button class="nav__toggle" type="button" aria-label="{T("nav_menu", lang)}" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>'''


def footer(lang, path):
    root = rel_root(lang, path)
    home = href(lang, path, lang, "")
    apps = "".join(f'<li><a href="{href(lang, path, lang, "apps/" + a["slug"] + "/")}">{NMH(a, lang)}</a></li>' for a in APPS)
    legal = (f'<li><a href="{href(lang, path, lang, "privacy/")}">{T("legal_privacy", lang)}</a></li>'
             f'<li><a href="{href(lang, path, lang, "terms/")}">{T("legal_terms", lang)}</a></li>'
             f'<li><a href="{EULA}" target="_blank" rel="noopener">{T("legal_eula", lang)}</a></li>')
    return f'''<footer class="footer">
  <div class="wrap">
    <div class="footer__grid">
      <div>
        <a class="brand" href="{home}"><span class="brand__mark">4M</span><span>4M&nbsp;Studio</span></a>
        <p style="margin-top:14px;max-width:34ch;font-size:14.5px">{T("footer_blurb", lang)}</p>
      </div>
      <div><h5>{T("footer_apps", lang)}</h5><ul>{apps}</ul></div>
      <div><h5>{T("footer_studio", lang)}</h5><ul>
        <li><a href="{home}#studio">{T("footer_about", lang)}</a></li>
        <li><a href="{home}#updates">{T("nav_updates", lang)}</a></li>
        <li><a href="{home}#contact">{T("nav_contact", lang)}</a></li>
        <li><a href="{SITE["github"]}" target="_blank" rel="noopener">GitHub</a></li></ul></div>
      <div><h5>{T("footer_legal", lang)}</h5><ul>{legal}</ul></div>
    </div>
    <div class="footer__bottom">
      <span>© <span data-year>2026</span> 4M Studio. {T("footer_rights", lang)}</span>
      <span>{T("footer_made", lang)}</span>
    </div>
  </div>
</footer>'''


def page(lang, path, title, desc, body, scripts=("main",), alternates=True, head_extra="", og_image="og.jpg"):
    root = rel_root(lang, path)
    canon = abs_url(lang, path)
    alt = ""
    if alternates:
        alt = "".join(f'\n<link rel="alternate" hreflang="{HTML_LANG[l]}" href="{abs_url(l, path)}">' for l in LANGS)
        alt += f'\n<link rel="alternate" hreflang="x-default" href="{abs_url("en", path)}">'
    js = "".join(f'\n<script src="{root}assets/js/{s}.js?v={ver("assets/js/" + s + ".js")}" defer></script>' for s in scripts)
    return f'''<!DOCTYPE html>
<html lang="{HTML_LANG[lang]}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{esc(title)}</title>
<meta name="description" content="{esc(desc)}">
<meta name="theme-color" content="#05060a">
<link rel="icon" href="{root}assets/img/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="{root}assets/img/favicon.svg">
<link rel="canonical" href="{canon}">{alt}
<meta property="og:type" content="website">
<meta property="og:site_name" content="4M Studio">
<meta property="og:locale" content="{"zh_CN" if lang == "zh" else "en_US"}">
<meta property="og:title" content="{esc(title)}">
<meta property="og:description" content="{esc(desc)}">
<meta property="og:url" content="{canon}">
<meta property="og:image" content="{BASE}assets/img/{og_image}">
<meta name="twitter:card" content="summary_large_image">
<link rel="stylesheet" href="{root}assets/css/main.css?v={ver("assets/css/main.css")}">
<script>document.documentElement.classList.add('js');</script>{head_extra}
</head>
<body>
<div class="progress" aria-hidden="true"></div>
<div class="aurora" aria-hidden="true">
  <span class="aurora__blob aurora__blob--1"></span>
  <span class="aurora__blob aurora__blob--2"></span>
  <span class="aurora__blob aurora__blob--3"></span>
</div>
<div class="grain" aria-hidden="true"></div>
{nav(lang, path)}
<main id="main">
{body}
</main>
{footer(lang, path)}{js}
</body>
</html>
'''


# ---------- home ----------
def home(lang):
    path = ""
    root = rel_root(lang, path)
    n = len(APPS)
    slides, tabs = [], []
    for i, a in enumerate(APPS):
        name = esc(NM(a, lang))
        page_href = href(lang, path, lang, "apps/" + a["slug"] + "/")
        badge = (f'<span class="dot"></span> {T("hero_new", lang)} · {NMH(a, lang)}' if a.get("isNew")
                 else f'{icon(a, root, 22, "badge__icon")} {esc(L(a["category"], lang))} · {NMH(a, lang)}')
        slides.append(f'''
      <article class="news__slide" id="slide-{a["slug"]}" style="--accent: var(--{a["accent"]})" role="group"
               aria-roledescription="slide" aria-label="{esc(T("slide_of", lang, i=i + 1, n=n))}: {name}">
        <div class="news__text">
          <span class="badge">{badge}</span>
          <h2 class="news__title">{L(a["headline"], lang)}</h2>
          <p class="lede">{esc(L(a["lede"], lang))}</p>
          <div class="hero__cta">
            <a class="btn btn--primary" href="{page_href}">{T("learn_more", lang)} {ARROW}</a>
            {app_store_btn(a, lang, small=False).replace("btn--primary", "btn--ghost")}
          </div>
          <p class="news__meta">{esc(L(a["platform"], lang))}</p>
        </div>
        <div class="news__visual">{visual(a, lang, root, big=True)}</div>
      </article>''')
        tabs.append(f'<button class="news__tab" type="button" role="tab" aria-controls="slide-{a["slug"]}" '
                    f'aria-selected="{"true" if i == 0 else "false"}" style="--accent: var(--{a["accent"]})">'
                    f'{icon(a, root, 28, "news__tabicon")}<span>{NMH(a, lang)}</span></button>')

    cards = "".join(f'''
      <a class="app-tile reveal" href="{href(lang, path, lang, "apps/" + a["slug"] + "/")}" style="--accent: var(--{a["accent"]}); --d: {0.04 * i:.2f}s">
        {icon(a, root, 64)}
        <span class="tag">{esc(L(a["category"], lang))}{(" · " + T("hero_new", lang)) if a.get("isNew") else ""}</span>
        <h3>{NMH(a, lang)}</h3>
        <p>{esc(L(a["tagline"], lang))}</p>
        <span class="link-arrow">{T("learn_more", lang)} {ARROW}</span>
      </a>''' for i, a in enumerate(APPS))

    posts_src = sorted(APPS, key=lambda a: a["news"]["date"], reverse=True)
    posts = "".join(f'''
      <article class="post reveal" style="--d: {0.05 * (i % 3):.2f}s">
        <div class="post__meta"><span class="chip">{esc(NM(a, lang))}</span><span>{month(a["news"]["date"], lang)}</span></div>
        <h3>{esc(L(a["news"]["title"], lang))}</h3>
        <p>{esc(L(a["news"]["body"], lang))}</p>
        <a class="link-arrow" href="{href(lang, path, lang, "apps/" + a["slug"] + "/")}">{T("read_more", lang)} {ARROW}</a>
      </article>''' for i, a in enumerate(posts_src))

    marquee_items = SITE["marquee"][lang]
    marquee = "".join(f'<span class="marquee__item">{esc(m)}</span>' for m in marquee_items * 2)

    values = "".join(f'''
        <div class="value reveal" style="--d: {0.05 + 0.07 * k:.2f}s">
          <div class="value__m">M</div><h4>{T(f"v{k + 1}_t", lang)}</h4><p>{T(f"v{k + 1}_b", lang)}</p>
        </div>''' for k in range(4))

    body = f'''
<section class="hero-news" aria-label="{esc(T("hero_label", lang))}">
  <h1 class="sr-only">4M Studio — {esc(T("title", lang).split("—")[-1].strip())}</h1>
  <div class="wrap">
    <div class="news" data-carousel aria-roledescription="carousel" aria-label="{esc(T("hero_label", lang))}">
      <div class="news__viewport">
        <div class="news__track">{"".join(slides)}
        </div>
      </div>
      <div class="news__controls">
        <button class="news__arrow" type="button" data-prev aria-label="{esc(T("hero_prev", lang))}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg></button>
        <div class="news__tabs" role="tablist" aria-label="{esc(T("hero_label", lang))}">{"".join(tabs)}</div>
        <button class="news__arrow" type="button" data-next aria-label="{esc(T("hero_next", lang))}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg></button>
      </div>
    </div>
  </div>
</section>

<div class="marquee" aria-hidden="true"><div class="marquee__track">{marquee}</div></div>

<section class="section" id="apps">
  <div class="wrap">
    <div class="reveal">
      <p class="eyebrow">{T("apps_eyebrow", lang)}</p>
      <h2>{T("apps_title", lang)}</h2>
      <p class="lede">{T("apps_lede", lang)}</p>
    </div>
    <div class="app-grid">{cards}
    </div>
  </div>
</section>

<section class="section" id="studio">
  <div class="wrap about__grid">
    <div class="reveal">
      <p class="eyebrow">{T("studio_eyebrow", lang)}</p>
      <h2>{T("studio_title", lang)}</h2>
      <p class="lede">{T("studio_lede", lang)}</p>
      <p>{T("studio_body", lang)}</p>
      <div class="hero__stats">
        <div class="stat"><div class="stat__num" data-count="{len(APPS)}">{len(APPS)}</div><div class="stat__label">{T("stat_apps", lang)}</div></div>
        <div class="stat"><div class="stat__num" data-count="2">2</div><div class="stat__label">{T("stat_lang", lang)}</div></div>
        <div class="stat"><div class="stat__num">0</div><div class="stat__label">{T("stat_ads", lang)}</div></div>
      </div>
      <a class="link-arrow" href="#contact" style="margin-top:26px">{T("studio_cta", lang)} {ARROW}</a>
    </div>
    <div class="values">{values}
    </div>
  </div>
</section>

<section class="section" id="updates">
  <div class="wrap">
    <div class="reveal">
      <p class="eyebrow">{T("updates_eyebrow", lang)}</p>
      <h2>{T("updates_title", lang)}</h2>
    </div>
    <div class="posts">{posts}
    </div>
  </div>
</section>

{contact_block(lang)}
'''
    # First visit to the English home from a Chinese-language browser: go to /zh/ once.
    # An explicit choice (the language button) is remembered and always wins.
    redirect = ""
    if lang == "en":
        redirect = ("\n<script>try{var l=localStorage.getItem('4m-lang');"
                    "if(l==='zh'||(!l&&/^zh/i.test(navigator.language||''))){location.replace('zh/'+location.hash)}}catch(e){}</script>")
    ld = {
        "@context": "https://schema.org", "@type": "Organization", "name": "4M Studio",
        "url": BASE, "email": EMAIL, "description": T("description", lang),
    }
    head = redirect + f'\n<script type="application/ld+json">{json.dumps(ld, ensure_ascii=False)}</script>'
    return page(lang, path, T("title", lang), T("description", lang), body,
                scripts=("main", "carousel", "miemie"), head_extra=head)


def contact_block(lang, app=None):
    subject = "4M%20Studio" if not app else app["name"]["en"].replace(" ", "%20") + "%20support"
    if app:
        name = esc(NM(app, lang))
        eyebrow, title, lede = T("p_support", lang), T("p_support_t", lang, app=name), T("p_support_b", lang, app=name)
    else:
        eyebrow, title, lede = T("contact_eyebrow", lang), T("contact_title", lang), T("contact_lede", lang)
    return f'''<section class="section section--tight" id="contact">
  <div class="wrap">
    <div class="contact reveal">
      <p class="eyebrow" style="justify-content:center">{eyebrow}</p>
      <h2>{title}</h2>
      <p class="lede" style="max-width:52ch">{lede}</p>
      <a class="contact__mail" href="mailto:{EMAIL}?subject={subject}">{EMAIL}</a>
      <div class="contact__actions">
        <a class="btn btn--primary" href="mailto:{EMAIL}?subject={subject}">{T("contact_btn", lang)}</a>
        <a class="btn btn--ghost" href="{SITE["github"]}" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
  </div>
</section>'''


# ---------- app pages ----------
def app_page(a, lang):
    path = f"apps/{a['slug']}/"
    root = rel_root(lang, path)
    name = esc(NM(a, lang))
    feats = "".join(f'''
        <div class="feature reveal" style="--d: {0.05 * (i % 3):.2f}s">
          <div class="feature__icon" aria-hidden="true">{f["emoji"]}</div>
          <h3>{esc(L(f["title"], lang))}</h3>
          <p>{esc(L(f["body"], lang))}</p>
        </div>''' for i, f in enumerate(a["features"]))
    priv = "".join(f"<li>{esc(L(p, lang))}</li>" for p in a["privacy"])
    others = "".join(f'''
        <a class="app-tile app-tile--sm" href="{href(lang, path, lang, "apps/" + o["slug"] + "/")}" style="--accent: var(--{o["accent"]})">
          {icon(o, root, 48)}<h3>{NMH(o, lang)}</h3><p>{esc(L(o["tagline"], lang))}</p>
        </a>''' for o in APPS if o is not a)
    body = f'''
<section class="app-hero" style="--accent: var(--{a["accent"]})">
  <div class="wrap app-hero__grid">
    <div class="app-hero__text">
      <nav class="crumbs" aria-label="Breadcrumb">
        <a href="{href(lang, path, lang, "")}">{T("breadcrumb_home", lang)}</a><span aria-hidden="true">/</span>
        <a href="{href(lang, path, lang, "")}#apps">{T("nav_apps", lang)}</a><span aria-hidden="true">/</span>
        <span aria-current="page">{name}</span>
      </nav>
      <div class="app-hero__id">{icon(a, root, 84)}<div><p class="tag">{esc(L(a["category"], lang))}</p><p class="app-hero__name">{NMH(a, lang)}</p></div></div>
      <h1>{L(a["headline"], lang)}</h1>
      <p class="lede">{esc(L(a["lede"], lang))}</p>
      <div class="hero__cta">
        {app_store_btn(a, lang, small=False)}
        <a class="btn btn--ghost" href="{href(lang, path, lang, "privacy/" + a["slug"] + ".html")}">{T("privacy", lang)}</a>
      </div>
      <p class="news__meta">{esc(L(a["platform"], lang))}</p>
    </div>
    <div class="app-hero__visual">{visual(a, lang, root, big=True)}</div>
  </div>
</section>

<section class="section section--tight" id="features" style="--accent: var(--{a["accent"]})">
  <div class="wrap">
    <div class="reveal">
      <p class="eyebrow">{T("p_features", lang)}</p>
      <h2>{T("p_features_t", lang)}</h2>
    </div>
    <div class="features">{feats}
    </div>
  </div>
</section>

<section class="section section--tight" style="--accent: var(--{a["accent"]})">
  <div class="wrap facts">
    <div class="fact-card reveal">
      <p class="eyebrow">{T("p_privacy", lang)}</p>
      <ul class="feature-list">{priv}</ul>
      <a class="link-arrow" href="{href(lang, path, lang, "privacy/" + a["slug"] + ".html")}">{T("p_privacy_link", lang)} {ARROW}</a>
    </div>
    <div class="fact-card reveal" style="--d:.08s">
      <p class="eyebrow">{T("p_details", lang)}</p>
      <dl class="specs">
        <div><dt>{T("p_category", lang)}</dt><dd>{esc(L(a["category"], lang))}</dd></div>
        <div><dt>{T("p_requires", lang)}</dt><dd>{esc(L(a["requirements"], lang))}</dd></div>
        <div><dt>{T("p_developer", lang)}</dt><dd>4M Studio</dd></div>
        <div><dt>{T("p_languages", lang)}</dt><dd>English · 中文</dd></div>
      </dl>
    </div>
  </div>
</section>

{contact_block(lang, a)}

<section class="section section--tight">
  <div class="wrap">
    <p class="eyebrow">{T("p_more", lang)}</p>
    <div class="app-grid app-grid--sm">{others}
    </div>
  </div>
</section>
'''
    ld = {"@context": "https://schema.org", "@type": "SoftwareApplication", "name": NM(a, lang),
          "operatingSystem": "iOS", "applicationCategory": L(a["category"], "en"),
          "description": L(a["lede"], lang), "url": abs_url(lang, path),
          "author": {"@type": "Organization", "name": "4M Studio", "url": BASE}}
    if a.get("appStore"):
        ld["downloadUrl"] = a["appStore"]
    head = f'\n<script type="application/ld+json">{json.dumps(ld, ensure_ascii=False)}</script>'
    scripts = ("main", "miemie") if a["visual"] == "miemie" else ("main",)
    return page(lang, path, f'{NM(a, lang)} — {L(a["tagline"], lang)} · 4M Studio',
                L(a["lede"], lang), body, scripts=scripts, head_extra=head)


# ---------- privacy + 404 ----------
def privacy_page(a, lang):
    path = f"privacy/{a['slug']}.html"
    root = rel_root(lang, path)
    src = a["slug"] + (".zh.html" if lang == "zh" else ".html")
    with open(os.path.join(ROOT, "content", "privacy", src), encoding="utf-8") as f:
        inner = f.read().replace("{root}", root).replace("{name}", NMH(a, lang))
    body = f'''<div class="wrap doc">
{inner}
  <p style="margin-top:34px"><a class="link-arrow" href="{href(lang, path, lang, "apps/" + a["slug"] + "/")}">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="transform:rotate(180deg)"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    {esc(T("privacy_back", lang, app=NM(a, lang)))}</a></p>
</div>'''
    return page(lang, path, f'{NM(a, lang)} — {T("privacy_title", lang)} · 4M Studio',
                T("privacy_desc", lang, app=NM(a, lang)), body)


def privacy_index(lang):
    """/privacy/ — the studio-wide promise, then one link per app."""
    path = "privacy/"
    root = rel_root(lang, path)
    rows = "".join(f'''
        <a class="app-tile app-tile--sm" href="{href(lang, path, lang, "privacy/" + a["slug"] + ".html")}" style="--accent: var(--{a["accent"]})">
          {icon(a, root, 48)}<h3>{NMH(a, lang)}</h3><p>{esc(L(a["privacy"][0], lang))}</p>
        </a>''' for a in APPS)
    points = "".join(f"<li>{T(k, lang)}</li>" for k in ("pi_1", "pi_2", "pi_3", "pi_4"))
    body = f'''<div class="wrap doc">
  <div class="doc__head">
    <p class="eyebrow">{T("legal_eyebrow", lang)}</p>
    <h1 style="font-size:clamp(34px,5vw,54px)">{T("legal_privacy", lang)}</h1>
    <p class="lede">{T("pi_lede", lang)}</p>
  </div>
  <div class="doc__body" style="max-width:none">
    <h2>{T("pi_promise", lang)}</h2>
    <ul>{points}</ul>
    <h2>{T("pi_per_app", lang)}</h2>
    <p>{T("pi_per_app_b", lang)}</p>
    <div class="app-grid app-grid--legal">{rows}
    </div>
    <h2>{T("nav_contact", lang)}</h2>
    <p>{T("pi_contact", lang)} <a href="mailto:privacy@4mstudio.app">privacy@4mstudio.app</a></p>
  </div>
</div>'''
    return page(lang, path, f'{T("legal_privacy", lang)} · 4M Studio', T("pi_lede", lang), body)


def terms_page(lang):
    path = "terms/"
    src = "terms.zh.html" if lang == "zh" else "terms.html"
    with open(os.path.join(ROOT, "content", "legal", src), encoding="utf-8") as f:
        inner = f.read()
    body = f'<div class="wrap doc">\n{inner}\n</div>'
    return page(lang, path, f'{T("legal_terms", lang)} · 4M Studio', T("terms_desc", lang), body)


def not_found():
    # Served for any missing URL, so every link here is root-absolute.
    lang, path = "en", "404.html"
    body = f'''<section class="section" style="min-height:70vh;display:grid;place-items:center;text-align:center">
  <div class="wrap">
    <p class="eyebrow" style="justify-content:center">404</p>
    <h1 style="font-size:clamp(40px,7vw,76px)">{T("nf_h", "en")}<br><span class="grad-text" style="font-size:.6em">{T("nf_h", "zh")}</span></h1>
    <p class="lede" style="margin-inline:auto">{T("nf_b", "en")}<br>{T("nf_b", "zh")}</p>
    <div class="hero__cta" style="justify-content:center">
      <a class="btn btn--primary" href="/">{T("nf_btn", "en")}</a>
      <a class="btn btn--ghost" href="/zh/">{T("nf_btn", "zh")}</a>
    </div>
  </div>
</section>'''
    h = page(lang, path, T("nf_title", "en"), T("nf_b", "en"), body, alternates=False)
    # rel_root("en","404.html") is "" — turn relative asset/page links into root-absolute ones.
    for attr in ('href="', 'src="'):
        h = h.replace(attr + "assets/", attr + "/assets/").replace(attr + "apps/", attr + "/apps/") \
             .replace(attr + "privacy/", attr + "/privacy/").replace(attr + "zh/", attr + "/zh/")
    h = h.replace('href="#', 'href="/#').replace('href=""', 'href="/"').replace('data-src="assets/', 'data-src="/assets/')
    h = h.replace('href="/zh/404.html"', 'href="/zh/"')
    return h.replace('href="/#main"', 'href="#main"')


def write(rel, text):
    p = os.path.join(ROOT, rel)
    os.makedirs(os.path.dirname(p) or ROOT, exist_ok=True)
    with open(p, "w", encoding="utf-8") as f:
        f.write(text)
    return rel


def main():
    written = []
    for lang in LANGS:
        written.append(write(out_file(lang, ""), home(lang)))
        for a in APPS:
            written.append(write(out_file(lang, f"apps/{a['slug']}/"), app_page(a, lang)))
        for a in APPS:
            written.append(write(out_file(lang, f"privacy/{a['slug']}.html"), privacy_page(a, lang)))
        written.append(write(out_file(lang, "privacy/"), privacy_index(lang)))
        written.append(write(out_file(lang, "terms/"), terms_page(lang)))
    written.append(write("404.html", not_found()))

    urls = []
    for path in ([""] + [f"apps/{a['slug']}/" for a in APPS] + ["privacy/", "terms/"]
                 + [f"privacy/{a['slug']}.html" for a in APPS]):
        for lang in LANGS:
            alts = "".join(f'\n    <xhtml:link rel="alternate" hreflang="{HTML_LANG[l]}" href="{abs_url(l, path)}"/>' for l in LANGS)
            pr = "1.0" if path == "" else ("0.3" if path.startswith(("privacy/", "terms/")) else "0.8")
            urls.append(f'  <url><loc>{abs_url(lang, path)}</loc><priority>{pr}</priority>{alts}\n  </url>')
    write("sitemap.xml", '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" '
          'xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' + "\n".join(urls) + "\n</urlset>\n")
    write("robots.txt", f"User-agent: *\nAllow: /\n\nSitemap: {BASE}sitemap.xml\n")
    print(f"Built {len(written)} pages + sitemap.xml + robots.txt")


if __name__ == "__main__":
    main()
