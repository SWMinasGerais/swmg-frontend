
import React from 'react';
import { Badge } from "@/components/ui/badge";

const PartnersSection: React.FC = () => {
  return (
    <section className="section-padding bg-swmg-accent text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge className="bg-white/10 text-white hover:bg-white/20 mb-4">
            Parceiros
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quem Apoia o SWMG
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Conheça as organizações que tornam possível o Circuito Mineiro de Startup Weekend.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 8].map((partner) => (
            <div key={partner} className="bg-white/5 backdrop-blur rounded-lg p-6 hover:bg-white/10 transition-colors animate-fade-in">
              <div className="aspect-square rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-white/60">Logo</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
