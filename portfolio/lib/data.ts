export type Locale = "fr" | "en";

export const sharedProfile = {
  name: "Aymane Achfennar",
  firstName: "Aymane",
  lastName: "Achfennar",
  email: "aymaneachfennar@gmail.com",
  // phone: "+33 7 52 93 35 54",
  // phoneHref: "tel:+33752933554",
  coords: { lat: "48.86° N", lng: "2.35° E" },
  linkedin: "https://www.linkedin.com/in/aymane-achfennar/",
  github: "https://github.com/AYACHFE",
  cvHref: "/Aymane_Achfennar_CV.pdf",
} as const;

export interface LocalizedContent {
  skipLink: string;
  loaderKicker: string;
  hero: {
    kicker: string;
    status: string;
    title: string;
    tagline: string;
    contactCta: string;
    cvCta: string;
    githubCta: string;
    hudNodeLabel: string;
    location: string;
    scroll: string;
  };
  about: {
    label: string;
    headingLines: [string, string, string];
    summary: string;
    aside: string;
    facts: {
      focusLabel: string;
      focusValue: string;
      stackLabel: string;
      stackValue: string;
      basedLabel: string;
      basedValue: string;
    };
  };
  experience: {
    label: string;
    title: string;
    currentBadge: string;
    jobs: ReadonlyArray<{
      id: string;
      role: string;
      company: string;
      location: string;
      period: string;
      current: boolean;
      points: readonly string[];
    }>;
    platformsKicker: string;
    platformsSub: string;
    platformLinksLabel: {
      web: string;
      ios: string;
      android: string;
    };
    platforms: ReadonlyArray<{
      name: string;
      url: string;
      domain: string;
      iosUrl?: string;
      androidUrl?: string;
      mobileNote: string;
      description: string;
    }>;
  };
  projects: {
    label: string;
    title: string;
    items: ReadonlyArray<{
      id: string;
      title: string;
      description: string;
      tags: readonly string[];
    }>;
  };
  education: {
    label: string;
    currentBadge: string;
    items: ReadonlyArray<{
      id: string;
      school: string;
      campus: string;
      field: string;
      period: string;
      current: boolean;
      note: string;
    }>;
  };
  skills: {
    label: string;
    title: string;
    groups: ReadonlyArray<{
      category: string;
      items: readonly string[];
    }>;
  };
  contact: {
    label: string;
    title: string;
    channels: {
      email: string;
      linkedin: string;
      linkedinCta: string;
      github: string;
      githubCta: string;
    };
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      success: string;
      errorFallback: string;
      mailtoCta: string;
    };
  };
  footer: {
    role: string;
    copy: string;
    top: string;
  };
  nav: ReadonlyArray<{ href: string; label: string }>;
}

const platformUrls = {
  koolskools: {
    url: "https://koolskools.com",
    domain: "koolskools.com",
    iosUrl: "https://apps.apple.com/app/koolskools/id1541912725",
    androidUrl: "https://play.google.com/store/apps/details?id=com.koolskools",
  },
  revizoo: {
    url: "https://revizoo.com",
    domain: "revizoo.com",
    androidUrl: "https://play.google.com/store/apps/details?id=com.revizoo",
  },
  atfalouna: {
    url: "https://www.atfalounalearning.com/",
    domain: "atfalounalearning.com",
    iosUrl: "https://apps.apple.com/us/app/fmps-parents-by-koolskools/id1616522625",
    androidUrl: "https://play.google.com/store/apps/details?id=com.koolskools.atfalouna",
  },
  chtr: {
    url: "https://infidelity-index.vercel.app/",
    domain: "infidelity-index.vercel.app",
  },
} as const;

