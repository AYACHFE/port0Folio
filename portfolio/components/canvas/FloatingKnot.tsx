"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { MotionRefs } from "./types";

/**
 * Organic pulsing "energy core": noise-displaced icosahedron shell,
 * inner glowing sphere, and an orbiting particle halo.
 * Idle spin + mouse-parallax tilt; drifts with scroll so it doesn't
 * sit on top of later sections.
 */

// Simple GLSL noise-based vertex displacement shader for the shell
const vertexShader = `
  uniform float uTime;
  uniform float uAmp;
  varying vec3 vNormal;
  varying float vDisp;

  // classic simplex noise (Ashima Arts, condensed)
  vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
  vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
  vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
  float snoise(vec3 v){
    const vec2 C=vec2(1.0/6.0,1.0/3.0);
    const vec4 D=vec4(0.0,0.5,1.0,2.0);
    vec3 i=floor(v+dot(v,C.yyy));
    vec3 x0=v-i+dot(i,C.xxx);
    vec3 g=step(x0.yzx,x0.xyz);
    vec3 l=1.0-g;
    vec3 i1=min(g.xyz,l.zxy);
    vec3 i2=max(g.xyz,l.zxy);
    vec3 x1=x0-i1+C.xxx;
    vec3 x2=x0-i2+C.yyy;
    vec3 x3=x0-D.yyy;
    i=mod289(i);
    vec4 p=permute(permute(permute(
      i.z+vec4(0.0,i1.z,i2.z,1.0))
      +i.y+vec4(0.0,i1.y,i2.y,1.0))
      +i.x+vec4(0.0,i1.x,i2.x,1.0));
    float n_=0.142857142857;
    vec3 ns=n_*D.wyz-D.xzx;
    vec4 j=p-49.0*floor(p*ns.z*ns.z);
    vec4 x_=floor(j*ns.z);
    vec4 y_=floor(j-7.0*x_);
    vec4 x=x_*ns.x+ns.yyyy;
    vec4 y=y_*ns.x+ns.yyyy;
    vec4 h=1.0-abs(x)-abs(y);
    vec4 b0=vec4(x.xy,y.xy);
    vec4 b1=vec4(x.zw,y.zw);
    vec4 s0=floor(b0)*2.0+1.0;
    vec4 s1=floor(b1)*2.0+1.0;
    vec4 sh=-step(h,vec4(0.0));
    vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
    vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
    vec3 p0=vec3(a0.xy,h.x);
    vec3 p1=vec3(a0.zw,h.y);
    vec3 p2=vec3(a1.xy,h.z);
    vec3 p3=vec3(a1.zw,h.w);
    vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
    vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
    m=m*m;
    return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
  }

  void main() {
    vNormal = normal;
    float n = snoise(position * 1.6 + uTime * 0.35);
    float disp = n * uAmp;
    vDisp = disp;
    vec3 newPos = position + normal * disp;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
  }
`;

const fragmentShader = `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying vec3 vNormal;
  varying float vDisp;

  void main() {
    float fres = pow(1.0 - abs(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0))), 2.0);
    vec3 color = mix(uColorA, uColorB, clamp(vDisp * 1.5 + 0.5, 0.0, 1.0));
    color += fres * 0.5;
    gl_FragColor = vec4(color, 0.85);
  }
`;

function useParticleHalo(count: number, radius: number) {
  return useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * (0.85 + Math.random() * 0.5);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      speeds[i] = 0.2 + Math.random() * 0.6;
    }
    return { positions, speeds };
  }, [count, radius]);
}

export function FloatingKnot({ motion }: { motion: MotionRefs }) {
  const group = useRef<THREE.Group>(null);
  const shellRef = useRef<THREE.ShaderMaterial>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const idle = useRef(0);
  const clock = useRef(0);

  const { positions } = useParticleHalo(900, 1.9);

  const shellUniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAmp: { value: 0.18 },
      uColorA: { value: new THREE.Color("#0b0b14") },
      uColorB: { value: new THREE.Color("#00e5ff") },
    }),
    []
  );

  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;

    clock.current += delta;

    const s = motion.scroll.current;
    const targetX = motion.isMobile ? 0 : 2.35;
    const targetY = (motion.isMobile ? 0.55 : 0.2) - s * 3.4;
    const targetZ = (motion.isMobile ? -1.4 : 0.15) - s * 1.4;
    const targetScale = motion.isMobile ? 0.55 : 1 - s * 0.25;

    g.position.x = THREE.MathUtils.damp(g.position.x, targetX, 2, delta);
    g.position.y = THREE.MathUtils.damp(g.position.y, targetY, 2, delta);
    g.position.z = THREE.MathUtils.damp(g.position.z, targetZ, 2, delta);
    const sc = THREE.MathUtils.damp(g.scale.x, Math.max(targetScale, 0.4), 2, delta);
    g.scale.setScalar(sc);

    // shader time + breathing amplitude
    if (shellRef.current) {
      shellRef.current.uniforms.uTime.value = clock.current;
      shellRef.current.uniforms.uAmp.value =
        0.15 + Math.sin(clock.current * 0.8) * 0.05;
    }

    // pulsing core glow
    if (coreRef.current) {
      const pulse = 1 + Math.sin(clock.current * 1.6) * 0.06;
      coreRef.current.scale.setScalar(pulse);
    }

    // slow-rotating particle halo, independent axis for parallax depth
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.current * 0.06;
      particlesRef.current.rotation.x = clock.current * 0.03;
    }

    if (motion.reduced) return;

    idle.current += delta * 0.18;
    g.rotation.y = idle.current + motion.mouse.current.x * 0.45;
    g.rotation.x =
      Math.sin(idle.current * 0.3) * 0.15 - motion.mouse.current.y * 0.32;
    g.rotation.z = motion.mouse.current.x * 0.06;
  });

  return (
    <group ref={group} position={[2.35, 0.2, 0.15]}>
      {/* glowing inner core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshBasicMaterial
          color="#00e5ff"
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* soft glow halo around core */}
      <mesh scale={1.6}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshBasicMaterial
          color="#00e5ff"
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* noise-displaced organic shell */}
      <mesh>
        <icosahedronGeometry args={[1, 6]} />
        <shaderMaterial
          ref={shellRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={shellUniforms}
          transparent
          wireframe={false}
        />
      </mesh>

      {/* thin wireframe overlay to emphasize the distortion */}
      <mesh scale={1.01}>
        <icosahedronGeometry args={[1, 3]} />
        <meshBasicMaterial
          color="#00e5ff"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* orbiting particle halo */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#00e5ff"
          size={0.02}
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          sizeAttenuation
        />
      </points>
    </group>
  );
}