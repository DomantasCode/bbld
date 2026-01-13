import React from 'react';
import { Zap, Crown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050505] to-[#050505] z-0" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[100px] animate-pulse-fast z-0" />

      {/* Rotating Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] border border-neon-blue/30 rounded-full animate-spin-slow z-0">
         <div className="absolute top-0 left-1/2 w-4 h-4 bg-neon-blue rounded-full shadow-[0_0_20px_#00f3ff]" />
         <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-neon-purple rounded-full shadow-[0_0_20px_#bc13fe]" />
      </div>

      <div className="z-10 text-center px-4 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-blue/30 bg-neon-blue/10 backdrop-blur-md mb-6 animate-float">
          <Crown className="w-5 h-5 text-neon-blue" />
          <span className="text-neon-blue tracking-widest font-bold uppercase text-sm">Nr. 1 Pasaulyje</span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-neon-blue to-neon-purple mb-6 drop-shadow-[0_0_30px_rgba(0,243,255,0.3)]">
          DOMANTAS<br />MOISEJEVAS
        </h1>

        <p className="font-sans text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Geriausias <span className="text-neon-red font-bold">Beibleidininkas</span> visatoje. 
          Kai mano Beyblade'as sukasi, laikas sustoja.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button onClick={() => document.getElementById('strategy')?.scrollIntoView({ behavior: 'smooth'})} className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-none border border-neon-blue text-white font-bold tracking-wider hover:bg-neon-blue/10 transition-all duration-300 skew-x-[-10deg]">
             <span className="absolute inset-0 w-full h-full bg-neon-blue/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
             <span className="relative flex items-center gap-2 skew-x-[10deg]">
               <Zap className="w-5 h-5" />
               GAUTI KOVOS PLANĄ
             </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;