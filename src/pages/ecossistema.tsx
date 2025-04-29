import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  MapPin, 
  Building, 
  GraduationCap, 
  LightbulbIcon, 
  DollarSign,
  ExternalLink,
  Search,
  X,
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import useEcosystemasList from "@/modules/ecosistemas/ecosistemas.hook";
import { EntityType } from "@/modules/ecosistemas/ecosistemas.type";

// Config for entity types with icons, labels and colors
const entityTypeConfig = {
  hub: { 
    icon: <LightbulbIcon className="h-4 w-4" />, 
    label: "Hubs de Inovação",
    color: "text-indigo-600 bg-indigo-100 border-indigo-200" 
  },
  accelerator: { 
    icon: <Building className="h-4 w-4" />, 
    label: "Aceleradoras",
    color: "text-green-600 bg-green-100 border-green-200" 
  },
  investor: { 
    icon: <DollarSign className="h-4 w-4" />, 
    label: "Investidores",
    color: "text-amber-600 bg-amber-100 border-amber-200" 
  },
  university: { 
    icon: <GraduationCap className="h-4 w-4" />, 
    label: "Universidades",
    color: "text-blue-600 bg-blue-100 border-blue-200" 
  },
  partner: { 
    icon: <Building className="h-4 w-4" />, 
    label: "Parceiros Institucionais",
    color: "text-purple-600 bg-purple-100 border-purple-200" 
  }
};

