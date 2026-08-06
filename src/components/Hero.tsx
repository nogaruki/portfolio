import { ArrowRight, Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import { useI18n } from "../i18n";
import { CV_URL } from "../config";

/** Decorative signature; the drawing animation lives in index.css. */
function Signature() {
  return (
    <svg
      viewBox="100 120 700 330"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className="signature w-48 sm:w-56 text-text-muted/50"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="700.95" cy="210.07" r="3.61" fill="currentColor" stroke="none" />
      <path d="M563.49,224.95c55.47-13.8,121.22-14.88,121.22-14.88" />

      <circle cx="439.93" cy="258.73" r="3.61" fill="currentColor" stroke="none" />
      <path d="M354.06,304.77c34.36-31.93,70.89-40.59,70.89-40.59" />

      <circle cx="273.61" cy="370.98" r="3.61" fill="currentColor" stroke="none" />
      <path d="M147.88,342.12c71.8,5.77,111.48,20.56,111.48,20.56" />

      <circle cx="753.04" cy="278.8" r="3.61" fill="currentColor" stroke="none" />
      <path d="M461.75,430.06l118.52-304.41c0,0-64.23,131.47-163.16,219.99c-87.4,78.2-119.87,14.61-51.1-33.92c57.18-40.35,145-59.71,145-59.71s77.7-21.07,195.33-25.3c131.54-4.73,103.4,43.98,60.64,51.15" />

      <circle cx="260.26" cy="276.27" r="3.61" fill="currentColor" stroke="none" />
      <path d="M273.07,271.76c112.38-52.49,140.88-129.31,136.74-130.69c-6.19-2.07-111.12,231.71-111.12,231.71c-36.08-50.69-259.58-46.9-259.58-46.9l367.45-10.82" />
    </svg>
  );
}

export function Hero() {
  const { t } = useI18n();
  const p = t.personal;

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 px-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#38bdf8]/5 blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-[#f97316]/5 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">

          <div className="flex-1 min-w-0">
            <p className="reveal flex items-center gap-1.5 text-xs text-text-muted font-mono mb-8">
              <MapPin size={12} aria-hidden="true" />
              {p.location}
            </p>

            <h1
              className="reveal font-display text-6xl sm:text-7xl md:text-8xl font-bold text-text leading-[0.95] tracking-tight mb-6"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="block">Johann</span>
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#38bdf8] to-node-external-border">
                Avramov
              </span>
            </h1>

            <div className="fade-in mb-8" style={{ animationDelay: "0.5s" }}>
              <Signature />
            </div>

            <div className="reveal mb-10 max-w-2xl" style={{ animationDelay: "0.15s" }}>
              <p className="text-xl md:text-2xl font-medium text-text mb-2">{p.title}</p>
              <p className="text-base md:text-lg text-text-muted font-mono mb-5">{p.subtitle}</p>
              <p className="text-sm md:text-base text-accent-light leading-relaxed rounded-xl bg-accent/8 border border-accent/20 px-4 py-3">
                {p.availability}
              </p>
            </div>

            <div
              className="reveal flex flex-wrap items-center gap-x-5 gap-y-3 mb-10"
              style={{ animationDelay: "0.25s" }}
            >
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors font-mono"
              >
                <Github size={16} aria-hidden="true" /> {p.githubHandle}
              </a>
              <a
                href={p.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors font-mono"
              >
                <Linkedin size={16} aria-hidden="true" /> {p.linkedinHandle}
              </a>
              <a
                href={`mailto:${p.email}`}
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors font-mono break-all"
              >
                <Mail size={16} aria-hidden="true" /> {p.email}
              </a>
            </div>

            <div className="reveal flex flex-wrap gap-4" style={{ animationDelay: "0.35s" }}>
              <a
                href="#projets"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-bg font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                {t.hero.ctaProjects} <ArrowRight size={16} aria-hidden="true" />
              </a>
              {CV_URL && (
                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-text-muted font-medium text-sm hover:border-accent/40 hover:text-accent transition-colors"
                >
                  <Download size={16} aria-hidden="true" /> {t.hero.ctaCv}
                </a>
              )}
            </div>

            <ul className="reveal mt-14 flex flex-wrap gap-2 list-none" style={{ animationDelay: "0.45s" }}>
              {p.languages.map((lang) => (
                <li
                  key={lang}
                  className="text-xs px-3 py-1 rounded-full bg-surface border border-border text-text-muted font-mono"
                >
                  {lang}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal shrink-0 flex justify-center lg:justify-end" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-linear-to-br from-[#38bdf8]/40 to-node-external-border/20 blur-sm" aria-hidden="true" />
              <div className="absolute -inset-4 rounded-full bg-[#38bdf8]/5 blur-2xl" aria-hidden="true" />
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-accent/30">
                {/*
                  Largest displayed size is 288px, so 576px covers 2x screens.
                  No fetchPriority here: the LCP element is the heading, and
                  promoting the photo only makes it compete for bandwidth.
                */}
                <picture>
                  <source srcSet="/profile.webp" type="image/webp" />
                  <img
                    src="/profile-576.png"
                    alt={t.hero.photoAlt}
                    width={576}
                    height={576}
                    className="w-full h-full object-cover object-top"
                  />
                </picture>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
