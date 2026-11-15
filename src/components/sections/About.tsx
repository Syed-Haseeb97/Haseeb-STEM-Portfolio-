import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { aboutData, personalInfo } from '../../data/portfolio';
import { ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full py-16 sm:py-24 md:py-36 px-5 sm:px-8 md:px-16 lg:px-24 bg-bone text-ink border-b border-hairlineLight"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="02" label="BIOGRAPHY & FORMATION" dark={false} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Main Statement */}
          <div className="lg:col-span-7">
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight text-ink mb-6 sm:mb-8">
              Engineering autonomous workflows with mathematical discipline and full-stack rigor.
            </h3>
            <p className="font-sans text-sm sm:text-base md:text-lg text-graphite leading-relaxed mb-6">
              {aboutData.narrative}
            </p>
            <div className="pt-4 flex items-center space-x-6 font-mono text-xs uppercase tracking-wider">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-ink hover:text-accent border-b border-ink/40 hover:border-accent pb-0.5 transition-colors"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-ink hover:text-accent border-b border-ink/40 hover:border-accent pb-0.5 transition-colors"
              >
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Key Facts / Mono Editorial List */}
          <div className="lg:col-span-5 bg-paper border border-hairlineLight p-6 md:p-8">
            <h4 className="font-mono text-xs uppercase tracking-widest text-graphite mb-6 pb-2 border-b border-hairlineLight">
              SPECIFICATIONS & MILESTONES
            </h4>

            <div className="space-y-6">
              {aboutData.details.map((item, idx) => (
                <div key={idx} className="pb-4 border-b border-hairlineLight/60 last:border-b-0 last:pb-0">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-graphite mb-1">
                    {item.label}
                  </span>
                  <span className="font-sans text-sm md:text-base font-medium text-ink">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
