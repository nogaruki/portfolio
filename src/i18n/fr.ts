import type { Content } from "./types";

// Espace insecable avant les signes doubles et le symbole pourcent.
const NB = " ";

export const fr: Content = {
  meta: {
    title: "Johann Avramov | Développeur Full-Stack TypeScript / PHP | Suisse romande",
    description:
      "Développeur full-stack TypeScript et PHP chez Orange. Angular, TypeScript, Node.js, Symfony. Relocalisation en Suisse romande, Genève et Lausanne, dès la signature d'un contrat. Citoyen UE, disponible sous 1 mois.",
    ogTitle: "Johann Avramov, développeur full-stack TypeScript / PHP",
    ogDescription:
      "Angular, TypeScript, Node.js, Symfony. Relocalisation en Suisse romande (Genève, Lausanne) dès la signature d'un contrat. Citoyen UE, disponible sous 1 mois.",
    ogImageAlt: "Johann Avramov, développeur full-stack TypeScript / PHP, Suisse romande",
    jsonLdDescription:
      "Développeur full-stack TypeScript et PHP. Angular, TypeScript, Node.js, Symfony. Recherche un poste en Suisse romande, entre Genève et Lausanne.",
    jobTitle: "Développeur full-stack",
    siteName: "Johann Avramov",
  },

  nav: {
    links: [
      { label: "Profil", href: "#profil" },
      { label: "Projets", href: "#projets" },
      { label: "Parcours", href: "#parcours" },
      { label: "Compétences", href: "#competences" },
      { label: "Enseignement", href: "#enseignement" },
    ],
    cta: "Me contacter",
    switchLabel: "EN",
    switchHref: "/en/",
    switchAria: "Switch to English",
    topAria: "Johann Avramov, retour en haut de page",
    menuAria: "Ouvrir ou fermer le menu",
    themeToLight: "Passer en thème clair",
    themeToDark: "Passer en thème sombre",
  },

  personal: {
    name: "Johann Avramov",
    title: "Développeur Full-Stack TypeScript / PHP",
    subtitle: "Angular · TypeScript · React · Node.js · Symfony",
    availability:
      "Relocalisation en Suisse romande (Genève - Lausanne) dès la signature d'un contrat · Citoyen UE (permis B) · Disponible sous 1 mois",
    location: "Antibes, France",
    languages: ["Français (langue maternelle)", "Anglais (C1)", "Allemand (notions)"],
    email: "johann.avramov.pro@gmail.com",
    github: "https://github.com/nogaruki",
    githubHandle: "nogaruki",
    linkedin: "https://linkedin.com/in/johann-avramov",
    linkedinHandle: "johann-avramov",
  },

  hero: {
    ctaProjects: "Voir les projets",
    ctaCv: "Télécharger le CV",
    photoAlt: "Portrait de Johann Avramov",
  },

  about: {
    label: "Profil",
    paragraphs: [
      "Développeur full-stack chez Orange à Sophia Antipolis depuis février 2025, avec un rôle de tech lead front-end sur une équipe de trois développeurs, dans un contexte SAFe de vingt personnes.",
      `Je travaille au quotidien sur Angular, TypeScript, Node.js et Symfony, avec GitLab CI/CD, Docker et GCP. J'ai conduit la migration d'applications critiques d'Angular${NB}8 vers Angular${NB}21 et de Symfony${NB}5 vers Symfony${NB}7, en portant la couverture SonarQube de 65${NB}% à 85${NB}%.`,
      "Avant Orange, j'ai fondé et dirigé AzurIT, une SARL de deux salariés, et livré trois produits SaaS en quatorze mois. Je recherche aujourd'hui un poste de développeur en Suisse romande, entre Genève et Lausanne.",
    ],
    stats: [
      { value: "3", label: "produits SaaS livrés" },
      { value: "1 500", label: "comptes créés sur Datark" },
      { value: "2", label: "grands comptes : Orange, Amadeus" },
    ],
  },

  projects: {
    label: "Projets",
    heading: "Ce que j'ai construit",
    intro:
      "Quatre produits conçus et développés de bout en bout, de la définition du besoin à la mise en production.",
    problemLabel: "Contexte",
    solutionLabel: "Ce que j'ai construit",
    challengesLabel: "Points techniques",
    architectureLabel: "Architecture",
    liveLabel: "Voir le produit",
    screenshotsLabel: "Captures",
    viewLabel: "Agrandir",
    items: [
      {
        id: "datark",
        name: "Datark",
        tagline: "Plateforme open-access pour les sciences du patrimoine.",
        url: "https://datark.fr/",
        stack: ["Next.js", "NestJS", "PostgreSQL", "TypeScript", "Stripe", "Copyleaks"],
        problem:
          "Plateforme open-access pour les sciences du patrimoine (archéologie, histoire, conservation) : dépôt de publications PDF, recherche via le thésaurus PACTOLS, collaboration en co-auteurs et abonnements.",
        solution:
          "Refonte complète d'une plateforme déjà en production, qui compte 1 500 comptes créés : passage d'Angular, Express et MongoDB à Next.js, NestJS et PostgreSQL, avec une migration de données progressive.",
        challenges: [
          "Migration de données progressive de MongoDB vers PostgreSQL, sans interruption de la plateforme en production.",
          "Détection de plagiat via l'API Copyleaks : soumission du PDF, réception asynchrone des résultats par webhook à signature HMAC-SHA256 vérifiée, machine à états exposée à l'interface et notification des administrateurs pour revue manuelle. Intégration en mode sandbox.",
          "Dégradation gracieuse du service tiers : sans clé API le scan est marqué comme ignoré, en cas d'erreur réseau il est marqué en erreur, et le dépôt de la publication aboutit dans les deux cas.",
          "Recherche indexée sur le thésaurus PACTOLS et gestion des co-auteurs sur chaque dépôt.",
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
            { from: "api", to: "stripe", label: "abonnements" },
            { from: "api", to: "copyleaks", label: "webhook signé" },
          ],
        },
        mockupOrientation: "desktop",
        mockups: [
          { src: "/images/mockups/datark/home.webp", alt: "Datark, page d'accueil et moteur de recherche" },
          { src: "/images/mockups/datark/collections.webp", alt: "Datark, collections de documents" },
          { src: "/images/mockups/datark/publications.webp", alt: "Datark, liste des publications" },
          { src: "/images/mockups/datark/search.webp", alt: "Datark, recherche par thésaurus" },
          { src: "/images/mockups/datark/account.webp", alt: "Datark, gestion du compte" },
          { src: "/images/mockups/datark/about.webp", alt: "Datark, page de présentation" },
        ],
      },
      {
        id: "aquapro",
        name: "AquaPro Manager",
        tagline: "Application web de gestion pour les professionnels de la piscine.",
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
          "Les professionnels de l'entretien de piscines suivent leurs clients, leurs interventions et leur facturation entre notes papier, messageries et tableurs. Rien n'est relié, et l'historique client se perd.",
        solution:
          "Application web responsive de gestion pour professionnels de la piscine : SaaS multi-tenant couvrant les clients, les piscines, les interventions, le stock, les produits, la comptabilité et la facturation, avec des abonnements Stripe.",
        challenges: [
          "Modèle multi-tenant avec isolation des données par entreprise.",
          "Abonnements et facturation Stripe reliés au cycle de vie des interventions.",
          "Modules devis et factures, comptabilité, stock, fournisseurs et suivi des employés.",
          "Validation des formulaires par schémas Zod avec react-hook-form, tableaux de bord Recharts et tests Vitest.",
          "Instrumentation OpenTelemetry et suivi des performances.",
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
            { from: "api", to: "db", label: "lecture / écriture" },
            { from: "api", to: "stripe", label: "abonnements" },
          ],
        },
        mockupOrientation: "desktop",
        mockups: [
          { src: "/images/mockups/aquapromanage/site.webp", alt: "AquaPro Manager, site de présentation" },
          { src: "/images/mockups/aquapromanage/pools.webp", alt: "AquaPro Manager, gestion des piscines" },
          { src: "/images/mockups/aquapromanage/clients.webp", alt: "AquaPro Manager, gestion des clients" },
          { src: "/images/mockups/aquapromanage/employee.webp", alt: "AquaPro Manager, gestion des employés" },
          { src: "/images/mockups/aquapromanage/products.webp", alt: "AquaPro Manager, catalogue de produits" },
          { src: "/images/mockups/aquapromanage/comptabilities.webp", alt: "AquaPro Manager, module de comptabilité" },
        ],
      },
      {
        id: "airsofthub",
        name: "AirsoftHub",
        tagline: "Plateforme de gestion pour associations d'airsoft.",
        status: "Projet en pause",
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
          "Les associations d'airsoft gèrent leurs membres, leurs réservations de terrain, leurs cotisations et leur inventaire à la main, entre tableurs et messageries.",
        solution:
          "Plateforme unique regroupant la gestion des membres, la réservation de créneaux, la facturation automatisée et le contrôle d'accès par QR code, répartie sur dix-huit modules fonctionnels.",
        challenges: [
          "Sécurité multi-tenant appliquée au niveau de la base : politiques Row Level Security PostgreSQL sur Supabase, dans une migration dédiée.",
          "Neuf Edge Functions métier : réservation de créneau, génération de facture PDF et de QR code, invitation de membres, gestion d'inventaire, rappels programmés et envoi d'e-mails.",
          "Six migrations SQL versionnées pour faire évoluer le schéma.",
          "Garde-fous de build maison, bloquants en développement comme à la compilation : détection de données simulées, validation de la configuration Supabase et vérification de l'environnement.",
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
        tagline: "Application mobile d'aide à la décision alimentaire pendant la grossesse.",
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
          "Pendant une grossesse, vérifier qu'un aliment est sans risque suppose de croiser des sources médicales dispersées. Ce n'est pas exploitable devant un rayon de supermarché ou une carte de restaurant.",
        solution:
          "Application mobile qui identifie les ingrédients à partir d'une photo de plat ou d'une carte de restaurant, puis rend un verdict adapté au profil de grossesse : vert, orange ou rouge, avec une explication et le détail ingrédient par ingrédient.",
        challenges: [
          "Reconnaissance des ingrédients et analyse du risque par l'API Google Gemini, avec deux modes de saisie : photo de plat et carte de restaurant.",
          "Robustesse de l'appel au modèle : trois tentatives avec temporisation progressive, reprise uniquement sur les codes 429 et 5xx, bascule vers un modèle de repli, récupération des réponses JSON tronquées et plafond de taille d'image.",
          "Verdict calculé à partir du profil : trimestre, immunité à la toxoplasmose, allergies et mode de préparation déclarés par l'utilisatrice.",
          "Migration de Supabase vers Firebase : authentification, Firestore, stockage et Cloud Functions.",
          "Abonnements gérés via RevenueCat, connexion Google et Apple, tests Jest sur les fonctions d'analyse.",
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
            { from: "fn", to: "db", label: "lecture / écriture" },
            { from: "fn", to: "ai", label: "analyse" },
            { from: "app", to: "rc", label: "abonnements" },
          ],
        },
        mockupOrientation: "mobile",
        mockups: [
          { src: "/images/mockups/mamasafefood/home.webp", alt: "MamaSafeFood, écran d'accueil" },
          { src: "/images/mockups/mamasafefood/food-checker.webp", alt: "MamaSafeFood, confirmation des ingrédients détectés" },
          { src: "/images/mockups/mamasafefood/good-to-consum.webp", alt: "MamaSafeFood, verdict favorable" },
          { src: "/images/mockups/mamasafefood/bad-to-consum.webp", alt: "MamaSafeFood, verdict défavorable" },
          { src: "/images/mockups/mamasafefood/quick-questions.webp", alt: "MamaSafeFood, questions sur la préparation" },
          { src: "/images/mockups/mamasafefood/site.webp", alt: "MamaSafeFood, site de présentation" },
        ],
      },
    ],
  },

  experience: {
    label: "Parcours",
    heading: "Mon parcours",
    items: [
      {
        company: "Orange",
        role: "Full-Stack Engineer, tech lead front-end",
        period: "Février 2025 - aujourd'hui",
        location: "Sophia Antipolis, France",
        bullets: [
          `Migration d'applications critiques d'Angular${NB}8 vers Angular${NB}21 et de Symfony${NB}5 vers Symfony${NB}7, avec une couverture SonarQube portée de 65${NB}% à 85${NB}%.`,
          "Rôle de tech lead front-end sur une équipe de trois développeurs, au sein d'une équipe de vingt personnes organisée en SAFe.",
          `Mise en place du TDD et d'une couverture Jest supérieure à 90${NB}% : moyenne de bugs par sprint ramenée de 18 à 3.`,
          "Délai de mise en production réduit de 1 à 2 jours à 2 à 3 heures, via GitLab CI/CD, Docker et une stratégie de rollback.",
          "Développement de fonctionnalités sur Cockpit, la plateforme de gestion de campagnes omnicanale d'Orange, et exploitation des services sur GCP.",
        ],
        tags: ["Angular", "TypeScript", "Symfony", "PHP 8", "GitLab CI/CD", "Docker", "GCP", "MySQL", "Jest"],
      },
      {
        company: "AzurIT (SARL)",
        role: "Fondateur et lead developer",
        period: "Septembre 2023 - Novembre 2024",
        location: "Antibes, France",
        bullets: [
          "Création et direction d'une SARL de deux salariés, de la définition produit jusqu'à l'exploitation.",
          "Trois produits SaaS livrés en quatorze mois : Datark, AquaPro Manager et MamaSafeFood.",
          "Conception des API REST, des modèles de données et de la logique métier, du recueil du besoin au déploiement et à la maintenance.",
          "Automatisation de l'extraction de données avec Puppeteer : logique de reprise, sélecteurs de repli et exports structurés.",
          "Activité arrêtée volontairement fin 2024 pour rejoindre un environnement corporate.",
        ],
        tags: ["Next.js", "React", "Node.js", "NestJS", "MongoDB", "Firebase", "Stripe", "Puppeteer"],
      },
      {
        company: "Amadeus",
        role: "Développeur back-end (alternance)",
        period: "2022 - 2023",
        location: "Sophia Antipolis, France",
        bullets: [
          "Développement et optimisation de fonctionnalités back-end sur la plateforme Loyalty (panier, gestion des points), au sein d'une équipe Agile SAFe.",
          "Implémentation et maintenance d'API REST en Java, Spring Boot et Oracle DB.",
          `Écriture et automatisation de tests JUnit, jusqu'à 95${NB}% de couverture de code.`,
          "Accompagnement des mises en production et coordination avec les équipes infrastructure et produit.",
        ],
        tags: ["Java", "Spring Boot", "API REST", "Oracle DB", "JUnit", "SAFe"],
      },
      {
        company: "Native Spaces",
        role: "Développeur full-stack (alternance)",
        period: "2021 - 2022",
        location: "Nice, France",
        bullets: [
          "Développement de modules front-end en React pour des interfaces de production responsives.",
          "Développement back-end en PHP et MySQL : API REST, couches d'accès aux données et optimisation de requêtes.",
          "Intégration de services externes (Stripe, API Google) et outillage interne d'automatisation.",
        ],
        tags: ["React", "PHP", "MySQL", "Stripe", "API Google"],
      },
      {
        company: "Freelance",
        role: "Développeur web (pendant les études)",
        period: "2017 - 2021",
        location: "France",
        bullets: [
          "Développement de sites et d'applications web pour de petites structures, en parallèle des études.",
        ],
        tags: ["PHP", "MySQL", "JavaScript"],
      },
    ],
  },

  teaching: {
    label: "Enseignement",
    heading: "Enseignement",
    role: "Enseignant en développement web",
    institution: "Université Côte d'Azur",
    period: "Depuis septembre 2025 · Temps partiel",
    description:
      "J'enseigne le développement web à des étudiants de l'Université Côte d'Azur et je conçois les supports de travaux pratiques.",
    topics: ["React", "Next.js", "Vue 3", "TypeScript", "Algorithmique"],
  },

  skills: {
    label: "Compétences",
    heading: "Compétences techniques",
    intro:
      "Classées par niveau de pratique réelle, et non par exhaustivité.",
    groups: [
      {
        label: "Au quotidien",
        hint: "Utilisé tous les jours en production",
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
        label: "Solide",
        hint: "Plusieurs projets livrés",
        skills: ["React", "Next.js", "NestJS", "MongoDB", "Firebase", "Cypress"],
      },
      {
        label: "Notions",
        hint: "Pratique ponctuelle ou ancienne",
        skills: ["Java / Spring Boot", "Vue 3"],
      },
    ],
  },

  contact: {
    label: "Contact",
    heading: "Prenons contact",
    intro:
      "Je recherche un poste de développeur full-stack en Suisse romande, entre Genève et Lausanne.",
    availabilityNotice:
      "Relocalisation dès la signature d'un contrat. Citoyen français, permis B par la libre circulation. Disponible sous 1 mois, correspondant à mon préavis contractuel. Entretiens sur place sous 72 heures.",
    emailLabel: "E-mail",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    cvLabel: "CV",
    cvValue: "Télécharger le CV (PDF)",
    primaryCta: "M'écrire un e-mail",
  },

  footer: {
    builtWith: "Construit avec React et Tailwind CSS",
  },

  lightbox: {
    close: "Fermer",
    previous: "Image précédente",
    next: "Image suivante",
    goTo: (n) => `Aller à l'image ${n}`,
  },
};
