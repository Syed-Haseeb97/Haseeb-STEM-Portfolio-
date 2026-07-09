import { ExternalLink } from 'lucide-react';
import {
  featuredProject,
  projectPlaceholders,
} from '../data/portfolio';
import { Button } from './Button';
import { GitHubIcon } from './GitHubIcon';
import { ProjectVisual } from './ProjectVisual';
import { Section } from './Section';

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Featured work."
      description="A practical portfolio focused on real product thinking, honest status, and maintainable implementation."
    >
      <article className="grid gap-8 rounded-lg border border-line bg-white p-5 shadow-soft lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
        <ProjectVisual
          title={featuredProject.title}
          screenshots={featuredProject.screenshots}
          featured
        />

        <div>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <h3 className="text-3xl font-semibold tracking-tight text-ink">
              {featuredProject.title}
            </h3>
            <span className="rounded-full border border-line bg-gray-50 px-3 py-1 text-xs font-medium text-muted">
              {featuredProject.status}
            </span>
          </div>
          <p className="text-base leading-7 text-muted">
            {featuredProject.description}
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-semibold text-ink">My Role</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {featuredProject.role.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-ink">Current Status</h4>
              <p className="mt-3 text-sm leading-6 text-muted">
                {featuredProject.currentStatus}
              </p>
            </div>
          </div>

          <p className="mt-6 rounded-lg border border-line bg-gray-50 p-4 text-sm leading-6 text-muted">
            {featuredProject.aiStatement}
          </p>

          <div className="mt-6">
            <h4 className="text-sm font-semibold text-ink">Features</h4>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted">
              {featuredProject.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {featuredProject.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-line px-3 py-1.5 text-sm text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={featuredProject.githubHref}>
              <GitHubIcon />
              GitHub
            </Button>
            <Button href={featuredProject.liveHref} variant="primary">
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Live Demo
            </Button>
          </div>
        </div>
      </article>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projectPlaceholders.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-line bg-white p-5 transition-colors hover:border-gray-300"
          >
            <ProjectVisual
              title={project.title}
              screenshots={project.screenshots}
            />
            <h3 className="mt-5 text-xl font-semibold text-ink">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-line px-3 py-1 text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <Button href={project.githubHref} className="min-h-10 px-3">
                <GitHubIcon />
                GitHub
              </Button>
              <Button href={project.liveHref} className="min-h-10 px-3">
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Live Demo
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
