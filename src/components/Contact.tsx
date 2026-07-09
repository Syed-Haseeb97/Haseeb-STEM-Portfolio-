import { Github, Linkedin, Mail } from 'lucide-react';
import { profileDetails, profileLinks } from '../data/portfolio';
import { Section } from './Section';

const contactItems = [
  {
    label: 'Email',
    value: profileDetails.email,
    href: profileLinks.email,
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: profileDetails.githubLabel,
    href: profileLinks.github,
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: profileDetails.linkedinLabel,
    href: profileLinks.linkedin,
    icon: Linkedin,
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s build something useful."
      description="Open to meaningful projects, internships, startup conversations, and software engineering opportunities."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {contactItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              className="rounded-lg border border-line bg-white p-5 transition-colors hover:border-gray-300 hover:bg-gray-50"
            >
              <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
              <p className="mt-4 text-sm font-semibold text-ink">{item.label}</p>
              <p className="mt-1 break-words text-sm text-muted">{item.value}</p>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
