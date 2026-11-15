import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { personalInfo } from '../../data/portfolio';
import { Scene3D } from '../canvas/Scene3D';
import { ArrowDownRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLHeadingElement>(null);
  const headlineLine2Ref = useRef<HTMLHeadingElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } });

      tl.from([headlineLine1Ref.current, headlineLine2Ref.current], {
        yPercent: 110,
        opacity: 0,
        stagger: 0.15,
        delay: 0.2,
      }).from(
        metaRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 1.0,
        },
        '-=0.6'
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-12 px-6 md:px-16 lg:px-24 bg-ink text-bone overflow-hidden border-b border-hairlineDark"
    >
      {/* 3D Canvas Background / Interactive Viewport */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-85">
        <Scene3D />
      </div>

      {/* Top Meta Line */}
      <div className="relative z-10 flex flex-wrap items-center justify-between font-mono text-xs uppercase tracking-widest text-graphite border-b border-hairlineDark pb-4">
        <span>01 / FOLIO</span>
        <span>IIIT TRICHY &bull; FOUNDING ENG @ DORMY.IN</span>
        <span className="hidden sm:inline">AUTONOMOUS WORKFLOWS</span>
      </div>

      {/* Central Large Editorial Display Typography */}
      <div className="relative z-10 my-auto py-12 md:py-20 max-w-6xl">
        <div className="overflow-hidden mb-1">
          <h1
            ref={headlineLine1Ref}
            className="font-display italic text-[clamp(3.2rem,9.5vw,8.5rem)] leading-[0.88] tracking-tight font-normal text-bone"
          >
            Syed Haseeb
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1
            ref={headlineLine2Ref}
            className="font-display text-[clamp(3.2rem,9.5vw,8.5rem)] leading-[0.88] tracking-tight font-normal text-bone"
          >
            Bukhari.
          </h1>
        </div>
      </div>

      {/* Bottom Information Row */}
      <div
        ref={metaRef}
        className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-8 border-t border-hairlineDark"
      >
        <div className="md:col-span-6 lg:col-span-7">
          <p className="font-sans text-sm md:text-base text-graphite leading-relaxed max-w-xl">
            {personalInfo.positioning}
          </p>
        </div>

        <div className="md:col-span-6 lg:col-span-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-mono text-xs tracking-wider uppercase">
          <a
            href="#projects"
            className="group inline-flex items-center space-x-2 text-bone hover:text-accent transition-colors"
          >
            <span>SELECTED WORKS (03)</span>
            <ArrowDownRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-graphite hover:text-bone transition-colors"
          >
            <span>RESUME [PDF]</span>
          </a>
        </div>
      </div>
    </section>
  );
};
