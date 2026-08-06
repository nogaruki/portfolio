import { useI18n } from "../i18n";

const BUILD_YEAR = __BUILD_YEAR__;

export function Footer() {
  const { t } = useI18n();
  const p = t.personal;

  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-text text-sm">
          JA<span className="text-accent">.</span>
        </span>

        <p className="text-xs text-text-faint font-mono text-center">
          &copy; {BUILD_YEAR} {p.name} · {t.footer.builtWith}
        </p>

        <div className="flex items-center gap-4 text-xs text-text-faint font-mono">
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            {t.contact.githubLabel}
          </a>
          <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            {t.contact.linkedinLabel}
          </a>
          <a href={`mailto:${p.email}`} className="hover:text-accent transition-colors">
            {t.contact.emailLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}
