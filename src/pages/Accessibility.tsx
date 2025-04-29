import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accessibility, Clock, CheckCircle2, MousePointer, Eye, EyeOff, Headphones, Monitor, Braces, Smartphone, Mail, ArrowUpRight } from 'lucide-react';

const AccessibilityPage = () => {
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
                <Accessibility size={40} className="text-red-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Acessibilidade</h1>
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
                  O Circuito Mineiro de Startup Weekend está comprometido em tornar nossa plataforma e eventos acessíveis a todos, independentemente de suas habilidades ou necessidades. Trabalhamos continuamente para melhorar a experiência digital e física para todos os usuários.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-10">
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <div className="text-red-600 mb-3">
                      <Monitor size={28} />
                    </div>
                    <h3 className="text-lg font-medium text-slate-900 mb-3">Acessibilidade Digital</h3>
                    <p className="text-slate-600">
                      Nossa plataforma segue diretrizes de acessibilidade para garantir uma experiência inclusiva.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <div className="text-red-600 mb-3">
                      <Headphones size={28} />
                    </div>
                    <h3 className="text-lg font-medium text-slate-900 mb-3">Acesso aos Eventos</h3>
                    <p className="text-slate-600">
                      Nossos eventos físicos são planejados considerando diferentes necessidades de acessibilidade.
                    </p>
                  </div>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">1</span>
                  Compromisso com Acessibilidade
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 my-6">
                  <p className="mb-0">
                    Acreditamos que a inovação deve ser acessível a todos. Por isso, estamos comprometidos em garantir que nossa plataforma digital e nossos eventos físicos sejam acessíveis para pessoas com diferentes habilidades e necessidades. Trabalhamos para eliminar barreiras e criar um ambiente inclusivo onde todos possam participar plenamente do ecossistema de startups.
                  </p>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">2</span>
                  Acessibilidade da Plataforma Digital
                </h2>
                <p>
                  Nossa plataforma web foi desenvolvida considerando as diretrizes de acessibilidade WCAG 2.1 (Web Content Accessibility Guidelines). Implementamos diversas características para melhorar a acessibilidade:
                </p>

                <div className="space-y-4 mt-6 mb-8">
                  <div className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">
                      <CheckCircle2 size={14} />
                    </span>
                    <div>
                      <p className="text-slate-800 font-medium mb-1">Compatibilidade com leitores de tela</p>
                      <p className="text-slate-600 text-sm">
                        Nossa plataforma é compatível com tecnologias assistivas como NVDA, JAWS e VoiceOver, utilizando tags semânticas apropriadas e atributos ARIA quando necessário.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">
                      <Eye size={14} />
                    </span>
                    <div>
                      <p className="text-slate-800 font-medium mb-1">Contraste e legibilidade</p>
                      <p className="text-slate-600 text-sm">
                        Utilizamos combinações de cores que garantem contraste suficiente entre texto e fundo, facilitando a leitura para pessoas com baixa visão ou daltonismo.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">
                      <MousePointer size={14} />
                    </span>
                    <div>
                      <p className="text-slate-800 font-medium mb-1">Navegação por teclado</p>
                      <p className="text-slate-600 text-sm">
                        Todos os elementos interativos podem ser acessados e operados usando apenas o teclado, com foco visual claramente visível.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">
                      <Smartphone size={14} />
                    </span>
                    <div>
                      <p className="text-slate-800 font-medium mb-1">Design responsivo</p>
                      <p className="text-slate-600 text-sm">
                        O site se adapta a diferentes tamanhos de tela e dispositivos, garantindo uma experiência consistente para todos os usuários.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">
                      <Braces size={14} />
                    </span>
                    <div>
                      <p className="text-slate-800 font-medium mb-1">Estrutura HTML semântica</p>
                      <p className="text-slate-600 text-sm">
                        Utilizamos marcação HTML semântica adequada, facilitando a navegação e compreensão do conteúdo por tecnologias assistivas.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">3</span>
                  Acessibilidade em Eventos Físicos
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 my-6">
                  <p className="mb-4">
                    Nos eventos presenciais do Circuito Mineiro de Startup Weekend, implementamos medidas para garantir que pessoas com diferentes necessidades possam participar plenamente:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-0">
                    <li>Seleção de locais com acessibilidade física (rampas, elevadores, banheiros adaptados)</li>
                    <li>Disponibilidade de intérpretes de Libras mediante solicitação prévia</li>
                    <li>Materiais impressos em formatos alternativos quando necessário</li>
                    <li>Equipe treinada para auxiliar pessoas com necessidades específicas</li>
                    <li>Áreas reservadas para pessoas com mobilidade reduzida</li>
                    <li>Sinalização clara e visível em todo o espaço do evento</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border border-red-100 my-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                    <EyeOff size={20} className="text-red-600 mr-2" /> Solicitação de Acomodações Específicas
                  </h3>
                  <p className="text-slate-700 mb-0">
                    Se você precisar de acomodações específicas para participar de nossos eventos, por favor entre em contato conosco com pelo menos 7 dias de antecedência para que possamos fazer os arranjos necessários. Faremos o possível para atender todas as solicitações razoáveis.
                  </p>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">4</span>
                  Feedback e Melhorias Contínuas
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 my-6">
                  <p className="mb-0">
                    Reconhecemos que a acessibilidade é uma jornada contínua. Estamos sempre buscando melhorar e aperfeiçoar nossa plataforma e eventos. Se você encontrar qualquer barreira de acessibilidade ou tiver sugestões de como podemos melhorar, por favor entre em contato conosco. Seu feedback é extremamente valioso para nos ajudar a criar uma experiência mais inclusiva para todos.
                  </p>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">5</span>
                  Diretrizes e Conformidade
                </h2>
                <p>
                  Nosso objetivo é atender ou exceder os seguintes padrões e legislações de acessibilidade:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 my-6">
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                    <p className="text-slate-800 font-medium mb-1">WCAG 2.1 Nível AA</p>
                    <p className="text-slate-600 text-sm mb-0">
                      Web Content Accessibility Guidelines - diretrizes internacionais para acessibilidade web
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                    <p className="text-slate-800 font-medium mb-1">Lei Brasileira de Inclusão (Lei nº 13.146/2015)</p>
                    <p className="text-slate-600 text-sm mb-0">
                      Estatuto da Pessoa com Deficiência
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                    <p className="text-slate-800 font-medium mb-1">eMAG</p>
                    <p className="text-slate-600 text-sm mb-0">
                      Modelo de Acessibilidade em Governo Eletrônico
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                    <p className="text-slate-800 font-medium mb-1">W3C WAI-ARIA</p>
                    <p className="text-slate-600 text-sm mb-0">
                      Web Accessibility Initiative - Accessible Rich Internet Applications
                    </p>
                  </div>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">6</span>
                  Dicas para Melhorar sua Experiência
                </h2>
                <p className="mb-4">
                  Aqui estão algumas maneiras de ajustar sua experiência de navegação para melhor acessibilidade:
                </p>
                
                <ul className="list-none space-y-3 pl-0 mb-6">
                  <li className="flex items-start bg-slate-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 text-red-600 mr-3">
                      <ArrowUpRight size={18} />
                    </span>
                    <div>
                      <p className="font-medium text-slate-800 mb-1">Aumentar o tamanho do texto</p>
                      <p className="text-slate-600 text-sm mb-0">Use Ctrl+ (Windows/Linux) ou Command+ (Mac) para aumentar o tamanho do texto da página.</p>
                    </div>
                  </li>
                  <li className="flex items-start bg-slate-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 text-red-600 mr-3">
                      <ArrowUpRight size={18} />
                    </span>
                    <div>
                      <p className="font-medium text-slate-800 mb-1">Navegação por teclado</p>
                      <p className="text-slate-600 text-sm mb-0">Use a tecla Tab para navegar entre elementos interativos e Enter para ativá-los.</p>
                    </div>
                  </li>
                  <li className="flex items-start bg-slate-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 text-red-600 mr-3">
                      <ArrowUpRight size={18} />
                    </span>
                    <div>
                      <p className="font-medium text-slate-800 mb-1">Leitores de tela</p>
                      <p className="text-slate-600 text-sm mb-0">Nossa plataforma é compatível com os principais leitores de tela como NVDA (Windows), VoiceOver (Mac/iOS) e TalkBack (Android).</p>
                    </div>
                  </li>
                  <li className="flex items-start bg-slate-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 text-red-600 mr-3">
                      <ArrowUpRight size={18} />
                    </span>
                    <div>
                      <p className="font-medium text-slate-800 mb-1">Contraste</p>
                      <p className="text-slate-600 text-sm mb-0">Você pode usar configurações de alto contraste do seu navegador ou sistema operacional para melhorar a legibilidade.</p>
                    </div>
                  </li>
                </ul>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">7</span>
                  Contato
                </h2>
                <p className="mb-6">
                  Se você tiver dúvidas, sugestões ou precisar de assistência relacionada à acessibilidade, entre em contato conosco:
                </p>
                
                <div className="bg-slate-50 p-8 rounded-lg border border-slate-100 mt-8 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-red-100 p-4 rounded-full">
                      <Accessibility size={32} className="text-red-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Contato de Acessibilidade</h3>
                    <p className="mb-2">Email: <a href="mailto:acessibilidade@startupweekendmg.com" className="text-red-600 hover:underline">acessibilidade@startupweekendmg.com</a></p>
                    <p className="mb-2">Telefone: +55 (31) 3333-4444</p>
                    <p>Estamos à disposição para ajudar e garantir que você tenha a melhor experiência possível.</p>
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

export default AccessibilityPage; 