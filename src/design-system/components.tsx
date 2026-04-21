/**
 * SWMG Design System — Reusable Components
 *
 * Styled building blocks that use our tokens and can be composed
 * across sections and pages. These wrap/extend shadcn primitives.
 */

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// ─── CountUp ─────────────────────────────────────────────────
/** Animates a number from 0 to `end` when it scrolls into view. */
export const CountUp = ({
  end,
  suffix = '',
  prefix = '',
  className,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString('pt-BR')}
      {suffix}
    </span>
  );
};

// ─── LiveBadge ───────────────────────────────────────────────
/** Pill badge with animated green dot — for "live" or "happening now" states. */
export const LiveBadge = ({
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

// ─── SWButton ────────────────────────────────────────────────
/** Primary CTA button with the SW brand glow on hover. */
export const SWButton = ({
  children,
  variant = 'primary',
  size = 'default',
  className,
  ...props
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'default' | 'lg' | 'sm';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const variants = {
    primary:
      'bg-red-600 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20 text-white font-semibold',
    outline:
      'border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-red-300 hover:text-red-600',
    ghost: 'text-slate-600 hover:text-red-600 hover:bg-red-50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl transition-all duration-200',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// ─── SWLink ──────────────────────────────────────────────────
/** Text link with arrow, used for CTAs like "Ver todos →". */
export const SWLink = ({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => (
  <a
    href={href}
    className={cn(
      'inline-flex items-center gap-1.5 text-red-600 font-medium hover:underline group',
      className
    )}
  >
    {children}
    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
  </a>
);

// ─── StatCard ────────────────────────────────────────────────
/** A single stat with animated count, used in stats bars. */
export const StatCard = ({
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

// ─── Eyebrow ─────────────────────────────────────────────────
/** Red eyebrow text with decorative line, used above section titles. */
export const Eyebrow = ({
  children,
  align = 'left',
  className,
}: {
  children: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}) => (
  <div
    className={cn(
      'inline-flex items-center gap-2 mb-3',
      align === 'center' && 'justify-center w-full',
      className
    )}
  >
    <div className="w-8 h-0.5 bg-red-600 rounded-full" />
    <span className="text-sm font-semibold text-red-600 tracking-wide">
      {children}
    </span>
    {align === 'center' && (
      <div className="w-8 h-0.5 bg-red-600 rounded-full" />
    )}
  </div>
);

// ─── FilterPill ──────────────────────────────────────────────
/** Clickable filter pill used in Events, Mentors, FAQ, etc. */
export const FilterPill = ({
  children,
  active = false,
  onClick,
  className,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}) => (
  <button
    onClick={onClick}
    className={cn(
      'rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
      active
        ? 'bg-red-600 text-white shadow-sm'
        : 'bg-white border border-slate-200 text-slate-600 hover:border-red-300 hover:text-red-600',
      className
    )}
  >
    {children}
  </button>
);

// ─── StatusDot ───────────────────────────────────────────────
/** Colored status dot with optional pulse for "live" states. */
export const StatusDot = ({
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

// ─── ExpertisePill ───────────────────────────────────────────
/** Colored pill for mentor expertise areas. */
export const ExpertisePill = ({
  area,
  className,
}: {
  area: 'tech' | 'business' | 'design' | 'marketing' | 'legal' | 'finance';
  className?: string;
}) => {
  const config = {
    tech: { bg: 'bg-blue-50', text: 'text-blue-700', label: 'Tech' },
    business: { bg: 'bg-green-50', text: 'text-green-700', label: 'Business' },
    design: { bg: 'bg-purple-50', text: 'text-purple-700', label: 'Design' },
    marketing: { bg: 'bg-orange-50', text: 'text-orange-700', label: 'Marketing' },
    legal: { bg: 'bg-yellow-50', text: 'text-yellow-700', label: 'Legal' },
    finance: { bg: 'bg-emerald-50', text: 'text-emerald-700', label: 'Finance' },
  };

  const c = config[area];
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        c.bg,
        c.text,
        className
      )}
    >
      {c.label}
    </span>
  );
};
