import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  LinkedinIcon, 
  Mail, 
  ExternalLink,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  RotateCcw
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  AreaExpertise, 
  Mentor, 
  MentoresFiltros, 
  MentoresQueryParams, 
  Regiao 
} from "@/modules/mentores/mentores.type";
import { areaExpertiseSchema, regiaoSchema } from "@/modules/mentores/mentores.schema";
import { useMentoresComFiltro } from "@/modules/mentores/mentores.hook";

const MentorsSection = () => {
  // Estados para gerenciar filtros
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState<AreaExpertise | null>(null);
  const [selectedRegiao, setSelectedRegiao] = useState<Regiao | null>(null);
  const [disponivel, setDisponivel] = useState<boolean | null>(null);
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  // Estado derivado para contar filtros ativos
  const activeFiltersCount = [
    !!searchTerm,
    !!selectedArea,
    !!selectedRegiao,
    disponivel !== null
  ].filter(Boolean).length;

  // Construir parâmetros de consulta para a API
  const queryParams: MentoresQueryParams = {
    page: currentPage,
    limit: pageSize,
    filtros: {
      ...(searchTerm && { nome: searchTerm }),
      ...(selectedArea && { area: selectedArea }),
      ...(selectedRegiao && { regiao: selectedRegiao }),
      ...(disponivel !== null && { disponivel })
    }
  };

  // Buscar dados de mentores
  const { data: mentoresData, isLoading, isError } = useMentoresComFiltro(queryParams);

  // Obter lista de regiões e áreas para os filtros
  const regioes = regiaoSchema.options;
  const areas = areaExpertiseSchema.options;

  // Resetar todos os filtros
  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedArea(null);
    setSelectedRegiao(null);
    setDisponivel(null);
    setCurrentPage(1);
  };

  // Voltar para página 1 quando os filtros mudam
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedArea, selectedRegiao, disponivel]);

  // Função para tratar erros de carregamento de imagem
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://via.placeholder.com/150?text=Mentor";
  };

  // Renderizar um card de mentor
  const renderMentorCard = (mentor: Mentor) => (
    <div 
      key={mentor.id} 
      className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100 hover:shadow-md transition-all group"
    >
      <div className="flex flex-col h-full">
        {/* Cabeçalho com foto e status */}
        <div className="relative pt-8 pb-4 px-4 flex flex-col items-center">
          <div className="absolute top-2 right-2">
            {mentor.disponivel ? (
              <div className="flex items-center text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full gap-1">
                <Check className="h-3 w-3" />
                <span>Disponível</span>
              </div>
            ) : (
              <div className="flex items-center text-xs bg-slate-50 text-slate-500 px-2 py-1 rounded-full gap-1">
                <X className="h-3 w-3" />
                <span>Indisponível</span>
              </div>
            )}
          </div>
          
          <Avatar className="h-24 w-24 mb-3 border-2 border-red-500/20">
            <AvatarImage 
              src={mentor.foto} 
              alt={mentor.nome} 
              onError={handleImageError}
            />
            <AvatarFallback className="bg-red-50 text-red-700 text-xl">
              {mentor.nome.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <h3 className="font-bold text-xl text-slate-900 text-center line-clamp-1">{mentor.nome}</h3>
          
          <div className="mt-1 flex items-center text-slate-600 text-sm line-clamp-1 max-w-full">
            <Briefcase className="h-4 w-4 mr-1 shrink-0 text-slate-400" />
            <span className="truncate">{mentor.cargo}{mentor.empresa ? ` · ${mentor.empresa}` : ""}</span>
          </div>
          
          {mentor.regiao && (
            <div className="mt-1 flex items-center text-slate-500 text-sm line-clamp-1 max-w-full">
              <MapPin className="h-4 w-4 mr-1 shrink-0 text-slate-400" />
              <span className="truncate">{mentor.regiao}</span>
            </div>
          )}
        </div>
        
        {/* Áreas de expertise */}
        <div className="px-4 pb-3 flex flex-wrap gap-1 justify-center">
          {mentor.area.slice(0, 3).map((area, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="bg-red-50 text-red-600 hover:bg-red-100"
            >
              {area}
            </Badge>
          ))}
          {mentor.area.length > 3 && (
            <Badge variant="outline" className="text-slate-500 border-slate-200">
              +{mentor.area.length - 3}
            </Badge>
          )}
        </div>
        
        {/* Informações adicionais */}
        {mentor.formacao && (
          <div className="px-4 pb-3 text-center text-sm text-slate-600 flex items-center justify-center line-clamp-1">
            <GraduationCap className="h-4 w-4 mr-1 shrink-0 text-slate-400" />
            <span className="truncate">{mentor.formacao}</span>
          </div>
        )}
        
        {/* Footer com links */}
        <div className="mt-auto pt-4 pb-4 px-4 border-t border-slate-100 bg-slate-50 flex justify-center gap-2">
          {mentor.linkedin && (
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-full border-slate-200 text-red-600 hover:text-white hover:bg-red-600 hover:border-red-600"
              asChild
            >
              <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${mentor.nome}`}>
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </Button>
          )}
          
          {mentor.email && (
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-full border-slate-200 text-red-600 hover:text-white hover:bg-red-600 hover:border-red-600"
              asChild
            >
              <a href={`mailto:${mentor.email}`} aria-label={`Email de ${mentor.nome}`}>
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          )}
          
          {mentor.website && (
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-full border-slate-200 text-red-600 hover:text-white hover:bg-red-600 hover:border-red-600"
              asChild
            >
              <a href={mentor.website} target="_blank" rel="noopener noreferrer" aria-label={`Site de ${mentor.nome}`}>
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );

  // Renderizar um card de esqueleto durante o carregamento
  const renderSkeletonCard = (key: number) => (
    <div 
      key={key} 
      className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100"
    >
      <div className="flex flex-col h-full">
        <div className="pt-8 pb-4 px-4 flex flex-col items-center">
          <Skeleton className="h-24 w-24 rounded-full mb-3" />
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2 mb-1" />
          <Skeleton className="h-4 w-1/3" />
        </div>
        
        <div className="px-4 pb-3 flex gap-1 justify-center">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-16" />
        </div>
        
        <div className="mt-auto pt-4 pb-4 px-4 border-t border-slate-100 bg-slate-50 flex justify-center gap-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>
    </div>
  );

  return (
    <section id="mentoria" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center mb-3">
            <div className="w-10 h-1 bg-red-600 mr-2"></div>
            <h5 className="font-medium text-slate-900">Nossa Rede de Mentores</h5>
            <div className="w-10 h-1 bg-red-600 ml-2"></div>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Conexão com <span className="text-red-600">especialistas</span>
          </h2>
          <p className="text-slate-600">
            Conheça os mentores que compõem o Circuito Mineiro de Startup Weekend e estão prontos para 
            compartilhar suas experiências e conhecimentos para ajudar sua startup a alcançar seu potencial.
          </p>
        </div>

        {/* Barra de pesquisa e filtros */}
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
                onChange={(e) => setSearchTerm(e.target.value)}
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
                  onClick={handleResetFilters}
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
                    className={`border-slate-200 ${disponivel === true ? "bg-red-600 text-white border-red-600" : ""}`}
                    onClick={() => setDisponivel(disponivel === true ? null : true)}
                  >
                    <Check className={`h-3 w-3 mr-1 ${disponivel === true ? "" : "text-green-600"}`} />
                    Disponíveis
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className={`border-slate-200 ${disponivel === false ? "bg-red-600 text-white border-red-600" : ""}`}
                    onClick={() => setDisponivel(disponivel === false ? null : false)}
                  >
                    <X className={`h-3 w-3 mr-1 ${disponivel === false ? "" : "text-slate-500"}`} />
                    Todos
                  </Button>
                </div>
              </div>
              
              {/* Filtro por Região */}
                <div>
                <label className="text-sm font-medium text-slate-900 mb-2 block">Região</label>
                <div className="flex flex-wrap gap-2">
                  {regioes.map((regiao) => (
                    <Button 
                      key={regiao} 
                      variant="outline" 
                      size="sm"
                      className={`border-slate-200 ${selectedRegiao === regiao ? "bg-red-600 text-white border-red-600" : ""}`}
                      onClick={() => setSelectedRegiao(selectedRegiao === regiao ? null : regiao as Regiao)}
                    >
                      {regiao}
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
                      onClick={() => setSelectedArea(selectedArea === area ? null : area as AreaExpertise)}
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
                    handleResetFilters();
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
                className={`border-slate-200 ${disponivel === true ? "bg-red-600 text-white border-red-600 hover:bg-red-700" : "hover:border-red-600 hover:text-red-600 hover:bg-red-50"}`}
                onClick={() => setDisponivel(disponivel === true ? null : true)}
              >
                <Check className={`h-4 w-4 mr-2 ${disponivel === true ? "" : "text-green-600"}`} />
                Disponíveis para mentoria
              </Button>
              
              {/* Filtros de regiões mais populares */}
              {regioes.slice(0, 4).map((regiao) => (
                <Button 
                  key={regiao} 
                  variant="outline" 
                  className={`border-slate-200 ${selectedRegiao === regiao ? "bg-red-600 text-white border-red-600 hover:bg-red-700" : "hover:border-red-600 hover:text-red-600 hover:bg-red-50"}`}
                  onClick={() => setSelectedRegiao(selectedRegiao === regiao ? null : regiao as Regiao)}
                >
                  <MapPin className={`h-4 w-4 mr-1 ${selectedRegiao === regiao ? "" : "text-slate-400"}`} />
                  {regiao}
                </Button>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {/* Filtros de áreas mais populares */}
              {areas.slice(0, 8).map((area) => (
                <Button 
                  key={area} 
                  variant="outline" 
                  size="sm"
                  className={`border-slate-200 ${selectedArea === area ? "bg-red-600 text-white border-red-600 hover:bg-red-700" : "hover:border-red-600 hover:text-red-600 hover:bg-red-50"}`}
                  onClick={() => setSelectedArea(selectedArea === area ? null : area as AreaExpertise)}
                >
                  {area}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Mensagem de erro */}
        {isError && (
          <div className="text-center py-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-red-100/50">
            <div className="text-red-600 mb-4">
              <X className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Erro ao carregar mentores
            </h3>
            <p className="text-slate-600 mb-6">
              Não foi possível carregar a lista de mentores. Por favor, tente novamente mais tarde.
            </p>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => window.location.reload()}
            >
              Tentar novamente
            </Button>
          </div>
        )}

        {/* Grid de mentores */}
        {!isError && (
          <>
            {/* Resultados encontrados ou carregando */}
            {((mentoresData?.data && mentoresData.data.length > 0) || isLoading) ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {isLoading ? (
                  // Skeletons durante o carregamento
                  Array.from({ length: 8 }).map((_, index) => renderSkeletonCard(index))
                ) : (
                  // Renderizar mentores
                  mentoresData?.data.map((mentor: Mentor) => renderMentorCard(mentor))
                )}
              </div>
            ) : (
              // Mensagem de nenhum resultado encontrado
              <div className="text-center py-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-slate-100/50">
                <div className="mx-auto w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Nenhum mentor encontrado
                </h3>
                <p className="text-slate-600 mb-6 max-w-md mx-auto">
                  Não encontramos mentores com os filtros selecionados. Tente ajustar seus critérios de busca.
                </p>
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white"
                  onClick={handleResetFilters}
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Limpar filtros
                </Button>
              </div>
            )}
            
            {/* Paginação */}
            {mentoresData && mentoresData.data && mentoresData.data.length > 0 && (
              <div className="flex justify-center mt-10">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-100/50 p-1">
                  <Button 
                    variant="ghost" 
                    className="text-slate-700 hover:text-red-600 hover:bg-red-50"
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                  >
                    Anterior
                  </Button>
                  
                  <div className="px-4 py-2 text-sm font-medium text-slate-700">
                    Página {currentPage} de {mentoresData.totalPages || 1}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="text-slate-700 hover:text-red-600 hover:bg-red-50"
                    onClick={() => setCurrentPage(prev => (mentoresData.totalPages && prev < mentoresData.totalPages) ? prev + 1 : prev)}
                    disabled={!mentoresData.totalPages || currentPage >= mentoresData.totalPages}
                  >
                    Próxima
                  </Button>
                </div>
              </div>
            )}
          </>
        )}

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-red-600/90 to-red-700/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Quer se tornar um mentor?</h3>
              <p className="text-red-100 max-w-xl">
                Compartilhe seu conhecimento e experiência com empreendedores em início de jornada.
                Faça parte da nossa rede de mentores e contribua para o ecossistema de startups em Minas Gerais.
              </p>
            </div>
            <Button className="bg-white text-red-600 hover:bg-red-50 whitespace-nowrap shadow-sm">
              Quero ser mentor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
