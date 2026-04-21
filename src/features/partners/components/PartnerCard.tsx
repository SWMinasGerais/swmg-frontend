import React, { useState, useCallback } from 'react';
import { Partner, PartnerCategory, PartnerTier } from '@/modules/partners/types';
import { cn } from '@/lib/utils';
import { 
  MapPin, ExternalLink, Eye, Calendar, 
  Crown, Diamond, Building, Star, Users, Zap, Award, Share2, ChevronDown, ChevronUp,
  Briefcase, GraduationCap, Newspaper, Globe, Landmark, Info
} from 'lucide-react';
import { toast } from "@/components/ui/use-toast";
import { getInitials, getLogoBackground, isStatePartner } from '@/modules/partners/utils';
import { TIER_COLORS, CATEGORY_INFO } from '@/modules/partners/data';
import { getMockStats, getPartnerDescription } from '@/modules/partners/mocks';

// Ícones para tier e categoria
const TIER_ICON: Record<PartnerTier, React.ReactNode> = {
  diamond: <Diamond className="w-3.5 h-3.5" />,
  platinum: <Star className="w-3.5 h-3.5" />,
  gold: <Crown className="w-3.5 h-3.5" />,
  silver: <Award className="w-3.5 h-3.5" />,
  bronze: <Award className="w-3.5 h-3.5" />,
  support: <Users className="w-3.5 h-3.5" />,
  media: <Zap className="w-3.5 h-3.5" />
};

const CATEGORY_ICON: Record<PartnerCategory, React.ReactNode> = {
  government: <Landmark className="h-3.5 w-3.5" />,
  academic: <GraduationCap className="h-3.5 w-3.5" />,
  development: <Briefcase className="h-3.5 w-3.5" />,
  private: <Building className="h-3.5 w-3.5" />,
  hub: <Globe className="h-3.5 w-3.5" />,
  media: <Newspaper className="h-3.5 w-3.5" />,
  association: <Users className="h-3.5 w-3.5" />
};

// Tradução dos níveis
const TIER_LABEL: Record<PartnerTier, string> = {
  diamond: 'DIAMANTE',
  platinum: 'PLATINA',
  gold: 'OURO',
  silver: 'PRATA',
  bronze: 'BRONZE',
  support: 'APOIO',
  media: 'MÍDIA'
};

type PartnerCardProps = {
  partner: Partner & { id?: number, dbId?: number };
  highlight?: boolean;
  dbId?: number;
  showMetrics?: boolean;
  compact?: boolean;
};

