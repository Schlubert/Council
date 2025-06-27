import React from 'react';

interface FooterProps {
  name: string;
}

export const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-navy-900 text-slate-300 py-8">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <p className="text-sm">&copy; {currentYear} Paid for by the Committee to Elect {name}. All rights reserved.</p>
        <p className="text-xs text-slate-400 mt-2">This is a fictional political campaign profile for demonstration purposes.</p>
      </div>
    </footer>
  );
};