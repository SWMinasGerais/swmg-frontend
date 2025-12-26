import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  MapPin, 
  Check,
  X,
  ChevronDown,
  ChevronUp,
  RotateCcw
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ExpertiseArea } from "@/modules/mentors/types";

interface MentorFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedArea: ExpertiseArea | null;
  onAreaChange: (area: ExpertiseArea | null) => void;
  selectedRegion: string | null;
  onRegionChange: (region: string | null) => void;
  availableOnly: boolean | null;
  onAvailableChange: (available: boolean | null) => void;
  onResetFilters: () => void;
  activeFiltersCount: number;
  areas: ExpertiseArea[];
  regions: string[];
}

const MentorFilters = ({
  searchTerm,
  onSearchChange,
  selectedArea,
  onAreaChange,
  selectedRegion,
  onRegionChange,
  availableOnly,
  onAvailableChange,
  onResetFilters,
  activeFiltersCount,
  areas,
  regions
}: MentorFiltersProps) => {
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  return (
    <div className="mb-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-100/50 p-6">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Barra de pesquisa */}
        <div className="flex-grow relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
          <Input 
            type="text" 
            placeholder="Buscar mentores por nome..." 
            className="pl-10 py-6 border-slate-200 rounded-xl"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        
        {/* Botão de filtros - Mobile */}
        <div className="md:hidden">
          <Button 
            variant={showFiltersMobile ? "default" : "outline"}
            className={`w-full border-slate-200 flex items-center justify-between ${
              showFiltersMobile ? "bg-red-600 hover:bg-red-700 text-white" : ""
            }`}
            onClick={() => setShowFiltersMobile(!showFiltersMobile)}
          >
            <div className="flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              <span>Filtrar</span>
            </div>
            {activeFiltersCount > 0 && (
              <Badge className={`ml-2 ${showFiltersMobile ? "bg-white text-red-600" : "bg-red-600 text-white"}`}>
                {activeFiltersCount}
              </Badge>
            )}
            {showFiltersMobile ? <ChevronUp className="h-4 w-4 ml-2" /> : <ChevronDown className="h-4 w-4 ml-2" />}
          </Button>
        </div>
        
        {/* Botão de reset filtros - Desktop */}
        <div className="hidden md:flex">
          {activeFiltersCount > 0 ? (
            <Button 
              variant="outline" 
              className="border-slate-200 text-slate-700 hover:bg-red-50 hover:border-red-500 hover:text-red-600"
              onClick={onResetFilters}
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Limpar filtros ({activeFiltersCount})
            </Button>
          ) : (
            <Button 
              variant="outline" 
              className="border-slate-200 text-slate-500"
              disabled
            >
              <Filter className="h-4 w-4 mr-2" />
              Sem filtros ativos
            </Button>
          )}
        </div>
      </div>
      
      {/* Filtros para Mobile - mostra quando expandido */}
      {showFiltersMobile && (
        <div className="md:hidden bg-slate-50 rounded-xl border border-slate-200 p-4 mb-4 space-y-4">
          {/* Filtro por disponibilidade */}
          <div>
            <label className="text-sm font-medium text-slate-900 mb-2 block">Disponibilidade</label>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                className={`border-slate-200 ${availableOnly === true ? "bg-red-600 text-white border-red-600" : ""}`}
                onClick={() => onAvailableChange(availableOnly === true ? null : true)}
              >
                <Check className={`h-3 w-3 mr-1 ${availableOnly === true ? "" : "text-green-600"}`} />
                Disponíveis
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className={`border-slate-200 ${availableOnly === false ? "bg-red-600 text-white border-red-600" : ""}`}
                onClick={() => onAvailableChange(availableOnly === false ? null : false)}
              >
                <X className={`h-3 w-3 mr-1 ${availableOnly === false ? "" : "text-slate-500"}`} />
                Todos
              </Button>
            </div>
          </div>
          
          {/* Filtro por Região */}
          <div>
            <label className="text-sm font-medium text-slate-900 mb-2 block">Região</label>
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <Button 
                  key={region} 
                  variant="outline" 
                  size="sm"
                  className={`border-slate-200 ${selectedRegion === region ? "bg-red-600 text-white border-red-600" : ""}`}
                  onClick={() => onRegionChange(selectedRegion === region ? null : region)}
                >
                  {region}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Filtro por Área */}
          <div>
            <label className="text-sm font-medium text-slate-900 mb-2 block">Área de Expertise</label>
            <div className="flex flex-wrap gap-2">
              {areas.map((area) => (
                <Button 
                  key={area} 
                  variant="outline" 
                  size="sm"
                  className={`border-slate-200 ${selectedArea === area ? "bg-red-600 text-white border-red-600" : ""}`}
                  onClick={() => onAreaChange(selectedArea === area ? null : area)}
                >
                  {area}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Botões de ação */}
          <div className="flex gap-2 pt-2">
            <Button 
              variant="outline" 
              className="flex-1 border-slate-200"
              onClick={() => {
                onResetFilters();
                setShowFiltersMobile(false);
              }}
              disabled={activeFiltersCount === 0}
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Limpar
            </Button>
            <Button 
              className="flex-1 bg-red-600 hover:bg-red-700 text-white"
              onClick={() => setShowFiltersMobile(false)}
            >
              Aplicar
            </Button>
          </div>
        </div>
      )}
      
      {/* Filtros para Desktop - sempre visíveis */}
      <div className="hidden md:block">
        <div className="flex flex-wrap gap-2 mb-4">
          {/* Filtro por disponibilidade */}
          <Button 
            variant="outline" 
            className={`border-slate-200 ${availableOnly === true ? "bg-red-600 text-white border-red-600 hover:bg-red-700" : "hover:border-red-600 hover:text-red-600 hover:bg-red-50"}`}
            onClick={() => onAvailableChange(availableOnly === true ? null : true)}
          >
            <Check className={`h-4 w-4 mr-2 ${availableOnly === true ? "" : "text-green-600"}`} />
            Disponíveis para mentoria
          </Button>
          
          {/* Filtros de regiões mais populares */}
          {regions.slice(0, 4).map((region) => (
            <Button 
              key={region} 
              variant="outline" 
              className={`border-slate-200 ${selectedRegion === region ? "bg-red-600 text-white border-red-600 hover:bg-red-700" : "hover:border-red-600 hover:text-red-600 hover:bg-red-50"}`}
              onClick={() => onRegionChange(selectedRegion === region ? null : region)}
            >
              <MapPin className={`h-4 w-4 mr-1 ${selectedRegion === region ? "" : "text-slate-400"}`} />
              {region}
            </Button>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {/* Filtros de áreas mais populares */}
          {areas.map((area) => (
            <Button 
              key={area} 
              variant="outline" 
              size="sm"
              className={`border-slate-200 ${selectedArea === area ? "bg-red-600 text-white border-red-600 hover:bg-red-700" : "hover:border-red-600 hover:text-red-600 hover:bg-red-50"}`}
              onClick={() => onAreaChange(selectedArea === area ? null : area)}
            >
              {area}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorFilters; 