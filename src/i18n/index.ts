import { createContext, useContext } from "react";
import type { Content, Lang } from "./types";
import { fr } from "./fr";
import { en } from "./en";

export type { Content, Lang, Project, ExperienceItem, ArchNode, ArchEdge } from "./types";

const dictionaries: Record<Lang, Content> = { fr, en };

export function getContent(lang: Lang): Content {
  return dictionaries[lang];
}

/**
 * The active language is derived from the URL path, never from localStorage.
 * The server prerenders `/` as French and `/en/` as English, and the client
 * reads the same path on hydration, so the two can never disagree.
 */
export function langFromPath(pathname: string): Lang {
  return /^\/en(\/|$)/.test(pathname) ? "en" : "fr";
}

type I18n = { lang: Lang; t: Content };

const I18nContext = createContext<I18n>({ lang: "fr", t: fr });

export const I18nProvider = I18nContext.Provider;

export function useI18n(): I18n {
  return useContext(I18nContext);
}
