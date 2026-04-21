import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Instagram, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Facebook, 
  Mail,
  MapPin,
  Send
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0A0A0A] text-white relative z-10">
      {/* Newsletter bar */}
      <div className="bg-gradient-to-r from-[#E4002B] to-[#0A0A0A] border-b border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-bold mb-1">Fique por dentro</h4>
              <p className="text-white/80">Inscreva-se para receber novidades do Circuito Mineiro</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <div className="relative flex-grow max-w-md">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Seu email"
                  className="pl-10 bg-white/5 border border-white/10 text-white placeholder:text-white/30 rounded-full w-full"
                />
              </div>
              <Button className="bg-white text-[#0A0A0A] font-semibold rounded-full hover:bg-white/90">
                <Send className="h-4 w-4 mr-2" />
                Inscrever
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo and about */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                <span className="text-swmg-primary font-bold">SW</span>
              </div>
              <span className="text-xl font-bold text-white">Circuito Mineiro SW</span>
            </div>
            <p className="text-white/40 mb-6">
              Transformando ideias em startups em 54 horas. O Circuito Mineiro de Startup Weekend 
              é uma iniciativa que leva o maior evento de empreendedorismo do mundo para todas as regiões de Minas Gerais.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="bg-white/5 hover:bg-[#E4002B] text-white rounded-full p-2 transition-all">
                <a href="https://instagram.com/startupweekendmg" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="bg-white/5 hover:bg-[#E4002B] text-white rounded-full p-2 transition-all">
                <a href="https://linkedin.com/company/startupweekendmg" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="bg-white/5 hover:bg-[#E4002B] text-white rounded-full p-2 transition-all">
                <a href="https://facebook.com/startupweekendmg" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="bg-white/5 hover:bg-[#E4002B] text-white rounded-full p-2 transition-all">
                <a href="https://twitter.com/startupweekendmg" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="bg-white/5 hover:bg-[#E4002B] text-white rounded-full p-2 transition-all">
                <a href="https://youtube.com/c/startupweekendmg" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60 mb-4">Links Rápidos</h5>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-sm text-white/30 hover:text-white transition-colors">Sobre o Circuito</a>
              </li>
              <li>
                <a href="#eventos" className="text-sm text-white/30 hover:text-white transition-colors">Próximos Eventos</a>
              </li>
              <li>
                <a href="#cases" className="text-sm text-white/30 hover:text-white transition-colors">Casos de Sucesso</a>
              </li>
              <li>
                <a href="#ecossistema" className="text-sm text-white/30 hover:text-white transition-colors">Ecossistema</a>
              </li>
              <li>
                <a href="#mentoria" className="text-sm text-white/30 hover:text-white transition-colors">Mentoria & Recursos</a>
              </li>
              <li>
                <a href="#blog" className="text-sm text-white/30 hover:text-white transition-colors">Blog & Notícias</a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-white/30 hover:text-white transition-colors">FAQ & Suporte</a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60 mb-4">Legal</h5>
            <ul className="space-y-3">
              <li>
                <a href="/termos-de-uso" className="text-sm text-white/30 hover:text-white transition-colors">Termos de Uso</a>
              </li>
              <li>
                <a href="/politica-de-privacidade" className="text-sm text-white/30 hover:text-white transition-colors">Política de Privacidade</a>
              </li>
              <li>
                <a href="/codigo-de-conduta" className="text-sm text-white/30 hover:text-white transition-colors">Código de Conduta</a>
              </li>
              <li>
                <a href="/licencas" className="text-sm text-white/30 hover:text-white transition-colors">Licenças</a>
              </li>
              <li>
                <a href="/cookies" className="text-sm text-white/30 hover:text-white transition-colors">Política de Cookies</a>
              </li>
              <li>
                <a href="/seguranca" className="text-sm text-white/30 hover:text-white transition-colors">Segurança</a>
              </li>
              <li>
                <a href="/acessibilidade" className="text-sm text-white/30 hover:text-white transition-colors">Acessibilidade</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60 mb-4">Contato</h5>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-white/40" />
                <div>
                  <a href="mailto:contato@startupweekendmg.com" className="text-sm text-white/30 hover:text-white transition-colors">
                    contato@startupweekendmg.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-white/40" />
                <div>
                  <p className="text-sm text-white/30">
                    Belo Horizonte, MG
                    <br />
                    Brasil
                  </p>
                </div>
              </li>
            </ul>
            
            <div className="mt-6">
              <Button variant="outline" className="border-white/20 text-white/60 hover:bg-white hover:text-[#0A0A0A] rounded-full transition-all">
                Entre em contato
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="bg-white/5 mt-10" />
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6">
          <p className="text-xs text-white/20">
            &copy; {currentYear} Circuito Mineiro de Startup Weekend. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/20">
            Startup Weekend™ é uma marca registrada da Techstars.
            Este é um evento comunitário licenciado.
          </p>
        </div>
      </div>
      
      {/* Schema.org Organization JSON-LD for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Circuito Mineiro de Startup Weekend",
          "url": "https://www.startupweekendmg.com",
          "logo": "https://www.startupweekendmg.com/logo.png",
          "sameAs": [
            "https://www.facebook.com/startupweekendmg",
            "https://www.instagram.com/startupweekendmg",
            "https://www.linkedin.com/company/startupweekendmg",
            "https://twitter.com/startupweekendmg",
            "https://www.youtube.com/c/startupweekendmg"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "contato@startupweekendmg.com",
            "contactType": "customer service"
          },
          "description": "O Circuito Mineiro de Startup Weekend é uma iniciativa que leva o maior evento de empreendedorismo do mundo para todas as regiões de Minas Gerais."
        }
      `}} />
    </footer>
  );
};

export default Footer;
