import React from 'react';

const principles = [
  {
    name: "A Balanced Approach",
    description: "I believe in finding, common-sense solutions that serve the entire community. Progress requires collaboration and understanding all viewpoints. With no political party affiliation, I focus on what works best for Dunedin rather than where it comes from.",
  },
  {
    name: "Careful Use of Public Funds",
    description: "Your rates are hard-earned. I am committed to rigorous oversight of council spending, ensuring every dollar is used efficiently and effectively to deliver core services while maintaining an eye on the city's future needs",
  },
  {
    name: "Long-Term Perspective",
    description: "A City Council is not a business focused on short-term profits. It's the guardian of our city's future. Decisions must be made with a long-term vision for sustainability and prosperity.",
  }
];

const Principles: React.FC = () => {
  return (
    <section id="principles" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">My Guiding Principles</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            These core values inform every decision I make on your behalf.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
            {principles.map((principle, index) => (
                <div key={index} className="md:flex items-start p-6 border border-slate-200 rounded-lg">
                    <div className="md:w-1/3">
                        <h3 className="text-xl font-bold text-sky-600">{principle.name}</h3>
                    </div>
                    <div className="md:w-2/3 mt-2 md:mt-0">
                        <p className="text-slate-600">{principle.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;