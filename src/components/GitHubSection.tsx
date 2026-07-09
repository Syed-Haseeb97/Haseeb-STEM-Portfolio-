import { useEffect, useMemo, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Section } from './Section';
import { GitHubIcon } from './GitHubIcon';

const GITHUB_USERNAME = 'Syed-Haseeb97';
const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;

interface GitHubProfile {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  updated_at: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  pushed_at: string;
  updated_at: string;
  homepage: string | null;
}

interface GitHubEvent {
  id: string;
  type: string;
  repo: {
    name: string;
  };
  created_at: string;
}

const fallbackProfile: GitHubProfile = {
  login: GITHUB_USERNAME,
  name: 'Syed Haseeb Bukhari',
  avatar_url: 'https://avatars.githubusercontent.com/u/261738479?v=4',
  html_url: GITHUB_PROFILE_URL,
  public_repos: 4,
  followers: 0,
  following: 0,
  updated_at: '2026-07-07T04:13:31Z',
};

const fallbackRepos: GitHubRepo[] = [
  {
    id: 1293009331,
    name: 'Task-Arrangement-App',
    html_url: 'https://github.com/Syed-Haseeb97/Task-Arrangement-App',
    description:
      'A modern productivity app with Kanban boards, Google Tasks & Calendar integration, voice input, and motivational workflows.',
    language: 'TypeScript',
    pushed_at: '2026-07-08T03:29:09Z',
    updated_at: '2026-07-08T03:32:13Z',
    homepage: 'https://task-tracker-994788732310.us-west1.run.app/',
  },
  {
    id: 1291748986,
    name: 'GoNest',
    html_url: 'https://github.com/Syed-Haseeb97/GoNest',
    description: 'Subscription-based recurring commute platform.',
    language: 'TypeScript',
    pushed_at: '2026-07-07T06:11:17Z',
    updated_at: '2026-07-07T06:11:20Z',
    homepage: 'https://gonest-994788732310.us-west1.run.app',
  },
];

const fallbackEvents: GitHubEvent[] = [
  {
    id: '14530321348',
    type: 'PushEvent',
    repo: { name: 'Syed-Haseeb97/Syed-Haseeb97' },
    created_at: '2026-07-08T05:25:19Z',
  },
  {
    id: '14526345826',
    type: 'PushEvent',
    repo: { name: 'Syed-Haseeb97/Task-Arrangement-App' },
    created_at: '2026-07-08T03:29:10Z',
  },
  {
    id: '11441548273',
    type: 'ReleaseEvent',
    repo: { name: 'Syed-Haseeb97/GoNest' },
    created_at: '2026-07-07T05:15:03Z',
  },
];

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value));
}

function formatEventType(type: string) {
  return type
    .replace('Event', '')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .trim();
}

export function GitHubSection() {
  const [profile, setProfile] = useState<GitHubProfile>(fallbackProfile);
  const [repos, setRepos] = useState<GitHubRepo[]>(fallbackRepos);
  const [events, setEvents] = useState<GitHubEvent[]>(fallbackEvents);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadGitHubActivity() {
      try {
        const [profileResponse, reposResponse, eventsResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
            signal: controller.signal,
          }),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
            { signal: controller.signal },
          ),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=30`,
            { signal: controller.signal },
          ),
        ]);

        if (!profileResponse.ok || !reposResponse.ok || !eventsResponse.ok) {
          return;
        }

        setProfile(await profileResponse.json());
        setRepos(await reposResponse.json());
        setEvents(await eventsResponse.json());
        setIsLive(true);
      } catch {
        setIsLive(false);
      }
    }

    loadGitHubActivity();

    return () => controller.abort();
  }, []);

  const visibleRepos = repos
    .filter((repo) => repo.name !== GITHUB_USERNAME)
    .slice(0, 3);

  const languageSummary = useMemo(() => {
    const languages = repos
      .map((repo) => repo.language)
      .filter((language): language is string => Boolean(language));

    return Array.from(new Set(languages)).slice(0, 3).join(', ') || 'Projects';
  }, [repos]);

  const pushEvents = events.filter((event) => event.type === 'PushEvent').length;

  const stats = [
    ['Public repos', profile.public_repos.toString()],
    ['Recent public events', events.length.toString()],
    ['Recent pushes', pushEvents.toString()],
    ['Main languages', languageSummary],
  ];

  return (
    <Section
      eyebrow="GitHub"
      title="Development activity."
      description="Live public GitHub data from my profile, including repositories, recent events, and active project work."
    >
      <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-line bg-white p-5">
          <div className="flex items-center gap-4">
            <img
              src={profile.avatar_url}
              alt={`${profile.login} GitHub avatar`}
              className="h-14 w-14 rounded-full border border-line"
              loading="lazy"
            />
            <div>
              <p className="font-semibold text-ink">
                {profile.name || profile.login}
              </p>
              <a
                href={profile.html_url}
                className="mt-1 inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-accent"
              >
                @{profile.login}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {stats.map(([label, value]) => (
              <div key={label} className="rounded-md border border-line p-4">
                <p className="text-xs text-muted">{label}</p>
                <p className="mt-2 text-sm font-semibold text-ink">{value}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs leading-5 text-muted">
            {isLive ? 'Live from GitHub API' : 'Using latest saved GitHub data'}.
            Profile last updated {formatDate(profile.updated_at)}.
          </p>
        </div>

        <div className="rounded-lg border border-line bg-white p-5">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-muted">Recently Updated Repos</p>
            <a
              href={GITHUB_PROFILE_URL}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>

          <div className="mt-5 grid gap-3">
            {visibleRepos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                className="rounded-md border border-line p-4 transition-colors hover:border-gray-300 hover:bg-gray-50"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold text-ink">{repo.name}</p>
                  <span className="text-xs text-muted">
                    Updated {formatDate(repo.pushed_at || repo.updated_at)}
                  </span>
                </div>
                {repo.description && (
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {repo.description}
                  </p>
                )}
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted">
                  {repo.language && (
                    <span className="rounded-md border border-line px-2 py-1">
                      {repo.language}
                    </span>
                  )}
                  {repo.homepage && (
                    <span className="rounded-md border border-line px-2 py-1">
                      Live demo
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

    </Section>
  );
}
