
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-swmg-light via-white to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-swmg-dark mb-6 leading-tight">
              Transformando ideias em <span className="text-swmg-primary">startups</span> em apenas 54 horas
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              O Circuito Mineiro de Startup Weekend reúne empreendedores, designers e desenvolvedores para criar startups inovadoras em Minas Gerais.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-swmg-primary hover:bg-swmg-dark text-white px-8 py-6 text-lg">
                Próximos Eventos
              </Button>
              <Button variant="outline" className="border-swmg-primary text-swmg-primary hover:bg-swmg-light px-8 py-6 text-lg">
                Saiba mais
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in hidden lg:block">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-swmg-accent/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-swmg-secondary/20 rounded-full filter blur-3xl"></div>
            <div className="relative bg-white p-6 rounded-2xl shadow-xl">
              <div className="aspect-video bg-swmg-light rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-swmg-primary">
                  <polygon points="23 7 16 12 23 17 23 7"/>
                  <rect width="15" height="14" x="1" y="5" rx="2" ry="2"/>
                </svg>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-swmg-primary flex items-center justify-center text-white font-bold mr-4">SW</div>
                <div>
                  <p className="font-bold text-swmg-dark">Startup Weekend</p>
                  <p className="text-sm text-gray-500">Minas Gerais</p>
                </div>
              </div>
              <div className="flex gap-2 mb-2">
                <span className="px-3 py-1 bg-swmg-light text-swmg-primary rounded-full text-xs font-medium">Inovação</span>
                <span className="px-3 py-1 bg-swmg-light text-swmg-primary rounded-full text-xs font-medium">Empreendedorismo</span>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-swmg-light text-swmg-primary rounded-full text-xs font-medium">Networking</span>
                <span className="px-3 py-1 bg-swmg-light text-swmg-primary rounded-full text-xs font-medium">Aprendizado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
