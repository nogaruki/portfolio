import { StrictMode } from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App";
import { langFromPath } from "./i18n";
import "./index.css";

const container = document.getElementById("root")!;
const lang = langFromPath(window.location.pathname);

const tree = (
  <StrictMode>
    <App lang={lang} />
  </StrictMode>
);

// The production build is prerendered, so hydrate. `vite dev` serves an empty
// root, in which case there is nothing to hydrate and we mount normally.
if (container.hasChildNodes()) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
