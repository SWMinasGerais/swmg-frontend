import { Partner, PartnerCategory, PartnerTier } from './types';

/**
 * Cores para os diferentes tiers de parceiros
 */
export const TIER_COLORS: Record<PartnerTier, string> = {
  diamond: 'border-indigo-500 bg-indigo-50',
  platinum: 'border-slate-500 bg-slate-50',
  gold: 'border-amber-500 bg-amber-50',
  silver: 'border-slate-400 bg-slate-100',
  bronze: 'border-amber-600 bg-amber-100',
  support: 'border-sky-500 bg-sky-50',
  media: 'border-red-500 bg-red-50'
};

/**
 * Informações sobre as categorias de parceiros
 */
export const CATEGORY_INFO: Record<PartnerCategory, { label: string, color: string }> = {
  government: { 
    label: 'Governo', 
    color: 'border-blue-500 text-blue-700'
  },
  academic: { 
    label: 'Acadêmico', 
    color: 'border-purple-500 text-purple-700'
  },
  development: { 
    label: 'Desenvolvimento', 
    color: 'border-green-500 text-green-700'
  },
  private: { 
    label: 'Privado', 
    color: 'border-gray-500 text-gray-700'
  },
  hub: { 
    label: 'Hub', 
    color: 'border-cyan-500 text-cyan-700'
  },
  media: { 
    label: 'Mídia', 
    color: 'border-red-500 text-red-700'
  },
  association: { 
    label: 'Associação', 
    color: 'border-pink-500 text-pink-700'
  }
};

/**
 * State-level partners by category
 */
export const statePartners: Record<PartnerCategory, Partner[]> = {
  government: [
    {
      id: 101,
      name: "Governo de Minas Gerais",
      logo: "imgs/partners/mg.png",
      website: "https://mg.gov.br",
      tier: "gold",
      category: "government"
    },
    {
      id: 102,
      name: "Secretaria de Desenvolvimento",
      logo: "imgs/partners/sede.png",
      website: "https://desenvolvimentoeconomico.mg.gov.br",
      tier: "silver",
      category: "government"
    }
  ],
  development: [
    {
      id: 103,
      name: "SEBRAE Minas",
      logo: "imgs/partners/sebrae.png",
      website: "https://sebrae.com.br/minasgerais",
      tier: "diamond",
      category: "development"
    },
    {
      id: 104,
      name: "FIEMG",
      logo: "imgs/partners/fiemg.png",
      website: "https://fiemg.com.br",
      tier: "diamond",
      category: "development"
    },
    {
      id: 105,
      name: "FAPEMIG",
      logo: "imgs/partners/fapemig.png",
      website: "https://fapemig.br",
      tier: "gold",
      category: "development"
    },
    {
      id: 106,
      name: "BDMG",
      logo: "imgs/partners/bdmg.png",
      website: "https://bdmg.mg.gov.br",
      tier: "silver",
      category: "development"
    }
  ],
  private: [
    {
      id: 107,
      name: "SENAI Minas",
      logo: "imgs/partners/senai.png",
      website: "https://senai.com.br/minas",
      tier: "silver",
      category: "private"
    },
    {
      id: 108,
      name: "Cemig",
      logo: "imgs/partners/cemig.png",
      website: "https://cemig.com.br",
      tier: "silver",
      category: "private"
    },
    {
      id: 109,
      name: "Vale",
      logo: "imgs/partners/vale.png",
      website: "https://vale.com",
      tier: "gold",
      category: "private"
    },
    {
      id: 1001,
      name: "ArcelorMittal Brasil",
      logo: "imgs/partners/arcelormittal.png",
      website: "https://brasil.arcelormittal.com",
      tier: "gold",
      category: "private"
    },
    {
      id: 1002,
      name: "BHP Billiton Brasil",
      logo: "imgs/partners/bhp.png",
      website: "https://www.bhp.com",
      tier: "gold",
      category: "private"
    },
    {
      id: 1003,
      name: "Localiza Rent a Car",
      logo: "imgs/partners/localiza.png",
      website: "https://www.localiza.com",
      tier: "silver",
      category: "private"
    },
    {
      id: 1004,
      name: "Usiminas",
      logo: "imgs/partners/usiminas.png",
      website: "https://www.usiminas.com",
      tier: "gold",
      category: "private"
    }
  ],
  media: [
    {
      id: 110,
      name: "Estado de Minas",
      logo: "imgs/partners/estadodeminas.png",
      website: "https://em.com.br",
      tier: "media",
      category: "media"
    },
    {
      id: 111,
      name: "Rádio Itatiaia",
      logo: "imgs/partners/itatiaia.png",
      website: "https://itatiaia.com.br",
      tier: "media",
      category: "media"
    },
    {
      id: 112,
      name: "Rede Minas",
      logo: "imgs/partners/redeminas.png",
      website: "https://redeminas.tv",
      tier: "media",
      category: "media"
    }
  ],
  academic: [
    {
      id: 113,
      name: "UFMG",
      logo: "imgs/partners/ufmg.png",
      website: "https://ufmg.br",
      tier: "gold",
      category: "academic"
    },
    {
      id: 114,
      name: "PUC Minas",
      logo: "imgs/partners/pucminas.png",
      website: "https://pucminas.br",
      tier: "silver",
      category: "academic"
    }
  ],
  hub: [
    {
      id: 115,
      name: "San Pedro Valley",
      logo: "imgs/partners/spv.png",
      website: "https://sanpedrovalley.org",
      tier: "support",
      category: "hub"
    },
    {
      id: 116,
      name: "SEED",
      logo: "imgs/partners/seed.png",
      website: "https://seed.mg.gov.br",
      tier: "support",
      category: "hub"
    }
  ],
  association: [
    {
      id: 117,
      name: "Rede Mineira de Inovação",
      logo: "imgs/partners/rmi.png",
      website: "https://rmi.org.br",
      tier: "support",
      category: "association"
    },
    {
      id: 118,
      name: "Associação Mineira de Startups",
      logo: "imgs/partners/ams.png",
      website: "#",
      tier: "support",
      category: "association"
    }
  ]
};

