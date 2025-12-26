import { ReactNode } from "react";

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  count: string;
  icon: ReactNode;
}

export interface PeriodData {
  period: string;
  title: string;
  years: YearData[];
}

export interface YearData {
  year: string;
  events: TimelineEvent[];
}

export interface TimelineEvent {
  id: string;
  text: string;
  tags?: string[];
  link?: string;
} 