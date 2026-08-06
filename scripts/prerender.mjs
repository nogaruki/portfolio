// Prerenders one static HTML file per locale, plus robots.txt and sitemap.xml.
//
// Run by `npm run build`, after the client build (dist/) and the SSR build
// (dist-ssr/). Every absolute URL is derived from site.config.js, so moving the
// portfolio to another domain is a one-line change there.

import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { SITE_URL, LOCALES, DEFAULT_LOCALE } from "../site.config.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const distSsr = join(root, "dist-ssr");

const HEAD_START = "<!--head-start-->";
const HEAD_END = "<!--head-end-->";
const APP_MARKER = "<!--app-html-->";

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const { render } = await import(pathToFileURL(join(distSsr, "entry-server.js")).href);

const template = readFileSync(join(dist, "index.html"), "utf8");

for (const marker of [HEAD_START, HEAD_END, APP_MARKER]) {
  if (!template.includes(marker)) {
    throw new Error(`index.html is missing the ${marker} marker`);
  }
}

const urlFor = (locale) => (locale.path ? `${SITE_URL}/${locale.path}/` : `${SITE_URL}/`);

function buildHead(locale, content) {
  const { meta, personal, skills } = content;
  const canonical = urlFor(locale);
  const ogImage = `${SITE_URL}/og-image.png`;
  const alternates = LOCALES.map(
    (l) => `<link rel="alternate" hreflang="${l.hreflang}" href="${urlFor(l)}" />`,
  ).join("\n    ");
  const defaultLocale = LOCALES.find((l) => l.lang === DEFAULT_LOCALE);

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    jobTitle: meta.jobTitle,
    description: meta.jsonLdDescription,
    url: canonical,
    image: `${SITE_URL}/profile-576.png`,
    email: `mailto:${personal.email}`,
    sameAs: [personal.linkedin, personal.github],
    // First two tiers only. The third is "basics" (Java, Vue 3), which must not
    // surface as a claimed skill in structured data.
    knowsAbout: skills.groups.slice(0, 2).flatMap((g) => g.skills),
    knowsLanguage: personal.languages,
    worksFor: { "@type": "Organization", name: "Orange" },
    address: { "@type": "PostalAddress", addressLocality: "Antibes", addressCountry: "FR" },
    seeks: {
      "@type": "Demand",
      name: meta.jobTitle,
      availableAtOrFrom: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressRegion: locale.lang === "fr" ? "Suisse romande" : "French-speaking Switzerland",
          addressCountry: "CH",
        },
      },
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: meta.siteName,
    description: meta.description,
    url: canonical,
    inLanguage: locale.lang,
    author: { "@type": "Person", name: personal.name },
  };

  return `
    <title>${esc(meta.title)}</title>
    <meta name="description" content="${esc(meta.description)}" />

    <link rel="canonical" href="${canonical}" />
    ${alternates}
    <link rel="alternate" hreflang="x-default" href="${urlFor(defaultLocale)}" />

    <meta property="og:type" content="profile" />
    <meta property="og:title" content="${esc(meta.ogTitle)}" />
    <meta property="og:description" content="${esc(meta.ogDescription)}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${esc(meta.ogImageAlt)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:locale" content="${locale.ogLocale}" />
${LOCALES.filter((l) => l.lang !== locale.lang)
  .map((l) => `    <meta property="og:locale:alternate" content="${l.ogLocale}" />`)
  .join("\n")}
    <meta property="og:site_name" content="${esc(meta.siteName)}" />
    <meta property="profile:first_name" content="Johann" />
    <meta property="profile:last_name" content="Avramov" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(meta.ogTitle)}" />
    <meta name="twitter:description" content="${esc(meta.ogDescription)}" />
    <meta name="twitter:image" content="${ogImage}" />
    <meta name="twitter:image:alt" content="${esc(meta.ogImageAlt)}" />

    <script type="application/ld+json">${JSON.stringify(person)}</script>
    <script type="application/ld+json">${JSON.stringify(website)}</script>
  `;
}

const headStart = template.indexOf(HEAD_START);
const headEnd = template.indexOf(HEAD_END) + HEAD_END.length;

for (const locale of LOCALES) {
  const { html, content } = render(locale.lang);

  let page =
    template.slice(0, headStart) +
    buildHead(locale, content).trim() +
    template.slice(headEnd);

  page = page.replace(APP_MARKER, html);
  page = page.replace('<html lang="fr"', `<html lang="${locale.lang}"`);

  const outDir = locale.path ? join(dist, locale.path) : dist;
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), page);

  const textOnly = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  console.log(
    `  prerendered ${urlFor(locale).padEnd(34)} ${(page.length / 1024).toFixed(1)} kB, ${textOnly.length} chars of text`,
  );
}

// robots.txt and sitemap.xml, generated so the domain lives in one place only.
const today = new Date().toISOString().slice(0, 10);

writeFileSync(
  join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
);

writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${LOCALES.map(
  (locale) => `  <url>
    <loc>${urlFor(locale)}</loc>
${LOCALES.map(
  (alt) => `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${urlFor(alt)}" />`,
).join("\n")}
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${locale.lang === DEFAULT_LOCALE ? "1.0" : "0.9"}</priority>
  </url>`,
).join("\n")}
</urlset>
`,
);

rmSync(distSsr, { recursive: true, force: true });

console.log(`  robots.txt and sitemap.xml written for ${SITE_URL}`);
