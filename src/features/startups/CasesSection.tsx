import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import StartupGrid from "@/features/startups/components/StartupGrid";
import StatsGrid from "@/components/shared/StatsGrid";
import SectionTemplate from "@/components/layout/SectionTemplate";
import { startups } from "@/modules/startups/data";
import { startupStatsData } from "@/modules/stats/data";
import { StartupData } from "@/modules/startups/types";
import { StatusType } from "@/components/shared/StatusBadge";

const CasesSection = () => {
  // Map status from startup to StartupData status values
  const mapStatus = (status: string): 'active' | 'inactive' | 'acquired' => {
    switch(status) {
      case 'operational': return 'active';
      case 'fundraising': return 'active';
      case 'accelerated': return 'active';
      case 'acquired': return 'acquired';
      default: return 'inactive';
    }
  };

  // Convert Startup[] to StartupData[]
  const startupData: StartupData[] = startups.map(startup => ({
    id: startup.id,
    name: startup.name,
    description: startup.description,
    logoUrl: startup.logo,
    industryTags: startup.industryTags,
    foundedYear: parseInt(startup.year),
    location: startup.city,
    status: mapStatus(startup.status),
    fundingAmount: startup.investment
  }));

  return (
    <SectionTemplate id="cases" spacing="md" className="bg-[#FAF9F6]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <StartupGrid
          startups={startupData}
          title="Startups Nascidas no Circuito"
          description="Conheça as startups que nasceram durante nossos eventos e hoje estão transformando o mercado mineiro e brasileiro."
          eyebrow="Casos de Sucesso"
        />
      </motion.div>

      {/* Stats section below startups grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <StatsGrid
          stats={startupStatsData}
          className="mt-10 mb-4"
        />
      </motion.div>

      <div className="text-center mt-8">
        <Button asChild variant="outline" className="border-[#E4002B] text-[#E4002B] hover:bg-[#E4002B] hover:text-white">
          <Link to="/cases">
            Ver todos os casos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </SectionTemplate>
  );
};

export default CasesSection; 