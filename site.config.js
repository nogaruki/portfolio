// Single source of truth for the deployed origin.
//
// To move the portfolio to another domain, either change DEFAULT_ORIGIN below
// or set the SITE_URL environment variable at build time (Vercel project
// settings, for instance). Every canonical URL, og:url, hreflang, JSON-LD
// entry, sitemap.xml and robots.txt is generated from this value.
//
// Only set SITE_URL once the domain actually resolves and is attached to the
// deployment. Pointing canonicals at a domain that does not answer tells search
// engines the real content lives somewhere unreachable.

const DEFAULT_ORIGIN = "https://johann.azur-it.fr";

/**
 * Accepts "example.ch", "https://example.ch" or "https://example.ch/" and
 * always returns a scheme-qualified origin with no trailing slash. Without the
 * scheme the generated canonical would be a relative URL, which is silently
 * useless rather than obviously broken.
 */
function normaliseOrigin(value) {
  const raw = (value ?? "").trim();
  if (raw === "") return DEFAULT_ORIGIN;

  const withScheme = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;

  let url;
  try {
    url = new URL(withScheme);
  } catch {
    throw new Error(
      `SITE_URL is not a usable origin: ${JSON.stringify(value)}. ` +
        `Use a host such as "example.ch" or "https://example.ch".`,
    );
  }

  if (!url.hostname.includes(".")) {
    throw new Error(
      `SITE_URL has no domain: ${JSON.stringify(value)}. Expected something like "example.ch".`,
    );
  }

  return url.origin;
}

export const SITE_URL = normaliseOrigin(process.env.SITE_URL);

// Locales, in the order they are prerendered.
// `path` is the directory written under dist/.
export const LOCALES = [
  { lang: "fr", path: "", ogLocale: "fr_FR", hreflang: "fr" },
  { lang: "en", path: "en", ogLocale: "en_US", hreflang: "en" },
];

export const DEFAULT_LOCALE = "fr";
