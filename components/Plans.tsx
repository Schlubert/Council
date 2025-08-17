import React from 'react';
import CheckIcon from './icons/CheckIcon';

const plansFor = [
  "A balance of fair rates that also deliver essential services and allow for future needs.",
  "A vibrant and safe city centre for families and businesses.",
  "A city that is financially, environmentally, and socially sustainable.",
  "The protection of our city's unique heritage and green spaces."
];

const plansTowards = [
  "A more transparent and accountable council.",
  "Strengthening our local economy and creating job opportunities.",
  "A future-proofed infrastructure that serves our future needs.",
  "Challenging our approach to waste minimisation opportunities – thinking big and acting locally as well as engaging with new ideas and technologies"
];

const PlanColumn: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg h-full">
      <h3 className="text-2xl font-bold text-slate-800 mb-6">{title}</h3>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0">
              <CheckIcon />
            </div>
            <span className="ml-3 text-slate-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
);


const Plans: React.FC = () => {
  return (
    <section id="vision" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">My vision for Dunedin's Future</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            If re-elected, I will continue to work towards building a better Dunedin. In order to do so, I will be focussing on:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <PlanColumn title="Working for..." items={plansFor} />
          <PlanColumn title="Working towards..." items={plansTowards} />
        </div>
      </div>
    </section>
  );
};

export default Plans;