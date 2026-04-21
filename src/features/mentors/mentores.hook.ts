import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { MentoresService } from './mentores.service';
import { 
  MentoresFiltros, 
  MentoresQueryParams, 
  Mentor
} from './mentores.type';

/**
 * Key constants for TanStack Query cache management
 */
export const MENTORES_QUERY_KEYS = {
  all: ['mentores'] as const,
  lists: () => [...MENTORES_QUERY_KEYS.all, 'list'] as const,
  list: (params: MentoresQueryParams) => [...MENTORES_QUERY_KEYS.lists(), params] as const,
  filtros: (filtros: MentoresFiltros) => [...MENTORES_QUERY_KEYS.all, 'filtros', filtros] as const,
  detalhes: () => [...MENTORES_QUERY_KEYS.all, 'detalhe'] as const,
  detalhe: (id: string) => [...MENTORES_QUERY_KEYS.detalhes(), id] as const,
  disponiveis: () => [...MENTORES_QUERY_KEYS.all, 'disponiveis'] as const,
  porRegiao: (regiao: string) => [...MENTORES_QUERY_KEYS.all, 'regiao', regiao] as const,
  porArea: (area: string) => [...MENTORES_QUERY_KEYS.all, 'area', area] as const,
  porEdicao: (edicao: string) => [...MENTORES_QUERY_KEYS.all, 'edicao', edicao] as const,
};

/**
 * Hook para buscar lista de mentores com paginação e filtros
 */
export function useListarMentores(params: MentoresQueryParams) {
  return useQuery({
    queryKey: MENTORES_QUERY_KEYS.list(params),
    queryFn: () => MentoresService.listarMentores(params),
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
}

/**
 * Hook para buscar detalhes de um mentor específico pelo ID
 */
export function useBuscarMentor(id: string) {
  return useQuery({
    queryKey: MENTORES_QUERY_KEYS.detalhe(id),
    queryFn: () => MentoresService.buscarMentorPorId(id),
    staleTime: 10 * 60 * 1000, // 10 minutos
    enabled: !!id,
  });
}

/**
 * Hook para filtrar mentores com critérios específicos
 */
export function useFiltrarMentores(filtros: MentoresFiltros) {
  return useQuery({
    queryKey: MENTORES_QUERY_KEYS.filtros(filtros),
    queryFn: () => MentoresService.filtrarMentores(filtros),
    staleTime: 5 * 60 * 1000, // 5 minutos
    enabled: Object.values(filtros).some(value => !!value), // Executa apenas se tiver pelo menos um filtro
  });
}

/**
 * Hook para listar mentores disponíveis
 */
export function useListarMentoresDisponiveis() {
  return useQuery({
    queryKey: MENTORES_QUERY_KEYS.disponiveis(),
    queryFn: () => MentoresService.listarMentoresDisponiveis(),
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
}

/**
 * Hook para buscar mentores por região
 */
export function useBuscarMentoresPorRegiao(regiao: string) {
  return useQuery({
    queryKey: MENTORES_QUERY_KEYS.porRegiao(regiao),
    queryFn: () => MentoresService.buscarMentoresPorRegiao(regiao),
    staleTime: 10 * 60 * 1000, // 10 minutos
    enabled: !!regiao,
  });
}

/**
 * Hook para buscar mentores por área de expertise
 */
export function useBuscarMentoresPorArea(area: string) {
  return useQuery({
    queryKey: MENTORES_QUERY_KEYS.porArea(area),
    queryFn: () => MentoresService.buscarMentoresPorArea(area),
    staleTime: 10 * 60 * 1000, // 10 minutos
    enabled: !!area,
  });
}

/**
 * Hook para buscar mentores por edição do SW
 */
export function useBuscarMentoresPorEdicao(edicao: string) {
  return useQuery({
    queryKey: MENTORES_QUERY_KEYS.porEdicao(edicao),
    queryFn: () => MentoresService.buscarMentoresPorEdicao(edicao),
    staleTime: 10 * 60 * 1000, // 10 minutos
    enabled: !!edicao,
  });
}

/**
 * Hook combinado para filtrar mentores com múltiplos critérios 
 * com suporte a paginação e ordenação
 */
export function useMentoresComFiltro(params: MentoresQueryParams) {
  return useQuery({
    queryKey: MENTORES_QUERY_KEYS.list(params),
    queryFn: () => MentoresService.listarMentores(params),
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
}
