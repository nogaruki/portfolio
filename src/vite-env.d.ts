/// <reference types="vite/client" />

/** Injected by vite.config.ts `define`. */
declare const __BUILD_YEAR__: number;

interface ImportMetaEnv {
  readonly VITE_CV_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
