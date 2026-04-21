import React from 'react';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTemplate from '@/components/layout/SectionTemplate';
import EventCard from '@/features/events/components/EventCard';
import StatCard from '@/components/shared/StatCard';
import SectionTitle from '@/components/shared/SectionTitle';
import LiveBadge from '@/components/shared/LiveBadge';
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
      className="pt-24 pb-10 md:pt-28 md:pb-14"
    >
      {/* Hero content */}
      <div className="max-w-4xl mx-auto text-center">
        <LiveBadge className="mb-8">O Maior Evento de Empreendedorismo de MG</LiveBadge>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#111] mb-6 leading-[1.05] tracking-[-0.03em]">
          Transformando ideias em{' '}
          <span className="text-editorial text-red-600">startups</span>{' '}
          em 54h
        </h1>
        <p className="text-lg md:text-xl text-neutral-500 mb-10 leading-relaxed max-w-2xl mx-auto">
          Nós somos Minas, nós somos Startup Weekend. O Circuito Mineiro reúne empreendedores, designers e desenvolvedores para criar o futuro da inovação em nosso estado.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button size="lg" className="bg-[#E4002B] hover:bg-[#c70025] text-white px-8 py-6 text-base font-semibold rounded-full shadow-[0_4px_20px_rgba(228,0,43,0.25)] hover:shadow-[0_8px_30px_rgba(228,0,43,0.35)] transition-all">
            Inscreva-se agora
          </Button>
          <Button variant="outline" size="lg" className="border-neutral-300 text-neutral-700 hover:border-[#E4002B] hover:text-[#E4002B] px-8 py-6 text-base rounded-full group transition-all">
            Veja cases
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-neutral-200/60">
          <StatCard value={5000} prefix="+" label="Participantes" />
          <StatCard value={40} suffix="+" label="Startups criadas" />
          <StatCard value={128} suffix="+" label="Eventos realizados" />
          <StatCard value={28} prefix="R$ " suffix="M" label="Investimento captado" />
        </div>
      </div>

      {/* Próximos Eventos — 3 colunas abaixo */}
      <div className="mt-10">
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
