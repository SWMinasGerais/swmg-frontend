
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center space-x-2">
          <div className="bg-swmg-primary rounded-full w-8 h-8 flex items-center justify-center">
            <span className="text-white font-bold">SW</span>
          </div>
          <span className="font-heading font-bold text-lg md:text-xl text-swmg-dark">
            Circuito Mineiro SW
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#eventos" className="text-sm font-medium hover:text-swmg-primary transition-colors">Próximos Eventos</a>
          <a href="#startups" className="text-sm font-medium hover:text-swmg-primary transition-colors">Startups</a>
          <a href="#ecossistema" className="text-sm font-medium hover:text-swmg-primary transition-colors">Ecossistema</a>
          <a href="#sobre" className="text-sm font-medium hover:text-swmg-primary transition-colors">Sobre</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button className="bg-swmg-primary hover:bg-swmg-dark text-white">
            Participar
          </Button>
          
          <button className="md:hidden p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
