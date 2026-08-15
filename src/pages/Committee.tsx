"use client";

import React from "react";
import { 
  Globe, 
  GraduationCap, 
  Building2, 
  Sparkles
} from "lucide-react";
import { 
  conferenceConfig, 
  CommitteeMember,
  SessionChairTrack
} from "@/config/conferenceConfig";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
};

// Distinctive Profile Card with Photo
const SpotlightProfileCard = ({ 
  member, 
  roleFallback, 
  isChief = false,
  highlightBadge
}: { 
  member: CommitteeMember; 
  roleFallback: string;
  isChief?: boolean;
  highlightBadge?: string;
}) => (
  <motion.div 
    variants={itemVariants} 
    className={`group relative flex flex-col items-center text-center rounded-2xl p-6 transition-all duration-300 ${
      isChief 
        ? "bg-gradient-to-b from-[#1e293b]/90 via-[#131d31]/95 to-[#0b1324] border-2 border-yellow-400/80 shadow-[0_0_35px_rgba(250,204,21,0.25)] max-w-sm w-full" 
        : "bg-[#131d31]/80 hover:bg-[#18253e] border border-slate-800 hover:border-yellow-400/60 shadow-lg hover:shadow-[0_0_25px_rgba(250,204,21,0.18)] max-w-[290px] w-full"
    }`}
  >
    {/* Glow effect on hover */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

    {/* Avatar / Photo Container */}
    <div className="relative mb-5">
      <div className={`relative rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105 ${
        isChief 
          ? "w-40 h-40 border-[3px] border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.35)]" 
          : "w-36 h-36 border-2 border-yellow-400/80 group-hover:border-yellow-300 shadow-[0_0_15px_rgba(250,204,21,0.15)]"
      }`}>
        {member.image ? (
          <Image 
            src={member.image} 
            alt={member.name} 
            fill 
            className={`object-cover ${member.imagePosition || 'object-top'}`} 
            sizes="(max-width: 768px) 160px, 180px"
          />
        ) : (
          <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center text-yellow-400/50">
            <GraduationCap className="w-12 h-12" />
          </div>
        )}
      </div>

      {isChief && (
        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 px-3 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-widest shadow-md flex items-center gap-1 whitespace-nowrap">
          <Sparkles className="w-3 h-3 fill-slate-950" />
          Patron-in-Chief
        </div>
      )}
    </div>

    {/* Role Badge */}
    <span className={`inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2 ${
      isChief 
        ? "bg-yellow-400/20 text-yellow-300 border border-yellow-400/40" 
        : "bg-blue-500/10 text-yellow-400 border border-yellow-400/20 group-hover:border-yellow-400/40"
    }`}>
      {member.role || highlightBadge || roleFallback}
    </span>

    {/* Name */}
    <h3 className={`font-bold font-serif mb-1 leading-snug transition-colors ${
      isChief ? "text-2xl text-yellow-100" : "text-lg text-slate-100 group-hover:text-yellow-200"
    }`}>
      {member.name}
    </h3>

    {/* Designation & Organization */}
    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-1">
      {member.title}
    </p>
    {member.organization && (
      <p className="text-yellow-400/80 font-medium text-xs mt-1.5 flex items-center justify-center gap-1">
        <Building2 className="w-3 h-3 inline-block flex-shrink-0" />
        <span>{member.organization}</span>
      </p>
    )}
  </motion.div>
);

// Standard Grid Card for Faculty & Board Members
const FacultyMemberCard = ({ 
  member, 
  roleBadge,
  showCountry = false
}: { 
  member: CommitteeMember; 
  roleBadge?: string;
  showCountry?: boolean;
}) => (
  <motion.div 
    variants={itemVariants} 
    className="group relative flex flex-col justify-between p-5 bg-[#131d31]/70 hover:bg-[#18253e] rounded-xl border border-slate-800/80 hover:border-yellow-400/40 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(250,204,21,0.1)] hover:-translate-y-0.5"
  >
    <div>
      <div className="flex items-start justify-between gap-2 mb-2">
        {roleBadge && (
          <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-400/90 bg-yellow-400/10 border border-yellow-400/20 px-2 py-0.5 rounded">
            {roleBadge}
          </span>
        )}
        {(showCountry || member.country) && (
          <span className="ml-auto text-[10px] font-medium uppercase tracking-wider text-cyan-300 bg-cyan-950/60 border border-cyan-800/50 px-2 py-0.5 rounded flex items-center gap-1">
            <Globe className="w-2.5 h-2.5" />
            {member.country || "International"}
          </span>
        )}
      </div>

      <div className="mt-1">
        <h4 className="text-slate-100 font-semibold text-base leading-snug group-hover:text-yellow-100 transition-colors">
          {member.name}
        </h4>
        {member.title && (
          <p className="text-slate-400 text-xs leading-relaxed mt-1">
            {member.title}
          </p>
        )}
      </div>
    </div>

    {member.organization && (
      <div className="mt-3 pt-2.5 border-t border-slate-800/70 flex items-center gap-1.5 text-slate-400 group-hover:text-slate-300 text-xs">
        <Building2 className="w-3 h-3 text-yellow-400/70 flex-shrink-0" />
        <span className="truncate">{member.organization}</span>
      </div>
    )}
  </motion.div>
);

// Section Header Component with Visual Separator
const SectionHeading = ({ 
  title, 
  subtitle 
}: { 
  number?: string; 
  title: string; 
  subtitle?: string; 
}) => (
  <div className="text-center mb-10">
    <h2 className="text-2xl sm:text-3xl font-bold font-serif text-yellow-100 mb-2">
      {title}
    </h2>
    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-2" />
    {subtitle && (
      <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

const Committee = () => {
  const c = conferenceConfig.committee;

  const chiefPatron = c.chiefPatrons?.[0];
  const patrons: CommitteeMember[] = c.patrons || [];
  const coPatrons: CommitteeMember[] = c.coPatrons || [];
  const generalChair: CommitteeMember[] = c.generalChair || [];
  const generalCoChairs: CommitteeMember[] = c.generalCoChairs || [];
  const convener: CommitteeMember[] = c.convener || [];
  const coConveners: CommitteeMember[] = c.coConveners || [];
  const organizingSecretaries: CommitteeMember[] = c.organizingSecretaries || [];
  const nationalAdvisory: CommitteeMember[] = c.nationalAdvisoryCommittee || [];
  const internationalAdvisory: CommitteeMember[] = c.internationalAdvisoryCommittee || [];
  const executive: CommitteeMember[] = c.executiveCommittee || [];
  const publicationChair: CommitteeMember[] = c.publicationChair || [];
  const registrationChair: CommitteeMember[] = c.registrationChair || [];
  const financeChair: CommitteeMember[] = c.financeChair || [];
  const technicalChairs: CommitteeMember[] = c.technicalChair || [];
  const technicalCommittee: CommitteeMember[] = c.technicalCommittee || [];
  const sessionChairs: SessionChairTrack[] = c.sessionChairs || [];
  const hospitalityAndTransport: CommitteeMember[] = c.hospitalityAndTransportChair || [];

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-100 font-sans selection:bg-yellow-400 selection:text-slate-950">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        {/* Background Atmospheric Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-12 left-1/3 w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 max-w-6xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-yellow-200 to-amber-300 mb-4 tracking-tight">
            Conference Committees
          </h1>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated team of experts and professionals who are working to make {conferenceConfig.name} {conferenceConfig.year} a premier scientific event.
          </p>
        </div>
      </section>

      {/* Main Committee Directory */}
      <section className="pb-32 container mx-auto px-4 max-w-7xl relative z-10">
        <div className="space-y-20">

          {/* 1. CHIEF PATRON */}
          {chiefPatron && (
            <div>
              <SectionHeading 
                title="Chief Patron" 
              />
              <div className="flex justify-center">
                <SpotlightProfileCard member={chiefPatron} roleFallback="CHIEF PATRON" isChief={true} />
              </div>
            </div>
          )}

          {/* 2. PATRONS */}
          {patrons.length > 0 && (
            <div>
              <SectionHeading 
                title="Patrons" 
              />
              <div className="flex flex-wrap justify-center gap-8">
                {patrons.map((member, idx) => (
                  <SpotlightProfileCard key={`patron-${idx}`} member={member} roleFallback="PATRON" />
                ))}
              </div>
            </div>
          )}

          {/* 3. CO-PATRONS */}
          {coPatrons.length > 0 && (
            <div>
              <SectionHeading 
                title="Co-Patrons" 
              />
              <div className="flex flex-wrap justify-center gap-8">
                {coPatrons.map((member: CommitteeMember, idx: number) => (
                  <SpotlightProfileCard key={`copatron-${idx}`} member={member} roleFallback="CO-PATRON" />
                ))}
              </div>
            </div>
          )}

          {/* 4. GENERAL CHAIR */}
          {generalChair.length > 0 && (
            <div>
              <SectionHeading 
                title="General Chair" 
              />
              <div className="flex justify-center">
                {generalChair.map((member: CommitteeMember, idx: number) => (
                  <SpotlightProfileCard key={`gc-${idx}`} member={member} roleFallback="GENERAL CHAIR" />
                ))}
              </div>
            </div>
          )}

          {/* 5. GENERAL CO-CHAIRS */}
          {generalCoChairs.length > 0 && (
            <div>
              <SectionHeading 
                title="General Co-Chairs" 
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                {generalCoChairs.map((member: CommitteeMember, idx: number) => (
                  <SpotlightProfileCard key={`gcc-${idx}`} member={member} roleFallback="GENERAL CO-CHAIR" />
                ))}
              </div>
            </div>
          )}

          {/* 6. CONVENER */}
          {convener.length > 0 && (
            <div>
              <SectionHeading 
                title="Convener" 
              />
              <div className="flex justify-center">
                {convener.map((member: CommitteeMember, idx: number) => (
                  <SpotlightProfileCard key={`conv-${idx}`} member={member} roleFallback="CONVENER" />
                ))}
              </div>
            </div>
          )}

          {/* 7. CO-CONVENERS */}
          {coConveners.length > 0 && (
            <div>
              <SectionHeading 
                title="Co-Conveners" 
              />
              <div className="flex flex-wrap justify-center gap-8">
                {coConveners.map((member: CommitteeMember, idx: number) => (
                  <SpotlightProfileCard key={`coconv-${idx}`} member={member} roleFallback="CO-CONVENER" />
                ))}
              </div>
            </div>
          )}

          {/* 8. ORGANIZING SECRETARIES */}
          {organizingSecretaries.length > 0 && (
            <div>
              <SectionHeading 
                title="Organizing Secretaries" 
              />
              <div className="flex flex-wrap justify-center gap-8">
                {organizingSecretaries.map((member: CommitteeMember, idx: number) => (
                  <SpotlightProfileCard key={`orgsec-${idx}`} member={member} roleFallback="ORGANIZING SECRETARY" />
                ))}
              </div>
            </div>
          )}

          {/* 9. NATIONAL ADVISORY COMMITTEE */}
          {nationalAdvisory.length > 0 && (
            <div>
              <SectionHeading 
                title="National Advisory Committee" 
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {nationalAdvisory.map((member: CommitteeMember, idx: number) => (
                  <FacultyMemberCard 
                    key={`nac-${idx}`} 
                    member={member} 
                    roleBadge="National Advisory" 
                  />
                ))}
              </div>
            </div>
          )}

          {/* 10. INTERNATIONAL ADVISORY COMMITTEE */}
          {internationalAdvisory.length > 0 && (
            <div>
              <SectionHeading 
                title="International Advisory Committee" 
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {internationalAdvisory.map((member: CommitteeMember, idx: number) => (
                  <FacultyMemberCard 
                    key={`iac-${idx}`} 
                    member={member} 
                    roleBadge="International Advisory" 
                    showCountry={true} 
                  />
                ))}
              </div>
            </div>
          )}

          {/* 11. EXECUTIVE COMMITTEE */}
          {executive.length > 0 && (
            <div>
              <SectionHeading 
                title="Executive Committee" 
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {executive.map((member: CommitteeMember, idx: number) => (
                  <FacultyMemberCard 
                    key={`exec-${idx}`} 
                    member={member} 
                    roleBadge="Executive Member" 
                  />
                ))}
              </div>
            </div>
          )}

          {/* 12. PUBLICATION CHAIR */}
          {publicationChair.length > 0 && (
            <div>
              <SectionHeading 
                title="Publication Chair" 
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {publicationChair.map((member: CommitteeMember, idx: number) => (
                  <FacultyMemberCard 
                    key={`pub-${idx}`} 
                    member={member} 
                    roleBadge="Publication Chair" 
                  />
                ))}
              </div>
            </div>
          )}

          {/* 13. REGISTRATION CHAIR */}
          {registrationChair.length > 0 && (
            <div>
              <SectionHeading 
                title="Registration Chair" 
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {registrationChair.map((member: CommitteeMember, idx: number) => (
                  <FacultyMemberCard 
                    key={`reg-${idx}`} 
                    member={member} 
                    roleBadge="Registration Chair" 
                  />
                ))}
              </div>
            </div>
          )}

          {/* 14. FINANCE CHAIR */}
          {financeChair.length > 0 && (
            <div>
              <SectionHeading 
                title="Finance Chair" 
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {financeChair.map((member: CommitteeMember, idx: number) => (
                  <FacultyMemberCard 
                    key={`fin-${idx}`} 
                    member={member} 
                    roleBadge="Finance Chair" 
                  />
                ))}
              </div>
            </div>
          )}

          {/* 15. TECHNICAL COMMITTEE & TECHNICAL CHAIRS */}
          <div>
            <SectionHeading 
              title="Technical Committee & Technical Chairs" 
            />

            {/* Core Technical Chairs */}
            {technicalChairs.length > 0 && (
              <div className="mb-10">
                <h3 className="text-center text-sm font-bold uppercase tracking-wider text-yellow-400 mb-6">
                  Core Technical Chairs
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {technicalChairs.map((member: CommitteeMember, idx: number) => (
                    <div key={`tc-core-${idx}`} className="w-full sm:w-72">
                      <FacultyMemberCard member={member} roleBadge="Technical Chair" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* International & National Technical Board */}
            {technicalCommittee.length > 0 && (
              <div>
                <h3 className="text-center text-sm font-bold uppercase tracking-wider text-slate-300 mb-6">
                  International & National Technical Program Committee
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {technicalCommittee.map((member: CommitteeMember, idx: number) => (
                    <FacultyMemberCard 
                      key={`tpc-${idx}`} 
                      member={member} 
                      roleBadge="Technical Member" 
                      showCountry={true} 
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 16. SESSION CHAIRS */}
          {sessionChairs.length > 0 && (
            <div>
              <SectionHeading 
                title="Session Chairs" 
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sessionChairs.map((session: SessionChairTrack, idx: number) => (
                  <motion.div 
                    key={`session-${idx}`} 
                    variants={itemVariants}
                    className="p-6 bg-[#131d31]/80 rounded-xl border border-slate-800 hover:border-yellow-400/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-7 h-7 rounded-lg bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 font-bold text-xs flex items-center justify-center">
                          T{session.trackNumber}
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Track {session.trackNumber}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-yellow-100 mb-4 leading-snug">
                        {session.trackName}
                      </h4>
                    </div>

                    <div className="pt-4 border-t border-slate-800/80 space-y-3">
                      <p className="text-xs uppercase font-semibold text-yellow-400/90 tracking-wider">
                        Designated Session Chairs:
                      </p>
                      {session.chairs.map((chair: CommitteeMember, cIdx: number) => (
                        <div key={`sc-chair-${cIdx}`} className="flex items-center gap-2.5 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800">
                          <div className="w-2 h-2 rounded-full bg-yellow-400" />
                          <div className="min-w-0 flex-1">
                            <p className="text-slate-100 text-sm font-semibold truncate">{chair.name}</p>
                            <p className="text-slate-400 text-xs truncate">{chair.organization}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* 17. HOSPITALITY & TRANSPORT */}
          {hospitalityAndTransport.length > 0 && (
            <div>
              <SectionHeading 
                title="Hospitality Chair and Transport" 
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {hospitalityAndTransport.map((member: CommitteeMember, idx: number) => (
                  <FacultyMemberCard 
                    key={`hosp-${idx}`} 
                    member={member} 
                    roleBadge="Hospitality & Transport" 
                  />
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
};

export default Committee;