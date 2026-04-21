import React from 'react';
import { cn } from '@/lib/utils';

/** Colored status dot with optional pulse for "live" states. */
const StatusDot = ({
  status,
  className,
}: {
  status: 'available' | 'unavailable' | 'live' | 'upcoming' | 'past';
  className?: string;
}) => {
  const dotColors = {
    available: 'bg-green-500',
    live: 'bg-green-500',
    upcoming: 'bg-red-500',
    unavailable: 'bg-gray-400',
    past: 'bg-gray-400',
  };

  const shouldPulse = status === 'live' || status === 'available';

  return (
    <span className={cn('relative flex h-2.5 w-2.5', className)}>
      {shouldPulse && (
        <span
          className={cn(
            'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
            dotColors[status]
          )}
        />
      )}
      <span
        className={cn(
          'relative inline-flex rounded-full h-2.5 w-2.5',
          dotColors[status]
        )}
      />
    </span>
  );
};

export default StatusDot;
