import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  CalendarDays, 
  MapPin, 
  Users, 
  ExternalLink, 
  Filter, 
  X, 
  Clock, 
  Search, 
  Tag, 
  Building, 
  Trophy, 
  Info, 
  ChevronLeft, 
  ChevronRight,
  Calendar,
  ChevronDown,
  Check,
  Briefcase,
  Clock3
} from "lucide-react";
import { 
  allEvents, 
  Event, 
  EventStatus,
  getUniqueCities,
  getUniqueThemes 
} from "@/data/eventsData";
import { cn } from "@/lib/utils";

const EVENTS_PER_PAGE = 6;

// Helper function to generate a dynamic placeholder image
const generateEventImage = (event: Event): string => {
  if (event.imageUrl && event.imageUrl !== "/imgs/events/default-event.jpg") {
    return event.imageUrl;
  }
  
  // Encode safe parameters for URL
  const encodedTitle = encodeURIComponent(event.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase());
  const encodedTheme = encodeURIComponent(event.theme.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase());
  
  // Generate dynamic placeholder using theme colors
  const themeColors: Record<string, { bg: string; text: string }> = {
    "Geral": { bg: "f1f5f9", text: "334155" },
    "EdTech & Future of Learning": { bg: "ecfdf5", text: "065f46" },
    "Agritech & Sustainability": { bg: "ecfdf5", text: "065f46" },
    "Health & Wellness": { bg: "fff1f2", text: "9f1239" },
    "Smart Cities": { bg: "f1f5f9", text: "0f172a" },
    "Youth": { bg: "fef9c3", text: "854d0e" },
    "Maker": { bg: "faf5ff", text: "6b21a8" },
    "FinTech": { bg: "eef2ff", text: "3730a3" },
    "AgroTech": { bg: "ecfdf5", text: "065f46" },
    "Retail Tech": { bg: "fff7ed", text: "9a3412" },
    "Sustentabilidade": { bg: "ecfdf5", text: "065f46" },
    "Women": { bg: "fdf2f8", text: "9d174d" },
    "COVID-19": { bg: "fef2f2", text: "991b1b" },
    "Comunidades": { bg: "fff7ed", text: "9a3412" },
    "IoT/Manufatura": { bg: "f1f5f9", text: "334155" },
    "Education": { bg: "eff6ff", text: "1e40af" }
  };
  
  const color = themeColors[event.theme] || { bg: "f1f5f9", text: "334155" };
  
  // Randomize between different placeholder providers for variety
  const placeholderProviders = [
    // Placeholder.com
    `https://via.placeholder.com/800x400/${color.bg}/${color.text}?text=Startup+Weekend+${encodedTitle}`,
    
    // PlaceImg with categories related to entrepreneurship/innovation
    `https://placeimg.com/800/400/tech/grayscale`,
    
    // DiceBear abstract images with event ID as seed
    `https://api.dicebear.com/6.x/shapes/svg?seed=${event.id}&backgroundColor=${color.bg}`,
    
    // Unsplash with entrepreneurship/innovation keywords
    `https://source.unsplash.com/800x400/?startup,innovation,${encodedTheme}`
  ];
  
  // Use event ID to consistently select the same provider for the same event
  const providerIndex = event.id.toString().charCodeAt(0) % placeholderProviders.length;
  
  return placeholderProviders[providerIndex];
};

// Generate theme color based on event theme
const getThemeColor = (theme: string): string => {
  const themeColors: Record<string, string> = {
    "Geral": "#f1f5f9",
    "EdTech & Future of Learning": "#ecfdf5",
    "Agritech & Sustainability": "#ecfdf5",
    "Health & Wellness": "#fff1f2",
    "Smart Cities": "#f1f5f9",
    "Youth": "#fef9c3",
    "Maker": "#faf5ff",
    "FinTech": "#eef2ff",
    "AgroTech": "#ecfdf5",
    "Retail Tech": "#fff7ed",
    "Sustentabilidade": "#ecfdf5",
    "Women": "#fdf2f8",
    "COVID-19": "#fef2f2",
    "Comunidades": "#fff7ed",
    "IoT/Manufatura": "#f1f5f9",
    "Education": "#eff6ff"
  };
  
  return themeColors[theme] || "#f1f5f9";
};

// Format sponsors to array for better display
const formatSponsors = (sponsors: string): string[] => {
  if (!sponsors) return [];
  return sponsors.split(/,\s*/).filter(Boolean);
};

