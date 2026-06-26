# RD-codes — Rupam Dutta's Portfolio

A fast, classy, dark-themed personal portfolio built with [Astro](https://astro.build).
Backend Engineer · Distributed Systems · Fintech.

**Live site:** https://dtrup00.github.io/RD-codes

---

## Tech

- **Astro** — zero-JS-by-default static site, ships in milliseconds
- **Vanilla CSS** — custom dark theme, glassmorphism, gradients, scroll animations
- **GitHub Actions** — automatic deploy to GitHub Pages on every push

## Local development

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:4321/RD-codes
npm run build    # production build into ./dist
npm run preview  # preview the production build locally
```

## Editing your content

All site content lives in **one file**:

```
src/data/portfolio.js
```

Update your name, role, experience, skills, projects, education, and contact
details there — the whole site re-renders from it. No need to touch the components.

To update your downloadable resume, replace:

```
public/Rupam-Dutta-Resume.pdf
```

## Deploying (free, on GitHub Pages)

1. Create a repo named **`RD-codes`** on GitHub.
2. Push this folder to it (see commands below).
3. On GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Every push to `main` auto-builds and deploys. Your site goes live at
   `https://dtrup00.github.io/RD-codes`.

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/dtrup00/RD-codes.git
git push -u origin main
```

---

Built with care. © Rupam Dutta.
