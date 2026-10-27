import {
  Code2,
  Database,
  Figma,
  FileCode2,
  GitBranch,
  Globe2,
  Layers3,
  Server,
  TerminalSquare,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const BASE_PATH = '/Haseeb-STEM-Portfolio-';

const assetPath = (path: string): string => {
  return `${BASE_PATH}${path}`;
};

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageLabel: string;
  screenshots?: ProjectScreenshot[];
  githubHref: string;
  liveHref: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
}

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const profileLinks = {
  github: 'https://github.com/Syed-Haseeb97',
  linkedin: 'https://www.linkedin.com/in/syed-haseeb-bukhari-a6a6961a8',
  email: 'mailto:haseebbukhari97@gmail.com',
  resume: assetPath('/assets/Haseeb_resume_latest.pdf'),
};

export const profileDetails = {
  email: 'haseebbukhari97@gmail.com',
  githubLabel: 'github.com/Syed-Haseeb97',
  linkedinLabel: 'linkedin.com/in/syed-haseeb-bukhari-a6a6961a8',
  portfolioImage: assetPath('/assets/portfolio.png'),
};

export const achievements = [
  '10/10 CGPA in Secondary School',
  'Physics Olympiad Intellectual Award',
  'School Captain Leadership Role',
  'Multiple Academic Excellence Awards',
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming',
    icon: TerminalSquare,
    items: ['Python', 'Java', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frontend',
    icon: FileCode2,
    items: ['React', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express'],
  },
  {
    title: 'Databases',
    icon: Database,
    items: ['Firebase', 'MongoDB'],
  },
  {
    title: 'Tools',
    icon: GitBranch,
    items: ['Git', 'GitHub', 'VS Code', 'Figma'],
  },
];

export const featuredProject = {
  title: 'Ruby — AI Screen Assistant',
  status: 'In Development',
  description:
    'Ruby is a Windows desktop AI assistant with a floating UI, voice input/output, Gemini-powered responses, and local Windows actions — from screen capture and app control to autonomous desktop workflows.',
  role: ['Creator', 'Python Engineer', 'UI Designer'],
  currentStatus: 'Actively under development with voice, automation, and desktop agent features.',
  aiStatement:
    'I leverage AI-assisted development together with software engineering principles to research, prototype, debug, and build practical solutions for real-world problems.',
  features: [
    'Floating liquid-blob UI with operational and emotional expression states',
    'Voice input/output with Gemini-powered responses',
    'Local Windows actions: screenshots, app control, system settings, and more',
    'Autonomous desktop mode with cursor companion and safety controls',
  ],
  technologies: ['Python', 'PyQt6', 'Gemini API', 'SpeechRecognition', 'Playwright'],
  screenshots: [
    {
      src: assetPath('/assets/ruby-ai-assistant.svg'),
      alt: 'Ruby AI screen assistant conversation UI with floating liquid orb',
    },
    {
      src: assetPath('/assets/ruby-desktop-mode.svg'),
      alt: 'Ruby autonomous desktop mode with cursor companion and safety controls',
    },
  ] satisfies ProjectScreenshot[],
  githubHref: 'https://github.com/Syed-Haseeb97/ai_agent',
  liveHref: 'https://github.com/Syed-Haseeb97/ai_agent',
};

export const projectPlaceholders: Project[] = [
  {
    title: 'MOBILITY',
    description:
      'Campus-first vehicle rental marketplace connecting student and faculty renters with vehicle owners. Browse by campus zone, list vehicles, manage bookings, and run owner/admin workflows.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Three.js'],
    imageLabel: 'MOBILITY marketplace',
    screenshots: [
      {
        src: assetPath('/assets/mobility-marketplace.svg'),
        alt: 'MOBILITY campus vehicle rental marketplace with listings and search',
      },
      {
        src: assetPath('/assets/mobility-host.svg'),
        alt: 'MOBILITY host dashboard with fleet stats and handover desk',
      },
    ],
    githubHref: 'https://github.com/Syed-Haseeb97/mobility_03',
    liveHref: 'https://mobility-03.vercel.app',
  },
];

export const projectIcons = [Code2, Globe2, Layers3, Figma];
