import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  description?: string;
  eyebrow?: string;
  titleHighlight?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  description,
  eyebrow,
  titleHighlight,
  align = 'left',
  className
}) => {
  const getAlignment = () => {
    switch (align) {
      case 'center':
        return 'text-center mx-auto';
      case 'right':
        return 'text-right ml-auto';
      default:
        return '';
    }
  };

  // If a highlight is provided, replace that part of the title with a highlighted version
  const renderTitle = () => {
    if (!titleHighlight) return title;
    
    const parts = title.split(titleHighlight);
    if (parts.length === 1) return title;
    
    return (
      <>
        {parts[0]}<span className="text-red-600">{titleHighlight}</span>{parts[1]}
      </>
    );
  };

  return (
    <div className={cn(
      'mb-8 max-w-3xl',
      getAlignment(),
      className
    )}>
      {eyebrow && (
        <div className={cn(
          'mb-3',
          align === 'center' ? 'flex items-center justify-center gap-2' : 'flex items-center gap-2'
        )}>
          <div className="w-8 h-0.5 bg-red-600 rounded-full"></div>
          <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">{eyebrow}</span>
          {align === 'center' && <div className="w-8 h-0.5 bg-red-600 rounded-full"></div>}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight leading-tight">
        {renderTitle()}
      </h2>
      {description && (
        <p className="text-slate-500 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle; 