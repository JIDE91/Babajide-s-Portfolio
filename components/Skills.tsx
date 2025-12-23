
import React from 'react';
import { SectionHeading } from './SectionHeading';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Expertise & Tools" 
          subtitle="A comprehensive toolkit for the modern content professional"
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((group, idx) => (
            <div key={idx} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-slate-900 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 -ml-32 -mt-32 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">Interests & Curiosities</h3>
            <p className="text-slate-400">What fuels my creative fire beyond work</p>
          </div>
          <div className="flex flex-wrap gap-3 relative z-10">
            {["Sports Journalism", "Football Analytics", "Knowledge Sharing", "Intellectual Curiosity", "Human Behaviour"].map((int, i) => (
              <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-blue-300 font-bold">
                # {int}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
