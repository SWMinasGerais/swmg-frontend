import React from 'react';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import EventsSection from '@/components/sections/EventsSection';
import AboutSection from '@/components/sections/AboutSection';
import CasesSection from '@/components/sections/CasesSection';
import EcosystemSection from '@/components/sections/EcosystemSection';
import MentorshipSection from '@/components/sections/MentorshipSection';
import TeamSection from '@/components/sections/TeamSection';
import BlogSection from '@/components/sections/BlogSection';
import FaqSection from '@/components/sections/FaqSection';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import MentorsSection from '@/components/sections/MentorsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PartnersSection from '@/components/sections/PartnersSection';
import StartupsSection from '@/components/sections/StartupsSection';
import ParallaxBackground from '@/components/ParallaxBackground';
import SponsorPricingSection from '@/components/organisms/SponsorPricingSection';

// Schema JSON-LD for SEO
const schemaJSONLD = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Circuito Mineiro de Startup Weekend",
  "description": "Transformando ideias em startups em 54 horas. O maior evento de empreendedorismo do mundo em Minas Gerais.",
  "image": "https://www.startupweekendmg.com/og-image.jpg",
  "url": "https://www.startupweekendmg.com",
  "startDate": "2023-10-15",
  "endDate": "2023-10-17",
  "location": {
    "@type": "Place",
    "name": "Múltiplas cidades em Minas Gerais",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Minas Gerais",
      "addressCountry": "BR"
    }
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
    "validFrom": "2023-09-01"
  }
};

const Index: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <ParallaxBackground />
      <Toaster />
      
      {/* SEO Schema Markup */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJSONLD) }} 
      />
      
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
