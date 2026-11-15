import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { skillsData } from '../../data/portfolio';

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="w-full py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-ink text-bone border-b border-hairlineDark"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="05" label="TECHNICAL CAPABILITIES & TOOLING" dark={true} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {skillsData.map((category, idx) => (
            <div key={idx} className="border-t border-hairlineDark pt-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-6">
                {category.group}
              </h3>

              <ul className="space-y-4">
                {category.items.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="flex items-center justify-between pb-3 border-b border-hairlineDark/60 font-sans text-sm md:text-base text-bone/90 hover:text-bone hover:pl-1 transition-all"
                  >
                    <span>{skill}</span>
                    <span className="font-mono text-[10px] text-graphite tracking-widest uppercase">
                      PROVEN
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
