import React from 'react';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTemplate from '@/components/templates/SectionTemplate';
import EventCard from '@/components/molecules/EventCard';
import StatCard from '@/components/molecules/StatCard';
import SectionTitle from '@/components/atoms/SectionTitle';
import LiveBadge from '@/components/atoms/LiveBadge';
import { Event } from '@/modules/events/types';

// Sample upcoming events data
const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "EdTech & Future of Learning",
    date: "18-20 Outubro, 2026",
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
    date: "8-10 Novembro, 2026",
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
    date: "6-8 Dezembro, 2026",
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
      className="pt-28 pb-16 md:pt-32 md:pb-20"
    >
      {/* Hero content — centered */}
      <div className="max-w-3xl mx-auto text-center animate-fade-in">
        <LiveBadge className="mb-6">O Maior Evento de Empreendedorismo de MG</LiveBadge>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
          Transformando ideias em{' '}
          <span className="text-red-600 relative inline-block">
            startups
            <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600/30 rounded-full"></span>
          </span>{' '}
          em 54h
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
          Nós somos Minas, nós somos Startup Weekend. O Circuito Mineiro reúne empreendedores, designers e desenvolvedores para criar o futuro da inovação em nosso estado.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20 text-white px-8 py-6 text-lg font-semibold rounded-xl">
            Inscreva-se agora
          </Button>
          <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:border-red-300 hover:text-red-600 px-8 py-6 text-lg rounded-xl group">
            Veja cases
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200">
          <StatCard value={5000} prefix="+" label="Participantes" />
          <StatCard value={40} suffix="+" label="Startups criadas" />
          <StatCard value={128} suffix="+" label="Eventos realizados" />
          <StatCard value={28} prefix="R$ " suffix="M" label="Investimento captado" />
        </div>
      </div>

      {/* Próximos Eventos — 3 colunas abaixo */}
      <div className="mt-16">
        <SectionTitle
          title="Próximos Eventos"
          eyebrow="Participe"
          align="center"
          className="mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              location={event.city}
              theme={event.theme as string}
              status={event.status}
              remainingSlots={event.remainingSlots}
              image={event.imageUrl}
              url={`/eventos/${event.id}`}
              featured
            />
          ))}
        </div>
      </div>
    </SectionTemplate>
  );
};

export default HeroSection;
