/**
 * The CV is hosted externally and injected at build time through VITE_CV_URL
 * (set it in the hosting provider's environment variables).
 *
 * When it is not set there is no CV to link to, so the download buttons are
 * hidden rather than pointing at a URL that would 404.
 */
const raw = import.meta.env.VITE_CV_URL;

export const CV_URL: string | null = raw && raw.trim() !== "" ? raw.trim() : null;