export const content: Record<Locale, LocalizedContent> = {
  fr: {
    skipLink: "Aller au contenu",
    loaderKicker: "Initialisation de l'interface",
    hero: {
      kicker: "Introduction",
      status: "Système en ligne",
      title: "Développeur Logiciel Full-Stack & IA",
      tagline:
        "Conception d'applications web et mobiles évolutives — de la modernisation legacy au déploiement cloud et IA.",
      contactCta: "Me contacter",
      cvCta: "Télécharger le CV",
      githubCta: "GitHub",
      hudNodeLabel: "Basé à",
      location: "Paris, France",
      scroll: "Défiler",
    },
    about: {
      label: "À propos",
      headingLines: [
        "Orienté backend.",
        "Sens du produit.",
        "Les systèmes d'abord.",
      ],
      summary:
        "Développeur Logiciel Full-Stack & IA avec 2 ans d'expérience dans la conception d'applications web et mobiles évolutives sous Python (Django), React et React Native. Solide expertise en modernisation d'architectures legacy, déploiement cloud (Docker, AWS) et intégration de fonctionnalités d'intelligence artificielle.",
      aside:
        "Aujourd'hui basé à Paris à l'école 42, après deux années passées chez Koolskools à bâtir des systèmes en production — de la migration de monolithes Django et d'infrastructures AWS à l'intégration d'IA appliquée sur le web et le mobile.",
      facts: {
        focusLabel: "Spécialité",
        focusValue: "Full-Stack · Mobile · IA appliquée",
        stackLabel: "Stack",
        stackValue: "Django · React · React Native · AWS",
        basedLabel: "Localisation",
        basedValue: "Paris, France",
      },
    },
    experience: {
      label: "Expérience",
      title: "Là où les systèmes ont pris vie.",
      currentBadge: "Actuel",
      jobs: [
        {
          id: "se",
          role: "Ingénieur Logiciel",
          company: "Koolskools",
          location: "Casablanca",
          period: "04/2025 — 10/2026",
          current: false,
          points: [
            "Développement de services backend sous Django et intégration de fonctionnalités IA pour automatiser les processus métiers.",
            "Conception d'API REST évolutives et de pipelines de données assurant la fiabilité et la performance de la plateforme.",
            "Développement de fonctionnalités mobiles multiplateformes sous React Native, améliorant l'expérience utilisateur des étudiants sur iOS et Android.",
          ],
        },
        {
          id: "intern",
          role: "Ingénieur Logiciel Stagiaire",
          company: "Koolskools",
          location: "Casablanca",
          period: "10/2024 — 04/2025",
          current: false,
          points: [
            "Piloté la migration d'une plateforme de Python 2.7 vers 3.12 et de Django 1.8 vers Django 5.",
            "Modernisé l'infrastructure (mise à niveau de MySQL, conteneurisation Docker) pour un déploiement sur AWS.",
            "Contribué au développement full stack avec Django et React.",
          ],
        },
      ],
      platformsKicker: "Plateformes déployées",
      platformsSub:
        "Disponibles sur le web ainsi que sur iOS et Android sous les mêmes noms.",
      platformLinksLabel: {
        web: "Site web",
        ios: "App Store (iOS)",
        android: "Google Play (Android)",
      },
      platforms: [
        {
          name: "Koolskools",
          ...platformUrls.koolskools,
          mobileNote: 'Applications iOS & Android sous le nom « Koolskools »',
          description:
            "Plateforme éducative reliant établissements, enseignants, parents et élèves sur le web et le mobile.",
        },
        {
          name: "Revizoo",
          ...platformUrls.revizoo,
          mobileNote: 'Applications iOS & Android sous le nom « Revizoo »',
          description:
            "Plateforme de révision scolaire assistée par IA, accessible sur le web, iOS et Android.",
        },
        {
          name: "Atfalouna Learning",
          ...platformUrls.atfalouna,
          mobileNote: "Plateforme web EdTech — partenariat FMPS × Koolskools",
          description:
            "Plateforme numérique d'apprentissage pour le préscolaire proposant activités interactives, comptines, vidéos pédagogiques et suivi en temps réel.",
        },
        {
          name: "CHTR Terminal",
          ...platformUrls.chtr,
          mobileNote: "Application web Next.js — analytique financière & gouvernance",
          description:
            "Terminal financier de style Bloomberg analysant les scandales de gouvernance C-Suite, les scores de risque, les clawbacks et l'impact boursier (alpha T-30 à T+90) via les données SEC.",
        },
      ],
    },
    projects: {
      label: "Projets clés",
      title: "Des systèmes conçus pour tenir en production.",
      items: [
        {
          id: "01",
          title: "Plateforme IA de Génération d'Examens et Suivi Pédagogique",
          description:
            "Développement d'une plateforme permettant aux enseignants de générer automatiquement des examens, d'attribuer des exercices personnalisés et de suivre la progression des élèves en temps réel.",
          tags: ["Django", "React", "Python", "IA", "PostgreSQL"],
        },
        {
          id: "02",
          title: "Application Mobile Éducative Assistée par IA",
          description:
            "Conception de modules d'apprentissage mobile offrant des exercices adaptatifs et un retour pédagogique intelligent automatisé sur iOS et Android.",
          tags: ["React Native", "Django", "API REST", "IA"],
        },
        {
          id: "03",
          title: "Modernisation de Système Legacy & Migration Cloud AWS",
          description:
            "Refactorisation d'une application monolithique legacy (Python 2.7 → 3.12, Django 1.8 → 5) et migration vers une infrastructure conteneurisée sur AWS, renforçant la sécurité et la maintenabilité.",
          tags: ["Python", "Django", "Docker", "AWS", "MySQL"],
        },
      ],
    },
    education: {
      label: "Formation",
      currentBadge: "En cours",
      items: [
        {
          id: "42-paris",
          school: "42 Paris",
          campus: "Paris",
          field: "Informatique",
          period: "2026 — Aujourd'hui",
          current: true,
          note: "Pédagogie peer-to-peer par projets au sein du réseau 42, axée sur la programmation système, l'architecture logicielle et l'ingénierie collaborative.",
        },
        {
          id: "1337-med",
          school: "1337 Med",
          campus: "Tetouane",
          field: "Informatique",
          period: "2022 — 2025",
          current: false,
          note: "Cursus peer-to-peer par projets au sein du réseau 42. Solides bases en systèmes, génie logiciel et résolution de problèmes sous contraintes.",
        },
      ],
    },
    skills: {
      label: "Compétences",
      title: "La boîte à outils, organisée par domaine.",
      groups: [
        {
          category: "Langages",
          items: [
            "Python",
            "JavaScript (ES6+)",
            "TypeScript",
            "SQL",
            "C",
            "C++",
          ],
        },
        {
          category: "Frameworks",
          items: [
            "Django",
            "Django REST Framework",
            "React",
            "React Native",
            "Next.js",
          ],
        },
        {
          category: "Bases de données",
          items: ["PostgreSQL", "MySQL"],
        },
        {
          category: "Cloud & DevOps",
          items: ["Docker", "AWS (EC2, S3, RDS)", "Git", "Linux", "CI/CD"],
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Parlons systèmes, migrations ou de votre prochain produit.",
      channels: {
        email: "Email",
        linkedin: "LinkedIn",
        linkedinCta: "Se connecter",
        github: "GitHub",
        githubCta: "Voir le profil",
      },
      form: {
        nameLabel: "Nom",
        namePlaceholder: "Votre nom",
        emailLabel: "Email",
        emailPlaceholder: "vous@domaine.com",
        messageLabel: "Message",
        messagePlaceholder: "Quel projet construisons-nous ?",
        submit: "Envoyer le message",
        submitting: "Envoi en cours...",
        success:
          "Message envoyé avec succès. Je vous répondrai très rapidement.",
        errorFallback:
          "L'envoi automatique n'est pas encore configuré sur le serveur. Envoyez votre message directement via votre messagerie :",
        mailtoCta: "Ouvrir dans l'application mail ↗",
      },
    },
    footer: {
      role: "Développeur Logiciel Full-Stack & IA",
      copy: "Conçu avec Next.js, Three.js & une attention rigoureuse aux systèmes.",
      top: "Haut de page ↑",
    },
    nav: [
      { href: "#about", label: "À propos" },
      { href: "#experience", label: "Expérience" },
      { href: "#projects", label: "Projets" },
      { href: "#education", label: "Formation" },
      { href: "#skills", label: "Compétences" },
      { href: "#contact", label: "Contact" },
    ],
  },
  en: {
    skipLink: "Skip to content",
    loaderKicker: "Initializing interface",
    hero: {
      kicker: "Introduction",
      status: "System online",
      title: "Full-Stack & AI Software Engineer",
      tagline:
        "Engineering scalable web, mobile, and AI-powered systems — from legacy modernization to cloud production.",
      contactCta: "Contact",
      cvCta: "Download CV",
      githubCta: "GitHub",
      hudNodeLabel: "Node",
      location: "Paris, France",
      scroll: "Scroll",
    },
    about: {
      label: "About",
      headingLines: ["Backend-minded.", "Product-aware.", "Systems first."],
      summary:
        "Full-Stack & AI Software Engineer with 2 years of experience building scalable web and mobile applications using Python (Django), React, and React Native. Strong expertise in legacy architecture modernization, cloud deployment (Docker, AWS), and integrating AI-powered features.",
      aside:
        "Now based in Paris at 42, after two years building production platforms at Koolskools — from modernizing legacy Django monoliths and AWS infrastructure to shipping applied AI across web and mobile.",
      facts: {
        focusLabel: "Focus",
        focusValue: "Full-Stack · Mobile · Applied AI",
        stackLabel: "Stack",
        stackValue: "Django · React · React Native · AWS",
        basedLabel: "Based",
        basedValue: "Paris, France",
      },
    },
    experience: {
      label: "Experience",
      title: "Where the work happened.",
      currentBadge: "Current",
      jobs: [
        {
          id: "se",
          role: "Software Engineer",
          company: "Koolskools",
          location: "Casablanca",
          period: "04/2025 — 10/2026",
          current: false,
          points: [
            "Developed Django backend services and integrated AI features to automate business workflows.",
            "Designed scalable REST APIs and data pipelines ensuring platform reliability and performance.",
            "Built cross-platform mobile features with React Native, enhancing the student experience across iOS and Android.",
          ],
        },
        {
          id: "intern",
          role: "Software Engineer Intern",
          company: "Koolskools",
          location: "Casablanca",
          period: "10/2024 — 04/2025",
          current: false,
          points: [
            "Led the platform migration from Python 2.7 to 3.12 and Django 1.8 to Django 5.",
            "Modernized infrastructure (MySQL upgrade, Docker containerization) for deployment on AWS.",
            "Contributed to full-stack development with Django and React.",
          ],
        },
      ],
      platformsKicker: "Shipped Platforms",
      platformsSub:
        "Live on the web, with native iOS & Android apps available under the same names.",
      platformLinksLabel: {
        web: "Website",
        ios: "App Store (iOS)",
        android: "Google Play (Android)",
      },
      platforms: [
        {
          name: "Koolskools",
          ...platformUrls.koolskools,
          mobileNote: 'iOS & Android apps available as "Koolskools"',
          description:
            "Educational platform connecting schools, teachers, parents, and students across web and mobile.",
        },
        {
          name: "Revizoo",
          ...platformUrls.revizoo,
          mobileNote: 'iOS & Android apps available as "Revizoo"',
          description:
            "AI-assisted learning and revision platform available on web, iOS, and Android.",
        },
        {
          name: "Atfalouna Learning",
          ...platformUrls.atfalouna,
          mobileNote: "Web EdTech platform — FMPS × Koolskools partnership",
          description:
            "Preschool digital learning platform featuring interactive activities, educational songs, vocabulary videos, and real-time student progress tracking.",
        },
        {
          name: "CHTR Terminal",
          ...platformUrls.chtr,
          mobileNote: "Next.js web app — governance & market analytics",
          description:
            "Bloomberg-style financial terminal tracking C-Suite governance scandals, risk scores, clawbacks, and T-30 to T+90 stock alpha correlated with SEC filings.",
        },
      ],
    },
    projects: {
      label: "Selected work",
      title: "Systems that had to survive contact with production.",
      items: [
        {
          id: "01",
          title: "AI Exam Generation & Student Progress Platform",
          description:
            "Platform enabling teachers to automatically generate exams, assign personalized exercises, and track student progress in real time.",
          tags: ["Django", "React", "Python", "AI", "PostgreSQL"],
        },
        {
          id: "02",
          title: "AI-Assisted Educational Mobile App",
          description:
            "Mobile learning modules offering adaptive exercises and automated, intelligent pedagogical feedback across iOS and Android.",
          tags: ["React Native", "Django", "REST API", "AI"],
        },
        {
          id: "03",
          title: "Legacy System Modernization & AWS Cloud Migration",
          description:
            "Refactored a monolithic legacy Python/Django application (2.7 → 3.12, Django 1.8 → 5) and migrated it to containerized infrastructure on AWS, strengthening security and maintainability.",
          tags: ["Python", "Django", "Docker", "AWS", "MySQL"],
        },
      ],
    },
    education: {
      label: "Education",
      currentBadge: "Current",
      items: [
        {
          id: "42-paris",
          school: "42 Paris",
          campus: "Paris",
          field: "Computer Science",
          period: "2026 — Present",
          current: true,
          note: "Peer-to-peer, project-based curriculum in the 42 Network focused on systems programming, software architecture, and collaborative engineering.",
        },
        {
          id: "1337-med",
          school: "1337 Med",
          campus: "Tetouane",
          field: "Computer Science",
          period: "2022 — 2025",
          current: false,
          note: "Peer-to-peer, project-based curriculum in the 42 Network. Emphasis on systems, software craft, and shipping under constraints.",
        },
      ],
    },
    skills: {
      label: "Capabilities",
      title: "The toolkit, grouped by job to be done.",
      groups: [
        {
          category: "Languages",
          items: [
            "Python",
            "JavaScript (ES6+)",
            "TypeScript",
            "SQL",
            "C",
            "C++",
          ],
        },
        {
          category: "Frameworks",
          items: [
            "Django",
            "Django REST Framework",
            "React",
            "React Native",
            "Next.js",
          ],
        },
        {
          category: "Databases",
          items: ["PostgreSQL", "MySQL"],
        },
        {
          category: "Cloud & DevOps",
          items: ["Docker", "AWS (EC2, S3, RDS)", "Git", "Linux", "CI/CD"],
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let’s talk systems, migrations, or the next product.",
      channels: {
        email: "Email",
        linkedin: "LinkedIn",
        linkedinCta: "Connect",
        github: "GitHub",
        githubCta: "View profile",
      },
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "you@domain.com",
        messageLabel: "Message",
        messagePlaceholder: "What are we building?",
        submit: "Send message",
        submitting: "Sending...",
        success:
          "Message delivered. Thanks for reaching out — I'll reply shortly.",
        errorFallback:
          "Automated delivery isn't configured on this host yet. Send your message directly via email:",
        mailtoCta: "Open in email client ↗",
      },
    },
    footer: {
      role: "Full-Stack & AI Software Engineer",
      copy: "Built with Next.js, Three.js & a stubborn attention to systems.",
      top: "Back to top ↑",
    },
    nav: [
      { href: "#about", label: "About" },
      { href: "#experience", label: "Experience" },
      { href: "#projects", label: "Projects" },
      { href: "#education", label: "Education" },
      { href: "#skills", label: "Skills" },
      { href: "#contact", label: "Contact" },
    ],
  },
};
