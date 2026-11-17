import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { personalInfo } from '../../data/portfolio';
import { AnimatedSocialCard } from '../ui/AnimatedSocialCard';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  const handleDirectDispatch = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const recipient = personalInfo.email;
    const subject = encodeURIComponent('Inquiry / Collaboration — Syed Haseeb Bukhari');
    const body = encodeURIComponent(
      'Hi Haseeb,\n\nI came across your portfolio and would like to connect regarding:\n\n'
    );

    const isTouchOrMobile =
      window.matchMedia('(pointer: coarse)').matches ||
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isTouchOrMobile) {
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    } else {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        recipient
      )}&su=${subject}&body=${body}`;
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer
      id="contact"
      className="w-full py-16 sm:py-24 md:py-36 px-5 sm:px-8 md:px-16 lg:px-24 bg-bone text-ink"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="06" label="INQUIRIES & DOSSIER" dark={false} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start mb-16 md:mb-20">
          <div className="lg:col-span-8">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.1] tracking-tight mb-8">
              Open to engineering discussions, autonomous systems research, and high-impact software ventures.
            </h2>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 items-stretch sm:items-center pt-2">
              <a
                href={personalInfo.resumeUrl}
                download="Syed_Haseeb_Bukhari_Resume.pdf"
                className="inline-flex justify-center items-center space-x-3 bg-ink text-bone px-6 py-3.5 font-mono text-xs uppercase tracking-widest hover:bg-accent transition-colors"
              >
                <span>DOWNLOAD DOSSIER [PDF]</span>
                <ArrowDownRight className="w-4 h-4 text-accent hover:text-bone" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                onClick={handleDirectDispatch}
                className="inline-flex justify-center items-center space-x-3 border border-ink px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-ink hover:border-accent hover:text-accent transition-colors"
              >
                <span>SEND DIRECT DISPATCH</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 bg-paper border border-hairlineLight p-5 sm:p-6 md:p-8">
            <span className="block font-mono text-xs uppercase tracking-widest text-graphite mb-4 pb-2 border-b border-hairlineLight">
              DIRECT REACH
            </span>
            <div className="space-y-4 font-mono text-xs">
              <div>
                <span className="text-[10px] text-graphite block uppercase">EMAIL</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  onClick={handleDirectDispatch}
                  className="text-ink hover:text-accent transition-colors font-medium break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <span className="text-[10px] text-graphite block uppercase">GITHUB</span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-accent transition-colors font-medium"
                >
                  github.com/Syed-Haseeb97
                </a>
              </div>
              <div>
                <span className="text-[10px] text-graphite block uppercase">INSTAGRAM</span>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-accent transition-colors font-medium"
                >
                  @haseeb.larp
                </a>
              </div>
              <div>
                <span className="text-[10px] text-graphite block uppercase">LINKEDIN</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-accent transition-colors font-medium"
                >
                  Syed Haseeb Bukhari
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Social Cards Spotlight Showcase */}
        <div className="pt-16 pb-8 border-t border-hairlineLight">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold block mb-2">
              SOCIAL CARDS
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-ink">
              Connect Across Development & Social
            </h3>
            <p className="font-sans text-xs text-graphite mt-2">
              Hover to expand interactive cards with live profiles, follower metrics, and direct dispatches.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 pt-8 pb-12">
            {/* GitHub Card */}
            <AnimatedSocialCard
              platform="github"
              username={personalInfo.githubStats.username}
              displayName={personalInfo.githubStats.displayName}
              roleOrBio={personalInfo.githubStats.bio}
              stats={{
                stat1: { count: personalInfo.githubStats.repos, label: 'Repos' },
                stat2: { count: personalInfo.githubStats.followers, label: 'Followers' },
                stat3: { count: personalInfo.githubStats.following, label: 'Following' },
              }}
              avatarSrc={personalInfo.githubStats.avatar}
              primaryAction={{ label: 'Follow', href: personalInfo.github }}
              secondaryAction={{ label: 'View Repos', href: `${personalInfo.github}?tab=repositories` }}
            />

            {/* LinkedIn Card */}
            <AnimatedSocialCard
              platform="linkedin"
              username={personalInfo.linkedinStats.username}
              displayName={personalInfo.linkedinStats.displayName}
              roleOrBio={personalInfo.linkedinStats.bio}
              stats={{
                stat1: { count: personalInfo.linkedinStats.connections, label: 'Connections' },
                stat2: { count: personalInfo.linkedinStats.posts, label: 'Posts' },
                stat3: { count: '2026', label: 'Joined' },
              }}
              avatarSrc={personalInfo.linkedinStats.avatar}
              primaryAction={{ label: 'Connect', href: personalInfo.linkedin }}
              secondaryAction={{ label: 'Profile', href: personalInfo.linkedin }}
            />

            {/* Instagram Card */}
            <AnimatedSocialCard
              platform="instagram"
              username={personalInfo.instagramStats.username}
              displayName={personalInfo.instagramStats.displayName}
              roleOrBio={personalInfo.instagramStats.bio}
              stats={{
                stat1: { count: personalInfo.instagramStats.posts, label: 'Posts' },
                stat2: { count: personalInfo.instagramStats.followers, label: 'Followers' },
                stat3: { count: personalInfo.instagramStats.following, label: 'Following' },
              }}
              avatarSrc={personalInfo.instagramStats.avatar}
              primaryAction={{ label: 'Follow', href: personalInfo.instagram }}
              secondaryAction={{ label: 'Message', href: personalInfo.instagram }}
            />
          </div>
        </div>

        {/* Quiet Colophon */}
        <div className="pt-8 border-t border-hairlineLight flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-wider text-graphite text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} SYED HASEEB BUKHARI &bull; ALL RIGHTS RESERVED
          </div>
          <div>
            TYPESET IN INSTRUMENT SERIF & GEIST &bull; VERMILION ACCENT
          </div>
        </div>
      </div>
    </footer>
  );
};
