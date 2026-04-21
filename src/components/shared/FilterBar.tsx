import React from 'react';
import CategoryFilter from '@/components/shared/CategoryFilter';
import LocationFilter from '@/components/shared/LocationFilter';
import { PartnerCategory } from '@/modules/partners/types';
import { Building, Globe } from 'lucide-react';

type FilterBarProps = {
  selectedCategory: PartnerCategory | 'all';
  setSelectedCategory: (category: PartnerCategory | 'all') => void;
  selectedLocation: string | 'all';
  setSelectedLocation: (location: string | 'all') => void;
  locations: string[];
};

/**
 * Filter bar component for partners section with category and location filters
 */
const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory, 
  setSelectedCategory,
  selectedLocation,
  setSelectedLocation,
  locations 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5 mb-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
        {/* Category Filter */}
        <div>
          <h2 className="text-lg font-bold mb-3 flex items-center">
            <Globe className="h-5 w-5 text-red-600 mr-2" />
            Filtrar por Categoria
          </h2>
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
          />
        </div>
        
        {/* Location Filter */}
        <div>
          <h2 className="text-lg font-bold mb-3 flex items-center">
            <Building className="h-5 w-5 text-red-600 mr-2" />
            Filtrar por Localidade
          </h2>
          <LocationFilter 
            locations={locations} 
            selectedLocation={selectedLocation} 
            setSelectedLocation={setSelectedLocation} 
          />
          </div>
      </div>
    </div>
  );
};

export default FilterBar; 