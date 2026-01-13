import React, { useState } from 'react';
import { Bot, AlertTriangle, Loader2, Crosshair } from 'lucide-react';
import { getBeyBladeStrategy } from '../services/geminiService';
import { BeyType } from '../types';

const StrategyAI: React.FC = () => {
  const [challengerType, setChallengerType] = useState('');
  const [scenario, setScenario] = useState('');
  const [strategy, setStrategy] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!challengerType) return;
    setLoading(true);
    const result = await getBeyBladeStrategy(challengerType, scenario || 'Standard Stadium');
    setStrategy(result);
    setLoading(false);
  };

  return (
    <section id="strategy" className="py-24 px-4 relative overflow-hidden">
      {/* Background Gradient Mesh - Red/Warning Theme */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-red/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto bg-dark-card border border-neon-red/20 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,0,60,0.1)] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Input Section */}
          <div className="p-8 md:p-12 flex flex-col justify-center relative">
            <div className="absolute top-6 right-6 text-neon-red opacity-50">
               <AlertTriangle size={32} />
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Bot className="text-neon-red w-8 h-8" />
              <h2 className="font-display text-3xl font-bold text-white">CHALLENGER AI</h2>
            </div>
            
            <h3 className="text-xl font-bold text-neon-red mb-2 uppercase tracking-widest">Misija: Nugalėti Domantą</h3>
            <p className="text-gray-400 mb-8 text-sm leading-relaxed">
              Daugelis bandė. Niekam nepavyko. Įvesk savo duomenis, ir AI apskaičiuos tavo 0.01% tikimybės strategiją prieš legendą.
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Tavo Beyblade Tipas</label>
                <select 
                  value={challengerType}
                  onChange={(e) => setChallengerType(e.target.value)}
                  className="w-full bg-black/50 border border-white/20 rounded-lg p-4 text-white focus:border-neon-red focus:outline-none transition-colors appearance-none"
                >
                  <option value="">Pasirink savo tipą...</option>
                  {Object.values(BeyType).map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                  <option value="Experimental Build">Eksperimentinis / Custom</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Pasirinkta Arena</label>
                <input 
                  type="text"
                  value={scenario}
                  onChange={(e) => setScenario(e.target.value)}
                  placeholder="pvz., Ciklono Stadionas, Gatvė..."
                  className="w-full bg-black/50 border border-white/20 rounded-lg p-4 text-white focus:border-neon-red focus:outline-none transition-colors"
                />
              </div>

              <button 
                onClick={handleGenerate}
                disabled={loading || !challengerType}
                className="w-full py-4 bg-gradient-to-r from-red-600 to-neon-red rounded-lg font-bold text-white uppercase tracking-wider hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,0,60,0.4)]"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Crosshair />}
                {loading ? 'Skaičiuojama tikimybė...' : 'Generuoti Kovos Planą'}
              </button>
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-black/40 p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-center min-h-[400px]">
            {strategy ? (
              <div className="animate-float">
                <h3 className="text-neon-red font-display text-xl mb-4 uppercase tracking-widest border-b border-neon-red/30 pb-2">Analizės Rezultatai</h3>
                <p className="text-lg md:text-xl leading-relaxed font-light text-gray-200 whitespace-pre-line border-l-2 border-neon-red pl-4">
                  {strategy}
                </p>
                <div className="mt-8 flex justify-between items-end">
                   <div className="text-neon-red font-mono text-xs uppercase animate-pulse">
                      Win Probability: &lt; 1%
                   </div>
                   <span className="text-xs text-gray-600 font-mono">CALCULATED BY GEMINI 3.0</span>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-600">
                <AlertTriangle size={64} className="mx-auto mb-4 opacity-20 text-neon-red" />
                <p className="uppercase tracking-widest text-xs font-bold">Laukiama iššūkio duomenų</p>
                <p className="mt-2 text-sm opacity-50">Ar tikrai esi pasiruošęs?</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default StrategyAI;