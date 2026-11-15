import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { experienceData } from '../../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="w-full py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-bone text-ink border-b border-hairlineLight"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="04" label="EXPERIENCE & RECOGNITION" dark={false} />

        <div className="divide-y divide-hairlineLight border-t border-b border-hairlineLight">
          {experienceData.map((item, idx) => (
            <div
              key={idx}
              className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline group hover:bg-paper/40 transition-colors"
            >
              <div className="md:col-span-3">
                <span className="font-mono text-xs uppercase tracking-widest text-accent font-medium">
                  {item.period}
                </span>
                <h4 className="font-mono text-xs uppercase tracking-wider text-graphite mt-1">
                  {item.organization}
                </h4>
              </div>

              <div className="md:col-span-4">
                <h3 className="font-display text-2xl md:text-3xl text-ink">
                  {item.role}
                </h3>
              </div>

              <div className="md:col-span-5">
                <p className="font-sans text-sm md:text-base text-graphite leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
