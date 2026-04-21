import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type LocationFilterProps = {
  locations: string[];
  selectedLocation: string | 'all';
  setSelectedLocation: (location: string | 'all') => void;
};

/**
 * Location filter component with buttons for each location
 */
const LocationFilter: React.FC<LocationFilterProps> = ({ 
  locations, 
  selectedLocation, 
  setSelectedLocation 
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Button
        variant={selectedLocation === 'all' ? "default" : "outline"}
        size="sm"
        onClick={() => setSelectedLocation('all')}
        className={selectedLocation === 'all' ? "bg-red-600 hover:bg-red-700" : ""}
      >
        Todos
      </Button>
      
      {locations.map(location => (
        <Button
          key={location}
          variant={selectedLocation === location ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedLocation(location)}
          className={selectedLocation === location ? "bg-red-600 hover:bg-red-700" : ""}
        >
          {location}
        </Button>
      ))}
    </div>
  );
};

export default LocationFilter; 