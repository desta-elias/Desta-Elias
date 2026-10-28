import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project, PROJECTS } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-16 border-b border-slate-800/60 bg-[#08090D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1.5">
            <span>01</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>Projects</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Featured Work
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-lg">
            Real-world web and mobile applications delivered end-to-end.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-xl border border-slate-800 bg-[#0C1017] hover:border-slate-700 transition-all duration-200 overflow-hidden flex flex-col justify-between shadow-md hover:shadow-xl"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative overflow-hidden bg-slate-950 aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1017] via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute top-2.5 left-2.5 bg-[#08090D]/85 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-mono text-blue-300 border border-slate-700/50">
                    {project.company}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors ml-1 shrink-0" />
                  </h3>

                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer: Stack & Detail link */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex flex-wrap items-center gap-1.5 text-slate-400 font-mono text-[11px]">
                    {project.techStack.join(' · ')}
                  </div>
                  <span className="text-blue-400 text-xs font-medium group-hover:underline">
                    View →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
