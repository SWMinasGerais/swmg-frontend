import { z } from 'zod';

/**
 * Schema para a região do mentor
 */
export const regiaoSchema = z.enum([
  'Belo Horizonte',
  'Uberlândia',
  'Juiz de Fora',
  'Montes Claros',
  'Viçosa',
  'Poços de Caldas',
  'Ipatinga',
  'Miradouro',
  'Internacional',
  'Outras'
]);

/**
 * Schema para a área de expertise do mentor
 */
export const areaExpertiseSchema = z.enum([
  'Negócios',
  'Tecnologia',
  'Design',
  'Marketing',
  'Finanças',
  'Jurídico',
  'UX/UI',
  'Produto',
  'Inovação',
  'Vendas',
  'Psicologia',
  'Políticas Públicas',
  'Open Innovation',
]);

/**
 * Schema para a edição do SW em que o mentor participou
 */
export const edicaoSchema = z.string();

/**
 * Schema para o mentor
 */
export const mentorSchema = z.object({
  id: z.string().uuid(),
  nome: z.string().min(1),
  cargo: z.string().optional(),
  empresa: z.string().optional(),
  area: z.array(areaExpertiseSchema).min(1),
  formacao: z.string().optional(),
  bio: z.string().optional(),
  regiao: regiaoSchema,
  edicoes: z.array(edicaoSchema).optional(),
  disponivel: z.boolean().default(true),
  foto: z.string().url().optional(),
  linkedin: z.string().url().optional(),
  email: z.string().email().optional(),
  website: z.string().url().optional(),
  twitter: z.string().url().optional(),
  github: z.string().url().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

/**
 * Schema para a lista de mentores
 */
export const mentoresListSchema = z.array(mentorSchema);

/**
 * Schema para os filtros de busca
 */
export const mentoresFiltrosSchema = z.object({
  nome: z.string().optional(),
  regiao: regiaoSchema.optional(),
  area: areaExpertiseSchema.optional(),
  edicao: edicaoSchema.optional(),
  disponivel: z.boolean().optional(),
});

/**
 * Schema para a resposta da API
 */
export const mentoresResponseSchema = z.object({
  data: mentoresListSchema,
  total: z.number(),
  page: z.number(),
  limit: z.number(),
  totalPages: z.number(),
});

/**
 * Schema para os parâmetros de consulta
 */
export const mentoresQueryParamsSchema = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(10),
  sort: z.string().optional(),
  order: z.enum(['asc', 'desc']).default('asc'),
  filtros: mentoresFiltrosSchema.optional(),
});
