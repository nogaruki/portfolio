import type { Content } from "./types";

export const en: Content = {
  meta: {
    title: "Johann Avramov | Full-Stack Engineer TypeScript / PHP | Switzerland",
    description:
      "Full-stack engineer, TypeScript and PHP, at Orange. Angular, TypeScript, Node.js, Symfony. Relocating to French-speaking Switzerland, Geneva and Lausanne, upon signing. EU citizen, available within 1 month.",
    ogTitle: "Johann Avramov, full-stack engineer (TypeScript / PHP)",
    ogDescription:
      "Angular, TypeScript, Node.js, Symfony. Relocating to French-speaking Switzerland (Geneva, Lausanne) upon signing. EU citizen, available within 1 month.",
    ogImageAlt: "Johann Avramov, full-stack engineer, TypeScript and PHP, Switzerland",
    jsonLdDescription:
      "Full-stack engineer, TypeScript and PHP. Angular, TypeScript, Node.js, Symfony. Looking for a role in French-speaking Switzerland, between Geneva and Lausanne.",
    jobTitle: "Full-Stack Engineer",
    siteName: "Johann Avramov",
  },

  nav: {
    links: [
      { label: "Profile", href: "#profil" },
      { label: "Projects", href: "#projets" },
      { label: "Experience", href: "#parcours" },
      { label: "Skills", href: "#competences" },
      { label: "Teaching", href: "#enseignement" },
    ],
    cta: "Get in touch",
    switchLabel: "FR",
    switchHref: "/",
    switchAria: "Passer en français",
    topAria: "Johann Avramov, back to top",
    menuAria: "Open or close the menu",
    themeToLight: "Switch to light theme",
    themeToDark: "Switch to dark theme",
  },

  personal: {
    name: "Johann Avramov",
    title: "Full-Stack Engineer (TypeScript / PHP)",
    subtitle: "Angular · TypeScript · React · Node.js · Symfony",
    availability:
      "Relocating to French-speaking Switzerland (Geneva - Lausanne) upon signing · EU citizen (B permit) · Available within 1 month",
    location: "Antibes, France",
    languages: ["French (native)", "English (C1)", "German (basics)"],
    email: "johann.avramov.pro@gmail.com",
    github: "https://github.com/nogaruki",
    githubHandle: "nogaruki",
    linkedin: "https://linkedin.com/in/johann-avramov",
    linkedinHandle: "johann-avramov",
  },

  hero: {
    ctaProjects: "View projects",
    ctaCv: "Download CV",
    photoAlt: "Portrait of Johann Avramov",
  },

  about: {
    label: "Profile",
    paragraphs: [
      "Full-stack engineer at Orange in Sophia Antipolis since February 2025, acting as front-end tech lead for a team of three developers, within a 20-person SAFe organisation.",
      "My daily stack is Angular, TypeScript, Node.js and Symfony, with GitLab CI/CD, Docker and GCP. I led the migration of business-critical applications from Angular 8 to Angular 21 and from Symfony 5 to Symfony 7, raising SonarQube coverage from 65% to 85%.",
      "Before Orange I founded and ran AzurIT, a two-employee company, and delivered three SaaS products in fourteen months. I am now looking for a developer role in French-speaking Switzerland, between Geneva and Lausanne.",
    ],
    stats: [
      { value: "3", label: "SaaS products delivered" },
      { value: "1,500", label: "accounts created on Datark" },
      { value: "2", label: "large accounts: Orange, Amadeus" },
    ],
  },

  projects: {
    label: "Projects",
    heading: "What I have built",
    intro:
      "Four products designed and developed end to end, from problem definition to production deployment.",
    problemLabel: "Context",
    solutionLabel: "What I built",
    challengesLabel: "Technical points",
    architectureLabel: "Architecture",
    liveLabel: "View the product",
    screenshotsLabel: "Screenshots",
    viewLabel: "Enlarge",
    items: [
      {
        id: "datark",
        name: "Datark",
        tagline: "Open-access platform for heritage sciences.",
        url: "https://datark.fr/",
        stack: ["Next.js", "NestJS", "PostgreSQL", "TypeScript", "Stripe", "Copyleaks"],
        problem:
          "Open-access platform for heritage sciences (archaeology, history, conservation): PDF publication submission, search through the PACTOLS thesaurus, co-author collaboration and subscriptions.",
        solution:
          "Full rewrite of a platform already in production with 1,500 accounts created: moving from Angular, Express and MongoDB to Next.js, NestJS and PostgreSQL, with a progressive data migration.",
        challenges: [
          "Progressive data migration from MongoDB to PostgreSQL, with no downtime for the platform in production.",
          "Plagiarism detection through the Copyleaks API: PDF submission, asynchronous results received over a webhook with a verified HMAC-SHA256 signature, a state machine exposed to the front end, and administrator notification for manual review. Integrated in sandbox mode.",
          "Graceful degradation of the third-party service: with no API key the scan is marked as skipped, on a network error it is marked as failed, and the publication upload succeeds in both cases.",
          "Search indexed on the PACTOLS thesaurus, and co-author management on every submission.",
        ],
        architecture: {
          nodes: [
            { id: "front", label: "Next.js", type: "client" },
            { id: "api", label: "NestJS", type: "api" },
            { id: "db", label: "PostgreSQL", type: "db" },
            { id: "stripe", label: "Stripe", type: "external" },
            { id: "copyleaks", label: "Copyleaks", type: "external" },
          ],
          edges: [
            { from: "front", to: "api", label: "REST" },
            { from: "api", to: "db", label: "SQL" },
            { from: "api", to: "stripe", label: "subscriptions" },
            { from: "api", to: "copyleaks", label: "signed webhook" },
          ],
        },
        mockupOrientation: "desktop",
        mockups: [
          { src: "/images/mockups/datark/home.webp", alt: "Datark, home page and search engine" },
          { src: "/images/mockups/datark/collections.webp", alt: "Datark, document collections" },
          { src: "/images/mockups/datark/publications.webp", alt: "Datark, publication list" },
          { src: "/images/mockups/datark/search.webp", alt: "Datark, thesaurus search" },
          { src: "/images/mockups/datark/account.webp", alt: "Datark, account management" },
          { src: "/images/mockups/datark/about.webp", alt: "Datark, about page" },
        ],
      },
      {
        id: "aquapro",
        name: "AquaPro Manager",
        tagline: "Web application for swimming pool maintenance professionals.",
        url: "https://aquapromanager.fr/",
        stack: [
          "Next.js 16",
          "React 19",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
          "Firebase",
          "Stripe",
          "Zod",
          "Vitest",
        ],
        problem:
          "Pool maintenance professionals track their clients, their jobs and their invoicing across paper notes, messaging apps and spreadsheets. Nothing is connected, and client history gets lost.",
        solution:
          "Responsive web application for pool professionals: a multi-tenant SaaS covering clients, pools, jobs, stock, products, accounting and invoicing, with Stripe subscriptions.",
        challenges: [
          "Multi-tenant model with per-company data isolation.",
          "Stripe subscriptions and billing wired into the job lifecycle.",
          "Quote and invoice, accounting, stock, supplier and employee tracking modules.",
          "Form validation with Zod schemas and react-hook-form, Recharts dashboards and Vitest tests.",
          "OpenTelemetry instrumentation and performance monitoring.",
        ],
        architecture: {
          nodes: [
            { id: "app", label: "Next.js App Router", type: "client" },
            { id: "api", label: "Firebase Admin", type: "api" },
            { id: "db", label: "Firebase", type: "db" },
            { id: "stripe", label: "Stripe", type: "external" },
          ],
          edges: [
            { from: "app", to: "api", label: "server actions" },
            { from: "api", to: "db", label: "read / write" },
            { from: "api", to: "stripe", label: "subscriptions" },
          ],
        },
        mockupOrientation: "desktop",
        mockups: [
          { src: "/images/mockups/aquapromanage/site.webp", alt: "AquaPro Manager, marketing site" },
          { src: "/images/mockups/aquapromanage/pools.webp", alt: "AquaPro Manager, pool management" },
          { src: "/images/mockups/aquapromanage/clients.webp", alt: "AquaPro Manager, client management" },
          { src: "/images/mockups/aquapromanage/employee.webp", alt: "AquaPro Manager, employee management" },
          { src: "/images/mockups/aquapromanage/products.webp", alt: "AquaPro Manager, product catalogue" },
          { src: "/images/mockups/aquapromanage/comptabilities.webp", alt: "AquaPro Manager, accounting module" },
        ],
      },
      {
        id: "airsofthub",
        name: "AirsoftHub",
        tagline: "Management platform for airsoft clubs.",
        status: "Project on hold",
        stack: [
          "React 18",
          "Vite",
          "TypeScript",
          "Supabase",
          "PostgreSQL",
          "Tailwind CSS",
          "shadcn/ui",
          "Vitest",
        ],
        problem:
          "Airsoft clubs manage their members, field bookings, membership fees and inventory by hand, across spreadsheets and messaging apps.",
        solution:
          "A single platform bringing together member management, slot booking, automated invoicing and QR code access control, spread across eighteen functional modules.",
        challenges: [
          "Multi-tenant security enforced at the database level: PostgreSQL Row Level Security policies on Supabase, in a dedicated migration.",
          "Nine business Edge Functions: slot booking, PDF invoice and QR code generation, member invitation, inventory management, scheduled reminders and email sending.",
          "Six versioned SQL migrations to evolve the schema.",
          "Custom build guardrails, blocking in development and at build time: mock data detection, Supabase configuration validation and environment checks.",
        ],
        architecture: {
          nodes: [
            { id: "app", label: "React + Vite", type: "client" },
            { id: "fn", label: "Edge Functions", type: "api" },
            { id: "db", label: "PostgreSQL + RLS", type: "db" },
            { id: "auth", label: "Supabase Auth", type: "external" },
          ],
          edges: [
            { from: "app", to: "fn", label: "invoke" },
            { from: "fn", to: "db", label: "SQL" },
            { from: "app", to: "auth", label: "session" },
          ],
        },
        mockupOrientation: "desktop",
        mockups: [],
      },
      {
        id: "mamasafefood",
        name: "MamaSafeFood",
        tagline: "Mobile app helping pregnant women decide what is safe to eat.",
        url: "https://www.mamasafefood.com/",
        stack: [
          "React Native",
          "Expo",
          "TypeScript",
          "Firebase",
          "Cloud Functions",
          "Google Gemini",
          "RevenueCat",
        ],
        problem:
          "During pregnancy, checking whether a food is safe means cross-referencing scattered medical sources. That is not usable standing in a supermarket aisle or in front of a restaurant menu.",
        solution:
          "A mobile app that identifies ingredients from a photo of a dish or a restaurant menu, then returns a verdict matched to the pregnancy profile: green, orange or red, with an explanation and a per-ingredient breakdown.",
        challenges: [
          "Ingredient recognition and risk analysis through the Google Gemini API, with two input modes: photo of a dish, and restaurant menu.",
          "Robust model calls: three attempts with progressive backoff, retries limited to 429 and 5xx responses, fallback to a secondary model, recovery of truncated JSON responses and an image size cap.",
          "Verdict computed from the user profile: trimester, toxoplasmosis immunity, allergies and how the food was prepared.",
          "Migration from Supabase to Firebase: authentication, Firestore, storage and Cloud Functions.",
          "Subscriptions handled through RevenueCat, Google and Apple sign-in, Jest tests on the analysis functions.",
        ],
        architecture: {
          nodes: [
            { id: "app", label: "Expo / React Native", type: "client" },
            { id: "fn", label: "Cloud Functions", type: "api" },
            { id: "db", label: "Firestore", type: "db" },
            { id: "ai", label: "Google Gemini", type: "external" },
            { id: "rc", label: "RevenueCat", type: "external" },
          ],
          edges: [
            { from: "app", to: "fn", label: "HTTPS" },
            { from: "fn", to: "db", label: "read / write" },
            { from: "fn", to: "ai", label: "analysis" },
            { from: "app", to: "rc", label: "subscriptions" },
          ],
        },
        mockupOrientation: "mobile",
        mockups: [
          { src: "/images/mockups/mamasafefood/home.webp", alt: "MamaSafeFood, home screen" },
          { src: "/images/mockups/mamasafefood/food-checker.webp", alt: "MamaSafeFood, detected ingredient confirmation" },
          { src: "/images/mockups/mamasafefood/good-to-consum.webp", alt: "MamaSafeFood, favourable verdict" },
          { src: "/images/mockups/mamasafefood/bad-to-consum.webp", alt: "MamaSafeFood, unfavourable verdict" },
          { src: "/images/mockups/mamasafefood/quick-questions.webp", alt: "MamaSafeFood, preparation questions" },
          { src: "/images/mockups/mamasafefood/site.webp", alt: "MamaSafeFood, marketing site" },
        ],
      },
    ],
  },

  experience: {
    label: "Experience",
    heading: "Where I have worked",
    items: [
      {
        company: "Orange",
        role: "Full-Stack Engineer, front-end tech lead",
        period: "February 2025 - present",
        location: "Sophia Antipolis, France",
        bullets: [
          "Migrated business-critical applications from Angular 8 to Angular 21 and from Symfony 5 to Symfony 7, raising SonarQube coverage from 65% to 85%.",
          "Front-end tech lead for a team of three developers, within a 20-person team organised in SAFe.",
          "Introduced TDD and Jest coverage above 90%: average defects per sprint reduced from 18 to 3.",
          "Cut production release time from 1 to 2 days down to 2 to 3 hours, using GitLab CI/CD, Docker and a rollback strategy.",
          "Built features on Cockpit, Orange's omnichannel campaign management platform, and ran the services on GCP.",
        ],
        tags: ["Angular", "TypeScript", "Symfony", "PHP 8", "GitLab CI/CD", "Docker", "GCP", "MySQL", "Jest"],
      },
      {
        company: "AzurIT (SARL)",
        role: "Founder and lead developer",
        period: "September 2023 - November 2024",
        location: "Antibes, France",
        bullets: [
          "Founded and ran a two-employee company, from product definition through to day-to-day operations.",
          "Three SaaS products delivered in fourteen months: Datark, AquaPro Manager and MamaSafeFood.",
          "Designed the REST APIs, data models and business logic, from requirements gathering to deployment and maintenance.",
          "Automated data extraction with Puppeteer: retry logic, selector fallbacks and structured exports.",
          "Wound the company down by choice at the end of 2024 to join a corporate environment.",
        ],
        tags: ["Next.js", "React", "Node.js", "NestJS", "MongoDB", "Firebase", "Stripe", "Puppeteer"],
      },
      {
        company: "Amadeus",
        role: "Back-end developer (apprenticeship)",
        period: "2022 - 2023",
        location: "Sophia Antipolis, France",
        bullets: [
          "Developed and optimised back-end features on the Loyalty platform (cart, points management), within an Agile SAFe team.",
          "Implemented and maintained REST APIs using Java, Spring Boot and Oracle DB.",
          "Wrote and automated JUnit tests, up to 95% code coverage.",
          "Supported production releases and coordinated with the infrastructure and product teams.",
        ],
        tags: ["Java", "Spring Boot", "REST APIs", "Oracle DB", "JUnit", "SAFe"],
      },
      {
        company: "Native Spaces",
        role: "Full-stack developer (apprenticeship)",
        period: "2021 - 2022",
        location: "Nice, France",
        bullets: [
          "Built front-end modules in React for responsive production interfaces.",
          "Developed the back end in PHP and MySQL: REST APIs, data access layers and query optimisation.",
          "Integrated external services (Stripe, Google APIs) and built internal automation tooling.",
        ],
        tags: ["React", "PHP", "MySQL", "Stripe", "Google APIs"],
      },
      {
        company: "Freelance",
        role: "Web developer (while studying)",
        period: "2017 - 2021",
        location: "France",
        bullets: [
          "Built websites and web applications for small organisations, alongside my studies.",
        ],
        tags: ["PHP", "MySQL", "JavaScript"],
      },
    ],
  },

  teaching: {
    label: "Teaching",
    heading: "Teaching",
    role: "Web development instructor",
    institution: "Université Côte d'Azur",
    period: "Since September 2025 · Part-time",
    description:
      "I teach web development to students at Université Côte d'Azur and design the lab materials.",
    topics: ["React", "Next.js", "Vue 3", "TypeScript", "Algorithms"],
  },

  skills: {
    label: "Skills",
    heading: "Technical skills",
    intro: "Grouped by how much I actually use them, not by how long the list can get.",
    groups: [
      {
        label: "Daily",
        hint: "Used every day in production",
        skills: [
          "Angular",
          "TypeScript",
          "Node.js",
          "Symfony",
          "PHP 8",
          "GitLab CI/CD",
          "Docker",
          "GCP",
          "MySQL",
          "Jest",
        ],
      },
      {
        label: "Solid",
        hint: "Several products delivered",
        skills: ["React", "Next.js", "NestJS", "MongoDB", "Firebase", "Cypress"],
      },
      {
        label: "Basics",
        hint: "Occasional or earlier practice",
        skills: ["Java / Spring Boot", "Vue 3"],
      },
    ],
  },

  contact: {
    label: "Contact",
    heading: "Get in touch",
    intro:
      "I am looking for a full-stack developer role in French-speaking Switzerland, between Geneva and Lausanne.",
    availabilityNotice:
      "Relocating upon signing. French citizen, B permit through freedom of movement. Available within 1 month, matching my contractual notice period. On-site interviews within 72 hours.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    cvLabel: "CV",
    cvValue: "Download CV (PDF)",
    primaryCta: "Send me an email",
  },

  footer: {
    builtWith: "Built with React and Tailwind CSS",
  },

  lightbox: {
    close: "Close",
    previous: "Previous image",
    next: "Next image",
    goTo: (n) => `Go to image ${n}`,
  },
};
