
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
    <section id="startups" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge className="bg-swmg-light text-swmg-primary hover:bg-swmg-light mb-4">Casos de Sucesso</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-swmg-dark mb-4">Startups nascidas no Startup Weekend</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça algumas das empresas de sucesso que nasceram durante os eventos do Startup Weekend em Minas Gerais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {startups.map(startup => (
            <Card key={startup.id} className="group overflow-hidden transition-all duration-300 hover:shadow-xl animate-slide-up border-0 shadow-lg hover:-translate-y-1">
              <div className={`h-3 bg-gradient-to-r ${startup.color}`}></div>
              <CardHeader className="relative pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl font-bold mb-2">{startup.name}</CardTitle>
                    <CardDescription className="flex items-center space-x-2 text-base">
                      <span>{startup.city}</span>
                      <span>•</span>
                      <span>{startup.year}</span>
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm transform group-hover:scale-105 transition-transform">
                    {startup.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="mb-6 text-gray-600 leading-relaxed">{startup.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md">
                    <p className="text-gray-500 text-xs mb-1">Investimento</p>
                    <p className="font-bold text-swmg-primary">{startup.funding}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md">
                    <p className="text-gray-500 text-xs mb-1">Status</p>
                    <p className="font-bold text-swmg-dark">{startup.status}</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="bg-gray-50/50 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <polyline points="15 10 20 15 15 20"/>
                    <path d="M4 4v7a4 4 0 0 0 4 4h12"/>
                  </svg>
                  <span className="group-hover:text-swmg-primary transition-colors">
                    Nasceu no SW {startup.city} {startup.year}
                  </span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-swmg-light via-white to-swmg-light p-8 rounded-2xl shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-swmg-dark mb-3">Sua startup pode ser a próxima!</h3>
              <p className="text-gray-600 text-lg">
                Já são mais de 30 startups surgidas do Circuito Mineiro de Startup Weekend.
              </p>
            </div>
            <div className="flex gap-6">
              {["2021", "2022", "2023", "2024"].map(year => (
                <div key={year} className="text-center transform transition-all duration-300 hover:scale-105">
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-2 border border-gray-100">
                    <span className="text-swmg-primary font-bold text-xl">{year}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-600">{parseInt(year) - 2017} startups</span>
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
