import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Twitter, Github, ExternalLink, Filter } from "lucide-react";

// Type definitions
type TeamMemberRole = "lead" | "community" | "production" | "volunteer";
type TeamMember = {
  id: number;
  name: string;
  role: string;
  roleType: TeamMemberRole;
  bio: string;
  photo: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
};

// Role configuration
const roleConfig = {
  lead: { label: "Lead Organizers", color: "bg-red-600 text-white" },
  community: { label: "Community Managers", color: "bg-emerald-600 text-white" },
  production: { label: "Staff de Produção", color: "bg-amber-600 text-white" },
  volunteer: { label: "Voluntários", color: "bg-violet-600 text-white" }
};

// Sample team data
const teamMembers: TeamMember[] = [
  // Lead Organizers
  {
    id: 1,
    name: "Fernanda Oliveira",
    role: "Lead Organizer",
    roleType: "lead",
    bio: "Empreendedora serial e responsável por trazer o Startup Weekend para Minas Gerais em 2015.",
    photo: "/imgs/team/fernanda.jpg",
    email: "fernanda@startupweekendmg.com",
    linkedin: "https://linkedin.com/in/fernandaoliveira",
    twitter: "https://twitter.com/fernandaoliv"
  },
  {
    id: 2,
    name: "Pedro Almeida",
    role: "Co-Lead Organizer",
    roleType: "lead",
    bio: "Fundador de 2 startups e apaixonado pelo ecossistema empreendedor mineiro.",
    photo: "/imgs/team/pedro.jpg",
    email: "pedro@startupweekendmg.com",
    linkedin: "https://linkedin.com/in/pedroalmeida",
    github: "https://github.com/pedroalmeida"
  },
  
  // Community Managers
  {
    id: 3,
    name: "Carolina Silva",
    role: "Community Manager",
    roleType: "community",
    bio: "Responsável pela comunicação e engajamento da comunidade SW em Minas.",
    photo: "/imgs/team/carolina.jpg",
    email: "carolina@startupweekendmg.com",
    linkedin: "https://linkedin.com/in/carolinasilva",
    twitter: "https://twitter.com/carol_silva"
  },
  {
    id: 4,
    name: "Lucas Ferreira",
    role: "Social Media Coordinator",
    roleType: "community",
    bio: "Gerencia todas as redes sociais e estratégias de marketing digital do Circuito.",
    photo: "/imgs/team/lucas.jpg",
    linkedin: "https://linkedin.com/in/lucasferreira",
    github: "https://github.com/lucasferreira"
  },
  
  // Production Staff
  {
    id: 5,
    name: "Mariana Costa",
    role: "Event Producer",
    roleType: "production",
    bio: "Coordena a produção e logística de todos os eventos do circuito.",
    photo: "/imgs/team/mariana.jpg",
    email: "mariana@startupweekendmg.com",
    linkedin: "https://linkedin.com/in/marianacosta"
  },
  {
    id: 6,
    name: "André Santos",
    role: "Partnerships Manager",
    roleType: "production",
    bio: "Responsável por desenvolver parcerias estratégicas com empresas e instituições.",
    photo: "/imgs/team/andre.jpg",
    linkedin: "https://linkedin.com/in/andresantos",
    twitter: "https://twitter.com/andresantos"
  },
  {
    id: 7,
    name: "Juliana Mendes",
    role: "Finance Coordinator",
    roleType: "production",
    bio: "Gerencia o orçamento e finanças de todos os eventos do circuito.",
    photo: "/imgs/team/juliana.jpg",
    email: "juliana@startupweekendmg.com"
  },
  
  // Volunteers
  {
    id: 8,
    name: "Rafael Martins",
    role: "Volunteer - BH",
    roleType: "volunteer",
    bio: "Estudante de Engenharia e entusiasta de startups.",
    photo: "/imgs/team/rafael.jpg",
    github: "https://github.com/rafaelmartins"
  },
  {
    id: 9,
    name: "Amanda Rocha",
    role: "Volunteer - Uberlândia",
    roleType: "volunteer",
    bio: "Desenvolvedora e evangelista de inovação no Triângulo Mineiro.",
    photo: "/imgs/team/amanda.jpg",
    twitter: "https://twitter.com/amandarocha",
    github: "https://github.com/amandarocha"
  },
  {
    id: 10,
    name: "Carlos Eduardo",
    role: "Volunteer - Juiz de Fora",
    roleType: "volunteer",
    bio: "Designer e organizador da comunidade de startups em JF.",
    photo: "/imgs/team/carlos.jpg",
    linkedin: "https://linkedin.com/in/carloseduardo"
  }
];

