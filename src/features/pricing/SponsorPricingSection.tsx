import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Brain, Heart, Users, Mail, Phone, PackagePlus, Info, Diamond, Medal, Award, ArrowRight, MapPin, Video, ExternalLink, Check, ChevronRight } from 'lucide-react';
import FeatureList from '@/components/shared/FeatureList';

type SponsorPricingSectionProps = {
  className?: string;
  id?: string;
};

type SponsorCategory = 
  | 'diamond' 
  | 'gold' 
  | 'silver' 
  | 'bronze';

type SponsorScope = 
  | 'regional'
  | 'estadual';  

type SponsorFeature = {
  text: string;
  included: boolean;
  highlighted?: boolean;
  upgrade?: boolean;
};

/**
 * SponsorPricingSection organism displaying all pricing options
 */
const SponsorPricingSection: React.FC<SponsorPricingSectionProps> = ({ className, id }) => {
  const [showComparison, setShowComparison] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<SponsorCategory>('bronze');
  const [activeScope, setActiveScope] = useState<SponsorScope>('regional');
  const [showUpgradeInfo, setShowUpgradeInfo] = useState<Record<SponsorCategory, boolean>>({
    bronze: false,
    silver: false,
    gold: false,
    diamond: false
  });

  // Define all sponsor categories and their features per Techstars guidelines
  const categoryFeatures: Record<SponsorScope, Record<SponsorCategory, SponsorFeature[]>> = {
    regional: {
      diamond: [
        { text: 'Logo em destaque no site do evento', included: true, highlighted: true },
        { text: 'Área exclusiva premium (4x4m) no local do evento', included: true, highlighted: true },
        { text: 'Reconhecimento como Patrocinador Master no material promocional', included: true, upgrade: true },
        { text: 'Oportunidade de falar na abertura do evento (3 min)', included: true, upgrade: true },
        { text: 'Sessão exclusiva com sua marca (30 min)', included: true, upgrade: true },
        { text: 'Ingressos VIP para 8 pessoas', included: true },
        { text: 'Logo em destaque em todos os materiais impressos', included: true },
        { text: 'Menção em todas as comunicações oficiais', included: true },
        { text: 'Acesso preferencial aos projetos finalistas', included: true },
        { text: 'Participação na banca julgadora final', included: true },
        { text: 'Posts dedicados nas redes sociais', included: true },
        { text: 'Distribuição de brindes promocionais', included: true },
      ],
      gold: [
        { text: 'Logo no site do evento', included: true, highlighted: true },
        { text: 'Área exclusiva (3x3m) no local do evento', included: true },
        { text: 'Reconhecimento como Patrocinador Gold no material promocional', included: true, upgrade: true },
        { text: 'Sessão com sua marca (15 min)', included: true },
        { text: 'Ingressos VIP para 5 pessoas', included: true },
        { text: 'Logo em todos os materiais impressos', included: true },
        { text: 'Menção em comunicações oficiais selecionadas', included: true },
        { text: 'Participação na banca julgadora de seleção', included: true },
        { text: 'Post dedicado nas redes sociais', included: true },
        { text: 'Distribuição de material promocional', included: true },
      ],
      silver: [
        { text: 'Logo no site do evento', included: true },
        { text: 'Área compartilhada (mesa) no local do evento', included: true },
        { text: 'Reconhecimento como Patrocinador Silver', included: true },
        { text: 'Ingressos VIP para 3 pessoas', included: true },
        { text: 'Logo nos materiais digitais', included: true },
        { text: 'Menção nas redes sociais', included: true },
        { text: 'Distribuição de material promocional', included: true },
      ],
      bronze: [
        { text: 'Logo no site do evento (seção de apoiadores)', included: true },
        { text: 'Área compartilhada (mesa) no dia do Demo Day', included: true },
        { text: 'Reconhecimento como Patrocinador Bronze', included: true },
        { text: 'Ingresso VIP para 1 pessoa', included: true },
        { text: 'Menção nas redes sociais', included: true },
        { text: 'Material na pasta dos participantes', included: true },
        { text: 'Networking com participantes e mentores', included: true },
      ]
    },
    estadual: {
      diamond: [
        { text: 'Logo em destaque no site oficial de todos os eventos estaduais', included: true, highlighted: true },
        { text: 'Área exclusiva premium (4x4m) em todos os eventos estaduais', included: true, highlighted: true },
        { text: 'Reconhecimento como Patrocinador Master Estadual', included: true, upgrade: true },
        { text: 'Participação na abertura de todos os eventos estaduais (3 min)', included: true, upgrade: true },
        { text: 'Sessão exclusiva com sua marca em cada evento estadual (30 min)', included: true, upgrade: true },
        { text: 'Ingressos VIP para 8 pessoas em cada evento estadual', included: true },
        { text: 'Logo em destaque em todos os materiais de divulgação estadual', included: true },
        { text: 'Menção em todas as comunicações oficiais estaduais', included: true },
        { text: 'Acesso preferencial aos projetos finalistas de todos os eventos', included: true },
        { text: 'Participação nas bancas julgadoras finais estaduais', included: true },
        { text: 'Campanha exclusiva nas redes sociais estaduais', included: true },
      ],
      gold: [
        { text: 'Logo no site oficial de todos os eventos estaduais', included: true, highlighted: true },
        { text: 'Área exclusiva (3x3m) em todos os eventos estaduais', included: true },
        { text: 'Reconhecimento como Patrocinador Gold Estadual', included: true, upgrade: true },
        { text: 'Sessão com sua marca em eventos estaduais selecionados (15 min)', included: true },
        { text: 'Ingressos VIP para 5 pessoas em cada evento estadual', included: true },
        { text: 'Logo em todos os materiais de divulgação estadual', included: true },
        { text: 'Menção em comunicações oficiais estaduais selecionadas', included: true },
        { text: 'Participação em bancas julgadoras estaduais selecionadas', included: true },
        { text: 'Campanha nas redes sociais estaduais', included: true },
      ],
      silver: [
        { text: 'Logo no site oficial dos eventos estaduais', included: true },
        { text: 'Área compartilhada em eventos estaduais selecionados', included: true },
        { text: 'Reconhecimento como Patrocinador Silver Estadual', included: true },
        { text: 'Ingressos VIP para 3 pessoas em cada evento estadual', included: true },
        { text: 'Logo nos materiais digitais estaduais', included: true },
        { text: 'Menção nas redes sociais estaduais', included: true },
        { text: 'Networking em todos os eventos estaduais', included: true },
      ],
      bronze: [
        { text: 'Logo no site oficial dos eventos estaduais (seção de apoiadores)', included: true },
        { text: 'Área compartilhada no Demo Day estadual', included: true },
        { text: 'Reconhecimento como Patrocinador Bronze Estadual', included: true },
        { text: 'Ingresso VIP para 1 pessoa em cada evento estadual', included: true },
        { text: 'Menção nas redes sociais estaduais', included: true },
        { text: 'Material promocional nos eventos estaduais', included: true },
        { text: 'Networking em todos os eventos estaduais', included: true },
      ]
    }
  };

  const categoryColors: Record<SponsorCategory, string> = {
    diamond: 'bg-gradient-to-r from-indigo-50 to-purple-50 border-purple-200 hover:border-purple-300',
    gold: 'bg-amber-50 border-amber-200 hover:border-amber-300',
    silver: 'bg-slate-50 border-slate-200 hover:border-slate-300',
    bronze: 'bg-orange-50 border-orange-200 hover:border-orange-300',
  };

  const categoryIcons: Record<SponsorCategory, React.ReactNode> = {
    diamond: <Diamond className="h-5 w-5 text-purple-500" />,
    gold: <Award className="h-5 w-5 text-amber-500" />,
    silver: <Medal className="h-5 w-5 text-slate-500" />,
    bronze: <Medal className="h-5 w-5 text-orange-500" />,
  };

  const categoryTitles: Record<SponsorCategory, string> = {
    diamond: 'Diamond',
    gold: 'Gold',
    silver: 'Silver',
    bronze: 'Bronze',
  };

  const scopeTitles: Record<SponsorScope, string> = {
    regional: 'Regional',
    estadual: 'Estadual',
  };

  const categoryDescriptions: Record<SponsorCategory, string> = {
    diamond: 'Patrocínio premium com máxima visibilidade e benefícios exclusivos',
    gold: 'Alto impacto e presença de destaque no evento',
    silver: 'Boa visibilidade com benefícios importantes',
    bronze: 'Opção de entrada para apoiadores do ecossistema de startups',
  };

  const scopeDescriptions: Record<SponsorScope, string> = {
    regional: 'Visibilidade e impacto em eventos de uma região específica',
    estadual: 'Presença em todos os eventos do estado de Minas Gerais',
  };

  // Apenas os valores Bronze são exibidos, os outros são "Consulte"
  const categoryPrices: Record<SponsorScope, Record<SponsorCategory, { value: number | null, detail: string }>> = {
    regional: {
      diamond: { value: null, detail: 'Consulte' },
      gold: { value: null, detail: 'Consulte' },
      silver: { value: null, detail: 'Consulte' },
      bronze: { value: 2000, detail: 'a partir de' },
    },
    estadual: {
      diamond: { value: null, detail: 'Consulte' },
      gold: { value: null, detail: 'Consulte' },
      silver: { value: null, detail: 'Consulte' },
      bronze: { value: 10000, detail: 'por 1 ano' },
    }
  };

  const categoryIdealFor: Record<SponsorCategory, string> = {
    diamond: 'Grandes empresas e corporações que buscam protagonismo no ecossistema de inovação',
    gold: 'Empresas de médio a grande porte que buscam visibilidade significativa no evento',
    silver: 'Empresas de médio porte interessadas em ter boa presença no evento',
    bronze: 'Pequenas empresas e startups que desejam apoiar o ecossistema',
  };

  const allCategories: SponsorCategory[] = ['diamond', 'gold', 'silver', 'bronze'];
  const allScopes: SponsorScope[] = ['regional', 'estadual'];

  // Função auxiliar para obter todas as características únicas de todas as categorias
  const getAllUniqueFeatures = (): string[] => {
    const allFeatures: Set<string> = new Set();
    
    Object.values(categoryFeatures).forEach(scopeFeatures => {
      Object.values(scopeFeatures).forEach(features => {
        features.forEach(feature => {
          allFeatures.add(feature.text);
        });
      });
    });
    
    return Array.from(allFeatures);
  };

  // Função para renderizar o preço de acordo com as regras
  const renderPrice = (scope: SponsorScope, category: SponsorCategory) => {
    const priceInfo = categoryPrices[scope][category];
    
    if (category === 'bronze') {
      return (
        <>
          <div className="font-semibold">
            {`R$${priceInfo.value?.toLocaleString('pt-BR')}`}
          </div>
          <div className="text-xs text-gray-500">
            {priceInfo.detail}
          </div>
        </>
      );
    }
    
    return (
      <div className="text-sm font-medium text-indigo-600">
        {priceInfo.detail}
      </div>
    );
  };

  // Função para alternar exibição de informações de upgrade
  const toggleUpgradeInfo = (category: SponsorCategory) => {
    setShowUpgradeInfo(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <section id={id} className={cn("py-8", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Torne-se um Patrocinador
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sua empresa pode fazer parte do maior evento de empreendedorismo do Brasil e impulsionar o ecossistema de inovação em Minas Gerais.
          </p>
        </div>
        
        {/* Value Proposition Section */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-red-50 mb-3">
              <Heart className="h-6 w-6 text-red-500" />
            </div>
            <h4 className="text-base font-medium mb-2">Projeto Voluntário</h4>
            <p className="text-sm text-gray-600">
              Organizado por voluntários apaixonados pelo ecossistema de inovação, que dedicam seu tempo para capacitar empreendedores.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-50 mb-3">
              <Users className="h-6 w-6 text-blue-500" />
            </div>
            <h4 className="text-base font-medium mb-2">Impacto no Ecossistema</h4>
            <p className="text-sm text-gray-600">
              Contribua diretamente para o desenvolvimento de novos negócios, geração de empregos e fortalecimento da inovação em MG.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-purple-50 mb-3">
              <Brain className="h-6 w-6 text-purple-500" />
            </div>
            <h4 className="text-base font-medium mb-2">Soft Skills Desenvolvidas</h4>
            <p className="text-sm text-gray-600">
              Os participantes desenvolvem habilidades essenciais como trabalho em equipe, comunicação e resolução de problemas sob pressão.
            </p>
          </div>
        </div>
        
        {/* Unified Sponsorship Categories Section */}
        <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 border-b border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100 mr-3">
                  <Info className="h-4 w-4 text-indigo-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900">Categorias de Patrocínio</h3>
                  <p className="text-sm text-gray-600">Explore as opções de patrocínio disponíveis</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => setShowComparison(!showComparison)}
                  className={cn(
                    "text-xs font-medium px-3 py-1 rounded-full transition-colors flex items-center",
                    showComparison
                      ? "bg-indigo-100 text-indigo-700"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <span>{showComparison ? "Voltar às categorias" : "Ver tabela comparativa"}</span>
                  <ArrowRight className="h-3 w-3 ml-1" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-5">
            {showComparison ? (
              // Tabela de comparação de todos os planos
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      <th className="p-2 text-left border-b-2 bg-gray-50">Recurso</th>
                      {allScopes.map(scope => (
                        <React.Fragment key={scope}>
                          <th 
                            colSpan={4}
                            className="p-2 text-center border-b-2 bg-gray-100 font-medium text-gray-700"
                          >
                            {scopeTitles[scope]} - {scopeDescriptions[scope]}
                          </th>
                        </React.Fragment>
                      ))}
                    </tr>
                    <tr>
                      <th className="p-2 text-left border-b-2 bg-gray-50"></th>
                      {allScopes.map(scope => (
                        <React.Fragment key={scope}>
                          {allCategories.map(category => (
                            <th 
                              key={`${scope}-${category}`} 
                              className={cn(
                                "p-2 text-center border-b-2 font-medium",
                                category === 'diamond' ? 'bg-purple-50' : 
                                category === 'gold' ? 'bg-amber-50' : 
                                category === 'silver' ? 'bg-slate-50' : 'bg-orange-50'
                              )}
                            >
                              <div className="flex items-center justify-center mb-1">
                                {categoryIcons[category]}
                                <span className="ml-1">{categoryTitles[category]}</span>
                              </div>
                              <div className="text-xs font-normal">
                                {category === 'bronze' ? 
                                  `R$${categoryPrices[scope][category].value?.toLocaleString('pt-BR')}` :
                                  categoryPrices[scope][category].detail
                                }
                                {category === 'bronze' && (
                                  <span className="text-gray-500 block text-[10px]">
                                    {categoryPrices[scope][category].detail}
                                  </span>
                                )}
                              </div>
                            </th>
                          ))}
                        </React.Fragment>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Combine all features from all categories */}
                    {getAllUniqueFeatures().map((featureText, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-2 border-b">{featureText}</td>
                        {allScopes.map(scope => (
                          <React.Fragment key={scope}>
                            {allCategories.map(category => {
                              const feature = categoryFeatures[scope][category].find(f => f.text === featureText);
                              return (
                                <td key={`${scope}-${category}-${index}`} className="p-2 text-center border-b">
                                  {feature?.included ? (
                                    feature.upgrade ? (
                                      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-purple-100">
                                        <Diamond className="h-3 w-3 text-purple-500" />
                                      </span>
                                    ) : feature.highlighted ? (
                                      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-amber-100">
                                        <Award className="h-3 w-3 text-amber-500" />
                                      </span>
                                    ) : (
                                      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100">
                                        <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                      </span>
                                    )
                                  ) : (
                                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-gray-100">
                                      <svg className="h-3 w-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                      </svg>
                                    </span>
                                  )}
                                </td>
                              );
                            })}
                          </React.Fragment>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              // Layout de 3 colunas
              <div className="mb-6">
                <div className="grid md:grid-cols-3 gap-4">
                  {/* Coluna 1: Bronze Municipal */}
                  <div className="border rounded-lg overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md">
                    <div className={cn("p-4 border-b", categoryColors.bronze)}>
                      <div className="flex justify-between items-start">
                        <div className="flex items-center">
                          {categoryIcons.bronze}
                          <div className="ml-2">
                            <h3 className="text-base font-semibold">
                              {categoryTitles.bronze} - Municipal
                            </h3>
                            <p className="text-xs text-gray-600 mt-1">
                              Cota para evento em sua região
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">
                            R${categoryPrices.regional.bronze.value?.toLocaleString('pt-BR')}
                          </div>
                          <div className="text-xs text-gray-500">
                            {categoryPrices.regional.bronze.detail}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white">
                      <div className="mb-3">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Benefícios incluídos:</h4>
                        <div className="space-y-1.5">
                          {categoryFeatures.regional.bronze.slice(0, 4).map((feature, index) => (
                            <div key={index} className="flex items-center">
                              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-xs">{feature.text}</span>
                            </div>
                          ))}
                          {!showUpgradeInfo.bronze && (
                            <button 
                              onClick={() => toggleUpgradeInfo('bronze')}
                              className="text-xs text-indigo-600 font-medium flex items-center mt-1"
                            >
                              <span>Ver mais benefícios</span>
                              <ChevronRight className="h-3 w-3 ml-1" />
                            </button>
                          )}
                          {showUpgradeInfo.bronze && (
                            <>
                              {categoryFeatures.regional.bronze.slice(4).map((feature, index) => (
                                <div key={`more-${index}`} className="flex items-center">
                                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                  <span className="text-xs">{feature.text}</span>
                                </div>
                              ))}
                              <button 
                                onClick={() => toggleUpgradeInfo('bronze')}
                                className="text-xs text-indigo-600 font-medium flex items-center mt-1"
                              >
                                <span>Ver menos</span>
                                <ChevronRight className="h-3 w-3 ml-1 rotate-90" />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-3 pt-3 border-t border-gray-100">
                        <h4 className="text-xs font-semibold text-gray-700">Faça um upgrade para:</h4>
                        
                        <div className="flex items-start gap-2 pb-2 border-b border-dashed border-gray-100">
                          {categoryIcons.silver}
                          <div>
                            <div className="text-xs font-medium">{categoryTitles.silver}</div>
                            <div className="text-indigo-600 text-xs font-medium">Consulte</div>
                            <div className="text-xs text-gray-500 mt-0.5">+{categoryFeatures.regional.silver.filter(f => f.highlighted || f.upgrade).length} benefícios exclusivos</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-2 pb-2 border-b border-dashed border-gray-100">
                          {categoryIcons.gold}
                          <div>
                            <div className="text-xs font-medium">{categoryTitles.gold}</div>
                            <div className="text-indigo-600 text-xs font-medium">Consulte</div>
                            <div className="text-xs text-gray-500 mt-0.5">+{categoryFeatures.regional.gold.filter(f => f.highlighted || f.upgrade).length} benefícios exclusivos</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-2">
                          {categoryIcons.diamond}
                          <div>
                            <div className="text-xs font-medium">{categoryTitles.diamond}</div>
                            <div className="text-indigo-600 text-xs font-medium">Consulte</div>
                            <div className="text-xs text-gray-500 mt-0.5">+{categoryFeatures.regional.diamond.filter(f => f.highlighted || f.upgrade).length} benefícios exclusivos</div>
                          </div>
                        </div>
                      </div>
                      
                      <button className="w-full mt-2 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors text-sm">
                        Solicitar proposta
                      </button>
                    </div>
                  </div>
                  
                  {/* Coluna 2: Bronze Estadual */}
                  <div className="border rounded-lg overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md">
                    <div className={cn("p-4 border-b", "bg-gradient-to-r from-orange-50 to-amber-50 border-amber-200")}>
                      <div className="flex justify-between items-start">
                        <div className="flex items-center">
                          {categoryIcons.bronze}
                          <div className="ml-2">
                            <h3 className="text-base font-semibold">
                              {categoryTitles.bronze} - Estadual
                            </h3>
                            <p className="text-xs text-gray-600 mt-1">
                              Cota para todos eventos em MG
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">
                            R${categoryPrices.estadual.bronze.value?.toLocaleString('pt-BR')}
                          </div>
                          <div className="text-xs text-gray-500">
                            {categoryPrices.estadual.bronze.detail}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white">
                      <div className="mb-3">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Benefícios incluídos:</h4>
                        <div className="space-y-1.5">
                          {categoryFeatures.estadual.bronze.slice(0, 4).map((feature, index) => (
                            <div key={index} className="flex items-center">
                              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-xs">{feature.text}</span>
                            </div>
                          ))}
                          {!showUpgradeInfo.silver && (
                            <button 
                              onClick={() => toggleUpgradeInfo('silver')}
                              className="text-xs text-indigo-600 font-medium flex items-center mt-1"
                            >
                              <span>Ver mais benefícios</span>
                              <ChevronRight className="h-3 w-3 ml-1" />
                            </button>
                          )}
                          {showUpgradeInfo.silver && (
                            <>
                              {categoryFeatures.estadual.bronze.slice(4).map((feature, index) => (
                                <div key={`more-${index}`} className="flex items-center">
                                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                  <span className="text-xs">{feature.text}</span>
                                </div>
                              ))}
                              <button 
                                onClick={() => toggleUpgradeInfo('silver')}
                                className="text-xs text-indigo-600 font-medium flex items-center mt-1"
                              >
                                <span>Ver menos</span>
                                <ChevronRight className="h-3 w-3 ml-1 rotate-90" />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-3 pt-3 border-t border-gray-100">
                        <h4 className="text-xs font-semibold text-gray-700">Faça um upgrade para:</h4>
                        
                        <div className="flex items-start gap-2 pb-2 border-b border-dashed border-gray-100">
                          {categoryIcons.silver}
                          <div>
                            <div className="text-xs font-medium">{categoryTitles.silver} Estadual</div>
                            <div className="text-indigo-600 text-xs font-medium">Consulte</div>
                            <div className="text-xs text-gray-500 mt-0.5">+{categoryFeatures.estadual.silver.filter(f => f.highlighted || f.upgrade).length} benefícios adicionais</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-2 pb-2 border-b border-dashed border-gray-100">
                          {categoryIcons.gold}
                          <div>
                            <div className="text-xs font-medium">{categoryTitles.gold} Estadual</div>
                            <div className="text-indigo-600 text-xs font-medium">Consulte</div>
                            <div className="text-xs text-gray-500 mt-0.5">+{categoryFeatures.estadual.gold.filter(f => f.highlighted || f.upgrade).length} benefícios exclusivos</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-2">
                          {categoryIcons.diamond}
                          <div>
                            <div className="text-xs font-medium">{categoryTitles.diamond} Estadual</div>
                            <div className="text-indigo-600 text-xs font-medium">Consulte</div>
                            <div className="text-xs text-gray-500 mt-0.5">+{categoryFeatures.estadual.diamond.filter(f => f.highlighted || f.upgrade).length} benefícios premium</div>
                          </div>
                        </div>
                      </div>
                      
                      <button className="w-full mt-2 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors text-sm">
                        Solicitar proposta
                      </button>
                    </div>
                  </div>
                  
                  {/* Coluna 3: Apoio e Mídia */}
                  <div className="border rounded-lg overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md">
                    <div className="p-4 border-b bg-gradient-to-r from-blue-50 to-indigo-50 border-indigo-200">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center">
                          <div className="h-5 w-5 flex items-center justify-center rounded-full bg-indigo-100">
                            <ExternalLink className="h-3 w-3 text-indigo-600" />
                          </div>
                          <div className="ml-2">
                            <h3 className="text-base font-semibold">
                              Apoio e Mídia
                            </h3>
                            <p className="text-xs text-gray-600 mt-1">
                              Parcerias especiais e divulgação
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-indigo-600">
                            Permuta
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white">
                      <div className="mb-3">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Tipos de parceria:</h4>
                        <div className="space-y-1.5">
                          <div className="flex items-center">
                            <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-xs">Apoio institucional</span>
                          </div>
                          <div className="flex items-center">
                            <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-xs">Parceria de mídia</span>
                          </div>
                          <div className="flex items-center">
                            <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-xs">Parceria de conteúdo</span>
                          </div>
                          <div className="flex items-center">
                            <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-xs">Parceria educacional</span>
                          </div>
                          {!showUpgradeInfo.gold && (
                            <button 
                              onClick={() => toggleUpgradeInfo('gold')}
                              className="text-xs text-indigo-600 font-medium flex items-center mt-1"
                            >
                              <span>Ver mais opções</span>
                              <ChevronRight className="h-3 w-3 ml-1" />
                            </button>
                          )}
                          {showUpgradeInfo.gold && (
                            <>
                              <div className="flex items-center">
                                <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                <span className="text-xs">Fornecimento de material</span>
                              </div>
                              <div className="flex items-center">
                                <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                <span className="text-xs">Cessão de espaço</span>
                              </div>
                              <div className="flex items-center">
                                <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                <span className="text-xs">Apoio logístico</span>
                              </div>
                              <button 
                                onClick={() => toggleUpgradeInfo('gold')}
                                className="text-xs text-indigo-600 font-medium flex items-center mt-1"
                              >
                                <span>Ver menos</span>
                                <ChevronRight className="h-3 w-3 ml-1 rotate-90" />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-3 pt-3 border-t border-gray-100">
                        <h4 className="text-xs font-semibold text-gray-700">Benefícios para apoiadores:</h4>
                        
                        <div className="bg-gray-50 rounded-md p-3">
                          <div className="flex items-start gap-2 mb-2">
                            <MapPin className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                            <div>
                              <div className="text-xs font-medium">Menção no Site e Evento</div>
                              <div className="text-xs text-gray-500 mt-0.5">Logo no site e nas comunicações</div>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-2 mb-2">
                            <Video className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                            <div>
                              <div className="text-xs font-medium">Divulgação de Mídia</div>
                              <div className="text-xs text-gray-500 mt-0.5">Menções em redes sociais</div>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-2">
                            <Users className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                            <div>
                              <div className="text-xs font-medium">Conteúdo Compartilhado</div>
                              <div className="text-xs text-gray-500 mt-0.5">Post colaborativo e materiais</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <button className="w-full mt-2 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors text-sm">
                        Saiba mais
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Legenda */}
            <div className="flex flex-wrap gap-4 mt-4 justify-center text-xs text-gray-600 bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center">
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-purple-100 mr-1">
                  <Diamond className="h-3 w-3 text-purple-500" />
                </span>
                <span>Benefício exclusivo</span>
              </div>
              <div className="flex items-center">
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-amber-100 mr-1">
                  <Award className="h-3 w-3 text-amber-500" />
                </span>
                <span>Benefício destacado</span>
              </div>
              <div className="flex items-center">
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 mr-1">
                  <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>Incluído</span>
              </div>
              <div className="flex items-center">
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-gray-100 mr-1">
                  <svg className="h-3 w-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>Não incluído</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Custom Packages Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="h-16 w-16 flex items-center justify-center rounded-full bg-emerald-50 shrink-0">
              <PackagePlus className="h-8 w-8 text-emerald-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Pacotes Personalizados</h3>
              <p className="text-gray-600 text-sm mb-3">
                Oferecemos soluções exclusivas adaptadas às necessidades específicas da sua empresa. Nossos pacotes personalizados 
                podem incluir benefícios como: reconhecimento especial, espaço premium, workshops exclusivos, 
                mentorias especializadas e muito mais.
              </p>
              <div className="flex flex-wrap gap-3 mt-3">
                <a href="mailto:contato@startupweekendmg.com.br" className="inline-flex items-center text-sm font-medium text-emerald-700 bg-emerald-50 py-2 px-4 rounded-full hover:bg-emerald-100 transition-colors">
                  <Mail className="h-4 w-4 mr-2" />
                  contato@startupweekendmg.com.br
                </a>
                <a href="tel:+553199999999" className="inline-flex items-center text-sm font-medium text-emerald-700 bg-emerald-50 py-2 px-4 rounded-full hover:bg-emerald-100 transition-colors">
                  <Phone className="h-4 w-4 mr-2" />
                  (31) 9999-9999
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonial or CTA */}
        <div className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Faça Parte Desta Jornada</h3>
          <p className="max-w-2xl mx-auto mb-4">
            Junte-se a dezenas de empresas que já impulsionam o ecossistema de inovação em Minas Gerais.
            Seu patrocínio faz diferença na vida de empreendedores e no desenvolvimento econômico regional.
          </p>
          <button className="bg-white text-purple-700 font-medium px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
            Entre em contato hoje
          </button>
        </div>
      </div>
    </section>
  );
};

export default SponsorPricingSection; 