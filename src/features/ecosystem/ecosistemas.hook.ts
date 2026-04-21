import { useState, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import EcosistemasService from "./ecosistemas.service";
import { Ecosystem, EntityType, EcosystemFilter } from "./ecosistemas.type";

export const useEcosystemasList = (
  initialPage: number = 1,
  initialLimit: number = 10
) => {
  // State for pagination and filters
  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);
  const [filters, setFilters] = useState<EcosystemFilter>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<EntityType | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  // Get cities for filter
  const citiesQuery = useQuery({
    queryKey: ["ecosystem-cities"],
    queryFn: () => EcosistemasService.listarCidades(),
    staleTime: 1000 * 60 * 30, // 30 minutes
  });

  // Get types for filter
  const typesQuery = useQuery({
    queryKey: ["ecosystem-types"],
    queryFn: () => EcosistemasService.listarTipos(),
    staleTime: 1000 * 60 * 30, // 30 minutes
  });

  // Apply filters to query
  useEffect(() => {
    const newFilters: EcosystemFilter = {};
    
    if (searchTerm) {
      newFilters.search = searchTerm;
    }
    
    if (selectedType) {
      newFilters.type = selectedType;
    }
    
    if (selectedCity) {
      newFilters.city = selectedCity;
    }
    
    setFilters(newFilters);
    setPage(1); // Reset to first page when filters change
  }, [searchTerm, selectedType, selectedCity]);

  // Main query for ecosystem data
  const {
    data,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ["ecosystems", page, limit, filters],
    queryFn: () => EcosistemasService.listarEcossistemas(page, limit, filters),
    keepPreviousData: true,
  });

  // Computed values
  const total = data?.meta.total || 0;
  const ecosystems = data?.data || [];
  const totalPages = Math.ceil(total / limit);
  const hasNextPage = page < totalPages;
  const hasPreviousPage = page > 1;

  // Navigation helpers
  const nextPage = useCallback(() => {
    if (hasNextPage) {
      setPage(prev => prev + 1);
    }
  }, [hasNextPage]);

  const previousPage = useCallback(() => {
    if (hasPreviousPage) {
      setPage(prev => prev - 1);
    }
  }, [hasPreviousPage]);

  const goToPage = useCallback((newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  }, [totalPages]);

  // Reset all filters
  const resetFilters = useCallback(() => {
    setSearchTerm("");
    setSelectedType(null);
    setSelectedCity(null);
  }, []);

  return {
    // Data
    ecosystems,
    total,
    page,
    limit,
    totalPages,
    hasNextPage,
    hasPreviousPage,
    
    // Loading and error states
    isLoading,
    isError,
    error,
    
    // Filter values
    searchTerm,
    selectedType,
    selectedCity,
    cities: citiesQuery.data || [],
    types: typesQuery.data || [],
    citiesLoading: citiesQuery.isLoading,
    typesLoading: typesQuery.isLoading,
    
    // Actions
    setSearchTerm,
    setSelectedType,
    setSelectedCity,
    setLimit,
    nextPage,
    previousPage,
    goToPage,
    resetFilters,
    refetch
  };
};

export const useEcosystemaDetail = (id: number) => {
  const {
    data,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ["ecosystem", id],
    queryFn: () => EcosistemasService.obterEcossistema(id),
    enabled: !!id,
  });

  return {
    ecosystem: data?.data,
    isLoading,
    isError,
    error
  };
};

export default useEcosystemasList; 