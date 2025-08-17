import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Accomplishments from './components/Accomplishments';
import Plans from './components/Plans';
import Principles from './components/Principles';
import Footer from './components/Footer';
import QandA from './components/QandA';

function App() {

  const [showFAQ, setShowFAQ] = React.useState(false);

  return (
    <div className="bg-slate-50 text-slate-800">
      <Header setShowFAQ={setShowFAQ}/>
      <main>
        {!showFAQ ? (
          <>
            <Hero />
            <Accomplishments />
            <Plans />
            <Principles />
          </>
        ) : <QandA />}
      </main>
      <Footer />
    </div>
  );
}

export default App;