
import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/50 skew-x-12 transform origin-right"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="order-2 md:order-1">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20">
            Professional Portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            I write stories that <span className="text-blue-400 underline decoration-blue-500/30">connect</span> and <span className="text-blue-400">convert</span>.
          </h1>
          <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
            Hi, I'm <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>. A Pharmacist and Content Writer blending medical precision with creative storytelling for health, science, and sports.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-600/20">
              Hire Me
            </a>
            <a href="#projects" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-lg border border-white/10 backdrop-blur-sm transition-all">
              View My Work
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-600/20 rounded-2xl blur-xl animate-pulse"></div>
            <div className="relative bg-slate-800 border-4 border-slate-700 rounded-3xl overflow-hidden shadow-2xl w-64 h-80 md:w-80 md:h-[450px]">
              <img 
                src="https://picsum.photos/id/1025/800/1000" 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover filter contrast-110"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-500 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};