/**
 * Municipal-level partners
 */
export const municipalPartners: Record<string, Record<PartnerCategory, Partner[]>> = {
  'Belo Horizonte': {
    government: [
      { 
        id: 201,
        name: "Prefeitura de Belo Horizonte",
        logo: "imgs/partners/pbh.png",
        website: "https://pbh.gov.br",
        tier: "diamond",
        city: "Belo Horizonte",
        category: "government"
      }
    ],
    academic: [
      { 
        id: 202,
        name: "UFMG",
        logo: "imgs/partners/ufmg.png",
        website: "https://ufmg.br",
        tier: "gold",
        city: "Belo Horizonte",
        category: "academic"
      },
      { 
        id: 203,
        name: "PUC Minas",
        logo: "imgs/partners/pucminas.png",
        website: "https://pucminas.br",
        tier: "silver",
        city: "Belo Horizonte",
        category: "academic"
      },
      { 
        id: 204,
        name: "UNA",
        logo: "imgs/partners/una.png",
        website: "https://una.br",
        tier: "bronze",
        city: "Belo Horizonte",
        category: "academic"
      }
    ],
    private: [
      { 
        id: 205,
        name: "MRV",
        logo: "imgs/partners/mrv.png",
        website: "https://mrv.com.br",
        tier: "gold",
        city: "Belo Horizonte",
        category: "private"
      },
      { 
        id: 206,
        name: "Localiza",
        logo: "imgs/partners/localiza.png",
        website: "https://localiza.com",
        tier: "silver",
        city: "Belo Horizonte",
        category: "private"
      },
      { 
        id: 2001,
        name: "Google Brasil",
        logo: "imgs/partners/google.png",
        website: "https://google.com.br",
        tier: "gold",
        city: "Belo Horizonte",
        category: "private"
      },
      { 
        id: 2002,
        name: "Itaú Unibanco",
        logo: "imgs/partners/itau.png",
        website: "https://itau.com.br",
        tier: "silver",
        city: "Belo Horizonte",
        category: "private"
      },
      { 
        id: 2003,
        name: "Ambev",
        logo: "imgs/partners/ambev.png",
        website: "https://ambev.com.br",
        tier: "silver",
        city: "Belo Horizonte",
        category: "private"
      },
      { 
        id: 2004,
        name: "Aperam South America",
        logo: "imgs/partners/aperam.png",
        website: "https://aperamsa.com.br",
        tier: "bronze",
        city: "Belo Horizonte",
        category: "private"
      }
    ],
    hub: [
      { 
        id: 207,
        name: "San Pedro Valley",
        logo: "imgs/partners/spv.png",
        website: "https://sanpedrovalley.org",
        tier: "support",
        city: "Belo Horizonte",
        category: "hub"
      },
      { 
        id: 208,
        name: "BH-TEC",
        logo: "imgs/partners/bhtec.png",
        website: "https://bhtec.org.br",
        tier: "support",
        city: "Belo Horizonte",
        category: "hub"
      }
    ],
    media: [
      { 
        id: 209,
        name: "Estado de Minas",
        logo: "imgs/partners/estadodeminas.png",
        website: "https://em.com.br",
        tier: "media",
        city: "Belo Horizonte",
        category: "media"
      },
      { 
        id: 210,
        name: "Alterosa",
        logo: "imgs/partners/alterosa.png",
        website: "https://alterosa.com.br",
        tier: "media",
        city: "Belo Horizonte",
        category: "media"
      }
    ],
    development: [],
    association: []
  },
  'Uberlândia': {
    government: [
      { 
        id: 301,
        name: "Prefeitura de Uberlândia",
        logo: "imgs/partners/pmu.png",
        website: "https://uberlandia.mg.gov.br",
        tier: "diamond",
        city: "Uberlândia",
        category: "government"
      }
    ],
    academic: [
      { 
        id: 302,
        name: "UFU",
        logo: "imgs/partners/ufu.png",
        website: "https://ufu.br",
        tier: "gold",
        city: "Uberlândia",
        category: "academic"
      },
      { 
        id: 303,
        name: "UNITRI",
        logo: "imgs/partners/unitri.png",
        website: "https://unitri.edu.br",
        tier: "silver",
        city: "Uberlândia",
        category: "academic"
      }
    ],
    private: [
      { 
        id: 304,
        name: "Algar Telecom",
        logo: "imgs/partners/algar.png",
        website: "https://algartelecom.com.br",
        tier: "gold",
        city: "Uberlândia",
        category: "private"
      },
      { 
        id: 305,
        name: "Martins",
        logo: "imgs/partners/martins.png",
        website: "#",
        tier: "silver",
        city: "Uberlândia",
        category: "private"
      },
      { 
        id: 3001,
        name: "Martins Comércio e Distribuição",
        logo: "imgs/partners/martins.png",
        website: "https://martinsdistribuidor.com.br",
        tier: "gold",
        city: "Uberlândia",
        category: "private"
      },
      { 
        id: 3002,
        name: "Atac Logística",
        logo: "imgs/partners/atac.png",
        website: "https://atacdistribuidor.com.br",
        tier: "silver",
        city: "Uberlândia",
        category: "private"
      },
      { 
        id: 3003,
        name: "Algar S/A Empreendimentos",
        logo: "imgs/partners/algar-sa.png",
        website: "https://algar.com.br",
        tier: "silver",
        city: "Uberlândia",
        category: "private"
      },
      { 
        id: 3004,
        name: "CJ Selecta S.A.",
        logo: "imgs/partners/cj-selecta.png",
        website: "https://cj.net",
        tier: "bronze",
        city: "Uberlândia",
        category: "private"
      }
    ],
    hub: [
      { 
        id: 306,
        name: "Triângulo Hub",
        logo: "imgs/partners/thub.png",
        website: "#",
        tier: "support",
        city: "Uberlândia",
        category: "hub"
      }
    ],
    media: [
      { 
        id: 307,
        name: "TV Integração",
        logo: "imgs/partners/integracao.png",
        website: "#",
        tier: "media",
        city: "Uberlândia",
        category: "media"
      }
    ],
    development: [],
    association: []
  },
  'Juiz de Fora': {
    government: [
      { 
        id: 401,
        name: "Prefeitura de Juiz de Fora",
        logo: "imgs/partners/pjf.png",
        website: "https://jf.mg.gov.br",
        tier: "diamond",
        city: "Juiz de Fora",
        category: "government"
      }
    ],
    academic: [
      { 
        id: 402,
        name: "UFJF",
        logo: "imgs/partners/ufjf.png",
        website: "https://ufjf.br",
        tier: "gold",
        city: "Juiz de Fora",
        category: "academic"
      }
    ],
    private: [
      { 
        id: 4001,
        name: "Supermercado Bahamas",
        logo: "imgs/partners/bahamas.png",
        website: "https://bahamas.com.br",
        tier: "silver",
        city: "Juiz de Fora",
        category: "private"
      },
      { 
        id: 4002,
        name: "Becton Dickinson",
        logo: "imgs/partners/bd.png",
        website: "https://bd.com",
        tier: "gold",
        city: "Juiz de Fora",
        category: "private"
      },
      { 
        id: 4003,
        name: "Medquímica",
        logo: "imgs/partners/medquimica.png",
        website: "https://medquimica.com",
        tier: "silver",
        city: "Juiz de Fora",
        category: "private"
      },
      { 
        id: 4004,
        name: "Coca-Cola Femsa Brasil",
        logo: "imgs/partners/femsa.png",
        website: "https://coca-colafemsa.com",
        tier: "bronze",
        city: "Juiz de Fora",
        category: "private"
      }
    ],
    hub: [
      { 
        id: 403,
        name: "JF Valley",
        logo: "imgs/partners/jfvalley.png",
        website: "#",
        tier: "support",
        city: "Juiz de Fora",
        category: "hub"
      }
    ],
    media: [
      { 
        id: 404,
        name: "Tribuna de Minas",
        logo: "imgs/partners/tribuna.png",
        website: "#",
        tier: "media",
        city: "Juiz de Fora",
        category: "media"
      }
    ],
    development: [],
    association: []
  },
  'Montes Claros': {
    government: [{ id: 501, name: "Prefeitura de Montes Claros", logo: "imgs/partners/pmc.png", website: "#", tier: "diamond", city: "Montes Claros", category: "government" }],
    academic: [{ id: 502, name: "Unimontes", logo: "imgs/partners/unimontes.png", website: "#", tier: "gold", city: "Montes Claros", category: "academic" }],
    media: [{ id: 503, name: "Gazeta Norte Mineira", logo: "imgs/partners/gazeta.png", website: "#", tier: "media", city: "Montes Claros", category: "media" }],
    private: [
      { 
        id: 5001,
        name: "Springs Global",
        logo: "imgs/partners/springs.png",
        website: "https://springs.com",
        tier: "gold",
        city: "Montes Claros",
        category: "private"
      },
      { 
        id: 5002,
        name: "Coteminas",
        logo: "imgs/partners/coteminas.png",
        website: "https://coteminas.com.br",
        tier: "silver",
        city: "Montes Claros",
        category: "private"
      },
      { 
        id: 5003,
        name: "Novo Nordisk",
        logo: "imgs/partners/novo-nordisk.png",
        website: "https://novonordisk.com.br",
        tier: "silver",
        city: "Montes Claros",
        category: "private"
      }
    ],
    hub: [],
    development: [],
    association: []
  },
  'Viçosa': {
    government: [{ id: 601, name: "Prefeitura de Viçosa", logo: "imgs/partners/pmv.png", website: "#", tier: "diamond", city: "Viçosa", category: "government" }],
    academic: [{ id: 602, name: "UFV", logo: "imgs/partners/ufv.png", website: "#", tier: "gold", city: "Viçosa", category: "academic" }],
    private: [
      { 
        id: 6001,
        name: "BHC Brasil Holding",
        logo: "imgs/partners/bhc.png",
        website: "https://bhcbrasil.com.br",
        tier: "silver",
        city: "Viçosa",
        category: "private"
      },
      { 
        id: 6002,
        name: "Viação União",
        logo: "imgs/partners/uniao.png",
        website: "https://viacaouniao.com.br",
        tier: "bronze",
        city: "Viçosa",
        category: "private"
      },
      { 
        id: 6003,
        name: "Haskell Cosméticos",
        logo: "imgs/partners/haskell.png",
        website: "https://haskell.com.br",
        tier: "bronze",
        city: "Viçosa",
        category: "private"
      }
    ],
    hub: [],
    media: [],
    development: [],
    association: []
  },
  'Poços de Caldas': {
    government: [{ id: 701, name: "Prefeitura de Poços de Caldas", logo: "imgs/partners/pmpc.png", website: "#", tier: "diamond", city: "Poços de Caldas", category: "government" }],
    academic: [{ id: 702, name: "IFSuldeMinas", logo: "imgs/partners/ifsuldeminas.png", website: "#", tier: "gold", city: "Poços de Caldas", category: "academic" }],
    private: [
      { 
        id: 7001,
        name: "Alcoa Alumínio S.A.",
        logo: "imgs/partners/alcoa.png",
        website: "https://alcoa.com",
        tier: "gold",
        city: "Poços de Caldas",
        category: "private"
      },
      { 
        id: 7002,
        name: "Ferrero",
        logo: "imgs/partners/ferrero.png",
        website: "https://ferrero.com.br",
        tier: "silver",
        city: "Poços de Caldas",
        category: "private"
      },
      { 
        id: 7003,
        name: "DME Participações",
        logo: "imgs/partners/dme.png",
        website: "https://dme.mg.gov.br",
        tier: "bronze",
        city: "Poços de Caldas",
        category: "private"
      }
    ],
    hub: [],
    media: [],
    development: [],
    association: []
  },
  'Ipatinga': {
    government: [{ id: 801, name: "Prefeitura de Ipatinga", logo: "imgs/partners/pmi.png", website: "#", tier: "diamond", city: "Ipatinga", category: "government" }],
    academic: [{ id: 802, name: "Unileste", logo: "imgs/partners/unileste.png", website: "#", tier: "gold", city: "Ipatinga", category: "academic" }],
    media: [{ id: 803, name: "TV Vale do Aço", logo: "imgs/partners/tvva.png", website: "#", tier: "media", city: "Ipatinga", category: "media" }],
    private: [
      { 
        id: 8001,
        name: "Usiminas",
        logo: "imgs/partners/usiminas.png",
        website: "https://usiminas.com",
        tier: "gold",
        city: "Ipatinga",
        category: "private"
      },
      { 
        id: 8002,
        name: "Assaí Atacadista",
        logo: "imgs/partners/assai.png",
        website: "https://assai.com.br",
        tier: "silver",
        city: "Ipatinga",
        category: "private"
      },
      { 
        id: 8003,
        name: "Cipalám Laminados",
        logo: "imgs/partners/cipalam.png",
        website: "https://cipalam.com.br",
        tier: "bronze",
        city: "Ipatinga",
        category: "private"
      }
    ],
    hub: [],
    development: [],
    association: []
  },
  'Divinópolis': {
    government: [{ id: 901, name: "Prefeitura de Divinópolis", logo: "imgs/partners/pmd.png", website: "#", tier: "diamond", city: "Divinópolis", category: "government" }],
    academic: [{ id: 902, name: "UEMG", logo: "imgs/partners/uemg.png", website: "#", tier: "gold", city: "Divinópolis", category: "academic" }],
    private: [
      { 
        id: 9001,
        name: "TVT Empreendimentos",
        logo: "imgs/partners/tvt.png",
        website: "https://tvtempreendimentos.com.br",
        tier: "silver",
        city: "Divinópolis",
        category: "private"
      },
      { 
        id: 9002,
        name: "Hospital Santa Mônica",
        logo: "imgs/partners/santa-monica.png",
        website: "https://hospitalsantamonica.com.br",
        tier: "silver",
        city: "Divinópolis",
        category: "private"
      },
      { 
        id: 9003,
        name: "AGL Brasil",
        logo: "imgs/partners/agl.png",
        website: "https://aglbrasil.com.br",
        tier: "bronze",
        city: "Divinópolis",
        category: "private"
      }
    ],
    hub: [],
    media: [],
    development: [],
    association: []
  },
  'Governador Valadares': {
    government: [{ id: 1001, name: "Prefeitura de Governador Valadares", logo: "imgs/partners/pmgv.png", website: "#", tier: "diamond", city: "Governador Valadares", category: "government" }],
    academic: [{ id: 1002, name: "UNIVALE", logo: "imgs/partners/univale.png", website: "#", tier: "gold", city: "Governador Valadares", category: "academic" }],
    hub: [{ id: 1003, name: "Rio Doce Valley", logo: "imgs/partners/rdv.png", website: "#", tier: "support", city: "Governador Valadares", category: "hub" }],
    private: [
      { 
        id: 10001,
        name: "Rede HG",
        logo: "imgs/partners/hg.png",
        website: "https://redehg.com.br",
        tier: "silver",
        city: "Governador Valadares",
        category: "private"
      },
      { 
        id: 10002,
        name: "Cooperativa Vale do Rio Doce",
        logo: "imgs/partners/coopvale.png",
        website: "https://coopvale.com.br",
        tier: "silver",
        city: "Governador Valadares",
        category: "private"
      },
      { 
        id: 10003,
        name: "Laticínios Bela Vista",
        logo: "imgs/partners/piracanjuba.png",
        website: "https://piracanjuba.com.br",
        tier: "bronze",
        city: "Governador Valadares",
        category: "private"
      }
    ],
    media: [],
    development: [],
    association: []
  }
};

/**
 * List of supported cities
 */
export const cities = Object.keys(municipalPartners); 