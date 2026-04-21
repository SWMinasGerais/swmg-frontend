import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/shared/SectionTitle";
import SectionTemplate from "@/components/layout/SectionTemplate";
import EventFilters from "@/features/events/components/EventFilters";
import EventsGrid from "@/features/events/components/EventsGrid";
import EventsPagination from "@/features/events/components/EventsPagination";
import { events } from "@/modules/events/data";
import { EventFilter, EventStatus, EventTheme, Event } from "@/modules/events/types";
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
  // State for filters
  const [filter, setFilter] = useState<EventFilter>({});
  const [showPastEvents, setShowPastEvents] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<"recent" | "oldest">("recent");

  // Get unique cities, themes and years for filters
  const allCities = Array.from(new Set(events.map(event => event.city))).sort();
  const allThemes = Array.from(new Set(events.map(event => event.theme).filter(Boolean))) as EventTheme[];
  const uniqueYears = Array.from(
    new Set(
      events
        .map(event => new Date(event.date).getFullYear())
    )
  ).sort((a, b) => b - a) as number[];

  // Filter events based on all filters
  const filteredEvents = events.filter(event => {
    // Filter out past events unless specifically showing them
    if (event.status === "past" && !showPastEvents) return false;
    
    // City filter
    if (filter.city && event.city !== filter.city) return false;
    
    // Theme filter
    if (filter.theme && event.theme !== filter.theme) return false;
    
    // Year filter
    if (filter.year && new Date(event.date).getFullYear() !== filter.year) return false;
    
    // Status filter
    if (filter.status && event.status !== filter.status) return false;
    
    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesTitle = event.title.toLowerCase().includes(query);
      const matchesCity = event.city.toLowerCase().includes(query);
      const matchesTheme = event.theme?.toLowerCase().includes(query) || false;
      const matchesLocation = event.location?.toLowerCase().includes(query) || false;
      
      if (!(matchesTitle || matchesCity || matchesTheme || matchesLocation)) {
        return false;
      }
    }
    
    return true;
  });

  // Sort events
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    
    if (sortBy === "recent") {
      return dateB.getTime() - dateA.getTime();
    } else {
      return dateA.getTime() - dateB.getTime();
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedEvents.length / EVENTS_PER_PAGE);
  const paginatedEvents = sortedEvents.slice(
    (currentPage - 1) * EVENTS_PER_PAGE,
    currentPage * EVENTS_PER_PAGE
  );

  // Reset current page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filter, showPastEvents, searchQuery, sortBy]);

  // Reset all filters
  const resetFilters = () => {
    setFilter({});
    setShowPastEvents(false);
    setSearchQuery("");
    setSortBy("recent");
    setCurrentPage(1);
  };

  // Count active filters
  const activeFiltersCount = [
    filter.city, 
    filter.status, 
    showPastEvents, 
    searchQuery, 
    filter.theme, 
    filter.year, 
    sortBy !== "recent"
  ].filter(Boolean).length;

  return (
    <SectionTemplate id="eventos" spacing="lg" className="[background-color:#FAF9F6]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle
          eyebrow="Próximos Eventos"
          title="Calendário Startup Weekend MG"
          description="Encontre o próximo Startup Weekend em Minas Gerais e transforme sua ideia em realidade em apenas um fim de semana."
          align="center"
        />
      </motion.div>

      {/* Filters */}
      <EventFilters 
        filter={filter}
        onFilterChange={setFilter}
        onSearchChange={setSearchQuery}
        onShowPastChange={setShowPastEvents}
        onResetFilters={resetFilters}
        searchQuery={searchQuery}
        showPastEvents={showPastEvents}
        cities={allCities}
        themes={allThemes}
        years={uniqueYears}
        activeFiltersCount={activeFiltersCount}
      />

      {/* Events Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <EventsGrid
          events={paginatedEvents}
          onResetFilters={resetFilters}
        />
      </motion.div>

        {/* Pagination */}
      <EventsPagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </SectionTemplate>
  );
};

export default EventsSection;
