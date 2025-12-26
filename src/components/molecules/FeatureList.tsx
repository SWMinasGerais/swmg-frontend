import React from 'react';
import { cn } from '@/lib/utils';
import FeatureItem from '@/components/atoms/FeatureItem';

type Feature = {
  text: string;
  included: boolean;
  highlighted?: boolean;
  upgrade?: boolean;
};

type FeatureListProps = {
  features: Feature[];
  className?: string;
};

/**
 * FeatureList component for displaying a list of features
 */
const FeatureList: React.FC<FeatureListProps> = ({ features, className }) => {
  return (
    <div className={cn("space-y-1", className)}>
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          text={feature.text}
          included={feature.included}
          highlighted={feature.highlighted}
          upgrade={feature.upgrade}
        />
      ))}
    </div>
  );
};

export default FeatureList; 