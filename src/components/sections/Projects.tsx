import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeader } from '../ui/SectionHeader';
import { projects } from '../../data/portfolio';
import { ArrowUpRight } from 'lucide-react';

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
        className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 lg:w-max lg:will-change-transform"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full lg:w-[540px] flex-shrink-0 bg-[#161514] border border-hairlineDark p-6 sm:p-8 md:p-10 flex flex-col justify-between group hover:border-hairlineDark/90 transition-colors"
          >
            <div>
              {/* Card Meta Top */}
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-graphite mb-6 pb-4 border-b border-hairlineDark">
                <span className="text-accent font-semibold">{project.number}</span>
                <span>{project.category}</span>
              </div>

              {/* Title & Tagline */}
              <h3 className="font-display text-2xl md:text-3xl text-bone mb-2 group-hover:text-bone/90 transition-colors">
                {project.title}
              </h3>
              <p className="font-mono text-xs text-graphite uppercase tracking-wide mb-6">
                {project.tagline}
              </p>

              {/* Award banner if applicable */}
              {project.award && (
                <div className="mb-6 inline-block bg-[#201D1A] border-l-2 border-accent px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-bone">
                  {project.award}
                </div>
              )}

              {/* Description */}
              <p className="font-sans text-sm text-graphite leading-relaxed mb-8">
                {project.description}
              </p>
            </div>

            <div>
              {/* Technologies */}
              <div className="pt-6 border-t border-hairlineDark mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="font-mono text-[10px] uppercase tracking-wider text-graphite border border-hairlineDark px-2 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions / Links */}
              <div className="flex items-center space-x-6 font-mono text-xs uppercase tracking-wider">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-bone hover:text-accent transition-colors"
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
                    className="inline-flex items-center space-x-1.5 text-bone hover:text-accent transition-colors"
                  >
                    <span>LIVE DEPLOYMENT</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                  </a>
                )}
                {project.isPrivate && (
                  <span className="font-mono text-[10px] text-graphite tracking-widest">
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
