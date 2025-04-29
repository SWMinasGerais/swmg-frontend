import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  MapPin, 
  Building, 
  GraduationCap, 
  LightbulbIcon, 
  DollarSign,
  ArrowRight,
  Search,
  X
} from "lucide-react";
import useEcosystemasList, { useEcosystemaDetail } from "@/modules/ecosistemas/ecosistemas.hook";
import { EntityType } from "@/modules/ecosistemas/ecosistemas.type";

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

  // Dynamic class based on entity type
  const getEntityTypeClass = (type: EntityType) => {
    return entityTypeConfig[type]?.color || "";
  };

  // Loading skeleton for ecosystem map
  if (isLoading) {
    return (
      <section id="ecossistema" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
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

          <div className="mt-12 text-center">
            <Skeleton className="h-10 w-48 mx-auto" />
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (isError) {
    return (
      <section id="ecossistema" className="py-20">
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
    <section id="ecossistema" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="text-swmg-primary font-medium mb-3 inline-flex items-center">
            <div className="w-8 h-1 bg-swmg-secondary mr-2"></div>
            Ecossistema
          </h5>
          <h2 className="text-3xl md:text-4xl font-bold text-swmg-dark mb-4">
            Mapa de Inovação Mineiro
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça os principais atores do ecossistema empreendedor de Minas Gerais,
            conectados através do Circuito Mineiro de Startup Weekend.
          </p>
            </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          {/* Search box */}
          <div className="relative w-full max-w-md">
            <Input
              type="text"
              placeholder="Buscar no ecossistema..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-10 py-2 w-full bg-white/80 backdrop-blur-sm border-slate-100/50"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
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
          <Button 
            variant={selectedType === null ? "default" : "outline"} 
            size="sm"
            onClick={() => setSelectedType(null)}
            className={selectedType === null ? "bg-swmg-primary text-white" : ""}
          >
            Todos
          </Button>
          
          {Object.entries(entityTypeConfig).map(([type, config]) => (
            <Button 
              key={type} 
              variant={selectedType === type ? "default" : "outline"} 
              size="sm"
              onClick={() => setSelectedType(type as EntityType)}
              className={selectedType === type ? "bg-swmg-primary text-white" : ""}
            >
              <span className="mr-1">{config.icon}</span>
              {config.label}
            </Button>
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
                <p className="text-gray-500 mb-4">
                  Aqui seria integrado um mapa interativo mostrando todos os atores 
                  do ecossistema em suas respectivas localizações. 
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
                        getEntityTypeClass(entity.type)
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
            
            <div className="space-y-4">
              {ecosystems.map(entity => (
                <div 
                  key={entity.id} 
                  className="p-3 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow flex items-center"
                  onMouseEnter={() => setHoveredEntity(entity.id)}
                  onMouseLeave={() => setHoveredEntity(null)}
                >
                  <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center mr-3 flex-shrink-0">
                    <img 
                      src={entity.logo} 
                      alt={entity.name}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/80x80/eef/046?text=Logo";
                      }}
                    />
                </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-swmg-dark truncate">{entity.name}</h4>
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 text-gray-400 mr-1" />
                      <p className="text-xs text-gray-500">{entity.city}</p>
              </div>
                </div>
                  <div className="flex-shrink-0">
                    <span 
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${
                        getEntityTypeClass(entity.type)
                      }`}
                    >
                      {entityTypeConfig[entity.type].icon}
                      <span className="ml-1 hidden sm:inline">{entity.type}</span>
                    </span>
              </div>
                </div>
              ))}
              
              {ecosystems.length === 0 && (
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
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
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
