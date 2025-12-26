/**
 * Startup Weekend Verticals
 * Contains information about different verticals/themes for Startup Weekend events
 */

export type VerticalType = {
  id: string;
  nameEn: string;
  namePt: string;
  rules: string[];
  rulesPt?: string[];
  description: string;
  descriptionPt?: string;
  color?: string;
};

export const VERTICALS: Record<string, VerticalType> = {
  NO_VERTICAL: {
    id: 'NO_VERTICAL',
    nameEn: 'No Vertical',
    namePt: 'Sem Vertical',
    rules: [
      'Open to any business idea',
      'No specific industry focus'
    ],
    rulesPt: [
      'Aberto a qualquer ideia de negócio',
      'Sem foco específico de indústria'
    ],
    description: 'The traditional Startup Weekend format with no specific industry focus.',
    descriptionPt: 'O formato tradicional do Startup Weekend sem foco específico de indústria.'
  },
  
  UNIVERSITY: {
    id: 'UNIVERSITY',
    nameEn: 'University',
    namePt: 'Universidade',
    rules: [
      'Must be hosted at a university or educational institution',
      'Primarily focused on student participation',
      'Mentors should include professors and industry professionals'
    ],
    rulesPt: [
      'Deve ser hospedado em uma universidade ou instituição educacional',
      'Foco principal na participação de estudantes',
      'Mentores devem incluir professores e profissionais do mercado'
    ],
    description: 'Focused on university students and academic entrepreneurship.',
    descriptionPt: 'Focado em estudantes universitários e empreendedorismo acadêmico.',
    color: '#4169E1' // Royal Blue
  },
  
  WOMEN: {
    id: 'WOMEN',
    nameEn: 'Women',
    namePt: 'Mulheres',
    rules: [
      'Focused on empowering women entrepreneurs',
      'Open to all genders, but emphasis on women-led teams',
      'At least 50% of participants should be women'
    ],
    rulesPt: [
      'Focado em empoderar mulheres empreendedoras',
      'Aberto a todos os gêneros, mas com ênfase em equipes lideradas por mulheres',
      'Pelo menos 50% dos participantes devem ser mulheres'
    ],
    description: 'Focused on empowering women entrepreneurs and addressing gender gaps in startups.',
    descriptionPt: 'Focado em empoderar mulheres empreendedoras e reduzir a desigualdade de gênero em startups.',
    color: '#FF69B4' // Hot Pink
  },
  
  EDUCATION: {
    id: 'EDUCATION',
    nameEn: 'Education',
    namePt: 'Educação',
    rules: [
      'Business ideas must be related to education',
      'Solutions should address educational challenges',
      'Mentors should include education professionals'
    ],
    rulesPt: [
      'Ideias de negócio devem estar relacionadas à educação',
      'Soluções devem abordar desafios educacionais',
      'Mentores devem incluir profissionais de educação'
    ],
    description: 'Focused on innovation in educational technology and solving education-related problems.',
    descriptionPt: 'Focado em inovação em tecnologia educacional e solução de problemas relacionados à educação.',
    color: '#FFD700' // Gold
  },
  
  SOCIAL_INNOVATION: {
    id: 'SOCIAL_INNOVATION',
    nameEn: 'Social Innovation',
    namePt: 'Inovação Social',
    rules: [
      'Projects must have a social impact component',
      'Solutions should address social problems',
      'Business models should consider sustainability and social good'
    ],
    rulesPt: [
      'Projetos devem ter um componente de impacto social',
      'Soluções devem abordar problemas sociais',
      'Modelos de negócio devem considerar sustentabilidade e bem-estar social'
    ],
    description: 'Focused on businesses that create positive social change while being financially sustainable.',
    descriptionPt: 'Focado em negócios que criam mudança social positiva enquanto são financeiramente sustentáveis.',
    color: '#32CD32' // Lime Green
  },
  
  MAKER: {
    id: 'MAKER',
    nameEn: 'Maker',
    namePt: 'Maker',
    rules: [
      'Focus on hardware and physical product development',
      'Access to prototyping tools recommended',
      'Mentors should include hardware/manufacturing experts'
    ],
    rulesPt: [
      'Foco no desenvolvimento de hardware e produtos físicos',
      'Acesso a ferramentas de prototipagem recomendado',
      'Mentores devem incluir especialistas em hardware/manufatura'
    ],
    description: 'For creators of physical products and hardware solutions.',
    descriptionPt: 'Para criadores de produtos físicos e soluções de hardware.',
    color: '#FF8C00' // Dark Orange
  },
  
  HEALTH: {
    id: 'HEALTH',
    nameEn: 'Health',
    namePt: 'Saúde',
    rules: [
      'Projects must be related to healthcare or wellness',
      'Solutions should address health challenges',
      'Teams should consider regulatory requirements',
      'Mentors should include healthcare professionals'
    ],
    rulesPt: [
      'Projetos devem estar relacionados à saúde ou bem-estar',
      'Soluções devem abordar desafios de saúde',
      'Equipes devem considerar requisitos regulatórios',
      'Mentores devem incluir profissionais de saúde'
    ],
    description: 'Focused on healthcare innovation and improving wellness outcomes.',
    descriptionPt: 'Focado em inovação em saúde e melhoria de resultados de bem-estar.',
    color: '#FF4500' // OrangeRed
  },
  
  FINTECH: {
    id: 'FINTECH',
    nameEn: 'Fintech',
    namePt: 'Tecnologia Financeira',
    rules: [
      'Projects must be related to financial technology',
      'Solutions should address financial service challenges',
      'Teams should consider regulatory compliance',
      'Mentors should include finance professionals'
    ],
    rulesPt: [
      'Projetos devem estar relacionados à tecnologia financeira',
      'Soluções devem abordar desafios de serviços financeiros',
      'Equipes devem considerar conformidade regulatória',
      'Mentores devem incluir profissionais de finanças'
    ],
    description: 'For financial technology innovations that improve financial services.',
    descriptionPt: 'Para inovações em tecnologia financeira que melhoram serviços financeiros.',
    color: '#00CED1' // Dark Turquoise
  },
  
  SUSTAINABILITY: {
    id: 'SUSTAINABILITY',
    nameEn: 'Sustainability',
    namePt: 'Sustentabilidade',
    rules: [
      'Projects must address environmental sustainability',
      'Solutions should have measurable environmental impact',
      'Business models should align with sustainable development goals'
    ],
    rulesPt: [
      'Projetos devem abordar sustentabilidade ambiental',
      'Soluções devem ter impacto ambiental mensurável',
      'Modelos de negócio devem alinhar-se com os objetivos de desenvolvimento sustentável'
    ],
    description: 'Creating businesses that protect or improve the environment while being profitable.',
    descriptionPt: 'Criação de negócios que protegem ou melhoram o meio ambiente enquanto são lucrativos.',
    color: '#2E8B57' // Sea Green
  },
  
  AGRO_TECH: {
    id: 'AGRO_TECH',
    nameEn: 'Agro Tech',
    namePt: 'Agrotecnologia',
    rules: [
      'Projects must be related to agriculture or food production',
      'Solutions should improve agricultural efficiency or sustainability',
      'Mentors should include agricultural experts'
    ],
    rulesPt: [
      'Projetos devem estar relacionados à agricultura ou produção de alimentos',
      'Soluções devem melhorar a eficiência agrícola ou sustentabilidade',
      'Mentores devem incluir especialistas em agricultura'
    ],
    description: 'Focused on technological innovation in agriculture and food production.',
    descriptionPt: 'Focado em inovação tecnológica na agricultura e produção de alimentos.',
    color: '#8FBC8F' // Dark Sea Green
  },
  
  SMART_CITIES: {
    id: 'SMART_CITIES',
    nameEn: 'Smart Cities',
    namePt: 'Cidades Inteligentes',
    rules: [
      'Projects must address urban challenges',
      'Solutions should improve city infrastructure or services',
      'Ideas should incorporate connected technology'
    ],
    rulesPt: [
      'Projetos devem abordar desafios urbanos',
      'Soluções devem melhorar a infraestrutura ou serviços da cidade',
      'Ideias devem incorporar tecnologia conectada'
    ],
    description: 'Creating solutions for more efficient, sustainable, and livable urban environments.',
    descriptionPt: 'Criação de soluções para ambientes urbanos mais eficientes, sustentáveis e habitáveis.',
    color: '#4682B4' // Steel Blue
  },
  
  FASHION_TECH: {
    id: 'FASHION_TECH',
    nameEn: 'Fashion & Tech',
    namePt: 'Moda & Tecnologia',
    rules: [
      'Projects must bridge fashion and technology',
      'Solutions should innovate in the fashion industry',
      'Mentors should include fashion professionals'
    ],
    rulesPt: [
      'Projetos devem conectar moda e tecnologia',
      'Soluções devem inovar na indústria da moda',
      'Mentores devem incluir profissionais de moda'
    ],
    description: 'Focused on the intersection of fashion and technology.',
    descriptionPt: 'Focado na interseção entre moda e tecnologia.',
    color: '#DA70D6' // Orchid
  },
  
  FOOD: {
    id: 'FOOD',
    nameEn: 'Food',
    namePt: 'Alimentação',
    rules: [
      'Projects must be related to food service or production',
      'Solutions should address food-related challenges',
      'Teams should consider food safety regulations'
    ],
    rulesPt: [
      'Projetos devem estar relacionados a serviços de alimentação ou produção',
      'Soluções devem abordar desafios relacionados à alimentação',
      'Equipes devem considerar regulamentações de segurança alimentar'
    ],
    description: 'Creating innovations in food service, distribution, or production.',
    descriptionPt: 'Criação de inovações em serviços de alimentação, distribuição ou produção.',
    color: '#CD5C5C' // Indian Red
  },
  
  MOBILE: {
    id: 'MOBILE',
    nameEn: 'Mobile',
    namePt: 'Mobile',
    rules: [
      'Projects must be primarily mobile-based solutions',
      'Solutions should leverage mobile technology capabilities',
      'Focus on mobile user experience'
    ],
    rulesPt: [
      'Projetos devem ser principalmente soluções baseadas em dispositivos móveis',
      'Soluções devem aproveitar as capacidades da tecnologia móvel',
      'Foco na experiência do usuário móvel'
    ],
    description: 'Focused on mobile applications and services.',
    descriptionPt: 'Focado em aplicativos e serviços móveis.',
    color: '#1E90FF' // Dodger Blue
  },
  
  AI: {
    id: 'AI',
    nameEn: 'Artificial Intelligence',
    namePt: 'Inteligência Artificial',
    rules: [
      'Projects must incorporate AI or machine learning',
      'Solutions should demonstrate intelligent capabilities',
      'Teams should consider ethical AI usage',
      'Mentors should include AI experts'
    ],
    rulesPt: [
      'Projetos devem incorporar IA ou aprendizado de máquina',
      'Soluções devem demonstrar capacidades inteligentes',
      'Equipes devem considerar o uso ético de IA',
      'Mentores devem incluir especialistas em IA'
    ],
    description: 'Creating solutions powered by artificial intelligence and machine learning.',
    descriptionPt: 'Criação de soluções impulsionadas por inteligência artificial e aprendizado de máquina.',
    color: '#9932CC' // Dark Orchid
  },
  
  IOT: {
    id: 'IOT',
    nameEn: 'Internet of Things',
    namePt: 'Internet das Coisas',
    rules: [
      'Projects must incorporate connected devices',
      'Solutions should leverage device networks',
      'Teams should consider security and privacy',
      'Physical prototyping resources recommended'
    ],
    rulesPt: [
      'Projetos devem incorporar dispositivos conectados',
      'Soluções devem aproveitar redes de dispositivos',
      'Equipes devem considerar segurança e privacidade',
      'Recursos de prototipagem física recomendados'
    ],
    description: 'Focused on connected devices and internet-enabled solutions.',
    descriptionPt: 'Focado em dispositivos conectados e soluções habilitadas para internet.',
    color: '#20B2AA' // Light Sea Green
  },
  
  TRAVEL_TOURISM: {
    id: 'TRAVEL_TOURISM',
    nameEn: 'Travel & Tourism',
    namePt: 'Viagens & Turismo',
    rules: [
      'Projects must relate to travel or tourism',
      'Solutions should enhance travel experiences or operations',
      'Mentors should include travel industry professionals'
    ],
    rulesPt: [
      'Projetos devem estar relacionados a viagens ou turismo',
      'Soluções devem melhorar experiências de viagem ou operações',
      'Mentores devem incluir profissionais da indústria de viagens'
    ],
    description: 'Innovations in travel, tourism, and hospitality.',
    descriptionPt: 'Inovações em viagens, turismo e hospitalidade.',
    color: '#87CEEB' // Sky Blue
  },
  
  LATINX: {
    id: 'LATINX',
    nameEn: 'Latinx & Latinx in Tech',
    namePt: 'Latinos & Latinos em Tecnologia',
    rules: [
      'Focused on empowering Latinx entrepreneurs',
      'Open to all, but emphasis on Latinx participation',
      'At least 50% of participants should be of Latinx heritage'
    ],
    rulesPt: [
      'Focado em empoderar empreendedores latinos',
      'Aberto a todos, mas com ênfase na participação latina',
      'Pelo menos 50% dos participantes devem ser de origem latina'
    ],
    description: 'Supporting Latinx entrepreneurs in technology and startups.',
    descriptionPt: 'Apoio a empreendedores latinos em tecnologia e startups.',
    color: '#FF7F50' // Coral
  },
  
  CHANGE_MAKERS: {
    id: 'CHANGE_MAKERS',
    nameEn: 'Change Makers',
    namePt: 'Agentes de Mudança',
    rules: [
      'Projects must aim for significant social or environmental change',
      'Solutions should address systemic problems',
      'Business models should include sustainable impact metrics'
    ],
    rulesPt: [
      'Projetos devem visar mudanças sociais ou ambientais significativas',
      'Soluções devem abordar problemas sistêmicos',
      'Modelos de negócio devem incluir métricas de impacto sustentável'
    ],
    description: 'Creating businesses that drive meaningful positive change in society.',
    descriptionPt: 'Criação de negócios que impulsionam mudanças positivas significativas na sociedade.',
    color: '#9ACD32' // Yellow Green
  },
  
  E_COMMERCE: {
    id: 'E_COMMERCE',
    nameEn: 'E-Commerce',
    namePt: 'Comércio Eletrônico',
    rules: [
      'Projects must be related to online retail or digital commerce',
      'Solutions should enhance the e-commerce experience',
      'Teams should consider digital marketing strategies'
    ],
    rulesPt: [
      'Projetos devem estar relacionados ao varejo online ou comércio digital',
      'Soluções devem melhorar a experiência de e-commerce',
      'Equipes devem considerar estratégias de marketing digital'
    ],
    description: 'Innovations in online retail and digital commerce.',
    descriptionPt: 'Inovações em varejo online e comércio digital.',
    color: '#FF6347' // Tomato
  },
  
  RETAIL: {
    id: 'RETAIL',
    nameEn: 'Retail',
    namePt: 'Varejo',
    rules: [
      'Projects must relate to retail operations',
      'Solutions should enhance customer experience or retail efficiency',
      'Teams should consider physical and digital integration'
    ],
    rulesPt: [
      'Projetos devem estar relacionados a operações de varejo',
      'Soluções devem melhorar a experiência do cliente ou eficiência do varejo',
      'Equipes devem considerar integração física e digital'
    ],
    description: 'Creating innovations for the retail industry across all channels.',
    descriptionPt: 'Criação de inovações para a indústria de varejo em todos os canais.',
    color: '#FF7F50' // Coral
  },
  
  SPACE: {
    id: 'SPACE',
    nameEn: 'Space',
    namePt: 'Espaço',
    rules: [
      'Projects must relate to space technology or exploration',
      'Solutions should address challenges in space or using space technology',
      'Mentors should include space industry professionals'
    ],
    rulesPt: [
      'Projetos devem estar relacionados à tecnologia espacial ou exploração',
      'Soluções devem abordar desafios no espaço ou usando tecnologia espacial',
      'Mentores devem incluir profissionais da indústria espacial'
    ],
    description: 'Focused on innovations related to space exploration or applications of space technology.',
    descriptionPt: 'Focado em inovações relacionadas à exploração espacial ou aplicações de tecnologia espacial.',
    color: '#191970' // Midnight Blue
  },
  
  GOVERNMENT: {
    id: 'GOVERNMENT',
    nameEn: 'Government',
    namePt: 'Governo',
    rules: [
      'Projects must address government services or civic engagement',
      'Solutions should improve public services or citizen participation',
      'Teams should consider regulatory environment',
      'Mentors should include public sector professionals'
    ],
    rulesPt: [
      'Projetos devem abordar serviços governamentais ou engajamento cívico',
      'Soluções devem melhorar serviços públicos ou participação cidadã',
      'Equipes devem considerar o ambiente regulatório',
      'Mentores devem incluir profissionais do setor público'
    ],
    description: 'Creating innovations for better government services and civic engagement.',
    descriptionPt: 'Criação de inovações para melhores serviços governamentais e engajamento cívico.',
    color: '#800000' // Maroon
  },
  
  GAMING: {
    id: 'GAMING',
    nameEn: 'Gaming',
    namePt: 'Jogos',
    rules: [
      'Projects must relate to video games or gamification',
      'Solutions should enhance gaming experiences or apply game mechanics',
      'Teams should consider user engagement strategies'
    ],
    rulesPt: [
      'Projetos devem estar relacionados a videogames ou gamificação',
      'Soluções devem melhorar experiências de jogo ou aplicar mecânicas de jogo',
      'Equipes devem considerar estratégias de engajamento do usuário'
    ],
    description: 'Creating innovations in gaming or using game mechanics for other applications.',
    descriptionPt: 'Criação de inovações em jogos ou uso de mecânicas de jogo para outras aplicações.',
    color: '#9932CC' // Dark Orchid
  },
  
  SOCIAL_IMPACT: {
    id: 'SOCIAL_IMPACT',
    nameEn: 'Social Impact',
    namePt: 'Impacto Social',
    rules: [
      'Projects must aim to create positive social impact',
      'Solutions should address social challenges',
      'Business models should include impact measurement',
      'Profit should be aligned with social mission'
    ],
    rulesPt: [
      'Projetos devem visar criar impacto social positivo',
      'Soluções devem abordar desafios sociais',
      'Modelos de negócio devem incluir medição de impacto',
      'Lucro deve estar alinhado com a missão social'
    ],
    description: 'Creating businesses that prioritize positive social impact along with profits.',
    descriptionPt: 'Criação de negócios que priorizam impacto social positivo junto com lucros.',
    color: '#228B22' // Forest Green
  },
  
  SPORTS: {
    id: 'SPORTS',
    nameEn: 'Sports',
    namePt: 'Esportes',
    rules: [
      'Projects must relate to sports or physical activity',
      'Solutions should enhance athletic performance or sports experiences',
      'Teams should consider engagement with sports communities'
    ],
    rulesPt: [
      'Projetos devem estar relacionados a esportes ou atividade física',
      'Soluções devem melhorar desempenho atlético ou experiências esportivas',
      'Equipes devem considerar engajamento com comunidades esportivas'
    ],
    description: 'Creating innovations for sports, fitness, and physical activities.',
    descriptionPt: 'Criação de inovações para esportes, fitness e atividades físicas.',
    color: '#1E90FF' // Dodger Blue
  },
  
  DIVERSITY_INCLUSION: {
    id: 'DIVERSITY_INCLUSION',
    nameEn: 'Diversity & Inclusion',
    namePt: 'Diversidade & Inclusão',
    rules: [
      'Projects must promote diversity and inclusion',
      'Solutions should address barriers to equal participation',
      'Teams should represent diverse perspectives',
      'Mentors should include D&I professionals'
    ],
    rulesPt: [
      'Projetos devem promover diversidade e inclusão',
      'Soluções devem abordar barreiras à participação igualitária',
      'Equipes devem representar perspectivas diversas',
      'Mentores devem incluir profissionais de D&I'
    ],
    description: 'Creating businesses that promote diversity and inclusion in society.',
    descriptionPt: 'Criação de negócios que promovem diversidade e inclusão na sociedade.',
    color: '#FF69B4' // Hot Pink
  },
  
  MOBILITY: {
    id: 'MOBILITY',
    nameEn: 'Mobility',
    namePt: 'Mobilidade',
    rules: [
      'Projects must relate to transportation or physical movement',
      'Solutions should improve mobility efficiency or accessibility',
      'Teams should consider environmental impact'
    ],
    rulesPt: [
      'Projetos devem estar relacionados a transporte ou movimento físico',
      'Soluções devem melhorar a eficiência ou acessibilidade da mobilidade',
      'Equipes devem considerar o impacto ambiental'
    ],
    description: 'Creating innovations for transportation and moving people or goods.',
    descriptionPt: 'Criação de inovações para transporte e movimentação de pessoas ou mercadorias.',
    color: '#4682B4' // Steel Blue
  },
  
  ENERGY: {
    id: 'ENERGY',
    nameEn: 'Energy',
    namePt: 'Energia',
    rules: [
      'Projects must relate to energy production, distribution, or conservation',
      'Solutions should address energy challenges',
      'Teams should consider environmental impact',
      'Mentors should include energy professionals'
    ],
    rulesPt: [
      'Projetos devem estar relacionados à produção, distribuição ou conservação de energia',
      'Soluções devem abordar desafios energéticos',
      'Equipes devem considerar o impacto ambiental',
      'Mentores devem incluir profissionais de energia'
    ],
    description: 'Creating innovations for energy production, efficiency, and sustainability.',
    descriptionPt: 'Criação de inovações para produção, eficiência e sustentabilidade energética.',
    color: '#FF8C00' // Dark Orange
  },
  
  MUSIC: {
    id: 'MUSIC',
    nameEn: 'Music',
    namePt: 'Música',
    rules: [
      'Projects must relate to music creation, distribution, or experiences',
      'Solutions should enhance musical experiences or industry operations',
      'Teams should consider creative rights and licensing'
    ],
    rulesPt: [
      'Projetos devem estar relacionados à criação, distribuição ou experiências musicais',
      'Soluções devem melhorar experiências musicais ou operações da indústria',
      'Equipes devem considerar direitos criativos e licenciamento'
    ],
    description: 'Creating innovations for music creation, distribution, and experiences.',
    descriptionPt: 'Criação de inovações para criação, distribuição e experiências musicais.',
    color: '#8A2BE2' // Blue Violet
  }
};

// Export array of verticals for dropdown menus
export const VERTICALS_LIST = Object.values(VERTICALS);

// Function to get a vertical by ID
export const getVerticalById = (id: string): VerticalType | undefined => 
  VERTICALS[id] || undefined; 