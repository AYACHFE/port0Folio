"use client";

import { useEffect, useState } from "react";

/** True below the given breakpoint. Defaults to false until mounted (Scene is client-only). */
export function useIsMobile(query = "(max-width: 768px)") {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);

  return matches;
}
