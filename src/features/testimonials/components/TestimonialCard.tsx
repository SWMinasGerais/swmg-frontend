import React from 'react';
import { Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import BackgroundWrapper from '@/components/shared/BackgroundWrapper';
import { Testimonial } from '@/modules/testimonials/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  size?: 'sm' | 'md' | 'lg';
  showQuoteIcon?: boolean;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  size = 'md',
  showQuoteIcon = true,
  className = ''
}) => {
  const sizeConfig = {
    sm: {
      padding: 'p-4',
      avatarSize: 'h-8 w-8',
      nameSize: 'text-xs',
      contentSize: 'text-sm',
      roleSize: 'text-xs',
      quoteSize: 'h-6 w-6',
      contentLines: 'line-clamp-3'
    },
    md: {
      padding: 'p-6',
      avatarSize: 'h-10 w-10',
      nameSize: 'text-sm',
      contentSize: 'text-base',
      roleSize: 'text-xs',
      quoteSize: 'h-8 w-8',
      contentLines: 'line-clamp-4'
    },
    lg: {
      padding: 'p-8',
      avatarSize: 'h-12 w-12',
      nameSize: 'text-base',
      contentSize: 'text-lg',
      roleSize: 'text-sm',
      quoteSize: 'h-10 w-10',
      contentLines: 'line-clamp-6'
    }
  };

  const config = sizeConfig[size];

  return (
    <BackgroundWrapper 
      className={`hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${className}`}
      padding={size === 'lg' ? 'lg' : 'md'}
    >
      {showQuoteIcon && (
        <div className="mb-4">
          <Quote className={`${config.quoteSize} text-red-600/20`} />
        </div>
      )}
      
      <p className={`text-slate-700 mb-6 ${config.contentSize} ${config.contentLines}`}>
        "{testimonial.content}"
      </p>
      
      <div className="flex items-center">
        <Avatar className={`${config.avatarSize} mr-3`}>
          <AvatarImage 
            src={testimonial.imageUrl} 
            alt={testimonial.name} 
          />
          <AvatarFallback className="bg-red-600/10 text-red-700 text-xs font-semibold">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <div>
          <h4 className={`font-medium text-slate-900 ${config.nameSize}`}>
            {testimonial.name}
          </h4>
          <p className={`text-slate-500 ${config.roleSize}`}>
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default TestimonialCard; 