const TeamSection = () => {
  const [selectedRole, setSelectedRole] = useState<TeamMemberRole | "all">("all");
  const [showFilterMobile, setShowFilterMobile] = useState(false);

  // Filter team members based on selected role
  const filteredMembers = selectedRole === "all" 
    ? teamMembers 
    : teamMembers.filter(member => member.roleType === selectedRole);

  return (
    <section id="equipe" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center mb-3">
            <div className="w-8 h-1 bg-red-600 mr-2"></div>
            <h5 className="font-medium text-slate-900">Nossa Equipe</h5>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Quem faz <span className="text-red-600">acontecer</span>
          </h2>
          <p className="text-slate-600">
            Conheça os organizadores, gerentes de comunidade e voluntários que 
            transformam o Circuito Mineiro de Startup Weekend em realidade.
          </p>
        </div>

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
                    setSelectedRole(key as TeamMemberRole);
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
        <div className="hidden md:flex flex-wrap gap-2 justify-center mb-10">
          <Button 
            variant="outline" 
            className={`border-slate-200 ${selectedRole === "all" ? "bg-red-600 text-white hover:bg-red-700" : "hover:border-red-600 hover:text-red-600"}`}
            onClick={() => setSelectedRole("all")}
          >
            Todos os membros
          </Button>
          
          {Object.entries(roleConfig).map(([key, { label }]) => (
            <Button 
              key={key} 
              variant="outline" 
              className={`border-slate-200 ${selectedRole === key ? "bg-red-600 text-white hover:bg-red-700" : "hover:border-red-600 hover:text-red-600"}`}
              onClick={() => setSelectedRole(key as TeamMemberRole)}
            >
              {label}
            </Button>
          ))}
        </div>

        {/* Team members grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMembers.map(member => (
            <div 
              key={member.id} 
              className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100/50 group"
            >
              <div className="aspect-square relative overflow-hidden bg-slate-100">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&background=fee&color=c00&size=400`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <p className="text-white text-sm mb-4">{member.bio}</p>
                  <div className="flex gap-1">
                    {member.email && (
                      <Button 
                        size="icon" 
                        variant="outline" 
                        className="h-8 w-8 rounded-full bg-white/10 border-transparent text-white hover:bg-white/20"
                        asChild
                      >
                        <a href={`mailto:${member.email}`} aria-label={`Email de ${member.name}`}>
                          <Mail className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    
                    {member.linkedin && (
                      <Button 
                        size="icon" 
                        variant="outline" 
                        className="h-8 w-8 rounded-full bg-white/10 border-transparent text-white hover:bg-white/20"
                        asChild
                      >
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${member.name}`}>
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    
                    {member.twitter && (
                      <Button 
                        size="icon" 
                        variant="outline" 
                        className="h-8 w-8 rounded-full bg-white/10 border-transparent text-white hover:bg-white/20"
                        asChild
                      >
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer" aria-label={`Twitter de ${member.name}`}>
                          <Twitter className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    
                    {member.github && (
                      <Button 
                        size="icon" 
                        variant="outline" 
                        className="h-8 w-8 rounded-full bg-white/10 border-transparent text-white hover:bg-white/20"
                        asChild
                      >
                        <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub de ${member.name}`}>
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-bold text-slate-900 mb-1">{member.name}</h3>
                <div className="flex items-center justify-between">
                  <span 
                    className={`text-xs px-2 py-1 rounded-full ${roleConfig[member.roleType].color}`}
                  >
                    {member.role}
                  </span>
                  
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-slate-400 hover:text-red-600 hover:bg-red-600/10"
                    asChild
                  >
                    <a href={member.linkedin || "#"} target="_blank" rel="noopener noreferrer" aria-label={`Ver perfil de ${member.name}`}>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredMembers.length === 0 && (
          <div className="text-center py-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-slate-100/50">
            <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-slate-400 text-2xl">?</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Nenhum membro encontrado
            </h3>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              Não encontramos membros da equipe com o filtro selecionado. Por favor, tente selecionar outra categoria.
            </p>
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
              onClick={() => setSelectedRole("all")}
            >
              Ver todos os membros
            </Button>
          </div>
        )}
        
        {/* Join the team CTA */}
        <div className="mt-16 p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-slate-100/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Faça parte da equipe!</h3>
              <p className="text-slate-600 max-w-xl">
                Quer ajudar a organizar o Startup Weekend na sua cidade? 
                Estamos sempre em busca de pessoas apaixonadas por empreendedorismo 
                e inovação para expandir nosso circuito.
              </p>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white whitespace-nowrap">
              Seja voluntário
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 