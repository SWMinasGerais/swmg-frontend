import { faker } from '@faker-js/faker/locale/pt_BR';
import { v4 as uuidv4 } from 'uuid';
import { AreaExpertise, Mentor, MentoresList, MentoresResponse, Regiao } from './mentores.type';
import { regiaoSchema, areaExpertiseSchema } from './mentores.schema';

// Define regiões válidas
const regioes = regiaoSchema.options;

// Define áreas de expertise válidas
const areasExpertise = areaExpertiseSchema.options;

// Gera uma URL de imagem para mentor baseada em gênero
const gerarFotoMentor = (nome: string) => {
  // Nomes femininos comuns no Brasil geralmente terminam em "a"
  const genero = nome.endsWith('a') ? 'women' : 'men';
  
  // Opções de imagens
  const options = [
    // Avatar simples
    faker.image.avatar(),
    
    // Foto profissional (usando serviços de imagens aleatórias)
    `https://randomuser.me/api/portraits/${genero}/${faker.number.int({ min: 1, max: 99 })}.jpg`,
    
    // Imagem de negócios usando o próprio faker
    faker.image.urlLoremFlickr({ category: 'business', width: 300, height: 300 }),
    
    // Perfil de negócios
    `https://xsgames.co/randomusers/assets/avatars/${genero}/${faker.number.int({ min: 1, max: 78 })}.jpg`
  ];
  
  // Retorna uma opção aleatória
  return faker.helpers.arrayElement(options);
};

// Mapeamento para converter dados reais em áreas de expertise
const mapCargoToAreas = (cargo: string): AreaExpertise[] => {
  const areaMappings: Record<string, AreaExpertise[]> = {
    'Coordenadora Comercial': ['Vendas', 'Negócios'],
    'Mentor Convidado': ['Negócios'],
    'Neo Ventures': ['Finanças', 'Negócios'],
    'Cofundador': ['Negócios', 'Produto'],
    'Neurau': ['Negócios', 'Tecnologia'],
    'Founder': ['Negócios', 'Produto'],
    'Conta Simples': ['Finanças', 'Tecnologia'],
    'UX Researcher': ['UX/UI', 'Design'],
    'Políticas Públicas': ['Políticas Públicas'],
    'Open Innovation': ['Inovação', 'Open Innovation'],
    'Product Owner': ['Produto'],
    'Mentor para Founders': ['Negócios', 'Psicologia'],
    'Software Engineer': ['Tecnologia'],
    'Senior Business Analyst': ['Negócios'],
    'CEO': ['Negócios'],
    'IVARE': ['Negócios'],
    'Analista de Inovação': ['Inovação'],
    'Consultor': ['Negócios'],
    'Mentory Consulting': ['Negócios'],
    'CRO': ['Vendas', 'Negócios'],
    'Project Manager': ['Produto'],
    'CI&T': ['Tecnologia'],
    'Head of Softlanding': ['Negócios', 'Inovação'],
    'FCJ Group': ['Negócios']
  };
  
  // Encontra áreas relevantes com base nas palavras-chave do cargo
  const areas: AreaExpertise[] = [];
  Object.entries(areaMappings).forEach(([key, value]) => {
    if (cargo.includes(key)) {
      areas.push(...value);
    }
  });
  
  // Se não encontrou nenhuma área, atribui Negócios como padrão
  if (areas.length === 0) {
    areas.push('Negócios');
  }
  
  // Remove duplicações
  return [...new Set(areas)].filter(area => 
    areaExpertiseSchema.options.includes(area)
  );
};

// Extrai região da cidade
const mapCidadeToRegiao = (cidade: string): Regiao => {
  if (cidade.includes('Belo Horizonte')) return 'Belo Horizonte';
  if (cidade.includes('Uberlândia')) return 'Uberlândia';
  if (cidade.includes('Juiz de Fora')) return 'Juiz de Fora';
  if (cidade.includes('Montes Claros')) return 'Montes Claros';
  if (cidade.includes('Viçosa')) return 'Viçosa';
  if (cidade.includes('Poços de Caldas')) return 'Poços de Caldas';
  if (cidade.includes('Ipatinga')) return 'Ipatinga';
  if (cidade.includes('Miradouro')) return 'Miradouro';
  if (cidade.includes('Cracóvia')) return 'Internacional';
  return 'Outras';
};

