import React from 'react';
import { GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 border-b border-slate-800/60 bg-[#0A0D14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1.5">
            <span>04</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>Education</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Academic Background
          </h2>
        </div>

        {/* Clean, Simple Single Card */}
        <div className="p-5 sm:p-6 rounded-xl border border-slate-800 bg-[#0E121B] flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                BSc in Mechatronics Engineering (Class of 2026)
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Addis Ababa Science and Technology University · Addis Ababa, Ethiopia
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
