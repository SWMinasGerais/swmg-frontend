import React from 'react';
import { cn } from '@/lib/utils';

type PartnerTier = 'diamond' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'media' | 'support' | string;

type TierBadgeProps = {
  tier: PartnerTier;
  size?: 'sm' | 'md';
};

/**
 * Badge component for partner tiers with color coding
 */
const TierBadge: React.FC<TierBadgeProps> = ({ tier, size = 'sm' }) => {
  // Tier information mapping
  const tiers: Record<string, { label: string, color: string }> = {
    'diamond': { 
      label: 'Diamante', 
      color: 'bg-blue-50 text-blue-700 border-blue-200 border'
    },
    'platinum': { 
      label: 'Platina', 
      color: 'bg-slate-50 text-slate-700 border-slate-200 border'
    },
    'gold': { 
      label: 'Ouro', 
      color: 'bg-amber-50 text-amber-700 border-amber-200 border'
    },
    'silver': { 
      label: 'Prata', 
      color: 'bg-gray-50 text-gray-700 border-gray-200 border'
    },
    'bronze': { 
      label: 'Bronze', 
      color: 'bg-orange-50 text-orange-700 border-orange-200 border'
    },
    'media': { 
      label: 'Mídia', 
      color: 'bg-red-50 text-red-700 border-red-200 border'
    },
    'support': { 
      label: 'Apoio', 
      color: 'bg-green-50 text-green-700 border-green-200 border'
    },
    'other': { 
      label: 'Parceiro', 
      color: 'bg-purple-50 text-purple-700 border-purple-200 border'
    }
  };
  
  const tierInfo = tiers[tier] || tiers.other;
  const textSize = size === 'sm' ? 'text-xs' : 'text-sm';
  const padding = size === 'sm' ? 'px-2 py-0.5' : 'px-2.5 py-1';
  
  return (
    <span className={cn(
      `${textSize} ${padding} font-medium rounded-md inline-block`,
      tierInfo.color
    )}>
      {tierInfo.label}
    </span>
  );
};

export default TierBadge; 