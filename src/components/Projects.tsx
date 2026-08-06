import { useState, useEffect, useCallback, useRef } from "react";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { useI18n } from "../i18n";
import type { Project } from "../i18n";
import { ExternalLink, ChevronDown, ChevronUp, X, ChevronLeft, ChevronRight } from "lucide-react";

type Mockup = { src: string; alt: string };

// ── Lightbox ──────────────────────────────────────────────────

function Lightbox({
  mockups,
  initialIndex,
  onClose,
}: {
  mockups: Mockup[];
  initialIndex: number;
  onClose: () => void;
}) {
  const { t } = useI18n();
  const [index, setIndex] = useState(initialIndex);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + mockups.length) % mockups.length),
    [mockups.length],
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % mockups.length), [mockups.length]);

  useEffect(() => {
    closeRef.current?.focus();

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key !== "Tab") return;

      // Keep focus inside the dialog.
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>("button");
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handler);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, prev, next]);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={mockups[index].alt}
      className="fade-in fixed inset-0 z-100 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-bg/95 backdrop-blur-md" aria-hidden="true" />

      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label={t.projects.screenshotsLabel + " : " + t.lightbox.close}
        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-border text-text-muted hover:text-text hover:border-border-light transition-colors"
      >
        <X size={18} aria-hidden="true" />
      </button>

      <span className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-xs text-text-faint z-10">
        {index + 1} / {mockups.length}
      </span>

      {mockups.length > 1 && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); prev(); }}
          aria-label={t.lightbox.previous}
          className="absolute left-2 sm:left-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-border text-text-muted hover:text-accent hover:border-accent/40 transition-colors"
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
      )}

      <div
        className="relative z-10 flex items-center justify-center px-14 sm:px-20 py-16 w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={index}
          src={mockups[index].src}
          alt={mockups[index].alt}
          className="fade-in max-h-full max-w-full object-contain rounded-2xl shadow-2xl"
          style={{ maxHeight: "calc(100vh - 8rem)" }}
          draggable={false}
        />
      </div>

      {mockups.length > 1 && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); next(); }}
          aria-label={t.lightbox.next}
          className="absolute right-2 sm:right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-border text-text-muted hover:text-accent hover:border-accent/40 transition-colors"
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      )}

      {mockups.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
          {mockups.map((m, i) => (
            <button
              key={m.src}
              type="button"
              onClick={(e) => { e.stopPropagation(); setIndex(i); }}
              aria-label={t.lightbox.goTo(i + 1)}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "bg-accent w-4" : "bg-border-light w-1.5 hover:bg-text-faint"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ── Thumbnails ────────────────────────────────────────────────

function MockupGrid({
  mockups,
  orientation,
  viewLabel,
  onOpen,
}: {
  mockups: Mockup[];
  orientation: Project["mockupOrientation"];
  viewLabel: string;
  onOpen: (index: number) => void;
}) {
  // Mobile captures are portrait; desktop captures are full-page and wide, so
  // a 9/16 tile would crop them down to an unreadable vertical strip.
  const isMobile = orientation === "mobile";
  const tile = isMobile ? "aspect-[9/16]" : "aspect-[16/10]";
  const cols = isMobile
    ? "grid-cols-2 sm:grid-cols-3"
    : "grid-cols-1 sm:grid-cols-2";

  return (
    <div className={`grid ${cols} gap-3`}>
      {mockups.map((m, i) => (
        <button
          key={m.src}
          type="button"
          onClick={() => onOpen(i)}
          className={`${tile} rounded-xl overflow-hidden bg-surface border border-border group relative cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
        >
          <img
            src={m.src}
            alt={m.alt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-bg/40 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity flex items-center justify-center">
            <span className="font-mono text-[10px] text-text uppercase tracking-widest bg-surface/80 px-2 py-1 rounded">
              {viewLabel}
            </span>
          </span>
        </button>
      ))}
    </div>
  );
}

// ── Project card ──────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const hasMockups = project.mockups.length > 0;

  return (
    <>
      <article
        className="rounded-2xl bg-surface border border-border overflow-hidden"
      >
        <div className="p-6 md:p-8 border-b border-border">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-text">
                {project.name}
              </h3>
              {project.status && (
                <span className="inline-block mt-2 text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-md bg-elevated border border-border-light text-text-faint">
                  {project.status}
                </span>
              )}
            </div>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 text-xs font-medium text-accent border border-accent/30 rounded-lg px-3 py-1.5 hover:bg-accent/10 transition-colors"
              >
                {t.projects.liveLabel} <ExternalLink size={12} aria-hidden="true" />
              </a>
            )}
          </div>

          <p className="text-lg text-text-muted leading-relaxed mb-5">
            {project.tagline}
          </p>

          <ul className="flex flex-wrap gap-2 list-none">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-elevated border border-border-light text-text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h4 className="font-mono text-xs text-warm uppercase tracking-widest mb-3">
                {t.projects.problemLabel}
              </h4>
              <p className="text-sm text-text-muted leading-relaxed">{project.problem}</p>
            </div>

            <div>
              <h4 className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
                {t.projects.solutionLabel}
              </h4>
              <p className="text-sm text-text-muted leading-relaxed">{project.solution}</p>
            </div>

            <div>
              <h4 className="font-mono text-xs text-node-api-border uppercase tracking-widest mb-3">
                {t.projects.challengesLabel}
              </h4>
              <ul className="space-y-2 list-none">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-muted leading-relaxed">
                    <span className="text-node-api-border mt-0.5 shrink-0" aria-hidden="true">›</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <ArchitectureDiagram
              title={t.projects.architectureLabel}
              nodes={project.architecture.nodes}
              edges={project.architecture.edges}
            />
          </div>
        </div>

        {hasMockups && (
          <div className="border-t border-border">
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-controls={`mockups-${project.id}`}
              className="w-full flex items-center justify-between px-6 md:px-8 py-4 text-sm text-text-muted hover:text-text transition-colors"
            >
              <span className="font-mono text-xs uppercase tracking-widest">
                {t.projects.screenshotsLabel} ({project.mockups.length})
              </span>
              {expanded ? <ChevronUp size={16} aria-hidden="true" /> : <ChevronDown size={16} aria-hidden="true" />}
            </button>

            {expanded && (
              <div id={`mockups-${project.id}`} className="fade-in px-6 md:px-8 pb-8">
                <MockupGrid
                  mockups={project.mockups}
                  orientation={project.mockupOrientation}
                  viewLabel={t.projects.viewLabel}
                  onOpen={setLightboxIndex}
                />
              </div>
            )}
          </div>
        )}
      </article>

      {lightboxIndex !== null && (
        <Lightbox
          mockups={project.mockups}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}

// ── Section ───────────────────────────────────────────────────

export function Projects() {
  const { t } = useI18n();

  return (
    <section id="projets" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14">
          <div className="lg:col-span-3">
            <span className="font-mono text-xs text-accent uppercase tracking-widest">
              {t.projects.label}
            </span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
              {t.projects.heading}
              <span className="text-accent">.</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl">{t.projects.intro}</p>
          </div>
        </div>

        <div className="space-y-8">
          {t.projects.items.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
