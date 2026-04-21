import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  iconBackground?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  className,
  iconBackground = 'bg-red-600/10'
}) => {
  return (
    <div className={cn(
      'bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-slate-100/50 hover:shadow-md transition-all duration-300',
      className
    )}>
      <div className={cn(
        'w-12 h-12 rounded-lg flex items-center justify-center mb-4',
        iconBackground
      )}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

export default FeatureCard; 