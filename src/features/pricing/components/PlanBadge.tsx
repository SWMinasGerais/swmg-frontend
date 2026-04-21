import React from 'react';
import { cn } from '@/lib/utils';
import { MapPin, Globe, Heart, Video } from 'lucide-react';

type PlanLevel = 'municipal' | 'estadual' | 'apoio' | 'midia';

type PlanBadgeProps = {
  level: PlanLevel;
  className?: string;
  showIcon?: boolean;
};

/**
 * Badge component for plan level
 */
const PlanBadge: React.FC<PlanBadgeProps> = ({ level, className, showIcon = true }) => {
  const badgeStyles: Record<PlanLevel, string> = {
    municipal: 'bg-blue-100 text-blue-800 border border-blue-200',
    estadual: 'bg-red-100 text-red-800 border border-red-200',
    apoio: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
    midia: 'bg-amber-100 text-amber-800 border border-amber-200'
  };

  const badgeLabels: Record<PlanLevel, string> = {
    municipal: 'Municipal',
    estadual: 'Estadual',
    apoio: 'Apoio',
    midia: 'Mídia'
  };
  
  const badgeIcons: Record<PlanLevel, React.ReactNode> = {
    municipal: <MapPin className="h-3 w-3 mr-1" />,
    estadual: <Globe className="h-3 w-3 mr-1" />,
    apoio: <Heart className="h-3 w-3 mr-1" />,
    midia: <Video className="h-3 w-3 mr-1" />
  };
  
  return (
    <span className={cn(
      "px-1.5 py-0.5 text-xs font-medium rounded-full inline-flex items-center",
      badgeStyles[level],
      className
    )}>
      {showIcon && badgeIcons[level]}
      {badgeLabels[level]}
    </span>
  );
};

export default PlanBadge; 