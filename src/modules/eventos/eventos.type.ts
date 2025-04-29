import { z } from 'zod';
import {
  eventoSchema,
  eventosListSchema,
  eventosFiltrosSchema,
  eventosQueryParamsSchema,
  cidadeSchema,
  statusSchema,
  temaSchema,
  mesSchema,
  eventosResponseSchema
} from './eventos.schema';

/**
 * Tipo para a cidade do evento
 */
export type Cidade = z.infer<typeof cidadeSchema>;

/**
 * Tipo para o status do evento
 */
export type Status = z.infer<typeof statusSchema>;

/**
 * Tipo para o tema do evento
 */
export type Tema = z.infer<typeof temaSchema>;

/**
 * Tipo para o mês do evento
 */
export type Mes = z.infer<typeof mesSchema>;

/**
 * Tipo para o evento
 */
export type Evento = z.infer<typeof eventoSchema>;

/**
 * Tipo para a lista de eventos
 */
export type EventosList = z.infer<typeof eventosListSchema>;

/**
 * Tipo para os filtros de busca
 */
export type EventosFiltros = z.infer<typeof eventosFiltrosSchema>;

/**
 * Tipo para a resposta da API
 */
export type EventosResponse = z.infer<typeof eventosResponseSchema>;

/**
 * Tipo para os parâmetros de consulta
 */
export type EventosQueryParams = z.infer<typeof eventosQueryParamsSchema>;

// Validation function to parse and validate evento
export function validateEvento(data: unknown): Evento {
  return eventoSchema.parse(data);
}

// Validation function to parse and validate eventos array
export function validateEventos(data: unknown): Evento[] {
  return z.array(eventoSchema).parse(data);
}

// Validation function to parse and validate eventos response
export function validateEventosResponse(data: unknown): EventosResponse {
  return eventosResponseSchema.parse(data);
}

// Mock data categories for eventos
export const eventosCategorias = [
  'Meetup',
  'Hackathon',
  'Workshop',
  'Conferência',
  'Feira',
  'Webinar',
  'Curso',
  'Palestra',
  'Networking',
  'Pitch',
  'Demo Day',
  'Seminário',
  'Bootcamp',
  'Open Day',
  'Outros'
]; 