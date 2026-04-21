import React from 'react';
import { cn } from '@/lib/utils';
import CountUp from '@/components/shared/CountUp';

/** A single stat with animated count, used in stats bars. */
const StatCard = ({
  value,
  label,
  prefix = '',
  suffix = '',
  className,
}: {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  className?: string;
}) => (
  <div className={cn('text-center', className)}>
    <div className="text-2xl md:text-3xl font-bold text-[#111] tracking-tight">
      <CountUp end={value} prefix={prefix} suffix={suffix} />
    </div>
    <div className="text-xs text-neutral-400 mt-1 uppercase tracking-wider font-medium">{label}</div>
  </div>
);

export default StatCard;
