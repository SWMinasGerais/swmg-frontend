
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EventsSection from '@/components/EventsSection';
import StartupsSection from '@/components/StartupsSection';
import EcosystemSection from '@/components/EcosystemSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <EventsSection />
        <StartupsSection />
        <EcosystemSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
