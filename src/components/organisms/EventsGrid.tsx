import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  CalendarDays, 
  MapPin, 
  Users, 
  ExternalLink, 
  Building, 
  Trophy,
  Clock3,
  Briefcase
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Event } from "@/modules/events/types";
import EventStatusBadge from "@/components/atoms/EventStatusBadge";
import ThemeBadge from "@/components/atoms/ThemeBadge";

interface EventsGridProps {
  events: Event[];
  onResetFilters: () => void;
}

// Format sponsors to array for better display
const formatSponsors = (sponsors?: string[]): string[] => {
  if (!sponsors) return [];
  return sponsors;
};

const EventsGrid = ({ events, onResetFilters }: EventsGridProps) => {
  return (
    <>
      {events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => {
            const sponsors = formatSponsors(event.sponsors);
            
            return (
              <div 
                key={event.id} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col"
              >
                {/* Header with status badges */}
                <div className="bg-slate-50 p-3 pb-2.5 flex items-center justify-between">
                  <div className="flex-shrink-0">
                    <EventStatusBadge status={event.status} />
                  </div>
                  
                  {event.id && (
                    <div className="flex-shrink-0">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-700 text-white">
                        #{event.id}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Red Startup Weekend Title */}
                <div className="text-center pt-1 pb-2 bg-slate-50">
                  <h3 className="text-red-600 font-bold text-sm uppercase tracking-wider">
                    STARTUP WEEKEND
                  </h3>
                </div>
                
                {/* Event Title + Location */}
                <div className="px-6 pt-4 pb-4 text-center">
                  <h2 className="text-xl font-bold text-slate-900 mb-2.5">
                    {event.title}
                  </h2>
                  <div className="flex justify-center items-center text-slate-700 mb-2">
                    <MapPin className="h-4 w-4 mr-1.5 text-slate-500" />
                    <span className="font-medium">{event.city}</span>
                  </div>
                </div>
                
                {/* Theme pill */}
                <div className="flex justify-center -mt-1 mb-3">
                  {event.theme && <ThemeBadge theme={event.theme} />}
                </div>
                
                {/* Divider */}
                <div className="border-t border-slate-100 mx-3 mb-3"></div>

                {/* Card Body with details */}
                <div className="px-6 pt-1 pb-3 flex-grow flex flex-col space-y-3">
                  {/* Date */}
                  <div className="flex items-center text-slate-700 text-sm">
                    <CalendarDays className="h-4 w-4 mr-2.5 text-slate-500 flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  
                  {/* Location */}
                  {event.location && (
                    <div className="flex items-start text-slate-700 text-sm">
                      <Building className="h-4 w-4 mr-2.5 text-slate-500 flex-shrink-0 mt-0.5" />
                      <span>{event.location}</span>
                    </div>
                  )}
                  
                  {/* Participants/Slots */}
                  {event.status !== "past" && event.remainingSlots !== undefined && event.totalSlots !== undefined ? (
                    <div className="flex items-center text-slate-700 text-sm">
                      <Users className="h-4 w-4 mr-2.5 text-slate-500 flex-shrink-0" />
                      <div>
                        <span className="text-red-600 font-semibold">{event.remainingSlots}</span>
                        <span className="text-slate-700">/{event.totalSlots} vagas</span>
                      </div>
                    </div>
                  ) : null}
                </div>
                
                {/* Partners/Sponsors section */}
                {sponsors.length > 0 && (
                  <div className="px-6 pb-4">
                    <div className="flex items-start mb-1">
                      <span className="text-sm font-medium text-slate-700">Parceiros:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {sponsors.map((sponsor, idx) => (
                        <div 
                          key={idx} 
                          className="bg-slate-100 text-slate-700 text-xs py-1 px-2 rounded flex items-center"
                        >
                          <Briefcase className="h-3 w-3 mr-1 text-slate-500" />
                          {sponsor.trim()}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Card Footer */}
                <div className="p-4 border-t border-slate-100 mt-auto">
                  {event.status !== "past" ? (
                    <Button 
                      className={cn(
                        "w-full",
                        event.status === "active" 
                          ? "bg-red-600 hover:bg-red-700 text-white" 
                          : "bg-amber-500 text-white"
                      )}
                      disabled={event.status !== "active"}
                      asChild={!!event.url}
                    >
                      {event.url ? (
                        <a href={event.url}>
                          {event.status === "active" ? "Inscrever-se" : "Em breve"}
                          {event.status === "active" && <ExternalLink className="h-4 w-4 ml-2" />}
                        </a>
                      ) : (
                        <>
                          {event.status === "active" ? "Inscrever-se" : "Em breve"}
                          {event.status === "active" && <ExternalLink className="h-4 w-4 ml-2" />}
                        </>
                      )}
                    </Button>
                  ) : (
                    <div className="text-sm text-slate-600 flex items-center justify-center">
                      <Clock3 className="h-4 w-4 mr-2 text-slate-400" />
                      <span>Evento já realizado</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl border border-slate-100 shadow-sm">
          <p className="text-slate-500 mb-4">Nenhum evento encontrado com os filtros selecionados.</p>
          <Button 
            variant="outline" 
            onClick={onResetFilters}
            className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
          >
            Limpar filtros
          </Button>
        </div>
      )}
    </>
  );
};

export default EventsGrid; 