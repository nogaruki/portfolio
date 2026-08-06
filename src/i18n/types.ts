export type Lang = "fr" | "en";

export type ArchNode = {
  id: string;
  label: string;
  type: "client" | "api" | "db" | "external";
};

export type ArchEdge = {
  from: string;
  to: string;
  label?: string;
};

export type Project = {
  id: string;
  name: string;
  tagline: string;
  /** Omitted when no public deployment exists. Never link to a dead URL. */
  url?: string;
  /** Short status pill, e.g. "Projet en pause". Omitted when the project is live. */
  status?: string;
  stack: string[];
  problem: string;
  solution: string;
  challenges: string[];
  architecture: { nodes: ArchNode[]; edges: ArchEdge[] };
  /** Screen orientation of the captures, drives the thumbnail aspect ratio. */
  mockupOrientation: "mobile" | "desktop";
  mockups: { src: string; alt: string }[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
};

export type SkillGroup = {
  label: string;
  hint: string;
  skills: string[];
};

export type Content = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImageAlt: string;
    jsonLdDescription: string;
    jobTitle: string;
    siteName: string;
  };
  nav: {
    links: { label: string; href: string }[];
    cta: string;
    switchLabel: string;
    switchHref: string;
    switchAria: string;
    topAria: string;
    menuAria: string;
    themeToLight: string;
    themeToDark: string;
  };
  personal: {
    name: string;
    title: string;
    subtitle: string;
    availability: string;
    location: string;
    languages: string[];
    email: string;
    github: string;
    githubHandle: string;
    linkedin: string;
    linkedinHandle: string;
  };
  hero: {
    ctaProjects: string;
    ctaCv: string;
    photoAlt: string;
  };
  about: {
    label: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
  };
  projects: {
    label: string;
    heading: string;
    intro: string;
    problemLabel: string;
    solutionLabel: string;
    challengesLabel: string;
    architectureLabel: string;
    liveLabel: string;
    screenshotsLabel: string;
    viewLabel: string;
    items: Project[];
  };
  experience: {
    label: string;
    heading: string;
    items: ExperienceItem[];
  };
  teaching: {
    label: string;
    heading: string;
    role: string;
    institution: string;
    period: string;
    description: string;
    topics: string[];
  };
  skills: {
    label: string;
    heading: string;
    intro: string;
    groups: SkillGroup[];
  };
  contact: {
    label: string;
    heading: string;
    intro: string;
    availabilityNotice: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
    cvLabel: string;
    cvValue: string;
    primaryCta: string;
  };
  footer: {
    builtWith: string;
  };
  lightbox: {
    close: string;
    previous: string;
    next: string;
    goTo: (n: number) => string;
  };
};
