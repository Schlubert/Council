import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Accomplishments from './components/Accomplishments';
import Plans from './components/Plans';
import Principles from './components/Principles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <Header />
      <main>
        <Hero />
        <Accomplishments />
        <Plans />
        <Principles />
      </main>
      <Footer />
    </div>
  );
}

export default App;