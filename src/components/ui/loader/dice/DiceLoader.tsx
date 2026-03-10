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

  return <D20Model ref={groupRef} scale={12.5} />;
}

export function DiceLoader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <div className="w-60 h-60">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[3, 3, 3]} />
          <RotatingDice />
        </Canvas>
      </div>

      <p className="mt-8 text-purple-400 tracking-[0.4em] animate-pulse text-lg">
        LOADING...
      </p>
    </div>
  );
}
