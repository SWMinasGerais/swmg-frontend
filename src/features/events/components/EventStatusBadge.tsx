import React from 'react';
import { cn } from "@/lib/utils";
import { EventStatus } from "@/modules/events/types";

interface EventStatusBadgeProps {
  status: EventStatus;
  className?: string;
}

const statusLabels: Record<EventStatus, string> = {
  "upcoming": "Em breve",
  "active": "Inscrições abertas",
  "past": "Realizado"
};

const statusColors: Record<EventStatus, string> = {
  "upcoming": "bg-amber-500",
  "active": "bg-green-500",
  "past": "bg-slate-600"
};

const EventStatusBadge = ({ status, className }: EventStatusBadgeProps) => {
  return (
    <span className={cn(
      "px-3 py-1 rounded-full text-xs font-semibold text-white",
      statusColors[status],
      className
    )}>
      {statusLabels[status]}
    </span>
  );
};

export default EventStatusBadge; 