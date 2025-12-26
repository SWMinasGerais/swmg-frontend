import { LucideIcon } from 'lucide-react';

/**
 * Common types shared across multiple components
 */

export interface StatItem {
  icon: LucideIcon;
  value: string | number;
  label: string;
  color?: 'red' | 'blue' | 'green' | 'purple' | 'amber';
}

export interface ColorConfig {
  red: string;
  blue: string;
  green: string;
  purple: string;
  amber?: string;
  gray?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  imageUrl: string;
  rating?: number;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
  website?: string;
  tier?: 'diamond' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'media' | 'support';
} 