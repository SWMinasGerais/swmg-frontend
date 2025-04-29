import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Clock, ShieldAlert, Database, Eye, Key, Lock, Server, Globe, AlertCircle, Scale, Mail, Users } from 'lucide-react';

const PrivacyPage = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString('pt-BR');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-flex justify-center items-center mb-6 bg-red-50 p-4 rounded-full">
                <Shield size={40} className="text-red-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Política de Privacidade</h1>
              <div className="w-24 h-1 bg-red-600 mx-auto"></div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden mb-8">
              <div className="p-6 flex items-center gap-3 border-b border-slate-100">
                <Clock size={20} className="text-slate-400" />
                <p className="text-sm text-slate-700">
                  <strong>Última atualização:</strong> {lastUpdated}
                </p>
              </div>
              
              <div className="p-8 prose prose-slate max-w-none">
                <p className="lead text-xl text-slate-700 mb-8">
                  A sua privacidade é importante para nós. Esta Política de Privacidade explica como o Circuito Mineiro de Startup Weekend coleta, usa, divulga e protege suas informações pessoais quando você utiliza nossa plataforma.
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-10">
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <div className="text-red-600 mb-3">
                      <Database size={28} />
                    </div>
                    <h3 className="text-lg font-medium text-slate-900 mb-3">Coleta Cuidadosa</h3>
                    <p className="text-slate-600">
                      Coletamos apenas os dados necessários para oferecer a melhor experiência possível.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <div className="text-red-600 mb-3">
                      <Lock size={28} />
                    </div>
                    <h3 className="text-lg font-medium text-slate-900 mb-3">Proteção Rigorosa</h3>
                    <p className="text-slate-600">
                      Implementamos medidas de segurança robustas para proteger suas informações.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <div className="text-red-600 mb-3">
                      <Eye size={28} />
                    </div>
                    <h3 className="text-lg font-medium text-slate-900 mb-3">Transparência Total</h3>
                    <p className="text-slate-600">
                      Somos claros sobre como seus dados são usados e quais são seus direitos.
                    </p>
                  </div>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">1</span>
                  Informações que Coletamos
                </h2>
                <p>
                  Podemos coletar os seguintes tipos de informações pessoais:
                </p>
                
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 my-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">1.1 Informações que você nos fornece:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li>Informações de registro: nome, email, senha, telefone, endereço, etc.</li>
                    <li>Perfil profissional: experiência, habilidades, educação, interesses, foto de perfil.</li>
                    <li>Conteúdo gerado pelo usuário: postagens, comentários, mensagens.</li>
                    <li>Informações de inscrição em eventos e programas.</li>
                    <li>Comunicações conosco por email, chat ou outros canais.</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 my-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">1.2 Informações coletadas automaticamente:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li>Informações de uso: ações realizadas, páginas visitadas, horários de acesso.</li>
                    <li>Informações do dispositivo: tipo de dispositivo, sistema operacional, navegador.</li>
                    <li>Dados de localização: localização geográfica baseada no IP ou GPS.</li>
                    <li>Cookies e tecnologias similares: para mais detalhes, consulte nossa <a href="/cookies" className="text-red-600 hover:underline">Política de Cookies</a>.</li>
                    <li>Registros de servidor e análises de uso do site.</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 my-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">1.3 Informações de terceiros:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li>Dados de serviços vinculados (como login via Google, LinkedIn, etc.).</li>
                    <li>Informações de parceiros, mentores ou outros usuários da plataforma.</li>
                    <li>Informações públicas disponíveis em fontes abertas.</li>
                  </ul>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">2</span>
                  Como Usamos Suas Informações
                </h2>
                
                <div className="relative overflow-hidden bg-white rounded-lg border border-slate-200 shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-red-50/0 w-2"></div>
                  <ul className="list-none pl-0 divide-y divide-slate-100">
                    <li className="p-4 pl-6 flex items-start">
                      <div className="mt-0.5 mr-4 text-red-600">
                        <Server size={18} />
                      </div>
                      <span>Fornecer, manter e melhorar nossa plataforma e serviços.</span>
                    </li>
                    <li className="p-4 pl-6 flex items-start">
                      <div className="mt-0.5 mr-4 text-red-600">
                        <Database size={18} />
                      </div>
                      <span>Processar inscrições em eventos, programas de mentoria e aceleração.</span>
                    </li>
                    <li className="p-4 pl-6 flex items-start">
                      <div className="mt-0.5 mr-4 text-red-600">
                        <Users size={18} />
                      </div>
                      <span>Facilitar a conexão entre empreendedores, mentores e investidores.</span>
                    </li>
                    <li className="p-4 pl-6 flex items-start">
                      <div className="mt-0.5 mr-4 text-red-600">
                        <Mail size={18} />
                      </div>
                      <span>Enviar comunicações importantes sobre sua conta ou mudanças em nossos termos.</span>
                    </li>
                    <li className="p-4 pl-6 flex items-start">
                      <div className="mt-0.5 mr-4 text-red-600">
                        <ShieldAlert size={18} />
                      </div>
                      <span>Detectar, prevenir e resolver problemas técnicos, fraudes ou atividades ilegais.</span>
                    </li>
                    <li className="p-4 pl-6 flex items-start">
                      <div className="mt-0.5 mr-4 text-red-600">
                        <Scale size={18} />
                      </div>
                      <span>Cumprir obrigações legais e regulatórias.</span>
                    </li>
                  </ul>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">3</span>
                  Bases Legais para o Processamento
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                      <span className="text-red-600 mr-2">
                        <Shield size={20} />
                      </span>
                      Consentimento
                    </h3>
                    <p className="text-slate-700">
                      Quando você nos fornece consentimento explícito para processar seus dados para uma finalidade específica.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                      <span className="text-red-600 mr-2">
                        <Key size={20} />
                      </span>
                      Execução de Contrato
                    </h3>
                    <p className="text-slate-700">
                      Quando o processamento é necessário para cumprir um contrato que temos com você.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                      <span className="text-red-600 mr-2">
                        <AlertCircle size={20} />
                      </span>
                      Interesses Legítimos
                    </h3>
                    <p className="text-slate-700">
                      Quando o processamento é necessário para nossos interesses legítimos ou de terceiros.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                      <span className="text-red-600 mr-2">
                        <Scale size={20} />
                      </span>
                      Conformidade Legal
                    </h3>
                    <p className="text-slate-700">
                      Quando o processamento é necessário para cumprir uma obrigação legal à qual estamos sujeitos.
                    </p>
                  </div>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">4</span>
                  Compartilhamento de Informações
                </h2>
                <p className="mb-6">
                  Podemos compartilhar suas informações pessoais com os seguintes tipos de terceiros:
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                    <h3 className="text-md font-semibold text-slate-900 mb-2">Participantes da Plataforma</h3>
                    <p className="text-sm text-slate-700">
                      Empreendedores, mentores, investidores e outros usuários registrados, conforme necessário para facilitar conexões dentro do ecossistema.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                    <h3 className="text-md font-semibold text-slate-900 mb-2">Prestadores de Serviços</h3>
                    <p className="text-sm text-slate-700">
                      Empresas que nos auxiliam na operação da plataforma, como provedores de hospedagem, processamento de pagamentos, análise de dados e suporte ao cliente.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                    <h3 className="text-md font-semibold text-slate-900 mb-2">Parceiros</h3>
                    <p className="text-sm text-slate-700">
                      Organizações que colaboram conosco na realização de eventos, programas e iniciativas para startups.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                    <h3 className="text-md font-semibold text-slate-900 mb-2">Autoridades e Órgãos Reguladores</h3>
                    <p className="text-sm text-slate-700">
                      Quando exigido por lei, ordem judicial ou processo legal.
                    </p>
                  </div>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg border border-red-100 mb-8">
                  <p className="flex items-start">
                    <span className="flex-shrink-0 text-red-600 mr-3 mt-1">
                      <AlertCircle size={18} />
                    </span>
                    <span>
                      Não vendemos suas informações pessoais a terceiros. Quando compartilhamos informações com prestadores de serviços, exigimos que eles mantenham a confidencialidade e segurança de suas informações.
                    </span>
                  </p>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">5</span>
                  Seus Direitos de Privacidade
                </h2>
                <p className="mb-6">
                  Dependendo da sua localização, você pode ter os seguintes direitos em relação às suas informações pessoais:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <div className="flex items-center mb-2">
                      <div className="bg-red-100 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                        <span className="text-red-600 text-xs font-bold">A</span>
                      </div>
                      <h3 className="text-md font-semibold text-slate-900">Acesso</h3>
                    </div>
                    <p className="text-sm text-slate-700">
                      Solicitar acesso às informações pessoais que mantemos sobre você.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <div className="flex items-center mb-2">
                      <div className="bg-red-100 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                        <span className="text-red-600 text-xs font-bold">R</span>
                      </div>
                      <h3 className="text-md font-semibold text-slate-900">Retificação</h3>
                    </div>
                    <p className="text-sm text-slate-700">
                      Solicitar a correção de informações incompletas ou imprecisas.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <div className="flex items-center mb-2">
                      <div className="bg-red-100 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                        <span className="text-red-600 text-xs font-bold">E</span>
                      </div>
                      <h3 className="text-md font-semibold text-slate-900">Exclusão</h3>
                    </div>
                    <p className="text-sm text-slate-700">
                      Solicitar a exclusão de suas informações pessoais em determinadas circunstâncias.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <div className="flex items-center mb-2">
                      <div className="bg-red-100 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                        <span className="text-red-600 text-xs font-bold">R</span>
                      </div>
                      <h3 className="text-md font-semibold text-slate-900">Restrição</h3>
                    </div>
                    <p className="text-sm text-slate-700">
                      Solicitar a restrição do processamento de suas informações pessoais.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <div className="flex items-center mb-2">
                      <div className="bg-red-100 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                        <span className="text-red-600 text-xs font-bold">P</span>
                      </div>
                      <h3 className="text-md font-semibold text-slate-900">Portabilidade</h3>
                    </div>
                    <p className="text-sm text-slate-700">
                      Receber suas informações pessoais em um formato estruturado e legível por máquina.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <div className="flex items-center mb-2">
                      <div className="bg-red-100 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                        <span className="text-red-600 text-xs font-bold">O</span>
                      </div>
                      <h3 className="text-md font-semibold text-slate-900">Objeção</h3>
                    </div>
                    <p className="text-sm text-slate-700">
                      Opor-se ao processamento de suas informações pessoais com base em nossos interesses legítimos.
                    </p>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 mb-8">
                  <p className="mb-0">
                    Para exercer seus direitos, entre em contato conosco usando as informações fornecidas na seção "Contato" abaixo. Responderemos à sua solicitação dentro do prazo legal aplicável.
                  </p>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">6</span>
                  Segurança de Dados
                </h2>
                <p className="mb-4">
                  Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações pessoais contra perda acidental, acesso não autorizado, divulgação, alteração e destruição. No entanto, nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro.
                </p>
                
                <p className="mb-4">
                  As medidas de segurança que adotamos incluem:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">
                      <Lock size={12} />
                    </span>
                    <span className="text-slate-700">Criptografia de dados em trânsito e em repouso.</span>
                  </div>
                  
                  <div className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">
                      <Key size={12} />
                    </span>
                    <span className="text-slate-700">Procedimentos de autenticação robustos.</span>
                  </div>
                  
                  <div className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">
                      <Eye size={12} />
                    </span>
                    <span className="text-slate-700">Acesso restrito a informações pessoais com base na necessidade.</span>
                  </div>
                  
                  <div className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">
                      <ShieldAlert size={12} />
                    </span>
                    <span className="text-slate-700">Monitoramento regular para detecção de vulnerabilidades.</span>
                  </div>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">7</span>
                  Retenção de Dados
                </h2>
                <p className="mb-4">
                  Mantemos suas informações pessoais apenas pelo tempo necessário para os fins estabelecidos nesta Política de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
                </p>
                
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 mb-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Os critérios usados para determinar nossos períodos de retenção incluem:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li>O período durante o qual temos um relacionamento contínuo com você.</li>
                    <li>Obrigações legais às quais estamos sujeitos.</li>
                    <li>Prazos de prescrição aplicáveis, litígios pendentes ou potenciais.</li>
                    <li>Diretrizes emitidas por autoridades de proteção de dados relevantes.</li>
                  </ul>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">8</span>
                  Transferências Internacionais de Dados
                </h2>
                
                <div className="flex items-start gap-4 mb-8">
                  <div className="flex-shrink-0 mt-1">
                    <Globe size={24} className="text-red-600" />
                  </div>
                  <div>
                    <p className="mb-4">
                      Suas informações pessoais podem ser transferidas e processadas em países fora do Brasil, onde as leis de proteção de dados podem ser diferentes. Nesses casos, tomaremos medidas adequadas para garantir que suas informações sejam protegidas de acordo com esta Política de Privacidade e leis aplicáveis.
                    </p>
                    
                    <p>
                      Essas medidas podem incluir a implementação de cláusulas contratuais padrão aprovadas pela Comissão Europeia ou pela ANPD (Autoridade Nacional de Proteção de Dados) ou a confiança em outros mecanismos de transferência de dados legalmente reconhecidos.
                    </p>
                  </div>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">9</span>
                  Privacidade de Crianças
                </h2>
                <div className="bg-red-50 p-6 rounded-lg border border-red-100 mb-8">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 text-red-600 mr-3 mt-1">
                      <AlertCircle size={20} />
                    </span>
                    <p className="mb-0">
                      Nossos serviços não são direcionados a pessoas menores de 18 anos, e não coletamos intencionalmente informações pessoais de crianças. Se tomarmos conhecimento de que coletamos informações pessoais de uma criança menor de 18 anos sem verificação de consentimento parental, tomaremos medidas para remover essas informações de nossos servidores.
                    </p>
                  </div>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">10</span>
                  Links para Sites de Terceiros
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 mb-8">
                  <p className="mb-0">
                    Nossa plataforma pode conter links para sites de terceiros que não são operados por nós. Se você clicar em um link de terceiros, será direcionado para o site desse terceiro. Recomendamos fortemente que você revise a Política de Privacidade de cada site que visitar. Não temos controle sobre e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de sites ou serviços de terceiros.
                  </p>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">11</span>
                  Alterações nesta Política de Privacidade
                </h2>
                <p className="mb-4">
                  Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página e, se as alterações forem significativas, forneceremos um aviso mais proeminente.
                </p>
                <p className="mb-6">
                  Recomendamos que você revise esta Política de Privacidade periodicamente para quaisquer alterações. As alterações a esta Política de Privacidade são efetivas quando publicadas nesta página.
                </p>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">12</span>
                  Contato
                </h2>
                <p className="mb-6">
                  Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:
                </p>
                
                <div className="bg-slate-50 p-8 rounded-lg border border-slate-100 mt-8 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-red-100 p-4 rounded-full">
                      <Shield size={32} className="text-red-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Contato</h3>
                    <p className="mb-2">Email: <a href="mailto:privacidade@startupweekendmg.com" className="text-red-600 hover:underline">privacidade@startupweekendmg.com</a></p>
                    <p className="mb-2">Telefone: +55 (31) 3333-4444</p>
                    <p>Endereço: Belo Horizonte, Minas Gerais - Brasil</p>
                  </div>
                </div>

                <div className="mt-12 text-center border-t border-slate-100 pt-8">
                  <p className="text-sm text-slate-500">
                    © {currentYear} Circuito Mineiro de Startup Weekend. Todos os direitos reservados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;
