/**
 * Partners module type definitions
 */

export type PartnerCategory = 'government' | 'academic' | 'development' | 'private' | 'hub' | 'media' | 'association';

export type PartnerTier = 'diamond' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'support' | 'media';

export interface Partner {
  id?: number;
  dbId?: number;
  name: string;
  logo: string;
  website?: string;
  city?: string;
  tier?: PartnerTier;
  category: PartnerCategory;
  slug?: string;
} 