import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { UsersRound, CalendarClock, Clock, Calendar, ArrowRight, Sparkles, Check, Briefcase } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Mentor = {
  id: number;
  name: string;
  role: string;
  company: string;
  area: string;
  imageUrl: string;
  bio: string;
  expertise: string[];
  available: boolean;
};

// Sample mentor data
const mentors: Mentor[] = [
  {
    id: 1,
    name: "Ana Silva",
    role: "CTO",
    company: "TechMinas",
    area: "Tecnologia",
    imageUrl: "/imgs/mentors/mentor1.jpg",
    bio: "15 anos de experiência em desenvolvimento de software e liderança de equipes técnicas.",
    expertise: ["Desenvolvimento Web", "Mobile", "AI"],
    available: true
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "CEO",
    company: "Startup BH",
    area: "Negócios",
    imageUrl: "/imgs/mentors/mentor2.jpg",
    bio: "Empreendedor serial com 3 exits de sucesso. Especialista em validação de negócios.",
    expertise: ["Validação", "Pitch", "Investimento"],
    available: false
  },
  {
    id: 3,
    name: "Mariana Costa",
    role: "UX Designer",
    company: "DesignLab MG",
    area: "Design",
    imageUrl: "/imgs/mentors/mentor3.jpg",
    bio: "Especialista em experiência do usuário com foco em produtos digitais.",
    expertise: ["UX/UI", "Design Thinking", "Pesquisa"],
    available: true
  },
  {
    id: 4,
    name: "Ricardo Oliveira",
    role: "Head de Marketing",
    company: "GrowthMinas",
    area: "Marketing",
    imageUrl: "/imgs/mentors/mentor4.jpg",
    bio: "Especialista em crescimento de startups e aquisição de usuários.",
    expertise: ["Growth Hacking", "SEO", "Ads"],
    available: true
  }
];

