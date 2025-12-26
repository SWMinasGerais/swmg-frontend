import * as z from 'zod';
import { PartnerCategory, PartnerTier } from './types';

/**
 * Schema de validação para o objeto Partner
 */
export const partnerSchema = z.object({
  id: z.number().optional(),
  dbId: z.number().optional(),
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  logo: z.string(),
  website: z.string().url("URL inválida").or(z.literal('#')).optional(),
  city: z.string().optional(),
  tier: z.enum(['diamond', 'platinum', 'gold', 'silver', 'bronze', 'support', 'media'] as const).optional(),
  category: z.enum(['government', 'academic', 'development', 'private', 'hub', 'media', 'association'] as const),
  slug: z.string().optional()
});

/**
 * Schema para validação de estatísticas de parceiros
 */
export const partnerStatsSchema = z.object({
  views: z.number().positive(),
  ranking: z.object({
    category: z.number().positive(),
    general: z.number().positive()
  })
});

/**
 * Tipo seguro para objeto Partner com validação
 */
export type PartnerSchema = z.infer<typeof partnerSchema>;

/**
 * Tipo seguro para estatísticas de parceiros
 */
export type PartnerStatsSchema = z.infer<typeof partnerStatsSchema>;