// Dados reais de mentores do LinkedIn
const mentoresReais = [
  {
    nome: "Paula Ribeiro",
    cargo: "Coordenadora Comercial",
    formacao: "Ciência e Tecnologia",
    cidade: "Belo Horizonte (MG)",
    edicao: "não informado",
    linkedin: "https://br.linkedin.com/in/paula-ribeiro-64634ab0"
  },
  {
    nome: "Jaderson T. Trindade",
    cargo: "Mentor Convidado / Neo Ventures",
    formacao: "Ciências Econômicas (PUC-MG); Finanças (IBMEC)",
    cidade: "Belo Horizonte (MG)",
    edicao: "SWBH 31 Out–02 Nov 2014",
    linkedin: "https://br.linkedin.com/in/jadersontrindade"
  },
  {
    nome: "Luca B. Corradi",
    cargo: "Cofundador – Neurau",
    formacao: "Engenharia Industrial (UFMG)",
    cidade: "Belo Horizonte (MG)",
    edicao: "não informado",
    linkedin: "https://br.linkedin.com/in/luca-b-corradi"
  },
  {
    nome: "Igor Oliveira",
    cargo: "Founder – Conta Simples",
    formacao: "não informado",
    cidade: "Belo Horizonte (MG)",
    edicao: "não informado",
    linkedin: "https://www.linkedin.com/in/igorgontijo/"
  },
  {
    nome: "Danielle Rioga, PhD",
    cargo: "UX Researcher / Mentor",
    formacao: "Doutorado (UFMG)",
    cidade: "Belo Horizonte (MG)",
    edicao: "não informado",
    linkedin: "https://www.linkedin.com/in/daniellerioga/"
  },
  {
    nome: "Isabella Procopio",
    cargo: "Analista de Políticas Públicas",
    formacao: "Universidade FUMEC",
    cidade: "Miradouro (MG)",
    edicao: "não informado",
    linkedin: "https://www.linkedin.com/in/isabella-procopio-2897bab4/"
  },
  {
    nome: "Carlos Bermudes",
    cargo: "Mentor & Consultant – Open Innovation",
    formacao: "Direito; Inovação Aberta",
    cidade: "Belo Horizonte (MG)",
    edicao: "não informado",
    linkedin: "https://www.linkedin.com/in/cbermudesm/"
  },
  {
    nome: "Fernanda Souto",
    cargo: "Product Owner / Mentor",
    formacao: "Iniciação Científica (UFMG)",
    cidade: "Belo Horizonte (MG)",
    edicao: "não informado",
    linkedin: "https://www.linkedin.com/in/fernandabrunosouto/"
  },
  {
    nome: "Victor Xavier",
    cargo: "Mentor para Founders",
    formacao: "Psicologia; Fundação Dom Cabral",
    cidade: "Belo Horizonte (MG)",
    edicao: "não informado",
    linkedin: "https://www.linkedin.com/in/victordepaulaxavier/"
  },
  {
    nome: "Lucas Marques",
    cargo: "Software Engineer / Mentor",
    formacao: "Engenharia de Software (Centro Univ. BH)",
    cidade: "Cracóvia (ex-MG?)",
    edicao: "não informado",
    linkedin: "https://www.linkedin.com/in/cmarqueslucas/"
  },
  {
    nome: "Ana Carolina Lage",
    cargo: "Senior Business Analyst / Mentor",
    formacao: "não informado",
    cidade: "Uberlândia (MG)",
    edicao: "SW Uberlândia (MG)",
    linkedin: "https://ca.linkedin.com/in/anacarolage"
  },
  {
    nome: "Felipe Fernandes",
    cargo: "CEO – IVARE / Mentor de Negócios",
    formacao: "Administração (UFSJ)",
    cidade: "Uberlândia (MG)",
    edicao: "2º SW Uberlândia",
    linkedin: "https://br.linkedin.com/in/felipefernandespereira"
  },
  {
    nome: "Victor Eduardo (Dudu)",
    cargo: "Analista de Inovação / Mentor de Startups",
    formacao: "Psicologia; FDC",
    cidade: "Uberlândia (MG)",
    edicao: "SW Uberlândia",
    linkedin: "https://br.linkedin.com/in/victoreduslv"
  },
  {
    nome: "Flávio Moreira",
    cargo: "Analista de Inovação e Sustentabilidade",
    formacao: "não informado",
    cidade: "Uberlândia (MG)",
    edicao: "SW Uberlândia – nov/2014",
    linkedin: "https://cr.linkedin.com/in/fl%C3%A1vio-moreira-56944116"
  },
  {
    nome: "Gabriel Ferreira",
    cargo: "Consultor – Mentory Consulting / Mentor",
    formacao: "não informado",
    cidade: "Uberlândia (MG)",
    edicao: "2º SW Uberlândia – mai/2016",
    linkedin: "https://br.linkedin.com/in/gabriel-ferreira-8b280043"
  },
  {
    nome: "Hechisa Bressan",
    cargo: "Mentora de Startups",
    formacao: "não informado",
    cidade: "Belo Horizonte (MG)",
    edicao: "SW Belo Horizonte",
    linkedin: "https://br.linkedin.com/in/hechisabressan"
  },
  {
    nome: "Bruno Capelão",
    cargo: "Mentor – SV Standard",
    formacao: "não informado",
    cidade: "Belo Horizonte (MG)",
    edicao: "SWBH Out 2014 – Presente",
    linkedin: "https://br.linkedin.com/in/capelao"
  },
  {
    nome: "Daniel Dabés",
    cargo: "Founder & CRO – Ouvidor Digital / Mentor",
    formacao: "não informado",
    cidade: "Belo Horizonte (MG)",
    edicao: "SWBH Dez 2015 – Presente",
    linkedin: "https://www.linkedin.com/in/danieldabes/"
  },
  {
    nome: "Anna Marques",
    cargo: "Project Manager – CI&T / Mentora",
    formacao: "não informado",
    cidade: "Belo Horizonte (MG)",
    edicao: "Mentoria SWBH (não informado)",
    linkedin: "https://br.linkedin.com/in/annaluizamarques"
  },
  {
    nome: "Bruno Barbosa",
    cargo: "Head of Softlanding – FCJ Group / Mentor",
    formacao: "não informado",
    cidade: "Belo Horizonte (MG)",
    edicao: "Mentoring SWBH (não informado)",
    linkedin: "https://br.linkedin.com/in/brunodsbarbosa"
  }
];

