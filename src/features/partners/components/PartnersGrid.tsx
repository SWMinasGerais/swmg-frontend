import React from 'react';
import PartnerLogo from '@/features/partners/components/PartnerLogo';
import PartnerCard from '@/features/partners/components/PartnerCard';
import { Partner } from '@/modules/partners/types';
import { cn } from '@/lib/utils';

interface PartnersGridProps {
  partners: Partner[];
  columns?: 2 | 3 | 4 | 5 | 6;
  filterByTier?: Partner['tier'] | 'all';
  showTierLabels?: boolean;
  className?: string;
  compact?: boolean;
  showMetrics?: boolean;
  gridType?: 'logos' | 'cards';
}

const PartnersGrid: React.FC<PartnersGridProps> = ({
  partners,
  columns = 4,
  filterByTier = 'all',
  showTierLabels = false,
  className = '',
  compact = false,
  showMetrics = true,
  gridType = 'logos'
}) => {
  const columnsClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
    6: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'
  };

  const tierLabels = {
    diamond: 'Diamante',
    platinum: 'Platina',
    gold: 'Ouro',
    silver: 'Prata',
    bronze: 'Bronze',
    media: 'Mídia',
    support: 'Apoio'
  };

  // Size mapping based on tier
  const getTierSize = (tier?: string) => {
    switch(tier) {
      case 'diamond': return compact ? 'sm' : 'md';
      case 'platinum': return compact ? 'sm' : 'md';
      case 'gold': return compact ? 'xs' : 'sm';
      default: return 'xs';
    }
  };

  // Filter partners if a tier is selected
  const filteredPartners = filterByTier === 'all' 
    ? partners 
    : partners.filter(partner => partner.tier === filterByTier);
  
  // Group partners by tier if showing tier labels
  const groupedPartners = showTierLabels 
    ? filteredPartners.reduce((groups, partner) => {
        const tier = partner.tier || 'support';
        if (!groups[tier]) {
          groups[tier] = [];
        }
        groups[tier].push(partner);
        return groups;
      }, {} as Record<string, Partner[]>)
    : { all: filteredPartners };

  if (filteredPartners.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-slate-600">Nenhum parceiro encontrado.</p>
      </div>
    );
  }

  if (showTierLabels) {
    // Sort tiers by priority
    const tierOrder = ['diamond', 'platinum', 'gold', 'silver', 'bronze', 'media', 'support'];
    const sortedTiers = Object.keys(groupedPartners).sort(
      (a, b) => tierOrder.indexOf(a) - tierOrder.indexOf(b)
    );

    return (
      <div className={className}>
        {sortedTiers.map(tier => {
          const partners = groupedPartners[tier];
          if (partners.length === 0) return null;
          
          return (
            <div key={tier} className="mb-12 last:mb-0">
              <div className="flex flex-col items-center mb-6">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
              {tier === 'support' ? 'Apoiadores' : 
               tier === 'media' ? 'Parceiros de Mídia' : 
               `Parceiros ${tierLabels[tier as keyof typeof tierLabels]}`}
            </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
              </div>
              
            <div className={cn(
                `grid gap-4 md:gap-6`,
                gridType === 'logos' ? (
                  // Configuração adaptativa para logos
                  tier === 'diamond' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4' :
                  tier === 'platinum' ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5' :
                  tier === 'gold' ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6' :
                  'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'
                ) : (
                  // Configuração adaptativa para cards
                  tier === 'diamond' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3' :
                  tier === 'platinum' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' :
                  tier === 'gold' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' :
                  'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
                )
            )}>
                {partners.map((partner, idx) => (
                  gridType === 'logos' ? (
                <PartnerLogo
                      key={`${partner.id}-${idx}`}
                  name={partner.name}
                  logo={partner.logo}
                  website={partner.website}
                  size={getTierSize(tier)}
                  showName={true}
                  className={cn(
                    'flex flex-col items-center justify-center',
                    tier === 'diamond' && 'col-span-1 md:col-span-1'
                  )}
                />
                  ) : (
                    <PartnerCard
                      key={`${partner.id}-card-${idx}`}
                      partner={partner}
                      highlight={tier === 'diamond' || tier === 'platinum'}
                      dbId={partner.dbId}
                      showMetrics={showMetrics}
                    />
                  )
              ))}
            </div>
          </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`grid ${columnsClass[columns]} gap-4 md:gap-6 ${className}`}>
      {filteredPartners.map((partner, idx) => (
        gridType === 'logos' ? (
        <PartnerLogo
            key={`${partner.id}-f-${idx}`}
          name={partner.name}
          logo={partner.logo}
          website={partner.website}
          size={getTierSize(partner.tier)}
          showName={true}
        />
        ) : (
          <PartnerCard
            key={`${partner.id}-fc-${idx}`}
            partner={partner}
            highlight={partner.tier === 'diamond' || partner.tier === 'platinum'}
            dbId={partner.dbId}
            showMetrics={showMetrics}
          />
        )
      ))}
    </div>
  );
};

export default PartnersGrid; 