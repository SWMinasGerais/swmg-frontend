import React from 'react';
import FeatureCard from '@/components/shared/FeatureCard';

export interface Feature {
  id: string | number;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBackground?: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({
  features,
  columns = 3,
  className
}) => {
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid ${columnClasses[columns]} gap-6 ${className || ''}`}>
      {features.map(feature => (
        <FeatureCard
          key={feature.id}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          iconBackground={feature.iconBackground}
        />
      ))}
    </div>
  );
};

export default FeatureGrid; 