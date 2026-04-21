import React from 'react';
import { PartnerCategory } from '@/modules/partners/types';
import { cn } from '@/lib/utils';
import { Award, Building, MapPin, TrendingUp, Crown, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { db } from '@/lib/db';

// Interface para dados de ranking
export interface RankingData {
  partnerId: number;
  partnerName: string;
  partnerCategory: PartnerCategory;
  count: number;
  position: number;
}

interface RankingListProps {
  data: RankingData[];
  isMonthly?: boolean;
  promotedPartners?: number[];
  onPartnerClick?: (partnerId: number) => void;
  emptyMessage?: string;
  maxItems?: number;
}

// Get category display info
const getCategoryInfo = (category: PartnerCategory) => {
  const categories: Record<PartnerCategory, { label: string, icon: React.ReactNode, color: string }> = {
    government: { 
      label: 'Governo', 
      icon: <MapPin className="h-3 w-3" />,
      color: 'bg-blue-100 text-blue-800'
    },
    academic: { 
      label: 'Acadêmica', 
      icon: <MapPin className="h-3 w-3" />,
      color: 'bg-purple-100 text-purple-800'
    },
    development: { 
      label: 'Fomento', 
      icon: <MapPin className="h-3 w-3" />,
      color: 'bg-green-100 text-green-800'
    },
    private: { 
      label: 'Empresa', 
      icon: <Building className="h-3 w-3" />,
      color: 'bg-slate-100 text-slate-800'
    },
    hub: { 
      label: 'Hub', 
      icon: <MapPin className="h-3 w-3" />,
      color: 'bg-cyan-100 text-cyan-800'
    },
    media: { 
      label: 'Mídia', 
      icon: <MapPin className="h-3 w-3" />,
      color: 'bg-orange-100 text-orange-800'
    },
    association: { 
      label: 'Associação', 
      icon: <MapPin className="h-3 w-3" />,
      color: 'bg-pink-100 text-pink-800'
    },
  };
  
  return categories[category];
};

// Componente de Item de Ranking
interface RankingItemProps {
  position: number;
  name: string;
  category: PartnerCategory;
  count: number;
  isMonthly?: boolean;
  promoted?: boolean;
  onClick?: () => void;
}

export const RankingItem: React.FC<RankingItemProps> = ({ 
  position, 
  name, 
  category, 
  count, 
  isMonthly = false,
  promoted = false,
  onClick
}) => {
  const categoryInfo = getCategoryInfo(category);
  
  return (
    <div 
      className={cn(
        "flex items-center justify-between p-3 mb-2 rounded-lg border transition-colors",
        promoted ? "bg-amber-50 border-amber-200" : "bg-white border-slate-200 hover:border-slate-300"
      )}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <div className="flex items-center gap-3">
        <div className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full font-semibold",
          position <= 3 ? "bg-amber-100 text-amber-800" : "bg-slate-100 text-slate-800"
        )}>
          {position}
        </div>
        <div>
          <div className="font-medium">{name}</div>
          {categoryInfo && (
            <span className={cn(
              "text-xs px-2 py-0.5 rounded-full inline-flex items-center gap-1",
              categoryInfo.color
            )}>
              {React.cloneElement(categoryInfo.icon as React.ReactElement, { className: "h-3 w-3" })}
              {categoryInfo.label}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="font-semibold">
          {count} {count === 1 ? 'indicação' : 'indicações'}
        </div>
        {promoted && (
          <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-300 gap-1">
            <TrendingUp className="h-3 w-3" />
            Promovido este mês
          </Badge>
        )}
      </div>
    </div>
  );
};

/**
 * Componente para exibir uma lista de ranking de parceiros
 */
const RankingList: React.FC<RankingListProps> = ({
  data,
  isMonthly = false,
  promotedPartners = [],
  onPartnerClick,
  emptyMessage = "Nenhum parceiro no ranking",
  maxItems = 10
}) => {
  // Filtrar empresas privadas e limitar ao máximo de itens
  const filteredData = data
    .filter(rank => rank.partnerCategory !== 'private')
    .slice(0, maxItems);
    
  // Estado vazio
  if (filteredData.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg border border-slate-200 shadow-sm">
        <Award className="h-12 w-12 mx-auto text-slate-300 mb-4" />
        <p className="text-slate-500 text-lg mb-2">{emptyMessage}</p>
        <p className="text-slate-400 text-sm">
          Os parceiros precisam de pelo menos 10 indicações para aparecer no ranking.
        </p>
      </div>
    );
  }
  
  return (
    <div className="space-y-3">
      {filteredData.map(rank => (
        <RankingItem
          key={rank.partnerId}
          position={rank.position}
          name={rank.partnerName}
          category={rank.partnerCategory}
          count={rank.count}
          isMonthly={isMonthly}
          promoted={promotedPartners.includes(rank.partnerId)}
          onClick={onPartnerClick ? () => onPartnerClick(rank.partnerId) : undefined}
        />
      ))}
    </div>
  );
};

export default RankingList; 