import { skillGroups } from '../data/portfolio';
import { Section } from './Section';

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technologies I work with."
      description="A focused set of tools for building modern, practical software across frontend, backend, data, and product workflows."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <article
              key={group.title}
              className="rounded-lg border border-line bg-white p-5 transition-colors hover:border-gray-300"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-semibold text-ink">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-line px-3 py-1.5 text-sm text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
