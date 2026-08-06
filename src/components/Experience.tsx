import { useI18n } from "../i18n";

export function Experience() {
  const { t } = useI18n();

  return (
    <section id="parcours" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14">
          <div className="lg:col-span-3">
            <span className="font-mono text-xs text-accent uppercase tracking-widest">
              {t.experience.label}
            </span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text">
              {t.experience.heading}
              <span className="text-accent">.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3" />
          <div className="lg:col-span-9">
            <div className="relative">
              <div className="absolute left-0 top-3 bottom-3 w-px bg-border hidden md:block" aria-hidden="true" />

              {t.experience.items.map((exp) => (
                <div
                  key={`${exp.company}-${exp.period}`}
                  className="relative md:pl-8 pb-10 last:pb-0"
                >
                  <div className="hidden md:block absolute left-[-4px] top-3 w-2 h-2 rounded-full bg-accent ring-4 ring-bg" aria-hidden="true" />

                  <div className="rounded-xl bg-surface border border-border p-6 hover:border-border-light transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-display text-lg font-bold text-text">
                          {exp.role}
                        </h3>
                        <p className="text-accent font-medium text-sm mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <div className="sm:text-right shrink-0">
                        <span className="font-mono text-xs text-text-muted block">
                          {exp.period}
                        </span>
                        <span className="font-mono text-xs text-text-faint block mt-0.5">
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4 list-none">
                      {exp.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-text-muted leading-relaxed"
                        >
                          <span className="text-accent/60 mt-0.5 shrink-0" aria-hidden="true">›</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <ul className="flex flex-wrap gap-2 pt-3 border-t border-border list-none">
                      {exp.tags.map((tag) => (
                        <li
                          key={tag}
                          className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-elevated border border-border-light text-text-muted"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
