import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Search, 
  Building, 
  Tag, 
  Calendar, 
  Info,
  ChevronDown,
  Check,
  X,
  Clock
} from "lucide-react";
import { EventStatus, EventTheme, EventFilter } from "@/modules/events/types";

interface EventFiltersProps {
  filter: EventFilter;
  onFilterChange: (filter: EventFilter) => void;
  onSearchChange: (search: string) => void;
  onShowPastChange: (showPast: boolean) => void;
  onResetFilters: () => void;
  searchQuery: string;
  showPastEvents: boolean;
  cities: string[];
  themes: (EventTheme | string)[];
  years: number[];
  activeFiltersCount: number;
}

const EventFilters = ({
  filter,
  onFilterChange,
  onSearchChange,
  onShowPastChange,
  onResetFilters,
  searchQuery,
  showPastEvents,
  cities,
  themes,
  years,
  activeFiltersCount
}: EventFiltersProps) => {
  const statusLabels: Record<EventStatus, string> = {
    "upcoming": "Em breve",
    "active": "Inscrições abertas",
    "past": "Realizado"
  };

  return (
    <div className="mb-8">
      {/* Search bar */}
      <div className="mb-6 max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Buscar por título, cidade ou tema..."
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            className="pl-10 py-2 border-slate-300 focus:border-red-600 focus:ring focus:ring-red-100"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onSearchChange("")}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 text-slate-400 hover:text-slate-600"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Main filters row */}
      <div className="flex flex-wrap justify-between items-center mb-4">
        <div className="flex gap-2 flex-wrap mb-2 md:mb-0">
          {/* City dropdown filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Building className="h-4 w-4 text-slate-500" />
                {filter.city ? `Cidade: ${filter.city}` : "Todas as cidades"}
                <ChevronDown className="h-3 w-3 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 max-h-[60vh] overflow-y-auto">
              <DropdownMenuLabel>Cidades</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup 
                value={filter.city || ""} 
                onValueChange={(value) => onFilterChange({...filter, city: value || null})}
              >
                <DropdownMenuRadioItem value="">
                  Todas as cidades
                  {!filter.city && <Check className="h-4 w-4 ml-auto" />}
                </DropdownMenuRadioItem>
                {cities.map(city => (
                  <DropdownMenuRadioItem key={city} value={city}>
                    {city}
                    {filter.city === city && <Check className="h-4 w-4 ml-auto" />}
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
                {filter.theme ? `Tema: ${filter.theme.split(' ')[0]}` : "Todos os temas"}
                <ChevronDown className="h-3 w-3 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 max-h-[60vh] overflow-y-auto">
              <DropdownMenuLabel>Temas</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup 
                value={filter.theme || ""} 
                onValueChange={(value) => onFilterChange({...filter, theme: value as EventTheme || null})}
              >
                <DropdownMenuRadioItem value="">
                  Todos os temas
                  {!filter.theme && <Check className="h-4 w-4 ml-auto" />}
                </DropdownMenuRadioItem>
                {themes.map(theme => (
                  <DropdownMenuRadioItem key={theme} value={theme}>
                    {theme}
                    {filter.theme === theme && <Check className="h-4 w-4 ml-auto" />}
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
                {filter.year ? `Ano: ${filter.year}` : "Todos os anos"}
                <ChevronDown className="h-3 w-3 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>Ano</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup 
                value={filter.year ? filter.year.toString() : ""} 
                onValueChange={(value) => {
                  const year = value ? parseInt(value) : null;
                  onFilterChange({...filter, year});
                  if (year !== null) {
                    onShowPastChange(true);
                  }
                }}
              >
                <DropdownMenuRadioItem value="">
                  Todos os anos
                  {!filter.year && <Check className="h-4 w-4 ml-auto" />}
                </DropdownMenuRadioItem>
                {years.map(year => (
                  <DropdownMenuRadioItem key={year} value={year.toString()}>
                    {year}
                    {filter.year === year && <Check className="h-4 w-4 ml-auto" />}
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
                {filter.status ? `Status: ${statusLabels[filter.status]}` : "Todos os status"}
                <ChevronDown className="h-3 w-3 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup 
                value={filter.status || ""} 
                onValueChange={(value) => onFilterChange({...filter, status: value as EventStatus || null})}
              >
                <DropdownMenuRadioItem value="">
                  Todos os status
                  {!filter.status && <Check className="h-4 w-4 ml-auto" />}
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="active" className="text-green-600">
                  {statusLabels.active}
                  {filter.status === "active" && <Check className="h-4 w-4 ml-auto" />}
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="upcoming" className="text-amber-500">
                  {statusLabels.upcoming}
                  {filter.status === "upcoming" && <Check className="h-4 w-4 ml-auto" />}
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={showPastEvents}
                onCheckedChange={onShowPastChange}
                className="flex items-center"
              >
                <Clock className="mr-2 h-4 w-4" />
                Mostrar eventos anteriores
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Active filters summary and reset */}
      {activeFiltersCount > 0 && (
        <div className="flex justify-between items-center bg-white rounded-lg p-2 shadow-sm">
          <div className="text-sm text-slate-600">
            <span className="font-semibold">{activeFiltersCount}</span> {activeFiltersCount === 1 ? 'filtro ativo' : 'filtros ativos'}
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onResetFilters}
            className="text-slate-500"
          >
            Limpar filtros
            <X className="h-4 w-4 ml-1" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default EventFilters; 