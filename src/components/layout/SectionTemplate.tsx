import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTemplateProps {
  id?: string;
  children: React.ReactNode;
  background?: 'white' | 'light' | 'dark' | 'primary' | 'gradient' | 'transparent';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  containerClassName?: string;
}

const SectionTemplate: React.FC<SectionTemplateProps> = ({
  id,
  children,
  background = 'transparent',
  spacing = 'md',
  className,
  containerClassName
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    light: 'bg-slate-50',
    dark: 'bg-slate-900 text-white',
    primary: 'bg-red-600 text-white',
    gradient: 'bg-gradient-to-br from-red-600 to-red-700 text-white',
    transparent: ''
  };

  const spacingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20'
  };

  return (
    <section 
      id={id} 
      className={cn(
        spacingClasses[spacing],
        backgroundClasses[background],
        'relative overflow-hidden',
        className
      )}
    >
      <div className={cn(
        'container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl',
        containerClassName
      )}>
        {children}
      </div>
    </section>
  );
};

export default SectionTemplate; 