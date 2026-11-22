/**
 * Single source of truth for portfolio content.
 * Swap LinkedIn / GitHub URLs here when the real profiles are ready.
 */

export const profile = {
  name: "Aymane Achfennar",
  firstName: "Aymane",
  lastName: "Achfennar",
  title: "Full-Stack & AI Software Engineer",
  email: "aymaneachfennar@gmail.com",
  // phone: "+33 7 52 93 35 54",
  // phoneHref: "tel:+33752933554",
  location: "Paris, France",
  coords: { lat: "48.86° N", lng: "2.35° E" },
  linkedin: "https://www.linkedin.com/in/aymane-achfennar/",
  github: "https://github.com/AYACHFE",
  tagline:
    "Engineering scalable web, mobile, and AI-powered systems — from legacy modernization to cloud production.",
  summary:
    "Full-Stack & AI Software Engineer with 2 years of experience building scalable web and mobile applications using Python (Django), React, and React Native. Strong expertise in legacy architecture modernization, cloud deployment (Docker, AWS), and integrating AI-powered features.",
} as const;

export const experience = [
  {
    id: "se",
    role: "Software Engineer",
    company: "Koolskools",
    location: "Casablanca",
    period: "04/2025 — 10/2026",
    start: "04/2025",
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
    start: "10/2024",
    current: false,
    points: [
      "Led the platform migration from Python 2.7 to 3.12 and Django 1.8 to Django 5.",
      "Modernized infrastructure (MySQL upgrade, Docker containerization) for deployment on AWS.",
      "Contributed to full-stack development with Django and React.",
    ],
  },
] as const;

export const platforms = [
  {
    name: "Koolskools",
    url: "https://koolskools.com",
    domain: "koolskools.com",
    mobile: 'iOS & Android apps — "Koolskools"',
    description:
      "Educational platform connecting teachers and students across web and mobile.",
  },
  {
    name: "Revizoo",
    url: "https://revizoo.com",
    domain: "revizoo.com",
    mobile: 'iOS & Android apps — "Revizoo"',
    description:
      "AI-assisted learning and revision platform available on web, iOS, and Android.",
  },
] as const;

export const projects = [
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
] as const;

export const education = [
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
] as const;

export const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript (ES6+)", "TypeScript", "SQL", "C", "C++"],
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
] as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
