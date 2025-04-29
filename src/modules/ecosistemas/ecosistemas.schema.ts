import { z } from "zod";
import { EntityType } from "./ecosistemas.type";

// Schema for validating Entity Type
export const EntityTypeSchema = z.enum([
  "hub",
  "accelerator", 
  "investor", 
  "university", 
  "partner"
]);

// Schema for validating Ecosystem entity
export const EcosystemSchema = z.object({
  id: z.number(),
  name: z.string().min(1, "Nome é obrigatório"),
  type: EntityTypeSchema,
  city: z.string().min(1, "Cidade é obrigatória"),
  logo: z.string().url("URL da logo inválida"),
  description: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  url: z.string().url("URL inválida")
});

// Schema for filter parameters
export const EcosystemFilterSchema = z.object({
  type: EntityTypeSchema.nullable().optional(),
  city: z.string().optional(),
  search: z.string().optional()
});

// Schema for list response
export const EcosystemListResponseSchema = z.object({
  data: z.array(EcosystemSchema),
  meta: z.object({
    total: z.number(),
    page: z.number(),
    limit: z.number()
  })
});

// Schema for detail response
export const EcosystemDetailResponseSchema = z.object({
  data: EcosystemSchema
}); 