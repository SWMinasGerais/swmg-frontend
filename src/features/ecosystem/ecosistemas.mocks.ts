import { Ecosystem, EcosystemListResponse } from "./ecosistemas.type";

// Mock ecosystem data
export const mockEcosystemEntities: Ecosystem[] = [
  // Hubs
  {
    id: 1,
    name: "San Pedro Valley",
    type: "hub",
    city: "Belo Horizonte",
    logo: "/imgs/ecosystem/sanpedro.png",
    description: "Comunidade de startups de tecnologia de BH",
    latitude: -19.9332,
    longitude: -43.9380,
    url: "https://www.sanpedrovalley.org"
  },
  {
    id: 2,
    name: "SEED",
    type: "hub",
    city: "Belo Horizonte",
    logo: "/imgs/ecosystem/seed.png",
    description: "Programa de aceleração do Governo de Minas",
    latitude: -19.9245,
    longitude: -43.9352,
    url: "https://www.seed.mg.gov.br"
  },
  {
    id: 3,
    name: "Órbi Conecta",
    type: "hub",
    city: "Belo Horizonte",
    logo: "/imgs/ecosystem/orbi.png",
    description: "Hub de inovação da FIEMG",
    latitude: -19.9401,
    longitude: -43.9326,
    url: "https://www.orbiconecta.com.br"
  },
  
  // Accelerators
  {
    id: 4,
    name: "ACE Startups",
    type: "accelerator",
    city: "Belo Horizonte",
    logo: "/imgs/ecosystem/ace.png",
    description: "Aceleradora de startups early-stage",
    latitude: -19.9558,
    longitude: -43.9478,
    url: "https://acestartups.com.br"
  },
  {
    id: 5,
    name: "Techmall",
    type: "accelerator",
    city: "Uberlândia",
    logo: "/imgs/ecosystem/techmall.png",
    description: "Aceleradora do Triângulo Mineiro",
    latitude: -18.9185,
    longitude: -48.2733,
    url: "https://www.techmall.com.br"
  },
  
  // Investors
  {
    id: 6,
    name: "FIR Capital",
    type: "investor",
    city: "Belo Horizonte",
    logo: "/imgs/ecosystem/fircapital.png",
    description: "Gestora de Venture Capital",
    latitude: -19.9474,
    longitude: -43.9346,
    url: "https://www.fircapital.com"
  },
  {
    id: 7,
    name: "MGVC",
    type: "investor",
    city: "Belo Horizonte",
    logo: "/imgs/ecosystem/mgvc.png",
    description: "Fundo de Venture Capital mineiro",
    latitude: -19.9511,
    longitude: -43.9370,
    url: "https://www.mgvc.com.br"
  },
  
  // Universities
  {
    id: 8,
    name: "UFMG",
    type: "university",
    city: "Belo Horizonte",
    logo: "/imgs/ecosystem/ufmg.png",
    description: "Universidade Federal de Minas Gerais",
    latitude: -19.8716,
    longitude: -43.9673,
    url: "https://www.ufmg.br"
  },
  {
    id: 9,
    name: "PUC Minas",
    type: "university",
    city: "Belo Horizonte",
    logo: "/imgs/ecosystem/pucminas.png",
    description: "Pontifícia Universidade Católica de MG",
    latitude: -19.9247,
    longitude: -43.9894,
    url: "https://www.pucminas.br"
  },
  {
    id: 10,
    name: "UFU",
    type: "university",
    city: "Uberlândia",
    logo: "/imgs/ecosystem/ufu.png",
    description: "Universidade Federal de Uberlândia",
    latitude: -18.9178,
    longitude: -48.2603,
    url: "https://www.ufu.br"
  },
  
  // Institutional Partners
  {
    id: 11,
    name: "SEBRAE-MG",
    type: "partner",
    city: "Belo Horizonte",
    logo: "/imgs/ecosystem/sebrae.png",
    description: "Serviço Brasileiro de Apoio às Micro e Pequenas Empresas",
    latitude: -19.9305,
    longitude: -43.9418,
    url: "https://www.sebrae.com.br/sites/PortalSebrae/ufs/mg"
  },
  {
    id: 12,
    name: "FIEMG",
    type: "partner",
    city: "Belo Horizonte",
    logo: "/imgs/ecosystem/fiemg.png",
    description: "Federação das Indústrias do Estado de Minas Gerais",
    latitude: -19.9548,
    longitude: -43.9247,
    url: "https://www7.fiemg.com.br"
  }
];

// Helper function to get mock response with pagination
export const getMockEcosystemResponse = (
  page: number = 1,
  limit: number = 10,
  filters?: {
    type?: string;
    city?: string;
    search?: string;
  }
): EcosystemListResponse => {
  let filtered = [...mockEcosystemEntities];

  // Apply filters if any
  if (filters) {
    if (filters.type) {
      filtered = filtered.filter(entity => entity.type === filters.type);
    }

    if (filters.city) {
      filtered = filtered.filter(entity => 
        entity.city.toLowerCase().includes(filters.city?.toLowerCase() || '')
      );
    }

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(entity => 
        entity.name.toLowerCase().includes(searchTerm) ||
        entity.description.toLowerCase().includes(searchTerm)
      );
    }
  }

  // Calculate pagination
  const total = filtered.length;
  const startIndex = (page - 1) * limit;
  const endIndex = Math.min(startIndex + limit, total);
  const paginatedData = filtered.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    meta: {
      total,
      page,
      limit
    }
  };
};

// Helper function to get a single entity by ID
export const getMockEcosystemById = (id: number) => {
  const entity = mockEcosystemEntities.find(entity => entity.id === id);
  
  if (!entity) {
    throw new Error(`Ecosystem entity with ID ${id} not found`);
  }
  
  return {
    data: entity
  };
}; 