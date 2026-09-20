# Krishna Teja Gummadi — Portfolio (Astro + GitHub Pages)

Static portfolio site built with [Astro](https://astro.build), deployed for free on GitHub Pages
via the included GitHub Actions workflow (`.github/workflows/deploy.yml`).

## 1. Push this to a GitHub repo

```bash
cd portfolio-astro
git init
git add .
git commit -m "Initial commit: portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

You can name the repo anything (e.g. `portfolio`). If you name it exactly
`<your-username>.github.io`, the site is served at your domain root instead of a subpath —
either works, the workflow handles both automatically.

## 2. Turn on GitHub Pages

In the repo on GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

That's it — no branch to pick, no folder to point at. The first push to `main` triggers the
workflow in `.github/workflows/deploy.yml`, which builds the site and publishes it.

## 3. Find your URL

**Actions** tab → the latest "Deploy to GitHub Pages" run → the `deploy` job shows the live URL.
It will be:

- `https://<your-username>.github.io/<repo-name>/` for a normal repo, or
- `https://<your-username>.github.io/` if the repo is named `<your-username>.github.io`

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to ./dist
npm run preview   # preview the production build locally
```

## Editing content

- Page content: `src/pages/index.astro`
- Shared head/scripts: `src/layouts/Layout.astro`
- Styling: `public/css/style.css`
- Behavior (nav toggle, scroll reveal): `public/js/main.js`

## Custom domain (optional)

Settings → Pages → **Custom domain**, then add a `CNAME` record at your domain registrar
pointing to `<your-username>.github.io`. GitHub will manage HTTPS automatically.
