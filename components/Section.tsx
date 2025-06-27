import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, id }) => {
  return (
    <section id={id} className="py-12 border-b border-slate-200">
      <h2 className="text-3xl font-bold text-center text-navy-900 mb-2">{title}</h2>
      <div className="w-24 h-1 bg-navy-700 mx-auto mb-10"></div>
      {children}
    </section>
  );
};