import { StatusType } from '@/components/atoms/StatusBadge';

/**
 * Startups module type definitions
 */

export interface Startup {
  id: number;
  name: string;
  logo?: string;
  city: string;
  year: string;
  description: string;
  investment: string;
  status: StatusType;
  industryTags: string[];
  caseUrl?: string;
}

export interface StartupsSectionProps {
  startups?: Startup[];
  title?: string;
  description?: string;
  eyebrow?: string;
}

export interface StartupData {
  id: number;
  name: string;
  description: string;
  logoUrl?: string;
  websiteUrl?: string;
  foundedYear: number;
  location: string;
  industryTags: string[];
  fundingStage?: string;
  founderNames?: string[];
  shortDescription?: string;
  status?: 'active' | 'inactive' | 'acquired';
  bgColor?: string;
  swEvent?: string;
  fundingAmount?: string;
}

export interface StartupGridProps {
  startups: StartupData[];
  title: string;
  description?: string;
  eyebrow?: string;
} 