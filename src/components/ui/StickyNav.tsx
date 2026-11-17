import React, { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'hero', label: 'INTRO', href: '#' },
  { id: 'about', label: 'ABOUT', href: '#about' },
  { id: 'projects', label: 'WORKS', href: '#projects' },
  { id: 'experience', label: 'EXP', href: '#experience' },
  { id: 'skills', label: 'SKILLS', href: '#skills' },
  { id: 'contact', label: 'CONTACT', href: '#contact' },
];

export const StickyNav: React.FC = () => {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach(({ id, href }) => {
      const el = href === '#' ? document.body : document.querySelector(href);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el as Element);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed left-5 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-5"
    >
      {SECTIONS.map(({ id, label, href }) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={href}
            aria-label={`Navigate to ${label} section`}
            className="group flex items-center gap-2.5"
          >
            {/* Dot */}
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-2 h-2 bg-accent'
                  : 'w-1.5 h-1.5 bg-hairlineDark group-hover:bg-graphite'
              }`}
            />
            {/* Label — only show on hover or active */}
            <span
              className={`font-mono text-[9px] uppercase tracking-widest transition-all duration-300 ${
                isActive
                  ? 'opacity-100 text-accent'
                  : 'opacity-0 group-hover:opacity-100 text-graphite'
              }`}
            >
              {label}
            </span>
          </a>
        );
      })}
    </nav>
  );
};
