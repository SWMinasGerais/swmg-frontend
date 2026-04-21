import React, { useState } from 'react';
import StartupCard from './StartupCard';
import TagFilter from '@/components/shared/TagFilter';
import SectionTitle from '@/components/shared/SectionTitle';
import { StartupData } from '@/modules/startups/types';

interface StartupGridProps {
  startups: StartupData[];
  title: string;
  description?: string;
  eyebrow?: string;
}

const StartupGrid: React.FC<StartupGridProps> = ({
  startups,
  title,
  description,
  eyebrow
}) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  // Get unique list of tags from all startups
  const uniqueTags = Array.from(
    new Set(startups.flatMap(startup => startup.industryTags))
  ).sort();
  
  // Filter startups based on selected tag
  const filteredStartups = activeFilter 
    ? startups.filter(startup => startup.industryTags.includes(activeFilter))
    : startups;

  return (
    <div>
      <SectionTitle 
        title={title}
        description={description}
        eyebrow={eyebrow}
      />

      <TagFilter 
        tags={uniqueTags}
        activeTag={activeFilter}
        onTagChange={setActiveFilter}
        color="red"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStartups.map(startup => (
          <StartupCard 
            key={startup.id} 
            startup={startup}
            onTagClick={(tag) => setActiveFilter(tag)}
          />
        ))}
      </div>
    </div>
  );
};

export default StartupGrid; 