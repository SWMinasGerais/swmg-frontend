import { LucideIcon } from 'lucide-react';

/**
 * Stats module type definitions
 */

export type StatColor = 'red' | 'green' | 'blue' | 'purple' | 'amber' | 'indigo';

export interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
  color?: StatColor;
}

export interface StatsSectionProps {
  stats: StatItem[];
} 