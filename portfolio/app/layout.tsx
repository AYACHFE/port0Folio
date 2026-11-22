import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Aymane Achfennar — Full-Stack & AI Software Engineer",
  description:
    "Full-Stack & AI Software Engineer with 2 years of experience building scalable web and mobile applications with Python (Django), React, React Native, Docker, and AWS.",
  authors: [{ name: "Aymane Achfennar" }],
  keywords: [
    "Aymane Achfennar",
    "Full-Stack Software Engineer",
    "AI Software Engineer",
    "Django",
    "React",
    "React Native",
    "TypeScript",
    "Docker",
    "AWS",
    "42 Paris",
    "Portfolio",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${space.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
