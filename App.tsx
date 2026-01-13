import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import StrategyAI from './components/StrategyAI';
import About from './components/About';
import { Hexagon, Instagram } from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-dark-bg min-h-screen text-white font-sans selection:bg-neon-purple selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 font-display text-2xl font-bold tracking-tighter">
            <Hexagon className="text-neon-blue fill-neon-blue/20 animate-pulse-fast" />
            <span>DOMANTAS<span className="text-neon-purple">.M</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-neon-blue transition-colors">Pradžia</a>
            <a href="#" className="hover:text-neon-blue transition-colors">Istorija</a>
            <a href="#strategy" className="hover:text-neon-blue transition-colors">DI Strategija</a>
            <a href="#" className="hover:text-neon-blue transition-colors">Kontaktai</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Stats />
        <About />
        <StrategyAI />
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">PASIRUOŠĘS KOVAI?</h2>
            <p className="text-gray-500 mb-8">Susisiek su Domantu dėl parodomųjų kovų ar treniruočių.</p>
            <div className="flex justify-center gap-6 mb-8">
               <a 
                 href="https://instagram.com/dommantas" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-neon-purple hover:border-neon-purple hover:text-black flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-[0_0_15px_rgba(188,19,254,0.3)] group"
               >
                 <Instagram size={24} className="group-hover:stroke-black transition-colors" />
               </a>
            </div>
            <p className="text-gray-600 text-sm">
                &copy; {new Date().getFullYear()} Domantas Moisejevas. All Rights Reserved. Beibleidas yra gyvenimas.
            </p>
        </div>
      </footer>
    </div>
  );
};

export default App;