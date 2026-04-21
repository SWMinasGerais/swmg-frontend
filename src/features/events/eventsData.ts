// Event type definition
export type EventStatus = "open" | "coming-soon" | "closed" | "past";
export type Event = {
  id: number;
  city: string;
  title: string;
  date: string;
  month: string; // For filtering: "jan", "feb", etc.
  theme: string;
  remainingSeats?: number;
  totalSeats?: number;
  status: EventStatus;
  imageUrl: string;
  venue?: string;
  organizers?: string;
  participants?: string;
  sponsors?: string;
  winners?: string;
  notes?: string;
  year?: number;
};

// Current and upcoming events
export const upcomingEvents: Event[] = [
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
    imageUrl: "/imgs/events/bh.jpg"
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
    imageUrl: "/imgs/events/uberlandia.jpg"
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
    imageUrl: "/imgs/events/juizdefora.jpg"
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
    imageUrl: "/imgs/events/montesclaros.jpg"
  },
  {
    id: 5,
    city: "Teófilo Otoni",
    title: "Startup Weekend Smart Cities",
    date: "03-05 Outubro 2025",
    month: "out",
    year: 2025,
    theme: "Smart Cities",
    remainingSeats: 100,
    totalSeats: 100,
    status: "coming-soon",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "A definir - Vale dos Inconfidentes",
    organizers: "Techstars, Gov. MG",
    sponsors: "Techstars, Gov. MG, 4 cidades parceiras",
    notes: "Edição regional anunciada para 2025 unindo Teófilo Otoni, Itabira, Ipatinga e Gov. Valadares"
  }
];

