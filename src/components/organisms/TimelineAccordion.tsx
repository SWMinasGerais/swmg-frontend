import { useState, useEffect, useRef } from "react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { ChevronDown, Search, X } from "lucide-react";
import { PeriodData, TimelineEvent } from "@/modules/about/types";

interface TimelineAccordionProps {
  timelines: PeriodData[];
}

const TimelineAccordion: React.FC<TimelineAccordionProps> = ({ timelines }) => {
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
  const renderTimelineAccordion = (periodData: PeriodData, index: number) => {
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
                                  <span className={`font-bold text-xl relative z-10 ${
                                    activeYear === yearData.year ? "text-red-600" : "text-slate-700 group-hover:text-red-500"
                                  } transition-all duration-300`}>
                                    {yearData.year}
                                  </span>
                                </div>
                              </div>
                              <div className="ml-4 flex-grow">
                                <h4 className="font-bold text-lg text-slate-900 mb-1">
                                  {yearData.year}
                                </h4>
                                <p className="text-sm text-slate-500">
                                  {filteredEvents.length} evento{filteredEvents.length !== 1 && 's'}
                                </p>
                              </div>
                            </div>
                            
                            <div className="space-y-3 ml-6">
                              {filteredEvents.map((event, eventIndex) => (
                                <div 
                                  key={event.id || eventIndex} 
                                  className={`relative rounded-lg p-4 border 
                                    ${searchTerm && event.text.toLowerCase().includes(searchTerm.toLowerCase()) 
                                      ? "bg-yellow-50 border-yellow-200 shadow-sm" 
                                      : "bg-white border-slate-100"
                                    } hover:border-red-200 transition-all duration-200 hover:shadow-sm group`}
                                >
                                  <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border-2 border-red-300 bg-white group-hover:border-red-500 group-hover:bg-red-50 transition-all duration-300"></div>
                                  
                                  <p className="text-slate-700 mb-2">
                                    {event.text}
                                  </p>
                                  
                                  {event.tags && event.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-1 mt-2">
                                      {event.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                  
                                  {event.link && (
                                    <a 
                                      href={event.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-xs text-red-600 hover:text-red-700 mt-2 inline-flex items-center"
                                    >
                                      Saiba mais
                                    </a>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  
                  {/* Load more button */}
                  {visibleYearsCount < years.length && (
                    <div className="text-center pb-4">
                      <button
                        onClick={loadMoreYears}
                        className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg text-sm font-medium transition-colors duration-200"
                      >
                        Carregar mais anos
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

  return (
    <div className="space-y-4">
      {timelines.map((timeline, index) => renderTimelineAccordion(timeline, index))}
    </div>
  );
};

export default TimelineAccordion; 