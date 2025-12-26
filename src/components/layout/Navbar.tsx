import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { X, Menu, User, GraduationCap, PanelsTopLeft, Brain, Lightbulb, FileQuestion, Users, Calendar, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Mock data for dropdown menus
const eventsMock = [
  {
    title: "Próximos Eventos",
    href: "/#eventos",
    description: "Confira os próximos Startup Weekends em Minas Gerais.",
    icon: <Calendar className="h-5 w-5 text-red-600" />
  },
  {
    title: "Casos de Sucesso",
    href: "/#cases",
    description: "Startups que nasceram nos eventos e alcançaram sucesso.",
    icon: <Lightbulb className="h-5 w-5 text-red-600" />
  },
  {
    title: "Ecossistema",
    href: "/#ecossistema",
    description: "Conheça os parceiros que fazem parte do nosso ecossistema.",
    icon: <PanelsTopLeft className="h-5 w-5 text-red-600" />
  }
];

const mentorshipMock = [
  {
    title: "Mentoria",
    href: "/#mentoria",
    description: "Acesse nossa rede de mentores especializados.",
    icon: <Brain className="h-5 w-5 text-red-600" />
  },
  {
    title: "Equipe",
    href: "/#equipe",
    description: "Conheça os organizadores e voluntários por trás dos eventos.",
    icon: <Users className="h-5 w-5 text-red-600" />
  },
  {
    title: "FAQ",
    href: "/#faq",
    description: "Respostas para as perguntas mais frequentes.",
    icon: <FileQuestion className="h-5 w-5 text-red-600" />
  }
];

// Configuration constant with menu information
const navConfig = {
  mainLinks: [
    { href: "/#sobre", label: "Sobre" },
    { href: "/#eventos", label: "Próximos Eventos" },
    { href: "/#cases", label: "Casos de Sucesso" },
    { href: "/#ecossistema", label: "Ecossistema" },
    { href: "/#mentoria", label: "Mentoria" },
    { href: "/#equipe", label: "Equipe" },
    { href: "/#blog", label: "Blog" },
    { href: "/#faq", label: "FAQ" }
  ],
  legalPages: [
    { href: "/termos-de-uso", label: "Termos de Uso" },
    { href: "/politica-de-privacidade", label: "Privacidade" },
    { href: "/cookies", label: "Cookies" },
    { href: "/seguranca", label: "Segurança" },
    { href: "/acessibilidade", label: "Acessibilidade" }
  ]
};

// ListItem component for dropdown menus
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-50 hover:text-red-600 focus:bg-red-50 focus:text-red-600",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon && <span>{icon}</span>}
            <span className="text-sm font-medium leading-none">{title}</span>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const location = useLocation();
  
  // Add scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-white/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 group"
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
        >
          <div className="bg-red-600 rounded-full w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <span className="text-white font-bold">SW</span>
          </div>
          <span className="font-heading font-bold text-lg md:text-xl text-slate-900 overflow-hidden transition-all duration-300 ease-in-out">
            {isLogoHovered ? 'Circuito Mineiro SW' : 'SWMG'}
          </span>
        </Link>
        
        {/* Desktop Navigation Menu */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/#sobre" className={navigationMenuTriggerStyle()}>
                  Sobre
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Eventos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] lg:grid-cols-3">
                    {eventsMock.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={item.icon}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Recursos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] lg:grid-cols-3">
                    {mentorshipMock.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={item.icon}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/#blog" className={navigationMenuTriggerStyle()}>
                  Blog
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden md:flex text-slate-700 hover:text-red-600 hover:bg-red-50 transition-colors duration-200"
          >
            <User className="h-5 w-5" />
          </Button>
          
          <Button className="relative overflow-hidden bg-red-600 text-white hover:bg-red-700 font-medium transition-all duration-300 ease-in-out">
            <span className="relative z-10">Inscreva-se agora</span>
            <span className="absolute inset-0 h-full w-full bg-white opacity-0 hover:opacity-20 transition-opacity duration-300" />
          </Button>
          
          <button 
            className="lg:hidden p-2 text-slate-700 hover:text-red-600 transition-colors duration-200" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden bg-white border-t border-slate-100 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col space-y-4 py-4 px-6">
          {navConfig.mainLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-sm font-medium text-slate-700 hover:text-red-600 transition-colors duration-200 py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 mt-2 border-t border-slate-100">
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50 hover:border-red-600 transition-colors duration-200"
            >
              <User className="h-4 w-4 mr-2" />
              Área do Participante
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
