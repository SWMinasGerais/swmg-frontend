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
    <div className="text-2xl md:text-3xl font-bold text-slate-900">
      <CountUp end={value} prefix={prefix} suffix={suffix} />
    </div>
    <div className="text-sm text-slate-500 mt-1">{label}</div>
  </div>
);

export default StatCard;
