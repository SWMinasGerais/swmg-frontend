import { getInitials, getLogoBackground, isStatePartner } from './utils';
import { getMockStats, getPartnerDescription } from './mocks';
import { Partner } from './types';

/**
 * Testes para funções de utilidades
 */
describe('Partner Utils', () => {
  // Teste para getInitials
  test('getInitials deve retornar iniciais corretas', () => {
    expect(getInitials('Estado de Minas')).toBe('EM');
    expect(getInitials('Rádio Itatiaia')).toBe('RI');
    expect(getInitials('Rede Minas')).toBe('RM');
    expect(getInitials('Prefeitura de Belo Horizonte')).toBe('PH');
    expect(getInitials('Universidade Federal de Minas Gerais')).toBe('UF');
    expect(getInitials('SEBRAE')).toBe('SE');
  });

  // Teste para getLogoBackground
  test('getLogoBackground deve retornar classes CSS corretas', () => {
    const partner1: Partner = { name: 'Estado de Minas', logo: '', category: 'media' };
    const partner2: Partner = { name: 'Rádio Itatiaia', logo: '', category: 'media' };
    const partner3: Partner = { name: 'UFMG', logo: '', category: 'academic', tier: 'gold' };
    
    expect(getLogoBackground(partner1)).toBe('bg-green-400');
    expect(getLogoBackground(partner2)).toBe('bg-teal-800');
    expect(getLogoBackground(partner3)).toContain('bg-');
  });

  // Teste para isStatePartner
  test('isStatePartner deve identificar parceiros estaduais corretamente', () => {
    const statePartner: Partner = { 
      name: 'Governo de Minas Gerais', 
      logo: '', 
      category: 'government',
      website: 'https://mg.gov.br'
    };
    
    const municipalPartner: Partner = { 
      name: 'Prefeitura de Belo Horizonte', 
      logo: '', 
      category: 'government',
      city: 'Belo Horizonte'
    };
    
    const privatePartner: Partner = { 
      name: 'Empresa S/A', 
      logo: '', 
      category: 'private'
    };
    
    expect(isStatePartner(statePartner)).toBe(true);
    expect(isStatePartner(municipalPartner)).toBe(false);
    expect(isStatePartner(privatePartner)).toBe(false);
  });
});

/**
 * Testes para funções de mock
 */
describe('Partner Mocks', () => {
  // Teste para getMockStats
  test('getMockStats deve gerar estatísticas consistentes', () => {
    const partner: Partner = { 
      id: 100, 
      name: 'Parceiro de Teste', 
      logo: '', 
      category: 'private',
      tier: 'gold' 
    };
    
    const stats = getMockStats(partner);
    
    expect(stats.views).toBeGreaterThan(0);
    expect(stats.ranking.category).toBeGreaterThan(0);
    expect(stats.ranking.general).toBeGreaterThan(0);
    
    // Verificar se valores são consistentes se chamados novamente
    const stats2 = getMockStats(partner);
    expect(stats).toEqual(stats2);
    
    // Verificar se o modo "este mês" gera valores diferentes
    const thisMonthStats = getMockStats(partner, true);
    expect(thisMonthStats.views).not.toEqual(stats.views);
  });
  
  // Teste para getPartnerDescription
  test('getPartnerDescription deve gerar descrições apropriadas', () => {
    const diamondPartner: Partner = { 
      name: 'Parceiro Diamante', 
      logo: '', 
      category: 'government',
      tier: 'diamond' 
    };
    
    const silverPartner: Partner = { 
      name: 'Parceiro Prata', 
      logo: '', 
      category: 'private',
      tier: 'silver' 
    };
    
    const mediaPartner: Partner = { 
      name: 'Parceiro Mídia', 
      logo: '', 
      category: 'media',
      tier: 'media' 
    };
    
    const description1 = getPartnerDescription(diamondPartner);
    const description2 = getPartnerDescription(silverPartner);
    const description3 = getPartnerDescription(mediaPartner);
    
    expect(description1).toContain('Parceiro Diamante');
    expect(description1).toContain('parceiro diamante');
    expect(description1).toContain('setor governamental');
    
    expect(description2).toContain('Parceiro Prata');
    expect(description2).toContain('parceiro prata');
    expect(description2).toContain('setor privado');
    
    expect(description3).toContain('Parceiro Mídia');
    expect(description3).toContain('parceiro de mídia');
  });
});
