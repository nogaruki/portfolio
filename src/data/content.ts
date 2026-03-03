import {
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  Terminal,
  Wrench,
} from "lucide-react";

export const personalInfo = {
  name: "Johann Avramov",
  title: "Full-Stack Engineer",
  subtitle: "TypeScript, React, Next.js, Node.js",
  location: "France",
  relocation: "Open to relocate to Japan",
  visa: "Visa sponsorship required",
  languages: ["French (Native)", "English (Fluent)", "Japanese (Beginner)"],
  history: "Currently Full-Stack Engineer at Orange · Previously Amadeus, Native Spaces, AzurIT",
  email: "johann.avramov@azur-it.fr",
  github: "https://github.com/nogaruki",
  linkedin: "https://linkedin.com/in/johann-avramov",
  cv: "/johann_avramov_cv.pdf",
};

export const summary =
  "I build and modernize scalable web applications. With a strong foundation in both front-end and back-end engineering, I focus on delivering reliable, maintainable software that solves real business problems. Experienced in enterprise environments and product development.";

export const experience = [
  {
    company: "Orange",
    role: "Full-Stack Engineer",
    period: "2025 — Present",
    description: [
      "Modernized legacy front-end and back-end architectures for Cockpit, an enterprise omnichannel campaign management platform.",
      "Executed complex migrations of Angular and Symfony applications, improving maintainability and developer velocity.",
      "Improved deployment reliability by establishing GitLab CI/CD pipelines, Docker containerization, and automated database migrations.",
      "Managed cloud infrastructure on GCP (Cloud Run, Cloud SQL) to ensure high availability and scalable delivery.",
      "Collaborated within a 20-person SAFe agile team to consistently ship features aligned with product requirements.",
    ],
  },
  {
    company: "AzurIT",
    role: "Full-Stack Engineer / Founder",
    period: "2017 — 2025",
    description: [
      "Architected and shipped Datark, a platform for archaeological document management, from initial concept to production.",
      "Engineered core business logic, REST APIs, and data models using Node.js and MongoDB.",
      "Built responsive, user-centric interfaces utilizing React and Next.js.",
      "Integrated AI-based plagiarism checks and automated structured data extraction using Puppeteer.",
      "Owned end-to-end delivery, ensuring product stability and continuous feature iteration.",
    ],
  },
  {
    company: "Amadeus",
    role: "Back-end Engineer",
    period: "2018 — 2019",
    description: [
      "Developed and optimized high-performance Java / Spring Boot REST APIs for a core Loyalty application serving global airlines.",
      "Delivered critical features for cart processing and points management systems.",
      "Increased code coverage and system reliability through comprehensive JUnit test automation.",
      "Supported production stability and resolved critical issues during deployment cycles.",
    ],
  },
  {
    company: "Native Spaces",
    role: "Full-Stack Engineer",
    period: "2017 — 2018",
    description: [
      "Built the core customer-facing booking flow and internal operational tools.",
      "Implemented responsive front-end components using React and developed back-end services with PHP and MySQL.",
      "Enabled initial platform revenue by integrating secure Stripe payments.",
      "Integrated Google Maps APIs for location-based search and created automation tooling for structured data processing.",
    ],
  },
  {
    company: "Naxan Group",
    role: "Project Manager Analyst",
    period: "2015 — 2017",
    description: [
      "Produced technical estimates, requirement analyses, and Statements of Work (SOWs) for client projects.",
      "Clarified project scope and architecture using UML diagrams.",
      "Coordinated cross-functional stakeholders and managed delivery schedules using Jira and Gantt charts.",
    ],
  },
];

export const projects = [
  {
    name: "Datark",
    context: "Archaeological document management and verification platform.",
    role: "Lead Full-Stack Engineer",
    stack: ["React", "Node.js", "MongoDB", "NestJS", "Next.js", "Docker", "GitHub Actions CI/CD"],
    outcome:
      "Shipped an end-to-end platform that reduced manual verification time for researchers. Integrated AI checks and automated data extraction.",
    link: "https://datark.fr",
  },
  {
    name: "Cockpit",
    context: "Enterprise omnichannel campaign management platform at Orange.",
    role: "Full-Stack Engineer",
    stack: ["Angular", "Symfony", "GCP", "GitLab CI/CD"],
    outcome:
      "Modernized legacy architecture and established robust CI/CD pipelines, significantly reducing deployment failures and accelerating feature delivery.",
    link: "Internal enterprise project",
  },
  {
    name: "Native Spaces Booking",
    context: "Marketplace platform for booking unique event spaces.",
    role: "Full-Stack Engineer",
    stack: ["React", "PHP", "MySQL", "Stripe API", "GCP"],
    outcome:
      "Built the primary customer booking flow and integrated secure payments, directly enabling the platform's initial revenue generation.",
    link: "https://www.native-spaces.com",
  },
];

export const skills = [
  {
    category: "Frontend",
    icon: Layout,
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Angular",
      "JavaScript",
      "HTML",
      "CSS/SCSS",
    ],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "NestJS", "Symfony", "PHP", "REST APIs"],
  },
  {
    category: "Cloud / DevOps",
    icon: Globe,
    items: ["Docker", "GitLab CI/CD", "GCP", "Kubernetes"],
  },
  {
    category: "Databases",
    icon: Database,
    items: ["MongoDB", "MySQL", "OracleDB", "SQL"],
  },
  {
    category: "Practices",
    icon: Wrench,
    items: [
      "Code Reviews",
      "Testing",
      "Clean Architecture",
      "Agile",
      "Scrum",
      "SAFe",
    ],
  },
];

export const valueProposition = {
  title: "Why Japan?",
  description:
    "I am looking to build my career in Japan for the long term. I am drawn to environments that value continuous improvement, high standards, and thoughtful execution. Beyond the professional fit, Japan also represents the kind of safe, stable, and balanced environment where I would like to build my future family life. I am serious about relocation, committed to adapting, and eager to grow within a Japan-based engineering team.",
};
