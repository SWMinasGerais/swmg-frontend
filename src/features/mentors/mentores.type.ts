import { z } from 'zod';
import {
  mentorSchema,
  mentoresListSchema,
  mentoresFiltrosSchema,
  mentoresResponseSchema,
  mentoresQueryParamsSchema,
  regiaoSchema,
  areaExpertiseSchema,
  edicaoSchema,
} from './mentores.schema';

/**
 * Tipo para a região do mentor
 */
export type Regiao = z.infer<typeof regiaoSchema>;

/**
 * Tipo para a área de expertise do mentor
 */
export type AreaExpertise = z.infer<typeof areaExpertiseSchema>;

/**
 * Tipo para a edição do SW
 */
export type Edicao = z.infer<typeof edicaoSchema>;

/**
 * Tipo para o mentor
 */
export type Mentor = z.infer<typeof mentorSchema>;

/**
 * Tipo para a lista de mentores
 */
export type MentoresList = z.infer<typeof mentoresListSchema>;

/**
 * Tipo para os filtros de busca
 */
export type MentoresFiltros = z.infer<typeof mentoresFiltrosSchema>;

/**
 * Tipo para a resposta da API
 */
export type MentoresResponse = z.infer<typeof mentoresResponseSchema>;

/**
 * Tipo para os parâmetros de consulta
 */
export type MentoresQueryParams = z.infer<typeof mentoresQueryParamsSchema>;
