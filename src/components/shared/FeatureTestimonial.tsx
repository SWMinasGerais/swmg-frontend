import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import BackgroundWrapper from '@/components/shared/BackgroundWrapper';
import StarRating from '@/components/shared/StarRating';
import { Testimonial } from '@/modules/testimonials/types';

interface FeatureTestimonialProps {
  testimonial: Testimonial;
}

const FeatureTestimonial: React.FC<FeatureTestimonialProps> = ({
  testimonial
}) => {
  return (
    <BackgroundWrapper
      variant="white"
      padding="lg"
      className="shadow-md rounded-2xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative h-64 md:h-auto overflow-hidden rounded-xl">
          <img 
            src={testimonial.imageUrl} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://ui-avatars.com/api/?name=${testimonial.name.replace(' ', '+')}&background=fee&color=c00&size=600`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent md:hidden"></div>
          <Quote className="absolute top-6 left-6 h-10 w-10 text-red-600/80" />
        </div>
        
        <div className="flex flex-col justify-between">
          <div>
            <div className="mb-4">
              {testimonial.rating && (
                <StarRating 
                  rating={testimonial.rating} 
                  size="md"
                />
              )}
            </div>
            
            <p className="text-lg text-slate-700 italic mb-6">
              "{testimonial.content}"
            </p>
          </div>
          
          <div className="flex items-center">
            <Avatar className="h-12 w-12 mr-4 border-2 border-red-600/20">
              <AvatarImage 
                src={testimonial.imageUrl} 
                alt={testimonial.name} 
              />
              <AvatarFallback className="bg-red-600/10 text-red-700 font-semibold">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div>
              <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
              <p className="text-slate-600 text-sm">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default FeatureTestimonial; 