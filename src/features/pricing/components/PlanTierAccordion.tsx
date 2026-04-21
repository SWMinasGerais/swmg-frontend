import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp, Diamond, Award, Medal, ArrowRight } from 'lucide-react';
import FeatureList from './FeatureList';

type TierType = 'diamond' | 'gold' | 'silver' | 'bronze';

type TierFeature = {
  text: string;
  included: boolean;
  highlighted?: boolean;
  upgrade?: boolean;
};

type PlanTierAccordionProps = {
  className?: string;
};

/**
 * PlanTierAccordion component for displaying differences between tiers
 */
const PlanTierAccordion: React.FC<PlanTierAccordionProps> = ({ className }) => {
  const [openTier, setOpenTier] = useState<TierType | null>('diamond');
  const [showComparison, setShowComparison] = useState(false);

  const toggleTier = (tier: TierType) => {
    setOpenTier(openTier === tier ? null : tier);
  };

  // Definir as features para cada tier
  const tierFeatures: Record<TierType, TierFeature[]> = {
    diamond: [
      { text: 'Logo em destaque no site do evento (seção principal)', included: true, highlighted: true },
      { text: 'Stand premium (4x4m) em localização exclusiva', included: true, highlighted: true },
      { text: 'Naming rights do palco principal ("Palco Empresa X")', included: true, upgrade: true },
      { text: 'Discurso de abertura do evento (5 min)', included: true, upgrade: true },
      { text: 'Workshop exclusivo com sua marca (45 min)', included: true, upgrade: true },
      { text: 'Acesso VIP para 10 pessoas da empresa', included: true },
      { text: 'Logo em todos os materiais de divulgação (impresso e digital)', included: true },
      { text: 'Menção em todas as comunicações oficiais do evento', included: true },
      { text: 'Acesso exclusivo aos projetos finalistas antes da apresentação', included: true },
      { text: 'Participação garantida na banca julgadora final', included: true },
      { text: 'Conteúdo exclusivo nas redes sociais do evento', included: true },
      { text: 'Distribuição de brindes exclusivos durante o evento', included: true },
      { text: 'Entrevista em vídeo com CEO/representante da empresa', included: true },
      { text: 'Direito de primeiro contato com startups finalistas', included: true, upgrade: true },
      { text: 'Menção especial nas cerimônias de abertura e encerramento', included: true },
    ],
    gold: [
      { text: 'Logo em destaque no site do evento (seção principal)', included: true, highlighted: true },
      { text: 'Stand premium (3x3m) em localização privilegiada', included: true },
      { text: 'Naming rights do palco secundário', included: true, upgrade: true },
      { text: 'Workshop exclusivo com sua marca (30 min)', included: true },
      { text: 'Acesso VIP para 5 pessoas da empresa', included: true },
      { text: 'Logo em todos os materiais de divulgação (impresso e digital)', included: true },
      { text: 'Menção em todas as comunicações oficiais do evento', included: true },
      { text: 'Participação na banca julgadora de seleção', included: true },
      { text: 'Post dedicado nas redes sociais do evento', included: true },
      { text: 'Distribuição de brindes durante o evento', included: true },
      { text: 'Menção na cerimônia de encerramento', included: true },
      { text: 'Acesso a pitches das startups finalistas', included: true },
      { text: 'Discurso de abertura do evento', included: false },
      { text: 'Entrevista em vídeo com CEO/representante', included: false },
      { text: 'Direito de primeiro contato com startups finalistas', included: false },
    ],
    silver: [
      { text: 'Logo no site do evento (seção de patrocinadores)', included: true },
      { text: 'Stand padrão (2x2m)', included: true },
      { text: 'Acesso VIP para 3 pessoas da empresa', included: true },
      { text: 'Logo nos materiais digitais de divulgação', included: true },
      { text: 'Menção nas comunicações digitais do evento', included: true },
      { text: 'Distribuição de material impresso durante o evento', included: true },
      { text: 'Participação nos eventos de networking', included: true },
      { text: 'Menção nas redes sociais', included: true },
      { text: 'Acesso aos pitches finais das startups', included: true },
      { text: 'Workshop exclusivo com sua marca', included: false },
      { text: 'Naming rights', included: false },
      { text: 'Participação na banca julgadora', included: false },
      { text: 'Logo em materiais impressos', included: false },
    ],
    bronze: [
      { text: 'Logo no site do evento (seção de apoiadores)', included: true },
      { text: 'Stand básico compartilhado (2x1m)', included: true },
      { text: 'Acesso VIP para 1 pessoa da empresa', included: true },
      { text: 'Menção nas redes sociais do evento', included: true },
      { text: 'Material na pasta dos participantes', included: true },
      { text: 'Participação nos eventos de networking', included: true },
      { text: 'Acesso às apresentações finais', included: true },
      { text: 'Logo nos materiais digitais', included: false },
      { text: 'Stand exclusivo', included: false },
      { text: 'Workshop ou palestra', included: false },
      { text: 'Participação em bancas', included: false },
    ],
  };

  const tierColors: Record<TierType, string> = {
    diamond: 'bg-gradient-to-r from-cyan-50 to-purple-50 border-purple-200 hover:border-purple-300',
    gold: 'bg-amber-50 border-amber-200 hover:border-amber-300',
    silver: 'bg-slate-50 border-slate-200 hover:border-slate-300',
    bronze: 'bg-orange-50 border-orange-200 hover:border-orange-300',
  };

  const tierIcons: Record<TierType, React.ReactNode> = {
    diamond: <Diamond className="h-5 w-5 text-purple-500" />,
    gold: <Award className="h-5 w-5 text-amber-500" />,
    silver: <Medal className="h-5 w-5 text-slate-500" />,
    bronze: <Medal className="h-5 w-5 text-orange-500" />,
  };

  const tierTitles: Record<TierType, string> = {
    diamond: 'Diamond',
    gold: 'Gold',
    silver: 'Silver',
    bronze: 'Bronze',
  };

  const tierDescriptions: Record<TierType, string> = {
    diamond: 'Patrocínio premium com máxima visibilidade e benefícios exclusivos',
    gold: 'Alto impacto e presença de destaque no evento',
    silver: 'Boa visibilidade com benefícios importantes',
    bronze: 'Opção de entrada para apoiadores',
  };

  const tierIdealFor: Record<TierType, string> = {
    diamond: 'Grandes empresas e corporações que buscam protagonismo no ecossistema de inovação',
    gold: 'Empresas de médio a grande porte que buscam visibilidade significativa no evento',
    silver: 'Empresas de médio porte interessadas em ter boa presença no evento',
    bronze: 'Pequenas empresas e startups que desejam apoiar o ecossistema',
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex flex-wrap justify-end mb-1 items-center">
        <button 
          onClick={() => setShowComparison(!showComparison)}
          className="text-xs font-medium flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          {showComparison ? "Ver categorias individuais" : "Ver comparativo completo"}
          <ArrowRight className="h-3 w-3 ml-1" />
        </button>
      </div>
      
      {showComparison ? (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="p-2 text-left border-b-2 bg-gray-50">Recurso</th>
                {Object.keys(tierFeatures).map((tier) => (
                  <th 
                    key={tier} 
                    className={cn(
                      "p-2 text-center border-b-2 font-medium",
                      tier === 'diamond' ? 'bg-purple-50' : 
                      tier === 'gold' ? 'bg-amber-50' : 
                      tier === 'silver' ? 'bg-slate-50' : 'bg-orange-50'
                    )}
                  >
                    <div className="flex items-center justify-center mb-1">
                      {tierIcons[tier as TierType]}
                      <span className="ml-1">{tierTitles[tier as TierType]}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Combine all features from all tiers */}
              {Array.from(new Set(
                Object.values(tierFeatures).flatMap(features => 
                  features.map(feature => feature.text)
                )
              )).map((featureText, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-2 border-b">{featureText}</td>
                  {Object.keys(tierFeatures).map((tier) => {
                    const feature = tierFeatures[tier as TierType].find(f => f.text === featureText);
                    return (
                      <td key={`${tier}-${index}`} className="p-2 text-center border-b">
                        {feature?.included ? (
                          feature.upgrade ? (
                            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-purple-100">
                              <Diamond className="h-3 w-3 text-purple-500" />
                            </span>
                          ) : feature.highlighted ? (
                            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-amber-100">
                              <Award className="h-3 w-3 text-amber-500" />
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100">
                              <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                          )
                        ) : (
                          <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-gray-100">
                            <svg className="h-3 w-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          {Object.keys(tierFeatures).map((tier) => (
            <div 
              key={tier} 
              className={cn(
                "border rounded-lg overflow-hidden transition-all duration-200",
                tierColors[tier as TierType]
              )}
            >
              <button
                className="w-full px-4 py-3 flex items-center justify-between"
                onClick={() => toggleTier(tier as TierType)}
                aria-expanded={openTier === tier}
              >
                <div className="flex items-center gap-2">
                  {tierIcons[tier as TierType]}
                  <div className="text-left">
                    <h3 className="text-base font-semibold">{tierTitles[tier as TierType]}</h3>
                    <p className="text-xs text-gray-600">{tierDescriptions[tier as TierType]}</p>
                  </div>
                </div>
                {openTier === tier ? 
                  <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                }
              </button>
              
              {openTier === tier && (
                <div className="px-4 py-3 border-t border-gray-200 bg-white">
                  <div className="mb-3 pb-3 border-b border-gray-100">
                    <h4 className="text-xs font-semibold text-gray-700 uppercase mb-1">Ideal para:</h4>
                    <p className="text-sm text-gray-600">{tierIdealFor[tier as TierType]}</p>
                  </div>
                  <h4 className="text-xs font-semibold text-gray-700 uppercase mb-2">Benefícios incluídos:</h4>
                  <FeatureList features={tierFeatures[tier as TierType]} />
                  <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                    <p className="text-xs text-gray-500 italic">
                      * Os valores são customizados para cada empresa. Entre em contato para mais informações.
                    </p>
                    <button className="text-xs font-medium text-indigo-600 hover:text-indigo-800">
                      Solicitar proposta
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </>
      )}
      
      {/* Legenda */}
      <div className="flex flex-wrap gap-4 mt-2 justify-center text-xs text-gray-600 bg-gray-50 p-3 rounded-lg">
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-purple-100 mr-1">
            <Diamond className="h-3 w-3 text-purple-500" />
          </span>
          <span>Benefício exclusivo do tier</span>
        </div>
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-amber-100 mr-1">
            <Award className="h-3 w-3 text-amber-500" />
          </span>
          <span>Benefício destacado</span>
        </div>
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 mr-1">
            <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </span>
          <span>Incluído</span>
        </div>
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-gray-100 mr-1">
            <svg className="h-3 w-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
          <span>Não incluído</span>
        </div>
      </div>
    </div>
  );
};

export default PlanTierAccordion; 