// Converter dados reais para o formato de Mentor
export const mentoresMock: Mentor[] = mentoresReais.map((mentor) => {
  const cargoPartes = mentor.cargo.split(' / ');
  const cargoPrincipal = cargoPartes[0];
  const empresaParts = cargoPrincipal.split(' – ');
  const cargo = empresaParts[0];
  const empresa = empresaParts.length > 1 ? empresaParts[1] : undefined;
  
  return {
    id: uuidv4(),
    nome: mentor.nome,
    cargo: cargo,
    empresa: empresa,
    area: mapCargoToAreas(mentor.cargo),
    formacao: mentor.formacao !== "não informado" ? mentor.formacao : undefined,
    bio: faker.lorem.paragraph(),
    regiao: mapCidadeToRegiao(mentor.cidade),
    edicoes: mentor.edicao !== "não informado" ? [mentor.edicao] : [],
    disponivel: faker.datatype.boolean(0.8), // 80% de chance de estar disponível
    foto: gerarFotoMentor(mentor.nome),
    linkedin: mentor.linkedin,
    email: faker.internet.email({ firstName: mentor.nome.split(' ')[0], lastName: mentor.nome.split(' ').slice(1).join(''), provider: 'startupweekendmg.com' }),
    website: faker.datatype.boolean(0.3) ? faker.internet.url() : undefined,
    twitter: faker.datatype.boolean(0.4) ? `https://twitter.com/${faker.internet.userName({ firstName: mentor.nome.split(' ')[0] })}` : undefined,
    github: faker.datatype.boolean(0.2) ? `https://github.com/${faker.internet.userName({ firstName: mentor.nome.split(' ')[0] })}` : undefined,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };
});

/**
 * Função para gerar uma resposta de API mockada com paginação
 */
export const gerarMentoresResponseMock = (
  page: number = 1, 
  limit: number = 10, 
  filtros?: Record<string, unknown>
): MentoresResponse => {
  let data = [...mentoresMock];

  // Aplicar filtros se fornecidos
  if (filtros) {
    if (filtros.nome) {
      data = data.filter(m => m.nome.toLowerCase().includes((filtros.nome as string).toLowerCase()));
    }
    if (filtros.regiao) {
      data = data.filter(m => m.regiao === filtros.regiao);
    }
    if (filtros.area) {
      data = data.filter(m => m.area.includes(filtros.area as AreaExpertise));
    }
    if (filtros.edicao) {
      data = data.filter(m => m.edicoes?.some(e => e.includes(filtros.edicao as string)));
    }
    if (filtros.disponivel !== undefined) {
      data = data.filter(m => m.disponivel === filtros.disponivel);
    }
  }

  const total = data.length;
  const totalPages = Math.ceil(total / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = data.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    total,
    page,
    limit,
    totalPages,
  };
};
