import { useState, useEffect, useCallback } from 'react';
import { 
  Evento, 
  EventosFiltros, 
  EventosQueryParams,
  EventosResponse 
} from './eventos.type';
import { EventosService } from './eventos.service';

/**
 * Hook for loading a list of eventos with filtering and pagination
 */
export function useEventos(
  initialParams?: Partial<EventosQueryParams>
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<EventosResponse | null>(null);
  const [params, setParams] = useState<Partial<EventosQueryParams>>(initialParams || {});

  const fetchEventos = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await EventosService.list(params);
      setData(response);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load eventos'));
    } finally {
      setIsLoading(false);
    }
  }, [params]);

  // Initial fetch
  useEffect(() => {
    fetchEventos();
  }, [fetchEventos]);

  // Update params and refetch
  const updateParams = useCallback((newParams: Partial<EventosQueryParams>) => {
    setParams(prev => ({ ...prev, ...newParams }));
  }, []);

  // Set page
  const setPage = useCallback((page: number) => {
    updateParams({ page });
  }, [updateParams]);

  // Set limit
  const setLimit = useCallback((limit: number) => {
    updateParams({ limit, page: 1 }); // Reset to page 1 when changing limit
  }, [updateParams]);

  // Update filters
  const updateFilters = useCallback((filters: Partial<EventosFiltros>) => {
    updateParams({ 
      filtros: { ...params.filtros, ...filters },
      page: 1 // Reset to page 1 when changing filters
    });
  }, [params.filtros, updateParams]);

  // Clear all filters
  const clearFilters = useCallback(() => {
    updateParams({ 
      filtros: undefined,
      page: 1 // Reset to page 1 when clearing filters
    });
  }, [updateParams]);

  return {
    eventos: data?.data || [],
    pagination: data ? {
      total: data.total,
      page: data.page,
      limit: data.limit,
      totalPages: data.totalPages
    } : null,
    isLoading,
    error,
    setPage,
    setLimit,
    updateFilters,
    clearFilters,
    refetch: fetchEventos
  };
}

/**
 * Hook for loading a single evento by ID
 */
export function useEvento(id: number | string) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [evento, setEvento] = useState<Evento | null>(null);

  const fetchEvento = useCallback(async () => {
    if (!id) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await EventosService.getById(id);
      setEvento(response);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(`Failed to load evento ${id}`));
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  // Fetch on mount or when ID changes
  useEffect(() => {
    fetchEvento();
  }, [fetchEvento]);

  return {
    evento,
    isLoading,
    error,
    refetch: fetchEvento
  };
}

/**
 * Hook for loading featured eventos for homepage
 */
export function useFeaturedEventos(limit: number = 4) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [eventos, setEventos] = useState<Evento[]>([]);

  const fetchEventos = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await EventosService.getFeatured(limit);
      setEventos(response);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load featured eventos'));
    } finally {
      setIsLoading(false);
    }
  }, [limit]);

  // Fetch on mount or when limit changes
  useEffect(() => {
    fetchEventos();
  }, [fetchEventos]);

  return {
    eventos,
    isLoading,
    error,
    refetch: fetchEventos
  };
}

/**
 * Hook for loading upcoming eventos
 */
export function useUpcomingEventos(limit: number = 10) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [eventos, setEventos] = useState<Evento[]>([]);

  const fetchEventos = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await EventosService.getUpcoming(limit);
      setEventos(response);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load upcoming eventos'));
    } finally {
      setIsLoading(false);
    }
  }, [limit]);

  // Fetch on mount or when limit changes
  useEffect(() => {
    fetchEventos();
  }, [fetchEventos]);

  return {
    eventos,
    isLoading,
    error,
    refetch: fetchEventos
  };
} 