import React from 'react';

const achievements = [
  {
    title: "Fiscal Responsibility",
    description: "Championed prudent use of public funds, ensuring council budgets deliver maximum value for residents without unnecessary financial burden."
  },
  {
    title: "Supporting Local Business",
    description: "Advocated for and helped implement policies that reduce red tape and create a supportive environment for local businesses to thrive."
  },
  {
    title: "Community Infrastructure",
    description: "Successfully pushed for upgrades to community parks, libraries, and public transport to enhance the quality of life for all Dunedinites."
  },
  {
    title: "Sustainable Initiatives",
    description: "Supported practical, effective environmental policies that protect our unique natural heritage for future generations."
  },
];

const Accomplishments: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">What I have Done for Dunedin</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            My time on the council has been dedicated to delivering tangible results for our community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-amber-600 mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;