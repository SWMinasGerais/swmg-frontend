import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/shared/SectionTitle";
import SectionTemplate from "@/components/layout/SectionTemplate";
import MentorFilters from "@/features/mentors/components/MentorFilters";
import MentorsGrid from "@/features/mentors/components/MentorsGrid";
import { mentors } from "@/modules/mentors/data";
import { ExpertiseArea, Mentor } from "@/modules/mentors/types";

const MentorsSection = () => {
  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState<ExpertiseArea | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [availableOnly, setAvailableOnly] = useState<boolean | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [filteredMentors, setFilteredMentors] = useState<Mentor[]>(mentors);
  const pageSize = 8;

  // Get unique areas for filter
  const areas: ExpertiseArea[] = Array.from(
    new Set(mentors.flatMap(mentor => mentor.expertise))
  ) as ExpertiseArea[];
  
  // Get unique regions for filter
  const regions = Array.from(
    new Set(mentors.map(mentor => mentor.location).filter(Boolean))
  ) as string[];
  
  // Count active filters
  const activeFiltersCount = [
    !!searchTerm,
    !!selectedArea,
    !!selectedRegion,
    availableOnly !== null
  ].filter(Boolean).length;

  // Apply filters
  useEffect(() => {
    // Simulate loading state
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      try {
        const filtered = mentors.filter(mentor => {
          // Filter by search term
          if (searchTerm && !mentor.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return false;
          }
          
          // Filter by area
          if (selectedArea && !mentor.expertise.includes(selectedArea)) {
            return false;
          }
          
          // Filter by region
          if (selectedRegion && mentor.location !== selectedRegion) {
            return false;
          }
          
          // Filter by availability
          if (availableOnly !== null && mentor.available !== availableOnly) {
            return false;
          }
          
          return true;
        });
        
        setFilteredMentors(filtered);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    }, 500); // Simulated loading delay
    
    return () => clearTimeout(timer);
  }, [searchTerm, selectedArea, selectedRegion, availableOnly]);
  
  // Reset current page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedArea, selectedRegion, availableOnly]);
  
  // Reset all filters
  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedArea(null);
    setSelectedRegion(null);
    setAvailableOnly(null);
    setCurrentPage(1);
  };

  // Get paginated mentors
  const paginatedMentors = filteredMentors.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <SectionTemplate id="mentoria" spacing="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle
          eyebrow="Nossa Rede de Mentores"
          title="Conexão com especialistas"
          titleHighlight="especialistas"
          description="Conheça os mentores que compõem o Circuito Mineiro de Startup Weekend e estão prontos para compartilhar suas experiências e conhecimentos para ajudar sua startup a alcançar seu potencial."
          align="center"
        />
      </motion.div>

      {/* Filters */}
      <MentorFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedArea={selectedArea}
        onAreaChange={setSelectedArea}
        selectedRegion={selectedRegion}
        onRegionChange={setSelectedRegion}
        availableOnly={availableOnly}
        onAvailableChange={setAvailableOnly}
        onResetFilters={handleResetFilters}
        activeFiltersCount={activeFiltersCount}
        areas={areas}
        regions={regions}
      />

      {/* Mentors Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <MentorsGrid
          mentors={paginatedMentors}
          isLoading={isLoading}
          isError={isError}
          onResetFilters={handleResetFilters}
        />
      </motion.div>

      {/* Pagination - Simple version */}
      {filteredMentors.length > pageSize && !isLoading && !isError && (
              <div className="flex justify-center mt-10">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl border border-neutral-100 p-1">
                  <Button 
                    variant="ghost" 
                    className="text-neutral-500 hover:text-[#E4002B] hover:bg-red-50"
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                  >
                    Anterior
                  </Button>
                  
                  <div className="px-4 py-2 text-sm font-medium text-neutral-500">
              Página {currentPage} de {Math.ceil(filteredMentors.length / pageSize)}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="text-neutral-500 hover:text-[#E4002B] hover:bg-red-50"
              onClick={() => setCurrentPage(prev => Math.min(Math.ceil(filteredMentors.length / pageSize), prev + 1))}
              disabled={currentPage >= Math.ceil(filteredMentors.length / pageSize)}
                  >
                    Próxima
                  </Button>
                </div>
              </div>
        )}

        {/* CTA */}
        <div className="mt-10 bg-gradient-to-r from-red-600/90 to-red-700/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Quer se tornar um mentor?</h3>
              <p className="text-red-100 max-w-xl">
                Compartilhe seu conhecimento e experiência com empreendedores em início de jornada.
                Faça parte da nossa rede de mentores e contribua para o ecossistema de startups em Minas Gerais.
              </p>
            </div>
            <Button className="bg-white text-[#E4002B] hover:bg-red-50 whitespace-nowrap shadow-sm">
              Quero ser mentor
            </Button>
          </div>
        </div>
    </SectionTemplate>
  );
};

export default MentorsSection;
