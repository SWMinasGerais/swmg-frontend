import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  className?: string;
  icon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const FilterButton: React.FC<FilterButtonProps> = ({
  children,
  isActive,
  onClick,
  className,
  icon,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  };

  return (
    <Button
      variant={isActive ? "default" : "outline"}
      className={cn(
        "border-slate-200 transition-all",
        isActive 
          ? "bg-red-600 text-white hover:bg-red-700" 
          : "hover:border-red-600 hover:text-red-600 hover:bg-red-50",
        sizeClasses[size],
        className
      )}
      onClick={onClick}
    >
      {icon && (
        <span className={cn(
          "mr-1.5",
          isActive ? "" : "text-slate-400"
        )}>
          {icon}
        </span>
      )}
      {children}
    </Button>
  );
};

export default FilterButton; 