const EcosistemaPage = () => {
  const [showFilters, setShowFilters] = useState(false);
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
    resetFilters,
    total,
    page,
    totalPages,
    goToPage,
    previousPage,
    nextPage,
    hasNextPage,
    hasPreviousPage
  } = useEcosystemasList(1, 12); // 12 items per page for the directory

  // Get entity type display data
  const getEntityTypeInfo = (type: EntityType) => {
    return entityTypeConfig[type] || { 
      icon: <Building className="h-4 w-4" />, 
      label: type,
      color: "text-gray-600 bg-gray-100 border-gray-200"
    };
  };

  // Count active filters
  const activeFilterCount = [
    !!selectedType,
    !!selectedCity,
    !!searchTerm
  ].filter(Boolean).length;

  // Custom pagination component
  const CustomPagination = () => {
    // Generate page numbers to display
    const generatePageNumbers = () => {
      const pageNumbers = [];
      const siblingCount = 1;
      const leftSiblingIndex = Math.max(page - siblingCount, 1);
      const rightSiblingIndex = Math.min(page + siblingCount, totalPages);

      // Add ellipsis if needed
      const shouldShowLeftDots = leftSiblingIndex > 2;
      const shouldShowRightDots = rightSiblingIndex < totalPages - 1;
      
      if (shouldShowLeftDots && shouldShowRightDots) {
        // Case: Show left and right dots
        pageNumbers.push(1);
        if (shouldShowLeftDots) pageNumbers.push('...');
        for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
          pageNumbers.push(i);
        }
        if (shouldShowRightDots) pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (!shouldShowLeftDots && shouldShowRightDots) {
        // Case: Show only right dots
        for (let i = 1; i <= rightSiblingIndex; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (shouldShowLeftDots && !shouldShowRightDots) {
        // Case: Show only left dots
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = leftSiblingIndex; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // Case: Show all pages
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      }

      return pageNumbers;
    };

    return (
      <div className="flex items-center justify-center space-x-2">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={previousPage} 
          disabled={!hasPreviousPage}
          className="h-8 w-8"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Página anterior</span>
        </Button>

        <div className="flex items-center">
          {generatePageNumbers().map((pageNumber, index) => (
            typeof pageNumber === 'number' ? (
              <Button
                key={index}
                variant={pageNumber === page ? "default" : "outline"}
                size="sm"
                onClick={() => goToPage(pageNumber)}
                className={`h-8 w-8 ${pageNumber === page ? "bg-swmg-primary text-white" : ""}`}
              >
                {pageNumber}
              </Button>
            ) : (
              <span key={index} className="px-2">
                {pageNumber}
              </span>
            )
          ))}
        </div>

        <Button 
          variant="outline" 
          size="icon" 
          onClick={nextPage} 
          disabled={!hasNextPage}
          className="h-8 w-8"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Próxima página</span>
        </Button>
      </div>
    );
  };

  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-swmg-light to-white pt-28 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-swmg-dark mb-4">
                Ecossistema de Inovação Mineiro
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Conheça os principais atores do ecossistema empreendedor de Minas Gerais,
                conectados através do Circuito Mineiro de Startup Weekend.
              </p>
              
              {/* Search and Filter Bar */}
              <div className="bg-white p-4 rounded-xl shadow-md">
                <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
                  {/* Search Input */}
                  <div className="relative flex-1">
                    <Input
                      type="text"
                      placeholder="Buscar no ecossistema..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-10 py-2 w-full"
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
                  
                  {/* Filter Toggle Button */}
                  <Button 
                    variant={activeFilterCount > 0 ? "default" : "outline"}
                    className={`${
                      activeFilterCount > 0 ? "bg-swmg-primary text-white" : ""
                    } flex items-center gap-2`}
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter className="h-4 w-4" />
                    <span>Filtros</span>
                    {activeFilterCount > 0 && (
                      <span className="bg-white text-swmg-primary text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                        {activeFilterCount}
                      </span>
                    )}
                    <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                  </Button>
                </div>
                
                {/* Expanded Filter Options */}
                {showFilters && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Type Filter */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tipo de Entidade
                        </label>
                        <div className="flex flex-wrap gap-2">
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
                      </div>
                      
                      {/* City Filter */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Cidade
                        </label>
                        <select
                          value={selectedCity || ""}
                          onChange={(e) => setSelectedCity(e.target.value || null)}
                          className="w-full px-3 py-2 rounded-md border border-gray-200 text-sm"
                        >
                          <option value="">Todas as cidades</option>
                          {cities.map(city => (
                            <option key={city} value={city}>{city}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    {/* Reset Filters */}
                    {activeFilterCount > 0 && (
                      <div className="mt-4 text-right">
                        <Button
                          variant="link"
                          size="sm"
                          onClick={resetFilters}
                          className="text-swmg-primary"
                        >
                          <X className="h-3 w-3 mr-1" /> 
                          Limpar todos os filtros
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Directory Listing */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-swmg-dark">
                <span className="text-swmg-secondary">
                  {total}
                </span> {
                  total === 1 
                    ? 'entidade encontrada' 
                    : 'entidades encontradas'
                }
              </h2>
              
              {/* View Toggle (could be implemented for map/list view) */}
              <div>
                {/* <Button variant="outline" size="sm">Grid</Button>
                <Button variant="outline" size="sm">Map</Button> */}
              </div>
            </div>
            
            {/* Loading State */}
            {isLoading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array(6).fill(0).map((_, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                    <div className="flex items-start">
                      <Skeleton className="w-16 h-16 rounded mr-4" />
                      <div className="flex-1">
                        <Skeleton className="h-6 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-1/2 mb-2" />
                        <Skeleton className="h-4 w-5/6" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Error State */}
            {isError && (
              <div className="text-center py-12">
                <div className="text-red-500 text-lg mb-4">
                  Ocorreu um erro ao carregar os dados.
                </div>
                <Button 
                  onClick={() => window.location.reload()} 
                  className="bg-swmg-primary hover:bg-swmg-dark text-white"
                >
                  Tentar novamente
                </Button>
              </div>
            )}
            
            {/* Results Grid */}
            {!isLoading && !isError && (
              <>
                {ecosystems.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ecosystems.map(entity => {
                      const typeInfo = getEntityTypeInfo(entity.type);
                      
                      return (
                        <div 
                          key={entity.id} 
                          className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 border border-gray-200">
                              <img 
                                src={entity.logo} 
                                alt={entity.name}
                                className="w-12 h-12 object-contain"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = "https://placehold.co/200x200/eef/046?text=Logo";
                                }}
                              />
                            </div>
                            <div>
                              <h3 className="font-bold text-lg text-swmg-dark mb-1">{entity.name}</h3>
                              <div className="flex items-center text-xs text-gray-500">
                                <MapPin className="h-3 w-3 mr-1" />
                                {entity.city}
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-4">
                            {entity.description}
                          </p>
                          
                          <div className="flex justify-between items-center">
                            <span 
                              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${
                                typeInfo.color
                              }`}
                            >
                              {typeInfo.icon}
                              <span className="ml-1">{typeInfo.label}</span>
                            </span>
                            
                            <a 
                              href={entity.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-swmg-primary hover:text-swmg-secondary inline-flex items-center text-sm font-medium"
                            >
                              Visitar
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                    <div className="max-w-md mx-auto">
                      <h3 className="text-xl font-medium text-swmg-dark mb-2">
                        Nenhuma entidade encontrada
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Não foi encontrada nenhuma entidade com os filtros selecionados. 
                        Tente mudar ou remover alguns filtros.
                      </p>
                      {activeFilterCount > 0 && (
                        <Button
                          onClick={resetFilters}
                          className="bg-swmg-primary hover:bg-swmg-dark text-white"
                        >
                          Limpar todos os filtros
                        </Button>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-8">
                    <CustomPagination />
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default EcosistemaPage; 