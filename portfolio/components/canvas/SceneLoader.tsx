"use client";

import dynamic from "next/dynamic";

/** `ssr: false` is only legal inside a Client Component (Next.js 16). */
const Scene = dynamic(() => import("./Scene"), { ssr: false });

export function SceneLoader() {
  return <Scene />;
}
