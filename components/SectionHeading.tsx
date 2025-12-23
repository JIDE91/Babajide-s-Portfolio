
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{title}</h2>
      {subtitle && <p className="text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
      <div className={`h-1 w-20 bg-blue-600 mt-2 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};
