
import React from 'react';
import { SectionHeading } from './SectionHeading';
import { PERSONAL_INFO } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <SectionHeading 
              title="Beyond the White Coat" 
              subtitle="Merging Pharmaceutical Accuracy with Digital Narrative" 
            />
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>{PERSONAL_INFO.profile}</p>
              <p>
                As a First Class Pharmacy graduate, I bring a unique analytical perspective to my writing. 
                Whether I'm breaking down complex tactical plays in a football match or explaining a medical 
                breakthrough, my goal is always clarity, engagement, and authority.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="block text-2xl font-bold text-blue-600">First Class</span>
                <span className="text-sm text-slate-500 uppercase font-bold tracking-tight">Honours</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="block text-2xl font-bold text-blue-600">5+ Years</span>
                <span className="text-sm text-slate-500 uppercase font-bold tracking-tight">Experience</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="block text-2xl font-bold text-blue-600">3+ Niches</span>
                <span className="text-sm text-slate-500 uppercase font-bold tracking-tight">Health, Sports, Tech</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 -mr-16 -mt-16 rounded-full"></div>
             <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
                <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                Education
             </h3>
             <div className="space-y-8">
               <div>
                 <div className="flex justify-between items-start mb-2">
                   <h4 className="font-bold text-slate-800">Bachelor of Pharmacy (B.Pharm)</h4>
                   <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">2018-2025</span>
                 </div>
                 <p className="text-slate-600 text-sm">University of Lagos, Nigeria</p>
                 <div className="mt-3 inline-flex items-center px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full">
                   First Class Honours | CGPA: 4.61/5.0
                 </div>
               </div>
               
               <div>
                 <h4 className="font-bold text-slate-800 mb-4">Certifications</h4>
                 <ul className="space-y-3">
                   <li className="flex items-center text-sm text-slate-600">
                     <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></span>
                     Digital Marketing
                   </li>
                   <li className="flex items-center text-sm text-slate-600">
                     <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></span>
                     Search Engine Optimization
                   </li>
                 </ul>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
