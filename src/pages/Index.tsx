import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EventsSection from '@/components/EventsSection';
import AboutSection from '@/components/AboutSection';
import CasesSection from '@/components/CasesSection';
import EcosystemSection from '@/components/EcosystemSection';
import MentorshipSection from '@/components/MentorshipSection';
import TeamSection from '@/components/TeamSection';
import BlogSection from '@/components/BlogSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster";
import MentorsSection from '@/components/MentorsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PartnersSection from '@/components/PartnersSection';
import StartupsSection from '@/components/StartupsSection';
import ParallaxBackground from '@/components/ParallaxBackground';

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
        <StartupsSection />
        <CasesSection />
        <EcosystemSection />
        <MentorshipSection />
        <MentorsSection />
        <TeamSection />
        <TestimonialsSection />
        <PartnersSection />
        <BlogSection />
        <FaqSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
