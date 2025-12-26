import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TeamMemberCard from './TeamMemberCard';
import SectionTitle from '@/components/atoms/SectionTitle';
import { TeamMemberData, TeamMemberRoleType, roleConfig } from '@/modules/team/types';

interface TeamGridProps {
  members: TeamMemberData[];
  title: string;
  description?: string;
  eyebrow?: string;
}

const TeamGrid: React.FC<TeamGridProps> = ({
  members,
  title,
  description,
  eyebrow
}) => {
  const [selectedRole, setSelectedRole] = useState<TeamMemberRoleType | 'all'>('all');
  const [showFilterMobile, setShowFilterMobile] = useState(false);

  // Filter team members based on selected role
  const filteredMembers = selectedRole === 'all'
    ? members
    : members.filter(member => member.roleType === selectedRole);

  return (
    <div>
      <SectionTitle
        title={title}
        description={description}
        eyebrow={eyebrow}
      />

      {/* Filters */}
      <div className="mb-10">
        {/* Filter - Mobile */}
        <div className="md:hidden mb-8">
          <Button 
            variant="outline" 
            className="w-full border-slate-100/50 text-slate-700 flex items-center justify-between bg-white/80 backdrop-blur-sm"
            onClick={() => setShowFilterMobile(!showFilterMobile)}
          >
            <span className="flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              {selectedRole === "all" ? "Filtrar por função" : roleConfig[selectedRole].label}
            </span>
            <span className={`transform transition-transform ${showFilterMobile ? "rotate-180" : ""}`}>
              ▼
            </span>
          </Button>
          
          {showFilterMobile && (
            <div className="mt-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-slate-100/50 p-2 space-y-1">
              <Button 
                variant="ghost" 
                className={`w-full justify-start ${selectedRole === "all" ? "bg-red-600/10 text-red-700 font-medium" : "text-slate-700"}`}
                onClick={() => {
                  setSelectedRole("all");
                  setShowFilterMobile(false);
                }}
              >
                Todos os membros
              </Button>
              
              {Object.entries(roleConfig).map(([key, { label }]) => (
                <Button 
                  key={key} 
                  variant="ghost" 
                  className={`w-full justify-start ${selectedRole === key ? "bg-red-600/10 text-red-700 font-medium" : "text-slate-700"}`}
                  onClick={() => {
                    setSelectedRole(key as TeamMemberRoleType);
                    setShowFilterMobile(false);
                  }}
                >
                  {label}
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Filter - Desktop */}
        <div className="hidden md:flex flex-wrap justify-center gap-2 mb-8">
          <Button 
            variant={selectedRole === "all" ? "default" : "outline"} 
            size="sm"
            onClick={() => setSelectedRole("all")}
            className={selectedRole === "all" ? "bg-red-600 hover:bg-red-700 text-white" : "border-slate-200 text-slate-700"}
          >
            Todos os membros
          </Button>

          {Object.entries(roleConfig).map(([key, { label }]) => (
            <Button 
              key={key} 
              variant={selectedRole === key ? "default" : "outline"} 
              size="sm"
              onClick={() => setSelectedRole(key as TeamMemberRoleType)}
              className={selectedRole === key ? "bg-red-600 hover:bg-red-700 text-white" : "border-slate-200 text-slate-700"}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>

      {/* Team members grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMembers.map(member => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-slate-700">Nenhum membro encontrado para esta função.</p>
        </div>
      )}
    </div>
  );
};

export default TeamGrid; 