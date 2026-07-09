import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {(eyebrow || title || description) && (
        <div className="mb-10 max-w-2xl">
          {eyebrow && (
            <p className="mb-3 text-sm font-medium text-accent">{eyebrow}</p>
          )}
          {title && (
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </motion.section>
  );
}
