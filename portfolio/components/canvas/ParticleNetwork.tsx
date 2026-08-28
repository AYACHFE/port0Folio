"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  PARTICLE_COUNT_DESKTOP,
  PARTICLE_COUNT_MOBILE,
} from "@/lib/constants";
import type { MotionRefs } from "./types";

/** Deterministic PRNG so the lattice is stable across remounts. */
function seeded(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/**
 * Node-and-edge field that reads as a backend topology rather than a starfield.
 * Geometry is built once; the group is rotated / parallaxed in useFrame.
 */
export function ParticleNetwork({ motion }: { motion: MotionRefs }) {
  const group = useRef<THREE.Group>(null);
  const count = motion.isMobile
    ? PARTICLE_COUNT_MOBILE
    : PARTICLE_COUNT_DESKTOP;

  const { positions, linePositions } = useMemo(() => {
    const rand = seeded(42);
    const pts: THREE.Vector3[] = [];
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const x = (rand() - 0.5) * 16;
      const y = (rand() - 0.5) * 10;
      const z = (rand() - 0.5) * 5.5;
      pts.push(new THREE.Vector3(x, y, z));
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    const maxDist = motion.isMobile ? 1.7 : 1.9;
    const maxLinks = 3;
    const segments: number[] = [];

    for (let i = 0; i < count; i++) {
      const dists: { j: number; d: number }[] = [];
      for (let j = i + 1; j < count; j++) {
        const d = pts[i].distanceTo(pts[j]);
        if (d < maxDist) dists.push({ j, d });
      }
      dists.sort((a, b) => a.d - b.d);
      for (const { j } of dists.slice(0, maxLinks)) {
        segments.push(
          pts[i].x,
          pts[i].y,
          pts[i].z,
          pts[j].x,
          pts[j].y,
          pts[j].z,
        );
      }
    }

    return { positions, linePositions: new Float32Array(segments) };
  }, [count, motion.isMobile]);

  useFrame((_, delta) => {
    const g = group.current;
    if (!g || motion.reduced) return;

    g.rotation.y += delta * 0.028;
    g.rotation.x = THREE.MathUtils.damp(
      g.rotation.x,
      motion.mouse.current.y * 0.14,
      2.4,
      delta,
    );
    g.rotation.z = THREE.MathUtils.damp(
      g.rotation.z,
      motion.mouse.current.x * 0.06,
      2.4,
      delta,
    );
    g.position.y = THREE.MathUtils.damp(
      g.position.y,
      -motion.scroll.current * 2.4,
      1.8,
      delta,
    );
  });

  return (
    <group ref={group} position={[0, 0.2, -1.2]}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={motion.isMobile ? 0.04 : 0.03}
          color="#00e5ff"
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00e5ff"
          transparent
          opacity={motion.isMobile ? 0.1 : 0.15}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}
