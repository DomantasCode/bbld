import React from 'react';
import { Trophy, Flame, Wind, Target } from 'lucide-react';
import { StatProps } from '../types';

const StatCard: React.FC<StatProps> = ({ label, value, icon }) => (
  <div className="bg-dark-card/50 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-neon-purple/50 transition-all duration-500 group">
    <div className="mb-4 text-gray-400 group-hover:text-neon-purple transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-4xl font-display font-bold text-white mb-2">{value}</h3>
    <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold">{label}</p>
  </div>
);

const Stats: React.FC = () => {
  const stats = [
    { label: "Laimėta Turnyrų", value: "142", icon: <Trophy size={32} /> },
    { label: "Win Rate", value: "99.9%", icon: <Target size={32} /> },
    { label: "RPM (Max)", value: "12,500", icon: <Wind size={32} /> },
    { label: "Varžovų Ašaros", value: "∞", icon: <Flame size={32} /> },
  ];

  return (
    <section className="py-24 px-4 bg-dark-bg relative">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">
                <span className="border-b-4 border-neon-red pb-2">DOMINAVIMO</span> STATISTIKA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default Stats;