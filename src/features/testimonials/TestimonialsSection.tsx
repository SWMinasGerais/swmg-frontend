import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import SectionTemplate from '@/components/layout/SectionTemplate';
import SectionTitle from '@/components/shared/SectionTitle';
import TestimonialsCarousel from '@/features/testimonials/components/TestimonialsCarousel';
import { testimonials } from '@/modules/testimonials/data';

const TestimonialsSection = () => {
  return (
    <SectionTemplate id="depoimentos" spacing="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle
          eyebrow="Depoimentos"
          title="O que dizem sobre o Startup Weekend"
          description="Conheça as experiências de empreendedores, mentores e participantes que viveram a magia dos 54 horas de imersão no maior evento de empreendedorismo do mundo."
          align="center"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <TestimonialsCarousel testimonials={testimonials} />
      </motion.div>
      
      {/* CTA */}
      <div className="mt-10 text-center">
        <Button className="bg-white hover:bg-slate-50 text-[#E4002B]">
          Compartilhar sua experiência
        </Button>
      </div>
    </SectionTemplate>
  );
};

export default TestimonialsSection;
