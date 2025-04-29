import React from 'react';
import { Badge } from "@/components/ui/badge";

const PartnersSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="bg-red-600/10 text-red-600 hover:bg-red-600/20 mb-4">
            Parceiros
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Quem Apoia o SWMG
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Conheça as organizações que tornam possível o Circuito Mineiro de Startup Weekend.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 8].map((partner) => (
            <div key={partner} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 hover:bg-white/90 transition-all duration-300 border border-slate-100/50 shadow-sm hover:shadow-md animate-fade-in">
              <div className="aspect-square rounded-lg bg-slate-100/50 flex items-center justify-center">
                <span className="text-2xl font-bold text-slate-400">Logo</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
