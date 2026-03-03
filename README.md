# Johann Avramov — Portfolio

Site portfolio personnel présentant mon parcours, projets et compétences en tant que Full-Stack Engineer. Orienté vers les opportunités au Japon.

## Stack technique

- **React 19** + **TypeScript**
- **Vite** — build et dev server
- **Tailwind CSS v4** — styles
- **Motion** — animations
- **Lucide React** — icônes

## Prérequis

- Node.js 18+
- npm ou pnpm

## Installation

```bash
npm install
```

## Scripts

| Commande      | Description                    |
|---------------|--------------------------------|
| `npm run dev` | Lance le serveur de dev (port 3000) |
| `npm run build` | Build de production dans `dist/` |
| `npm run preview` | Prévisualise le build de production |
| `npm run lint` | Vérification TypeScript (`tsc --noEmit`) |
| `npm run clean` | Supprime le dossier `dist/` |

## Structure du contenu

Les textes et données (bio, expériences, projets, compétences) sont centralisés dans :

- `src/data/content.ts` — à modifier pour mettre à jour le contenu du portfolio.

Les assets statiques (CV, photo, logo, favicon) se trouvent dans :

- `public/` — fichiers servis à la racine (ex. `/johann_avramov_cv.pdf`, `/profile.png`).

**SEO** : modifier le `<head>` et les scripts JSON-LD dans `index.html`. Fichiers `public/robots.txt` et `public/sitemap.xml` — en production, remplacer `your-domain.com` par ton domaine et utiliser des URLs absolues pour `canonical`, `og:image`, `og:url` et dans le sitemap.

## Licence

Projet privé. Tous droits réservés.

---

## English

### Tech stack

- **React 19** + **TypeScript**
- **Vite** — build tool and dev server
- **Tailwind CSS v4** — styling
- **Motion** — animations
- **Lucide React** — icons

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
```

### Scripts

| Command         | Description                          |
|-----------------|--------------------------------------|
| `npm run dev`   | Start dev server (port 3000)         |
| `npm run build` | Production build output in `dist/`   |
| `npm run preview` | Preview the production build      |
| `npm run lint`  | TypeScript check (`tsc --noEmit`)    |
| `npm run clean` | Remove the `dist/` folder            |

### Content structure

Copy and data (bio, experience, projects, skills) live in:

- `src/data/content.ts` — edit this file to update portfolio content.

Static assets (CV, photo, logo, favicon) go in:

- `public/` — files are served at the root (e.g. `/johann_avramov_cv.pdf`, `/profile.png`).

**SEO**: Edit the `<head>` and JSON-LD scripts in `index.html`. In `public/robots.txt` and `public/sitemap.xml`, replace `your-domain.com` with your production domain. Use absolute URLs for `canonical`, `og:image`, `og:url`, and in the sitemap when deploying.

### Environment variables

Optional: create a `.env` file at the project root for any needed variables. See `.env.example` if present.

### License

Private project. All rights reserved.
