import React from 'react';
import { Landmark, GraduationCap, Briefcase, Building, Globe, Newspaper, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PartnerCategory } from '@/modules/partners/types';

type CategoryBadgeProps = {
  category: PartnerCategory;
  size?: 'sm' | 'md';
};

/**
 * Category badge component with icon and label
 */
const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category, size = 'md' }) => {
  // Category information mapping
  const categories: Record<PartnerCategory, { label: string, icon: React.ReactNode, color: string }> = {
    government: { 
      label: 'Governo', 
      icon: <Landmark />,
      color: 'bg-blue-100 text-blue-800'
    },
    academic: { 
      label: 'Acadêmica', 
      icon: <GraduationCap />,
      color: 'bg-purple-100 text-purple-800'
    },
    development: { 
      label: 'Fomento', 
      icon: <Briefcase />,
      color: 'bg-green-100 text-green-800'
    },
    private: { 
      label: 'Empresa', 
      icon: <Building />,
      color: 'bg-slate-100 text-slate-800'
    },
    hub: { 
      label: 'Hub', 
      icon: <Globe />,
      color: 'bg-cyan-100 text-cyan-800'
    },
    media: { 
      label: 'Mídia', 
      icon: <Newspaper />,
      color: 'bg-orange-100 text-orange-800'
    },
    association: { 
      label: 'Associação', 
      icon: <Users />,
      color: 'bg-pink-100 text-pink-800'
    },
  };

  const categoryInfo = categories[category];
  const iconSize = size === 'sm' ? 'h-3 w-3' : 'h-4 w-4';
  const textSize = size === 'sm' ? 'text-xs' : 'text-sm';
  const padding = size === 'sm' ? 'px-2 py-0.5' : 'px-2.5 py-1';

  return (
    <span className={cn(
      `${textSize} ${padding} rounded-full flex items-center gap-1.5 font-medium`,
      categoryInfo.color
    )}>
      {React.cloneElement(categoryInfo.icon as React.ReactElement, { className: iconSize })}
      {categoryInfo.label}
    </span>
  );
};

export default CategoryBadge; 