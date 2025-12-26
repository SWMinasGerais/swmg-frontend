import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, MapPin, Users } from "lucide-react";
import SectionTemplate from '@/components/templates/SectionTemplate';
import EventCard from '@/components/molecules/EventCard';
import SectionTitle from '@/components/atoms/SectionTitle';
import { Event } from '@/modules/events/types';

// Sample upcoming events data
const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "EdTech & Future of Learning",
    date: "15-17 Outubro, 2023",
    location: "Hub Mineiro de Inovação",
    city: "Belo Horizonte",
    theme: "EdTech",
    status: "upcoming",
    remainingSlots: 15,
    totalSlots: 80,
    imageUrl: "/images/events/edtech.jpg"
  },
  {
    id: 2,
    title: "HealthTech Innovation",
    date: "12-14 Novembro, 2023",
    location: "Campus UFMG",
    city: "Belo Horizonte",
    theme: "HealthTech",
    status: "upcoming",
    remainingSlots: 8,
    totalSlots: 60,
    imageUrl: "/images/events/healthtech.jpg"
  },
  {
    id: 3,
    title: "FinTech Revolution",
    date: "08-10 Dezembro, 2023",
    location: "FIEMG Lab",
    city: "Belo Horizonte",
    theme: "FinTech",
    status: "upcoming",
    remainingSlots: 25,
    totalSlots: 70,
    imageUrl: "/images/events/fintech.jpg"
  }
];

const HeroSection = () => {
  return (
    <SectionTemplate 
      spacing="lg"
      className="pt-28 pb-16 md:pt-32 md:pb-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Transformando ideias em <span className="text-red-600">startups</span> em 54h
          </h1>
          <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed">
            Nós somos Minas, nós somos Startup Weekend. O Circuito Mineiro reúne empreendedores, designers e desenvolvedores para criar o futuro da inovação em nosso estado.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-medium">
              Inscreva-se agora
            </Button>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-6 text-lg group">
              Veja cases
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="flex items-center text-sm text-slate-500">
            <div className="w-12 h-1 bg-red-600 mr-3"></div>
            <span>Participe dos próximos eventos!</span>
          </div>
        </div>
        
        <div className="relative animate-fade-in hidden lg:flex flex-col">
          <SectionTitle 
            title="Próximos Eventos"
            eyebrow="Participe"
            align="left"
            className="mb-6"
          />
          
          <div className="relative h-full">
            {/* Event cards staggered */}
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={event.id}
                  className="relative"
                  style={{ 
                    marginLeft: `${index * 1.5}rem`, 
                    zIndex: upcomingEvents.length - index 
                  }}
                >
                  <EventCard
                    title={event.title}
                    date={event.date}
                    location={event.city}
                    theme={event.theme as string}
                    status={event.status}
                    remainingSlots={event.remainingSlots}
                    image={event.imageUrl}
                    url={`/events/${event.id}`}
                    featured={index === 0}
                    className={index === 0 ? "transform scale-100 shadow-lg" : "transform scale-95 opacity-90"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile-only event cards */}
      <div className="lg:hidden mt-12">
        <SectionTitle 
          title="Próximos Eventos"
          eyebrow="Participe"
          align="center"
          className="mb-6"
        />
        <div className="flex overflow-x-auto pb-4 gap-4 snap-x">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="snap-center min-w-[300px] w-[85vw] max-w-sm">
              <EventCard
                title={event.title}
                date={event.date}
                location={event.city}
                theme={event.theme as string}
                status={event.status}
                remainingSlots={event.remainingSlots}
                image={event.imageUrl}
                url={`/events/${event.id}`}
                featured
              />
            </div>
          ))}
        </div>
      </div>
    </SectionTemplate>
  );
};

export default HeroSection;
