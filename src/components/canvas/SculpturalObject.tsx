import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export interface InteractionState {
  // Normalized target coordinates [-1, 1]
  targetX: number;
  targetY: number;
  // Eased current coordinates [-1, 1]
  currentX: number;
  currentY: number;
  // Flag indicating if device orientation or user interaction is currently active
  isActive: boolean;
}

interface SculpturalObjectProps {
  interaction: React.MutableRefObject<InteractionState>;
  keyLightRef: React.RefObject<THREE.DirectionalLight | null>;
  rimLightRef: React.RefObject<THREE.PointLight | null>;
  isReducedMotion: boolean;
}

// Tweakable constants for physics and motion tuning
export const MOTION_CONFIG = {
  ROTATION_LIMIT_X: THREE.MathUtils.degToRad(20), // +/- 20 degrees vertical tilt
  ROTATION_LIMIT_Y: THREE.MathUtils.degToRad(25), // +/- 25 degrees horizontal tilt
  LERP_FACTOR: 0.08,                              // Easing factor (0.06 - 0.1)
  PARALLAX_X: 0.28,                               // Slight opposite position shift X
  PARALLAX_Y: 0.22,                               // Slight opposite position shift Y
  AUTO_ROTATE_SPEED_X: 0.08,                      // Idle rotation speed
  AUTO_ROTATE_SPEED_Y: 0.12,
  LIGHT_FOLLOW_FACTOR: 1.5,                       // Highlight follow distance
};

export const SculpturalObject: React.FC<SculpturalObjectProps> = ({
  interaction,
  keyLightRef,
  rimLightRef,
  isReducedMotion,
}) => {
  // Master group handles position parallax & composed rotation
  const tiltGroupRef = useRef<THREE.Group>(null);
  // Inner mesh handles continuous slow idle spin
  const meshRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    // 1. Slow, continuous weighted idle rotation (unless reduced motion is strictly enabled)
    if (!isReducedMotion) {
      if (meshRef.current) {
        meshRef.current.rotation.x += delta * MOTION_CONFIG.AUTO_ROTATE_SPEED_X;
        meshRef.current.rotation.y += delta * MOTION_CONFIG.AUTO_ROTATE_SPEED_Y;
      }
      if (outerRingRef.current) {
        outerRingRef.current.rotation.z -= delta * 0.06;
        outerRingRef.current.rotation.x += delta * 0.04;
      }
    }

    // 2. Smooth Lerp toward target orientation
    const state = interaction.current;
    if (isReducedMotion) {
      state.currentX = 0;
      state.currentY = 0;
    } else {
      // Smooth easing
      state.currentX = THREE.MathUtils.lerp(state.currentX, state.targetX, MOTION_CONFIG.LERP_FACTOR);
      state.currentY = THREE.MathUtils.lerp(state.currentY, state.targetY, MOTION_CONFIG.LERP_FACTOR);
    }

    // 3. Compose transforms on the parent tilt group
    if (tiltGroupRef.current) {
      // Rotation: targetX (horizontal mouse/gamma) tilts around Y axis,
      // targetY (vertical mouse/beta) tilts around X axis.
      const targetRotX = -state.currentY * MOTION_CONFIG.ROTATION_LIMIT_X;
      const targetRotY = state.currentX * MOTION_CONFIG.ROTATION_LIMIT_Y;

      tiltGroupRef.current.rotation.x = targetRotX;
      tiltGroupRef.current.rotation.y = targetRotY;

      // Parallax: shift slightly opposite to the pointer/tilt
      tiltGroupRef.current.position.x = -state.currentX * MOTION_CONFIG.PARALLAX_X;
      tiltGroupRef.current.position.y = -state.currentY * MOTION_CONFIG.PARALLAX_Y;
    }

    // 4. Dynamic Lighting Follow: Key light highlights glide dynamically across the matte ceramic surface
    if (keyLightRef.current && !isReducedMotion) {
      keyLightRef.current.position.x = 4 + state.currentX * MOTION_CONFIG.LIGHT_FOLLOW_FACTOR;
      keyLightRef.current.position.y = 5 + state.currentY * MOTION_CONFIG.LIGHT_FOLLOW_FACTOR;
    }
    if (rimLightRef.current && !isReducedMotion) {
      rimLightRef.current.position.x = -3 - state.currentX * 0.8;
      rimLightRef.current.position.y = 3 - state.currentY * 0.8;
    }
  });

  return (
    <group ref={tiltGroupRef} position={[0, 0, 0]}>
      {/* Central Matte Ink Sculptural Form (Torus Knot) */}
      <mesh ref={meshRef} castShadow receiveShadow>
        <torusKnotGeometry args={[1.35, 0.42, 128, 32, 2, 3]} />
        <meshStandardMaterial
          color="#161514"
          roughness={0.72}
          metalness={0.18}
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
