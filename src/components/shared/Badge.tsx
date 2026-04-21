import React from 'react';
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'secondary';
  color?: 'red' | 'green' | 'blue' | 'purple' | 'amber' | 'indigo';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default', 
  color = 'red',
  className 
}) => {
  const colorVariants = {
    red: {
      default: 'bg-red-100 text-red-700',
      outline: 'border-red-600 text-red-600',
      secondary: 'bg-red-50 text-red-600'
    },
    green: {
      default: 'bg-green-100 text-green-700',
      outline: 'border-green-600 text-green-600',
      secondary: 'bg-green-50 text-green-600'
    },
    blue: {
      default: 'bg-blue-100 text-blue-700',
      outline: 'border-blue-600 text-blue-600',
      secondary: 'bg-blue-50 text-blue-600'
    },
    purple: {
      default: 'bg-purple-100 text-purple-700',
      outline: 'border-purple-600 text-purple-600',
      secondary: 'bg-purple-50 text-purple-600'
    },
    amber: {
      default: 'bg-amber-100 text-amber-700',
      outline: 'border-amber-600 text-amber-600',
      secondary: 'bg-amber-50 text-amber-600'
    },
    indigo: {
      default: 'bg-indigo-100 text-indigo-700',
      outline: 'border-indigo-600 text-indigo-600',
      secondary: 'bg-indigo-50 text-indigo-600'
    }
  };

  const variantClasses = {
    default: 'bg-slate-100 text-slate-800 hover:bg-slate-200',
    outline: 'border border-slate-200 text-slate-800 hover:bg-slate-100',
    secondary: 'bg-slate-50 text-slate-700 hover:bg-slate-100'
  };

  const baseClasses = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors';

  return (
    <span className={cn(
      baseClasses,
      variantClasses[variant],
      colorVariants[color][variant],
      className
    )}>
      {children}
    </span>
  );
};

export default Badge; 