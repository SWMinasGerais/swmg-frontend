import { Partner, PartnerCategory } from './types';
import { statePartners, municipalPartners, cities } from './data';

/**
 * Get all cities supported by the system
 */
export const getCities = (): string[] => {
  return cities;
};

/**
 * Get state-level partners
 * @param category Optional category filter
 * @returns Record of partners by category or filtered partners array
 */
export const getStatePartners = (category?: PartnerCategory | 'all'): Record<PartnerCategory, Partner[]> | Partner[] => {
  if (!category || category === 'all') {
    return statePartners;
  }
  return statePartners[category] || [];
};

/**
 * Get all municipal partners across all cities
 * @param category Optional category filter
 * @returns All municipal partners, optionally filtered by category
 */
export const getAllMunicipalPartners = (category?: PartnerCategory | 'all'): Partner[] => {
  // Get all partners from all cities
  const allPartners = Object.values(municipalPartners)
    .flatMap(cityPartners => Object.values(cityPartners).flat());
  
  // Filter by category if needed
  return !category || category === 'all' ? allPartners : allPartners.filter(p => p.category === category);
};

/**
 * Get municipal partners for a specific city
 * @param city The city to get partners for
 * @param category Optional category filter
 * @returns Partners for the city, either as a record by category or filtered by category
 */
export const getMunicipalPartnersForCity = (
  city: string, 
  category?: PartnerCategory | 'all'
): Record<PartnerCategory, Partner[]> | Partner[] => {
  const cityPartners = municipalPartners[city] || {} as Record<PartnerCategory, Partner[]>;
  
  if (!category || category === 'all') {
    return cityPartners;
  }
  
  return cityPartners[category] || [];
};
