# NFMS-FIP Frontend

GitHub-ready frontend prototype for the Kenya National Forest Monitoring System (NFMS-FIP).

## Features

- Responsive institutional design based on the supplied NFMS-FIP screenshot
- Full NFMS-FIP top navigation
- Multi-level dropdown menus
- Expandable left sidebar
- Responsive mobile navigation
- Search dialog
- Scrolling information ticker
- Reusable page rendering
- Placeholder content for every supplied menu item
- Font Awesome icons
- No backend required for the prototype

## Run locally

The project is plain HTML/CSS/JavaScript.

You can open `index.html` directly in a browser, or use VS Code Live Server.

## GitHub Pages

1. Push the project to a GitHub repository.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Choose `main` and `/ (root)`.
5. Save.

Your URL will normally be:

`https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`

## Images

Place the following in `images/`:

- `forest-hero.svg` (included placeholder; replace with an approved forest photograph if desired)
- `forest-hero.jpg`
- `kenya-coat-of-arms.png`
- `kfs-logo.png`

The current prototype uses a text/icon placeholder for the two institutional logos so that it works immediately. Replace the placeholders with approved official image assets.

## Next integration stage

The frontend can later be connected to:

- GeoNode
- GeoServer
- PostgreSQL/PostGIS
- NFMS-FIP APIs
- Forest Alerts
- Interactive maps
- Dashboards
- Data catalogue
- Metadata catalogue
- Authentication/UAT
- Reporting services
