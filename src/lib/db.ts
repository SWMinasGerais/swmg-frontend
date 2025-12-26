import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { Partner, PartnerCategory, PartnerTier } from '@/modules/partners/types';
import { faker } from '@faker-js/faker/locale/pt_BR';

// Verificar se estamos em ambiente de desenvolvimento
const isDev = import.meta.env.DEV;

// Definir esquema do banco de dados
interface ReferralDB extends DBSchema {
  partners: {
    key: number;
    value: Partner & { slug: string };
    indexes: { 'by-slug': string };
  };
  referrals: {
    key: number;
    value: {
      id: number;
      partnerId: number;
      timestamp: Date;
      ipAddress: string;
      userAgent: {
        browser: string;
        os: string;
        device: string;
      };
    };
    indexes: { 'by-partner': number, 'by-date': Date, 'by-ip': string };
  };
  rankings: {
    key: string; // 'YYYY-MM' ou 'all-time'
    value: {
      period: string;
      lastUpdated: Date;
      rankings: Array<{
        partnerId: number;
        count: number;
        position: number;
      }>;
    };
  };
}

// Função para gerar dados mockados para ambiente de desenvolvimento
const generateMockData = async (db: IDBPDatabase<ReferralDB>): Promise<void> => {
  // Verificar se já existem dados (só gera mock se não houver dados)
  const existingCount = await db.count('partners');
  if (existingCount > 0) return;
  
  console.log('🔧 Gerando dados mockados para desenvolvimento...');
  
  // Lista de categorias para os parceiros
  const categories: PartnerCategory[] = [
    'government', 'academic', 'development', 'private', 
    'hub', 'media', 'association'
  ];
  
  // Lista de tiers para os parceiros
  const tiers: PartnerTier[] = [
    'diamond', 'platinum', 'gold', 'silver', 
    'bronze', 'support', 'media'
  ];
  
  // Cidades de MG para usar nos parceiros
  const cities = [
    'Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora',
    'Betim', 'Montes Claros', 'Ribeirão das Neves', 'Uberaba',
    'Governador Valadares', 'Ipatinga', 'Sete Lagoas', 'Divinópolis',
    'Santa Luzia', 'Ibirité', 'Poços de Caldas', 'Patos de Minas',
    'Teófilo Otoni', 'Sabará', 'Varginha', 'Barbacena'
  ];
  
  // Criar parceiros mockados
  const partners: (Partner & { slug: string })[] = [];
  const partnerCount = faker.number.int({ min: 30, max: 60 });
  
  // Funções auxiliares para gerar logos realistas
  const generateLogoUrl = (name: string, category: PartnerCategory): string => {
    // Em vez de usar arquivos locais, usamos placeholders online
    // Opções: usar imagens de empresas reais via Faker ou placeholders com cores específicas
    
    if (Math.random() > 0.7) {
      // 30% chance de ser um placeholder de iniciais
      return 'placeholder';
    }
    
    // Para o restante, usamos logos de empresas reais do Faker
    const logoTypes = {
      government: () => faker.image.urlLoremFlickr({ category: 'abstract', width: 200, height: 200 }),
      academic: () => faker.image.urlLoremFlickr({ category: 'business', width: 200, height: 200 }),
      private: () => faker.image.url({ width: 200, height: 200 }),
      hub: () => faker.image.urlLoremFlickr({ category: 'technology', width: 200, height: 200 }),
      media: () => faker.image.urlLoremFlickr({ category: 'business', width: 200, height: 200 }),
      development: () => faker.image.urlLoremFlickr({ category: 'business', width: 200, height: 200 }),
      association: () => faker.image.urlLoremFlickr({ category: 'city', width: 200, height: 200 })
    };
    
    return logoTypes[category]();
  };
  
  // Função para gerar nomes de empresas realistas conforme a categoria
  const generatePartnerName = (category: PartnerCategory): string => {
    const namingPatterns = {
      government: () => {
        const city = faker.helpers.arrayElement(cities);
        return `Prefeitura de ${city}`;
      },
      academic: () => {
        const prefixes = ['Universidade', 'Instituto', 'Faculdade', 'Centro Universitário'];
        const suffix = faker.helpers.arrayElement(['Federal', 'Estadual', 'de Tecnologia', '']);
        const location = faker.helpers.arrayElement([...cities, 'Minas Gerais', 'MG', '']);
        return `${faker.helpers.arrayElement(prefixes)} ${suffix} ${location}`.trim();
      },
      private: () => faker.company.name(),
      hub: () => {
        const prefixes = ['Hub', 'Centro de Inovação', 'Parque Tecnológico', 'Aceleradora'];
        return `${faker.helpers.arrayElement(prefixes)} ${faker.company.buzzNoun()}`;
      },
      media: () => {
        const prefixes = ['Rádio', 'TV', 'Jornal', 'Portal', 'Revista'];
        return `${faker.helpers.arrayElement(prefixes)} ${faker.company.name()}`;
      },
      development: () => {
        const prefixes = ['Fundo', 'Agência', 'Banco', 'Fundação'];
        return `${faker.helpers.arrayElement(prefixes)} de Desenvolvimento de ${faker.helpers.arrayElement([...cities, 'Minas Gerais', 'MG'])}`;
      },
      association: () => {
        const prefixes = ['Associação', 'Sindicato', 'Federação', 'Conselho'];
        const industries = ['Comércio', 'Indústria', 'Tecnologia', 'Startups', 'Empresários'];
        return `${faker.helpers.arrayElement(prefixes)} ${faker.helpers.arrayElement(industries)} de ${faker.helpers.arrayElement([...cities, 'Minas Gerais', 'MG'])}`;
      }
    };
    
    return namingPatterns[category]();
  };
  
  // Distribuição balanceada de tiers por categoria
  const getTierByCategory = (category: PartnerCategory): PartnerTier => {
    const tierDistribution: Record<PartnerCategory, PartnerTier[]> = {
      government: ['diamond', 'platinum', 'gold'],
      academic: ['platinum', 'gold', 'silver'],
      development: ['gold', 'silver', 'bronze'],
      private: tiers,
      hub: ['silver', 'bronze', 'support'],
      media: ['media'],
      association: ['bronze', 'support']
    };
    
    return faker.helpers.arrayElement(tierDistribution[category]);
  };
  
  // Gerar parceiros com dados mais coerentes
  for (let i = 0; i < partnerCount; i++) {
    const category = faker.helpers.arrayElement(categories);
    const name = generatePartnerName(category);
    const tier = getTierByCategory(category);
    const slug = faker.helpers.slugify(name).toLowerCase();
    const logo = generateLogoUrl(name, category);
    const city = category === 'government' ? name.replace('Prefeitura de ', '') : faker.helpers.arrayElement(cities);
    
    partners.push({
      name,
      logo,
      website: faker.internet.url(),
      city,
      category,
      tier,
      slug
    });
  }
  
  // Adicionar parceiros ao banco
  const tx = db.transaction('partners', 'readwrite');
  for (const partner of partners) {
    await tx.store.add(partner);
  }
  await tx.done;
  
  // Gerar referências mockadas para os parceiros
  const savedPartners = await db.getAll('partners');
  const referralTx = db.transaction('referrals', 'readwrite');
  
  // Dispositivos para simular visitas
  const devices = [
    { browser: 'Chrome', os: 'Windows', device: 'Desktop' },
    { browser: 'Firefox', os: 'macOS', device: 'Desktop' },
    { browser: 'Safari', os: 'iOS', device: 'Mobile' },
    { browser: 'Chrome', os: 'Android', device: 'Mobile' },
    { browser: 'Edge', os: 'Windows', device: 'Desktop' }
  ];
  
  // Simular referências para cada parceiro
  for (const partner of savedPartners) {
    // Número de referências baseado no tier (mais alto = mais referências)
    let refCount = 10;
    if (partner.tier === 'bronze') refCount = faker.number.int({ min: 10, max: 30 });
    if (partner.tier === 'silver') refCount = faker.number.int({ min: 30, max: 50 });
    if (partner.tier === 'gold') refCount = faker.number.int({ min: 50, max: 100 });
    if (partner.tier === 'platinum') refCount = faker.number.int({ min: 100, max: 200 });
    if (partner.tier === 'diamond') refCount = faker.number.int({ min: 200, max: 400 });
    
    // Gerar referências
    for (let i = 0; i < refCount; i++) {
      const now = new Date();
      const pastDate = new Date(now);
      // Gerar datas nos últimos 90 dias
      pastDate.setDate(now.getDate() - faker.number.int({ min: 0, max: 90 }));
      
      const device = faker.helpers.arrayElement(devices);
      
      await referralTx.store.add({
        id: 0, // Auto-incrementado
        partnerId: partner.id as number,
        timestamp: pastDate,
        ipAddress: faker.internet.ip(),
        userAgent: device
      });
    }
  }
  
  await referralTx.done;
  
  // Atualizar rankings
  const dbAPI = db as unknown as typeof dbObj;
  await dbAPI.updateRankings();
  
  console.log(`✅ ${partnerCount} parceiros e referências mockadas geradas com sucesso!`);
};

