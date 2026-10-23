# Jessica Kim — Portfolio

Plain HTML + CSS. No build step.

## View it
Double-click `index.html` to open it in your browser. Refresh after each edit.

For auto-refresh while editing in VS Code, install the **Live Server** extension,
right-click `index.html` → **Open with Live Server**.

## Files
```
index.html          the one page (header, intro, work, about, collage, footer)
css/fonts.css       Geist Mono @font-face (self-hosted, in assets/fonts)
css/tokens.css      design tokens: Brand → Alias → Mapped
css/styles.css      base, type styles, shared pieces, sections
js/clock.js         live LA clock + AM/PM status dot
assets/images/      logo.svg (placeholder) and case study / collage images
assets/resume.pdf   add your resume here (Resume link points to it)
```

## Swapping in images
Look for `<div class="media-placeholder">` / `<span class="media-placeholder">`
in `index.html`. Each has a comment or label; replace it with an `<img>`.

## Still to do
- Real bubble logo → `assets/images/logo.svg`
- Email in `data-email` on both Contact buttons
- Bio placeholder "[need something]"
- Case study content for projects 02–06
- Expand/collapse, carousel, copy-email, tooltips, hover cards (behavior pass)
