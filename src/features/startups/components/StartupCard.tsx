import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StatusType } from '@/components/shared/StatusBadge';
import TagBadge from '@/components/shared/TagBadge';
import BackgroundWrapper from '@/components/shared/BackgroundWrapper';
import LocationPin from '@/components/shared/LocationPin';
import CardHeader from '@/components/shared/CardHeader';
import { StartupData } from '@/modules/startups/types';

interface StartupCardProps {
  startup: StartupData;
  onTagClick?: (tag: string) => void;
}

const StartupCard: React.FC<StartupCardProps> = ({
  startup,
  onTagClick
}) => {
  // Map StartupData status to StatusType values
  const mapToStatusType = (startupStatus: string): StatusType => {
    switch (startupStatus) {
      case 'active': return 'operational';
      case 'acquired': return 'acquired';
      case 'inactive': return 'info';
      default: return 'info';
    }
  };

  return (
    <BackgroundWrapper
      className="group transition-all duration-300 hover:shadow-lg overflow-hidden"
    >
      <CardHeader
        title={startup.name}
        status={{ type: mapToStatusType(startup.status) }}
        icon={
          <img 
            src={startup.logoUrl} 
            alt={`${startup.name} logo`} 
            className="w-10 h-10 object-contain"
            onError={(e) => {
              // Fallback if image fails to load
              const target = e.target as HTMLImageElement;
              target.src = "https://placehold.co/100x100/fee/c00?text=SW"; 
            }}
          />
        }
      />
      
      <LocationPin location={`${startup.location}`} className="mb-3" />
      
      <p className="text-slate-600 mb-4 h-12 line-clamp-2">{startup.description}</p>
      
      <div className="flex flex-wrap gap-1 mb-4">
        {startup.industryTags.map((tag, index) => (
          <TagBadge 
            key={index}
            label={tag}
            onClick={() => onTagClick && onTagClick(tag)}
          />
        ))}
      </div>
      
      <div className="border-t border-slate-100 pt-3 mt-2 flex justify-between items-center">
        <div className="text-sm font-medium flex items-center text-red-600">
          <DollarSign className="h-4 w-4 mr-1" />
          {startup.fundingAmount}
        </div>
        <Button 
          size="sm" 
          variant="outline"
          className="text-red-600 border-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors"
          asChild
        >
          <Link to={startup.websiteUrl || "#"}>
            Ver case
            <ArrowUpRight className="ml-1 h-3 w-3" />
          </Link>
        </Button>
      </div>
    </BackgroundWrapper>
  );
};

export default StartupCard; 