import React, { useState, useEffect } from 'react';
import SectionTemplate from '@/components/layout/SectionTemplate';
import SectionTitle from '@/components/shared/SectionTitle';
import { Partner, PartnerCategory } from '@/modules/partners/types';
import { usePartners } from '@/modules/partners/hooks';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Building, Globe, Briefcase, GraduationCap, Ban, Newspaper, Users, Landmark, Share2, Link, Copy, Award, TrendingUp, Clock, ExternalLink, Medal, Diamond, Eye, Calendar, Zap, Crown, Star, MousePointer, BadgePercent, BadgeCheck, Sparkles, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import FilterBar from '@/components/shared/FilterBar';
import TierSection from '@/features/partners/components/TierSection';
import { db } from '@/lib/db';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from '@/components/ui/badge';
import { toast } from "@/components/ui/use-toast";
import { MapPin } from 'lucide-react';
import RankingList, { RankingData } from '@/features/partners/components/RankingList';

// Category filter component
const CategoryFilter = ({ selectedCategory, setSelectedCategory }: {
  selectedCategory: PartnerCategory | 'all';
  setSelectedCategory: (category: PartnerCategory | 'all') => void;
}) => {
  // Partner categories with icons
  const categories: Record<PartnerCategory | 'all', { label: string, icon: React.ReactNode }> = {
    all: { label: 'Todas', icon: <Ban className="h-4 w-4" /> },
    government: { label: 'Governo', icon: <Landmark className="h-4 w-4" /> },
    academic: { label: 'Acadêmicas', icon: <GraduationCap className="h-4 w-4" /> },
    development: { label: 'Fomento', icon: <Briefcase className="h-4 w-4" /> },
    private: { label: 'Empresas', icon: <Building className="h-4 w-4" /> },
    hub: { label: 'Hubs', icon: <Globe className="h-4 w-4" /> },
    media: { label: 'Mídia', icon: <Newspaper className="h-4 w-4" /> },
    association: { label: 'Associações', icon: <Users className="h-4 w-4" /> },
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6">
                {Object.entries(categories).map(([key, { label, icon }]) => (
                  <Button
                    key={key}
                    variant={selectedCategory === key ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(key as PartnerCategory | 'all')}
                    className={cn(
                      "text-xs",
                      selectedCategory === key ? "bg-red-600 hover:bg-red-700" : ""
                    )}
                  >
                    {React.cloneElement(icon as React.ReactElement, { className: "h-3 w-3 mr-1" })}
                    {label}
                  </Button>
                ))}
              </div>
  );
};

// Get category display info
const getCategoryInfo = (category?: PartnerCategory) => {
  const categories: Record<PartnerCategory, { label: string, icon: React.ReactNode, color: string }> = {
    government: { 
      label: 'Governo', 
      icon: <Landmark className="h-3 w-3" />,
      color: 'bg-blue-100 text-blue-800'
    },
    academic: { 
      label: 'Acadêmica', 
      icon: <GraduationCap className="h-3 w-3" />,
      color: 'bg-purple-100 text-purple-800'
    },
    development: { 
      label: 'Fomento', 
      icon: <Briefcase className="h-3 w-3" />,
      color: 'bg-green-100 text-green-800'
    },
    private: { 
      label: 'Empresa', 
      icon: <Building className="h-3 w-3" />,
      color: 'bg-slate-100 text-slate-800'
    },
    hub: { 
      label: 'Hub', 
      icon: <Globe className="h-3 w-3" />,
      color: 'bg-cyan-100 text-cyan-800'
    },
    media: { 
      label: 'Mídia', 
      icon: <Newspaper className="h-3 w-3" />,
      color: 'bg-orange-100 text-orange-800'
    },
    association: { 
      label: 'Associação', 
      icon: <Users className="h-3 w-3" />,
      color: 'bg-pink-100 text-pink-800'
    },
  };
  
  return category ? categories[category] : null;
};

// Componente de Ranking
interface RankingItemProps {
  position: number;
  name: string;
  category: PartnerCategory;
  count: number;
  isMonthly?: boolean;
  promoted?: boolean;
  onClick?: () => void;
}

/**
 * Partners section component using atomic design
 */
