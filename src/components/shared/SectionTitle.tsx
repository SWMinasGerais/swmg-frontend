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
          'mb-4',
          align === 'center' ? 'flex items-center justify-center gap-3' : 'flex items-center gap-3'
        )}>
          <div className="w-8 h-[2px] bg-[#E4002B]"></div>
          <span className="text-xs font-semibold text-[#E4002B] uppercase tracking-[0.15em]">{eyebrow}</span>
          {align === 'center' && <div className="w-8 h-[2px] bg-[#E4002B]"></div>}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-3 tracking-[-0.02em] leading-[1.15]">
        {renderTitle()}
      </h2>
      {description && (
        <p className="text-neutral-500 leading-relaxed text-[15px]">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle; 