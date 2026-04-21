import { Partner, PartnerTier } from './types';

/**
 * Gera estatísticas de visualização mockadas para parceiros
 */
export const getMockStats = (partner: Partner, isThisMonth: boolean = false) => {
  // Variação randômica baseada no ID do parceiro para consistência
  const baseId = partner.id || 100;
  const seed = baseId * (isThisMonth ? 0.4 : 1);
  
  // Base de visualizações dependendo do tier
  let baseViews = 10;
  if (partner.tier === 'diamond') baseViews = 50;
  if (partner.tier === 'platinum') baseViews = 40;
  if (partner.tier === 'gold') baseViews = 30;
  if (partner.tier === 'silver') baseViews = 20;
  
  // Gera números consistentes mas com alguma variação
  const views = Math.max(5, Math.round(baseViews + (seed % 30)));
  
  return {
    views,
    ranking: { 
      category: Math.floor((seed % 5) + 1),
      general: Math.floor((seed % 20) + 1) 
    }
  };
};

/**
 * Gera uma descrição mockada para o parceiro baseada na categoria e tier
 */
export const getPartnerDescription = (partner: Partner): string => {
  const tierText: Record<PartnerTier, string> = {
    diamond: 'parceiro diamante',
    platinum: 'parceiro platina',
    gold: 'parceiro ouro',
    silver: 'parceiro prata',
    bronze: 'parceiro bronze',
    support: 'parceiro apoiador',
    media: 'parceiro de mídia'
  };
  
  const categoryText: Record<string, string> = {
    government: 'setor governamental',
    academic: 'setor acadêmico',
    development: 'desenvolvimento econômico',
    private: 'setor privado',
    hub: 'hub de inovação',
    media: 'veículo de mídia',
    association: 'associação'
  };
  
  // Para tier diamante e platinum, descrição mais elaborada
  if (partner.tier === 'diamond' || partner.tier === 'platinum') {
    return `${partner.name} é um importante ${tierText[partner.tier]} do ${categoryText[partner.category]} que investe em inovação e tecnologia para o desenvolvimento regional.`;
  }
  
  // Para gold e silver, descrição média
  if (partner.tier === 'gold' || partner.tier === 'silver') {
    return `${partner.name} é um ${tierText[partner.tier]} do ${categoryText[partner.category]} que apoia o ecossistema de inovação.`;
  }
  
  // Para bronze e outros, descrição simples
  if (partner.tier === 'bronze') {
    return `${partner.name} é um ${tierText[partner.tier]} que contribui com o desenvolvimento regional.`;
  }
  
  // Para media e support
  return `${partner.name} é um importante ${tierText[partner.tier] || 'parceiro'} do programa.`;
};
