import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import StartupGrid from "@/components/organisms/StartupGrid";
import StatsGrid from "@/components/organisms/StatsGrid";
import SectionTemplate from "@/components/templates/SectionTemplate";
import { startups } from "@/modules/startups/data";
import { startupStatsData } from "@/modules/stats/data";
import { StartupData } from "@/modules/startups/types";
import { StatusType } from "@/components/atoms/StatusBadge";

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
    <SectionTemplate id="cases" spacing="md">
      <StartupGrid
        startups={startupData}
        title="Startups Nascidas no Circuito"
        description="Conheça as startups que nasceram durante nossos eventos e hoje estão transformando o mercado mineiro e brasileiro."
        eyebrow="Casos de Sucesso"
      />
      
      {/* Stats section below startups grid */}
      <StatsGrid 
        stats={startupStatsData} 
        className="mt-16 mb-4"
      />
      
      <div className="text-center mt-12">
        <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
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