import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeader } from '../ui/SectionHeader';
import { projects } from '../../data/portfolio';
import { ArrowUpRight, Terminal, Award, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Only pin and horizontal-scroll on desktop screens (>1024px)
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        if (!horizontalTrackRef.current || !sectionRef.current) return;

        const track = horizontalTrackRef.current;
        const totalScroll = track.scrollWidth - window.innerWidth + 120;

        gsap.to(track, {
          x: -totalScroll,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            start: 'top top',
            end: () => `+=${totalScroll}`,
            invalidateOnRefresh: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full py-16 sm:py-24 md:py-32 px-5 sm:px-8 md:px-16 lg:px-24 bg-ink text-bone border-b border-hairlineDark overflow-hidden"
    >
      <div className="max-w-6xl mx-auto mb-8 sm:mb-12">
        <SectionHeader number="03" label="INDEX OF WORKS & RESEARCH" dark={true} />
      </div>

      {/* Track container */}
      <div
        ref={horizontalTrackRef}
        className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 lg:w-max lg:will-change-transform"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative w-full lg:w-[580px] flex-shrink-0 rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-hidden group transition-all duration-300"
            style={{
              background:
                'linear-gradient(165deg, rgba(32, 32, 35, 0.72) 0%, rgba(22, 22, 24, 0.65) 50%, rgba(14, 14, 16, 0.78) 100%)',
              backdropFilter: 'blur(36px) saturate(180%)',
              WebkitBackdropFilter: 'blur(36px) saturate(180%)',
              boxShadow:
                'inset 0 1px 0 0 rgba(255, 255, 255, 0.25), inset 0 -1px 0 0 rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.16)',
            }}
          >
            {/* Top Specular Flare (Apple Liquid Glass) */}
            <div
              className="absolute inset-0 pointer-events-none rounded-2xl z-0"
              style={{
                background:
                  'radial-gradient(120% 60% at 20% 0%, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.03) 50%, transparent 80%)',
              }}
            />

            {/* Inner Content */}
            <div className="relative z-10">
              {/* Card Meta Top: Creator Signature Badge (✌️ Syed) + Index & Category */}
              <div className="flex items-center justify-between gap-3 pb-5 mb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  {/* Creator Signature Pill from Image 2 */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.08] border border-white/15 text-white/90 font-sans text-xs font-medium tracking-tight shadow-sm select-none">
                    <span
                      className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px] leading-none select-none"
                      aria-label="Victory hand icon"
                    >
                      ✌️
                    </span>
                    <span className="text-[12px] font-medium text-white/90">Syed</span>
                  </div>

                  <span className="font-mono text-sm font-semibold text-accent tabular-nums">
                    {project.number}
                  </span>
                </div>

                <span className="font-mono text-xs uppercase tracking-widest text-[rgba(235,235,245,0.65)] font-medium">
                  {project.category}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-tight tracking-tight mb-2">
                {project.title}
              </h3>
              <p className="font-mono text-xs text-[rgba(235,235,245,0.55)] uppercase tracking-wide mb-5">
                {project.tagline}
              </p>

              {/* Award banner if applicable */}
              {project.award && (
                <div className="mb-5 inline-flex items-center gap-2 bg-white/[0.06] border border-accent/40 rounded-lg px-3 py-1.5 font-mono text-[11px] text-[#ECE7DD]">
                  <Award className="w-3.5 h-3.5 text-accent" />
                  <span>{project.award}</span>
                </div>
              )}

              {/* Concrete Utility Description (Unslop: Say What It Does) */}
              <p className="font-sans text-sm sm:text-base text-[rgba(235,235,245,0.75)] leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Concrete Architecture / Blueprint Inset */}
              {project.blueprintSnippet && (
                <div className="mb-6 rounded-xl bg-black/40 border border-white/10 p-3.5 sm:p-4 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-white/10 text-[10px] uppercase tracking-wider text-[rgba(235,235,245,0.50)]">
                    <div className="flex items-center gap-1.5">
                      <Terminal className="w-3 h-3 text-accent" />
                      <span>{project.blueprintSnippet.label}</span>
                    </div>
                    <span className="text-accent/80 font-semibold">VERIFIED</span>
                  </div>
                  <div className="space-y-1 text-[11px] text-[rgba(235,235,245,0.85)] leading-relaxed font-mono">
                    {project.blueprintSnippet.lines.map((line, lIdx) => (
                      <div key={lIdx} className="truncate">
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Section: Technologies & Actions */}
            <div className="relative z-10 pt-5 border-t border-white/10">
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="font-mono text-[11px] uppercase tracking-wider text-[rgba(235,235,245,0.80)] bg-white/[0.06] border border-white/10 px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions / Links */}
              <div className="flex flex-wrap items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/[0.08] hover:bg-white/[0.18] border border-white/15 text-white font-mono text-xs uppercase tracking-wider transition-all duration-150 shadow-sm"
                  >
                    <span>SOURCE CODE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/[0.08] hover:bg-white/[0.18] border border-white/15 text-white font-mono text-xs uppercase tracking-wider transition-all duration-150 shadow-sm"
                  >
                    <span>LIVE DEPLOYMENT</span>
                    <ExternalLink className="w-3.5 h-3.5 text-accent" />
                  </a>
                )}
                {project.isPrivate && (
                  <span className="font-mono text-[11px] text-[rgba(235,235,245,0.45)] tracking-wider px-2 py-1">
                    [PRIVATE REPO / HACKATHON]
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
