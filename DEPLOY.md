# Deploying creativedalaal.com to Hostinger

The site is static (HTML/CSS/JS) — no build step, no server runtime. Each page is a
folder with an `index.html`, so Apache serves clean URLs automatically
(`/work/strch/` → that folder's `index.html`).

Domain is registered with Hostinger, so it already maps to `public_html` — deploying
is just uploading the files.

## Upload (hPanel File Manager)
1. Use the ready-made **`creativedalaal_site.zip`** (in the project's parent folder).
   It contains the site files *without* the local `.claude/` preview config.
2. hPanel → **Files → File Manager** → open **`public_html`**.
3. Delete Hostinger's default `index.html` / parked-page files if present.
4. **Upload** `creativedalaal_site.zip` into `public_html`.
5. Right-click it → **Extract** → delete the zip.
6. Verify `public_html/index.html` sits at the top level (not nested in a subfolder).

## After upload — two must-dos
1. **SSL:** hPanel → **Security → SSL** → install free SSL → enable **Force HTTPS**.
2. **Contact form:** get a free key at https://web3forms.com (enter
   `sonket@creativedalaal.com`), paste it into `contact/index.html` replacing
   `YOUR-WEB3FORMS-ACCESS-KEY`, and re-upload that one file. Until then the
   email/WhatsApp links work as fallback.

## Add real images later
Drop files into **`/assets/`** and swap the placeholder blocks (each has a one-line
how-to comment in the HTML):
- About portrait — `about/index.html`
- Case-study screenshots — each `work/<slug>/index.html`
- Before/after pairs — `work/strch/` and `work/drone-cleaning/`
- Blog featured images — `blog/index.html` and each post

## Updating the site later
Edit the file locally and re-upload just that file via File Manager (or use FTP /
FileZilla for bulk updates: hPanel → FTP Accounts for credentials).

## What NOT to upload
- `.claude/` (local preview server config)
- `DESIGN.md`, `DEPLOY.md` (docs — harmless if uploaded, but not needed)
