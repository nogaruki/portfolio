import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Teaching } from "./components/Teaching";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { I18nProvider, getContent } from "./i18n";
import type { Lang } from "./i18n";

export default function App({ lang }: { lang: Lang }) {
  return (
    <I18nProvider value={{ lang, t: getContent(lang) }}>
      <div className="min-h-screen flex flex-col">
        <a
          href="#profil"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-accent focus:text-bg focus:font-semibold"
        >
          {lang === "fr" ? "Aller au contenu" : "Skip to content"}
        </a>
        <Header />
        <main className="grow">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Teaching />
          <Contact />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
