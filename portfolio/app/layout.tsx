import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const title = "Aymane Achfennar — Développeur Logiciel Full-Stack & IA";
const description =
  "Développeur Logiciel Full-Stack & IA avec 2 ans d'expérience dans la conception d'applications web et mobiles évolutives sous Python (Django), React, React Native, Docker et AWS.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Aymane Achfennar" }],
  keywords: [
    "Aymane Achfennar",
    "Développeur Full-Stack",
    "Full-Stack Software Engineer",
    "IA",
    "Django",
    "React",
    "React Native",
    "TypeScript",
    "Docker",
    "AWS",
    "42 Paris",
    "Koolskools",
    "Revizoo",
    "Portfolio",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    title,
    description,
    siteName: "Aymane Achfennar — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${space.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
