import React from 'react';
import { Button } from "@/components/ui/button";
import SectionTemplate from '@/components/templates/SectionTemplate';
import SectionTitle from '@/components/atoms/SectionTitle';
import TestimonialsCarousel from '@/components/organisms/TestimonialsCarousel';
import { testimonials } from '@/modules/testimonials/data';

const TestimonialsSection = () => {
  return (
    <SectionTemplate id="depoimentos" spacing="lg">
      <SectionTitle
        eyebrow="Depoimentos"
        title="O que dizem sobre o Startup Weekend"
        description="Conheça as experiências de empreendedores, mentores e participantes que viveram a magia dos 54 horas de imersão no maior evento de empreendedorismo do mundo."
        align="center"
      />

      <TestimonialsCarousel testimonials={testimonials} />
      
      {/* CTA */}
      <div className="mt-16 text-center">
        <Button className="bg-white hover:bg-slate-50 text-red-600">
          Compartilhar sua experiência
        </Button>
      </div>
    </SectionTemplate>
  );
};

export default TestimonialsSection;
