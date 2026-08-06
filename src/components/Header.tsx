import { Menu, X, Sun, Moon, Languages } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";
import { useI18n } from "../i18n";

export function Header() {
  const { t } = useI18n();
  const [progress, setProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(window.scrollY > 60);
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const themeLabel = isDark ? t.nav.themeToLight : t.nav.themeToDark;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-(--color-bg)/90 backdrop-blur-md border-b border-(--color-border) py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] w-full bg-(--color-accent) origin-left"
        style={{ transform: `scaleX(${progress})` }}
      />

      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/*
          No aria-label here: it would replace the visible "JA." and trip the
          "label does not match visible text" rule. The extra name is appended
          visually hidden instead, so the accessible name still starts with it.
        */}
        <a
          href="#"
          className="font-display text-base font-bold text-(--color-text) tracking-tight hover:text-(--color-accent) transition-colors"
        >
          JA<span className="text-(--color-accent)">.</span>
          <span className="sr-only"> {t.nav.topAria}</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {t.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-(--color-text-muted) hover:text-(--color-text) transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium px-4 py-2 rounded-lg border border-(--color-accent)/40 text-(--color-accent) hover:bg-(--color-accent)/10 transition-colors"
          >
            {t.nav.cta}
          </a>

          <a
            href={t.nav.switchHref}
            hrefLang={t.nav.switchLabel.toLowerCase()}
            aria-label={t.nav.switchAria}
            className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg border border-(--color-border) text-xs font-mono font-medium text-(--color-text-muted) hover:text-(--color-accent) hover:border-(--color-accent)/40 transition-colors"
          >
            <Languages size={14} aria-hidden="true" />
            {t.nav.switchLabel}
          </a>

          <button
            type="button"
            onClick={toggle}
            aria-label={themeLabel}
            title={themeLabel}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-(--color-border) text-(--color-text-muted) hover:text-(--color-accent) hover:border-(--color-accent)/40 transition-colors"
          >
            {isDark ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href={t.nav.switchHref}
            hrefLang={t.nav.switchLabel.toLowerCase()}
            aria-label={t.nav.switchAria}
            className="h-9 px-3 inline-flex items-center rounded-lg border border-(--color-border) text-xs font-mono font-medium text-(--color-text-muted) hover:text-(--color-accent) transition-colors"
          >
            {t.nav.switchLabel}
          </a>
          <button
            type="button"
            onClick={toggle}
            aria-label={themeLabel}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-(--color-border) text-(--color-text-muted) hover:text-(--color-accent) transition-colors"
          >
            {isDark ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
          </button>
          <button
            type="button"
            className="w-9 h-9 flex items-center justify-center text-(--color-text)"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={t.nav.menuAria}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMobileMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-nav"
          className="fade-in absolute top-full left-0 right-0 bg-(--color-surface)/95 backdrop-blur-md border-b border-(--color-border) md:hidden"
        >
          <nav className="flex flex-col py-4 px-6">
            {[...t.nav.links, { label: t.nav.cta, href: "#contact" }].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 text-base font-medium text-(--color-text-muted) hover:text-(--color-text) transition-colors border-b border-(--color-border) last:border-0"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
