// Editorial Data for Syed Haseeb Bukhari Portfolio
const BASE_URL = import.meta.env.BASE_URL;

export const assetPath = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE_URL}${cleanPath}`;
};

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  role: string[];
  technologies: string[];
  award?: string;
  githubUrl?: string;
  liveUrl?: string;
  isPrivate?: boolean;
  visualPreview?: string;
  blueprintSnippet?: {
    label: string;
    lines: string[];
  };
}

export const personalInfo = {
  name: 'Syed Haseeb Bukhari',
  title: 'Engineer & Builder',
  positioning: 'CSE undergraduate at IIIT Trichy, Founding Engineer at dormy.in, and developer exploring agentic AI, full-stack systems, and autonomous workflows.',
  email: 'haseebbukhari97@gmail.com',
  github: 'https://github.com/Syed-Haseeb97',
  instagram: 'https://www.instagram.com/_h4seeb._',
  resumeUrl: assetPath('assets/Haseeb_resume_latest.pdf'),
  githubStats: {
    username: 'Syed-Haseeb97',
    displayName: 'Syed Haseeb',
    bio: "Building products • IIIT Trichy CSE '30",
    repos: '17',
    followers: '7',
    following: '7',
    avatar: assetPath('assets/github_profile.png'),
  },
  instagramStats: {
    username: 'haseeb.larp',
    displayName: 'Haseeeeb',
    bio: 'curious?',
    posts: '0',
    followers: '74',
    following: '114',
    avatar: assetPath('assets/insta_profile.png'),
  },
};

export const aboutData = {
  narrative: `I am an engineer focused on the intersection of agentic workflows, systems engineering, and software products. Grounded in mathematical foundations and computer science principles, I build practical tools ranging from desktop automation agents to mobile-first campus platforms. Currently pursuing my Computer Science degree at the Indian Institute of Information Technology (IIIT) Trichy while engineering high-throughput products.`,
  details: [
    { label: 'EDUCATION', value: 'B.Tech in Computer Science & Engineering, IIIT Trichy' },
    { label: 'CURRENT ROLE', value: 'Founding Engineer @ dormy.in' },
    { label: 'CORE DISCIPLINES', value: 'Agentic AI Systems, Full-Stack Architecture, Android Development' },
    { label: 'LOCATION', value: 'Tiruchirappalli & Hyderabad, India' },
  ],
};

export const projects: ProjectItem[] = [
  {
    id: 'ai-agent',
    number: '01',
    title: 'Ruby — Desktop AI Assistant',
    tagline: 'Autonomous Windows Screen & Desktop Agent',
    category: 'AGENTIC AI / PYTHON',
    description:
      'Windows desktop agent built with PyQt6 and Gemini API. Inspects screen state with computer vision, handles local voice I/O, and executes OS-level desktop workflows via safety-governed action planners.',
    role: ['Sole Creator', 'Python Engineer', 'System Architecture'],
    technologies: ['Python', 'PyQt6', 'Gemini API', 'Playwright', 'SpeechRecognition'],
    githubUrl: 'https://github.com/Syed-Haseeb97/ai_agent',
    visualPreview: assetPath('assets/ruby-ai-assistant.svg'),
    blueprintSnippet: {
      label: 'ACTION PLANNER DISPATCH PIPELINE',
      lines: [
        'screen: captured (1920x1080 viewport context)',
        '→ gemini-live: stream 184ms | tool_call: os.window.focus()',
        '✓ execution: safe_planner.dispatch(action="hotkey", keys=["ctrl","shift","p"])',
      ],
    },
  },
  {
    id: 'mobility',
    number: '02',
    title: 'MOBILITY',
    tagline: 'Campus-First Peer-to-Peer Vehicle Marketplace',
    category: 'FULL-STACK / PRODUCT',
    description:
      'Peer-to-peer campus vehicle marketplace for IIIT Trichy. Manages real-time vehicle reservations, telemetry-based host dashboards, dispute handling, and interactive 3D WebGL inspection models.',
    role: ['Full-Stack Lead', 'Frontend Architecture'],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Three.js'],
    githubUrl: 'https://github.com/Syed-Haseeb97/mobility_03',
    liveUrl: 'https://mobility-03.vercel.app',
    visualPreview: assetPath('assets/mobility-marketplace.svg'),
    blueprintSnippet: {
      label: 'CAMPUS TELEMETRY & BOOKING PIPELINE',
      lines: [
        'CAMPUS ZONE: Academic Complex North & Hostels',
        'STATUS: 18 Available • Telemetry Active • 3D Mesh Inspection',
        'RATE: ₹35/hr • Booking Loop: Instant Student ID Verification',
      ],
    },
  },
  {
    id: 'dereel',
    number: '03',
    title: 'DeReel for Instagram',
    tagline: 'Algorithmic Distraction Interceptor & Focus Engine',
    category: 'HACKATHON WINNER / WELLBEING',
    award: '2nd Prize Winner — Hackathon',
    description:
      'Web extension that intercepts and purges Instagram Reels feeds, Explore loops, and video recommendations from the DOM via MutationObserver pipelines while preserving direct messaging and search.',
    role: ['Ideation', 'Full-Stack Implementation'],
    technologies: ['JavaScript', 'WebExtensions API', 'DOM Mutation Engine'],
    githubUrl: 'https://github.com/Syed-Haseeb97/DeReel_instagram',
    blueprintSnippet: {
      label: 'DOM MUTATION INTERCEPTOR',
      lines: [
        'const observer = new MutationObserver(purgeAddictiveNodes);',
        'observer.observe(document.body, { childList: true, subtree: true });',
        '// target: /reels/ & explore nodes -> purged with zero layout shift',
      ],
    },
  },
  {
    id: 'kickskill',
    number: '04',
    title: 'Kick Skill Marvel',
    tagline: 'Gamified Skill Acquisition & Training Platform',
    category: 'HACKATHON WINNER / EDTECH',
    award: '2nd Prize Winner — Hackathon',
    description:
      'Interactive capability assessment platform built with React state trees. Evaluates student programming progression through multi-stage problem tracks and competency mastery curves.',
    role: ['Frontend & Core Logic'],
    technologies: ['React', 'Interactive State Trees', 'UI Systems'],
    isPrivate: true,
    blueprintSnippet: {
      label: 'COMPETENCY STATE MACHINE SCHEMA',
      lines: [
        'state: "competency_progression" | track: "Full-Stack Systems"',
        'milestone[4]: state_machine.transition("MASTERY_UNLOCKED")',
        'telemetry: { completion: 94.2%, accuracy: 98.8%, tier: "Grandmaster" }',
      ],
    },
  },
];

export const experienceData = [
  {
    role: 'Founding Engineer',
    organization: 'dormy.in',
    period: '2026 — Present',
    description:
      'Spearheading core architectural decisions, full-stack product development, and automated tenant/student housing workflows for campus accommodation infrastructure.',
  },
  {
    role: '2nd Prize Winner',
    organization: 'DeReel Project Hackathon',
    period: 'Hackathon Award',
    description:
      'Engineered an anti-distraction dopamine interceptor that reclaims attention without compromising core social communication primitives.',
  },
  {
    role: '2nd Prize Winner',
    organization: 'Kick Skill Marvel Hackathon',
    period: 'Hackathon Award',
    description:
      'Formulated an experiential competency trainer using state-machine guided gamification pipelines.',
  },
];

export const skillsData = [
  {
    group: '01 / AGENTS & AI WORKFLOWS',
    items: ['Gemini API & Multimodal Tool Calling', 'Autonomous Desktop Agent Orchestration', 'Prompt & Vision Pipelines', 'Local Action Planners'],
  },
  {
    group: '02 / ARCHITECTURE & FRONTEND',
    items: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js / React Three Fiber', 'GSAP & Motion Systems'],
  },
  {
    group: '03 / SYSTEMS, BACKEND & MOBILE',
    items: ['Python & PyQt6', 'Android / Jetpack Compose', 'Node.js & Express', 'PostgreSQL / Neon', 'Firebase'],
  },
  {
    group: '04 / ENGINEERING RIGOR',
    items: ['Git & Version Control', 'Web Automation (Playwright)', 'Linux & Windows Tooling', 'State Machine Architecture'],
  },
];

export interface CertificateItem {
  id: string;
  number: string;
  title: string;
  category: string;
  issuer: string;
  date: string;
  venueOrPlatform: string;
  highlight: string;
  verificationBadge: string;
  signatory: string;
  description: string;
  skillsLearned: string[];
  imagePreview: string;
  downloadUrl?: string;
  downloadLabel?: string;
}

export const certificatesData: CertificateItem[] = [
  {
    id: 'forge-26',
    number: '01',
    title: "FORGE '26 — The Gen AI Hackathon",
    category: 'GEN AI / HACKATHON FINALIST',
    issuer: 'NxtWave Launchpad',
    date: '05 NOV 2026',
    venueOrPlatform: 'National Level (30 Oct – 01 Nov 2026)',
    highlight: 'Top 10 Finalist • Certificate of Participation',
    verificationBadge: 'TOP 10 FINALIST',
    signatory: 'Sashank Reddy Gujjula (Co-Founder, NxtWave)',
    description:
      'Awarded for building and submitting an end-to-end working Generative AI application (जनAawaz) during the nationwide FORGE ’26 Hackathon. Ranked among the Top 10 projects across India, demonstrating autonomous prompt engineering, rapid deployment, and practical builder execution.',
    skillsLearned: [
      'Generative AI Systems',
      'Autonomous Agent Pipelines',
      'Rapid Product Engineering',
      'LLM Multimodal Tooling',
    ],
    imagePreview: assetPath('assets/forge_certificate.png'),
    downloadUrl: assetPath('assets/forge_certificate.pdf'),
    downloadLabel: 'Download Certificate PDF',
  },
  {
    id: 'iit-madras-summit',
    number: '02',
    title: 'Dakshinapatha Summit 2.0',
    category: 'DEEP TECH & ENTREPRENEURSHIP',
    issuer: 'IIT Madras & Think India',
    date: '10 – 11 OCT 2026',
    venueOrPlatform: 'Indian Institute of Technology (IIT) Madras, Chennai',
    highlight: 'Certificate of Appreciation',
    verificationBadge: 'OFFICIAL RECOGNITION',
    signatory: 'Prof. V. Kamakoti (Director, IIT Madras) & Vijay Prabhakar (National Convener, Think India)',
    description:
      'Conferred for active participation at the Think India Dakshinapatha Summit 2.0 at IIT Madras, under the theme "Rooted Futures: Bold Ventures — Deep Tech Entrepreneurship in the Age of Intelligence". Explored foundational intelligence, national deep-tech ventures, sovereign AI infrastructure, and frontier technology commercialization.',
    skillsLearned: [
      'Deep Tech Entrepreneurship',
      'Frontier Intelligence Systems',
      'Hardware-Software Systems',
      'Foundational AI Architectures',
    ],
    imagePreview: assetPath('assets/iit_madras_summit_certificate.jpg'),
    downloadUrl: assetPath('assets/iit_madras_summit_certificate.jpg'),
    downloadLabel: 'View High-Res Credential',
  },
];
