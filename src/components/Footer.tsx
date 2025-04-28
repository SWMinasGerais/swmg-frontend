
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer: React.FC = () => {
  return (
    <footer id="sobre" className="bg-swmg-dark text-white pt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-swmg-primary font-bold">SW</span>
              </div>
              <span className="font-heading font-bold text-lg">Circuito Mineiro SW</span>
            </div>
            <p className="text-gray-300 mb-4">
              O Circuito Mineiro de Startup Weekend é uma iniciativa que promove o empreendedorismo e a inovação em diversas cidades de Minas Gerais.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#eventos" className="text-gray-300 hover:text-white transition-colors">Próximos Eventos</a></li>
              <li><a href="#startups" className="text-gray-300 hover:text-white transition-colors">Startups de Sucesso</a></li>
              <li><a href="#ecossistema" className="text-gray-300 hover:text-white transition-colors">Ecossistema</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mentoria</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Eventos por Região</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Belo Horizonte</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Uberlândia</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Juiz de Fora</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Montes Claros</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Poços de Caldas</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Receba atualizações sobre os próximos eventos e novidades do ecossistema.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Seu e-mail" className="bg-white/10 border-0 text-white placeholder:text-gray-400 focus-visible:ring-swmg-primary" />
              <Button type="submit" className="bg-swmg-primary hover:bg-swmg-secondary">
                Assinar
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-black/30 py-4 mt-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Circuito Mineiro de Startup Weekend. Todos os direitos reservados.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Termos de Uso</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Contato</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
