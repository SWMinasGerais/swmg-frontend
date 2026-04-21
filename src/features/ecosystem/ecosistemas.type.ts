// Define ecosystem entity types
export type EntityType = "hub" | "accelerator" | "investor" | "university" | "partner";

export interface Ecosystem {
  id: number;
  name: string;
  type: EntityType;
  city: string;
  logo: string;
  description: string;
  latitude: number;
  longitude: number;
  url: string;
}

export interface EcosystemFilter {
  type?: EntityType | null;
  city?: string;
  search?: string;
}

export interface EcosystemListResponse {
  data: Ecosystem[];
  meta: {
    total: number;
    page: number;
    limit: number;
  };
}

export interface EcosystemDetailResponse {
  data: Ecosystem;
} 