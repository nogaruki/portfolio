import { useI18n } from "../i18n";

export function Skills() {
  const { t } = useI18n();

  return (
    <section id="competences" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14">
          <div className="lg:col-span-3">
            <span className="font-mono text-xs text-accent uppercase tracking-widest">
              {t.skills.label}
            </span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
              {t.skills.heading}
              <span className="text-accent">.</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl">{t.skills.intro}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3" />
          <div className="lg:col-span-9 space-y-6">
            {t.skills.groups.map((group) => (
              <div
                key={group.label}
                className="rounded-xl bg-surface border border-border p-5 md:p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-4">
                  <h3 className="font-display text-base font-bold text-text">
                    {group.label}
                  </h3>
                  <span className="font-mono text-xs text-text-faint">
                    {group.hint}
                  </span>
                </div>

                <ul className="flex flex-wrap gap-2 list-none">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm font-mono px-3 py-1.5 rounded-lg bg-elevated border border-border-light text-text"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
