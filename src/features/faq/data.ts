import React from 'react';
import { HelpCircle } from "lucide-react";
import { FaqItem, CategoryConfig } from "./types";

// Category configuration
export const categoryConfig: CategoryConfig = {
  geral: { 
    label: "Geral", 
    icon: React.createElement(HelpCircle, { className: "h-4 w-4" }),
    color: "bg-red-600/10 text-red-700"
  },
  inscrição: { 
    label: "Inscrição", 
    icon: React.createElement(HelpCircle, { className: "h-4 w-4" }),
    color: "bg-blue-600/10 text-blue-700"
  },
  evento: { 
    label: "Evento", 
    icon: React.createElement(HelpCircle, { className: "h-4 w-4" }),
    color: "bg-amber-600/10 text-amber-700"
  },
  mentoria: { 
    label: "Mentoria", 
    icon: React.createElement(HelpCircle, { className: "h-4 w-4" }),
    color: "bg-green-600/10 text-green-700"
  },
  após: { 
    label: "Pós-evento", 
    icon: React.createElement(HelpCircle, { className: "h-4 w-4" }),
    color: "bg-purple-600/10 text-purple-700"
  }
};

// Sample FAQ data
export const faqItems: FaqItem[] = [
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