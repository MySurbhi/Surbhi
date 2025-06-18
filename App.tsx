
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FeeCalculator from './components/FeeCalculator';

const App: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto bg-slate-800 shadow-2xl rounded-lg overflow-hidden">
      <Header />
      <main className="p-6 md:p-10">
        <FeeCalculator />
      </main>
      <Footer />
    </div>
  );
};

export default App;
