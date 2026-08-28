"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import type { MotionRefs } from "./types";

/**
 * Dolly + slight pitch driven by page scroll, with a soft mouse parallax.
 * lookAt keeps the lattice/knot framed as the camera travels.
 */
export function ScrollCamera({ motion }: { motion: MotionRefs }) {
  const { camera } = useThree();
  const look = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((_, delta) => {
    const s = motion.scroll.current;
    const mx = motion.reduced ? 0 : motion.mouse.current.x;
    const my = motion.reduced ? 0 : motion.mouse.current.y;

    const tx = mx * (motion.isMobile ? 0.12 : 0.38);
    const ty = -s * 1.85 + my * 0.18;
    const tz = 6.4 + s * 1.8;

    camera.position.x = THREE.MathUtils.damp(camera.position.x, tx, 2.2, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, ty, 2.2, delta);
    camera.position.z = THREE.MathUtils.damp(camera.position.z, tz, 2.2, delta);

    look.current.x = THREE.MathUtils.damp(look.current.x, mx * 0.4, 2, delta);
    look.current.y = THREE.MathUtils.damp(look.current.y, -s * 1.35, 2, delta);
    camera.lookAt(look.current);
  });

  return null;
}
