import React from 'react';
import { ScanFace } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <div className="w-full md:w-1/2 relative group">
             <div className="absolute inset-0 bg-neon-purple blur-[80px] opacity-20"></div>
             
             {/* Image Container with Tech Borders */}
             <div className="aspect-square rounded-2xl bg-black border border-neon-blue/30 relative overflow-hidden shadow-[0_0_30px_rgba(0,243,255,0.1)]">
                
                {/* Main Image */}
                <img 
                    src="./domantas.jpg" 
                    alt="Domantas Moisejevas Scan" 
                    className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Scanning Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-neon-blue/5 pointer-events-none"></div>
                
                {/* Moving Scanner Line */}
                <div className="absolute left-0 w-full h-[2px] bg-neon-blue shadow-[0_0_15px_#00f3ff] animate-scan opacity-50"></div>

                {/* UI Elements overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2 text-neon-blue/80 text-xs font-mono tracking-widest">
                    <ScanFace size={16} />
                    <span>BIOMETRIC_SCAN_ACTIVE</span>
                </div>
                
                <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold font-display text-white drop-shadow-md">THE LEGEND</h3>
                    <p className="text-neon-blue text-xs tracking-[0.2em]">SYSTEM_OVERLORD</p>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-blue"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-blue"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-blue"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-blue"></div>
             </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              Aš ne žaidžiu.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-red">Aš naikinu.</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Visi klausia: "Domantai, kaip tu tapai geriausiu?" Atsakymas paprastas. Kol kiti miegojo, aš tobulinau savo paleidimo kampą. Kol kiti valgė, aš kalibravau svorio diskus.
            </p>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Mano Beyblade'as nėra žaislas. Tai mano sielos pratęsimas. Arenoje aš esu karalius, o visi kiti – tik statistai mano pergalės šokyje.
            </p>

            <ul className="space-y-4">
              {['Lietuvos Nacionalinis Čempionas 2023', 'Europos "Spin Master" Titulas', 'Iron Forest Turnyro Nugalėtojas'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white font-semibold group/item">
                  <span className="w-2 h-2 bg-neon-blue rounded-full shadow-[0_0_10px_#00f3ff] group-hover/item:bg-neon-purple transition-colors"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;