export interface TimelineEvent {
  text: string;
  source?: string;
}

export interface TimelineYear {
  year: string;
  events: TimelineEvent[];
  highlights: string;
}

export interface TimelinePeriod {
  period: string;
  title: string;
  years: TimelineYear[];
}

export interface TimelineData {
  periods: TimelinePeriod[];
  references: {
    title: string;
    url: string;
  }[];
} 