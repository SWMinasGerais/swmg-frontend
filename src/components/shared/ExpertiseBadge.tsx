import React from 'react';
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ExpertiseArea } from "@/modules/mentors/types";

interface ExpertiseBadgeProps {
  expertise: ExpertiseArea;
  className?: string;
}

const areaColors: Record<ExpertiseArea, string> = {
  "Tech": "bg-blue-50 text-blue-600 hover:bg-blue-100",
  "Business": "bg-emerald-50 text-emerald-600 hover:bg-emerald-100",
  "Design": "bg-purple-50 text-purple-600 hover:bg-purple-100",
  "Marketing": "bg-amber-50 text-amber-600 hover:bg-amber-100",
  "Finance": "bg-green-50 text-green-600 hover:bg-green-100",
  "Legal": "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
};

const ExpertiseBadge = ({ expertise, className }: ExpertiseBadgeProps) => {
  const colorClass = areaColors[expertise] || "bg-red-50 text-red-600 hover:bg-red-100";
  
  return (
    <Badge 
      variant="secondary" 
      className={cn(colorClass, className)}
    >
      {expertise}
    </Badge>
  );
};

export default ExpertiseBadge; 