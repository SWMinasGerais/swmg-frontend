import React from 'react';
import FilterButton from '@/components/atoms/FilterButton';

interface FilterOption {
  id: string | number;
  label: string;
  icon?: React.ReactNode;
}

interface FilterGroupProps {
  options: FilterOption[];
  selectedOption: string | number | null;
  onChange: (option: string | number | null) => void;
  includeAllOption?: boolean;
  allOptionLabel?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const FilterGroup: React.FC<FilterGroupProps> = ({
  options,
  selectedOption,
  onChange,
  includeAllOption = true,
  allOptionLabel = "All",
  size = 'md',
  className
}) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className || ''}`}>
      {includeAllOption && (
        <FilterButton
          isActive={selectedOption === null}
          onClick={() => onChange(null)}
          size={size}
        >
          {allOptionLabel}
        </FilterButton>
      )}
      
      {options.map(option => (
        <FilterButton
          key={option.id}
          isActive={selectedOption === option.id}
          onClick={() => onChange(option.id)}
          icon={option.icon}
          size={size}
        >
          {option.label}
        </FilterButton>
      ))}
    </div>
  );
};

export default FilterGroup; 