const MentorshipSection = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  
  // Get unique areas for filter
  const areas = Array.from(new Set(mentors.map(mentor => mentor.area)));
  
  // Filter mentors based on selected area
  const filteredMentors = selectedArea 
    ? mentors.filter(mentor => mentor.area === selectedArea)
    : mentors;

  return (
    <section id="mentoria" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center mb-3">
            <div className="w-8 h-1 bg-red-600 mr-2"></div>
            <h5 className="font-medium text-slate-900">Programa de Mentoria</h5>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Conecte-se com <span className="text-red-600">especialistas</span> do ecossistema
          </h2>
          <p className="text-slate-600">
            Nosso programa de mentoria conecta empreendedores a profissionais experientes que podem ajudar a impulsionar seu negócio através de sessões personalizadas.
          </p>
        </div>

        {/* Program benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-slate-100/50 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
              <Clock className="text-red-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Sessões Flexíveis</h3>
            <p className="text-slate-600">
              Sessões de 30 ou 60 minutos que se adaptam à sua agenda e necessidades específicas.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-slate-100/50 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="text-red-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Expertise Diversificada</h3>
            <p className="text-slate-600">
              Mentores especializados em diferentes áreas: tecnologia, negócios, marketing, design e mais.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-slate-100/50 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
              <Calendar className="text-red-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Encontros Semanais</h3>
            <p className="text-slate-600">
              Acompanhamento contínuo com encontros semanais para ajudar no desenvolvimento do seu negócio.
            </p>
          </div>
        </div>

        {/* Featured mentors section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900">Mentores em Destaque</h3>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className={`border-slate-200 hover:border-red-600 ${selectedArea === null ? 'bg-red-600 text-white hover:bg-red-700' : ''}`}
                onClick={() => setSelectedArea(null)}
                size="sm"
              >
                Todos
              </Button>
              
              {areas.map(area => (
                <Button 
                  key={area} 
                  variant="outline" 
                  className={`border-slate-200 hover:border-red-600 ${selectedArea === area ? 'bg-red-600 text-white hover:bg-red-700' : ''}`}
                  onClick={() => setSelectedArea(area)}
                  size="sm"
                >
                  {area}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMentors.map(mentor => (
              <div 
                key={mentor.id} 
                className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm border border-slate-100/50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={mentor.imageUrl} 
                    alt={mentor.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${mentor.name.replace(' ', '+')}&background=fee&color=c00&size=256`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm mb-2">{mentor.bio}</p>
                      <div className="flex flex-wrap gap-1">
                        {mentor.expertise.map((skill, index) => (
                          <span key={index} className="bg-red-600/80 text-white text-xs px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-slate-900">{mentor.name}</h4>
                    {mentor.available ? (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full flex items-center">
                        <Check className="w-3 h-3 mr-1" />
                        Disponível
                      </span>
                    ) : (
                      <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full">
                        Indisponível
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-slate-600 text-sm mb-3">
                    <Briefcase className="w-4 h-4 mr-1 text-slate-400" />
                    {mentor.role} · {mentor.company}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                    disabled={!mentor.available}
                  >
                    Agendar mentoria
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Program info */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden mt-16">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-3 p-8">
              <div className="inline-flex items-center text-sm text-red-600 font-medium mb-4 bg-red-50 px-3 py-1 rounded-full">
                <UsersRound className="w-4 h-4 mr-2" />
                Programa de Mentoria 2023-2024
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Participe do nosso programa de mentoria
              </h3>
              
              <p className="text-slate-600 mb-6">
                O programa de mentoria do Startup Weekend MG está aberto para empreendedores em qualquer estágio. 
                Seja você um(a) empreendedor(a) iniciante com uma ideia ou alguém já com uma startup em operação, 
                nossos mentores podem ajudar a impulsionar seu negócio.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-3 text-red-600">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Sessões personalizadas</h4>
                    <p className="text-sm text-slate-500">Adaptadas às suas necessidades</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-3 text-red-600">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Feedback honesto</h4>
                    <p className="text-sm text-slate-500">De profissionais experientes</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-3 text-red-600">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Networking qualificado</h4>
                    <p className="text-sm text-slate-500">Conexões para crescer</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-3 text-red-600">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Follow-up contínuo</h4>
                    <p className="text-sm text-slate-500">Acompanhamento do progresso</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <span className="flex items-center">
                  Inscrever-se no programa
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Button>
            </div>
            
            <div className="md:col-span-2 bg-slate-900/90 backdrop-blur-sm p-8 flex flex-col justify-center relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4">Próximas Sessões Abertas</h3>
                
                <div className="space-y-4">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="flex items-center text-red-400 text-sm mb-2">
                      <CalendarClock className="w-4 h-4 mr-2" />
                      19 de Outubro, 2023 · 18:30
                    </div>
                    <h4 className="text-white font-medium mb-1">Validação de Ideias</h4>
                    <div className="flex items-center">
                      <Avatar className="h-6 w-6 mr-2">
                        <AvatarImage src="/imgs/mentors/mentor2.jpg" />
                        <AvatarFallback>CM</AvatarFallback>
                      </Avatar>
                      <span className="text-slate-300 text-sm">Carlos Mendes</span>
                    </div>
                  </div>
                  
                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="flex items-center text-red-400 text-sm mb-2">
                      <CalendarClock className="w-4 h-4 mr-2" />
                      22 de Outubro, 2023 · 14:00
                    </div>
                    <h4 className="text-white font-medium mb-1">UX para Startups</h4>
                    <div className="flex items-center">
                      <Avatar className="h-6 w-6 mr-2">
                        <AvatarImage src="/imgs/mentors/mentor3.jpg" />
                        <AvatarFallback>MC</AvatarFallback>
                      </Avatar>
                      <span className="text-slate-300 text-sm">Mariana Costa</span>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="mt-6 border-slate-700 text-slate-300 hover:bg-slate-800 w-full">
                  Ver todas as sessões
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection; 