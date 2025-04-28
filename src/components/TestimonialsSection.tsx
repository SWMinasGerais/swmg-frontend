
import React from 'react';
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "João Paulo",
    role: "Participante SW BH 2023",
    quote: "Uma experiência transformadora que mudou minha visão sobre empreendedorismo.",
    image: "testimonial1.jpg"
  },
  {
    name: "Marina Costa",
    role: "Vencedora SW Uberlândia",
    quote: "Conheci meus co-fundadores durante o evento e hoje nossa startup está crescendo.",
    image: "testimonial2.jpg"
  },
  {
    name: "Pedro Santos",
    role: "Mentor SW Juiz de Fora",
    quote: "É inspirador ver tantas ideias inovadoras nascendo em um único fim de semana.",
    image: "testimonial3.jpg"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-swmg-accent to-swmg-dark text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge className="bg-white/10 text-white hover:bg-white/20 mb-4">
            Depoimentos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Dizem Sobre o SWMG
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Histórias de quem viveu a experiência do Startup Weekend em Minas Gerais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 backdrop-blur rounded-xl p-6 animate-fade-in">
              <div className="mb-4">
                <svg className="w-8 h-8 text-swmg-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6">{testimonial.quote}</p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-swmg-primary rounded-full flex items-center justify-center">
                  <span className="font-bold text-white">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
