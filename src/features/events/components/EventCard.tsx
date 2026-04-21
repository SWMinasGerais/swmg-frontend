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
    upcoming: 'text-[10px] font-medium text-[#E4002B] bg-[#E4002B]/10 px-2.5 py-0.5 rounded-full',
    active: 'text-[10px] font-medium text-green-700 bg-green-100 px-2.5 py-0.5 rounded-full',
    past: 'text-[10px] font-medium text-neutral-500 bg-neutral-100 px-2.5 py-0.5 rounded-full'
  };

  return (
    <div 
      className={cn(
        "bg-white rounded-2xl border border-neutral-100 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 p-6 mb-4",
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
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-400">Startup Weekend</p>
            <p className="text-xs text-neutral-400">{location}</p>
          </div>
        </div>
        <span className={cn(statusClasses[status])}>
          {statusLabels[status]}
        </span>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold text-[#111] leading-snug mb-1">{title}</h3>
        {theme && <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[#E4002B] bg-[#E4002B]/5 px-2.5 py-1 rounded-full mb-1">{theme}</span>}
        <p className="text-xs text-neutral-400">{date}</p>
      </div>
      {status !== 'past' && (
        <div className="flex justify-between items-center">
          {remainingSlots !== undefined && (
            <div className="text-xs font-medium text-neutral-500">
              <span className="font-bold text-[#E4002B]">{remainingSlots}</span> vagas restantes
            </div>
          )}
          <Button
            size="sm"
            className="bg-[#E4002B] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#c70025] transition-colors"
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