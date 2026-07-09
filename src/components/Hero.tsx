import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { GitHubIcon } from './GitHubIcon';
import { profileLinks } from '../data/portfolio';

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <p className="mb-4 text-sm font-medium text-accent">
          Student Developer | Startup Builder
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
          Hi, I'm Haseeb.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          I build software that solves real-world problems using modern software
          engineering and AI-assisted development.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="#projects" variant="primary">
            View Projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button href={profileLinks.github}>
            <GitHubIcon />
            GitHub
          </Button>
        </div>
      </motion.div>

      <motion.div
        className="rounded-lg border border-line bg-white p-4 shadow-soft"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
        aria-label="Portfolio project preview"
      >
        <div className="rounded-md border border-line bg-gray-50 p-4">
          <div className="mb-4 flex items-center justify-between border-b border-line pb-4">
            <div>
              <p className="text-sm font-semibold text-ink">GoNest</p>
              <p className="mt-1 text-xs text-muted">Recurring commute platform</p>
            </div>
            <span className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-muted">
              In Development
            </span>
          </div>
          <div className="grid gap-3">
            {['Subscription routes', 'Commuter profiles', 'Ride planning'].map(
              (item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-md border border-line bg-white px-4 py-3"
                >
                  <span className="text-sm font-medium text-ink">{item}</span>
                  <span className="text-xs text-muted">0{index + 1}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
