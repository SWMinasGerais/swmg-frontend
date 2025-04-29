import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Scale, Shield, AlertCircle, Users, Clock, Mail } from 'lucide-react';

const CodePage = () => {
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
                <Scale size={40} className="text-red-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Código de Conduta</h1>
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
                  O Circuito Mineiro de Startup Weekend está comprometido em proporcionar um ambiente acolhedor, 
                  respeitoso e livre de assédio para todos, independentemente de gênero, orientação sexual, 
                  habilidade, etnia, status socioeconômico ou religião.
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <div className="text-red-600 mb-3">
                      <Shield size={28} />
                    </div>
                    <h3 className="text-lg font-medium text-slate-900 mb-3">Ambiente Seguro</h3>
                    <p className="text-slate-600">
                      Promovemos um ambiente seguro e respeitoso para todos os participantes.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <div className="text-red-600 mb-3">
                      <Users size={28} />
                    </div>
                    <h3 className="text-lg font-medium text-slate-900 mb-3">Inclusividade</h3>
                    <p className="text-slate-600">
                      Valorizamos a diversidade e trabalhamos para que todos se sintam bem-vindos.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <div className="text-red-600 mb-3">
                      <AlertCircle size={28} />
                    </div>
                    <h3 className="text-lg font-medium text-slate-900 mb-3">Tolerância Zero</h3>
                    <p className="text-slate-600">
                      Não toleramos assédio ou comportamento inadequado em nenhuma forma.
                    </p>
                  </div>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">1</span>
                  Propósito
                </h2>
                <p>
                  Este Código de Conduta visa garantir um ambiente seguro, inclusivo e produtivo para todas 
                  as pessoas participantes, palestrantes, organizadoras, voluntárias, mentoras e 
                  patrocinadoras em todos os eventos do Circuito Mineiro de Startup Weekend.
                </p>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">2</span>
                  Comportamento Esperado
                </h2>
                <p>Esperamos que todos os participantes do evento:</p>
                <ul className="list-none space-y-3 pl-0 mt-4">
                  <li className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">✓</span>
                    <span>Respeitem as diferentes opiniões, pontos de vista e experiências.</span>
                  </li>
                  <li className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">✓</span>
                    <span>Forneçam e aceitem feedbacks construtivos de maneira respeitosa.</span>
                  </li>
                  <li className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">✓</span>
                    <span>Assumam responsabilidade pelos seus erros, aprendendo com eles e se desculpando conforme necessário.</span>
                  </li>
                  <li className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">✓</span>
                    <span>Foquem no que é melhor para a comunidade e para o propósito coletivo do evento.</span>
                  </li>
                  <li className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">✓</span>
                    <span>Demonstrem empatia para com os outros participantes.</span>
                  </li>
                  <li className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">✓</span>
                    <span>Respeitem a privacidade e o espaço pessoal dos demais.</span>
                  </li>
                  <li className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">✓</span>
                    <span>Utilizem linguagem inclusiva e respeitosa.</span>
                  </li>
                </ul>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">3</span>
                  Comportamentos Inaceitáveis
                </h2>
                <p>Os seguintes comportamentos são considerados inaceitáveis em nossos eventos:</p>
                <div className="space-y-6 my-6">
                  <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                      <span className="text-red-600 mr-2">•</span> Assédio e discriminação
                    </h3>
                    <p className="text-slate-700">
                      Comentários ofensivos relacionados a gênero, orientação sexual, 
                      deficiência, aparência física, tamanho corporal, raça, religião; uso de linguagem ou imagens sexualizadas; 
                      atenção sexual indesejada; intimidação deliberada; perseguição; fotografias ou gravações assediosas; 
                      interrupção contínua de palestras ou outros eventos; contato físico inapropriado; comportamento sexual 
                      intimidador.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                      <span className="text-red-600 mr-2">•</span> Discurso de ódio
                    </h3>
                    <p className="text-slate-700">
                      Verbalizações que promovam a violência, discriminação, hostilidade ou 
                      ódio contra qualquer pessoa ou grupo.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                      <span className="text-red-600 mr-2">•</span> Comportamento disruptivo
                    </h3>
                    <p className="text-slate-700">
                      Qualquer ação que interfira significativamente no evento, 
                      causando desconforto ou prejudicando a experiência dos demais participantes.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                      <span className="text-red-600 mr-2">•</span> Violação da privacidade
                    </h3>
                    <p className="text-slate-700">
                      Compartilhar informações pessoais de outros participantes sem 
                      seu consentimento explícito.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                      <span className="text-red-600 mr-2">•</span> Mensagens não solicitadas
                    </h3>
                    <p className="text-slate-700">
                      Distribuição de material promocional ou mensagens não 
                      solicitadas de natureza comercial.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                      <span className="text-red-600 mr-2">•</span> Outras condutas
                    </h3>
                    <p className="text-slate-700">
                      Quaisquer comportamentos que possam razoavelmente ser considerados 
                      inadequados em um ambiente profissional.
                    </p>
                  </div>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">4</span>
                  Consequências de Comportamentos Inaceitáveis
                </h2>
                <p>
                  Comportamentos inaceitáveis não serão tolerados. Qualquer pessoa que for solicitada a interromper um 
                  comportamento inaceitável deve cumprir imediatamente. A equipe organizadora pode tomar qualquer ação 
                  considerada necessária e apropriada, incluindo:
                </p>
                <ul className="list-none space-y-3 pl-0 mt-4">
                  <li className="flex items-center bg-slate-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold">→</span>
                    <span>Advertência verbal ou escrita.</span>
                  </li>
                  <li className="flex items-center bg-slate-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold">→</span>
                    <span>Expulsão do evento sem reembolso.</span>
                  </li>
                  <li className="flex items-center bg-slate-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold">→</span>
                    <span>Proibição de participação em eventos futuros.</span>
                  </li>
                  <li className="flex items-center bg-slate-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold">→</span>
                    <span>Encaminhamento às autoridades apropriadas quando necessário.</span>
                  </li>
                </ul>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">5</span>
                  Se Você Testemunhar ou Experimentar Comportamento Inaceitável
                </h2>
                <p>
                  Se você for assediado, notar que outra pessoa está sendo assediada, ou tiver qualquer outra preocupação, 
                  por favor, entre em contato com um membro da equipe organizadora imediatamente. A equipe organizadora 
                  estará identificada no início do evento e estará disponível para ajudar os participantes a contatar a 
                  segurança local ou as autoridades competentes, fornecer escoltas, ou ajudar aqueles que experimentam 
                  assédio a se sentirem seguros durante o evento.
                </p>
                
                <div className="bg-red-50 p-8 rounded-lg border border-red-100 my-8 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-white p-4 rounded-full">
                      <Mail size={32} className="text-red-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Contato de Emergência</h3>
                    <p className="mb-4">Para reportar um incidente durante o evento:</p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-700">
                      <li>Procure um membro da organização (identificados com crachás específicos)</li>
                      <li>Email: <a href="mailto:conduta@startupweekendmg.com" className="text-red-600 hover:underline">conduta@startupweekendmg.com</a></li>
                      <li>Telefone de emergência: <strong>+55 (31) 9999-8888</strong></li>
                    </ul>
                  </div>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">6</span>
                  Escopo
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 my-6">
                  <p className="mb-0">
                    Este Código de Conduta se aplica a todos os espaços do evento, incluindo, mas não limitado a, palestras, 
                    workshops, festas sociais, redes sociais, aplicativos de mensagens relacionados ao evento, e comunicações 
                    em contexto do evento. O código de conduta aplica-se a todas as atividades relacionadas ao evento, seja 
                    nos locais do evento ou em locais externos, como festas ou jantares.
                  </p>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">7</span>
                  Licença e Atribuição
                </h2>
                <p>
                  Este Código de Conduta é baseado no <a href="https://www.contributor-covenant.org/version/2/0/code_of_conduct/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">Contributor Covenant</a> e no 
                  <a href="https://berlincodeofconduct.org/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline ml-1">Berlin Code of Conduct</a>, 
                  adaptados para as necessidades específicas do Circuito Mineiro de Startup Weekend.
                </p>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">8</span>
                  Responsabilidade Comunitária
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 my-6">
                  <p className="mb-0">
                    Encorajamos todos os participantes a se responsabilizarem mutuamente pela aderência a estes padrões. 
                    Comunidades espelham os comportamentos que elas toleram. Seu papel na construção de um ambiente positivo 
                    é essencial.
                  </p>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">9</span>
                  Compromisso dos Organizadores
                </h2>
                <p>
                  A equipe organizadora do Circuito Mineiro de Startup Weekend se compromete a:
                </p>
                <ul className="list-none space-y-3 pl-0 mt-4">
                  <li className="flex items-center bg-slate-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold">•</span>
                    <span>Fornecer treinamento para a equipe sobre como responder a incidentes e reportes.</span>
                  </li>
                  <li className="flex items-center bg-slate-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold">•</span>
                    <span>Estabelecer procedimentos claros para lidar com conflitos e violações do código.</span>
                  </li>
                  <li className="flex items-center bg-slate-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold">•</span>
                    <span>Responder rapidamente a todos os relatos de violação.</span>
                  </li>
                  <li className="flex items-center bg-slate-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold">•</span>
                    <span>Manter a confidencialidade em relação ao reportante de um incidente.</span>
                  </li>
                  <li className="flex items-center bg-slate-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold">•</span>
                    <span>Revisar regularmente este código para assegurar que ele permanece efetivo.</span>
                  </li>
                </ul>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">10</span>
                  Revisões deste Código
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 my-6">
                  <p className="mb-0">
                    Este Código de Conduta está sujeito a revisões periódicas para garantir que permaneça eficaz e relevante. 
                    As sugestões para melhorias são sempre bem-vindas e podem ser enviadas para o email de contato fornecido.
                  </p>
                </div>

                <div className="bg-slate-50 p-8 rounded-lg border border-slate-100 mt-12 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-red-100 p-4 rounded-full">
                      <Mail size={32} className="text-red-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Contato para Questões sobre o Código de Conduta</h3>
                    <p>Para dúvidas gerais sobre este código ou sugestões:</p>
                    <p>Email: <a href="mailto:conduta@startupweekendmg.com" className="text-red-600 hover:underline">conduta@startupweekendmg.com</a></p>
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

export default CodePage;
