import { renderToString } from "react-dom/server";
import App from "./App";
import { getContent } from "./i18n";
import type { Lang } from "./i18n";

/** Called by scripts/prerender.mjs once per locale. */
export function render(lang: Lang) {
  return {
    html: renderToString(<App lang={lang} />),
    content: getContent(lang),
  };
}