// Inicializar o banco de dados
const initDB = async (): Promise<IDBPDatabase<ReferralDB>> => {
  const db = await openDB<ReferralDB>('partner-referrals', 1, {
    upgrade(db) {
      // Parceiros
      const partnerStore = db.createObjectStore('partners', { 
        keyPath: 'id', 
        autoIncrement: true 
      });
      partnerStore.createIndex('by-slug', 'slug', { unique: true });
      
      // Referências
      const referralStore = db.createObjectStore('referrals', {
        keyPath: 'id',
        autoIncrement: true
      });
      referralStore.createIndex('by-partner', 'partnerId');
      referralStore.createIndex('by-date', 'timestamp');
      referralStore.createIndex('by-ip', 'ipAddress');
      
      // Rankings
      db.createObjectStore('rankings', { keyPath: 'period' });
    }
  });
  
  // Se estamos em desenvolvimento, gerar dados mockados
  if (isDev) {
    await generateMockData(db);
  }
  
  return db;
};

// Função singleton para garantir uma única instância do DB
let dbPromise: Promise<IDBPDatabase<ReferralDB>> | null = null;

const getDB = (): Promise<IDBPDatabase<ReferralDB>> => {
  if (!dbPromise) {
    dbPromise = initDB();
  }
  return dbPromise;
};

