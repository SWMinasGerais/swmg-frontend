import { Startup } from './types';

// Sample startup data
export const startups: Startup[] = [
  {
    id: 1,
    name: "EduTech MG",
    logo: "/imgs/startups/edutech.png",
    city: "Belo Horizonte",
    year: "2019",
    description: "Plataforma de aprendizado personalizado para escolas públicas mineiras.",
    investment: "R$ 1.2M",
    status: "operational",
    industryTags: ["EdTech", "SaaS", "Impacto Social"],
    caseUrl: "/cases/edutech-mg"
  },
  {
    id: 2,
    name: "AgroSense",
    logo: "/imgs/startups/agrosense.png",
    city: "Uberlândia",
    year: "2020",
    description: "Sensores IoT para monitoramento de plantações com Inteligência Artificial.",
    investment: "R$ 3.5M",
    status: "fundraising",
    industryTags: ["AgTech", "IoT", "IA"],
    caseUrl: "/cases/agrosense"
  },
  {
    id: 3,
    name: "HealthTrack",
    logo: "/imgs/startups/healthtrack.png",
    city: "Juiz de Fora",
    year: "2018",
    description: "Software de gestão hospitalar com foco em UX e eficiência operacional.",
    investment: "R$ 5M",
    status: "acquired",
    industryTags: ["HealthTech", "SaaS", "Gestão"],
    caseUrl: "/cases/healthtrack"
  },
  {
    id: 4,
    name: "MinasPay",
    logo: "/imgs/startups/minaspay.png",
    city: "Belo Horizonte",
    year: "2021",
    description: "Solução de pagamentos digitais para pequenos comércios do interior.",
    investment: "R$ 800K",
    status: "accelerated",
    industryTags: ["Fintech", "Pagamentos", "B2B"],
    caseUrl: "/cases/minaspay"
  },
  {
    id: 5,
    name: "TourConnect",
    logo: "/imgs/startups/tourconnect.png",
    city: "Ouro Preto",
    year: "2022",
    description: "App que conecta turistas com guias locais em cidades históricas.",
    investment: "R$ 500K",
    status: "operational",
    industryTags: ["TravelTech", "Marketplace", "Turismo"],
    caseUrl: "/cases/tourconnect"
  },
  {
    id: 6,
    name: "EcoMinas",
    logo: "/imgs/startups/ecominas.png",
    city: "Montes Claros",
    year: "2020",
    description: "Marketplace de produtos orgânicos e agroecológicos da agricultura familiar.",
    investment: "R$ 1.8M",
    status: "operational",
    industryTags: ["FoodTech", "ESG", "Marketplace"],
    caseUrl: "/cases/ecominas"
  }
]; 