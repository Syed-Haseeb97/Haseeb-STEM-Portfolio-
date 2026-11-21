import React from 'react';

export interface SocialCardProps {
  platform: 'github' | 'instagram';
  username: string;
  displayName: string;
  roleOrBio: string;
  stats: {
    stat1: { count: string; label: string };
    stat2: { count: string; label: string };
    stat3: { count: string; label: string };
  };
  avatarSrc: string;
  primaryAction: { label: string; href: string };
  secondaryAction: { label: string; href: string };
}

export const AnimatedSocialCard: React.FC<SocialCardProps> = ({
  platform,
  username,
  displayName,
  roleOrBio,
  stats,
  avatarSrc,
  primaryAction,
  secondaryAction,
}) => {
  const isGithub = platform === 'github';

  const rotatingGradient = isGithub
    ? 'linear-gradient(transparent, #43f3ff, #8892b0, transparent)'
    : 'linear-gradient(transparent, #f09433, #dc2743, #bc1888, transparent)';

  const primaryBtnColor = isGithub
    ? 'bg-[#43f3ff] text-[#111110]'
    : 'bg-[#e1306c] text-white';

  const nameColor = isGithub
    ? 'text-[#43f3ff]'
    : 'text-[#f77737]';

  const statAccentColor = isGithub
    ? 'text-[#43f3ff]'
    : 'text-[#e1306c]';

  return (
    <div
      className="relative group w-[340px] h-[190px] hover:h-[450px] transition-all duration-500 ease-in-out bg-[#161514] flex justify-center items-center rounded-2xl mx-auto my-12 shadow-2xl"
      role="article"
      aria-label={`${platform} profile card for ${displayName}`}
    >
      {/* Rotating Border Gradient */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 w-[600px] h-[140px] -translate-x-1/2 -translate-y-1/2 animate-[spin_4.5s_linear_infinite]"
          style={{ background: rotatingGradient }}
        />
        <div className="absolute inset-[3px] bg-[#161514] rounded-[13px]" />
      </div>

      {/* Avatar Box */}
      <div className="absolute -top-[50px] left-1/2 -translate-x-1/2 w-[140px] h-[140px] bg-[#111110] rounded-2xl transition-all duration-500 ease-in-out z-20 overflow-hidden shadow-xl group-hover:w-[220px] group-hover:h-[220px] group-hover:-top-[80px]">
        <div
          className="absolute top-1/2 left-1/2 w-[500px] h-[120px] -translate-x-1/2 -translate-y-1/2 animate-[spin_4.5s_linear_infinite]"
          style={{ background: rotatingGradient }}
        />
        <div className="absolute inset-[3px] bg-[#161514] rounded-[13px]" />
        <img
          src={avatarSrc}
          alt={`${displayName} avatar`}
          className="absolute top-[8px] left-[8px] w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-xl object-cover z-10 filter grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>

      {/* Expandable Content */}
      <div className="absolute inset-0 w-full h-full flex justify-center items-end overflow-hidden rounded-2xl z-10 pointer-events-none group-hover:pointer-events-auto">
        <div className="text-center w-full px-6 pb-6 transition-all duration-500 ease-in-out translate-y-[135px] group-hover:translate-y-0">
          <h2 className={`font-display text-2xl font-bold tracking-wide ${nameColor} transition-colors duration-300`}>
            {displayName}
          </h2>
          <p className="font-mono text-xs uppercase tracking-wider text-bone/80 mt-1">@{username}</p>
          <p className="font-sans text-xs text-graphite mt-1 max-w-[260px] mx-auto line-clamp-2">{roleOrBio}</p>

          {/* Stats Row */}
          <div className="flex justify-between items-center my-5 px-3 py-2 bg-[#1c1a18] rounded-xl border border-hairlineDark">
            {[stats.stat1, stats.stat2, stats.stat3].map((s, i, arr) => (
              <div
                key={s.label}
                className={`flex-1 text-center ${i < arr.length - 1 ? 'border-r border-hairlineDark/60' : ''}`}
              >
                <span className={`block font-mono text-sm font-bold ${statAccentColor}`}>{s.count}</span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-graphite">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center gap-3">
            <a
              href={primaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${primaryAction.label} on ${platform}`}
              className={`flex-1 py-2.5 rounded-lg font-mono text-xs font-semibold uppercase tracking-wider ${primaryBtnColor} hover:opacity-90 transition-opacity`}
            >
              {primaryAction.label}
            </a>
            <a
              href={secondaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${secondaryAction.label} on ${platform}`}
              className="flex-1 py-2.5 rounded-lg font-mono text-xs font-semibold uppercase tracking-wider bg-bone text-ink hover:bg-paper transition-colors"
            >
              {secondaryAction.label}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
