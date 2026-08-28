"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, Preload } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MAX_PIXEL_RATIO } from "@/lib/constants";
import { useIsMobile } from "@/hooks/useIsMobile";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ParticleNetwork } from "./ParticleNetwork";
import { DistortionGrid } from "./DistortionGrid";
import { FloatingKnot } from "./FloatingKnot";
import { ScrollCamera } from "./ScrollCamera";
import type { MotionRefs } from "./types";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Full-viewport WebGL layer. pointer-events are disabled so the canvas
 * never intercepts scroll or clicks — mouse is sampled from `window`.
 */
export default function Scene() {
  const isMobile = useIsMobile();
  const reduced = usePrefersReducedMotion();
  const mouse = useRef({ x: 0, y: 0 });
  const scroll = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    const st = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        scroll.current = self.progress;
      },
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      st.kill();
    };
  }, []);

  const motion: MotionRefs = useMemo(
    () => ({ mouse, scroll, reduced, isMobile }),
    [reduced, isMobile],
  );

  return (
    <div className="scene-root" aria-hidden="true">
      <Canvas
        dpr={[1, MAX_PIXEL_RATIO]}
        gl={{
          antialias: !isMobile,
          alpha: false,
          powerPreference: "high-performance",
          stencil: false,
        }}
        camera={{ position: [0, 0, 6.4], fov: 45, near: 0.1, far: 40 }}
        style={{ pointerEvents: "none" }}
        frameloop={reduced ? "demand" : "always"}
      >
        <color attach="background" args={["#07070c"]} />
        <fog attach="fog" args={["#07070c", 6.5, 16]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[4.2, 2.8, 4]} intensity={1.35} color="#00e5ff" />
        <pointLight position={[-5, -1.5, 2]} intensity={0.35} color="#67e8f9" />
        <directionalLight position={[-3, 4, 2]} intensity={0.35} />

        <ScrollCamera motion={motion} />
        <ParticleNetwork motion={motion} />
        {!isMobile && <FloatingKnot motion={motion} />}
        <DistortionGrid motion={motion} />

        <AdaptiveDpr pixelated={false} />
        <Preload all />
      </Canvas>
    </div>
  );
}