// Historical events from Minas Gerais
export const pastEvents: Event[] = [
  {
    id: 101,
    city: "Belo Horizonte",
    title: "Startup Weekend BH",
    date: "27-29 Setembro 2013",
    month: "set",
    year: 2013,
    theme: "Geral",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "UniBH (1ª edição BH)",
    participants: "~140",
    sponsors: "Google, AWS (globais); apoio local SEBRAE",
    winners: "AcheModa – buscador de moda em grandes marcas (campeã)",
    notes: "Primeiro Startup Weekend em MG; ideias e-commerce em destaque."
  },
  {
    id: 102,
    city: "Itajubá",
    title: "Startup Weekend UNIFEI",
    date: "18-20 Outubro 2013",
    month: "out",
    year: 2013,
    theme: "Geral (Universidade)",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "UNIFEI Itajubá (1ª ed. UNIFEI)",
    participants: "~100",
    sponsors: "UNIFEI, SEBRAE, Prefeitura",
    winners: "Agrosmart – dashboard agrícola para produtores (campeã)",
    notes: "Gerou startup que virou referência nacional em AgTech."
  },
  {
    id: 103,
    city: "Belo Horizonte",
    title: "Startup Weekend BH",
    date: "04-06 Abril 2014",
    month: "abr",
    year: 2014,
    theme: "Geral",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "SEED-MG (aceleradora)",
    participants: "~120",
    sponsors: "Start-Up Brasil, SEED-MG, Google",
    notes: "Edição no espaço do programa SEED/Start-Up Brasil, fomentando ecossistema local."
  },
  {
    id: 104,
    city: "Belo Horizonte",
    title: "Startup Weekend Youth BH",
    date: "23-25 Maio 2014",
    month: "mai",
    year: 2014,
    theme: "Youth (Jovens)",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "Fac. Única (SW Youth BH)",
    participants: "~100",
    sponsors: "SEBRAE, Escola do Sebrae",
    notes: "Edição especial para jovens (estudantes do ensino médio e universitário)."
  },
  {
    id: 105,
    city: "Belo Horizonte",
    title: "Startup Weekend Youth BH",
    date: "31 Out - 02 Nov 2014",
    month: "out",
    year: 2014,
    theme: "Youth (Jovens)",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "Estácio BH – Prado",
    participants: "~120",
    sponsors: "Google, SEBRAE, Techstars",
    notes: "Focado em universitários; terceira edição mineira até então."
  },
  {
    id: 106,
    city: "Lavras",
    title: "Startup Weekend Lavras",
    date: "07-09 Novembro 2014",
    month: "nov",
    year: 2014,
    theme: "Geral",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "UFLA – Inbatec",
    participants: "~60",
    sponsors: "UFLA (NINTEC/Inbatec), SEBRAE, IdeiaMine",
    winners: "JukeMob – aplicativo que permite clientes escolherem músicas em bares via smartphone, substituindo jukebox tradicional",
    notes: "Evento impulsionou cultura empreendedora na UFLA; apoio institucional forte."
  },
  {
    id: 107,
    city: "Viçosa",
    title: "Startup Weekend Viçosa",
    date: "25-27 Setembro 2015",
    month: "set",
    year: 2015,
    theme: "Geral",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "CENTEV/UFV (1ª ed. Viçosa)",
    participants: "~80",
    sponsors: "UFV (Centev), SEBRAE",
    notes: "Inseriu Viçosa no mapa empreendedor; forte participação de estudantes da UFV."
  },
  {
    id: 108,
    city: "Juiz de Fora",
    title: "Startup Weekend Juiz de Fora",
    date: "20-22 Março 2015",
    month: "mar",
    year: 2015,
    theme: "Geral",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "UFJF – Critt",
    participants: "~100",
    sponsors: "UFJF (Critt), Parque Tecnológico, SEBRAE",
    notes: "Universidade apoiou maratona de empreendedorismo; expansão do ecossistema local."
  },
  {
    id: 109,
    city: "Uberlândia",
    title: "Startup Weekend Uberlândia",
    date: "22-24 Maio 2015",
    month: "mai",
    year: 2015,
    theme: "Geral",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "UNITRI (1ª ed. UDI)",
    participants: "~100",
    sponsors: "i9 Uberlândia, SEBRAE",
    notes: "Primeira edição no Triângulo; base para futuras edições e engajamento regional."
  },
  {
    id: 110,
    city: "Uberaba",
    title: "Startup Weekend Uberaba",
    date: "04-06 Dezembro 2015",
    month: "dez",
    year: 2015,
    theme: "Geral",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "Uniube Campus Aeroporto (1ª ed. Uberaba)",
    participants: "110",
    sponsors: "Uniube e Sebrae (organizadores); Pref. Uberaba, Parque Tec., FINEP, etc.",
    winners: "DocVet – plataforma de orientação veterinária imediata (1º lugar); Farmát - venda de medicamentos (2º); 3GO – rede social de ideias e inovadores (3º); Pão de QueijUAI – menção honrosa",
    notes: "Edição marcante da comunidade Zebu Valley; universidade e parceiros locais, fortalecendo ecossistema em Uberaba."
  },
  {
    id: 111,
    city: "Belo Horizonte",
    title: "Startup Weekend BH",
    date: "04-06 Dezembro 2015",
    month: "dez",
    year: 2015,
    theme: "Geral",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "Espaço Cento e Quatro (3ª ed. BH)",
    participants: "110+",
    sponsors: "SEBRAE, Sympla, Tropos Lab, Lemonade",
    winners: "\"Tá Pronto!\" – marketplace de comida caseira, conectando pequenos cozinheiros a clientes (campeã)",
    notes: "Premiada com curso Tropos, assessorias e pré-aceleração Lemonade; júri incluiu fundadores da Sympla e outros."
  },
  {
    id: 112,
    city: "Juiz de Fora",
    title: "Startup Weekend Comunidades",
    date: "16-18 Setembro 2016",
    month: "set",
    year: 2016,
    theme: "Comunidades (impacto social)",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "Obras Sociais P. Júlio (Ipiranga)",
    participants: "~80",
    sponsors: "SEBRAE-MG, ONG UP Global",
    notes: "Voltado a soluções comunitárias; primeira edição SW Comunidades em JF."
  },
  {
    id: 113,
    city: "Uberlândia",
    title: "Startup Weekend Uberlândia",
    date: "20-22 Maio 2016",
    month: "mai",
    year: 2016,
    theme: "Geral",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "CDL Uberlândia (2ª ed. UDI)",
    participants: "130+",
    sponsors: "i9/UFO, Sebrae, empresas locais",
    winners: "PoupeCents – carteira digital de troco que resolve a falta de moedas (campeã)",
    notes: "Equipe vencedora ganhou smartwatch, consultorias jurídica/financeira e aceleração; engajou comunidade local e universitários da Uniube."
  },
  {
    id: 114,
    city: "Itajubá",
    title: "Startup Weekend Maker",
    date: "05-07 Maio 2016",
    month: "mai",
    year: 2016,
    theme: "Maker (Tecnologia Maker)",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "UNIFEI Itajubá (FabLab)",
    participants: "~70",
    sponsors: "UNIFEI, Intel, Sebrae",
    notes: "Focado em \"mão na massa\" (maker); estimulou hardware/startups na UNIFEI."
  },
  {
    id: 115,
    city: "Belo Horizonte",
    title: "Startup Weekend Health",
    date: "16-18 Setembro 2016",
    month: "set",
    year: 2016,
    theme: "Health (Saúde)",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "IBMEC BH",
    participants: "~100",
    sponsors: "IBMEC, Unimed, Sebrae",
    notes: "Vertical de Saúde; uniu prof. de saúde e TI para inovar em saúde."
  },
  {
    id: 116,
    city: "Juiz de Fora",
    title: "Startup Weekend Education",
    date: "13-15 Outubro 2017",
    month: "out",
    year: 2017,
    theme: "Education (Educação)",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "Sede PJF & UFJF",
    participants: "~80",
    sponsors: "Prefeitura JF, SEBRAE, UFJF",
    notes: "Edição temática Educação com apoio municipal; gerou projetos educacionais inovadores."
  },
  {
    id: 117,
    city: "Viçosa",
    title: "Startup Weekend Viçosa",
    date: "25-27 Agosto 2017",
    month: "ago",
    year: 2017,
    theme: "Geral",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "CENTEV/UFV (3ª ed. Viçosa)",
    participants: "~100",
    sponsors: "UFV (Centev), SEBRAE",
    winners: "Tô na Fila – app de filas inteligente usando GPS para senhas eletrônicas (campeã)",
    notes: "Vencedor criou solução para filas em museus/serviços, exemplificando inovação local; envolveu professores e alunos da UFV."
  },
  {
    id: 118,
    city: "Uberlândia",
    title: "Startup Weekend Uberlândia",
    date: "02-04 Junho 2017",
    month: "jun",
    year: 2017,
    theme: "Geral",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "Uniube Uberlândia (3ª ed. UDI)",
    participants: "~100",
    sponsors: "Uniube, i9, Sebrae",
    notes: "Terceira edição consolidou ecossistema UDI; participantes de toda região, mentoria de nomes nacionais."
  },
  {
    id: 119,
    city: "Belo Horizonte",
    title: "Startup Weekend Smart Cities",
    date: "06-08 Abril 2018",
    month: "abr",
    year: 2018,
    theme: "Smart Cities (Cidades Inteligentes)",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "Pitágoras BH",
    participants: "~90",
    sponsors: "BH-Tec, Sectes-MG, IEEE",
    notes: "Edição vertical \"Cidades Inteligentes\" em BH após hiato de 7 anos nessa temática em MG; enfatizou soluções urbanas inovadoras."
  },
  {
    id: 120,
    city: "Uberaba",
    title: "Startup Weekend AgroTech",
    date: "09-11 Novembro 2018",
    month: "nov",
    year: 2018,
    theme: "AgroTech (Agro)",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "IFTM (2ª ed. Uberaba)",
    participants: "~100",
    sponsors: "CDL Uberaba, IFTM, ParqueLab",
    notes: "Consolidou Uberaba como hub agrotech; comunidade Zebu Valley reconhecida nacionalmente."
  },
  {
    id: 121,
    city: "Viçosa",
    title: "Startup Weekend Viçosa",
    date: "14-16 Junho 2019",
    month: "jun",
    year: 2019,
    theme: "Geral",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "CENTEV/UFV (5ª ed. Viçosa)",
    participants: "~100",
    sponsors: "UFV, Centev, empresas locais",
    winners: "Síndico Legal – app para gestão de condomínios (1º lugar); Kiwi – solução fintech (2º lugar)",
    notes: "Ecossistema maduro em Viçosa (5 edições); projetos vencedores encaminhados para pré-aceleração Lemonade (Síndico Legal incubada no Centev)."
  },
  {
    id: 122,
    city: "Belo Horizonte",
    title: "Startup Weekend Retail Tech",
    date: "Setembro 2019",
    month: "set",
    year: 2019,
    theme: "Retail Tech (Varejo)",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "CDL/BH – Espaço Varejo Inteligente",
    participants: "~100",
    sponsors: "Techstars, Google Startups; Parceiro local: CDL/BH",
    notes: "Primeira edição temática de Varejo em MG; envolveu lojistas buscando inovação; participação ativa da CDL e setor comercial."
  },
  {
    id: 123,
    city: "Online (MG)",
    title: "Startup Weekend COVID-19",
    date: "24-26 Abril 2020",
    month: "abr",
    year: 2020,
    theme: "COVID-19 (Nacional)",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "Evento online – Techstars Brasil",
    participants: "100+ (Brasil)",
    sponsors: "Techstars Global, AWS, COVID19 Brasil",
    winners: "Vírus Tracker (Brasil) – app monitoramento COVID (1º)",
    notes: "Evento online nacional para soluções da pandemia; participação de mineiros integrou esforço global."
  },
  {
    id: 124,
    city: "Belo Horizonte",
    title: "Startup Weekend Women",
    date: "20-22 Novembro 2020",
    month: "nov",
    year: 2020,
    theme: "Women (Online)",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "Techstars Online (SW Women BR)",
    participants: "~60",
    sponsors: "Techstars, comunidades Women",
    notes: "Edição Women Brasil online durante pandemia; várias participantes de MG envolvidas."
  },
  {
    id: 125,
    city: "Belo Horizonte",
    title: "Startup Weekend FinTech",
    date: "08-10 Outubro 2021",
    month: "out",
    year: 2021,
    theme: "FinTech (Online)",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "Comunidade Fintech BR (virtual)",
    participants: "~80",
    sponsors: "Visa, Stellantis, Techstars",
    notes: "Hackathon fintech Pan-Americano com forte presença MG; colaboração virtual entre estados."
  },
  {
    id: 126,
    city: "Santa Rita do Sapucaí",
    title: "Startup Weekend IoT/Manufatura",
    date: "18-20 Março 2022",
    month: "mar",
    year: 2022,
    theme: "IoT/Manufatura",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "Inatel Santa Rita (1ª ed.)",
    participants: "~70",
    sponsors: "Inatel, Fapemig, Ericsson",
    notes: "Inaugural no \"Vale da Eletrônica\"; fortaleceu polo de hardware mineiro."
  },
  {
    id: 127,
    city: "Governador Valadares",
    title: "Startup Weekend Governador Valadares",
    date: "05-07 Agosto 2022",
    month: "ago",
    year: 2022,
    theme: "Geral",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "Univ. Vale do Rio Doce",
    participants: "~60",
    sponsors: "Univale, Sebrae",
    notes: "Interior Leste de MG entrando na rota; foco em problemas regionais."
  },
  {
    id: 128,
    city: "Belo Horizonte",
    title: "Startup Weekend Sustentabilidade",
    date: "24-26 Março 2023",
    month: "mar",
    year: 2023,
    theme: "Sustentabilidade",
    status: "past",
    imageUrl: "/imgs/events/default-event.jpg",
    venue: "UNA Aimorés (Climate Action)",
    participants: "~100",
    sponsors: "Climate SW (Techstars), UNA, BH City Hall",
    notes: "Abordou ODS e negócios verdes; engajamento de prefeitura e NGOs."
  }
];

// Combine all events
export const allEvents: Event[] = [...upcomingEvents, ...pastEvents];

// Helper function to get month name in Portuguese
export const getMonthNamePt = (monthAbbr: string): string => {
  const months: Record<string, string> = {
    'jan': 'Janeiro',
    'fev': 'Fevereiro',
    'mar': 'Março',
    'abr': 'Abril',
    'mai': 'Maio',
    'jun': 'Junho',
    'jul': 'Julho',
    'ago': 'Agosto',
    'set': 'Setembro',
    'out': 'Outubro',
    'nov': 'Novembro',
    'dez': 'Dezembro'
  };
  return months[monthAbbr] || monthAbbr;
};

// Get unique cities for filtering
export const getUniqueCities = (): string[] => {
  return Array.from(new Set(allEvents.map(event => event.city)));
};

// Get unique themes for filtering
export const getUniqueThemes = (): string[] => {
  return Array.from(new Set(allEvents.map(event => event.theme)));
}; 