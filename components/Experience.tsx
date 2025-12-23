
import React from 'react';
import { SectionHeading } from './SectionHeading';
import { EXPERIENCES } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Professional Journey" 
          subtitle="A track record of high-impact content and rigorous research"
          centered
        />
        
        <div className="max-w-4xl mx-auto space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="group relative pl-8 md:pl-0">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 group-last:bottom-full"></div>
              
              <div className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <div className={`p-8 bg-white rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-blue-200 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{exp.period}</span>
                    <h3 className="text-xl font-bold text-slate-800 mt-2 mb-1">{exp.role}</h3>
                    <p className="text-slate-500 font-medium mb-6">{exp.company}</p>
                    
                    <ul className={`space-y-3 text-slate-600 text-sm leading-relaxed ${idx % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                      {exp.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0 ${idx % 2 === 0 ? 'order-2' : ''}`}></span>
                          <span className={idx % 2 === 0 ? 'order-1' : ''}>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 top-10 md:top-8 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-md z-10 -translate-x-1/2"></div>
                
                <div className="flex-1 hidden md:block"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
