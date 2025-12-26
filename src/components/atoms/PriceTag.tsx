import React from 'react';
import { cn } from '@/lib/utils';

type PriceTagProps = {
  amount: number;
  currency?: string;
  period?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  isFree?: boolean;
  isCustom?: boolean;
};

/**
 * PriceTag component for displaying pricing information
 */
const PriceTag: React.FC<PriceTagProps> = ({ 
  amount, 
  currency = 'R$', 
  period = '/evento', 
  size = 'md',
  className,
  isFree = false,
  isCustom = false
}) => {
  const textSize = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };
  
  const smallTextSize = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const getPriceColor = () => {
    if (isFree) return 'text-green-600';
    if (isCustom) return 'text-purple-600';
    return 'text-gray-900';
  };
  
  return (
    <div className={cn("font-medium", className)}>
      {isFree ? (
        <div className="flex items-baseline">
          <span className={`${textSize[size]} font-bold text-green-600`}>Gratuito</span>
        </div>
      ) : isCustom ? (
        <div className="flex items-baseline">
          <span className={`${textSize[size]} font-bold text-purple-600`}>Personalizado</span>
        </div>
      ) : (
        <div className="flex items-baseline">
          <span className={`${smallTextSize[size]} mr-0.5 text-gray-500`}>{currency}</span>
          <span className={`${textSize[size]} font-bold ${getPriceColor()}`}>
            {amount.toLocaleString('pt-BR')}
          </span>
          {period && (
            <span className={`${smallTextSize[size]} ml-0.5 text-gray-500`}>{period}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default PriceTag; 