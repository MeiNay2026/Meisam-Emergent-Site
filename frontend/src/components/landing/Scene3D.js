/* eslint-disable react/no-unknown-property */
import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, Sphere } from "@react-three/drei";
import * as THREE from "three";

// A single scroll progress ref shared by the scene (0 at top, grows with scroll).
function useScrollProgress() {
  const ref = useRef(0);
  React.useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      ref.current = max > 0 ? window.scrollY / max : 0;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return ref;
}

// Central organic blob that morphs and rotates with scroll.
function Blob({ scroll }) {
  const mesh = useRef();
  const mat = useRef();
  useFrame((state, delta) => {
    const s = scroll.current;
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.18;
      mesh.current.rotation.z = s * Math.PI * 0.6;
      // drift the blob as you scroll through the hero
      mesh.current.position.y = -s * 4.5;
      mesh.current.position.x = 2.1 + Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
      const scale = 2.15 - s * 0.4;
      mesh.current.scale.setScalar(Math.max(1.2, scale));
    }
    if (mat.current) {
      mat.current.distort = 0.32 + Math.sin(state.clock.elapsedTime * 0.4) * 0.06 + s * 0.15;
    }
  });
  return (
    <mesh ref={mesh} position={[2.1, 0, -1]}>
      <sphereGeometry args={[1, 96, 96]} />
      <MeshDistortMaterial
        ref={mat}
        color="#2A5245"
        roughness={0.28}
        metalness={0.15}
        speed={1.4}
        distort={0.34}
      />
    </mesh>
  );
}

// Small floating accent orbs.
function Orbs({ scroll }) {
  const group = useRef();
  const items = useMemo(
    () => [
      { p: [-3.2, 1.4, 0], s: 0.42, c: "#C4A47C" },
      { p: [-2.1, -1.8, 1], s: 0.28, c: "#4A7A68" },
      { p: [3.4, 2.2, -1], s: 0.34, c: "#C4A47C" },
      { p: [-3.8, -0.6, -2], s: 0.5, c: "#8AB0A0" },
      { p: [1.2, -2.4, 0.5], s: 0.22, c: "#C4A47C" },
    ],
    []
  );
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.05;
      group.current.position.y = scroll.current * -2;
    }
  });
  return (
    <group ref={group}>
      {items.map((it, i) => (
        <Float key={i} speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
          <Sphere args={[it.s, 48, 48]} position={it.p}>
            <meshStandardMaterial color={it.c} roughness={0.35} metalness={0.1} />
          </Sphere>
        </Float>
      ))}
    </group>
  );
}

// Subtle dust particles for depth.
function Dust() {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(220 * 3);
    for (let i = 0; i < 220; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);
  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#8AB0A0" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function Rig({ scroll, pointer }) {
  useFrame((state) => {
    // gentle mouse parallax + slight scroll dolly
    const px = pointer.current.x * 0.4;
    const py = pointer.current.y * 0.3;
    state.camera.position.x += (px - state.camera.position.x) * 0.04;
    state.camera.position.y += (-py - state.camera.position.y) * 0.04;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene3D() {
  const scroll = useScrollProgress();
  const pointer = useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    const onMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
      data-testid="scene-3d"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 42 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 6, 4]} intensity={1.6} color="#ffffff" />
        <directionalLight position={[-6, -2, -4]} intensity={0.5} color="#C4A47C" />
        <Suspense fallback={null}>
          <Blob scroll={scroll} />
          <Orbs scroll={scroll} />
          <Dust />
        </Suspense>
        <Rig scroll={scroll} pointer={pointer} />
      </Canvas>
    </div>
  );
}
