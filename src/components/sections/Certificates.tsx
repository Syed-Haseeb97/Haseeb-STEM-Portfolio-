import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { certificatesData, CertificateItem } from '../../data/portfolio';
import { ChevronDown, ExternalLink, Download, Award, ShieldCheck, Sparkles } from 'lucide-react';

export const Certificates: React.FC = () => {
  // Store expanded state per certificate id
  const [expandedCertIds, setExpandedCertIds] = useState<Record<string, boolean>>({});

  const toggleDropdown = (id: string) => {
    setExpandedCertIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="certificates"
      className="w-full py-16 sm:py-24 md:py-36 px-5 sm:px-8 md:px-16 lg:px-24 bg-bone text-ink border-b border-hairlineLight"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="05" label="CERTIFICATIONS & CREDENTIALS" dark={false} />

        {/* Editorial Section Introduction */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C8C2B5] bg-paper px-3 py-1 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#1D6B52] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1D6B52]" />
              2 Verified Credentials
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C8C2B5] bg-paper px-3 py-1 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#5F626A]">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              National Hackathon & Deep Tech Summits
            </span>
          </div>

          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.05] tracking-tight max-w-3xl">
            Applied Rigor, Recognitions & Frontier Credentials
          </h3>
          <p className="font-sans text-sm sm:text-base md:text-lg text-graphite mt-3 max-w-2xl leading-relaxed">
            Formal accreditations and institutional honors awarded for rapid Generative AI product engineering, competitive hackathon podium finishes, and active participation in national deep-tech summits.
          </p>
        </div>

        {/* Certificates Cards List */}
        <div className="space-y-8 sm:space-y-10">
          {certificatesData.map((cert: CertificateItem) => {
            const isExpanded = !!expandedCertIds[cert.id];

            return (
              <div
                key={cert.id}
                className="bg-paper border border-[#C8C2B5] rounded-2xl p-6 sm:p-8 md:p-10 transition-all duration-300 hover:border-ink/40"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#C8C2B5]/70">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-sm sm:text-base font-semibold text-accent">
                      {cert.number}
                    </span>
                    <span className="text-[#C8C2B5] font-mono">/</span>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#5F626A] font-medium">
                      {cert.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C8C2B5] bg-[#E3EFE8] px-3 py-0.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#1D6B52] font-semibold">
                      <Award className="w-3 h-3 text-[#1D6B52]" />
                      {cert.verificationBadge}
                    </span>
                    <span className="font-mono text-xs text-graphite hidden sm:inline-block">
                      {cert.date}
                    </span>
                  </div>
                </div>

                {/* Main Content Info */}
                <div className="pt-6 pb-4">
                  <h4 className="font-display text-2xl sm:text-3xl md:text-4xl text-ink leading-tight">
                    {cert.title}
                  </h4>

                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-graphite">
                    <span>
                      <strong className="text-ink uppercase font-semibold">Issuer:</strong> {cert.issuer}
                    </span>
                    <span>&bull;</span>
                    <span>
                      <strong className="text-ink uppercase font-semibold">Venue:</strong> {cert.venueOrPlatform}
                    </span>
                    <span className="sm:hidden">&bull;</span>
                    <span className="sm:hidden">
                      <strong className="text-ink uppercase font-semibold">Date:</strong> {cert.date}
                    </span>
                  </div>

                  {cert.signatory && (
                    <div className="mt-1 font-mono text-[11px] text-[#5F626A]">
                      <strong className="text-ink uppercase font-semibold">Authorized By:</strong> {cert.signatory}
                    </div>
                  )}

                  <p className="font-sans text-sm sm:text-base text-graphite leading-relaxed mt-4 max-w-4xl">
                    {cert.description}
                  </p>

                  {/* Skills/Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cert.skillsLearned.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#ECE7DD] text-ink border border-[#C8C2B5]/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interactive Dropdown Toggle */}
                <div className="mt-6 pt-5 border-t border-[#C8C2B5]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => toggleDropdown(cert.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`cert-dropdown-${cert.id}`}
                    className="group inline-flex items-center justify-between sm:justify-start gap-3 px-5 py-2.5 rounded-full border border-[#C8C2B5] bg-[#FFFFFF] hover:border-ink hover:bg-paper transition-all duration-300 font-mono text-xs uppercase tracking-wider text-ink font-medium cursor-pointer shadow-sm"
                  >
                    <span>
                      {isExpanded ? 'Hide Credential Document' : 'Inspect Credential Document'}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-graphite group-hover:text-accent transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 text-accent' : ''
                      }`}
                    />
                  </button>

                  <div className="flex items-center gap-3">
                    {cert.downloadUrl && (
                      <a
                        href={cert.downloadUrl}
                        download
                        className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-graphite hover:text-ink transition-colors"
                      >
                        <Download className="w-3.5 h-3.5 text-accent" />
                        <span>{cert.downloadLabel || 'Download File'}</span>
                      </a>
                    )}
                    <a
                      href={cert.imagePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-graphite hover:text-ink transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-accent" />
                      <span>Full Resolution</span>
                    </a>
                  </div>
                </div>

                {/* Collapsible Dropdown Document Viewer */}
                {isExpanded && (
                  <div
                    id={`cert-dropdown-${cert.id}`}
                    className="mt-6 pt-6 border-t border-[#C8C2B5]/60 animate-in fade-in duration-300"
                  >
                    <div className="bg-[#16181D]/5 rounded-xl border border-[#C8C2B5] p-3 sm:p-5">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#C8C2B5]/60 font-mono text-[11px] uppercase tracking-wider text-graphite">
                        <span>Original Credential Scan &bull; Verified</span>
                        <div className="flex items-center gap-3">
                          <a
                            href={cert.imagePreview}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-ink hover:text-accent font-semibold"
                          >
                            <span>Open In New Tab</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>

                      <div className="relative overflow-hidden rounded-lg border border-[#C8C2B5] bg-white flex justify-center items-center shadow-inner">
                        <img
                          src={cert.imagePreview}
                          alt={`${cert.title} Certificate`}
                          loading="lazy"
                          className="w-full max-h-[650px] object-contain transition-transform duration-300 hover:scale-[1.01]"
                        />
                      </div>

                      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[#C8C2B5]/50 text-xs font-mono">
                        <span className="text-graphite">
                          Official certification presented to <strong>Syed Haseeb Bukhari</strong>
                        </span>
                        <button
                          type="button"
                          onClick={() => toggleDropdown(cert.id)}
                          className="text-graphite hover:text-ink uppercase tracking-wider underline cursor-pointer"
                        >
                          Close Document Preview
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
