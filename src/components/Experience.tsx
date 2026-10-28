import React from 'react';
import { Calendar } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 border-b border-slate-800/60 bg-[#0A0D14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1.5">
            <span>02</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>Experience</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
        </div>

        {/* Clean, Simple List */}
        <div className="space-y-4">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="p-5 rounded-xl border border-slate-800 bg-[#0E121B] hover:border-slate-700 transition-colors shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {exp.role} <span className="text-blue-400 font-semibold">· {exp.company}</span>
                </h3>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1">
                {exp.description}
              </p>

              <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-slate-500 text-[11px]">Stack:</span>
                <span className="text-blue-300 text-[11px]">{exp.stack.join(' · ')}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
