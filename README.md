# React Blog App

A minimal single-page blog UI built with Create React App. This repository contains a small, component-driven front-end for a blog (no backend). It uses static data and demonstrates common CRUD-related UI pages (Home, Single Post, Write, Register/Login, Settings).

## Features
- Home page with header, posts list, and sidebar
- Single post view with author and content layout
- Write page UI for creating posts (form only; no backend)
- Login and Register pages (UI only)
- Settings page (UI only)
- Component-based structure with co-located CSS files

## Tech Stack
- React 19 (Create React App)
- JavaScript (ES6+)
- CSS (component-level styles)
- Font Awesome (via CDN in `public/index.html`)

## Project Structure (key files)
- `src/App.js` — main app mount and page selection
- `src/index.js` — React entry
- `src/components/` — reusable UI components (Topbar, Header, Posts, Post, Sidebar, SinglePost)
- `src/pages/` — pages (home, single, write, settings, login, register)

Example component layout:

```
src/
  components/
    topbar/Topbar.jsx
    header/Header.jsx
    posts/Posts.jsx
    post/Post.jsx
    sidebar/Sidebar.jsx
    singlePost/SinglePost.jsx
  pages/
    home/Home.jsx
    single/Single.jsx
    write/Write.jsx
    settings/Settings.jsx
    login/Login.jsx
    register/Register.jsx
```

## Installation
1. Clone the repo (if not already cloned):

```bash
git clone https://github.com/IT21245060/react-blog-app.git
cd react-blog-app
```

2. Install dependencies:

```bash
npm install
```

## Available Scripts
- `npm start` — runs the app in development mode (http://localhost:3000)
- `npm run build` — builds the app for production into `build/`
- `npm test` — runs tests (CRA test runner)

## Usage
- The app is purely front-end and uses static data in components. To modify content, edit the components under `src/components/` or the pages under `src/pages/`.
- Icons and fonts are provided through `public/index.html` (Google Fonts + Font Awesome CDN).

## Deployment
Build with `npm run build` and serve the `build/` directory with any static host (Netlify, Vercel, GitHub Pages, etc.).

## Contributing
This project is a UI demo. If you'd like to contribute:
- Fork the repo and open a pull request with focused changes.
- Keep component styles co-located (component folder + CSS file).

## Notes
- No backend or persistence is included. To add full CRUD you can wire the UI to an API and update the Posts/SinglePost components to fetch and modify data.

---
If you want the README adapted further (screenshots, CI/CD, or a live demo link), tell me which addition you prefer and I will update it.
