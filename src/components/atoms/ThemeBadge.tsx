import React from 'react';
import { Tag } from 'lucide-react';
import { cn } from "@/lib/utils";
import { EventTheme } from "@/modules/events/types";

interface ThemeBadgeProps {
  theme: EventTheme | string;
  className?: string;
  showIcon?: boolean;
}

// Theme color mappings
const themeColors: Record<string, string> = {
  "EdTech": "bg-blue-100 text-blue-700",
  "HealthTech": "bg-red-100 text-red-700",
  "FinTech": "bg-indigo-100 text-indigo-700",
  "AgTech": "bg-green-100 text-green-700",
  "SmartCities": "bg-slate-100 text-slate-700",
  "Sustainability": "bg-emerald-100 text-emerald-700",
  "default": "bg-red-100 text-red-700" // Default color
};

const ThemeBadge = ({ theme, className, showIcon = true }: ThemeBadgeProps) => {
  // Get the appropriate color based on the theme or use default
  const themeKey = Object.keys(themeColors).find(key => 
    theme.includes(key)
  ) || "default";
  
  const colorClass = themeColors[themeKey];
  
  return (
    <span className={cn(
      "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
      colorClass,
      className
    )}>
      {showIcon && <Tag className="h-3 w-3 mr-1" />}
      {theme}
    </span>
  );
};

export default ThemeBadge; 