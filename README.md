# CTU BattleBots portfolio

Public showcase website for the CTU BattleBots student team at Czech Technical University in Prague.

## Local development

Use Node.js 24 and install dependencies:

```bash
npm ci
npm run dev
```

The local site is available at `http://localhost:3000`.

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

`npm run build` creates a static export in `out/`.

## GitHub Pages

Pushes to `main` run `.github/workflows/deploy-pages.yml`. The workflow reads the Pages base path from GitHub, builds the static export and deploys `out/`.

In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.
