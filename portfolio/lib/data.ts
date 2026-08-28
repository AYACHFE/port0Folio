/**
 * Single source of truth for portfolio content.
 * Swap LinkedIn / GitHub URLs here when the real profiles are ready.
 */

export const profile = {
  name: "Aymane Achfennar",
  firstName: "Aymane",
  lastName: "Achfennar",
  title: "Software Engineer",
  email: "aymaneachfennar@gmail.com",
  // phone: "+212 623555728",
  // phoneHref: "tel:+212623555728",
  location: "Casablanca, Morocco",
  coords: { lat: "35.57° N", lng: "5.37° W" },
  linkedin: "https://www.linkedin.com/in/aymane-achfennar/",
  github: "https://github.com/AYACHFE",
  tagline:
    "Engineering scalable web and mobile systems — from legacy modernization to AI-powered products.",
  summary:
    "Software Engineer with experience building scalable web and mobile applications using Django, React, and React Native. Skilled in backend development, system modernization, and integrating AI-powered features using modern cloud infrastructure.",
} as const;

export const experience = [
  {
    id: "se",
    role: "Software Engineer",
    company: "Koolskools",
    period: "04/2025 — Present",
    start: "04/2025",
    current: true,
    points: [
      "Design and ship backend services and AI-enabled product features used across the platform.",
      "Build scalable APIs and data pipelines that keep web and mobile clients in sync.",
      "Contribute to the React Native mobile app, bridging backend contracts with native UX.",
    ],
  },
  {
    id: "intern",
    role: "Software Engineer Intern",
    company: "Koolskools",
    period: "10/2024 — 04/2025",
    start: "10/2024",
    current: false,
    points: [
      "Led the migration from Python 2.7 → 3.12 and Django 1.8 → 5, unblocking modern tooling and security patches.",
      "Modernized infrastructure: MySQL 5 upgrade, Docker containerization, and AWS deployment.",
      "Delivered full-stack work across Django APIs and React interfaces during the transition.",
    ],
  },
] as const;

export const projects = [
  {
    id: "01",
    title: "Legacy System Modernization & Cloud Migration",
    description:
      "End-to-end modernization of a production Python/Django stack — language and framework upgrades, database migration, containerization, and a move onto AWS without freezing product delivery.",
    tags: ["Python", "Django", "Docker", "AWS", "MySQL"],
  },
  {
    id: "02",
    title: "AI-Powered Exam and Student Monitoring System",
    description:
      "Intelligent monitoring layer for assessments: backend pipelines, model-assisted signals, and a web console that helps educators catch issues in real time rather than after the fact.",
    tags: ["Django", "React", "Python", "AI", "PostgreSQL"],
  },
  {
    id: "03",
    title: "AI-Enhanced Educational Mobile App",
    description:
      "React Native client backed by Django services, weaving AI-assisted learning features into a mobile experience used by students day to day.",
    tags: ["React Native", "Django", "REST", "AI"],
  },
] as const;

export const education = {
  school: "1337 Coding School",
  campus: "Tetouane",
  field: "Computer Science",
  period: "2022 — 2025",
  note: "Peer-to-peer, project-based curriculum in the 42 Network. Emphasis on systems, software craft, and shipping under constraints.",
} as const;

export const skills = [
  {
    category: "Frameworks",
    items: ["Django", "React", "React Native", "Next.js"],
  },
  {
    category: "Languages",
    items: ["Python", "JavaScript", "C", "C++"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    category: "DevOps",
    items: ["Docker", "AWS", "Git"],
  },
] as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
