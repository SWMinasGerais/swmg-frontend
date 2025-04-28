
import React from 'react';
import { Badge } from "@/components/ui/badge";

const mentors = [
  {
    name: "Ana Silva",
    role: "CEO & Fundadora",
    company: "TechMinas",
    expertise: ["Inovação", "Liderança", "Pitch"],
    image: "mentor1.jpg"
  },
  {
    name: "Carlos Santos",
    role: "Investidor Anjo",
    company: "MG Ventures",
    expertise: ["Investimentos", "Estratégia", "Scaling"],
    image: "mentor2.jpg"
  },
  {
    name: "Mariana Oliveira",
    role: "CTO",
    company: "StartupMG",
    expertise: ["Tecnologia", "Produto", "Arquitetura"],
    image: "mentor3.jpg"
  }
];

const MentorsSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-swmg-light to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge className="bg-swmg-light text-swmg-primary hover:bg-swmg-light mb-4">
            Mentoria
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-swmg-accent mb-4">
            Mentores Especialistas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos mentores que irão ajudar a transformar sua ideia em realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow animate-fade-in">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-swmg-light rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-swmg-primary">
                    {mentor.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-swmg-accent">{mentor.name}</h3>
                  <p className="text-gray-600">{mentor.role}</p>
                  <p className="text-swmg-primary">{mentor.company}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {mentor.expertise.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-swmg-light text-swmg-primary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
