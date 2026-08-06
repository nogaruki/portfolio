import { GraduationCap } from "lucide-react";
import { useI18n } from "../i18n";

export function Teaching() {
  const { t } = useI18n();

  return (
    <section id="enseignement" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14">
          <div className="lg:col-span-3">
            <span className="font-mono text-xs text-accent uppercase tracking-widest">
              {t.teaching.label}
            </span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text">
              {t.teaching.heading}
              <span className="text-accent">.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3" />
          <div
            className="lg:col-span-9"
          >
            <div className="rounded-2xl bg-surface border border-border p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <GraduationCap size={18} className="text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-text">
                      {t.teaching.role}
                    </h3>
                    <p className="text-accent font-medium text-sm mt-0.5">
                      {t.teaching.institution}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-text-muted shrink-0 sm:text-right">
                  {t.teaching.period}
                </span>
              </div>

              <p className="text-sm md:text-base text-text-muted leading-relaxed mb-5">
                {t.teaching.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {t.teaching.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-elevated border border-border-light text-text-muted"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
