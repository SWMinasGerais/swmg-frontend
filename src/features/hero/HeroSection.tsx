import React from 'react';
import { ArrowRight, MapPin, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountUp from '@/components/shared/CountUp';
import { Link } from 'react-router-dom';

const upcomingEvents = [
  { id: 1, title: "EdTech & Future of Learning", date: "18–20 Out 2026", city: "Belo Horizonte", theme: "EdTech", slots: 15 },
  { id: 2, title: "HealthTech Innovation", date: "8–10 Nov 2026", city: "Belo Horizonte", theme: "HealthTech", slots: 8 },
  { id: 3, title: "FinTech Revolution", date: "6–8 Dez 2026", city: "Belo Horizonte", theme: "FinTech", slots: 25 },
];

const HeroSection = () => {
  return (
    <section className="relative bg-[#0A0A0A] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[60%] h-[80%] bg-gradient-to-bl from-[#E4002B]/8 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-[#E4002B]/5 to-transparent" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-24">
        {/* Top badge */}
        <div className="flex items-center gap-2 mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E4002B] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E4002B]" />
          </span>
          <span className="text-xs font-medium text-white/50 uppercase tracking-[0.2em]">Circuito Mineiro de Startup Weekend</span>
        </div>

        {/* Main grid: headline left, events right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left — headline */}
          <div className="lg:col-span-7">
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-white leading-[0.95] tracking-[-0.04em] mb-8">
              Transformando
              <br />
              ideias em{' '}
              <span className="text-editorial text-[#E4002B]">startups</span>
              <br />
              em 54h
            </h1>

            <p className="text-base md:text-lg text-white/40 mb-10 max-w-lg leading-relaxed">
              O Circuito Mineiro reúne empreendedores, designers e desenvolvedores para criar o futuro da inovação em Minas Gerais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button size="lg" className="bg-[#E4002B] hover:bg-[#c70025] text-white px-8 py-6 text-sm font-semibold rounded-full tracking-wide uppercase shadow-[0_0_40px_rgba(228,0,43,0.3)] hover:shadow-[0_0_60px_rgba(228,0,43,0.4)] transition-all">
                Inscreva-se agora
              </Button>
              <Button variant="ghost" size="lg" className="text-white/60 hover:text-white hover:bg-white/5 px-8 py-6 text-sm rounded-full group tracking-wide">
                Ver cases
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-6">
              {[
                { value: 5000, prefix: '+', label: 'Participantes' },
                { value: 40, suffix: '+', label: 'Startups' },
                { value: 128, suffix: '+', label: 'Eventos' },
                { value: 28, prefix: 'R$', suffix: 'M', label: 'Investimento' },
              ].map((stat, i) => (
                <div key={i} className="border-t border-white/10 pt-4">
                  <div className="text-2xl font-bold text-white tracking-tight">
                    <CountUp end={stat.value} prefix={stat.prefix || ''} suffix={stat.suffix || ''} />
                  </div>
                  <div className="text-[11px] text-white/30 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — upcoming events */}
          <div className="lg:col-span-5">
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-medium text-white/30 uppercase tracking-[0.2em]">Próximos Eventos</span>
              <Link to="/eventos" className="text-xs text-[#E4002B] hover:text-[#ff1a42] flex items-center gap-1 transition-colors">
                Ver todos <ChevronRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="space-y-3">
              {upcomingEvents.map((event, i) => (
                <Link
                  key={event.id}
                  to={`/eventos/${event.id}`}
                  className="block group"
                >
                  <div className="bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-5 transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-[10px] font-semibold text-[#E4002B] uppercase tracking-[0.15em] bg-[#E4002B]/10 px-2.5 py-1 rounded-full">
                        {event.theme}
                      </span>
                      <span className="text-[11px] text-white/25">{event.slots} vagas</span>
                    </div>

                    <h3 className="text-white font-semibold text-base mb-3 group-hover:text-[#E4002B] transition-colors leading-snug">
                      {event.title}
                    </h3>

                    <div className="flex items-center gap-4 text-white/30 text-xs">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3 w-3" />
                        {event.city}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
