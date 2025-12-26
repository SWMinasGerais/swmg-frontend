import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '@/lib/db';
import { UAParser } from 'ua-parser-js';

/**
 * Hook para lidar com redirecionamentos de parceiros e tracking
 */
export const usePartnerRedirect = () => {
  const { partnerId } = useParams<{ partnerId: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Processa o redirecionamento com base no ID do parceiro
  useEffect(() => {
    const processRedirect = async () => {
      if (!partnerId) {
        setError('ID do parceiro não fornecido');
        setLoading(false);
        return;
      }

      try {
        // Buscar dados do parceiro do banco de dados
        const partner = await db.getPartnerBySlug(partnerId);
        
        if (!partner) {
          setError('Parceiro não encontrado');
          setLoading(false);
          navigate('/', { replace: true });
          return;
        }

        // Obter informações do navegador e SO
        const parser = new UAParser();
        const result = parser.getResult();
        const userAgent = {
          browser: `${result.browser.name || 'Unknown'} ${result.browser.version || ''}`,
          os: `${result.os.name || 'Unknown'} ${result.os.version || ''}`,
          device: result.device.type || 'desktop'
        };

        // Obter endereço IP do visitante (em produção seria via API)
        // Aqui estamos simulando, mas em produção isso viria de um serviço
        const getIpAddress = async () => {
          // Em produção, usaríamos um serviço como:
          // const response = await fetch('https://api.ipify.org?format=json');
          // const data = await response.json();
          // return data.ip;
          
          return '127.0.0.1'; // IP simulado para desenvolvimento
        };

        const ip = await getIpAddress();
        
        // Registrar a visita no banco de dados
        await db.recordPartnerReferral({
          partnerId: partner.id,
          timestamp: new Date(),
          ipAddress: ip,
          userAgent: userAgent
        });

        // Construir parâmetros UTM para o redirecionamento
        const utmParams = new URLSearchParams({
          utm_source: partnerId,
          utm_medium: 'referral',
          utm_campaign: 'partner_share',
          utm_content: partner.name || partnerId
        });

        // Redirecionar para a página inicial com os parâmetros UTM
        navigate(`/?${utmParams.toString()}`, { replace: true });
      } catch (err) {
        console.error('Erro ao processar redirecionamento:', err);
        setError('Erro ao processar redirecionamento');
        navigate('/', { replace: true });
      } finally {
        setLoading(false);
      }
    };

    processRedirect();
  }, [partnerId, navigate]);

  return {
    loading,
    error,
    processRedirect: () => {} // Método vazio, pois o processamento já é feito no useEffect
  };
}; 