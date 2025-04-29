import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Transformando ideias em <span className="text-red-600">startups</span> em 54h
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed">
              Nós somos Minas, nós somos Startup Weekend. O Circuito Mineiro reúne empreendedores, designers e desenvolvedores para criar o futuro da inovação em nosso estado.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-medium">
                Inscreva-se agora
              </Button>
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-6 text-lg group">
                Veja cases
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="mt-8 flex items-center text-sm text-slate-500">
              <div className="w-12 h-1 bg-red-600 mr-3"></div>
              <span>Últimas 10 vagas para o próximo evento!</span>
            </div>
          </div>
          
          <div className="relative animate-fade-in hidden lg:block">
            {/* Event cards */}
            <div className="relative">
              {/* Main event card */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg mb-4 transform transition-transform hover:scale-[1.02]">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-swmg-primary flex items-center justify-center text-white font-bold mr-4">SW</div>
                    <div>
                      <p className="font-bold text-swmg-dark">Startup Weekend</p>
                      <p className="text-sm text-gray-500">Belo Horizonte</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-swmg-secondary text-swmg-dark rounded-full text-xs font-medium">Em breve</span>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold text-lg mb-1">EdTech & Future of Learning</h3>
                  <p className="text-sm text-gray-600">15-17 Outubro, 2023</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm">
                    <span className="font-bold text-swmg-primary">15</span> vagas restantes
                  </div>
                  <Button size="sm" className="bg-swmg-primary text-white hover:bg-swmg-dark">
                    Inscrever-se
                  </Button>
                </div>
              </div>
              
              {/* Secondary event cards - positioned slightly behind */}
              <div className="absolute top-6 -right-6 w-[90%] h-[75%] bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-md -z-10 opacity-70 transform rotate-3"></div>
              <div className="absolute top-3 right-3 w-[90%] h-[80%] bg-white/40 backdrop-blur-sm p-6 rounded-2xl shadow-md -z-20 opacity-50 transform -rotate-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
