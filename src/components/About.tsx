import { useI18n } from "../i18n";

export function About() {
  const { t } = useI18n();

  return (
    <section id="profil" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div
            className="lg:col-span-3"
          >
            <h2 className="font-mono text-xs text-accent uppercase tracking-widest">
              {t.about.label}
            </h2>
          </div>

          <div
            className="lg:col-span-9"
          >
            <div className="space-y-5">
              {t.about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`leading-relaxed ${
                    i === 0
                      ? "text-xl md:text-2xl text-text font-light"
                      : "text-base md:text-lg text-text-muted"
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>

            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {t.about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-surface border border-border p-5"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-3xl font-bold text-accent mb-1">
                      {stat.value}
                    </span>
                    <span className="block text-sm text-text-muted">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
