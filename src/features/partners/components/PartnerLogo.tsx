import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { AlertTriangle, ExternalLink } from 'lucide-react';

type PartnerLogoSize = 'xs' | 'sm' | 'md' | 'lg';

type PartnerLogoProps = {
  name: string;
  logo: string;
  website?: string;
  size?: PartnerLogoSize;
  showName?: boolean;
  className?: string;
};

// Função para gerar cor de fundo baseado no nome
const getBackgroundColor = (name: string): string => {
  // Lista de cores vibrantes para os backgrounds
  const colors = [
    'bg-yellow-400', // Amarelo (PH)
    'bg-emerald-400', // Verde (PU)
    'bg-blue-400', // Azul (PF)
    'bg-pink-500', // Rosa (PV)
    'bg-orange-400', // Laranja (PC)
    'bg-purple-400', // Roxo
    'bg-indigo-400', // Índigo
    'bg-teal-400', // Teal
    'bg-lime-400', // Lime
    'bg-cyan-400', // Ciano
  ];
  
  // Hash simples baseado no nome para escolher uma cor
  const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[hash % colors.length];
};

// Função para extrair iniciais
const getInitials = (name: string): string => {
  // Se for uma prefeitura, pega a inicial do nome principal
  if (name.toLowerCase().includes('prefeitura')) {
    const parts = name.split('de ');
    if (parts.length > 1) {
      const cityName = parts[1].trim();
      // Pega as primeiras duas letras da cidade
      return cityName.slice(0, 2).toUpperCase();
    }
  }
  
  // Caso padrão: pega as iniciais da primeira e segunda palavra
  const words = name.split(' ');
  if (words.length === 1) {
    return name.slice(0, 2).toUpperCase();
  }
  
  // Pegar as iniciais das duas primeiras palavras que não sejam artigos ou preposições
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

const PartnerLogo: React.FC<PartnerLogoProps> = ({
  name,
  logo,
  website,
  size = 'md',
  showName = false,
  className = '',
}) => {
  const [imageError, setImageError] = useState(false);
  const [imagePath, setImagePath] = useState(logo);

  const handleImageError = () => {
    console.error(`Failed to load image: ${logo}`);
    setImageError(true);
    
    // Try with relative path if it's an absolute path
    if (logo.startsWith('/')) {
      const relativePath = logo.slice(1);
      console.log(`Trying relative path: ${relativePath}`);
      setImagePath(relativePath);
    }
  };

  const sizeClasses = {
    xs: 'h-12 w-full max-w-[100px]',
    sm: 'h-16 w-full max-w-[120px]',
    md: 'h-20 w-full max-w-[160px]',
    lg: 'h-24 w-full max-w-[200px]',
  };

  const logoElement = (
    <div className={cn('flex flex-col items-center', className)}>
      <div className={cn(
        'flex items-center justify-center bg-white rounded-md overflow-hidden p-2 transition-all',
        sizeClasses[size],
        website && 'hover:shadow-md'
      )}>
        {imageError ? (
          // Se a imagem falhar, mostra um placeholder com iniciais
          <div className={cn(
            'flex items-center justify-center w-full h-full rounded',
            getBackgroundColor(name)
          )}>
            <span className="text-white font-bold text-2xl">
              {getInitials(name)}
            </span>
          </div>
        ) : (
          <img
            src={imagePath}
            alt={name}
            className="max-h-full max-w-full object-contain"
            onError={handleImageError}
          />
        )}
      </div>
      {showName && (
        <div className="mt-2 text-center">
          <p className="text-sm font-medium text-slate-800 line-clamp-2 text-center">
            {name}
          </p>
          {website && (
            <span className="text-xs text-slate-500 flex items-center justify-center mt-1">
              <ExternalLink className="h-3 w-3 mr-1" />
              Visitar site
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (website) {
    return (
        <a 
          href={website} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block" 
        >
        {logoElement}
        </a>
    );
  }

  return logoElement;
};

export default PartnerLogo; 