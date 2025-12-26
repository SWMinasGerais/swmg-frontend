import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle, Star, ArrowUpCircle } from 'lucide-react';

type FeatureItemProps = {
  text: string;
  included?: boolean;
  highlighted?: boolean;
  upgrade?: boolean;
  className?: string;
};

/**
 * FeatureItem component for displaying a single feature
 */
const FeatureItem: React.FC<FeatureItemProps> = ({ 
  text, 
  included = true, 
  highlighted = false,
  upgrade = false,
  className 
}) => {
  return (
    <div className={cn(
      "flex items-start py-1 group transition-colors duration-150",
      highlighted && "font-medium",
      highlighted && included && "bg-amber-50 -mx-2 px-2 rounded",
      upgrade && "bg-purple-50 -mx-2 px-2 rounded",
      className
    )}>
      {included ? (
        <div className="flex-shrink-0 mt-0.5">
          {upgrade ? (
            <ArrowUpCircle className="h-3.5 w-3.5 mr-1.5 text-purple-500" />
          ) : highlighted ? (
            <Star className="h-3.5 w-3.5 mr-1.5 text-amber-500" />
          ) : (
            <CheckCircle className="h-3.5 w-3.5 mr-1.5 text-green-500 group-hover:text-green-600" />
          )}
        </div>
      ) : (
        <XCircle className="h-3.5 w-3.5 mr-1.5 text-gray-300 flex-shrink-0 mt-0.5" />
      )}
      <span className={cn(
        "text-xs leading-tight",
        included ? (
          upgrade ? "text-purple-800" : 
          highlighted ? "text-amber-800" : "text-gray-800"
        ) : "text-gray-400"
      )}>
        {text}
      </span>
    </div>
  );
};

export default FeatureItem; 