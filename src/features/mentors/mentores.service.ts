import axios, { AxiosError } from 'axios';
import { 
  MentoresFiltros, 
  MentoresQueryParams, 
  MentoresResponse,
  Mentor
} from './mentores.type';
import { mentoresMock, gerarMentoresResponseMock } from './mentores.mocks';

// Verificar se deve usar dados mockados
const USAR_MOCK = import.meta.env.NODE_ENV === 'development' || import.meta.env.VITE_USE_MOCK === 'true';

/**
 * Configuração base do Axios para requisições à API de mentores
 */
const mentoresApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Serviço para operações relacionadas aos mentores
 */
export const MentoresService = {
  /**
   * Busca lista de mentores com opções de paginação e filtros
   */
  async listarMentores(params: MentoresQueryParams): Promise<MentoresResponse> {
    // Se estiver em desenvolvimento ou a flag de mock estiver ativa, usa dados mockados
    if (USAR_MOCK) {
      console.log('[MentoresService] Usando dados mockados (desenvolvimento)');
      return gerarMentoresResponseMock(
        params.page, 
        params.limit, 
        params.filtros
      );
    }
    
    // Em produção, tenta buscar da API real
    try {
      const response = await mentoresApi.get<MentoresResponse>('/api/mentores', { params });
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error('[MentoresService] Erro ao buscar mentores:', axiosError);
      throw new Error(axiosError.message || 'Falha ao buscar mentores');
    }
  },

  /**
   * Busca um mentor específico pelo ID
   */
  async buscarMentorPorId(id: string): Promise<Mentor> {
    if (USAR_MOCK) {
      const mentor = mentoresMock.find(m => m.id === id);
      if (!mentor) {
        throw new Error(`Mentor com ID ${id} não encontrado`);
      }
      return mentor;
    }
    
    try {
      const response = await mentoresApi.get<Mentor>(`/api/mentores/${id}`);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(`[MentoresService] Erro ao buscar mentor ID ${id}:`, axiosError);
      throw new Error(axiosError.message || 'Falha ao buscar dados do mentor');
    }
  },

  /**
   * Busca mentores por filtros específicos
   */
  async filtrarMentores(filtros: MentoresFiltros): Promise<MentoresResponse> {
    if (USAR_MOCK) {
      return gerarMentoresResponseMock(1, 10, filtros);
    }
    
    try {
      const response = await mentoresApi.get<MentoresResponse>('/api/mentores/filtrar', { 
        params: { filtros } 
      });
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error('[MentoresService] Erro ao filtrar mentores:', axiosError);
      throw new Error(axiosError.message || 'Falha ao filtrar mentores');
    }
  },

  /**
   * Busca mentores disponíveis para mentoria
   */
  async listarMentoresDisponiveis(): Promise<MentoresResponse> {
    if (USAR_MOCK) {
      return gerarMentoresResponseMock(1, 10, { disponivel: true });
    }
    
    try {
      const response = await mentoresApi.get<MentoresResponse>('/api/mentores/disponiveis');
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error('[MentoresService] Erro ao buscar mentores disponíveis:', axiosError);
      throw new Error(axiosError.message || 'Falha ao buscar mentores disponíveis');
    }
  },

  /**
   * Busca mentores por região
   */
  async buscarMentoresPorRegiao(regiao: string): Promise<MentoresResponse> {
    if (USAR_MOCK) {
      return gerarMentoresResponseMock(1, 10, { regiao });
    }
    
    try {
      const response = await mentoresApi.get<MentoresResponse>(`/api/mentores/regiao/${regiao}`);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(`[MentoresService] Erro ao buscar mentores da região ${regiao}:`, axiosError);
      throw new Error(axiosError.message || 'Falha ao buscar mentores por região');
    }
  },

  /**
   * Busca mentores por área de expertise
   */
  async buscarMentoresPorArea(area: string): Promise<MentoresResponse> {
    if (USAR_MOCK) {
      return gerarMentoresResponseMock(1, 10, { area });
    }
    
    try {
      const response = await mentoresApi.get<MentoresResponse>(`/api/mentores/area/${area}`);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(`[MentoresService] Erro ao buscar mentores da área ${area}:`, axiosError);
      throw new Error(axiosError.message || 'Falha ao buscar mentores por área');
    }
  },

  /**
   * Busca mentores por edição do Startup Weekend
   */
  async buscarMentoresPorEdicao(edicao: string): Promise<MentoresResponse> {
    if (USAR_MOCK) {
      return gerarMentoresResponseMock(1, 10, { edicao });
    }
    
    try {
      const response = await mentoresApi.get<MentoresResponse>(`/api/mentores/edicao/${edicao}`);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(`[MentoresService] Erro ao buscar mentores da edição ${edicao}:`, axiosError);
      throw new Error(axiosError.message || 'Falha ao buscar mentores por edição');
    }
  },
};
