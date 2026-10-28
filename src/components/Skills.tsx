import React from 'react';
import { SKILLS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 border-b border-slate-800/60 bg-[#08090D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1.5">
            <span>03</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>Skills</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Technical Stack
          </h2>
        </div>

        {/* 4 Clean Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SKILLS.map((group) => (
            <div
              key={group.category}
              className="p-4 rounded-xl border border-slate-800 bg-[#0C1017] shadow-sm"
            >
              <div className="text-xs font-bold text-white uppercase tracking-wider pb-2 mb-2 border-b border-slate-800">
                {group.category}
              </div>

              <div className="space-y-1.5">
                {group.items.map((item) => (
                  <div key={item} className="text-xs text-slate-300 flex items-center gap-2 py-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
