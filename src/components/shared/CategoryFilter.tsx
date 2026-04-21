import React from 'react';
import { Ban, Landmark, GraduationCap, Briefcase, Building, Globe, Newspaper, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PartnerCategory } from '@/modules/partners/types';

type CategoryFilterProps = {
  selectedCategory: PartnerCategory | 'all';
  setSelectedCategory: (category: PartnerCategory | 'all') => void;
};

/**
 * Category filter component with buttons for each partner category
 */
const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  setSelectedCategory 
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

export default CategoryFilter; 