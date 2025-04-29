import axios from "axios";
import {
  Ecosystem,
  EcosystemListResponse,
  EcosystemDetailResponse,
  EcosystemFilter
} from "./ecosistemas.type";
import { getMockEcosystemById, getMockEcosystemResponse } from "./ecosistemas.mocks";

// Configurações para ambiente sem Next.js
// Em um projeto real, você poderia usar:
// 1. Um arquivo de configuração importado
// 2. Variáveis definidas pelo seu bundler (Webpack, Vite, etc.)
// 3. Variáveis injetadas no HTML e acessadas via window.__ENV__
const CONFIG = {
  API_URL: 'http://localhost:3000/api',
  // Definindo como true para usar sempre os dados mock em ambiente de desenvolvimento
  USE_MOCK_DATA: true
};

// Create API instance
const ecosistemasApi = axios.create({
  baseURL: CONFIG.API_URL,
});

// Service object for ecosystem operations
const EcosistemasService = {
  /**
   * List all ecosystem entities with filters and pagination
   */
  listarEcossistemas: async (
    page: number = 1, 
    limit: number = 10, 
    filtros?: EcosystemFilter
  ): Promise<EcosystemListResponse> => {
    try {
      // Always use mock data for now
      if (CONFIG.USE_MOCK_DATA) {
        return getMockEcosystemResponse(page, limit, filtros);
      }

      // Build query parameters
      const params = new URLSearchParams();
      params.append('page', page.toString());
      params.append('limit', limit.toString());
      
      if (filtros?.type) {
        params.append('type', filtros.type);
      }
      
      if (filtros?.city) {
        params.append('city', filtros.city);
      }
      
      if (filtros?.search) {
        params.append('search', filtros.search);
      }

      // Make API request
      const response = await ecosistemasApi.get<EcosystemListResponse>(
        '/ecosistemas',
        { params }
      );
      
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar ecossistemas:', error);
      throw error;
    }
  },

  /**
   * Get detailed information for a specific ecosystem entity
   */
  obterEcossistema: async (id: number): Promise<EcosystemDetailResponse> => {
    try {
      // Always use mock data for now
      if (CONFIG.USE_MOCK_DATA) {
        return getMockEcosystemById(id);
      }

      // Make API request
      const response = await ecosistemasApi.get<EcosystemDetailResponse>(
        `/ecosistemas/${id}`
      );
      
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar ecossistema com ID ${id}:`, error);
      throw error;
    }
  },

  /**
   * Get all cities in the ecosystem
   */
  listarCidades: async (): Promise<string[]> => {
    try {
      // Always use mock data for now
      if (CONFIG.USE_MOCK_DATA) {
        const cities = new Set(getMockEcosystemResponse(1, 100).data.map(e => e.city));
        return Array.from(cities);
      }

      // Make API request
      const response = await ecosistemasApi.get<{data: string[]}>('/ecosistemas/cidades');
      return response.data.data;
    } catch (error) {
      console.error('Erro ao buscar cidades do ecossistema:', error);
      throw error;
    }
  },

  /**
   * Get all entity types in the ecosystem
   */
  listarTipos: async (): Promise<string[]> => {
    try {
      // Always use mock data for now
      if (CONFIG.USE_MOCK_DATA) {
        return ["hub", "accelerator", "investor", "university", "partner"];
      }

      // Make API request
      const response = await ecosistemasApi.get<{data: string[]}>('/ecosistemas/tipos');
      return response.data.data;
    } catch (error) {
      console.error('Erro ao buscar tipos de entidade do ecossistema:', error);
      throw error;
    }
  }
};

export default EcosistemasService; 