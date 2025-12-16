import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Mission } from './components/Mission';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 selection:bg-[#0056b3] selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Mission />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;