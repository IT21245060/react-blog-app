# Copilot / AI Agent Instructions for react-blog-app

**Short summary:** This is a small Create React App single-page blog UI (no backend). Components are organized per-folder with component-specific CSS files and use Font Awesome + Google Fonts from public/index.html.

## Big picture (what matters)
- Tech stack: Create React App (react-scripts), React 19, functional components, CSS files imported per component.
- App structure: `src/App.js` mounts `<Topbar/>` and a page component (currently `<Single/>`). Pages compose smaller components.
  - Home page: combines `Header`, `Posts`, and `Sidebar` components
  - Single page: combines `SinglePost` and `Sidebar` components
- Component organization: All reusable components live in `src/components/`, pages live in `src/pages/`.
- No router or global state present. Data is static in components (image URLs, lists). No API calls or server integration in repository.

## Key files & patterns to reference
- Entry: `src/index.js` → `src/App.js`
- Pages: `src/pages/home/Home.jsx` and `src/pages/single/Single.jsx`
- Components: All in `src/components/` folder (topbar, header, posts, post, sidebar, singlePost)
- Pattern example: `src/components/topbar/Topbar.jsx` + `topbar.css` (component paired with CSS in same folder)
- Fonts / Icons: `public/index.html` includes Google Fonts (Josefin Sans, Lora) and Font Awesome 7.0.1 CDN — prefer using these for icons & fonts.
- Scripts: standard CRA scripts in `package.json` (`npm start`, `npm run build`, `npm test`).

## Project-specific conventions (follow these)
- Use functional components and default exports (existing code uses `export default function ...`).
- Component co-location: Put component styles in the same folder as the component and import them at top of the component file: `import "./component.css"`.
- Class names are plain strings (e.g., `className="topLeft"`) — follow established naming (camelCase-ish but unscoped, no CSS modules).
- Icons: Use Font Awesome classes (e.g., `fa-brands fa-square-facebook`, `fa-solid fa-magnifying-glass`) — no local icon assets present.
- Images: Components use direct external URLs (Pexels). If you add local assets, place them in `src/assets/` and import them (e.g., `import hero from '../assets/hero.jpg'`).
- Data patterns: Components repeat static JSX (see `Posts.jsx` rendering multiple `<Post/>` components) — no dynamic data mapping yet.

## Adding features or components (how-to examples)
- Add a new page component:
  - Create `src/pages/<pageName>/PageName.jsx` and `PageName.css`.
  - Import and include it where appropriate (e.g., `App.js` or `Home.jsx`).
  - Follow existing CSS/class naming patterns.

- Add icons: use Font Awesome class names in the element, no need to add new CDN links (already in `public/index.html`).

- Tests: Testing libraries are installed via CRA dependencies. Use react-testing-library conventions (already included in `package.json`). Run with `npm test`.

## Build & debug notes
- Development: `npm start` (dev server at http://localhost:3000). Dev server will hot-reload UI changes.
- Build: `npm run build` creates production assets in the `build/` folder.
- Lint/test: rely on CRA's ESLint config; no custom lint rules are present.
- Debugging: use browser devtools and console logs. React is wrapped in `React.StrictMode` in `index.js`.

## What NOT to assume
- There is no API layer, router, or global state manager (e.g., Redux) in this repo; avoid adding or assuming back-end integrations unless explicitly requested.
- No CI or workflow files exist — do not add workflow assumptions to commits unless instructed.

## Suggested agent responsibilities
- Make small UI/structure changes by following folder + CSS co-location rules.
- Prefer minimal, focused PRs (e.g., "Add contact section to Home") and include which files were changed in the PR description.
- For any non-trivial feature (routing, API integration, global state), open an issue first and await human guidance.

## Files you may want to open during work
- `src/App.js`, `src/index.js`
- `src/pages/home/Home.jsx`, `src/pages/single/Single.jsx`
- `src/components/topbar/Topbar.jsx`, `src/components/header/Header.jsx`, `src/components/sidebar/Sidebar.jsx`, `src/components/posts/Posts.jsx`
- `public/index.html` (fonts and icon CDNs)

---
If anything here is unclear or you'd like the file to include stricter conventions (naming scheme, test requirements, commit message style), tell me which parts to expand and I will update the instructions.