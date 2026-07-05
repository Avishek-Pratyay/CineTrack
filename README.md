# CineTrack 🎬

A minimalist Movie Watchlist & Review dashboard built with React + Vite + Tailwind CSS.
Track movies you want to watch, mark them watched, search, and filter — all persisted
locally in the browser via `localStorage`.

Built as a technical assignment for the React.js Frontend Developer Intern role.

## Features

- **Dashboard grid** — responsive card layout showing poster, title, genre, and release year.
- **Mark as Watched / Unwatched** — toggle a movie's watched state with one click.
- **Delete** — remove a movie from the collection.
- **Add Movie form** — client-side validated form (empty-field checks, year range check,
  optional poster URL format check).
- **Status filter** — tab control to view All / Watched / Unwatched movies.
- **Live search** — instant client-side filtering by title as you type.
- **Simulated async loading** — a short artificial delay on first load, backed by
  skeleton-loading ticket cards, to demonstrate loading-state UX.
- **Persistence** — all data (seed movies + your additions/edits) is saved to
  `localStorage`, so your collection survives a page refresh.
- **Icons throughout** — via `lucide-react` (search, filter tabs, eye/eye-off watched
  state, trash for delete, clapperboard/film branding) instead of plain text buttons.
- **5-star ratings** — click a star on any card to rate a movie; click the same star
  again to clear it. Persisted alongside the rest of the movie data.
- **Toast notifications** — small confirmation toasts on add / watched-toggle / delete,
  auto-dismissing after ~2.5s.
- **Poster hover effect** — subtle zoom + gradient overlay with a film icon on hover,
  for a more "alive" card feel.

## Tech Stack

- React 19 (functional components + hooks, no external state library)
- Vite 8 (build tool / dev server)
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- Plain `localStorage` for persistence — no backend/API involved

## Project Structure

```
src/
  components/
    Marquee.jsx        # Header / stats banner
    Controls.jsx        # Search input, status filter tabs, add-movie toggle
    AddMovieForm.jsx     # Validated form to add a new movie
    MovieGrid.jsx        # Grid layout + empty state
    MovieCard.jsx        # Individual movie "ticket stub" card
    SkeletonCard.jsx      # Loading placeholder card
  hooks/
    useMovies.js         # All movie state, localStorage read/write, simulated delay
  data/
    initialMovies.js     # Hardcoded seed data (used only on first run)
  App.jsx
  main.jsx
  index.css
```

## Getting Started (Local Setup)

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later (v20+ recommended)
- npm (bundled with Node.js)

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/cinetrack.git
cd cinetrack
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the local development server

```bash
npm run dev
```

This starts Vite's dev server, typically at **http://localhost:5173**.
Open that URL in your browser — the terminal output will confirm the exact port.

### 4. Build for production (optional, used for deployment)

```bash
npm run build
```

Output is generated in the `dist/` folder. You can preview the production build
locally with:

```bash
npm run preview
```

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com), click **New Project**, and import the repo.
3. Vercel auto-detects the Vite framework preset:
   - **Build Command:** `npm run build` (or `vite build`)
   - **Output Directory:** `dist`
4. Click **Deploy**. Once complete, Vercel gives you a live public URL.

## Notes on Data & State

- On first load, `useMovies` seeds `localStorage` with a handful of hardcoded movies
  from `src/data/initialMovies.js`.
- Every subsequent add/toggle/delete operation updates React state and is immediately
  synced back to `localStorage` under the key `cinetrack:movies`.
- No backend or external API is used — this is a fully client-side application, per
  the assignment's scope.

## Author

Avishek — B.Sc. in Computer Science & Engineering, AIUB.
