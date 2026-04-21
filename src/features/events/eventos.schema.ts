import { z } from 'zod';

/**
 * Schema para a cidade do evento
 */
export const cidadeSchema = z.enum([
  'Belo Horizonte',
  'Uberlândia',
  'Juiz de Fora',
  'Montes Claros',
  'Viçosa',
  'Poços de Caldas',
  'Ipatinga',
  'Divinópolis',
  'Governador Valadares',
  'Outras'
]);

/**
 * Schema para o status do evento
 */
export const statusSchema = z.enum([
  'open',
  'coming-soon',
  'closed',
  'finished'
]);

/**
 * Schema para o tema do evento
 */
export const temaSchema = z.string();

/**
 * Schema para o mês do evento
 */
export const mesSchema = z.enum([
  'jan', 'fev', 'mar', 'abr', 'mai', 'jun', 
  'jul', 'ago', 'set', 'out', 'nov', 'dez'
]);

/**
 * Schema para o evento
 */
export const eventoSchema = z.object({
  id: z.number().or(z.string()),
  city: cidadeSchema,
  title: z.string().min(1),
  date: z.string(),
  month: mesSchema,
  theme: temaSchema,
  remainingSeats: z.number().min(0),
  totalSeats: z.number().min(1),
  status: statusSchema,
  imageUrl: z.string().url(),
  description: z.string().optional(),
  location: z.string().optional(),
  organizers: z.array(z.string()).optional(),
  price: z.number().optional(),
  currency: z.string().default('BRL'),
  registrationUrl: z.string().url().optional(),
  contactEmail: z.string().email().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

/**
 * Schema para a lista de eventos
 */
export const eventosListSchema = z.array(eventoSchema);

/**
 * Schema para os filtros de busca
 */
export const eventosFiltrosSchema = z.object({
  city: cidadeSchema.optional(),
  month: mesSchema.optional(),
  status: statusSchema.optional(),
  theme: temaSchema.optional(),
  searchTerm: z.string().optional(),
});

/**
 * Schema para a resposta da API
 */
export const eventosResponseSchema = z.object({
  data: eventosListSchema,
  total: z.number(),
  page: z.number(),
  limit: z.number(),
  totalPages: z.number(),
});

/**
 * Schema para os parâmetros de consulta
 */
export const eventosQueryParamsSchema = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(10),
  sort: z.string().optional(),
  order: z.enum(['asc', 'desc']).default('asc'),
  filtros: eventosFiltrosSchema.optional(),
}); 