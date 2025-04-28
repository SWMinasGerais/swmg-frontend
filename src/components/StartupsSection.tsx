
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const startups = [
  {
    id: 1,
    name: "GreenMinas",
    description: "Plataforma de soluções sustentáveis para agronegócio que nasceu no Startup Weekend BH 2023.",
    year: "2023",
    city: "Belo Horizonte",
    category: "AgTech",
    funding: "R$ 1.2M",
    status: "Em crescimento",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 2,
    name: "HealthTech MG",
    description: "Solução de telemedicina acessível para regiões rurais, criada durante o Startup Weekend Uberlândia.",
    year: "2022",
    city: "Uberlândia",
    category: "HealthTech",
    funding: "R$ 800K",
    status: "Em crescimento",
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: 3,
    name: "EduMinas",
    description: "Plataforma educacional que conecta escolas públicas a voluntários especializados.",
    year: "2021",
    city: "Juiz de Fora",
    category: "EdTech",
    funding: "R$ 500K",
    status: "Em operação",
    color: "from-orange-500 to-amber-500"
  },
  {
    id: 4,
    name: "LogiMG",
    description: "Solução logística para pequenos produtores do interior de Minas Gerais.",
    year: "2021",
    city: "Montes Claros",
    category: "Logística",
    funding: "R$ 350K",
    status: "Em operação",
    color: "from-purple-500 to-violet-500"
  }
];

const StartupsSection: React.FC = () => {
  return (
    <section id="startups" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge className="bg-swmg-light text-swmg-primary hover:bg-swmg-light mb-4">Casos de Sucesso</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-swmg-dark mb-4">Startups nascidas no Startup Weekend</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça algumas das empresas de sucesso que nasceram durante os eventos do Startup Weekend em Minas Gerais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {startups.map(startup => (
            <Card key={startup.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-slide-up">
              <div className={`h-2 bg-gradient-to-r ${startup.color}`}></div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">{startup.name}</CardTitle>
                  <Badge variant="outline">{startup.category}</Badge>
                </div>
                <CardDescription className="flex items-center space-x-2">
                  <span>{startup.city}</span>
                  <span>•</span>
                  <span>{startup.year}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{startup.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="text-gray-500 text-xs">Investimento</p>
                    <p className="font-semibold">{startup.funding}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="text-gray-500 text-xs">Status</p>
                    <p className="font-semibold">{startup.status}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="text-sm text-gray-500">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <polyline points="15 10 20 15 15 20"/>
                    <path d="M4 4v7a4 4 0 0 0 4 4h12"/>
                  </svg>
                  <span>Nasceu no SW {startup.city} {startup.year}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-swmg-light p-8 rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl md:text-2xl font-bold text-swmg-dark mb-2">Sua startup pode ser a próxima!</h3>
              <p className="text-gray-600">
                Já são mais de 30 startups surgidas do Circuito Mineiro de Startup Weekend.
              </p>
            </div>
            <div className="flex space-x-4">
              {["2021", "2022", "2023", "2024"].map(year => (
                <div key={year} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-1">
                    <span className="text-swmg-primary font-bold">{year}</span>
                  </div>
                  <span className="text-xs">{parseInt(year) - 2017} startups</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupsSection;
