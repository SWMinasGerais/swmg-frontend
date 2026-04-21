import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FeatureTestimonial from '@/components/shared/FeatureTestimonial';
import TestimonialCard from '@/features/testimonials/components/TestimonialCard';
import { Testimonial } from '@/modules/testimonials/types';

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  showSmallTestimonials?: boolean;
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  testimonials,
  showSmallTestimonials = true
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <FeatureTestimonial testimonial={testimonials[activeIndex]} />
      </div>
      
      {/* Navigation controls */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-slate-600">
          {activeIndex + 1} de {testimonials.length} depoimentos
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={prevTestimonial}
            className="border-slate-100/50 text-slate-700 hover:border-red-600 hover:text-red-600 bg-white/80 backdrop-blur-sm"
            aria-label="Depoimento anterior"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            onClick={nextTestimonial}
            className="border-slate-100/50 text-slate-700 hover:border-red-600 hover:text-red-600 bg-white/80 backdrop-blur-sm"
            aria-label="Próximo depoimento"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Small testimonials */}
      {showSmallTestimonials && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[0, 1, 2].map((index) => {
            const testimonialIndex = (activeIndex + index + 1) % testimonials.length;
            return (
              <TestimonialCard 
                key={testimonials[testimonialIndex].id}
                testimonial={testimonials[testimonialIndex]}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TestimonialsCarousel; 