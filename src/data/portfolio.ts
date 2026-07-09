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
  resume: '/assets/Haseeb-resume.pdf',
};

export const profileDetails = {
  email: 'haseebbukhari97@gmail.com',
  githubLabel: 'github.com/Syed-Haseeb97',
  linkedinLabel: 'linkedin.com/in/syed-haseeb-bukhari-a6a6961a8',
  portfolioImage: '/assets/portfolio.png',
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
  title: 'GoNest',
  status: 'In Development',
  description:
    'GoNest is a recurring commute platform designed to help students, professionals, teachers, and daily commuters subscribe to recurring rides instead of booking transportation every day.',
  role: ['Founder', 'Product Designer', 'Developer'],
  currentStatus: 'Actively under development.',
  aiStatement:
    'I leverage AI-assisted development together with software engineering principles to research, prototype, debug, and build practical solutions for real-world problems.',
  features: [
    'Recurring ride subscription flow for repeat commuters',
    'User-focused product structure for students, teachers, professionals, and daily riders',
    'Clean booking, route, and ride-management concepts for everyday use',
    'Practical development process focused on research, prototyping, debugging, and iteration',
  ],
  technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Firebase'],
  screenshots: [
    {
      src: '/assets/gonest-features.png',
      alt: 'GoNest feature section showing monthly commute booking, shared ride savings, passenger matching, and safe travel cards',
    },
    {
      src: '/assets/gonest-savings.png',
      alt: 'GoNest savings calculator section showing commute savings messaging',
    },
  ] satisfies ProjectScreenshot[],
  githubHref: 'https://github.com/Syed-Haseeb97/GoNest',
  liveHref: 'https://gonest-994788732310.us-west1.run.app/',
};

export const projectPlaceholders: Project[] = [
  {
    title: 'Task Tracker',
    description:
      'A modern productivity platform featuring Kanban workflows, Google Calendar & Tasks integration, voice-powered task creation, motivational workflows, and responsive UI.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Google Workspace'],
    imageLabel: 'Task Tracker product screenshots',
    screenshots: [
      {
        src: '/assets/task-tracker-dashboard.png',
        alt: 'Task Tracker dashboard showing progress, priority balance, and Google Workspace sign-in',
      },
      {
        src: '/assets/task-tracker-kanban.png',
        alt: 'Task Tracker Kanban board with To Do, Doing, and Done task columns',
      },
    ],
    githubHref: 'https://github.com/Syed-Haseeb97/Task-Arrangement-App',
    liveHref: 'https://task-tracker-994788732310.us-west1.run.app/',
  },
];

export const projectIcons = [Code2, Globe2, Layers3, Figma];
