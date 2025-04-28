
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ecosystems = {
  hubs: [
    { id: 1, name: "SEED - Startups and Entrepreneurship Ecosystem Development", city: "Belo Horizonte", type: "Programa de Aceleração" },
    { id: 2, name: "San Pedro Valley", city: "Belo Horizonte", type: "Comunidade de Startups" },
    { id: 3, name: "Órbi Conecta", city: "Belo Horizonte", type: "Hub de Inovação" },
    { id: 4, name: "BH-TEC", city: "Belo Horizonte", type: "Parque Tecnológico" },
    { id: 5, name: "FIEMG Lab", city: "Belo Horizonte", type: "Programa de Aceleração" },
    { id: 6, name: "Uberlândia Innovation Hub", city: "Uberlândia", type: "Hub de Inovação" }
  ],
  investors: [
    { id: 1, name: "FIP Aerotec", city: "Belo Horizonte", type: "Fundo de Investimento" },
    { id: 2, name: "FUNDEPAR", city: "Belo Horizonte", type: "Angel Investment" },
    { id: 3, name: "Cedro Capital", city: "Belo Horizonte", type: "Venture Capital" },
    { id: 4, name: "Triângulo Ventures", city: "Uberlândia", type: "Venture Capital" }
  ],
  universities: [
    { id: 1, name: "UFMG - Universidade Federal de Minas Gerais", city: "Belo Horizonte", type: "Universidade Federal" },
    { id: 2, name: "PUC Minas", city: "Belo Horizonte", type: "Universidade Privada" },
    { id: 3, name: "UFU - Universidade Federal de Uberlândia", city: "Uberlândia", type: "Universidade Federal" },
    { id: 4, name: "UFJF - Universidade Federal de Juiz de Fora", city: "Juiz de Fora", type: "Universidade Federal" }
  ],
  events: [
    { id: 1, name: "Startup Summit MG", city: "Belo Horizonte", type: "Conferência Anual" },
    { id: 2, name: "Hackatruck", city: "Várias cidades", type: "Hackathon Itinerante" },
    { id: 3, name: "Minas Innovation Week", city: "Belo Horizonte", type: "Semana de Inovação" },
    { id: 4, name: "CASE Triângulo Mineiro", city: "Uberlândia", type: "Conferência Regional" }
  ]
};

const EcosystemSection: React.FC = () => {
  return (
    <section id="ecossistema" className="section-padding bg-gradient-to-b from-white to-[#f0f0f0]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge className="bg-[#00923f] text-white hover:bg-[#00823a] mb-4">Ecossistema</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#002776] mb-4">Ecossistema de Inovação em Minas Gerais</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore o vibrante ecossistema de startups e inovação de Minas Gerais, um dos mais importantes do Brasil, 
            reunindo hubs, investidores, universidades e eventos que impulsionam o empreendedorismo no estado.
          </p>
          <div className="max-w-xl mx-auto mt-8 mb-12">
            <div className="h-2 bg-gradient-to-r from-[#002776] via-[#f0f0f0] to-[#cc0000] rounded-full"></div>
          </div>
        </div>

        <div className="space-y-20">
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-[#002776]">Hubs e Aceleradoras</h3>
              <div className="hidden md:block w-1/3 h-px bg-gradient-to-r from-transparent via-[#CC0000] to-transparent"></div>
              <span className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#002776] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M12 2v20"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ecosystems.hubs.map(item => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in border-t-4 border-t-[#002776] hover:scale-[1.02]">
                  <CardHeader>
                    <CardTitle className="text-lg text-[#002776]">{item.name}</CardTitle>
                    <CardDescription>{item.city}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="bg-[#f0f0f0] text-[#002776] border-[#002776]">{item.type}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="bg-gray-200" />

          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-[#002776]">Investidores</h3>
              <div className="hidden md:block w-1/3 h-px bg-gradient-to-r from-transparent via-[#CC0000] to-transparent"></div>
              <span className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#002776] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2v20"/>
                  <path d="M2 12h20"/>
                </svg>
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ecosystems.investors.map(item => (
                <Card key={item.id} className="hover:shadow-lg transition-all duration-300 animate-fade-in border-l-4 border-l-[#CC0000] hover:scale-[1.02]">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription>{item.city}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="bg-white/50 border-[#CC0000] text-[#CC0000]">{item.type}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="bg-gray-200" />

          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-[#002776]">Universidades</h3>
              <div className="hidden md:block w-1/3 h-px bg-gradient-to-r from-transparent via-[#CC0000] to-transparent"></div>
              <span className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#002776] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ecosystems.universities.map(item => (
                <Card key={item.id} className="hover:shadow-lg transition-all duration-300 animate-fade-in hover:scale-[1.02] bg-gradient-to-br from-white to-[#f8f8f8]">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription>{item.city}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary" className="bg-[#00923f]/10 text-[#00923f]">{item.type}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="bg-gray-200" />

          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-[#002776]">Eventos</h3>
              <div className="hidden md:block w-1/3 h-px bg-gradient-to-r from-transparent via-[#CC0000] to-transparent"></div>
              <span className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#002776] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                  <line x1="16" x2="16" y1="2" y2="6"/>
                  <line x1="8" x2="8" y1="2" y2="6"/>
                  <line x1="3" x2="21" y1="10" y2="10"/>
                </svg>
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ecosystems.events.map(item => (
                <Card key={item.id} className="hover:shadow-lg transition-all duration-300 animate-fade-in border-b-4 border-b-[#00923f] hover:scale-[1.02]">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription>{item.city}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="border-[#00923f] text-[#00923f]">{item.type}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl shadow-lg bg-gradient-to-br from-white to-[#f8f8f8] border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#002776] flex items-center justify-center mx-auto mb-3">
                  <p className="text-xl font-bold text-white">10+</p>
                </div>
                <p className="font-medium text-[#002776]">Cidades</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#CC0000] flex items-center justify-center mx-auto mb-3">
                  <p className="text-xl font-bold text-white">30+</p>
                </div>
                <p className="font-medium text-[#002776]">Eventos</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#00923f] flex items-center justify-center mx-auto mb-3">
                  <p className="text-xl font-bold text-white">500+</p>
                </div>
                <p className="font-medium text-[#002776]">Participantes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#f0f0f0] flex items-center justify-center mx-auto mb-3 border-2 border-[#002776]">
                  <p className="text-xl font-bold text-[#002776]">8+</p>
                </div>
                <p className="font-medium text-[#002776]">Anos de história</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
