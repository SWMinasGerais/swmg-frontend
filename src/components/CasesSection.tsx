import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  ArrowUpRight, 
  TrendingUp, 
  DollarSign, 
  Users,
  ArrowRight,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";

// Startup type definition
type StartupStatus = "operational" | "acquired" | "fundraising" | "accelerated";
type Startup = {
  id: number;
  name: string;
  logo: string;
  city: string;
  year: string;
  description: string;
  investment: string;
  status: StartupStatus;
  industryTags: string[];
  caseUrl: string;
};

// Sample startup data
const sampleStartups: Startup[] = [
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

const CasesSection = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  // Get unique list of tags from all startups
  const uniqueTags = Array.from(
    new Set(sampleStartups.flatMap(startup => startup.industryTags))
  ).sort();
  
  // Filter startups based on selected tag
  const filteredStartups = activeFilter 
    ? sampleStartups.filter(startup => startup.industryTags.includes(activeFilter))
    : sampleStartups;

  // Status badge helper function
  const getStatusBadge = (status: StartupStatus) => {
    const statusConfig = {
      operational: { color: "bg-green-100 text-green-700", label: "Operacional" },
      acquired: { color: "bg-purple-100 text-purple-700", label: "Adquirida" },
      fundraising: { color: "bg-blue-100 text-blue-700", label: "Captando" },
      accelerated: { color: "bg-amber-100 text-amber-700", label: "Acelerada" }
    };
    
    const config = statusConfig[status];
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
        {config.label}
      </span>
    );
  };

  return (
    <section id="cases" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h5 className="text-slate-900 font-medium mb-3 inline-flex items-center justify-center">
            <div className="w-8 h-1 bg-red-600 mr-2"></div>
            Casos de Sucesso
          </h5>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Startups Nascidas no Circuito
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Conheça as startups que nasceram durante nossos eventos e hoje 
            estão transformando o mercado mineiro e brasileiro.
          </p>
        </div>

        {/* Filter tags */}
        <div className="overflow-x-auto pb-2 mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <Button 
              variant={activeFilter === null ? "default" : "outline"} 
              size="sm"
              onClick={() => setActiveFilter(null)}
              className={activeFilter === null ? "bg-red-600 hover:bg-red-700 text-white" : "border-slate-200 text-slate-700"}
            >
              Todas
            </Button>
            {uniqueTags.map(tag => (
              <Button 
                key={tag} 
                variant={activeFilter === tag ? "default" : "outline"} 
                size="sm"
                onClick={() => setActiveFilter(tag)}
                className={activeFilter === tag ? "bg-red-600 hover:bg-red-700 text-white" : "border-slate-200 text-slate-700"}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        {/* Startups grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStartups.map(startup => (
            <div 
              key={startup.id} 
              className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-100/50 group transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="h-14 w-14 bg-slate-50 rounded-lg flex items-center justify-center overflow-hidden border border-slate-100">
                    <img 
                      src={startup.logo} 
                      alt={`${startup.name} logo`} 
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/100x100/fee/c00?text=SW"; 
                      }}
                    />
                  </div>
                  <div>
                    {getStatusBadge(startup.status)}
                  </div>
                </div>
                
                <h3 className="font-bold text-xl mb-1 text-slate-900">{startup.name}</h3>
                <p className="text-sm text-slate-500 mb-3 flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  {startup.city}, SW {startup.year}
                </p>
                <p className="text-slate-600 mb-4 h-12 line-clamp-2">{startup.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {startup.industryTags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-red-50 text-red-700 rounded-full text-xs cursor-pointer hover:bg-red-100 transition-colors"
                      onClick={() => setActiveFilter(tag)}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="border-t border-slate-100 pt-3 mt-2 flex justify-between items-center">
                  <div className="text-sm font-medium flex items-center text-red-600">
                    <DollarSign className="h-4 w-4 mr-1" />
                    {startup.investment}
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="text-red-600 border-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors"
                    asChild
                  >
                    <Link to={startup.caseUrl}>
                      Ver case
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats section below startups grid */}
        <div className="mt-16 mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-slate-100/50 hover:bg-white/90 transition-all duration-300">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center mr-3">
                <TrendingUp className="h-5 w-5 text-red-600" />
              </div>
              <h3 className="font-bold text-slate-900">Sucesso</h3>
            </div>
            <p className="text-3xl font-bold text-red-600 mb-1">85%</p>
            <p className="text-sm text-slate-600">Taxa de sobrevivência após 2 anos</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-slate-100/50 hover:bg-white/90 transition-all duration-300">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center mr-3">
                <DollarSign className="h-5 w-5 text-red-600" />
              </div>
              <h3 className="font-bold text-slate-900">Investimento</h3>
            </div>
            <p className="text-3xl font-bold text-red-600 mb-1">R$ 12M+</p>
            <p className="text-sm text-slate-600">Capital captado por startups do SW</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-slate-100/50 hover:bg-white/90 transition-all duration-300">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center mr-3">
                <Users className="h-5 w-5 text-red-600" />
              </div>
              <h3 className="font-bold text-slate-900">Comunidade</h3>
            </div>
            <p className="text-3xl font-bold text-red-600 mb-1">3.200+</p>
            <p className="text-sm text-slate-600">Participantes desde 2015</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-slate-100/50 hover:bg-white/90 transition-all duration-300">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center mr-3">
                <ExternalLink className="h-5 w-5 text-red-600" />
              </div>
              <h3 className="font-bold text-slate-900">Expansão</h3>
            </div>
            <p className="text-3xl font-bold text-red-600 mb-1">12</p>
            <p className="text-sm text-slate-600">Cidades mineiras já impactadas</p>
          </div>
        </div>
        
        {/* CTA button */}
        <div className="mt-12 text-center">
          <Button className="bg-red-600 hover:bg-red-700 text-white group relative overflow-hidden">
            <span className="relative z-10 flex items-center">
              Conheça mais histórias de sucesso
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 h-full w-full opacity-0 group-hover:opacity-25 transition-opacity duration-300 bg-white" />
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%] animate-shine opacity-0 group-hover:opacity-100"></span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CasesSection; 