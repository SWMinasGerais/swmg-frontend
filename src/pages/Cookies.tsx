import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Cookie, ExternalLink, ShieldCheck, Clock } from 'lucide-react';

const CookiesPage = () => {
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
                <Cookie size={40} className="text-red-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Política de Cookies</h1>
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
                  Esta Política de Cookies explica como o Circuito Mineiro de Startup Weekend utiliza cookies e 
                  tecnologias similares para reconhecê-lo quando você visita nosso site. Ela explica o que são 
                  essas tecnologias e por que as usamos, além de seus direitos de controlar nosso uso delas.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <h3 className="text-lg font-medium text-slate-900 mb-3 flex items-center gap-2">
                      <span className="text-red-600">01.</span> O que são cookies?
                    </h3>
                    <p className="text-slate-600">
                      Cookies são pequenos arquivos de dados colocados no seu dispositivo que nos permitem reconhecer seu navegador e lembrar informações importantes.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <h3 className="text-lg font-medium text-slate-900 mb-3 flex items-center gap-2">
                      <span className="text-red-600">02.</span> Por que usamos cookies?
                    </h3>
                    <p className="text-slate-600">
                      Usamos cookies para manter o site funcionando adequadamente, melhorar sua experiência e entender como os usuários navegam pelo site.
                    </p>
                  </div>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">1</span>
                  O que são cookies?
                </h2>
                <p>
                  Cookies são pequenos arquivos de dados que são colocados no seu computador ou dispositivo móvel 
                  quando você visita um site. Os cookies são amplamente utilizados pelos proprietários de sites para 
                  fazer seus sites funcionarem, ou funcionarem de maneira mais eficiente, bem como para fornecer 
                  informações para os proprietários do site.
                </p>
                <p>
                  Os cookies definidos pelo proprietário do site (neste caso, o Circuito Mineiro de Startup Weekend) 
                  são chamados de "cookies primários". Os cookies definidos por partes que não o proprietário do site 
                  são chamados de "cookies de terceiros". Cookies de terceiros permitem que recursos ou funcionalidades 
                  de terceiros sejam fornecidos no ou através do site (por exemplo, publicidade, conteúdo interativo 
                  e análises). As partes que definem esses cookies de terceiros podem reconhecer seu dispositivo 
                  tanto quando visita o site em questão quanto quando visita certos outros sites.
                </p>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">2</span>
                  Por que usamos cookies?
                </h2>
                <p>
                  Usamos cookies primários e de terceiros por vários motivos. Alguns cookies são necessários por 
                  razões técnicas para que nosso site funcione, e nós os referimos como cookies "essenciais" ou 
                  "estritamente necessários". Outros cookies também nos permitem rastrear e direcionar os interesses 
                  de nossos usuários para melhorar a experiência em nosso site. Terceiros servem cookies através 
                  de nosso site para publicidade, análise e outras finalidades.
                </p>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">3</span>
                  Tipos de cookies que utilizamos
                </h2>
                <p>Os tipos específicos de cookies primários e de terceiros servidos através de nosso site incluem:</p>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 my-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">3.1. Cookies Essenciais</h3>
                  <p className="mb-3">
                    Estes cookies são estritamente necessários para fornecer serviços disponíveis através do nosso site 
                    e para usar alguns de seus recursos, como o acesso a áreas seguras. Como esses cookies são 
                    estritamente necessários para entregar o site, você não pode recusá-los sem impactar o funcionamento 
                    do nosso site.
                  </p>
                  <ul className="list-disc pl-5 text-slate-700">
                    <li><strong className="text-slate-900">_session</strong> - Cookie de sessão para manter o usuário conectado</li>
                    <li><strong className="text-slate-900">XSRF-TOKEN</strong> - Cookie para proteção contra ataques CSRF</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 my-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">3.2. Cookies de Desempenho e Funcionalidade</h3>
                  <p className="mb-3">
                    Estes cookies são usados para melhorar a funcionalidade e personalização do nosso site. Eles podem 
                    ser definidos por nós ou por provedores terceiros cujos serviços adicionamos às nossas páginas.
                  </p>
                  <ul className="list-disc pl-5 text-slate-700">
                    <li><strong className="text-slate-900">user_preferences</strong> - Armazena preferências do usuário, como tema escolhido ou configurações de acessibilidade</li>
                  </ul>
                  <p className="mt-3">
                    Estes cookies nos permitem contar visitas e fontes de tráfego para que possamos medir e 
                    melhorar o desempenho do nosso site. Eles nos ajudam a entender quais páginas são mais ou 
                    menos populares e ver como os visitantes navegam pelo site. Todas as informações coletadas 
                    por esses cookies são agregadas e, portanto, anônimas.
                  </p>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 my-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">3.3. Cookies de Funcionalidade</h3>
                  <p>
                    Estes cookies permitem que o site forneça funcionalidades e personalização aprimoradas. Eles 
                    podem ser definidos por nós ou por provedores terceiros cujos serviços adicionamos às nossas páginas. 
                    Se você não permitir esses cookies, alguns ou todos esses serviços podem não funcionar corretamente.
                  </p>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 my-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">3.4. Cookies de Publicidade e Direcionamento</h3>
                  <p>
                    Estes cookies podem ser configurados através do nosso site por nossos parceiros de publicidade. Eles 
                    podem ser usados por essas empresas para construir um perfil de seus interesses e mostrar anúncios 
                    relevantes em outros sites. Eles não armazenam informações pessoais diretamente, mas são baseados 
                    na identificação única do seu navegador e dispositivo de internet.
                  </p>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 my-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">3.5. Cookies de Mídias Sociais</h3>
                  <p>
                    Estes cookies são definidos por uma série de serviços de mídia social que adicionamos ao site para 
                    permitir que você compartilhe nosso conteúdo com seus amigos e redes. Eles são capazes de rastrear 
                    seu navegador em outros sites e construir um perfil de seus interesses, o que pode influenciar o 
                    conteúdo e as mensagens que você vê em outros sites que visita.
                  </p>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">4</span>
                  Cookies específicos que utilizamos
                </h2>
                <p className="mb-6">
                  A seguir, listamos os cookies específicos que utilizamos em nosso site:
                </p>

                <div className="overflow-x-auto bg-white rounded-lg border border-slate-200 shadow-sm">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border-b border-slate-200 px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Nome do Cookie</th>
                        <th className="border-b border-slate-200 px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Finalidade</th>
                        <th className="border-b border-slate-200 px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Duração</th>
                        <th className="border-b border-slate-200 px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Tipo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">_ga</td>
                        <td className="px-6 py-4 text-sm text-slate-600">Registra um ID único usado para gerar dados estatísticos sobre como o visitante usa o site.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">2 anos</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full">Analítico</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">_gid</td>
                        <td className="px-6 py-4 text-sm text-slate-600">Registra um ID único usado para gerar dados estatísticos sobre como o visitante usa o site.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">24 horas</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full">Analítico</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">_gat</td>
                        <td className="px-6 py-4 text-sm text-slate-600">Usado pelo Google Analytics para limitar a taxa de solicitação.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">1 minuto</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full">Analítico</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">XSRF-TOKEN</td>
                        <td className="px-6 py-4 text-sm text-slate-600">Cookie de sessão que ajuda a manter a segurança do site, prevenindo ataques de falsificação de solicitação.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">Sessão</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="px-2 py-1 text-xs font-medium bg-green-50 text-green-700 rounded-full">Essencial</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">session</td>
                        <td className="px-6 py-4 text-sm text-slate-600">Identifica sua sessão única no site.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">2 horas</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="px-2 py-1 text-xs font-medium bg-green-50 text-green-700 rounded-full">Essencial</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">lang</td>
                        <td className="px-6 py-4 text-sm text-slate-600">Lembra a preferência de idioma do usuário.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">1 ano</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="px-2 py-1 text-xs font-medium bg-purple-50 text-purple-700 rounded-full">Funcionalidade</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">cookieconsent_status</td>
                        <td className="px-6 py-4 text-sm text-slate-600">Armazena as preferências de consentimento de cookies.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">1 ano</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="px-2 py-1 text-xs font-medium bg-purple-50 text-purple-700 rounded-full">Funcionalidade</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">5</span>
                  Cookies de terceiros
                </h2>
                <p className="mb-4">
                  Além dos cookies que configuramos quando você visita nosso site, terceiros também podem configurar 
                  cookies enquanto você visita o site. Em algumas circunstâncias, esses terceiros incluem:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-6">
                  <li>Empresas de análise como Google Analytics, para melhor entendermos o comportamento dos usuários no site.</li>
                  <li>Plataformas de mídia social como Facebook, Twitter e LinkedIn, quando incluímos seus botões de compartilhamento ou elementos de engajamento.</li>
                  <li>Serviços de publicidade para facilitar a entrega de propagandas relevantes.</li>
                  <li>Provedores de vídeo como YouTube ou Vimeo, quando incorporamos seus vídeos em nossas páginas.</li>
                </ul>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">6</span>
                  Como gerenciar cookies
                </h2>
                <p className="mb-4">
                  Você pode impedir que os cookies sejam configurados durante sua visita ao nosso site. Você também 
                  pode excluir cookies já armazenados no seu dispositivo. No entanto, bloquear alguns tipos de cookies 
                  pode afetar sua experiência no site e os serviços que podemos oferecer.
                </p>
                <p className="mb-4">
                  A maioria dos navegadores da web permite algum controle sobre a maioria dos cookies através das configurações do navegador:
                </p>
                
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">6.1. Gerenciamento de cookies no seu navegador</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-2 text-xs font-bold mt-0.5">•</span>
                      <div>
                        <strong className="text-slate-900">Google Chrome:</strong> Menu &gt; Configurações &gt; Avançado &gt; Privacidade e segurança &gt; Configurações de conteúdo &gt; Cookies
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-2 text-xs font-bold mt-0.5">•</span>
                      <div>
                        <strong className="text-slate-900">Mozilla Firefox:</strong> Menu &gt; Opções &gt; Privacidade &amp; Segurança &gt; Cookies e dados do site
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-2 text-xs font-bold mt-0.5">•</span>
                      <div>
                        <strong className="text-slate-900">Safari:</strong> Preferências &gt; Privacidade
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-2 text-xs font-bold mt-0.5">•</span>
                      <div>
                        <strong className="text-slate-900">Microsoft Edge:</strong> Menu &gt; Configurações &gt; Cookies e permissões do site
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-2 text-xs font-bold mt-0.5">•</span>
                      <div>
                        <strong className="text-slate-900">Internet Explorer:</strong> Menu &gt; Ferramentas &gt; Opções da Internet &gt; Privacidade &gt; Avançado
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">6.2. Ferramentas online</h3>
                  <p className="flex items-center">
                    <span className="mr-2"><ExternalLink size={18} className="text-slate-400" /></span>
                    Você também pode visitar <a href="http://www.youronlinechoices.com/" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">www.youronlinechoices.com</a> para 
                    obter informações sobre como remover ou bloquear cookies de marketing e publicidade.
                  </p>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">7</span>
                  Alterações em nossa Política de Cookies
                </h2>
                <p className="mb-4">
                  Podemos atualizar nossa Política de Cookies periodicamente para refletir, por exemplo, mudanças nas 
                  tecnologias de cookies que usamos ou por outros motivos operacionais, legais ou regulatórios. Incentivamos 
                  você a visitar esta página regularmente para ficar informado sobre nosso uso de cookies e tecnologias 
                  relacionadas.
                </p>
                <p className="mb-6">
                  A data no topo desta Política de Cookies indica quando ela foi atualizada pela última vez.
                </p>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">8</span>
                  Contato
                </h2>
                <p className="mb-6">
                  Se você tiver dúvidas sobre como usamos cookies ou outras tecnologias, entre em contato conosco:
                </p>
                
                <div className="bg-slate-50 p-8 rounded-lg border border-slate-100 my-8 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-red-100 p-4 rounded-full">
                      <ShieldCheck size={32} className="text-red-600" />
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

export default CookiesPage;

