import { Partner } from './types';

/**
 * Função para extrair iniciais do nome de um parceiro
 */
export const getInitials = (name: string): string => {
  if (name.toLowerCase().includes('prefeitura')) {
    const parts = name.split('de ');
    if (parts.length > 1) {
      const cityName = parts[1].trim();
      // Para Belo Horizonte, usar "PH" como na imagem
      if (cityName.toLowerCase() === 'belo horizonte') {
        return 'PH';
      }
      return cityName.slice(0, 2).toUpperCase();
    }
  }
  
  // Para nomes como "Estado de Minas", pegar "EM"
  if (name.toLowerCase().includes('estado de minas')) {
    return 'EM';
  }
  
  // Outros casos específicos baseados na imagem
  if (name.toLowerCase().includes('rádio itatiaia')) {
    return 'RI';
  }
  if (name.toLowerCase().includes('rede minas')) {
    return 'RM';
  }
  if (name.toLowerCase().includes('alterosa')) {
    return 'AL';
  }
  if (name.toLowerCase().includes('tv integração')) {
    return 'TI';
  }
  if (name.toLowerCase().includes('tribuna de minas')) {
    return 'TM';
  }
  if (name.toLowerCase().includes('gazeta norte')) {
    return 'GM';
  }
  if (name.toLowerCase().includes('tv vale')) {
    return 'TA';
  }
  
  const words = name.split(' ');
  if (words.length === 1) return name.slice(0, 2).toUpperCase();
  
  const skipWords = ['de', 'da', 'do', 'dos', 'das', 'e', 'a', 'o', 'as', 'os'];
  const filteredWords = words.filter(word => !skipWords.includes(word.toLowerCase()));
  
  if (filteredWords.length >= 2) {
    return (filteredWords[0][0] + filteredWords[1][0]).toUpperCase();
  } else if (filteredWords.length === 1) {
    return filteredWords[0].slice(0, 2).toUpperCase();
  } else {
    return words[0].slice(0, 2).toUpperCase();
  }
};

/**
 * Função para gerar cor de background com base no nome e categoria
 */
export const getLogoBackground = (partner: Partner): string => {
  // Cores específicas baseadas na imagem compartilhada
  if (partner.name.toLowerCase().includes('estado de minas')) {
    return 'bg-green-400';
  }
  if (partner.name.toLowerCase().includes('rádio itatiaia')) {
    return 'bg-teal-800';
  }
  if (partner.name.toLowerCase().includes('rede minas')) {
    return 'bg-purple-600';
  }
  if (partner.name.toLowerCase().includes('alterosa')) {
    return 'bg-pink-700';
  }
  if (partner.name.toLowerCase().includes('tv integração')) {
    return 'bg-red-50';
  }
  if (partner.name.toLowerCase().includes('tribuna de minas')) {
    return 'bg-lime-400';
  }
  if (partner.name.toLowerCase().includes('gazeta norte')) {
    return 'bg-amber-800';
  }
  if (partner.name.toLowerCase().includes('tv vale')) {
    return 'bg-blue-50';
  }
  
  // Prefeitura de Belo Horizonte tem cor específica
  if (partner.name.includes('Prefeitura') && partner.name.includes('Belo Horizonte')) {
    return 'bg-yellow-400';
  }
  
  // Para cada categoria, uma cor predominante diferente
  const categoryColors: Record<string, string[]> = {
    government: ['bg-blue-400', 'bg-blue-500', 'bg-indigo-400'],
    academic: ['bg-purple-400', 'bg-purple-500', 'bg-violet-400'],
    development: ['bg-green-400', 'bg-emerald-500', 'bg-teal-400'],
    private: ['bg-slate-400', 'bg-gray-500', 'bg-zinc-400'],
    hub: ['bg-cyan-400', 'bg-cyan-500', 'bg-sky-400'],
    media: ['bg-orange-400', 'bg-amber-500', 'bg-yellow-400'],
    association: ['bg-pink-400', 'bg-rose-500', 'bg-fuchsia-400']
  };
  
  // Cores específicas por tier para consistência
  if (partner.tier) {
    if (partner.tier === 'diamond') return 'bg-indigo-400';
    if (partner.tier === 'platinum') return 'bg-slate-400';
    if (partner.tier === 'gold') return 'bg-amber-400';
    if (partner.tier === 'silver') return 'bg-slate-300';
  }
  
  const colors = categoryColors[partner.category] || ['bg-gray-400'];
  const hash = partner.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[hash % colors.length];
};

/**
 * Verificar se um parceiro é estadual
 */
export const isStatePartner = (partner: Partner): boolean => {
  if (partner.category === 'government') {
    const name = partner.name.toLowerCase();
    return (
      name.includes('estado') || 
      name.includes('minas gerais') || 
      name.includes('estadual') ||
      name.includes('secretaria') ||
      name.includes('mg.gov.br')
    );
  }
  return false;
};
