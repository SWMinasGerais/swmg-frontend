import { Event } from './types';

// Sample events data
export const events: Event[] = [
  {
    id: 1,
    title: "EdTech & Future of Learning",
    date: "15-17 Outubro, 2023",
    location: "PUC Minas",
    city: "Belo Horizonte",
    theme: "EdTech",
    description: "Evento focado em soluções tecnológicas para educação e aprendizado",
    status: "upcoming",
    remainingSlots: 15,
    totalSlots: 120,
    image: "/imgs/events/edtech.jpg",
    url: "/events/edtech-future-learning",
    sponsors: ["PUC Minas", "SEBRAE", "Google for Startups"]
  },
  {
    id: 2,
    title: "HealthTech Innovation",
    date: "05-07 Novembro, 2023",
    location: "Laboratórios UFMG",
    city: "Belo Horizonte",
    theme: "HealthTech",
    description: "Desenvolvendo soluções inovadoras para o setor de saúde",
    status: "upcoming",
    remainingSlots: 28,
    totalSlots: 80,
    image: "/imgs/events/healthtech.jpg",
    url: "/events/healthtech-innovation",
    sponsors: ["UFMG", "Hospital das Clínicas", "Bio-Manguinhos"]
  },
  {
    id: 3,
    title: "Agronegócio & Sustentabilidade",
    date: "10-12 Dezembro, 2023",
    location: "UFTM",
    city: "Uberlândia",
    theme: "AgTech",
    description: "Tecnologia aplicada ao agronegócio com foco em sustentabilidade",
    status: "upcoming",
    remainingSlots: 40,
    totalSlots: 100,
    image: "/imgs/events/agtech.jpg",
    url: "/events/agro-sustentabilidade",
    sponsors: ["UFTM", "Embrapa", "John Deere"]
  },
  {
    id: 4,
    title: "FinTech Revolution",
    date: "25-27 Agosto, 2023",
    location: "BDMG",
    city: "Belo Horizonte",
    theme: "FinTech",
    description: "Inovações em serviços financeiros e banking",
    status: "past",
    totalSlots: 90,
    image: "/imgs/events/fintech.jpg",
    url: "/events/fintech-revolution",
    sponsors: ["BDMG", "Banco Inter", "Stone"]
  },
  {
    id: 5,
    title: "Smart Cities",
    date: "14-16 Julho, 2023",
    location: "Parque Tecnológico",
    city: "Viçosa",
    theme: "SmartCities",
    description: "Soluções inteligentes para cidades mais eficientes e sustentáveis",
    status: "past",
    totalSlots: 80,
    image: "/imgs/events/smartcities.jpg",
    url: "/events/smart-cities",
    sponsors: ["UFV", "Prefeitura de Viçosa", "Cisco"]
  }
]; 