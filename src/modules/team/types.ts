/**
 * Team module type definitions
 */

import React from 'react';

export type TeamMemberRoleType = 'lead' | 'community' | 'production' | 'volunteer';

export interface TeamMemberData {
  id: number;
  name: string;
  role: string;
  roleType: TeamMemberRoleType;
  bio: string;
  photo: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  website?: string;
}

export interface TeamSectionProps {
  members?: TeamMemberData[];
  title?: string;
  description?: string;
  eyebrow?: string;
}

export interface RoleConfig {
  color: string;
  label: string;
  icon?: React.ReactNode;
}

export const roleConfig: Record<TeamMemberRoleType, RoleConfig> = {
  lead: {
    color: "bg-red-100 text-red-600",
    label: "Lead Organizer"
  },
  community: {
    color: "bg-blue-100 text-blue-600",
    label: "Community Manager"
  },
  production: {
    color: "bg-green-100 text-green-600",
    label: "Event Production"
  },
  volunteer: {
    color: "bg-amber-100 text-amber-600",
    label: "Volunteer"
  }
}; 