import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Define testimonial type
type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  imageUrl: string;
  rating?: number;
};

// Sample testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Carvalho",
    role: "Fundadora",
    company: "TechMinas",
    content: "Participar do Startup Weekend mudou minha vida. Foi lá que conheci meus co-fundadores e validamos a ideia inicial da TechMinas, que hoje tem 15 funcionários e atende clientes em todo o Brasil.",
    imageUrl: "/imgs/testimonials/testimonial1.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Ricardo Mendes",
    role: "CTO",
    company: "EdTech MG",
    content: "O ambiente colaborativo e os mentores do Startup Weekend foram fundamentais para refinar nossa solução. Em 54 horas, conseguimos validar um problema real e criar uma solução que hoje impacta a educação em Minas Gerais.",
    imageUrl: "/imgs/testimonials/testimonial2.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Juliana Souza",
    role: "CEO",
    company: "FinMG",
    content: "Como empreendedora de primeira viagem, o Startup Weekend foi a porta de entrada para o ecossistema de inovação. Os contatos que fiz durante o evento continuam sendo valiosos, e a metodologia me ensinou a pensar como uma verdadeira startup.",
    imageUrl: "/imgs/testimonials/testimonial3.jpg",
    rating: 5
  },
  {
    id: 4,
    name: "Carlos Eduardo",
    role: "Participante",
    company: "SW Uberlândia 2023",
    content: "Mesmo não tendo vencido o evento, o aprendizado foi imenso. A experiência de trabalhar sob pressão com uma equipe diversa me fez crescer como profissional e entender melhor o processo de criação de produtos.",
    imageUrl: "/imgs/testimonials/testimonial4.jpg",
    rating: 4
  },
  {
    id: 5,
    name: "Fernanda Lima",
    role: "Mentora",
    company: "Startup Weekend MG",
    content: "Ver o crescimento dos participantes em apenas um final de semana é inspirador. O Circuito Mineiro tem revelado talentos incríveis e conectado pessoas que estão realmente transformando o ecossistema de inovação no estado.",
    imageUrl: "/imgs/testimonials/testimonial5.jpg",
    rating: 5
  }
];

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <svg 
          key={index} 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-4 w-4 ${index < rating ? "text-red-600" : "text-slate-300"}`}
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center mb-3">
            <div className="w-8 h-1 bg-red-600 mr-2"></div>
            <h5 className="font-medium text-slate-900">Depoimentos</h5>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            O que dizem sobre o <span className="text-red-600">Startup Weekend</span>
          </h2>
          <p className="text-slate-600">
            Conheça as experiências de empreendedores, mentores e participantes que viveram a magia dos 54 horas de imersão no maior evento de empreendedorismo do mundo.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden transition-all duration-300 border border-slate-100/50">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img 
                  src={testimonials[activeIndex].imageUrl} 
                  alt={testimonials[activeIndex].name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${testimonials[activeIndex].name.replace(' ', '+')}&background=fee&color=c00&size=600`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent md:hidden"></div>
                <Quote className="absolute top-6 left-6 h-10 w-10 text-red-600/80" />
              </div>
              
              <div className="p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="mb-4">
                    {testimonials[activeIndex].rating && (
                      <StarRating rating={testimonials[activeIndex].rating} />
                    )}
                  </div>
                  
                  <p className="text-lg text-slate-700 italic mb-6">
                    "{testimonials[activeIndex].content}"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4 border-2 border-red-600/20">
                    <AvatarImage 
                      src={testimonials[activeIndex].imageUrl} 
                      alt={testimonials[activeIndex].name} 
                    />
                    <AvatarFallback className="bg-red-600/10 text-red-700 font-semibold">
                      {testimonials[activeIndex].name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                <div>
                    <h4 className="font-bold text-slate-900">{testimonials[activeIndex].name}</h4>
                    <p className="text-slate-600 text-sm">
                      {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
        </div>
        
        {/* Testimonial grid for smaller quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[0, 1, 2].map((index) => {
            const testimonialIndex = (activeIndex + index + 1) % testimonials.length;
            return (
              <div 
                key={testimonials[testimonialIndex].id} 
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-slate-100/50 hover:shadow-md transition-all duration-300"
              >
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-red-600/20" />
                </div>
                
                <p className="text-slate-700 mb-6 line-clamp-4">
                  "{testimonials[testimonialIndex].content}"
                </p>
                
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage 
                      src={testimonials[testimonialIndex].imageUrl} 
                      alt={testimonials[testimonialIndex].name} 
                    />
                    <AvatarFallback className="bg-red-600/10 text-red-700 text-xs font-semibold">
                      {testimonials[testimonialIndex].name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h4 className="font-medium text-slate-900 text-sm">{testimonials[testimonialIndex].name}</h4>
                    <p className="text-slate-500 text-xs">
                      {testimonials[testimonialIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            Compartilhar sua experiência
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
