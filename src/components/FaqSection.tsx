import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Search,
  ChevronDown,
  ChevronUp,
  HelpCircle, 
  Mail,
  ExternalLink,
} from "lucide-react";
import { Input } from "@/components/ui/input";

// Type definitions
type FaqCategory = "geral" | "inscrição" | "evento" | "mentoria" | "após";
type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
};

// Category configuration
const categoryConfig = {
  geral: { label: "Geral", icon: <HelpCircle className="h-4 w-4" /> },
  inscrição: { label: "Inscrição", icon: <HelpCircle className="h-4 w-4" /> },
  evento: { label: "Evento", icon: <HelpCircle className="h-4 w-4" /> },
  mentoria: { label: "Mentoria", icon: <HelpCircle className="h-4 w-4" /> },
  após: { label: "Pós-evento", icon: <HelpCircle className="h-4 w-4" /> }
};

// Sample FAQ data
const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "O que é o Startup Weekend?",
    answer: "O Startup Weekend é um evento intensivo de 54 horas onde empreendedores, desenvolvedores, designers e entusiastas se reúnem para compartilhar ideias, formar equipes, construir produtos e lançar startups. Começa na sexta-feira e termina no domingo, com apresentações finais e premiação.",
    category: "geral"
  },
  {
    id: "faq-2",
    question: "Preciso ter uma ideia para participar?",
    answer: "Não! Você pode participar mesmo sem ter uma ideia própria. No primeiro dia, os participantes que têm ideias fazem pitches rápidos e, depois, todos escolhem em qual projeto querem trabalhar. Você pode se juntar ao time de uma ideia que te interesse.",
    category: "geral"
  },
  {
    id: "faq-3",
    question: "Preciso ter experiência em programação ou negócios?",
    answer: "Não é necessário ter experiência prévia. O Startup Weekend é um ambiente de aprendizado para todos os níveis. Buscamos participantes com diferentes habilidades e formações, o que torna a experiência mais rica.",
    category: "geral"
  },
  {
    id: "faq-4",
    question: "Como funciona o processo de inscrição?",
    answer: "As inscrições são feitas pelo site oficial do evento. Você preenche um formulário, escolhe seu perfil (desenvolvedor, designer ou business) e efetua o pagamento da taxa de inscrição. Vagas são limitadas e costumam esgotar rapidamente.",
    category: "inscrição"
  },
  {
    id: "faq-5",
    question: "Qual é o valor da inscrição?",
    answer: "O valor varia de acordo com a cidade e edição, mas geralmente fica entre R$80 e R$150. O ingresso inclui toda a programação do evento, alimentação durante os três dias, material de apoio e mentorias.",
    category: "inscrição"
  },
  {
    id: "faq-6",
    question: "Os participantes são divididos em equipes?",
    answer: "Sim. Após os pitches de ideias na sexta-feira, os participantes escolhem em qual projeto querem trabalhar e formam equipes. O ideal é ter uma equipe multidisciplinar com habilidades técnicas, de design e de negócios.",
    category: "evento"
  },
  {
    id: "faq-7",
    question: "O que acontece durante os três dias do evento?",
    answer: "Sexta: pitches de ideias e formação de equipes. Sábado: desenvolvimento do projeto com ajuda de mentores. Domingo: finalização do produto/protótipo, preparação do pitch final e apresentações para os jurados, seguidas de premiação.",
    category: "evento"
  },
  {
    id: "faq-8",
    question: "Como funciona a mentoria durante o evento?",
    answer: "Durante o sábado, mentores especialistas em diversas áreas circulam pelo evento para dar suporte às equipes. Você pode solicitar mentorias específicas ou aproveitar as rodadas gerais. Os mentores ajudam com validação, modelo de negócio, protótipo, etc.",
    category: "mentoria"
  },
  {
    id: "faq-9",
    question: "O que acontece com os projetos após o Startup Weekend?",
    answer: "Isso depende das equipes. Algumas decidem continuar desenvolvendo o projeto e transformá-lo em um negócio real. Outras utilizam a experiência como aprendizado. O evento oferece conexões com aceleradoras e investidores para os projetos promissores.",
    category: "após"
  },
  {
    id: "faq-10",
    question: "Existe algum tipo de acompanhamento pós-evento?",
    answer: "Sim, o Circuito Mineiro de Startup Weekend oferece programas de continuidade para as equipes que desejam seguir com seus projetos, incluindo mentorias adicionais, conexão com investidores e possibilidade de participar de programas de aceleração parceiros.",
    category: "após"
  }
];

const FaqSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<FaqCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);

  // Filter FAQ items based on selected category and search query
  const filteredFaqs = faqItems.filter(item => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Toggle FAQ item open/closed state
  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center mb-3">
            <div className="w-8 h-1 bg-red-600 mr-2"></div>
            <h5 className="font-medium text-slate-900">Perguntas Frequentes</h5>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Tire suas <span className="text-red-600">dúvidas</span>
          </h2>
          <p className="text-slate-600">
            Encontre respostas para as perguntas mais comuns sobre o Startup Weekend, 
            inscrições, formato do evento e mais.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Search bar */}
          <div className="mb-8 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <Input 
              type="text" 
              placeholder="Buscar pergunta ou palavra-chave..." 
              className="pl-10 py-6 bg-white/80 backdrop-blur-sm border-slate-100/50 rounded-xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category filters */}
          <div className="mb-10 flex flex-wrap gap-2 justify-center">
            <Button 
              variant="outline" 
              className={`border-slate-200 ${selectedCategory === "all" ? "bg-red-600 text-white hover:bg-red-700" : "hover:border-red-600 hover:text-red-600"}`}
              onClick={() => setSelectedCategory("all")}
            >
              Todas perguntas
            </Button>
            
            {Object.entries(categoryConfig).map(([key, { label, icon }]) => (
              <Button 
                key={key} 
                variant="outline" 
                className={`border-slate-200 ${selectedCategory === key ? "bg-red-600 text-white hover:bg-red-700" : "hover:border-red-600 hover:text-red-600"}`}
                onClick={() => setSelectedCategory(key as FaqCategory)}
              >
                <span className="flex items-center">
                  {icon}
                  <span className="ml-2">{label}</span>
                </span>
              </Button>
            ))}
          </div>

          {/* FAQ accordion */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <div 
                  key={faq.id} 
                  className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden border border-slate-100/50 hover:bg-white/90 transition-all duration-300"
                >
                  <button
                    className="w-full text-left px-6 py-5 flex items-center justify-between"
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={openItems.includes(faq.id)}
                  >
                    <h3 className="font-semibold text-slate-900">{faq.question}</h3>
                    {openItems.includes(faq.id) ? (
                      <ChevronUp className="h-5 w-5 text-red-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(faq.id) && (
                    <div className="px-6 pb-5">
                      <div className="pt-1 pb-2">
                        <span className="inline-block px-2 py-1 text-xs rounded-full bg-red-600/10 text-red-700 font-medium">
                          {categoryConfig[faq.category].label}
                        </span>
                      </div>
                      <p className="text-slate-700 whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
                <HelpCircle className="mx-auto h-12 w-12 text-slate-300 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Nenhuma pergunta encontrada
                </h3>
                <p className="text-slate-600 mb-6">
                  Tente ajustar sua busca ou selecionar outra categoria.
                </p>
                <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                >
                  Limpar filtros
                </Button>
              </div>
            )}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-slate-100/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Não encontrou o que procurava?
                </h3>
                <p className="text-slate-600">
                  Nossa equipe está pronta para responder qualquer dúvida que você ainda tenha.
                </p>
              </div>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="border-slate-300 text-slate-700 hover:border-red-600 hover:text-red-600"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar e-mail
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Acessar suporte
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection; 