import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Award, Calendar, BookOpen, FileDown, ChevronDown, ExternalLink, Search, Filter, X } from "lucide-react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { startupEcosystemData } from "@/data/timelineData";
import { TimelineEvent } from "@/types/timeline";
import { useState, useEffect, useRef } from "react";

const AboutSection = () => {
  // State for filtering and pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [activeYear, setActiveYear] = useState<string | null>(null);
  const [activePeriod, setActivePeriod] = useState<string | null>(null);
  const [visibleYearsCount, setVisibleYearsCount] = useState(3);
  const yearsRef = useRef<HTMLDivElement>(null);

  // Filter events based on search term
  const filterEvents = (events: TimelineEvent[]) => {
    if (!searchTerm) return events;
    return events.filter(event => 
      event.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Reset search when accordion closes
  useEffect(() => {
    if (!activePeriod) {
      setSearchTerm("");
      setActiveYear(null);
    }
  }, [activePeriod]);

  // Scroll to the active year when it changes
  useEffect(() => {
    if (activeYear && yearsRef.current) {
      const yearElement = document.getElementById(`year-${activeYear}`);
      if (yearElement) {
        yearsRef.current.scrollTo({
          top: yearElement.offsetTop - 20,
          behavior: 'smooth'
        });
      }
    }
  }, [activeYear]);

  // Original timeline items for the Startup Weekend events
  const originalTimelineItems = [
    {
      year: "2015",
      title: "Primeiro Startup Weekend em Minas",
      description: "Início do movimento em Belo Horizonte",
      count: "120 participantes",
      icon: <Calendar className="h-8 w-8 text-red-600" />
    },
    {
      year: "2017",
      title: "Expansão pelo Estado",
      description: "Chegamos a Uberlândia, Juiz de Fora e Viçosa",
      count: "500+ participantes",
      icon: <Users className="h-8 w-8 text-red-600" />
    },
    {
      year: "2019",
      title: "Crescimento e Reconhecimento",
      description: "12 eventos em 8 cidades diferentes",
      count: "1.200+ participantes",
      icon: <Award className="h-8 w-8 text-red-600" />
    },
    {
      year: "2023",
      title: "Consolidação do Ecossistema",
      description: "Formação da Rede Mineira de Startups",
      count: "25+ startups nascidas",
      icon: <BookOpen className="h-8 w-8 text-red-600" />
    }
  ];

  // Handle accordion change
  const handleAccordionChange = (value: string) => {
    if (value === activePeriod) {
      setActivePeriod(null);
    } else {
      setActivePeriod(value);
      // Reset visible years count when changing period
      setVisibleYearsCount(3);
    }
  };

  // Load more years
  const loadMoreYears = () => {
    setVisibleYearsCount(prev => prev + 3);
  };

  // Render a timeline item with an accordion for expanded content
  const renderTimelineAccordion = (periodData, index) => {
    const years = periodData.years || [];
    const periodValue = `period-${index}`;
    const isActive = activePeriod === periodValue;
    
    return (
      <div 
        key={index} 
        className={`mb-6 max-w-3xl mx-auto transform transition-all duration-500 ${
          isActive ? "scale-100" : "scale-[0.98]"
        }`}
      >
        <div 
          className={`bg-white/95 backdrop-blur-lg p-5 rounded-xl shadow-md border ${
            isActive ? "border-red-200 shadow-lg" : "border-slate-100"
          } transition-all duration-300 hover:shadow-lg`}
        >
          <Accordion 
            type="single" 
            collapsible 
            value={activePeriod} 
            onValueChange={handleAccordionChange}
            className="w-full"
          >
            <AccordionItem value={periodValue} className="border-none">
              <AccordionTrigger 
                className={`group py-4 px-4 rounded-xl text-xl font-bold text-slate-900 transition-all duration-300 ${
                  isActive ? "bg-gradient-to-r from-red-50 to-white shadow-sm" : "hover:bg-slate-50/80"
                }`}
              >
                <div className="flex items-center w-full">
                  <div className="relative flex-shrink-0 transition-all duration-300">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white overflow-hidden 
                      ${isActive ? "shadow-lg" : "shadow-md group-hover:shadow-lg"} 
                      transform transition-all duration-300 
                      ${isActive ? "scale-105 translate-y-0" : "group-hover:scale-[1.02] group-hover:-translate-y-1"}`}>
                      <span className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <div className="flex flex-col items-center">
                        <span className="font-bold text-lg relative z-10 mb-0.5">
                          {periodData.period.split("-")[0]}
                        </span>
                        <div className="h-px w-12 bg-white/30"></div>
                        <span className="font-bold text-lg relative z-10 mt-0.5">
                          {periodData.period.split("-")[1] || periodData.period.split("-")[0]}
                        </span>
                      </div>
                    </div>
                    {isActive && (
                      <div className="absolute -right-2 -top-2 w-7 h-7 bg-white rounded-full shadow flex items-center justify-center">
                        <div className="w-3.5 h-3.5 rounded-full bg-red-500"></div>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col ml-5 text-left flex-grow">
                    <div className="flex items-center justify-between w-full">
                      <h3 className={`font-bold text-lg transition-all duration-300 ${isActive ? "text-red-700" : "text-slate-900 group-hover:text-red-600"}`}>
                        {periodData.title}
                      </h3>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-red-100/60 text-red-800 ml-auto mr-4 hidden md:flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{periodData.years?.length || 0} anos</span>
                      </span>
                    </div>
                    <div className="flex items-center mt-1">
                      <p className="text-sm text-slate-600 flex items-center gap-2">
                        <span className="inline-block px-2.5 py-1 bg-slate-100 rounded-md font-medium">
                          {periodData.period}
                        </span>
                        <span className="text-xs text-slate-500 hidden md:inline-block">
                          Inclui eventos de {periodData.period.split("-")[0]} a {periodData.period.split("-")[1] || periodData.period.split("-")[0]}
                        </span>
                      </p>
                    </div>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${isActive ? "transform rotate-180 text-red-500" : "text-slate-400 group-hover:text-red-400"}`} />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {/* Search bar */}
                <div className="px-4 py-3 mb-4 mt-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Buscar eventos..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-3 pl-11 pr-10 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 text-sm bg-slate-50/50 hover:bg-white transition-all duration-300"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 bg-white/80 rounded-full p-1">
                      <Search className="h-4 w-4" />
                    </div>
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm("")}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-red-500 bg-white/80 rounded-full p-1"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Year quick navigation */}
                <div className="px-4 mb-4 flex flex-wrap gap-1.5">
                  {years.map((yearData, yearIndex) => (
                    <button
                      key={yearIndex}
                      onClick={() => setActiveYear(yearData.year)}
                      className={`text-xs px-3 py-1.5 rounded-full transition-all duration-200 ${
                        activeYear === yearData.year 
                          ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-sm" 
                          : "bg-slate-100 text-slate-700 hover:bg-red-100 hover:text-red-600"
                      } border ${activeYear === yearData.year ? "border-red-400" : "border-transparent"}`}
                    >
                      {yearData.year}
                    </button>
                  ))}
                </div>

                {/* Timeline content with virtualization */}
                <div 
                  ref={yearsRef}
                  className="pl-10 space-y-4 mt-2 max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar"
                >
                  {years.slice(0, visibleYearsCount).map((yearData, yearIndex) => {
                    const filteredEvents = filterEvents(yearData.events);
                    
                    // Skip years with no matching events when searching
                    if (searchTerm && filteredEvents.length === 0) return null;
                    
                    return (
                      <div 
                        key={yearIndex} 
                        id={`year-${yearData.year}`}
                        className={`relative animate-fadeIn ${
                          activeYear === yearData.year ? "opacity-100" : "opacity-100"
                        }`}
                        style={{ animationDelay: `${yearIndex * 100}ms` }}
                      >
                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-red-600/30 ml-4"></div>
                        <div className="mb-6">
                          <div className="flex flex-col">
                            <div className="flex items-start mb-3">
                              <div className="relative">
                                <div 
                                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white border-2 ${
                                    activeYear === yearData.year ? "border-red-600 shadow-md" : "border-red-300 shadow-sm"
                                  } z-10 transition-all duration-300 ${
                                    activeYear === yearData.year ? "scale-110" : "hover:scale-105"
                                  } cursor-pointer hover:border-red-500 group`}
                                  onClick={() => setActiveYear(yearData.year === activeYear ? null : yearData.year)}
                                >
                                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                  <span className={`font-bold text-sm ${activeYear === yearData.year ? "text-red-600" : "text-slate-700 group-hover:text-red-500"} transition-colors duration-300`}>
                                    {yearData.year}
                                  </span>
                                </div>
                              </div>
                              
                              <div className="ml-3">
                                <div className="text-sm inline-block bg-red-600/10 px-3 py-1 rounded-full text-red-700 font-medium">
                                  {yearData.highlights}
                                </div>
                              </div>
                            </div>
                            
                            <div className="ml-12 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-slate-100/50 transition-all duration-300 hover:shadow-md">
                              <ul className="space-y-5 text-sm">
                                {filteredEvents.map((event: TimelineEvent, eventIndex) => (
                                  <li 
                                    key={eventIndex} 
                                    className="animate-fadeIn group relative pl-5 pb-1"
                                    style={{ animationDelay: `${eventIndex * 50}ms` }}
                                  >
                                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-slate-300 group-hover:bg-red-500 transition-all duration-300 flex items-center justify-center">
                                      <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="relative">
                                      <p className="leading-relaxed text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                                        {event.text}
                                        {event.source && (
                                          <a 
                                            href={`https://${event.source}`} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center ml-1.5 text-red-500 hover:text-red-700 transition-colors duration-200 group-hover:translate-x-0.5 transform"
                                          >
                                            <ExternalLink className="h-3.5 w-3.5" />
                                          </a>
                                        )}
                                      </p>
                                      <div className="w-full h-px bg-slate-200 mt-4 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Load more button */}
                  {visibleYearsCount < years.length && (
                    <div className="flex justify-center pb-2">
                      <button
                        onClick={loadMoreYears}
                        className="px-4 py-2 text-sm text-red-600 bg-white border border-red-200 rounded-full hover:bg-red-50 transition-colors"
                      >
                        Mostrar mais anos ({visibleYearsCount}/{years.length})
                      </button>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    );
  };

  // Render references
  const renderReferences = () => (
    <div className="mt-12 bg-white/90 backdrop-blur-lg p-6 rounded-xl shadow-md border border-slate-100/50 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '300ms' }}>
      <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
          <BookOpen className="h-4 w-4 text-red-600" />
        </div>
        Referências
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {startupEcosystemData.references.map((ref, index) => (
          <a
            key={index}
            href={ref.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-xs text-slate-700 hover:text-red-600 transition-colors p-1 hover:bg-red-50 rounded"
          >
            <ExternalLink className="h-3 w-3 mr-1 flex-shrink-0 text-red-400" />
            <span className="truncate">{ref.title}</span>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white to-slate-50/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left column - Vision, Mission, Values */}
          <div className="animate-fadeIn lg:w-2/5 lg:sticky lg:top-20 self-start">
            <h5 className="text-slate-900 font-medium mb-3 flex items-center">
              <div className="w-8 h-1 bg-red-600 mr-2"></div>
              Sobre nós
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Circuito Mineiro de<br />Startup Weekend
            </h2>
            <p className="text-slate-700 mb-8 leading-relaxed">
              O Circuito Mineiro de Startup Weekend é uma iniciativa que une empreendedores, 
              desenvolvedores e designers de todo o estado para transformar ideias em startups reais 
              em apenas 54 horas de imersão criativa e colaborativa.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-slate-100/50 hover:bg-white/90 transition-all duration-300 hover:shadow-md transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center">
                  <div className="bg-red-600/10 p-2 rounded-full mr-3">
                    <CheckCircle2 className="h-5 w-5 text-red-600" />
                  </div>
                  Nossa Missão
                </h3>
                <p className="text-slate-700">
                  Fomentar o empreendedorismo inovador e criar um ecossistema de startups 
                  vibrante em todas as regiões de Minas Gerais, conectando talentos locais 
                  e oportunidades globais.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-slate-100/50 hover:bg-white/90 transition-all duration-300 hover:shadow-md transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center">
                  <div className="bg-red-600/10 p-2 rounded-full mr-3">
                    <CheckCircle2 className="h-5 w-5 text-red-600" />
                  </div>
                  Nossa Visão
                </h3>
                <p className="text-slate-700">
                  Transformar Minas Gerais em referência nacional e internacional em 
                  inovação e empreendedorismo, criando startups de impacto que 
                  nascem da diversidade cultural e talentos mineiros.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-slate-100/50 hover:bg-white/90 transition-all duration-300 hover:shadow-md transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center">
                  <div className="bg-red-600/10 p-2 rounded-full mr-3">
                    <CheckCircle2 className="h-5 w-5 text-red-600" />
                  </div>
                  Nossos Valores
                </h3>
                <p className="text-slate-700">
                  Colaboração, inovação, diversidade, regionalismo, educação 
                  empreendedora e impacto socioeconômico positivo.
                </p>
              </div>
            </div>

            <Button className="bg-red-600 hover:bg-red-700 text-white shadow-md group relative overflow-hidden transition-all duration-300 transform hover:-translate-y-1">
              <span className="relative z-10 flex items-center">
                Baixe o kit do empreendedor
                <FileDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </span>
              <span className="absolute inset-0 h-full w-full opacity-0 group-hover:opacity-25 transition-opacity duration-300 bg-white" />
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%] animate-shine opacity-0 group-hover:opacity-100"></span>
            </Button>
          </div>

          {/* Right column - Comprehensive Timeline with Accordion */}
          <div className="lg:w-3/5">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <div className="w-10 h-1.5 bg-gradient-to-r from-red-600 to-red-400 mr-3 rounded-full"></div>
                Ecossistema de Startups em Minas Gerais
              </h3>
              <p className="text-slate-700 mb-8 leading-relaxed text-lg max-w-2xl">
                Conheça a evolução do ecossistema mineiro de startups, desde suas origens
                acadêmicas até se tornar um dos principais polos de inovação do país.
                <span className="text-red-600 font-medium"> Clique em cada período para explorar sua história.</span>
              </p>
            </div>
            
            <div>
              {startupEcosystemData.periods.map((period, index) => renderTimelineAccordion(period, index))}
            </div>
            
            {renderReferences()}
          </div>
        </div>
      </div>

      {/* Add custom CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E5E7EB;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #D1D5DB;
        }
        
        @keyframes shine {
          to {
            background-position: 200% 0;
          }
        }
        
        .animate-shine {
          animation: shine 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection; 