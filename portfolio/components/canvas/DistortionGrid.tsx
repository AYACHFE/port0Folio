"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { MotionRefs } from "./types";

const vertexShader = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 pos = position;
    float wave = sin(pos.x * 1.6 + uTime * 0.55) * cos(pos.y * 1.25 + uTime * 0.38);
    pos.z += wave * 0.28;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec2 gridUv = vUv * 32.0;
    vec2 cell = fract(gridUv) - 0.5;
    float line = 1.0 - smoothstep(0.018, 0.055, min(abs(cell.x), abs(cell.y)));

    float fadeY = smoothstep(0.0, 0.18, vUv.y) * smoothstep(1.0, 0.42, vUv.y);
    float fadeX = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
    float pulse = 0.55 + 0.45 * sin(uTime * 0.7 + vUv.x * 5.0);

    vec3 col = vec3(0.0, 0.9, 1.0);
    float alpha = line * fadeY * fadeX * 0.16 * pulse;
    gl_FragColor = vec4(col, alpha);
  }
`;

/** Horizontal lattice with a slow vertex-wave — the "floor" of the system. */
export function DistortionGrid({ motion }: { motion: MotionRefs }) {
  const material = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    [],
  );

  useFrame((_, delta) => {
    if (motion.reduced) return;
    if (material.current) material.current.uniforms.uTime.value += delta;
  });

  if (motion.isMobile) return null;

  return (
    <mesh
      rotation={[-Math.PI / 2.35, 0, 0]}
      position={[0, -2.6, 0]}
    >
      <planeGeometry args={[22, 14, 48, 32]} />
      <shaderMaterial
        ref={material}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}
