/**
 * Events module type definitions
 */

export type EventStatus = 'upcoming' | 'active' | 'past';
export type EventTheme = 'EdTech' | 'HealthTech' | 'FinTech' | 'AgTech' | 'SmartCities' | 'Sustainability';

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  city: string;
  theme?: EventTheme;
  description?: string;
  status: EventStatus;
  remainingSlots?: number;
  totalSlots?: number;
  image?: string;
  url?: string;
  sponsors?: string[];
  imageUrl?: string;
  venue?: string;
  year?: number;
  month?: string;
  winners?: string;
  participants?: number;
}

export interface EventFilter {
  year?: number | null;
  city?: string | null;
  theme?: EventTheme | null;
  status?: EventStatus | null;
}

export interface EventsSectionProps {
  events?: Event[];
  title?: string;
  description?: string;
  eyebrow?: string;
} 