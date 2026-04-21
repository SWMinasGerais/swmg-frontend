import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  MapPin, 
  GraduationCap, 
  LinkedinIcon, 
  Mail, 
  ExternalLink,
  Check,
  X
} from "lucide-react";
import { Mentor } from "@/modules/mentors/types";
import ExpertiseBadge from "@/components/shared/ExpertiseBadge";

interface MentorCardProps {
  mentor: Mentor;
  onImageError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

const MentorCard = ({ 
  mentor,
  onImageError = (e) => {
    e.currentTarget.src = "https://via.placeholder.com/150?text=Mentor";
  }
}: MentorCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group h-full">
      <div className="flex flex-col h-full">
        {/* Cabeçalho com foto e status */}
        <div className="relative pt-8 pb-4 px-4 flex flex-col items-center">
          <div className="absolute top-2 right-2">
            {mentor.available ? (
              <div className="flex items-center text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full gap-1">
                <Check className="h-3 w-3" />
                <span>Disponível</span>
              </div>
            ) : (
              <div className="flex items-center text-xs bg-slate-50 text-slate-500 px-2 py-1 rounded-full gap-1">
                <X className="h-3 w-3" />
                <span>Indisponível</span>
              </div>
            )}
          </div>
          
          <Avatar className="h-12 w-12 mb-3">
            <AvatarImage
              src={mentor.photo}
              alt={mentor.name}
              onError={onImageError}
            />
            <AvatarFallback className="bg-neutral-100 text-neutral-400 text-sm font-semibold">
              {mentor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          
          <h3 className="font-bold text-xl text-[#111] text-center line-clamp-1">{mentor.name}</h3>

          <div className="mt-1 flex items-center text-neutral-500 text-sm line-clamp-1 max-w-full">
            <Briefcase className="h-4 w-4 mr-1 shrink-0 text-neutral-400" />
            <span className="truncate">{mentor.role}{mentor.company ? ` · ${mentor.company}` : ""}</span>
          </div>

          {mentor.location && (
            <div className="mt-1 flex items-center text-neutral-500 text-sm line-clamp-1 max-w-full">
              <MapPin className="h-4 w-4 mr-1 shrink-0 text-neutral-400" />
              <span className="truncate">{mentor.location}</span>
            </div>
          )}
        </div>
        
        {/* Áreas de expertise */}
        <div className="px-4 pb-3 flex flex-wrap gap-1 justify-center">
          {mentor.expertise.slice(0, 3).map((area, index) => (
            <ExpertiseBadge 
              key={index} 
              expertise={area}
            />
          ))}
          {mentor.expertise.length > 3 && (
            <Badge variant="outline" className="text-slate-500 border-slate-200">
              +{mentor.expertise.length - 3}
            </Badge>
          )}
        </div>
        
        {/* Bio snippet */}
        {mentor.bio && (
          <div className="px-4 pb-3 text-center text-sm text-neutral-500 line-clamp-2">
            {mentor.bio}
          </div>
        )}
        
        {/* Footer com links */}
        <div className="mt-auto pt-4 pb-4 px-4 border-t border-slate-100 bg-slate-50 flex justify-center gap-2">
          {mentor.linkedin && (
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-full border-slate-200 text-red-600 hover:text-white hover:bg-red-600 hover:border-red-600"
              asChild
            >
              <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${mentor.name}`}>
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </Button>
          )}
          
          {mentor.email && (
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-full border-slate-200 text-red-600 hover:text-white hover:bg-red-600 hover:border-red-600"
              asChild
            >
              <a href={`mailto:${mentor.email}`} aria-label={`Email de ${mentor.name}`}>
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          )}
          
          {mentor.website && (
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-full border-slate-200 text-red-600 hover:text-white hover:bg-red-600 hover:border-red-600"
              asChild
            >
              <a href={mentor.website} target="_blank" rel="noopener noreferrer" aria-label={`Site de ${mentor.name}`}>
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorCard; 