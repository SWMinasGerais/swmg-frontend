import React from 'react';
import { LucideIcon } from 'lucide-react';
import BackgroundWrapper from '@/components/atoms/BackgroundWrapper';
import { ColorConfig } from '@/types/common';

interface StatsCardProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  iconColor?: 'red' | 'blue' | 'green' | 'purple' | 'amber';
}

const StatsCard: React.FC<StatsCardProps> = ({
  icon: Icon,
  value,
  label,
  iconColor = 'red'
}) => {
  const iconColorClass: ColorConfig = {
    red: 'bg-red-600/10 text-red-600',
    blue: 'bg-blue-600/10 text-blue-600',
    green: 'bg-green-600/10 text-green-600',
    purple: 'bg-purple-600/10 text-purple-600',
    amber: 'bg-amber-600/10 text-amber-600',
  };

  return (
    <BackgroundWrapper variant="white" padding="md" className="hover:bg-white/90 transition-all duration-300">
      <div className="flex items-center mb-3">
        <div className={`w-10 h-10 rounded-full ${iconColorClass[iconColor]} flex items-center justify-center mr-3`}>
          <Icon className="h-5 w-5" />
        </div>
        <h4 className="text-slate-600 font-medium text-sm">
          {label}
        </h4>
      </div>
      <div className="text-3xl font-bold text-slate-900">
        {value}
      </div>
    </BackgroundWrapper>
  );
};

export default StatsCard; 