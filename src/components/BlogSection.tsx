import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";

// Type definitions
type BlogCategory = "empreendedorismo" | "pitch" | "inovacao" | "cases" | "eventos";
type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorRole: string;
  category: BlogCategory;
  readTime: string;
  image: string;
  slug: string;
};

// Sample blog data
const blogPosts: BlogPost[] = [
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
const categoryConfig = {
  empreendedorismo: { label: "Empreendedorismo", color: "bg-blue-100 text-blue-700" },
  pitch: { label: "Pitch", color: "bg-amber-100 text-amber-700" },
  inovacao: { label: "Inovação", color: "bg-green-100 text-green-700" },
  cases: { label: "Cases", color: "bg-purple-100 text-purple-700" },
  eventos: { label: "Eventos", color: "bg-red-100 text-red-700" }
};

const BlogSection = () => {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h5 className="text-slate-900 font-medium mb-3 flex items-center">
              <div className="w-8 h-1 bg-red-600 mr-2"></div>
              Blog & Notícias
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Dicas e histórias de sucesso
            </h2>
            <p className="text-slate-600 max-w-2xl">
              Conteúdos exclusivos sobre empreendedorismo, inovação e o ecossistema de startups em Minas Gerais.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button 
              variant="outline" 
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white group"
            >
              Ver todos os artigos
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Featured post (larger, top position) */}
        <div className="mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100/50 group">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto overflow-hidden">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/800x600/eef/046?text=Blog";
                  }}
                />
              </div>
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <div className="flex items-center mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryConfig[blogPosts[0].category].color}`}>
                    {categoryConfig[blogPosts[0].category].label}
                  </span>
                  <span className="text-slate-400 text-xs ml-3">{blogPosts[0].readTime} de leitura</span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-slate-600 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-red-600 mr-2" />
                    <span className="text-sm font-medium">{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {blogPosts[0].date}
                  </div>
                </div>
                
                <Button 
                  className="mt-6 bg-red-600 hover:bg-red-700 text-white group relative overflow-hidden"
                >
                  <Link to={`/blog/${blogPosts[0].slug}`}>
                    <span className="relative z-10">Ler artigo completo</span>
                    <span className="absolute inset-0 h-full w-full opacity-0 group-hover:opacity-25 transition-opacity duration-300 bg-white" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent posts grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map(post => (
            <div 
              key={post.id} 
              className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100/50 group h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/800x600/eef/046?text=Blog";
                  }}
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryConfig[post.category].color}`}>
                    {categoryConfig[post.category].label}
                  </span>
                  <span className="text-slate-400 text-xs">{post.readTime} de leitura</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-red-600 mr-2" />
                    <span className="text-sm">{post.author}</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                </div>
                
                <Button 
                  variant="link" 
                  className="mt-4 text-red-600 hover:text-red-700 p-0 h-auto font-medium group/btn"
                >
                  <Link to={`/blog/${post.slug}`}>
                    Continuar lendo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter subscription */}
        <div className="mt-16 p-8 bg-white/90 backdrop-blur-sm rounded-xl border border-slate-100/50 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Fique por dentro das novidades
              </h3>
              <p className="text-slate-600">
                Inscreva-se na nossa newsletter e receba em primeira mão as notícias e dicas sobre o ecossistema de startups.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent w-full"
                />
                <Button className="bg-red-600 hover:bg-red-700 text-white whitespace-nowrap">
                  Inscrever-me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 