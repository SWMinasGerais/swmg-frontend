import React from 'react';
import { Mail, Linkedin, Twitter, Github } from "lucide-react";
import BackgroundWrapper from '@/components/shared/BackgroundWrapper';
import StatusBadge from '@/components/shared/StatusBadge';
import { TeamMemberData, TeamMemberRoleType, roleConfig } from '@/modules/team/types';

interface TeamMemberCardProps {
  member: TeamMemberData;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <BackgroundWrapper className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="flex-grow">
        <div className="relative mb-5">
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-4 border-white shadow-md">
            <img 
              src={member.photo} 
              alt={member.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/200x200/fee/c00?text=SW";
              }}
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${roleConfig[member.roleType].color}`}>
              {member.roleType === "lead" ? "Organizer" : member.roleType}
            </span>
          </div>
        </div>
        
        <div className="text-center mb-4">
          <h3 className="font-bold text-xl text-slate-900">{member.name}</h3>
          <p className="text-slate-500 text-sm">{member.role}</p>
        </div>
        
        <p className="text-slate-600 text-center mb-6">{member.bio}</p>
      </div>
      
      {/* Social links */}
      {(member.email || member.linkedin || member.twitter || member.github) && (
        <div className="flex justify-center space-x-3 pt-4 border-t border-slate-100">
          {member.email && (
            <a 
              href={`mailto:${member.email}`}
              className="text-slate-400 hover:text-red-600 transition-colors" 
              aria-label={`Email ${member.name}`}
            >
              <Mail className="h-5 w-5" />
            </a>
          )}
          
          {member.linkedin && (
            <a 
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-blue-600 transition-colors"
              aria-label={`LinkedIn de ${member.name}`}
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          
          {member.twitter && (
            <a 
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-sky-500 transition-colors"
              aria-label={`Twitter de ${member.name}`}
            >
              <Twitter className="h-5 w-5" />
            </a>
          )}
          
          {member.github && (
            <a 
              href={member.github}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-purple-600 transition-colors"
              aria-label={`GitHub de ${member.name}`}
            >
              <Github className="h-5 w-5" />
            </a>
          )}
        </div>
      )}
    </BackgroundWrapper>
  );
};

export default TeamMemberCard; 