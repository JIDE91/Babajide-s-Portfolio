
import React from 'react';
import { SectionHeading } from './SectionHeading';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A dive into my technical research and strategic writing"
        />
        
        <div className="grid md:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${idx + 10}/800/600`} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">{project.role}</span>
                  <h3 className="text-2xl font-bold mt-2 leading-tight">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-slate-400 leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-700">
                  <span className="text-sm font-medium text-slate-500">{project.period}</span>
                  <button className="flex items-center text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors group">
                    View Brief
                    <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
