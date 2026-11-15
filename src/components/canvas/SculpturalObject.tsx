import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SculpturalObjectProps {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}

export const SculpturalObject: React.FC<SculpturalObjectProps> = ({ mouse }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      // Slow, weighted rotation
      meshRef.current.rotation.x += delta * 0.12;
      meshRef.current.rotation.y += delta * 0.18;

      // Subtle mouse parallax
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        mouse.current.x * 0.35,
        0.05
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        mouse.current.y * 0.35,
        0.05
      );
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z -= delta * 0.08;
      outerRingRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Matte Ink Sculptural Form (Torus Knot) */}
      <mesh ref={meshRef} castShadow receiveShadow>
        <torusKnotGeometry args={[1.35, 0.42, 128, 32, 2, 3]} />
        <meshStandardMaterial
          color="#161514"
          roughness={0.7}
          metalness={0.2}
        />
      </mesh>

      {/* Orbiting Hairline Ceramic Ring */}
      <mesh ref={outerRingRef}>
        <torusGeometry args={[2.5, 0.018, 16, 100]} />
        <meshStandardMaterial
          color="#2A2926"
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
};
