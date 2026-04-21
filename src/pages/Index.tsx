import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import ParallaxBackground from '@/components/ParallaxBackground';

import HeroSection from '@/features/hero/HeroSection';
import AboutSection from '@/features/about/AboutSection';
import EventsSection from '@/features/events/EventsSection';
import CasesSection from '@/features/startups/CasesSection';
import EcosystemSection from '@/features/ecosystem/EcosystemSection';
import MentorshipSection from '@/features/mentors/MentorshipSection';
import MentorsSection from '@/features/mentors/MentorsSection';
import TeamSection from '@/features/team/TeamSection';
import TestimonialsSection from '@/features/testimonials/TestimonialsSection';
import PartnersSection from '@/features/partners/PartnersSection';
import SponsorPricingSection from '@/features/pricing/SponsorPricingSection';
import BlogSection from '@/features/blog/BlogSection';
import FaqSection from '@/features/faq/FaqSection';

// Static JSON-LD — safe since content is hardcoded, not user-provided
const schemaJSONLD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Circuito Mineiro de Startup Weekend",
  "description": "Transformando ideias em startups em 54 horas. O maior evento de empreendedorismo do mundo em Minas Gerais.",
  "image": "https://www.startupweekendmg.com/og-image.jpg",
  "url": "https://www.startupweekendmg.com",
  "startDate": "2026-10-18",
  "endDate": "2026-10-20",
  "location": {
    "@type": "Place",
    "name": "Múltiplas cidades em Minas Gerais",
    "address": { "@type": "PostalAddress", "addressRegion": "Minas Gerais", "addressCountry": "BR" }
  },
  "organizer": {
    "@type": "Organization",
    "name": "Circuito Mineiro de Startup Weekend",
    "url": "https://www.startupweekendmg.com"
  },
  "offers": {
    "@type": "Offer",
    "price": "70.00",
    "priceCurrency": "BRL",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-09-01"
  }
});

const Index: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <ParallaxBackground />
      <Toaster />

      <script type="application/ld+json">{schemaJSONLD}</script>

      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <CasesSection />
        <EcosystemSection />
        <MentorshipSection />
        <MentorsSection />
        <TeamSection />
        <TestimonialsSection />
        <PartnersSection />
        <SponsorPricingSection />
        <BlogSection />
        <FaqSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
