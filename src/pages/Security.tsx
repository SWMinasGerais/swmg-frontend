import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldCheck, Clock, Lock, LockKeyhole, ShieldAlert, AlertTriangle, Shield, Server, Mail, Eye, Key, UserCheck, Database } from 'lucide-react';

const SecurityPage = () => {
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
                <ShieldCheck size={40} className="text-red-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Política de Segurança</h1>
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
                  A segurança de suas informações é nossa prioridade. Esta política descreve como protegemos seus dados e as medidas que implementamos para garantir a segurança da plataforma Circuito Mineiro de Startup Weekend.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-10">
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <div className="text-red-600 mb-3">
                      <Lock size={28} />
                    </div>
                    <h3 className="text-lg font-medium text-slate-900 mb-3">Proteção de Dados</h3>
                    <p className="text-slate-600">
                      Utilizamos medidas técnicas e organizacionais para proteger suas informações pessoais.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <div className="text-red-600 mb-3">
                      <Shield size={28} />
                    </div>
                    <h3 className="text-lg font-medium text-slate-900 mb-3">Conformidade</h3>
                    <p className="text-slate-600">
                      Seguimos as melhores práticas e regulamentações de proteção de dados aplicáveis.
                    </p>
                  </div>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">1</span>
                  Compromisso com Segurança
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 my-6">
                  <p className="mb-0">
                    O Circuito Mineiro de Startup Weekend está comprometido em proteger a confidencialidade, integridade e disponibilidade de seus dados. Investimos continuamente em tecnologias e processos para garantir que nossas medidas de segurança estejam sempre atualizadas para enfrentar ameaças em evolução.
                  </p>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">2</span>
                  Medidas de Segurança
                </h2>
                <p>
                  Implementamos uma variedade de medidas de segurança para garantir a proteção de suas informações:
                </p>

                <div className="space-y-4 mt-6 mb-8">
                  <div className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">
                      <LockKeyhole size={14} />
                    </span>
                    <div>
                      <p className="text-slate-800 font-medium mb-1">Criptografia SSL/TLS</p>
                      <p className="text-slate-600 text-sm">
                        Todas as transmissões de dados entre seu navegador e nossos servidores são criptografadas usando protocolos SSL/TLS para garantir que as informações não possam ser interceptadas.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">
                      <Key size={14} />
                    </span>
                    <div>
                      <p className="text-slate-800 font-medium mb-1">Gerenciamento de Senhas</p>
                      <p className="text-slate-600 text-sm">
                        As senhas são armazenadas em formato criptografado usando algoritmos de hash seguros com sal único para cada usuário. Nunca armazenamos senhas em texto simples.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">
                      <Database size={14} />
                    </span>
                    <div>
                      <p className="text-slate-800 font-medium mb-1">Backup de Dados</p>
                      <p className="text-slate-600 text-sm">
                        Realizamos backups regulares de todos os dados para garantir que possamos recuperá-los em caso de incidentes. Os backups são criptografados e armazenados em locais seguros.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">
                      <Server size={14} />
                    </span>
                    <div>
                      <p className="text-slate-800 font-medium mb-1">Infraestrutura Segura</p>
                      <p className="text-slate-600 text-sm">
                        Nossa infraestrutura é hospedada em data centers que atendem aos mais altos padrões de segurança, com monitoramento 24/7, controle de acesso físico e proteção contra ameaças ambientais.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">
                      <ShieldAlert size={14} />
                    </span>
                    <div>
                      <p className="text-slate-800 font-medium mb-1">Monitoramento e Detecção</p>
                      <p className="text-slate-600 text-sm">
                        Sistemas de monitoramento automatizados alertam nossa equipe sobre atividades suspeitas e potenciais ameaças, permitindo resposta rápida a incidentes.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">3</span>
                  Acesso a Informações
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 my-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <UserCheck size={24} className="text-red-600" />
                    </div>
                    <div>
                      <p className="mb-4">
                        O acesso às informações pessoais dos usuários é estritamente limitado. Apenas funcionários autorizados, que precisam acessar essas informações para executar suas funções profissionais, têm permissão para acessar dados pessoais. Esses funcionários estão sujeitos a obrigações de confidencialidade.
                      </p>
                      <p className="mb-0">
                        Implementamos controles de acesso baseados em funções e princípios de privilégio mínimo para garantir que cada pessoa tenha acesso apenas às informações necessárias para realizar seu trabalho.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">4</span>
                  Segurança de Terceiros
                </h2>
                <p>
                  Quando trabalhamos com provedores de serviços terceirizados que podem ter acesso a dados de usuários, tomamos medidas para garantir que eles mantenham padrões adequados de segurança:
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 my-6">
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-100 flex flex-col items-center text-center">
                    <div className="bg-red-50 p-3 rounded-full mb-4">
                      <Shield size={24} className="text-red-600" />
                    </div>
                    <p className="text-slate-800 text-sm">
                      Avaliação de segurança de fornecedores antes da contratação
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-100 flex flex-col items-center text-center">
                    <div className="bg-red-50 p-3 rounded-full mb-4">
                      <Key size={24} className="text-red-600" />
                    </div>
                    <p className="text-slate-800 text-sm">
                      Acordos de confidencialidade e proteção de dados
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-100 flex flex-col items-center text-center">
                    <div className="bg-red-50 p-3 rounded-full mb-4">
                      <Eye size={24} className="text-red-600" />
                    </div>
                    <p className="text-slate-800 text-sm">
                      Monitoramento contínuo do cumprimento de requisitos
                    </p>
                  </div>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">5</span>
                  Resposta a Incidentes
                </h2>
                <div className="bg-red-50 p-6 rounded-lg border border-red-100 my-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-red-600 mr-3 mt-1">
                      <AlertTriangle size={20} />
                    </div>
                    <div>
                      <p className="mb-4">
                        Temos procedimentos estabelecidos para responder rapidamente a incidentes de segurança. Em caso de violação de dados que possa afetar suas informações pessoais, comprometemo-nos a:
                      </p>
                      <ul className="list-disc pl-5 mb-4">
                        <li className="mb-2">Investigar prontamente a natureza e a extensão do incidente</li>
                        <li className="mb-2">Tomar medidas para conter e mitigar o impacto</li>
                        <li className="mb-2">Notificar as autoridades reguladoras quando necessário</li>
                        <li>Informar os usuários afetados de acordo com os requisitos legais aplicáveis</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">6</span>
                  Melhoria Contínua
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 my-6">
                  <p className="mb-0">
                    Nossas práticas de segurança são regularmente revisadas e atualizadas. Realizamos testes de segurança periódicos, incluindo avaliações de vulnerabilidade e testes de penetração para identificar e corrigir possíveis problemas de segurança. Estamos constantemente aprimorando nossos controles de segurança para responder à evolução das ameaças e proteger melhor seus dados.
                  </p>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">7</span>
                  Recomendações para Usuários
                </h2>
                <p className="mb-4">
                  Embora implementemos robustas medidas de segurança, a segurança também depende de você. Recomendamos que:
                </p>
                
                <ul className="list-none space-y-3 pl-0 mb-6">
                  <li className="flex items-start bg-slate-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 text-red-600 mr-3">
                      <LockKeyhole size={18} />
                    </span>
                    <span>Use senhas fortes e exclusivas para sua conta e não as compartilhe com ninguém.</span>
                  </li>
                  <li className="flex items-start bg-slate-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 text-red-600 mr-3">
                      <Eye size={18} />
                    </span>
                    <span>Verifique se está usando uma conexão segura (https://) ao acessar nossa plataforma.</span>
                  </li>
                  <li className="flex items-start bg-slate-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 text-red-600 mr-3">
                      <ShieldAlert size={18} />
                    </span>
                    <span>Mantenha seu dispositivo seguro com software antivírus e atualizações de sistema operacional.</span>
                  </li>
                  <li className="flex items-start bg-slate-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 text-red-600 mr-3">
                      <AlertTriangle size={18} />
                    </span>
                    <span>Esteja atento a tentativas de phishing e nunca forneça suas credenciais em resposta a emails ou mensagens não solicitados.</span>
                  </li>
                  <li className="flex items-start bg-slate-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 text-red-600 mr-3">
                      <Lock size={18} />
                    </span>
                    <span>Faça logout da sua conta quando usar dispositivos compartilhados ou públicos.</span>
                  </li>
                </ul>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">8</span>
                  Alterações na Política de Segurança
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 my-6">
                  <p className="mb-0">
                    Esta política pode ser atualizada periodicamente para refletir mudanças em nossas práticas de segurança. Quando fizermos alterações materiais, notificaremos os usuários por meio de um aviso em nosso site ou por email. Recomendamos que você revise esta política regularmente para se manter informado sobre como protegemos suas informações.
                  </p>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">9</span>
                  Contato
                </h2>
                <p className="mb-6">
                  Se você tiver dúvidas sobre nossa política de segurança ou quiser relatar um problema de segurança, entre em contato com nossa equipe:
                </p>
                
                <div className="bg-slate-50 p-8 rounded-lg border border-slate-100 mt-8 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-red-100 p-4 rounded-full">
                      <ShieldCheck size={32} className="text-red-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Contato de Segurança</h3>
                    <p className="mb-2">Email: <a href="mailto:seguranca@startupweekendmg.com" className="text-red-600 hover:underline">seguranca@startupweekendmg.com</a></p>
                    <p className="mb-2">Telefone: +55 (31) 3333-5555</p>
                    <p>Para questões urgentes de segurança, favor indicar "URGENTE" na linha de assunto do email.</p>
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

export default SecurityPage;
