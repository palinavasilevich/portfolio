"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type * as THREE from "three";

import { D20Model } from "./D20Model";

function RotatingDice() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x += delta * 0.5;
    groupRef.current.rotation.y += delta * 0.7;
    groupRef.current.rotation.z += delta * 0.3;
  });

  return <D20Model ref={groupRef} />;
}

export function DiceLoader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d0d14] animate-in fade-in duration-300">
      <div className="relative w-80 h-80">
        <div className="absolute inset-x-0 bottom-4 mx-auto w-40 h-8 rounded-full bg-purple-600/30 blur-xl" />
        <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <directionalLight
            position={[-3, -3, -3]}
            intensity={0.3}
            color="#a855f7"
          />
          <RotatingDice />
        </Canvas>
      </div>

      <p className="mt-4 text-purple-400 tracking-[0.4em] animate-pulse text-lg">
        LOADING...
      </p>
    </div>
  );
}