const PartnersSection: React.FC = () => {
  // Use the custom hook for partner data and filtering
  const { 
    selectedCategory, 
    setSelectedCategory,
    selectedLocation,
    setSelectedLocation,
    locations,
    partnersByTier,
    partners: partnersList
  } = usePartners();
  
  // Track expanded state for each tier
  const [expandedTiers, setExpandedTiers] = useState<Record<string, boolean>>({
    diamond: true,
    platinum: true,
    gold: true,
    silver: true,
    bronze: true,
    support: true,
    media: true,
    other: true
  });
  
  // Estado para alternar entre visualização normal e de ranking
  const [viewMode, setViewMode] = useState<'regular' | 'ranking'>('regular');
  
  // Estados para o ranking
  const [allTimeRanking, setAllTimeRanking] = useState<RankingData[]>([]);
  const [monthlyRanking, setMonthlyRanking] = useState<RankingData[]>([]);
  const [rankingPeriod, setRankingPeriod] = useState<'all-time' | 'monthly'>('monthly');
  const [promotedPartners, setPromotedPartners] = useState<number[]>([]);
  
  // Carregar dados de ranking
  useEffect(() => {
    const loadRankingData = async () => {
      try {
        // Carregar ranking geral
        const allTime = await db.getRanking('all-time');
        setAllTimeRanking(allTime);
        
        // Carregar ranking mensal
        const now = new Date();
        const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
        const monthly = await db.getRanking(currentMonth);
        setMonthlyRanking(monthly);
        
        // Identificar parceiros promovidos
        // Lógica: parceiros que subiram de nível com base em indicações mensais
        // TODO: Implementar lógica real quando tivermos dados históricos
        const promotedIds = await db.getPromotedPartners();
        setPromotedPartners(promotedIds);
      } catch (error) {
        console.error('Erro ao carregar dados de ranking:', error);
      }
    };
    
    loadRankingData();
  }, []);
  
  // Toggle expansion of a tier
  const toggleTierExpand = (tier: string) => {
    setExpandedTiers(prev => ({
      ...prev,
      [tier]: !prev[tier]
    }));
  };
  
  // Função para abrir diálogo de compartilhamento de um parceiro específico
  const openPartnerShareDialog = (partnerId: number) => {
    // Encontrar o elemento com o atributo data-partner-id
    const partnerElement = document.querySelector(`[data-partner-id="${partnerId}"]`);
    if (partnerElement) {
      // Encontrar o botão de compartilhamento dentro desse elemento
      const shareButton = partnerElement.querySelector('.share-button');
      if (shareButton instanceof HTMLElement) {
        shareButton.click();
      }
    }
  };

  return (
    <SectionTemplate id="parceiros" spacing="lg">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          eyebrow="Parceiros"
          title="Quem Apoia o SWMG"
          description="Conheça as organizações que tornam possível o Circuito Mineiro de Startup Weekend."
          align="center"
        />

        {/* Tabs para alternar entre visualização normal e ranking */}
        <div className="flex justify-center mb-6">
          <Tabs 
            defaultValue="regular" 
            className="w-full max-w-md"
            onValueChange={(value) => setViewMode(value as 'regular' | 'ranking')}
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="regular" className="flex items-center gap-1.5">
                <Building className="h-4 w-4" />
                <span>Parceiros</span>
              </TabsTrigger>
              <TabsTrigger value="ranking" className="flex items-center gap-1.5">
                <Award className="h-4 w-4" />
                <span>Ranking</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        {viewMode === 'regular' ? (
          <>
            {/* Filter Bar para visualização normal */}
            <FilterBar 
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              locations={locations}
            />
            
            {/* Partners by Tier */}
            <div className="mb-10">
              {Object.entries(partnersByTier).map(([tier, partners]) => (
                    partners.length > 0 && (
                  <TierSection
                    key={tier}
                    tier={tier}
                          partners={partners}
                    isExpanded={expandedTiers[tier] || false}
                    toggleExpand={() => toggleTierExpand(tier)}
                  />
                )
              ))}
              
              {/* Show empty state if no partners match filters */}
              {Object.values(partnersByTier).flat().length === 0 && (
                <div className="text-center py-12 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <Building className="h-12 w-12 mx-auto text-slate-300 mb-4" />
                  <p className="text-slate-500 text-lg mb-2">Nenhum parceiro encontrado</p>
                  <p className="text-slate-400 text-sm">
                    Tente ajustar os filtros de categoria ou localidade.
                  </p>
                </div>
              )}
            </div>
          </>
        ) : (
          // Visualização de Ranking
          <div className="mb-10">
            {/* Seletor de período (Mês atual / Geral) */}
            <div className="flex justify-center mb-6">
              <Tabs 
                defaultValue="monthly" 
                className="w-full max-w-md"
                onValueChange={(value) => setRankingPeriod(value as 'all-time' | 'monthly')}
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="monthly" className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    <span>Ranking Mensal</span>
                  </TabsTrigger>
                  <TabsTrigger value="all-time" className="flex items-center gap-1.5">
                    <Star className="h-4 w-4" />
                    <span>Ranking Geral</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            {/* Explicação do ranking */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-sm text-blue-800">
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Como funciona o ranking?</p>
                  <p className="text-blue-700">
                    Os parceiros ganham pontos cada vez que alguém acessa o site através do link único deles.
                    {rankingPeriod === 'monthly' ? (
                      <> Instituições governamentais e acadêmicas podem ser promovidas de nível com base no seu desempenho mensal.</>
                    ) : (
                      <> Este é o ranking histórico de todos os acessos desde o início do programa.</>
                    )}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Lista de Ranking */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Top 10 do ranking selecionado */}
              <div className="md:col-span-2 lg:col-span-2">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Crown className="h-5 w-5 text-amber-500" />
                  {rankingPeriod === 'monthly' ? 'Top 10 do Mês' : 'Ranking Geral'}
                </h3>
                
                <RankingList
                  data={rankingPeriod === 'monthly' ? monthlyRanking : allTimeRanking}
                  isMonthly={rankingPeriod === 'monthly'}
                  promotedPartners={rankingPeriod === 'monthly' ? promotedPartners : []}
                  onPartnerClick={openPartnerShareDialog}
                  maxItems={10}
                />
              </div>
              
              {/* Benefícios e como participar */}
              <div className="md:col-span-1 lg:col-span-1">
                <div className="bg-white rounded-lg border border-slate-200 p-4 mb-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-amber-500" />
                    Benefícios por Nível
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="p-3 border border-purple-200 rounded-lg bg-purple-50">
                      <div className="font-medium text-purple-800 mb-1 flex items-center gap-1.5">
                        <Award className="h-4 w-4 text-purple-500 rotate-45" />
                        Diamond
                      </div>
                      <ul className="text-sm text-purple-700 space-y-1">
                        <li className="flex items-center gap-1">
                          <Award className="h-3 w-3 text-purple-500 rotate-45" />
                          <span>Máxima visibilidade em todos os eventos</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <Award className="h-3 w-3 text-purple-500 rotate-45" />
                          <span>Benefícios exclusivos Diamond</span>
                        </li>
                      </ul>
                </div>
                    
                    <div className="p-3 border border-amber-200 rounded-lg bg-amber-50">
                      <div className="font-medium text-amber-800 mb-1 flex items-center gap-1.5">
                        <Award className="h-4 w-4 text-amber-500" />
                        Gold
                      </div>
                      <ul className="text-sm text-amber-700 space-y-1">
                        <li className="flex items-center gap-1">
                          <Award className="h-3 w-3 text-amber-500" />
                          <span>Destaque especial em eventos</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <Award className="h-3 w-3 text-amber-500" />
                          <span>Participação em bancas</span>
                        </li>
                      </ul>
          </div>

                    <div className="p-3 border border-slate-200 rounded-lg bg-slate-50">
                      <div className="font-medium text-slate-800 mb-1 flex items-center gap-1.5">
                        <Award className="h-4 w-4 text-slate-500" />
                        Silver
                      </div>
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li className="flex items-center gap-1">
                          <Award className="h-3 w-3 text-slate-500" />
                          <span>Visibilidade em todos materiais</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <Award className="h-3 w-3 text-slate-500" />
                          <span>Área exclusiva em eventos</span>
                        </li>
                      </ul>
          </div>

                    <div className="p-3 border border-orange-200 rounded-lg bg-orange-50">
                      <div className="font-medium text-orange-800 mb-1 flex items-center gap-1.5">
                        <Award className="h-4 w-4 text-orange-500" />
                        Bronze
                      </div>
                      <ul className="text-sm text-orange-700 space-y-1">
                        <li className="flex items-center gap-1">
                          <Award className="h-3 w-3 text-orange-500" />
                          <span>Logo no site e materiais</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <Award className="h-3 w-3 text-orange-500" />
                          <span>Participação em networking</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  </div>

                <div className="bg-white rounded-lg border border-slate-200 p-4">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Info className="h-5 w-5 text-indigo-500" />
                    Como Participar
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Compartilhe o link único do seu parceiro para ajudá-lo a subir no ranking e receber mais benefícios.
                  </p>
                  
                  <div className="border-t border-slate-200 pt-3 pb-1">
                    <h4 className="font-medium text-sm mb-2">Regras do Ranking:</h4>
                    <ul className="text-xs text-slate-600 space-y-2">
                      <li className="flex items-start gap-1">
                        <div className="h-4 w-4 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                          <ChevronUp className="h-3 w-3 text-green-600" />
                          </div>
                        <span>Instituições de governo e universidades podem ser promovidas de nível com base no ranking mensal</span>
                      </li>
                      <li className="flex items-start gap-1">
                        <div className="h-4 w-4 bg-yellow-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Users className="h-3 w-3 text-yellow-600" />
                        </div>
                        <span>Mínimo de 10 indicações para aparecer no ranking</span>
                      </li>
                      <li className="flex items-start gap-1">
                        <div className="h-4 w-4 bg-slate-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Building className="h-3 w-3 text-slate-600" />
                    </div>
                        <span>Empresas privadas participam, mas não aparecem no ranking por questões legais</span>
                      </li>
                      <li className="flex items-start gap-1">
                        <div className="h-4 w-4 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Link className="h-3 w-3 text-blue-600" />
                        </div>
                        <span>Cada acesso por IP é contado apenas uma vez a cada 24 horas</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
                    </div>
                  )}
      </div>
    </SectionTemplate>
  );
};

export default PartnersSection;
