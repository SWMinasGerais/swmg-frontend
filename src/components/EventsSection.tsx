
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    id: 1,
    city: "Belo Horizonte",
    date: "24-26 Maio, 2025",
    location: "SEBRAE Minas",
    theme: "Tecnologias sustentáveis",
    status: "Inscrições abertas",
    spots: "45 vagas restantes",
    image: "bg-gradient-to-r from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    city: "Uberlândia",
    date: "14-16 Junho, 2025",
    location: "Universidade Federal de Uberlândia",
    theme: "Soluções AgTech",
    status: "Em breve",
    spots: "80 vagas",
    image: "bg-gradient-to-r from-green-500 to-emerald-500"
  },
  {
    id: 3,
    city: "Juiz de Fora",
    date: "12-14 Julho, 2025",
    location: "UFJF - Campus Universitário",
    theme: "Inovação na saúde",
    status: "Em breve",
    spots: "60 vagas",
    image: "bg-gradient-to-r from-purple-500 to-pink-500"
  },
];

const EventsSection: React.FC = () => {
  return (
    <section id="eventos" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge className="bg-swmg-light text-swmg-primary hover:bg-swmg-light mb-4">Calendário 2025</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-swmg-dark mb-4">Próximos eventos em Minas Gerais</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira os próximos Startup Weekends que acontecerão nas cidades mineiras e garanta sua vaga.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
            <Card key={event.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-slide-up">
              <div className={`h-32 ${event.image}`}></div>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  {event.city}
                  <Badge variant={event.status === "Inscrições abertas" ? "default" : "outline"} 
                         className={event.status === "Inscrições abertas" ? "bg-swmg-secondary" : ""}>
                    {event.status}
                  </Badge>
                </CardTitle>
                <CardDescription>{event.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-swmg-primary mt-1">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-swmg-primary mt-1">
                      <path d="m12 14 4-4"/>
                      <path d="M3.34 19a10 10 0 1 1 17.32 0"/>
                    </svg>
                    <span>{event.theme}</span>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-swmg-primary mt-1">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <span>{event.spots}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className={event.status === "Em breve" ? "w-full bg-gray-300 hover:bg-gray-400 cursor-not-allowed" : "w-full bg-swmg-primary hover:bg-swmg-dark"}>
                  {event.status === "Em breve" ? "Em breve" : "Inscrever-se"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-swmg-primary text-swmg-primary hover:bg-swmg-light">
            Ver todos os eventos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
