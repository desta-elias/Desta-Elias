import React from 'react';
import { FileText, ArrowRight, Github, Mail, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  return (
    <section id="about" className="relative pt-12 pb-16 overflow-hidden border-b border-slate-800/60">
      {/* Background glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[260px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Direct and Punchy Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Full-Stack & Mobile Developer</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{PERSONAL_INFO.name}</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all whitespace-nowrap"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 hover:text-white border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Resume (PDF)</span>
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Get in Touch</span>
              </button>
            </div>

            {/* Contact Links */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <span aria-hidden="true" className="text-slate-700">·</span>

              <a 
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>

              <span aria-hidden="true" className="text-slate-700">·</span>

              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-blue-400" />
                <span>{PERSONAL_INFO.githubDisplay}</span>
              </a>

              <span aria-hidden="true" className="text-slate-700">·</span>

              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
            </div>
          </div>

          {/* Right Column: Clean Code Window Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/70 bg-[#0E121B] shadow-2xl group">
              {/* Window Title Bar */}
              <div className="px-4 py-2.5 bg-[#090C12] border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
                  <span className="ml-2 font-mono text-[11px] text-slate-400">App.tsx — TypeScript</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">UTF-8</span>
              </div>

              <div className="relative">
                <img
                  src={PERSONAL_INFO.workspaceImage}
                  alt="Clean code editor displaying TypeScript and React"
                  className="w-full h-72 sm:h-80 object-cover object-left-top transition-transform duration-300 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090C12] via-transparent to-transparent opacity-50" />
                
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-[#0B0E14]/90 backdrop-blur-md border border-slate-700/60 text-xs text-slate-300 flex items-center justify-between">
                  <span className="font-semibold text-white">Full-Stack Core</span>
                  <span className="font-mono text-blue-400 text-[11px]">React · Flutter · NestJS · PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
