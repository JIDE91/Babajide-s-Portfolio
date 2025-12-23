
import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold font-serif text-slate-800">{PERSONAL_INFO.name}</h2>
          <p className="text-slate-500 text-sm mt-1">{PERSONAL_INFO.title}</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">Medium</a>
          <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">LinkedIn</a>
          <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">X (Twitter)</a>
        </div>
        
        <div className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};
