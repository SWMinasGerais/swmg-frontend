import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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
    <section id="ecossistema" className="section-padding bg-swmg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge className="bg-swmg-light text-swmg-primary hover:bg-swmg-light mb-4">Conexões</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-swmg-dark mb-4">Ecossistema de Inovação em Minas Gerais</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore o vibrante ecossistema de startups e inovação de Minas Gerais, um dos mais importantes do Brasil.
          </p>
        </div>

        <div className="space-y-20">
          <div>
            <h3 className="text-2xl font-bold text-swmg-primary mb-8 text-center">Hubs e Aceleradoras</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ecosystems.hubs.map(item => (
                <Card key={item.id} className="hover:shadow-lg transition-all duration-300 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription>{item.city}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge>{item.type}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-swmg-primary mb-8 text-center">Investidores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ecosystems.investors.map(item => (
                <Card key={item.id} className="hover:shadow-lg transition-all duration-300 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription>{item.city}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="bg-swmg-light/50">{item.type}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-swmg-primary mb-8 text-center">Universidades</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ecosystems.universities.map(item => (
                <Card key={item.id} className="hover:shadow-lg transition-all duration-300 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription>{item.city}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary">{item.type}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-swmg-primary mb-8 text-center">Eventos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ecosystems.events.map(item => (
                <Card key={item.id} className="hover:shadow-lg transition-all duration-300 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription>{item.city}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="border-swmg-primary text-swmg-primary">{item.type}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-white rounded-xl shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-swmg-primary mb-2">10+</p>
                <p className="text-sm text-gray-600">Cidades</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-swmg-primary mb-2">30+</p>
                <p className="text-sm text-gray-600">Eventos</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-swmg-primary mb-2">500+</p>
                <p className="text-sm text-gray-600">Participantes</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-swmg-primary mb-2">8+</p>
                <p className="text-sm text-gray-600">Anos de história</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
