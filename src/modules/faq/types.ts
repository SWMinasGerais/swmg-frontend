import React from 'react';

export type FaqCategory = "geral" | "inscrição" | "evento" | "mentoria" | "após";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
}

export interface CategoryConfig {
  [key: string]: {
    label: string;
    icon: React.ReactNode;
    color?: string;
  };
}

export interface FaqSectionProps {
  items?: FaqItem[];
  categoryConfig?: CategoryConfig;
} 