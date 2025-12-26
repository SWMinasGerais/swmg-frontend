import { Mentor } from './types';

// Sample mentors data
export const mentors: Mentor[] = [
  {
    id: 1,
    name: "Ana Silva",
    role: "CTO",
    company: "TechMinas",
    bio: "15 anos de experiência em desenvolvimento de software e liderança de equipes técnicas.",
    photo: "/imgs/mentors/mentor1.jpg",
    expertise: ["Tech"],
    available: true,
    location: "Belo Horizonte",
    email: "ana.silva@techminas.com",
    linkedin: "https://linkedin.com/in/anasilva"
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "CEO",
    company: "Startup BH",
    bio: "Empreendedor serial com 3 exits de sucesso. Especialista em validação de negócios.",
    photo: "/imgs/mentors/mentor2.jpg",
    expertise: ["Business"],
    available: false,
    location: "Belo Horizonte",
    linkedin: "https://linkedin.com/in/carlosmendes",
    website: "https://startupbh.com.br"
  },
  {
    id: 3,
    name: "Mariana Costa",
    role: "UX Designer",
    company: "DesignLab MG",
    bio: "Especialista em experiência do usuário com foco em produtos digitais.",
    photo: "/imgs/mentors/mentor3.jpg",
    expertise: ["Design"],
    available: true,
    location: "Uberlândia",
    email: "mariana@designlabmg.com",
    linkedin: "https://linkedin.com/in/marianacosta"
  },
  {
    id: 4,
    name: "Ricardo Oliveira",
    role: "Head de Marketing",
    company: "GrowthMinas",
    bio: "Especialista em crescimento de startups e aquisição de usuários.",
    photo: "/imgs/mentors/mentor4.jpg",
    expertise: ["Marketing"],
    available: true,
    location: "Juiz de Fora",
    email: "ricardo@growthminas.com",
    linkedin: "https://linkedin.com/in/ricardooliveira",
    twitter: "https://twitter.com/ricardoogrowth"
  },
  {
    id: 5,
    name: "Juliana Alves",
    role: "Head of Legal",
    company: "JurisTech",
    bio: "Especialista em direito digital e propriedade intelectual para startups.",
    photo: "/imgs/mentors/mentor5.jpg",
    expertise: ["Legal"],
    available: true,
    location: "Belo Horizonte",
    email: "juliana@juristech.com",
    linkedin: "https://linkedin.com/in/julianaalves"
  },
  {
    id: 6,
    name: "Fernando Souza",
    role: "CFO",
    company: "InvestBH",
    bio: "Especialista em finanças para startups e captação de investimentos.",
    photo: "/imgs/mentors/mentor6.jpg",
    expertise: ["Finance"],
    available: false,
    location: "Belo Horizonte",
    linkedin: "https://linkedin.com/in/fernandosouza"
  }
]; 