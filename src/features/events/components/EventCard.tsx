import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

export interface EventCardProps {
  title: string;
  date: string;
  location: string;
  theme?: string;
  status: 'upcoming' | 'active' | 'past';
  remainingSlots?: number;
  image?: string;
  url?: string;
  className?: string;
  featured?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  location,
  theme,
  status,
  remainingSlots,
  image,
  url,
  className,
  featured = false
}) => {
  const statusLabels = {
    upcoming: 'Em breve',
    active: 'Inscrições abertas',
    past: 'Finalizado'
  };

  const statusClasses = {
    upcoming: 'bg-amber-100 text-amber-700',
    active: 'bg-green-100 text-green-700',
    past: 'bg-slate-100 text-slate-700'
  };

  return (
    <div 
      className={cn(
        "bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg mb-4 transform transition-transform hover:scale-[1.02]",
        className
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold mr-4">
            {image ? (
              <img src={image} alt={title} className="w-full h-full rounded-full object-cover" />
            ) : (
              'SW'
            )}
          </div>
          <div>
            <p className="font-bold text-slate-900">Startup Weekend</p>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>
        <span className={cn(
          "px-3 py-1 rounded-full text-xs font-medium",
          statusClasses[status]
        )}>
          {statusLabels[status]}
        </span>
      </div>
      <div className="mb-4">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        {theme && <p className="text-xs text-red-600 font-medium mb-1">{theme}</p>}
        <p className="text-sm text-gray-600">{date}</p>
      </div>
      {status !== 'past' && (
        <div className="flex justify-between items-center">
          {remainingSlots !== undefined && (
            <div className="text-sm">
              <span className="font-bold text-red-600">{remainingSlots}</span> vagas restantes
            </div>
          )}
          <Button 
            size="sm" 
            className="bg-red-600 text-white hover:bg-red-700"
            disabled={status === 'upcoming' || remainingSlots === 0}
          >
            {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer">
                Inscrever-se
              </a>
            ) : (
              'Inscrever-se'
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default EventCard; 