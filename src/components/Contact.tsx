import { Mail, Github, Linkedin, Download, MapPin } from "lucide-react";
import { useI18n } from "../i18n";
import { CV_URL } from "../config";

export function Contact() {
  const { t } = useI18n();
  const p = t.personal;

  const cardClass =
    "flex items-center gap-3 rounded-xl bg-elevated border border-border-light p-4 hover:border-accent/40 transition-colors group";
  const iconClass =
    "w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors";

  return (
    <section id="contact" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14">
          <div className="lg:col-span-3">
            <span className="font-mono text-xs text-accent uppercase tracking-widest">
              {t.contact.label}
            </span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
              {t.contact.heading}
              <span className="text-accent">.</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl">{t.contact.intro}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3" />
          <div className="lg:col-span-9">
            <div
              className="rounded-2xl bg-surface border border-border p-6 md:p-8"
            >
              <div className="flex items-start gap-3 rounded-xl bg-accent/8 border border-accent/20 p-4 mb-8">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-accent-light leading-relaxed">
                  {t.contact.availabilityNotice}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <a href={`mailto:${p.email}`} className={cardClass}>
                  <span className={iconClass}>
                    <Mail size={18} className="text-accent" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-text-faint font-mono mb-0.5">
                      {t.contact.emailLabel}
                    </span>
                    <span className="block text-sm text-text font-medium break-all">
                      {p.email}
                    </span>
                  </span>
                </a>

                <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className={cardClass}>
                  <span className={iconClass}>
                    <Linkedin size={18} className="text-accent" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-text-faint font-mono mb-0.5">
                      {t.contact.linkedinLabel}
                    </span>
                    <span className="block text-sm text-text font-medium">
                      /in/{p.linkedinHandle}
                    </span>
                  </span>
                </a>

                <a href={p.github} target="_blank" rel="noopener noreferrer" className={cardClass}>
                  <span className={iconClass}>
                    <Github size={18} className="text-accent" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-text-faint font-mono mb-0.5">
                      {t.contact.githubLabel}
                    </span>
                    <span className="block text-sm text-text font-medium">
                      {p.githubHandle}
                    </span>
                  </span>
                </a>

                {CV_URL && (
                  <a href={CV_URL} target="_blank" rel="noopener noreferrer" className={cardClass}>
                    <span className={iconClass}>
                      <Download size={18} className="text-accent" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-text-faint font-mono mb-0.5">
                        {t.contact.cvLabel}
                      </span>
                      <span className="block text-sm text-text font-medium">
                        {t.contact.cvValue}
                      </span>
                    </span>
                  </a>
                )}
              </div>

              <a
                href={`mailto:${p.email}`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-accent text-bg font-bold text-sm hover:opacity-90 transition-opacity"
              >
                <Mail size={16} aria-hidden="true" /> {t.contact.primaryCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
