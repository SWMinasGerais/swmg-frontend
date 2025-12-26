import { TrendingUp, DollarSign, Users } from 'lucide-react';
import { StatItem } from './types';

// Stats data for startups
export const startupStatsData: StatItem[] = [
  {
    icon: TrendingUp,
    value: "+40",
    label: "Startups criadas",
    color: "red"
  },
  {
    icon: DollarSign,
    value: "R$ 28M",
    label: "Investimento captado",
    color: "green"
  },
  {
    icon: Users,
    value: "130+",
    label: "Empregos gerados",
    color: "blue"
  },
  {
    icon: TrendingUp,
    value: "85%",
    label: "Taxa de sobrevivência",
    color: "purple"
  }
]; 