const EventsSection = () => {
  const [cityFilter, setCityFilter] = useState<string | null>(null);
  const [monthFilter, setMonthFilter] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<EventStatus | null>(null);
  const [showPastEvents, setShowPastEvents] = useState(false);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [themeFilter, setThemeFilter] = useState<string | null>(null);
  const [yearFilter, setYearFilter] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<"recent" | "oldest">("recent");

  // Get all cities for filtering
  const allCities = getUniqueCities();

  // Get available years for filtering
  const uniqueYears = Array.from(
    new Set(
      allEvents
        .filter(event => event.year)
        .map(event => event.year)
    )
  ).sort((a, b) => (b || 0) - (a || 0)) as number[];

  // Get all themes for filtering
  const allThemes = getUniqueThemes();

  // Filter events based on all filters
  const filteredEvents = allEvents.filter(event => {
    // Filter out past events unless specifically showing them
    if (event.status === "past" && !showPastEvents) return false;
    
    // City filter
    if (cityFilter && event.city !== cityFilter) return false;
    
    // Month filter
    if (monthFilter && event.month !== monthFilter) return false;
    
    // Status filter
    if (statusFilter && event.status !== statusFilter) return false;
    
    // Theme filter
    if (themeFilter && event.theme !== themeFilter) return false;
    
    // Year filter
    if (yearFilter && event.year !== yearFilter) return false;
    
    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesTitle = event.title.toLowerCase().includes(query);
      const matchesCity = event.city.toLowerCase().includes(query);
      const matchesTheme = event.theme.toLowerCase().includes(query);
      const matchesVenue = event.venue?.toLowerCase().includes(query) || false;
      
      if (!(matchesTitle || matchesCity || matchesTheme || matchesVenue)) {
        return false;
      }
    }
    
    return true;
  });

  // Sort events
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sortBy === "recent") {
      return (b.year || 0) - (a.year || 0);
    } else {
      return (a.year || 0) - (b.year || 0);
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedEvents.length / EVENTS_PER_PAGE);
  const paginatedEvents = sortedEvents.slice(
    (currentPage - 1) * EVENTS_PER_PAGE,
    currentPage * EVENTS_PER_PAGE
  );

  // Handle year filter - automatically enable showing past events
  const handleYearFilterChange = (year: number | null) => {
    setYearFilter(year);
    if (year !== null) {
      setShowPastEvents(true);
    }
  };

  // Reset current page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [cityFilter, monthFilter, statusFilter, showPastEvents, searchQuery, themeFilter, yearFilter, sortBy]);

  // Reset all filters
  const resetFilters = () => {
    setCityFilter(null);
    setMonthFilter(null);
    setStatusFilter(null);
    setThemeFilter(null);
    setYearFilter(null);
    setSearchQuery("");
    setSortBy("recent");
    setCurrentPage(1);
  };

  // Count active filters
  const activeFiltersCount = [
    cityFilter, 
    monthFilter, 
    statusFilter, 
    showPastEvents, 
    searchQuery, 
    themeFilter, 
    yearFilter, 
    sortBy !== "recent"
  ].filter(Boolean).length;

  // Status display name mapping
  const statusLabels: Record<EventStatus, string> = {
    "open": "Inscrições abertas",
    "coming-soon": "Em breve",
    "closed": "Fechado",
    "past": "Realizado"
  };

  // Status color mapping
  const statusColors: Record<EventStatus, string> = {
    "open": "bg-green-500",
    "coming-soon": "bg-amber-500",
    "closed": "bg-slate-600",
    "past": "bg-slate-600"
  };

  return (
    <section id="eventos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="text-slate-900 font-medium mb-3 inline-flex items-center justify-center">
            <div className="w-8 h-1 bg-red-600 mr-2"></div>
            Próximos Eventos
          </h5>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Calendário Startup Weekend MG
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Encontre o próximo Startup Weekend em Minas Gerais e transforme sua ideia em realidade em apenas um fim de semana.
          </p>
        </div>

        {/* Search bar */}
        <div className="mb-6 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar por título, cidade ou tema..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-10 py-2 border-slate-300 focus:border-red-600 focus:ring focus:ring-red-100"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchQuery("")}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 text-slate-400 hover:text-slate-600"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Main filters row */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-between items-center mb-4">
            <div className="flex gap-2 flex-wrap mb-2 md:mb-0">
              {/* City dropdown filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-slate-500" />
                    {cityFilter ? `Cidade: ${cityFilter}` : "Todas as cidades"}
                    <ChevronDown className="h-3 w-3 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 max-h-[60vh] overflow-y-auto">
                  <DropdownMenuLabel>Cidades</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={cityFilter || ""} onValueChange={(value) => setCityFilter(value || null)}>
                    <DropdownMenuRadioItem value="">
                      Todas as cidades
                      {!cityFilter && <Check className="h-4 w-4 ml-auto" />}
                    </DropdownMenuRadioItem>
                    {allCities.map(city => (
                      <DropdownMenuRadioItem key={city} value={city}>
                        {city}
                        {cityFilter === city && <Check className="h-4 w-4 ml-auto" />}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Theme dropdown filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-slate-500" />
                    {themeFilter ? `Tema: ${themeFilter.split(' ')[0]}` : "Todos os temas"}
                    <ChevronDown className="h-3 w-3 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 max-h-[60vh] overflow-y-auto">
                  <DropdownMenuLabel>Temas</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={themeFilter || ""} onValueChange={(value) => setThemeFilter(value || null)}>
                    <DropdownMenuRadioItem value="">
                      Todos os temas
                      {!themeFilter && <Check className="h-4 w-4 ml-auto" />}
                    </DropdownMenuRadioItem>
                    {allThemes.map(theme => (
                      <DropdownMenuRadioItem key={theme} value={theme}>
                        {theme}
                        {themeFilter === theme && <Check className="h-4 w-4 ml-auto" />}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Year dropdown filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-slate-500" />
                    {yearFilter ? `Ano: ${yearFilter}` : "Todos os anos"}
                    <ChevronDown className="h-3 w-3 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuLabel>Ano</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup 
                    value={yearFilter ? yearFilter.toString() : ""} 
                    onValueChange={(value) => handleYearFilterChange(value ? parseInt(value) : null)}
                  >
                    <DropdownMenuRadioItem value="">
                      Todos os anos
                      {!yearFilter && <Check className="h-4 w-4 ml-auto" />}
                    </DropdownMenuRadioItem>
                    {uniqueYears.map(year => (
                      <DropdownMenuRadioItem key={year} value={year.toString()}>
                        {year}
                        {yearFilter === year && <Check className="h-4 w-4 ml-auto" />}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Status dropdown filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Info className="h-4 w-4 text-slate-500" />
                    {statusFilter ? `Status: ${statusLabels[statusFilter]}` : "Todos os status"}
                    <ChevronDown className="h-3 w-3 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuLabel>Status</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={statusFilter || ""} onValueChange={(value) => setStatusFilter(value as EventStatus || null)}>
                    <DropdownMenuRadioItem value="">
                      Todos os status
                      {!statusFilter && <Check className="h-4 w-4 ml-auto" />}
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="open" className="text-green-600">
                      {statusLabels.open}
                      {statusFilter === "open" && <Check className="h-4 w-4 ml-auto" />}
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="coming-soon" className="text-amber-500">
                      {statusLabels["coming-soon"]}
                      {statusFilter === "coming-soon" && <Check className="h-4 w-4 ml-auto" />}
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={showPastEvents}
                    onCheckedChange={setShowPastEvents}
                    className="flex items-center"
                  >
                    <Clock className="mr-2 h-4 w-4" />
                    Mostrar eventos anteriores
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Sorting options */}
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSortBy("recent")}
                className={sortBy === "recent" ? "border-red-600 text-red-600" : "border-slate-200"}
              >
                Mais recentes
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSortBy("oldest")}
                className={sortBy === "oldest" ? "border-red-600 text-red-600" : "border-slate-200"}
              >
                Mais antigos
              </Button>
            </div>
          </div>

          {/* Active filters summary and reset */}
          {activeFiltersCount > 0 && (
            <div className="flex justify-between items-center bg-white rounded-lg p-2 shadow-sm">
              <div className="text-sm text-slate-600">
                <span className="font-semibold">{filteredEvents.length}</span> eventos encontrados 
                com {activeFiltersCount} {activeFiltersCount === 1 ? 'filtro ativo' : 'filtros ativos'}
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={resetFilters}
                className="text-slate-500"
              >
                Limpar filtros
                <X className="h-4 w-4 ml-1" />
              </Button>
            </div>
          )}
        </div>

        {/* Events Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedEvents.map(event => {
            const coverBg = getThemeColor(event.theme);
            const hasCoverImage = event.imageUrl && event.imageUrl !== "/imgs/events/default-event.jpg";
            const eventImage = generateEventImage(event);
            const sponsors = event.sponsors ? formatSponsors(event.sponsors) : [];
            
            return (
              <div 
                key={event.id} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col"
              >
                {/* Header with status badges - Similar to reference image */}
                <div className="bg-slate-50 p-3 pb-2.5 flex items-center justify-between">
                  <div className="flex-shrink-0">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-xs font-semibold text-white",
                      event.status === "coming-soon" ? "bg-amber-500" : 
                      event.status === "open" ? "bg-green-500" : "bg-slate-600"
                    )}>
                      {event.status === "coming-soon" ? "Em breve" : 
                       event.status === "open" ? "Inscrições abertas" : "Realizado"}
                    </span>
                  </div>
                  
                  {event.year && (
                    <div className="flex-shrink-0">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-700 text-white">
                        {event.year}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Red Startup Weekend Title */}
                <div className="text-center pt-1 pb-2 bg-slate-50">
                  <h3 className="text-red-600 font-bold text-sm uppercase tracking-wider">
                    STARTUP WEEKEND
                  </h3>
                </div>
                
                {/* Event Title + Location (below cover) */}
                <div className="px-6 pt-4 pb-4 text-center">
                  <h2 className="text-xl font-bold text-slate-900 mb-2.5">
                    {event.title}
                  </h2>
                  <div className="flex justify-center items-center text-slate-700 mb-2">
                    <MapPin className="h-4 w-4 mr-1.5 text-slate-500" />
                    <span className="font-medium">{event.city}</span>
                  </div>
                </div>
                
                {/* Theme pill */}
                <div className="flex justify-center -mt-1 mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 shadow-sm">
                    <Tag className="h-3 w-3 mr-1" />
                    {event.theme}
                  </span>
                </div>
                
                {/* Divider */}
                <div className="border-t border-slate-100 mx-3 mb-3"></div>

                {/* Card Body with details */}
                <div className="px-6 pt-1 pb-3 flex-grow flex flex-col space-y-3">
                  {/* Date */}
                  <div className="flex items-center text-slate-700 text-sm">
                    <CalendarDays className="h-4 w-4 mr-2.5 text-slate-500 flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  
                  {/* Venue */}
                  {event.venue && (
                    <div className="flex items-start text-slate-700 text-sm">
                      <Building className="h-4 w-4 mr-2.5 text-slate-500 flex-shrink-0 mt-0.5" />
                      <span>{event.venue}</span>
                    </div>
                  )}
                  
                  {/* Participants */}
                  {event.status !== "past" && event.remainingSeats !== undefined && event.totalSeats !== undefined ? (
                    <div className="flex items-center text-slate-700 text-sm">
                      <Users className="h-4 w-4 mr-2.5 text-slate-500 flex-shrink-0" />
                      <div>
                        <span className="text-red-600 font-semibold">{event.remainingSeats}</span>
                        <span className="text-slate-700">/{event.totalSeats} vagas</span>
                      </div>
                    </div>
                  ) : event.participants && (
                    <div className="flex items-center text-slate-700 text-sm">
                      <Users className="h-4 w-4 mr-2.5 text-slate-500 flex-shrink-0" />
                      <span>{event.participants} participantes</span>
                    </div>
                  )}
                </div>
                
                {/* Partners/Sponsors section - Enhanced with logos/icons */}
                {sponsors.length > 0 && (
                  <div className="px-6 pb-4">
                    <div className="flex items-start mb-1">
                      <span className="text-sm font-medium text-slate-700">Parceiros:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {sponsors.map((sponsor, idx) => (
                        <div 
                          key={idx} 
                          className="bg-slate-100 text-slate-700 text-xs py-1 px-2 rounded flex items-center"
                        >
                          <Briefcase className="h-3 w-3 mr-1 text-slate-500" />
                          {sponsor.trim()}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Winner section for past events */}
                {event.status === "past" && event.winners && (
                  <div className="px-6 pt-1 pb-4 border-t border-slate-100">
                    <div className="flex items-start">
                      <Trophy className="h-4 w-4 mr-2.5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <span className="font-medium text-amber-700 block mb-1">Vencedores:</span>
                        <span className="text-sm text-slate-700">{event.winners}</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Card Footer */}
                <div className="p-4 border-t border-slate-100 mt-auto">
                  {event.status !== "past" ? (
                    <Button 
                      className={cn(
                        "w-full",
                        event.status === "open" 
                          ? "bg-red-600 hover:bg-red-700 text-white" 
                          : "bg-amber-500 text-white"
                      )}
                      disabled={event.status !== "open"}
                    >
                      {event.status === "open" ? "Inscrever-se" : "Em breve"}
                      {event.status === "open" && <ExternalLink className="h-4 w-4 ml-2" />}
                    </Button>
                  ) : (
                    <div className="text-sm text-slate-600 flex items-center justify-center">
                      <Clock3 className="h-4 w-4 mr-2 text-slate-400" />
                      <span>Evento já realizado</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-10 space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="border-slate-200"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className={currentPage === page ? "bg-red-600 hover:bg-red-700 text-white" : "border-slate-200"}
              >
                {page}
              </Button>
            ))}
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="border-slate-200"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* If no events match filters */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-100 shadow-sm">
            <p className="text-slate-500 mb-4">Nenhum evento encontrado com os filtros selecionados.</p>
            <Button 
              variant="outline" 
              onClick={resetFilters}
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            >
              Limpar filtros
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
