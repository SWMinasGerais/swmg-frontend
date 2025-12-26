import { useState, useMemo } from 'react';
import { Partner, PartnerCategory } from './types';
import { getStatePartners, getMunicipalPartnersForCity, getCities } from './service';

/**
 * Custom hook to manage partners data, filtering, and state
 */
export const usePartners = () => {
  const [selectedCategory, setSelectedCategory] = useState<PartnerCategory | 'all'>('all');
  const [selectedLocation, setSelectedLocation] = useState<string | 'all'>('all');
  
  // Get all cities and add "Estado" as a location option
  const cities = getCities();
  const locations = ['Estado', ...cities];
  
  // Get all partners based on location and category
  const partners = useMemo(() => {
    // If "Estado" is selected, return only state partners
    if (selectedLocation === 'Estado') {
      const statePartnersData = getStatePartners();
      return selectedCategory === 'all' 
        ? statePartnersData 
        : { [selectedCategory]: statePartnersData[selectedCategory] };
    }
    
    // If a specific city is selected
    if (selectedLocation !== 'all' && selectedLocation !== 'Estado') {
      const cityPartners = getMunicipalPartnersForCity(selectedLocation) as Record<PartnerCategory, Partner[]>;
      return selectedCategory === 'all' 
        ? cityPartners 
        : { [selectedCategory]: cityPartners[selectedCategory] || [] };
    }
    
    // If "all" locations selected, combine state and municipal partners
    const statePartnersData = getStatePartners() as Record<PartnerCategory, Partner[]>;
    
    // Get all municipal partners
    const allMunicipalPartners = cities.reduce((result, city) => {
      const cityPartners = getMunicipalPartnersForCity(city) as Record<PartnerCategory, Partner[]>;
      
      Object.entries(cityPartners).forEach(([category, partners]) => {
        const cat = category as PartnerCategory;
        if (!result[cat]) result[cat] = [];
        result[cat] = [...result[cat], ...partners];
      });
      
      return result;
    }, {} as Record<PartnerCategory, Partner[]>);
    
    // Combine state and municipal partners
    const combinedPartners = {} as Record<PartnerCategory, Partner[]>;
    
    // Initialize all categories
    const allCategories: PartnerCategory[] = ['government', 'academic', 'development', 'private', 'hub', 'media', 'association'];
    allCategories.forEach(cat => {
      combinedPartners[cat] = [...(statePartnersData[cat] || []), ...(allMunicipalPartners[cat] || [])];
    });
    
    return selectedCategory === 'all' 
      ? combinedPartners 
      : { [selectedCategory]: combinedPartners[selectedCategory] || [] };
  }, [selectedLocation, selectedCategory, cities]);
  
  // Group partners by tier for display
  const partnersByTier = useMemo(() => {
    const result: Record<string, Partner[]> = {
      'diamond': [],
      'platinum': [],
      'gold': [],
      'silver': [],
      'bronze': [],
      'support': [],
      'media': [],
      'other': []
    };
    
    // Flatten and group all partners by tier
    Object.values(partners).forEach(categoryPartners => {
      categoryPartners.forEach(partner => {
        const tier = partner.tier || 'other';
        if (!result[tier]) {
          result[tier] = [];
        }
        result[tier].push(partner);
      });
    });
    
    return result;
  }, [partners]);
  
  return {
    selectedCategory,
    setSelectedCategory,
    selectedLocation,
    setSelectedLocation,
    locations,
    partners,
    partnersByTier
  };
};
