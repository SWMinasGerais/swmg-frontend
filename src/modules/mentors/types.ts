import React from 'react';

/**
 * Mentors module type definitions
 */

export type ExpertiseArea = 'Tech' | 'Business' | 'Design' | 'Marketing' | 'Finance' | 'Legal';

export interface Mentor {
  id: number;
  name: string;
  role: string;
  company: string;
  bio: string;
  photo: string;
  expertise: ExpertiseArea[];
  available: boolean;
  location?: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  website?: string;
}

export interface MentorFilter {
  expertise?: ExpertiseArea | null;
  available?: boolean | null;
  location?: string | null;
  searchTerm?: string | null;
}

export interface MentorshipSectionProps {
  mentors?: Mentor[];
  title?: string;
  description?: string;
  eyebrow?: string;
} 