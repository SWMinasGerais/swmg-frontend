import React from 'react';
import { cn } from '@/lib/utils';

/** Pill badge with animated green dot — for "live" or status indicators. */
const LiveBadge = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      'inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-1.5',
      className
    )}
  >
    <span className="relative flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
    </span>
    <span className="text-sm font-medium text-red-700">{children}</span>
  </div>
);

export default LiveBadge;