// Interface de dados para o registro de referências
interface ReferralRecord {
  partnerId: number;
  timestamp: Date;
  ipAddress: string;
  userAgent: {
    browser: string;
    os: string;
    device: string;
  };
}

// API do banco de dados
export const db = {
  // Adicionar getDB para permitir acesso interno
  getDB,
  
  // Métodos para parceiros
  async getPartnerBySlug(slug: string): Promise<(Partner & { id: number }) | undefined> {
    const db = await getDB();
    const tx = db.transaction('partners', 'readonly');
    const index = tx.store.index('by-slug');
    const result = await index.get(slug);
    return result ? { ...result, id: result.id } : undefined;
  },
  
  async addPartner(partner: Partner, slug: string): Promise<number> {
    const db = await getDB();
    return db.add('partners', { ...partner, slug });
  },
  
  async updatePartner(id: number, partner: Partial<Partner>): Promise<void> {
    const db = await getDB();
    const tx = db.transaction('partners', 'readwrite');
    const store = tx.objectStore('partners');
    
    const existingPartner = await store.get(id);
    if (!existingPartner) {
      throw new Error(`Parceiro com ID ${id} não encontrado`);
    }
    
    const updatedPartner = { ...existingPartner, ...partner };
    await store.put(updatedPartner);
    await tx.done;
  },
  
  // Métodos para referências
  async recordPartnerReferral(record: ReferralRecord): Promise<void> {
    const db = await getDB();
    
    // Verifica se já existe um registro recente do mesmo IP para o mesmo parceiro
    const tx = db.transaction('referrals', 'readonly');
    const ipIndex = tx.store.index('by-ip');
    const partnerIndex = tx.store.index('by-partner');
    
    // Buscar referências recentes do mesmo IP (últimas 24h)
    const now = new Date();
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    
    // Verificar registros pelo mesmo IP
    const recentReferrals = await ipIndex.getAll(record.ipAddress);
    const isDuplicate = recentReferrals.some(ref => 
      ref.partnerId === record.partnerId && 
      ref.timestamp > yesterday
    );
    
    if (!isDuplicate) {
      // Se não for um registro duplicado, adiciona ao banco
      await db.add('referrals', { ...record, id: 0 });
      
      // Atualiza os rankings
      await this.updateRankings();
    }
  },
  
  async getReferralsByPartner(partnerId: number): Promise<ReferralRecord[]> {
    const db = await getDB();
    const tx = db.transaction('referrals', 'readonly');
    const index = tx.store.index('by-partner');
    return index.getAll(partnerId);
  },
  
  async getReferralCountByPartner(partnerId: number, period?: { start: Date, end: Date }): Promise<number> {
    const db = await getDB();
    const tx = db.transaction('referrals', 'readonly');
    const index = tx.store.index('by-partner');
    const referrals = await index.getAll(partnerId);
    
    if (!period) {
      return referrals.length;
    }
    
    return referrals.filter(ref => 
      ref.timestamp >= period.start && 
      ref.timestamp <= period.end
    ).length;
  },
  
  // Métodos para rankings
  async updateRankings(): Promise<void> {
    const db = await getDB();
    const tx = db.transaction(['referrals', 'partners', 'rankings'], 'readwrite');
    
    // Buscar todos os parceiros
    const partners = await tx.objectStore('partners').getAll();
    
    // Buscar todas as referências
    const referrals = await tx.objectStore('referrals').getAll();
    
    // Calcular ranking geral
    const allTimeRanking = this.calculateRanking(partners, referrals);
    
    // Calcular ranking do mês atual
    const now = new Date();
    const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    
    const currentMonthReferrals = referrals.filter(ref => 
      ref.timestamp >= firstDayOfMonth && 
      ref.timestamp <= lastDayOfMonth
    );
    
    const monthlyRanking = this.calculateRanking(partners, currentMonthReferrals);
    
    // Atualizar no banco de dados
    await tx.objectStore('rankings').put({
      period: 'all-time',
      lastUpdated: now,
      rankings: allTimeRanking
    });
    
    await tx.objectStore('rankings').put({
      period: currentMonth,
      lastUpdated: now,
      rankings: monthlyRanking
    });
    
    await tx.done;
  },
  
  calculateRanking(
    partners: Array<Partner & { id: number }>, 
    referrals: Array<ReferralRecord & { id: number }>
  ) {
    // Contagem por parceiro
    const counts = new Map<number, number>();
    
    for (const referral of referrals) {
      const current = counts.get(referral.partnerId) || 0;
      counts.set(referral.partnerId, current + 1);
    }
    
    // Transformar em array de ranking
    const ranking = partners
      .filter(partner => {
        // Filtrar empresas privadas do ranking
        if (partner.category === 'private') return false;
        
        // Verificar mínimo de referências
        const count = counts.get(partner.id) || 0;
        return count >= 10;
      })
      .map(partner => ({
        partnerId: partner.id,
        count: counts.get(partner.id) || 0,
        position: 0 // Será preenchido abaixo
      }))
      .sort((a, b) => b.count - a.count);
    
    // Atribuir posições
    ranking.forEach((item, index) => {
      item.position = index + 1;
    });
    
    return ranking;
  },
  
  async getRanking(period: string = 'all-time'): Promise<{
    partnerId: number;
    partnerName: string;
    partnerCategory: PartnerCategory;
    count: number;
    position: number;
  }[]> {
    const db = await getDB();
    const tx = db.transaction(['rankings', 'partners'], 'readonly');
    
    const rankingData = await tx.objectStore('rankings').get(period);
    if (!rankingData) {
      return [];
    }
    
    // Buscar informações dos parceiros
    const partners = await tx.objectStore('partners').getAll();
    const partnersMap = new Map(partners.map(p => [p.id, p]));
    
    // Combinar dados
    return rankingData.rankings.map(rank => {
      const partner = partnersMap.get(rank.partnerId);
      return {
        partnerId: rank.partnerId,
        partnerName: partner?.name || 'Desconhecido',
        partnerCategory: partner?.category || 'hub',
        count: rank.count,
        position: rank.position
      };
    });
  },
  
  async getPartnerShareData(partnerId: number): Promise<{
    url: string;
    totalReferrals: number;
    currentMonthReferrals: number;
    allTimeRank: number | null;
    monthlyRank: number | null;
  }> {
    const db = await getDB();
    const tx = db.transaction(['partners', 'referrals', 'rankings'], 'readonly');
    
    // Buscar parceiro
    const partner = await tx.objectStore('partners').get(partnerId);
    if (!partner) {
      throw new Error(`Parceiro com ID ${partnerId} não encontrado`);
    }
    
    // Calcular estatísticas
    const referrals = await tx.objectStore('referrals').index('by-partner').getAll(partnerId);
    const totalReferrals = referrals.length;
    
    // Referências do mês atual
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const currentMonthReferrals = referrals.filter(ref => ref.timestamp >= firstDayOfMonth).length;
    
    // Rankings
    const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    const allTimeRanking = await tx.objectStore('rankings').get('all-time');
    const monthlyRanking = await tx.objectStore('rankings').get(currentMonth);
    
    // Encontrar posição nos rankings
    const findPosition = (rankings: { rankings: { partnerId: number; position: number }[] }, id: number): number | null => {
      if (!rankings || !rankings.rankings) return null;
      
      const entry = rankings.rankings.find((r: { partnerId: number; position: number }) => r.partnerId === id);
      return entry ? entry.position : null;
    };
    
    const allTimeRank = findPosition(allTimeRanking, partnerId);
    const monthlyRank = findPosition(monthlyRanking, partnerId);
    
    // Montar URL de compartilhamento
    const url = `https://startup.techstore.mg.gov.br/${partner.slug}`;
    
    return {
      url,
      totalReferrals,
      currentMonthReferrals,
      allTimeRank,
      monthlyRank
    };
  },

  /**
   * Obter parceiros que foram promovidos recentemente
   * @returns Array de IDs de parceiros promovidos
   */
  async getPromotedPartners(): Promise<number[]> {
    try {
      // Verificar se o DB está pronto
      await this.getDB();
      
      // Na versão final, aqui deve ser implementada a lógica para verificar quais
      // parceiros foram promovidos (ex: subindo de tier) baseado nas métricas
      // mensais e regras de negócio específicas
      
      // Por enquanto, usando dados de teste
      // Em produção, esta função deve verificar os rankings mensais anteriores
      // e determinar quais parceiros governamentais/acadêmicos melhoraram o suficiente
      // para serem promovidos
      
      const now = new Date();
      const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
      
      // Buscar o ranking do mês atual
      const db = await this.getDB();
      const monthlyRanking = await db.getAll('rankings', [currentMonth]) || [];
      
      // Simular promoções com base em regras (por exemplo, top 3 parceiros não-privados 
      // com mais de 20 acessos são promovidos)
      const promoted = monthlyRanking
        .filter(rank => 
          rank.partnerCategory !== 'private' && 
          rank.position <= 3 && 
          rank.count >= 20
        )
        .map(rank => rank.partnerId);
      
      return promoted;
    } catch (error) {
      console.error('Erro ao buscar parceiros promovidos:', error);
      return [];
    }
  }
};

// Referência para usar dentro da função generateMockData
const dbObj = db; 