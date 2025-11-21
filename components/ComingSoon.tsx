import React from 'react';
import { Zap, Globe, TrendingUp } from 'lucide-react';

export const ComingSoon: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-sigmund-dark text-white rounded-t-5xl -mt-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="inline-block bg-sigmund-yellow text-sigmund-dark text-xs font-bold px-3 py-1 rounded mb-6 uppercase tracking-wider">
          Coming Soon
        </div>
        
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
          Sigmund Support Program
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-16 font-light">
          Helping purpose-driven tourism ventures grow with creative capital and long-term support.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <div className="w-12 h-12 bg-sigmund-yellow rounded-full flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-sigmund-dark" />
            </div>
            <h3 className="font-display text-xl font-bold mb-4">Truly Innovative</h3>
            <p className="text-gray-400 text-sm">Not just a small variation on existing models. We look for distinct creative leaps.</p>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <div className="w-12 h-12 bg-sigmund-yellow rounded-full flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-sigmund-dark" />
            </div>
            <h3 className="font-display text-xl font-bold mb-4">Positive Impact</h3>
            <p className="text-gray-400 text-sm">Anchored in positive impact for people and planet. Triple bottom line focus.</p>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <div className="w-12 h-12 bg-sigmund-yellow rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-sigmund-dark" />
            </div>
            <h3 className="font-display text-xl font-bold mb-4">Path to Profitability</h3>
            <p className="text-gray-400 text-sm">Designed with a viable path to financial sustainability alongside social goals.</p>
          </div>
        </div>

        <div className="bg-sigmund-yellow rounded-3xl p-8 md:p-12 text-sigmund-dark">
            <h3 className="font-display text-3xl font-bold mb-6">Creative Capital vs. Traditional Capital</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <p className="text-lg font-medium">
                    Instead of only providing money, we invest creative capital, including technical/product support, strategic guidance, and access to trusted vendors.
                </p>
                <ul className="space-y-3">
                    {['Technical and product support', 'Strategic, marketing, and governance guidance', 'Access to trusted vendors and tools'].map((item, i) => (
                        <li key={i} className="flex items-center border-b border-black/10 pb-2 last:border-0">
                            <span className="w-1.5 h-1.5 bg-black rounded-full mr-3" />
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