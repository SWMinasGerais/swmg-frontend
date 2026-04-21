import React from 'react';
import { motion } from "framer-motion";
import SectionTemplate from '@/components/layout/SectionTemplate';
import TeamGrid from '@/features/team/components/TeamGrid';
import { TeamMemberData } from '@/modules/team/types';

// Sample team data
const teamMembers: TeamMemberData[] = [
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
  return (
    <SectionTemplate id="equipe" spacing="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <TeamGrid
          members={teamMembers}
          title="Quem faz acontecer"
          description="Conheça os organizadores, gerentes de comunidade e voluntários que transformam o Circuito Mineiro de Startup Weekend em realidade."
          eyebrow="Nossa Equipe"
        />
      </motion.div>
    </SectionTemplate>
  );
};

export default TeamSection; 