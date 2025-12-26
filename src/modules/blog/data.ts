import { BlogPost, CategoryConfig } from "./types";

// Sample blog data
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Como validar sua ideia de startup em apenas um final de semana",
    excerpt: "Descubra as técnicas utilizadas no Startup Weekend para validar uma ideia de negócio de forma rápida e eficiente.",
    date: "12 Out 2023",
    author: "Fernanda Oliveira",
    authorRole: "Lead Organizer",
    category: "empreendedorismo",
    readTime: "5 min",
    image: "/imgs/blog/validacao-ideia.jpg",
    slug: "como-validar-ideia-startup-final-de-semana"
  },
  {
    id: 2,
    title: "7 dicas para um pitch perfeito que conquiste investidores",
    excerpt: "Aprenda as técnicas essenciais para estruturar um pitch de impacto e evitar os erros mais comuns que afastam investidores.",
    date: "28 Set 2023",
    author: "Ricardo Ferreira",
    authorRole: "Angel Investor",
    category: "pitch",
    readTime: "8 min",
    image: "/imgs/blog/pitch-perfeito.jpg",
    slug: "7-dicas-pitch-perfeito-conquiste-investidores"
  },
  {
    id: 3,
    title: "A jornada da EduTech MG: da ideia à captação de R$ 1.2M",
    excerpt: "Conheça a história de sucesso da EduTech MG, startup nascida no Startup Weekend BH e que hoje impacta a educação em Minas Gerais.",
    date: "15 Set 2023",
    author: "Ana Costa",
    authorRole: "Fundadora EduTech MG",
    category: "cases",
    readTime: "10 min",
    image: "/imgs/blog/edutech-jornada.jpg",
    slug: "jornada-edutech-mg-ideia-captacao-investimento"
  },
  {
    id: 4,
    title: "O ecossistema de inovação em Uberlândia: oportunidades e desafios",
    excerpt: "Uma análise do crescente ecossistema de startups no Triângulo Mineiro e as perspectivas para os próximos anos.",
    date: "03 Set 2023",
    author: "Amanda Rocha",
    authorRole: "Community Lead Uberlândia",
    category: "inovacao",
    readTime: "7 min",
    image: "/imgs/blog/ecossistema-uberlandia.jpg",
    slug: "ecossistema-inovacao-uberlandia-oportunidades-desafios"
  },
  {
    id: 5,
    title: "Calendário de eventos 2023/2024: próximos Startup Weekends em Minas",
    excerpt: "Confira as datas e cidades confirmadas para os próximos eventos do Circuito Mineiro de Startup Weekend.",
    date: "20 Ago 2023",
    author: "Carolina Silva",
    authorRole: "Community Manager",
    category: "eventos",
    readTime: "3 min",
    image: "/imgs/blog/calendario-eventos.jpg",
    slug: "calendario-eventos-2023-2024-startup-weekends-minas"
  },
  {
    id: 6,
    title: "MVP: o que é e como criar um produto mínimo viável eficiente",
    excerpt: "Entenda o conceito de MVP e como utilizá-lo para testar sua solução com o mínimo de recursos e tempo.",
    date: "10 Ago 2023",
    author: "Rafael Santos",
    authorRole: "CTO MinasCode",
    category: "empreendedorismo",
    readTime: "6 min",
    image: "/imgs/blog/mvp-eficiente.jpg",
    slug: "mvp-produto-minimo-viavel-eficiente"
  }
];

// Category configuration with colors and labels
export const categoryConfig: CategoryConfig = {
  empreendedorismo: { label: "Empreendedorismo", color: "bg-blue-100 text-blue-700" },
  pitch: { label: "Pitch", color: "bg-amber-100 text-amber-700" },
  inovacao: { label: "Inovação", color: "bg-green-100 text-green-700" },
  cases: { label: "Cases", color: "bg-purple-100 text-purple-700" },
  eventos: { label: "Eventos", color: "bg-red-100 text-red-700" }
}; 