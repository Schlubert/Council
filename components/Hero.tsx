import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-slate-100 pt-16 md:pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
              A <span className="text-sky-600">Proven Voice</span> for Dunedin's Future
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-xl mx-auto md:mx-0">
              I'm Kevin Gilbert, and I'm committed to serving our community with a balanced, forward-thinking approach. Let's work together to build a vibrant, sustainable, and prosperous Dunedin for everyone.
            </p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <a href="#plan" className="inline-block bg-sky-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-sky-700 transition-transform transform hover:scale-105 shadow-lg">
                See My Plan
              </a>
              <a href="#contact" className="inline-block bg-slate-200 text-slate-800 font-bold py-3 px-8 rounded-lg hover:bg-slate-300 transition-transform transform hover:scale-105 shadow-lg">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
                <div className="absolute -inset-2 bg-gradient-to-br from-amber-400 to-sky-600 rounded-full blur-xl opacity-60"></div>
                <img 
                    src="/fs/e1de1c4714f3b764bb7b46960d704af520c1590f.jpeg" 
                    alt="Kevin Gilbert"
                    className="relative w-full h-auto rounded-full shadow-2xl object-cover border-8 border-white"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;