import axios from 'axios';
import { 
  Evento, 
  EventosFiltros,
  EventosResponse,
  EventosQueryParams
} from './eventos.type';

// In development, use the mock data
import { 
  mockEventos,
  mockEventosResponse, 
  getMockEventoById,
  getFilteredMockEventos
} from './eventos.mocks';

// Configurações para ambiente sem Next.js
const CONFIG = {
  API_URL: '/api',
  // Definindo como true para usar sempre os dados mock em ambiente de desenvolvimento
  USE_MOCK_DATA: true
};

/**
 * Axios instance configured for the eventos API
 */
const api = axios.create({
  baseURL: CONFIG.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Service object for eventos operations
 */
export const EventosService = {
  /**
   * List eventos with pagination and filtering options
   */
  list: async (params?: Partial<EventosQueryParams>): Promise<EventosResponse> => {
    try {
      // For development, return mock data
      if (CONFIG.USE_MOCK_DATA) {
        console.log('Using mock data for eventos list', params);
        
        // If we have filters, apply them
        if (params?.filtros) {
          const { city, month, status, theme, searchTerm } = params.filtros;
          const filteredData = getFilteredMockEventos(
            city as string, 
            month as string, 
            status as string, 
            theme, 
            searchTerm
          );
          
          // Apply pagination
          const page = params.page || 1;
          const limit = params.limit || 10;
          const startIndex = (page - 1) * limit;
          const endIndex = startIndex + limit;
          
          return {
            data: filteredData.slice(startIndex, endIndex),
            total: filteredData.length,
            page,
            limit,
            totalPages: Math.ceil(filteredData.length / limit),
          };
        }
        
        return mockEventosResponse;
      }
      
      // For production, make a real API call
      const response = await api.get('/eventos', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching eventos list:', error);
      throw error;
    }
  },
  
  /**
   * Get a single evento by ID
   */
  getById: async (id: number | string): Promise<Evento> => {
    try {
      // For development, return mock data
      if (CONFIG.USE_MOCK_DATA) {
        console.log(`Using mock data for evento ${id}`);
        const evento = getMockEventoById(id);
        if (!evento) {
          throw new Error(`Evento with ID ${id} not found`);
        }
        return evento;
      }
      
      // For production, make a real API call
      const response = await api.get(`/eventos/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching evento ${id}:`, error);
      throw error;
    }
  },
  
  /**
   * Filter eventos based on provided criteria
   */
  filter: async (filtros: EventosFiltros): Promise<EventosResponse> => {
    try {
      // For development, return filtered mock data
      if (CONFIG.USE_MOCK_DATA) {
        console.log('Using mock data for filtering eventos', filtros);
        const { city, month, status, theme, searchTerm } = filtros;
        const filteredData = getFilteredMockEventos(
          city as string, 
          month as string, 
          status as string, 
          theme, 
          searchTerm
        );
        
        return {
          data: filteredData.slice(0, 10), // First page of results
          total: filteredData.length,
          page: 1,
          limit: 10,
          totalPages: Math.ceil(filteredData.length / 10),
        };
      }
      
      // For production, make a real API call
      const response = await api.get('/eventos/filter', { params: { filtros } });
      return response.data;
    } catch (error) {
      console.error('Error filtering eventos:', error);
      throw error;
    }
  },
  
  /**
   * Get featured eventos for homepage
   */
  getFeatured: async (limit: number = 4): Promise<Evento[]> => {
    try {
      // For development, return mock data
      if (CONFIG.USE_MOCK_DATA) {
        console.log(`Using mock data for featured eventos (limit: ${limit})`);
        // Get open events first, then coming soon events
        const openEvents = mockEventos.filter(e => e.status === 'open');
        const comingSoonEvents = mockEventos.filter(e => e.status === 'coming-soon');
        const featuredEvents = [...openEvents, ...comingSoonEvents].slice(0, limit);
        return featuredEvents;
      }
      
      // For production, make a real API call
      const response = await api.get('/eventos/featured', { params: { limit } });
      return response.data;
    } catch (error) {
      console.error('Error fetching featured eventos:', error);
      throw error;
    }
  },
  
  /**
   * Get upcoming eventos in chronological order
   */
  getUpcoming: async (limit: number = 10): Promise<Evento[]> => {
    try {
      // For development, return mock data
      if (CONFIG.USE_MOCK_DATA) {
        console.log(`Using mock data for upcoming eventos (limit: ${limit})`);
        // Get events with status 'open' or 'coming-soon' and sort them
        const upcomingEvents = mockEventos
          .filter(e => e.status === 'open' || e.status === 'coming-soon')
          .sort((a, b) => {
            // Simple sorting for mocks - in real API this would be by date
            if (a.status === 'open' && b.status !== 'open') return -1;
            if (a.status !== 'open' && b.status === 'open') return 1;
            return 0;
          })
          .slice(0, limit);
        return upcomingEvents;
      }
      
      // For production, make a real API call
      const response = await api.get('/eventos/upcoming', { params: { limit } });
      return response.data;
    } catch (error) {
      console.error('Error fetching upcoming eventos:', error);
      throw error;
    }
  },
};

export default EventosService; 