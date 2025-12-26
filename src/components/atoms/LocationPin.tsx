import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationPinProps {
  location: string;
  size?: 'sm' | 'md';
  className?: string;
}

const LocationPin: React.FC<LocationPinProps> = ({
  location,
  size = 'sm',
  className = ''
}) => {
  const sizeClass = {
    sm: 'text-sm',
    md: 'text-base'
  };

  const iconSize = {
    sm: { width: 3, height: 3 },
    md: { width: 4, height: 4 }
  };

  return (
    <span className={`text-slate-500 flex items-center ${sizeClass[size]} ${className}`}>
      <MapPin className={`h-${iconSize[size].height} w-${iconSize[size].width} mr-1`} />
      {location}
    </span>
  );
};

export default LocationPin; 