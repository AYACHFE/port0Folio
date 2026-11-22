"use client";

import { useEffect, useState } from "react";
import { sharedProfile } from "@/lib/data";
import { useLanguage } from "@/components/LanguageProvider";

export function Loader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      return;
    }

    const start = performance.now();
    const duration = 1400;
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => setVisible(false), 220);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!visible) return null;

  return (
    <div className="loader" role="status" aria-live="polite">
      <p className="loader__kicker">{t.loaderKicker}</p>
      <p className="loader__name">{sharedProfile.name}</p>
      <div className="loader__bar">
        <span style={{ width: `${progress}%` }} />
      </div>
      <p className="loader__pct">{String(progress).padStart(3, "0")}%</p>
    </div>
  );
}
