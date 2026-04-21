import React from 'react';
import { Partner } from '@/modules/partners/types';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import PartnersGrid from './PartnersGrid';

interface TierSectionProps {
  tier: string;
  partners: Partner[];
  isExpanded: boolean;
  toggleExpand: () => void;
  showMetrics?: boolean;
  gridType?: 'logos' | 'cards';
}

// Helper function to get tier display info
const getTierInfo = (tier: string) => {
  const tiers: Record<string, { label: string, color: string }> = {
    diamond: { 
      label: 'Diamante', 
      color: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
    },
    platinum: { 
      label: 'Platina', 
      color: 'bg-gradient-to-r from-slate-400 to-slate-500 text-white' 
    },
    gold: { 
      label: 'Ouro', 
      color: 'bg-gradient-to-r from-amber-400 to-amber-500 text-amber-900' 
    },
    silver: { 
      label: 'Prata', 
      color: 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800' 
    },
    bronze: { 
      label: 'Bronze', 
      color: 'bg-gradient-to-r from-orange-300 to-orange-400 text-orange-900' 
    },
    support: { 
      label: 'Apoio', 
      color: 'bg-gradient-to-r from-green-200 to-green-300 text-green-800' 
    },
    media: { 
      label: 'Mídia', 
      color: 'bg-gradient-to-r from-red-200 to-red-300 text-red-800' 
    },
    other: { 
      label: 'Outros', 
      color: 'bg-gradient-to-r from-purple-200 to-purple-300 text-purple-800' 
    }
  };

  return tiers[tier] || { label: tier.charAt(0).toUpperCase() + tier.slice(1), color: 'bg-gray-200 text-gray-800' };
};

const TierSection: React.FC<TierSectionProps> = ({ 
  tier, 
  partners, 
  isExpanded, 
  toggleExpand,
  showMetrics = true,
  gridType = 'cards'
}) => {
  const { label, color } = getTierInfo(tier);
  const partnerCount = partners.length;
  
  // Number of columns based on tier importance
  const getColumns = (): 2 | 3 | 4 | 5 | 6 => {
    switch(tier) {
      case 'diamond': return 3;
      case 'gold': return 4;
      case 'silver': return 4;
      case 'bronze': return 5;
      default: return 6;
    }
  };

  return (
    <div className="mb-8 last:mb-0">
      <button 
        onClick={toggleExpand}
        className={cn(
          "w-full py-2 px-4 rounded-lg mb-4 font-medium flex items-center justify-between transition-colors",
          color
        )}
      >
        <span>{label} ({partnerCount})</span>
        {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>
      
      {isExpanded && (
        <div className="mb-6">
          <PartnersGrid 
            partners={partners} 
            columns={getColumns()}
            showMetrics={showMetrics}
            gridType={gridType}
          />
        </div>
      )}
    </div>
  );
};

export default TierSection; 