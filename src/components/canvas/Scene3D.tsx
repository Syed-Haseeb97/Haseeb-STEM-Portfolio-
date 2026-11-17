import React, { Suspense, useEffect, useRef, useState, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { SculpturalObject, InteractionState } from './SculpturalObject';
import { Compass } from 'lucide-react';

export const Scene3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const keyLightRef = useRef<THREE.DirectionalLight | null>(null);
  const rimLightRef = useRef<THREE.PointLight | null>(null);

  // Interaction state shared with R3F render loop without triggering React re-renders
  const interaction = useRef<InteractionState>({
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
    isActive: false,
  });

  // Gyroscope calibration baselines
  const gyroBaseline = useRef<{ beta: number; gamma: number } | null>(null);

  // State management
  const [shouldRender3D, setShouldRender3D] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const [showTiltButton, setShowTiltButton] = useState(false);
  const [tiltPermissionGranted, setTiltPermissionGranted] = useState(false);

  // 1. Check capability & reduced motion preferences
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(motionQuery.matches);

    // Support 3D across devices unless reduced motion is explicitly preferred
    setShouldRender3D(true);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    motionQuery.addEventListener('change', handleMotionChange);
    return () => motionQuery.removeEventListener('change', handleMotionChange);
  }, []);

  // 2. Tab visibility tracking to pause GPU loops when tab is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(document.visibilityState === 'visible');
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // 3. Desktop / Mouse interaction with fine pointer detection
  useEffect(() => {
    if (isReducedMotion) return;

    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to [-1, 1] relative to viewport
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;

      interaction.current.targetX = THREE.MathUtils.clamp(normX, -1, 1);
      interaction.current.targetY = THREE.MathUtils.clamp(normY, -1, 1);
      interaction.current.isActive = true;
    };

    const handleMouseLeave = () => {
      // Gently return to center when pointer leaves the window
      interaction.current.targetX = 0;
      interaction.current.targetY = 0;
      interaction.current.isActive = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isReducedMotion]);

  // 4. Device Gyroscope Handling (Android auto-start & iOS Safari permission flow)
  useEffect(() => {
    if (isReducedMotion) return;

    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    if (!isTouch) return;

    // Check if iOS DeviceOrientationEvent.requestPermission exists
    const hasRequestPermission =
      typeof DeviceOrientationEvent !== 'undefined' &&
      typeof (DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> })
        .requestPermission === 'function';

    if (hasRequestPermission && !tiltPermissionGranted) {
      // On iOS, show tasteful "Enable tilt" button
      setShowTiltButton(true);
    } else {
      // Android / standard mobile browsers: start listening directly
      bindOrientation();
    }

    function bindOrientation() {
      const handleOrientation = (e: DeviceOrientationEvent) => {
        if (e.beta === null || e.gamma === null) return;

        // Establish initial holding angle baseline on first valid reading
        if (!gyroBaseline.current) {
          gyroBaseline.current = { beta: e.beta, gamma: e.gamma };
          return;
        }

        // Delta from baseline
        const deltaBeta = e.beta - gyroBaseline.current.beta;
        const deltaGamma = e.gamma - gyroBaseline.current.gamma;

        // Map angles: +/- 30 degrees tilt to [-1, 1]
        const SENSITIVITY = 30;
        const normY = THREE.MathUtils.clamp(-deltaBeta / SENSITIVITY, -1, 1);
        const normX = THREE.MathUtils.clamp(deltaGamma / SENSITIVITY, -1, 1);

        interaction.current.targetX = normX;
        interaction.current.targetY = normY;
        interaction.current.isActive = true;
      };

      window.addEventListener('deviceorientation', handleOrientation, { passive: true });
      return () => window.removeEventListener('deviceorientation', handleOrientation);
    }
  }, [isReducedMotion, tiltPermissionGranted]);

  // Handler for iOS "Enable tilt" tap
  const handleRequestTiltPermission = useCallback(async () => {
    try {
      const DeviceOrientation = DeviceOrientationEvent as unknown as {
        requestPermission?: () => Promise<'granted' | 'denied'>;
      };
      if (typeof DeviceOrientation.requestPermission === 'function') {
        const response = await DeviceOrientation.requestPermission();
        if (response === 'granted') {
          setTiltPermissionGranted(true);
          setShowTiltButton(false);
          gyroBaseline.current = null; // Re-zero baseline
        } else {
          setShowTiltButton(false);
        }
      }
    } catch {
      setShowTiltButton(false);
    }
  }, []);

  // 5. IntersectionObserver to pause rendering when scrolled past the viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '100px' }
    );
    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, []);

  if (!shouldRender3D) {
    return (
      <div ref={containerRef} className="w-full h-full flex items-center justify-center opacity-60">
        <svg
          viewBox="0 0 200 200"
          className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 animate-[spin_40s_linear_infinite]"
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
    <div ref={containerRef} className="w-full h-full pointer-events-none relative">
      {/* iOS Safari Tilt Activation Capsule Button */}
      {showTiltButton && (
        <div className="absolute bottom-6 right-6 z-30 pointer-events-auto">
          <button
            onClick={handleRequestTiltPermission}
            className="inline-flex items-center space-x-2 bg-ink/90 border border-hairlineLight text-bone px-3.5 py-2 rounded-full font-mono text-[10px] uppercase tracking-wider hover:border-accent transition-all shadow-lg backdrop-blur-sm"
          >
            <Compass className="w-3.5 h-3.5 text-accent" />
            <span>Enable Tilt</span>
          </button>
        </div>
      )}

      {isInView && isTabVisible && (
        <Canvas
          camera={{ position: [0, 0, 5.2], fov: 45 }}
          dpr={[1, Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2)]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={0.4} />
          {/* Warm key light */}
          <directionalLight
            ref={keyLightRef}
            position={[4, 5, 4]}
            intensity={1.6}
            color="#FFE6CC"
          />
          {/* Subtle fill light */}
          <directionalLight position={[-4, -2, 2]} intensity={0.3} color="#D8D2C6" />
          {/* Vermilion rim light on opposite side */}
          <pointLight
            ref={rimLightRef}
            position={[-3, 3, -2]}
            intensity={2.8}
            color="#D9432B"
            distance={8}
          />

          <Suspense fallback={null}>
            <SculpturalObject
              interaction={interaction}
              keyLightRef={keyLightRef}
              rimLightRef={rimLightRef}
              isReducedMotion={isReducedMotion}
            />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};
