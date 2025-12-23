
import React from 'react';
import { SectionHeading } from './SectionHeading';
import { AWARDS } from '../constants';

export const Awards: React.FC = () => {
  return (
    <section id="awards" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Recognition" 
          subtitle="Honors for leadership and academic excellence"
          centered
        />
        
        <div className="max-w-4xl mx-auto space-y-6">
          {AWARDS.map((award, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-8 p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-20 h-20 bg-blue-600/10 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-slate-800">{award.title}</h3>
                  <span className="hidden md:inline text-slate-300">|</span>
                  <span className="text-blue-600 font-bold text-sm uppercase">{award.date}</span>
                </div>
                <p className="text-slate-500 font-medium mb-3">{award.organization}</p>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
