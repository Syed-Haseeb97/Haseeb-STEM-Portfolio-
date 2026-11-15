import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { SculpturalObject } from './SculpturalObject';

export const Scene3D: React.FC = () => {
  const mouse = useRef({ x: 0, y: 0 });
  const [shouldRender3D, setShouldRender3D] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference or very small screens/low-power
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    if (!prefersReducedMotion && !isMobile) {
      setShouldRender3D(true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to [-1, 1]
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!shouldRender3D) {
    // Elegant fallback: minimalist dark matte silhouette graphic with warm accent glow
    return (
      <div className="w-full h-full flex items-center justify-center opacity-60">
        <svg
          viewBox="0 0 200 200"
          className="w-48 h-48 md:w-64 md:h-64 animate-[spin_40s_linear_infinite]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="80" stroke="#2A2926" strokeWidth="1" />
          <ellipse cx="100" cy="100" rx="75" ry="40" stroke="#6B675F" strokeWidth="1" transform="rotate(30 100 100)" />
          <ellipse cx="100" cy="100" rx="75" ry="40" stroke="#D9432B" strokeWidth="0.75" transform="rotate(-30 100 100)" strokeDasharray="4 6" />
        </svg>
      </div>
    );
  }

  return (
    <div className="w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        dpr={[1, 2]} // Cap DPR at 2
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.4} />
        {/* Warm key light */}
        <directionalLight position={[4, 5, 4]} intensity={1.6} color="#FFE6CC" />
        {/* Subtle fill light */}
        <directionalLight position={[-4, -2, 2]} intensity={0.3} color="#D8D2C6" />
        {/* Vermilion rim light on opposite side */}
        <pointLight position={[-3, 3, -2]} intensity={2.8} color="#D9432B" distance={8} />

        <Suspense fallback={null}>
          <SculpturalObject mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  );
};
