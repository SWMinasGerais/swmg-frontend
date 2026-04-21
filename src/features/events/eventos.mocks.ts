import { Evento, EventosResponse } from './eventos.type';

/**
 * Mock para evento individual
 */
export const mockEvento: Evento = {
  id: 1,
  city: "Belo Horizonte",
  title: "Startup Weekend BH",
  date: "15-17 Outubro 2023",
  month: "out",
  theme: "EdTech & Future of Learning",
  remainingSeats: 15,
  totalSeats: 80,
  status: "open",
  imageUrl: "/imgs/events/bh.jpg",
  description: "O Startup Weekend Belo Horizonte é um evento que reúne empreendedores, designers, desenvolvedores e entusiastas para criar startups em 54 horas. Nesta edição, o foco será em soluções para o futuro da educação.",
  location: "Centro de Inovação FIEMG, Belo Horizonte",
  organizers: ["Equipe Startup Weekend BH", "Sebrae-MG", "FIEMG"],
  price: 70,
  registrationUrl: "https://startupweekendmg.com/bh",
  contactEmail: "bh@startupweekendmg.com",
};

/**
 * Mocks para lista de eventos
 */
export const mockEventos: Evento[] = [
  {
    id: 1,
    city: "Belo Horizonte",
    title: "Startup Weekend BH",
    date: "15-17 Outubro 2023",
    month: "out",
    theme: "EdTech & Future of Learning",
    remainingSeats: 15,
    totalSeats: 80,
    status: "open",
    imageUrl: "/imgs/events/bh.jpg",
    description: "O Startup Weekend Belo Horizonte é um evento que reúne empreendedores, designers, desenvolvedores e entusiastas para criar startups em 54 horas. Nesta edição, o foco será em soluções para o futuro da educação.",
    location: "Centro de Inovação FIEMG, Belo Horizonte",
    organizers: ["Equipe Startup Weekend BH", "Sebrae-MG", "FIEMG"],
    price: 70,
    registrationUrl: "https://startupweekendmg.com/bh",
    contactEmail: "bh@startupweekendmg.com",
  },
  {
    id: 2,
    city: "Uberlândia",
    title: "Startup Weekend Uberlândia",
    date: "22-24 Novembro 2023",
    month: "nov",
    theme: "Agritech & Sustainability",
    remainingSeats: 25,
    totalSeats: 70,
    status: "coming-soon",
    imageUrl: "/imgs/events/uberlandia.jpg",
    description: "O Startup Weekend Uberlândia traz o foco em tecnologia para a agricultura e sustentabilidade. Venha desenvolver soluções inovadoras para os desafios do agronegócio e meio ambiente.",
    location: "Campus Santa Mônica - UFU, Uberlândia",
    organizers: ["Equipe Startup Weekend Uberlândia", "UFU", "Sebrae-MG"],
    price: 65,
    registrationUrl: "https://startupweekendmg.com/uberlandia",
    contactEmail: "uberlandia@startupweekendmg.com",
  },
  {
    id: 3,
    city: "Juiz de Fora",
    title: "Startup Weekend JF",
    date: "05-07 Dezembro 2023",
    month: "dez",
    theme: "Health & Wellness",
    remainingSeats: 40,
    totalSeats: 60,
    status: "coming-soon",
    imageUrl: "/imgs/events/juizdefora.jpg",
    description: "O Startup Weekend Juiz de Fora volta com tudo em 2023, focado em saúde e bem-estar. Desenvolva soluções inovadoras para melhorar a qualidade de vida das pessoas.",
    location: "UFJF, Juiz de Fora",
    organizers: ["Equipe Startup Weekend JF", "UFJF", "Hospital Universitário"],
    price: 60,
    registrationUrl: "https://startupweekendmg.com/juizdefora",
    contactEmail: "jf@startupweekendmg.com",
  },
  {
    id: 4,
    city: "Montes Claros",
    title: "Startup Weekend Montes Claros",
    date: "19-21 Janeiro 2024",
    month: "jan",
    theme: "Smart Cities",
    remainingSeats: 50,
    totalSeats: 60,
    status: "coming-soon",
    imageUrl: "/imgs/events/montesclaros.jpg",
    description: "O Startup Weekend Montes Claros traz o conceito de Cidades Inteligentes para o norte de Minas. Venha criar soluções que transformem a vida urbana e o desenvolvimento regional.",
    location: "Unimontes, Montes Claros",
    organizers: ["Equipe Startup Weekend Montes Claros", "Unimontes", "Prefeitura de Montes Claros"],
    price: 55,
    registrationUrl: "https://startupweekendmg.com/montesclaros",
    contactEmail: "montesclaros@startupweekendmg.com",
  },
  {
    id: 5,
    city: "Viçosa",
    title: "Startup Weekend Viçosa",
    date: "16-18 Fevereiro 2024",
    month: "fev",
    theme: "FoodTech",
    remainingSeats: 30,
    totalSeats: 50,
    status: "coming-soon",
    imageUrl: "/imgs/events/vicosa.jpg",
    description: "Aproveitando a tradição da UFV em ciências agrárias, o Startup Weekend Viçosa traz o tema FoodTech, focando em inovações para toda a cadeia alimentar.",
    location: "Universidade Federal de Viçosa, Viçosa",
    organizers: ["Equipe Startup Weekend Viçosa", "UFV", "CIAg"],
    price: 60,
    registrationUrl: "https://startupweekendmg.com/vicosa",
    contactEmail: "vicosa@startupweekendmg.com",
  },
  {
    id: 6,
    city: "Poços de Caldas",
    title: "Startup Weekend Poços",
    date: "08-10 Março 2024",
    month: "mar",
    theme: "Tourism & Hospitality",
    remainingSeats: 35,
    totalSeats: 55,
    status: "coming-soon",
    imageUrl: "/imgs/events/pocosdecaldas.jpg",
    description: "Aproveitando o potencial turístico da região, o Startup Weekend Poços de Caldas focará em inovações para turismo e hospitalidade, buscando soluções que melhorem a experiência dos visitantes e fortaleçam o setor.",
    location: "Centro de Convenções, Poços de Caldas",
    organizers: ["Equipe Startup Weekend Poços", "Prefeitura de Poços de Caldas", "Associação Comercial"],
    price: 65,
    registrationUrl: "https://startupweekendmg.com/pocos",
    contactEmail: "pocos@startupweekendmg.com",
  },
  {
    id: 7,
    city: "Ipatinga",
    title: "Startup Weekend Vale do Aço",
    date: "12-14 Abril 2024",
    month: "abr",
    theme: "Industry 4.0",
    remainingSeats: 40,
    totalSeats: 60,
    status: "coming-soon",
    imageUrl: "/imgs/events/ipatinga.jpg",
    description: "O Startup Weekend Vale do Aço promove a inovação na indústria 4.0, aproveitando a vocação industrial da região para criar soluções tecnológicas que modernizem o setor produtivo.",
    location: "FIEMG Vale do Aço, Ipatinga",
    organizers: ["Equipe Startup Weekend Vale do Aço", "FIEMG", "Usiminas"],
    price: 70,
    registrationUrl: "https://startupweekendmg.com/valedoaco",
    contactEmail: "valedoaco@startupweekendmg.com",
  },
  {
    id: 8,
    city: "Belo Horizonte",
    title: "Startup Weekend BH Women",
    date: "24-26 Maio 2024",
    month: "mai",
    theme: "Women Entrepreneurship",
    remainingSeats: 45,
    totalSeats: 70,
    status: "coming-soon",
    imageUrl: "/imgs/events/bhwomen.jpg",
    description: "Edição especial do Startup Weekend focada no empreendedorismo feminino, buscando incentivar a participação de mulheres no ecossistema de inovação e startups.",
    location: "Sede do Sebrae-MG, Belo Horizonte",
    organizers: ["Equipe Startup Weekend BH", "Sebrae-MG", "Rede Mulher Empreendedora"],
    price: 65,
    registrationUrl: "https://startupweekendmg.com/bhwomen",
    contactEmail: "bhwomen@startupweekendmg.com",
  },
];

/**
 * Mock para a resposta da API com paginação
 */
export const mockEventosResponse: EventosResponse = {
  data: mockEventos.slice(0, 4),
  total: mockEventos.length,
  page: 1,
  limit: 4,
  totalPages: Math.ceil(mockEventos.length / 4),
};

/**
 * Função para obter evento por ID
 */
export const getMockEventoById = (id: number | string): Evento | undefined => {
  return mockEventos.find(evento => evento.id === id);
};

/**
 * Função para filtrar eventos de acordo com os filtros
 */
export const getFilteredMockEventos = (
  city?: string,
  month?: string,
  status?: string,
  theme?: string,
  searchTerm?: string
): Evento[] => {
  return mockEventos.filter(evento => {
    if (city && evento.city !== city) return false;
    if (month && evento.month !== month) return false;
    if (status && evento.status !== status) return false;
    if (theme && !evento.theme.includes(theme)) return false;
    if (searchTerm && 
      !evento.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
      !evento.description?.toLowerCase().includes(searchTerm.toLowerCase())
    ) return false;
    return true;
  });
}; 