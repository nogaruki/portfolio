# Johann Avramov, portfolio

Portfolio personnel de [Johann Avramov](https://johann.azur-it.fr/), développeur full-stack TypeScript et PHP, actuellement chez Orange à Sophia Antipolis et à la recherche d'un poste en Suisse romande (Genève, Lausanne).

**Site :** https://johann.azur-it.fr/

Le site est bilingue : français sur `/`, anglais sur `/en/`.

---

## Points clés

- Angular, TypeScript, Node.js, Symfony et PHP 8 au quotidien, avec GitLab CI/CD, Docker et GCP
- Quatre produits conçus et développés de bout en bout : Datark, AquaPro Manager, AirsoftHub, MamaSafeFood
- Enseignant en développement web à l'Université Côte d'Azur

---

## Stack du site

| Couche          | Technologie                                    |
|-----------------|------------------------------------------------|
| UI              | React 19, TypeScript 5                         |
| Styles          | Tailwind CSS v4                                |
| Icônes          | Lucide React                                   |
| Build           | Vite 6                                         |
| Rendu           | Prerendering statique par locale (SSG maison)  |
| Polices         | Syne, Inter, JetBrains Mono (Google Fonts)     |

Les animations sont en CSS, sans bibliothèque d'animation : le contenu reste visible même si le JavaScript ne s'exécute pas.

---

## Démarrage

**Prérequis :** Node.js 20 ou plus récent.

```bash
npm install
npm run dev       # serveur de développement sur http://localhost:3000
```

### Scripts

| Commande          | Description                                                        |
|-------------------|--------------------------------------------------------------------|
| `npm run dev`     | Serveur de développement (port 3000)                               |
| `npm run build`   | Build client, build SSR, puis prerendering vers `dist/`            |
| `npm run preview` | Sert le contenu de `dist/`                                         |
| `npm run lint`    | Vérification TypeScript (`tsc --noEmit`)                           |
| `npm run clean`   | Supprime `dist/` et `dist-ssr/`                                    |

---

## Comment fonctionne le build

`npm run build` enchaîne trois étapes :

1. `vite build` produit le bundle client dans `dist/`.
2. `vite build --ssr src/entry-server.tsx` produit le rendu serveur dans `dist-ssr/`.
3. `node scripts/prerender.mjs` rend l'application une fois par locale, injecte le HTML et le `<head>` correspondant dans `dist/index.html` et `dist/en/index.html`, génère `robots.txt` et `sitemap.xml`, puis supprime `dist-ssr/`.

Le résultat est un site entièrement statique : le texte est présent dans le HTML servi, sans exécution de JavaScript. C'est ce qui permet aux aperçus LinkedIn, WhatsApp ou Slack, qui n'exécutent pas de JS, d'afficher correctement le contenu.

---

## Structure

```
src/
  components/       sections de l'interface
  i18n/
    fr.ts           contenu français
    en.ts           contenu anglais
    types.ts        forme partagée des deux dictionnaires
    index.ts        contexte de langue, résolution depuis l'URL
  hooks/useTheme.ts
  config.ts         lecture de VITE_CV_URL
  entry-server.tsx  point d'entrée du rendu serveur
  main.tsx          hydratation côté client
scripts/
  prerender.mjs     génération des pages, du sitemap et du robots.txt
  og-image.html     gabarit de l'image Open Graph
  qa-snapshot.mjs   copies de QA avec animations neutralisées (développement)
  qa-probe.js       sonde de débordement horizontal (développement)
site.config.js      domaine et locales, source unique
public/
  og-image.png      1200x630, régénérée depuis scripts/og-image.html
```

**Pour modifier le contenu** (profil, expérience, projets, compétences) : éditer `src/i18n/fr.ts` et `src/i18n/en.ts`. `types.ts` garantit que les deux langues restent synchronisées : oublier une clé dans une langue provoque une erreur au `npm run lint`.

---

## Changer de domaine

Le domaine n'apparaît qu'à un seul endroit : `SITE_URL` dans `site.config.js`. Toutes les URL canoniques, `og:url`, `hreflang`, entrées JSON-LD, ainsi que `sitemap.xml` et `robots.txt`, en découlent.

```js
// site.config.js
export const SITE_URL = (process.env.SITE_URL || "https://johann.azur-it.fr").replace(/\/$/, "");
```

Pour basculer vers un domaine personnel :

1. Remplacer la valeur par défaut, ou définir la variable d'environnement `SITE_URL` au build.
2. Relancer `npm run build`.
3. Faire pointer le nouveau domaine vers l'hébergement et rediriger l'ancien en 301.

---

## Polices

Les polices sont auto-hébergées dans `public/fonts/` : pas de requête bloquante vers le CDN Google Fonts, et aucune adresse IP de visiteur transmise à un tiers, ce qui compte pour une audience suisse et européenne. Ce sont des fontes variables (un fichier par sous-ensemble au lieu d'un par graisse), sous-ensembles latins uniquement.

```bash
node scripts/fetch-fonts.mjs   # après tout changement de famille ou de graisse
```

Le script régénère `public/fonts/` et `src/fonts.css`, qui ne doit pas être édité à la main.

---

## Images

`scripts/profile-source.png` (1000x1000, 1,25 Mo) et `scripts/favicon-source.png` sont les sources. Elles restent hors de `public/` pour ne jamais être livrées. Les fichiers servis en sont dérivés :

```bash
npm install --no-save sharp
node scripts/optimise-images.mjs
```

Produit `profile.webp` (21 ko), `profile-576.png` (repli), `favicon-32.png` et `apple-touch-icon.png`.

---

## Régénérer l'image Open Graph

`public/og-image.png` (1200x630) est produite à partir de `scripts/og-image.html`, ce qui garantit les mêmes polices que le site :

```bash
chrome --headless=new --window-size=1200,630 --virtual-time-budget=8000 \
  --screenshot=public/og-image.png scripts/og-image.html
```

À refaire après tout changement de titre ou de positionnement.

---

## Variables d'environnement

| Variable      | Description                                            |
|---------------|--------------------------------------------------------|
| `VITE_CV_URL` | URL publique du CV hébergé (Google Drive, etc.)        |
| `SITE_URL`    | Domaine de production, si différent de la valeur par défaut |

Le PDF du CV n'est pas versionné. Si `VITE_CV_URL` n'est pas définie, les boutons de téléchargement sont masqués plutôt que de pointer vers une URL inexistante.

```bash
# .env.example
VITE_CV_URL=https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
```

---

## Contact

- **E-mail :** johann.avramov.pro@gmail.com
- **LinkedIn :** [linkedin.com/in/johann-avramov](https://linkedin.com/in/johann-avramov)
- **GitHub :** [github.com/nogaruki](https://github.com/nogaruki)

---

## Licence

Projet privé. Tous droits réservés.
