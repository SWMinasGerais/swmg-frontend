import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  MapPin, 
  Building, 
  GraduationCap, 
  LightbulbIcon, 
  DollarSign,
  ArrowRight,
  X
} from "lucide-react";
import useEcosystemasList, { useEcosystemaDetail } from "@/modules/ecosistemas/ecosistemas.hook";
import { EntityType } from "@/modules/ecosistemas/ecosistemas.type";
import SectionTitle from "@/components/shared/SectionTitle";
import SearchInput from "@/components/shared/SearchInput";
import FilterButton from "@/components/shared/FilterButton";
import FilterGroup from "@/components/shared/FilterGroup";
import EntityList from "@/features/ecosystem/components/EntityList";

const EcosystemSection = () => {
  const {
    ecosystems,
    isLoading,
    isError,
    searchTerm,
    setSearchTerm,
    selectedType,
    setSelectedType,
    selectedCity,
    setSelectedCity,
    cities,
    resetFilters
  } = useEcosystemasList(1, 100); // Get all entities to display on map
  
  const [hoveredEntity, setHoveredEntity] = useState<number | null>(null);
  
  // Get detail for hovered entity
  const { 
    ecosystem: hoveredEntityDetail, 
    isLoading: isHoveredLoading 
  } = useEcosystemaDetail(hoveredEntity || 0);

  // Entity type config with icons and labels
  const entityTypeConfig = useMemo(() => ({
    hub: { 
      icon: <LightbulbIcon className="h-4 w-4" />, 
      label: "Hubs de Inovação",
      color: "text-indigo-600 bg-indigo-100" 
    },
    accelerator: { 
      icon: <Building className="h-4 w-4" />, 
      label: "Aceleradoras",
      color: "text-green-600 bg-green-100" 
    },
    investor: { 
      icon: <DollarSign className="h-4 w-4" />, 
      label: "Investidores",
      color: "text-amber-600 bg-amber-100" 
    },
    university: { 
      icon: <GraduationCap className="h-4 w-4" />, 
      label: "Universidades",
      color: "text-blue-600 bg-blue-100" 
    },
    partner: { 
      icon: <Building className="h-4 w-4" />, 
      label: "Parceiros Institucionais",
      color: "text-purple-600 bg-purple-100" 
    }
  }), []);

  // Filter options for entity types
  const entityTypeOptions = useMemo(() => 
    Object.entries(entityTypeConfig).map(([type, config]) => ({
      id: type,
      label: config.label,
      icon: config.icon
    })),
  [entityTypeConfig]);

  // Filter options for cities
  const cityOptions = useMemo(() => 
    cities.map(city => ({
      id: city,
      label: city,
      icon: <MapPin className="h-4 w-4" />
    })),
  [cities]);

  // Loading skeleton for ecosystem map
  if (isLoading) {
    return (
      <section id="ecossistema" className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Skeleton className="h-4 w-32 mx-auto mb-3" />
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-16 w-full max-w-2xl mx-auto" />
          </div>
          
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {Array(5).fill(0).map((_, i) => (
              <Skeleton key={i} className="h-8 w-24" />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-2 h-[500px]">
              <Skeleton className="w-full h-full rounded-lg" />
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 h-[500px]">
              <Skeleton className="h-8 w-48 mb-4" />
              <div className="space-y-4">
                {Array(5).fill(0).map((_, i) => (
                  <Skeleton key={i} className="h-16 w-full" />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Skeleton className="h-10 w-48 mx-auto" />
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (isError) {
    return (
      <section id="ecossistema" className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-swmg-dark mb-4">
              Oops! Algo deu errado
            </h2>
            <p className="text-gray-600 mb-8">
              Não foi possível carregar os dados do ecossistema. Por favor, tente novamente mais tarde.
            </p>
            <Button 
              onClick={() => window.location.reload()} 
              className="bg-swmg-primary hover:bg-swmg-dark text-white"
            >
              Tentar novamente
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="ecossistema" className="py-12">
      <div className="container mx-auto px-4">
        <SectionTitle 
          eyebrow="Ecossistema"
          title="Mapa de Inovação Mineiro"
          description="Conheça os principais atores do ecossistema empreendedor de Minas Gerais, conectados através do Circuito Mineiro de Startup Weekend."
          align="center"
        />

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          {/* Search box */}
          <div className="relative w-full max-w-md">
            <SearchInput
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Buscar no ecossistema..."
            />
          </div>

          {/* Filter by city - only show if we have cities */}
          {cities.length > 0 && (
            <select
              value={selectedCity || ""}
              onChange={(e) => setSelectedCity(e.target.value || null)}
              className="px-3 py-2 rounded-md border border-gray-200 text-sm"
            >
              <option value="">Todas as cidades</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          )}
          
          {/* Reset filters button - only show if any filter is active */}
          {(searchTerm || selectedType || selectedCity) && (
            <Button
              variant="outline"
              size="sm"
              onClick={resetFilters}
              className="flex items-center gap-1"
            >
              <X className="h-3 w-3" /> 
              Limpar filtros
            </Button>
          )}
        </div>

        {/* Ecosystem Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          <FilterButton 
            isActive={selectedType === null}
            onClick={() => setSelectedType(null)}
          >
            Todos
          </FilterButton>
          
          {entityTypeOptions.map(option => (
            <FilterButton 
              key={option.id.toString()}
              isActive={selectedType === option.id}
              onClick={() => setSelectedType(option.id as EntityType)}
              icon={option.icon}
            >
              {option.label}
            </FilterButton>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Interactive Map (left column on desktop) */}
          <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-2 h-[500px] relative">
            {/* This would be replaced with an actual map integration like Google Maps or Mapbox */}
            <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
              {/* Simplified placeholder for a real map */}
              <div className="absolute inset-0 bg-[url('/imgs/mg-map-outline.png')] bg-contain bg-center bg-no-repeat opacity-20"></div>
              
              <div className="text-center px-6">
                <p className="text-gray-500 mb-4 flex flex-col items-center gap-2">
                  <MapPin className="h-5 w-5 text-swmg-primary" />
                  Em breve: mapa interativo com todos os atores do ecossistema mineiro de inovação.
                </p>
                
                {/* Placeholder for map markers */}
                {ecosystems.map(entity => (
                  <div 
                    key={entity.id}
                    className="inline-block m-2"
                    onMouseEnter={() => setHoveredEntity(entity.id)}
                    onMouseLeave={() => setHoveredEntity(null)}
                  >
                    <span 
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs ${
                        entityTypeConfig[entity.type].color
                      }`}
                    >
                      <MapPin className="h-3 w-3 mr-1" />
                      {entity.name}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Hover tooltip - would show on map marker hover in real implementation */}
              {hoveredEntityDetail && (
                <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg max-w-xs z-10">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center mr-3 flex-shrink-0">
                      <img 
                        src={hoveredEntityDetail.logo} 
                        alt={hoveredEntityDetail.name}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/80x80/eef/046?text=Logo";
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-swmg-dark">{hoveredEntityDetail.name}</h4>
                      <p className="text-xs text-gray-500 mb-1">{hoveredEntityDetail.city}</p>
                      <p className="text-xs text-gray-600">{hoveredEntityDetail.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Entities List (right column on desktop) */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6 h-[500px] overflow-y-auto">
            <h3 className="font-bold text-lg text-swmg-dark mb-4">
              {selectedType 
                ? entityTypeConfig[selectedType].label 
                : "Todos os Parceiros"}
            </h3>
            
            <EntityList
              entities={ecosystems}
              typeConfig={Object.fromEntries(
                Object.entries(entityTypeConfig).map(([type, config]) => [
                  type, 
                  { 
                    icon: config.icon,
                    color: config.color
                  }
                ])
              )}
              onEntityHover={setHoveredEntity}
              emptyMessage={
                <div className="text-center py-8">
                  <p className="text-gray-500">Nenhuma entidade encontrada com os filtros selecionados.</p>
                  <Button 
                    variant="link" 
                    onClick={resetFilters}
                    className="mt-2 text-swmg-primary"
                  >
                    Limpar filtros
                  </Button>
                </div>
              }
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 text-center">
          <a href="/ecossistema">
            <Button className="bg-swmg-primary hover:bg-swmg-dark text-white group">
              Ver diretório completo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
