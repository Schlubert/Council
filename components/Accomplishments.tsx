import React from 'react';

const achievements = [
  {
    title: "Fiscally Responsible",
    description: "I believe in prudent use of public funds, ensuring council budgets deliver maximum value for residents without unnecessary financial burden. Spending as little as we can, but where we have to."
  },
  {
    title: "Supporting Local Business",
    description: "Two decades of owning a business in Dunedin has provided me with a unique perspective on the challenges and opportunities facing our local economy. I have advocated for policies that support small businesses and stimulate economic growth."
  },
  {
    title: "Community Engagement",
    description: "Working with a number of community groups has allowed me to understand the diverse needs of our residents. I am proud to contribute to the well-being of our community."
  },
  {
    title: "Sustainable Initiatives",
    description: "I am passionate about finding ways to make Dunedin more environmentally sustainable. This includes promoting green spaces, protecting our soils, supporting new ideas and technologies, and ensuring our city is prepared for future challenges."
  },
];

const Accomplishments: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Who am I?</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            I am a passionate advocate for Dunedin city and its residents and, after a 3-year "apprenticeship" on council, I now understand the role and the process of local government. I am committed to serving our community with a balanced, forward-thinking approach. Here are some of the things that guide my decisions:
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