const PartnerCard: React.FC<PartnerCardProps> = ({ 
  partner, 
  highlight = false, 
  dbId,
  showMetrics = true,
  compact = false
}) => {
  const [imageError, setImageError] = useState(partner.logo === 'placeholder');
  const [imagePath, setImagePath] = useState(partner.logo);
  const [showDetails, setShowDetails] = useState(false);
  
  const id = partner.dbId || dbId || partner.id || 0;
  const isStateGov = isStatePartner(partner);
  const tierColor = partner.tier ? TIER_COLORS[partner.tier] : '';
  const tierIcon = partner.tier ? TIER_ICON[partner.tier] : null;
  const tierLabel = partner.tier ? TIER_LABEL[partner.tier] : '';
  const categoryInfo = CATEGORY_INFO[partner.category];
  const categoryIcon = CATEGORY_ICON[partner.category];
  
  // Obter estatísticas e descrição
  const stats = getMockStats(partner);
  const thisMonthStats = getMockStats(partner, true);
  const description = getPartnerDescription(partner);
  
  // URL de compartilhamento
  const shareUrl = `https://startup-pulse.com.br/partners/${partner.name.toLowerCase().replace(/\s+/g, '-')}`;
  
  // Handle image load error
  const handleImageError = useCallback(() => {
    console.error(`Failed to load image: ${partner.logo}`);
    setImageError(true);
    
    if (partner.logo.startsWith('/')) {
      const relativePath = partner.logo.slice(1);
      console.log(`Trying relative path: ${relativePath}`);
      setImagePath(relativePath);
    }
  }, [partner.logo]);
  
  const copyShareLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast({
      title: "Link copiado!",
      description: "O link de compartilhamento foi copiado para sua área de transferência.",
    });
  };

  // Classe para o card principal
  const cardClass = cn(
    "group relative overflow-hidden rounded-lg bg-white border transition-all h-full flex flex-col",
    "shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-indigo-200 transition-all duration-300",
    highlight ? "ring-2 ring-indigo-400" : "",
    isStateGov ? "border-l-4 border-l-green-500 border-gray-200" : "border-gray-200"
  );

  // Determinar badge de tier e cor
  const tierBadgeStyle = partner.tier ? tierColor.split(' ')[1] : '';
  const tierTextStyle = partner.tier ? 'text-white' : '';
  
  // Se for compact, layout mais denso
  if (compact) {
    return (
      <div className={cardClass} data-partner-id={id}>
        <div className="flex p-2">
          {/* Logo */}
          <div className="mr-2">
            <div className={cn(
              "h-10 w-10 flex items-center justify-center rounded",
              imageError ? getLogoBackground(partner) : "bg-white"
            )}>
              {imageError ? (
                <span className="text-white font-bold text-sm">
                  {getInitials(partner.name)}
                </span>
              ) : (
                <img 
                  src={imagePath} 
                  alt={partner.name} 
                  className="max-h-full max-w-full object-contain" 
                  onError={handleImageError}
                />
              )}
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            {/* Tier badge (pequeno ao lado do nome) */}
            <div className="flex items-center mb-0.5">
              <h3 className="font-medium text-gray-800 text-sm truncate">
                {partner.name}
              </h3>
              
              {partner.tier && (
                <div className={cn(
                  "ml-1.5 text-[10px] rounded-full px-1.5 py-0.5 flex items-center",
                  tierBadgeStyle, tierTextStyle
                )}>
                  {tierLabel}
                </div>
              )}
            </div>
            
            {/* Categoria e cidade */}
            <div className="flex items-center text-[10px] text-gray-600">
              <div className="flex items-center">
                {React.cloneElement(categoryIcon as React.ReactElement, { className: "h-3 w-3 mr-0.5" })}
                <span>{categoryInfo.label}</span>
              </div>
              
              {partner.city && (
                <>
                  <span className="mx-1">•</span>
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-0.5" />
                    <span className="truncate">{partner.city}</span>
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* Botões condensados */}
          <div className="flex flex-col ml-1 justify-between">
            <a 
              href={partner.website || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1 text-indigo-500 hover:bg-indigo-50 rounded-full transition-colors"
              title="Acessar site"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            
            <button
              onClick={copyShareLink}
              className="p-1 text-indigo-500 hover:bg-indigo-50 rounded-full transition-colors"
              title="Compartilhar"
            >
              <Share2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
        
        {/* Barra de stats minimalista */}
        {showMetrics && (
          <div className="border-t border-gray-100 px-2 py-1 text-[10px] flex justify-between">
            <div className="flex items-center text-indigo-600">
              <Eye className="h-2.5 w-2.5 mr-0.5" />
              <span>{stats.views}</span>
            </div>
            <div className="flex items-center text-green-600">
              <Calendar className="h-2.5 w-2.5 mr-0.5" />
              <span>{thisMonthStats.views}</span>
            </div>
            {stats.ranking.category && (
              <div className="flex items-center text-amber-600">
                <Crown className="h-2.5 w-2.5 mr-0.5" />
                <span>{stats.ranking.category}º</span>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  // Layout padrão (não compacto)
  return (
    <div className={cardClass} data-partner-id={id}>
      {/* Tier Badge */}
      {partner.tier && (
        <div className={cn(
          "relative w-full text-center py-1.5 text-xs font-semibold", 
          tierBadgeStyle, tierTextStyle
        )}>
          <div className="flex items-center justify-center">
            {React.cloneElement(tierIcon as React.ReactElement, { className: "mr-1" })}
            {tierLabel}
          </div>
          
          {isStateGov && (
            <div className="absolute top-0 right-0 bottom-0 bg-green-600 text-white px-2 flex items-center justify-center text-[10px] font-bold">
              ESTADUAL
            </div>
          )}
        </div>
      )}
      
      <div className="flex-1 flex flex-col p-3">
        {/* Logo e nome */}
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="mb-2">
            <div className={cn(
              "h-16 w-16 flex items-center justify-center rounded-full",
              imageError ? getLogoBackground(partner) : "bg-white"
            )}>
              {imageError ? (
                <span className="text-white font-bold text-2xl">
                  {getInitials(partner.name)}
                </span>
              ) : (
                <img 
                  src={imagePath} 
                  alt={partner.name} 
                  className="max-h-full max-w-full object-contain p-1" 
                  onError={handleImageError}
                />
              )}
            </div>
          </div>
          
          {/* Nome do parceiro */}
          <h3 className="font-semibold text-center mb-1 text-gray-800 text-sm">
            {partner.name}
          </h3>
          
          {/* Categoria e cidade em uma linha */}
          <div className="flex items-center text-xs text-gray-600 mb-3">
            <div className="flex items-center">
              {React.cloneElement(categoryIcon as React.ReactElement, { className: "h-3 w-3 mr-0.5" })}
              <span>{categoryInfo.label}</span>
            </div>
            
            {partner.city && (
              <>
                <span className="mx-1">•</span>
                <div className="flex items-center">
                  <MapPin className="h-3 w-3 mr-0.5" />
                  <span>{partner.city}</span>
                </div>
              </>
            )}
          </div>
        </div>
        
        {/* Métricas em cards modernos */}
        {showMetrics && (
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-2 flex flex-col items-center border border-indigo-100">
              <div className="text-xs text-indigo-700 flex items-center font-medium">
                <Eye className="h-3 w-3 mr-1" />
                Visualizações
              </div>
              <div className="text-lg font-bold text-indigo-800">
                {stats.views}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-2 flex flex-col items-center border border-green-100">
              <div className="text-xs text-green-700 flex items-center font-medium">
                <Calendar className="h-3 w-3 mr-1" />
                Este mês
              </div>
              <div className="text-lg font-bold text-green-800">
                {thisMonthStats.views}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Botão de expandir */}
      {(stats.ranking || description) && (
        <div className="border-t border-gray-100">
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="w-full text-xs flex items-center justify-center py-1.5 text-gray-600 hover:bg-gray-50 transition-colors"
          >
            {showDetails ? (
              <>
                Menos informações <ChevronUp className="h-3 w-3 ml-1" />
              </>
            ) : (
              <>
                Mais informações <ChevronDown className="h-3 w-3 ml-1" />
              </>
            )}
          </button>
        </div>
      )}
      
      {/* Seção expandível */}
      {showDetails && (
        <div className="px-3 py-2 border-t border-gray-100 animate-fadeIn">
          {/* Descrição */}
          {description && (
            <div className="text-xs text-gray-600 mb-3 italic">
              <div className="flex">
                <Info className="h-3.5 w-3.5 mr-1 text-gray-400 flex-shrink-0 mt-0.5" />
                <p>{description}</p>
              </div>
            </div>
          )}
          
          {/* Rankings */}
          {stats.ranking && (
            <div className="grid grid-cols-2 gap-2">
              {/* Ranking por categoria */}
              {stats.ranking.category && (
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-2 flex flex-col items-center border border-amber-100">
                  <div className="text-xs text-amber-700 font-medium">Ranking Categoria</div>
                  <div className={cn(
                    "flex items-center gap-1 font-bold text-base",
                    stats.ranking.category <= 3 ? "text-amber-600" : "text-amber-800"
                  )}>
                    {stats.ranking.category <= 3 && <Crown className="h-3.5 w-3.5" />}
                    {stats.ranking.category}º
                  </div>
                </div>
              )}
              
              {/* Ranking geral */}
              {stats.ranking.general && (
                <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-lg p-2 flex flex-col items-center border border-blue-100">
                  <div className="text-xs text-blue-700 font-medium">Ranking Geral</div>
                  <div className={cn(
                    "flex items-center gap-1 font-bold text-base",
                    stats.ranking.general <= 3 ? "text-blue-600" : "text-blue-800"
                  )}>
                    {stats.ranking.general <= 3 && <Crown className="h-3.5 w-3.5" />}
                    {stats.ranking.general}º
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
      
      {/* Footer com ações */}
      <div className="mt-auto grid grid-cols-2 border-t border-gray-100">
        <a 
          href={partner.website || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className="py-2 flex items-center justify-center gap-1 text-indigo-600 hover:bg-indigo-50 text-xs font-medium transition-colors border-r border-gray-100"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Visitar Site
        </a>
        
        <button 
          onClick={copyShareLink}
          className="py-2 flex items-center justify-center gap-1 text-indigo-600 hover:bg-indigo-50 text-xs font-medium transition-colors"
        >
          <Share2 className="h-3.5 w-3.5" />
          Compartilhar
        </button>
      </div>
    </div>
  );
};

export default PartnerCard;

