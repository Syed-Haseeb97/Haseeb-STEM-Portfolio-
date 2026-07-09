import { FileText } from 'lucide-react';
import { GitHubIcon } from './GitHubIcon';
import { navItems, profileLinks } from '../data/portfolio';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <a href="#top" className="text-base font-semibold tracking-tight text-ink">
          Haseeb
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profileLinks.github}
            aria-label="Open GitHub profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors hover:bg-gray-100"
          >
            <GitHubIcon />
          </a>
          <a
            href={profileLinks.resume}
            className="hidden min-h-10 items-center gap-2 rounded-md border border-line px-3 text-sm font-medium text-ink transition-colors hover:border-gray-300 hover:bg-gray-50 sm:inline-flex"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
