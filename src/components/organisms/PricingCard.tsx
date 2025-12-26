import React from 'react';
import { cn } from '@/lib/utils';
import PriceTag from '@/components/atoms/PriceTag';
import PlanBadge from '@/components/atoms/PlanBadge';
import FeatureList from '@/components/molecules/FeatureList';
import PlanContactForm from '@/components/molecules/PlanContactForm';

type PlanLevel = 'municipal' | 'estadual' | 'apoio' | 'midia';

type Feature = {
  text: string;
  included: boolean;
  highlighted?: boolean;
};

type PricingCardProps = {
  title: string;
  description: string;
  price: number;
  priceDetail?: string;
  isFree?: boolean;
  planLevel: PlanLevel;
  features: Feature[];
  isPopular?: boolean;
  className?: string;
};

/**
 * PricingCard organism for a complete pricing card
 */
const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  priceDetail,
  isFree = false,
  planLevel,
  features,
  isPopular = false,
  className
}) => {
  // Determine variant based on plan level
  const getVariant = () => {
    switch (planLevel) {
      case 'municipal': return 'secondary';
      case 'estadual': return 'primary';
      default: return 'outline';
    }
  };

  // Define card border and header style based on plan level
  const getBorderColor = () => {
    switch (planLevel) {
      case 'municipal': return isPopular ? 'border-blue-200' : 'border-blue-100';
      case 'estadual': return isPopular ? 'border-red-200' : 'border-red-100';
      case 'apoio': return 'border-emerald-100';
      case 'midia': return 'border-amber-100';
      default: return 'border-gray-200';
    }
  };

  const getHeaderBg = () => {
    switch (planLevel) {
      case 'municipal': return 'bg-blue-50';
      case 'estadual': return 'bg-red-50';
      case 'apoio': return 'bg-emerald-50';
      case 'midia': return 'bg-amber-50';
      default: return 'bg-gray-50';
    }
  };

  return (
    <div className={cn(
      "bg-white rounded-lg shadow-sm overflow-hidden border h-full flex flex-col transition-all duration-200 hover:shadow-md",
      getBorderColor(),
      className
    )}>
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-red-600 text-white text-xs font-medium py-0.5 px-2 rounded-bl-lg">
            Popular
          </div>
        </div>
      )}

      {/* Header */}
      <div className={cn(
        "p-4 border-b",
        getBorderColor(),
        getHeaderBg()
      )}>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-900">{title}</h3>
            <p className="text-xs text-gray-600 mb-2">{description}</p>
            <PlanBadge level={planLevel} />
          </div>
          <div className="flex flex-col items-end">
            <PriceTag 
              amount={price} 
              isFree={isFree}
              size={isPopular ? "md" : "sm"}
            />
            {priceDetail && (
              <span className="text-xs text-gray-500 mt-1">{priceDetail}</span>
            )}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className={cn(
        "p-4 flex-grow", 
        "bg-white border-b",
        getBorderColor()
      )}>
        <h4 className="text-xs font-medium text-gray-900 mb-2">Inclui:</h4>
        <FeatureList features={features} />
      </div>

      {/* Contact form */}
      <div className="p-4 bg-gray-50">
        <PlanContactForm 
          planName={title} 
          variant={getVariant()}
        />
      </div>
    </div>
  );
};

export default PricingCard; 