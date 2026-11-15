import React from 'react';

interface SectionHeaderProps {
  number: string;
  label: string;
  dark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ number, label, dark = true }) => {
  return (
    <div className="w-full mb-12 md:mb-20">
      <div className="flex items-center justify-between pb-4 border-b border-hairlineDark">
        <div className="flex items-center space-x-4">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-medium">
            {number}
          </span>
          <span className="text-hairlineDark">/</span>
          <h2
            className={`font-mono text-xs uppercase tracking-widest font-semibold ${
              dark ? 'text-bone' : 'text-ink'
            }`}
          >
            {label}
          </h2>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-graphite hidden sm:inline">
          SYED HASEEB BUKHARI
        </span>
      </div>
    </div>
  );
};
