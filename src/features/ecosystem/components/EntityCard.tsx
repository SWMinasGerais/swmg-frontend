import React from 'react';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EntityCardProps {
  id: number;
  name: string;
  city?: string;
  logo?: string;
  type: string;
  typeIcon: React.ReactNode;
  typeClass: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
}

const EntityCard: React.FC<EntityCardProps> = ({
  id,
  name,
  city,
  logo,
  type,
  typeIcon,
  typeClass,
  onMouseEnter,
  onMouseLeave,
  className
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-neutral-100 p-4 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 flex items-center",
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center mr-3 flex-shrink-0">
        <img 
          src={logo} 
          alt={name}
          className="w-8 h-8 object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none"; target.parentElement.classList.add("bg-neutral-100");
          }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-[#111] text-sm truncate">{name}</h4>
        {city && (
          <div className="flex items-center">
            <MapPin className="h-3 w-3 text-gray-400 mr-1" />
            <p className="text-xs text-gray-500">{city}</p>
          </div>
        )}
      </div>
      <div className="flex-shrink-0">
        <span 
          className={cn(
            "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider",
            typeClass
          )}
        >
          {typeIcon}
          <span className="ml-1 hidden sm:inline">{type}</span>
        </span>
      </div>
    </div>
  );
};

export default EntityCard; 