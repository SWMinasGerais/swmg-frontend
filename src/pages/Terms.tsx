import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, Clock, FileTerminal, AlertTriangle, UserCog, Shield, Smartphone, Link, Scale, AlertCircle, CornerRightDown, Gavel } from 'lucide-react';

const TermsPage = () => {
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
                <BookOpen size={40} className="text-red-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Termos de Uso</h1>
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
                  Bem-vindo à plataforma Circuito Mineiro de Startup Weekend. Ao acessar ou utilizar nosso site, você concorda com estes Termos de Uso. Leia atentamente.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-10">
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <div className="text-red-600 mb-3">
                      <FileTerminal size={28} />
                    </div>
                    <h3 className="text-lg font-medium text-slate-900 mb-3">Condições de Uso</h3>
                    <p className="text-slate-600">
                      Diretrizes claras sobre como utilizar nossa plataforma de forma adequada.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <div className="text-red-600 mb-3">
                      <Shield size={28} />
                    </div>
                    <h3 className="text-lg font-medium text-slate-900 mb-3">Proteção Legal</h3>
                    <p className="text-slate-600">
                      Protegemos nossos direitos e os seus através de termos claramente definidos.
                    </p>
                  </div>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">1</span>
                  Aceitação dos Termos
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 my-6">
                  <p className="mb-0">
                    Ao acessar ou utilizar o site do Circuito Mineiro de Startup Weekend ("nós", "nosso" ou "nossos"), você concorda em ficar vinculado por estes Termos de Uso, todas as leis e regulamentos aplicáveis, e concorda que é responsável pelo cumprimento de quaisquer leis locais aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.
                  </p>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">2</span>
                  Uso da Plataforma
                </h2>
                <p>
                  Nossa plataforma foi desenvolvida para conectar empreendedores, mentores e investidores no ecossistema de startups de Minas Gerais. O uso da plataforma está sujeito às seguintes condições:
                </p>

                <div className="space-y-4 mt-6 mb-8">
                  <div className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">
                      <UserCog size={14} />
                    </span>
                    <div>
                      <p className="text-slate-800 font-medium mb-1">Requisitos de Idade</p>
                      <p className="text-slate-600 text-sm">
                        Você deve ter pelo menos 18 anos de idade ou estar sob supervisão de um responsável legal para usar nossos serviços.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">
                      <Shield size={14} />
                    </span>
                    <div>
                      <p className="text-slate-800 font-medium mb-1">Segurança da Conta</p>
                      <p className="text-slate-600 text-sm">
                        Você é responsável por manter a confidencialidade de suas credenciais de conta e por todas as atividades que ocorrem sob sua conta.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">
                      <AlertTriangle size={14} />
                    </span>
                    <div>
                      <p className="text-slate-800 font-medium mb-1">Uso Permitido</p>
                      <p className="text-slate-600 text-sm">
                        Você concorda em não usar a plataforma para qualquer finalidade ilegal ou proibida por estes termos.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">
                      <AlertCircle size={14} />
                    </span>
                    <div>
                      <p className="text-slate-800 font-medium mb-1">Acesso Não Autorizado</p>
                      <p className="text-slate-600 text-sm">
                        Você não deve tentar obter acesso não autorizado a qualquer parte da plataforma, outros sistemas ou redes conectadas à plataforma.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="flex-shrink-0 bg-red-50 text-red-600 w-6 h-6 inline-flex items-center justify-center rounded-full mr-3 text-xs font-bold mt-0.5">
                      <FileTerminal size={14} />
                    </span>
                    <div>
                      <p className="text-slate-800 font-medium mb-1">Restrições de Uso</p>
                      <p className="text-slate-600 text-sm">
                        Você concorda em não reproduzir, duplicar, copiar, vender, revender ou explorar qualquer parte da plataforma sem nossa permissão expressa por escrito.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">3</span>
                  Conteúdo do Usuário
                </h2>
                <p>
                  Ao enviar, postar ou exibir conteúdo em nossa plataforma, você nos concede uma licença mundial, não exclusiva, livre de royalties para usar, reproduzir, adaptar, publicar, traduzir e distribuir seu conteúdo em qualquer mídia. Você declara e garante que:
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 my-6">
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-100 flex flex-col items-center text-center">
                    <div className="bg-red-50 p-3 rounded-full mb-4">
                      <Shield size={24} className="text-red-600" />
                    </div>
                    <p className="text-slate-800 text-sm">
                      Você possui ou controla todos os direitos sobre o conteúdo que posta.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-100 flex flex-col items-center text-center">
                    <div className="bg-red-50 p-3 rounded-full mb-4">
                      <Scale size={24} className="text-red-600" />
                    </div>
                    <p className="text-slate-800 text-sm">
                      O conteúdo é preciso e não enganoso.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-100 flex flex-col items-center text-center">
                    <div className="bg-red-50 p-3 rounded-full mb-4">
                      <AlertCircle size={24} className="text-red-600" />
                    </div>
                    <p className="text-slate-800 text-sm">
                      O uso do conteúdo não causará danos a nenhuma pessoa ou entidade.
                    </p>
                  </div>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg border border-red-100 my-6">
                  <p className="flex items-center">
                    <AlertTriangle size={20} className="text-red-600 mr-3 flex-shrink-0" />
                    <span>
                      Reservamo-nos o direito de remover qualquer conteúdo que considerarmos, a nosso exclusivo critério, violar estes termos ou ser de outra forma ofensivo, prejudicial, ilegal ou que viole os direitos de terceiros.
                    </span>
                  </p>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">4</span>
                  Propriedade Intelectual
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 my-6">
                  <p className="mb-4">
                    O site e todo o seu conteúdo, recursos e funcionalidades (incluindo, mas não limitado a, informações, software, textos, displays, imagens, vídeos e áudios, bem como seu design, seleção e arranjo) são de nossa propriedade ou de nossos licenciadores e são protegidos por leis brasileiras e internacionais de direitos autorais, marcas registradas, patentes, segredos comerciais e outras leis de propriedade intelectual.
                  </p>
                  <p className="mb-0">
                    Você não deve reproduzir, distribuir, modificar, criar trabalhos derivados, exibir publicamente, executar publicamente, republicar, baixar, armazenar ou transmitir qualquer material de nosso site, exceto conforme permitido por estes Termos de Uso.
                  </p>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">5</span>
                  Links para Outros Sites
                </h2>
                <div className="flex items-start gap-4 mb-6">
                  <div className="mt-1 flex-shrink-0">
                    <Link size={24} className="text-red-600" />
                  </div>
                  <div>
                    <p className="mb-4">
                      Nossa plataforma pode conter links para sites de terceiros que não são de nossa propriedade ou controlados por nós. Não temos controle sobre, e não assumimos nenhuma responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites de terceiros. Além disso, não censuraremos ou editaremos o conteúdo de qualquer site de terceiros.
                    </p>
                    <p>
                      Você reconhece e concorda que não seremos responsáveis, direta ou indiretamente, por qualquer dano ou perda causada ou alegadamente causada por ou em conexão com o uso ou confiança em qualquer conteúdo, bens ou serviços disponíveis em ou através de tais sites.
                    </p>
                  </div>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">6</span>
                  Limitação de Responsabilidade
                </h2>
                <p className="mb-4">
                  Em nenhuma circunstância seremos responsáveis por quaisquer danos diretos, indiretos, especiais, incidentais, consequenciais ou punitivos, incluindo, entre outros, perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis, resultantes de:
                </p>
                
                <ul className="list-none space-y-3 pl-0 mb-6">
                  <li className="flex items-start bg-slate-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 text-red-600 mr-3">
                      <CornerRightDown size={18} />
                    </span>
                    <span>Seu acesso ou uso ou incapacidade de acessar ou usar a plataforma.</span>
                  </li>
                  <li className="flex items-start bg-slate-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 text-red-600 mr-3">
                      <CornerRightDown size={18} />
                    </span>
                    <span>Qualquer conduta ou conteúdo de terceiros na plataforma.</span>
                  </li>
                  <li className="flex items-start bg-slate-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 text-red-600 mr-3">
                      <CornerRightDown size={18} />
                    </span>
                    <span>Conteúdo obtido da plataforma.</span>
                  </li>
                  <li className="flex items-start bg-slate-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 text-red-600 mr-3">
                      <CornerRightDown size={18} />
                    </span>
                    <span>Acesso não autorizado, uso ou alteração de suas transmissões ou conteúdo.</span>
                  </li>
                </ul>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">7</span>
                  Isenção de Garantias
                </h2>
                <div className="bg-red-50 p-6 rounded-lg border border-red-100 my-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-red-600 mr-3 mt-1">
                      <AlertTriangle size={20} />
                    </div>
                    <div>
                      <p className="mb-4">
                        A plataforma é fornecida "como está" e "conforme disponível", sem garantias de qualquer tipo, expressas ou implícitas. Na extensão máxima permitida pela lei aplicável, nós nos isentamos de todas as garantias, expressas ou implícitas, incluindo, mas não se limitando a, garantias implícitas de comercialização, adequação a uma finalidade específica e não violação.
                      </p>
                      <p className="mb-0">
                        Não garantimos que a plataforma atenderá aos seus requisitos, estará disponível de forma ininterrupta, oportuna, segura ou livre de erros, ou que os resultados que possam ser obtidos do uso da plataforma serão precisos ou confiáveis.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">8</span>
                  Alterações dos Termos
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 my-6">
                  <p className="mb-4">
                    Reservamo-nos o direito, a nosso exclusivo critério, de modificar ou substituir estes Termos de Uso a qualquer momento. Se uma revisão for material, faremos esforços razoáveis para fornecer pelo menos 30 dias de aviso antes que quaisquer novos termos entrem em vigor. O que constitui uma alteração material será determinado a nosso exclusivo critério.
                  </p>
                  <p className="mb-0">
                    Ao continuar a acessar ou usar nossa plataforma após essas revisões se tornarem efetivas, você concorda em ficar vinculado aos termos revisados. Se você não concordar com os novos termos, deixe de usar a plataforma.
                  </p>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">9</span>
                  Indenização
                </h2>
                <div className="p-6 border-l-4 border-red-600 bg-red-50 my-6">
                  <p className="italic text-slate-700 mb-0">
                    Você concorda em defender, indenizar e isentar o Circuito Mineiro de Startup Weekend, seus dirigentes, diretores, funcionários, agentes, licenciadores, fornecedores de serviços e fornecedores de todas e quaisquer reclamações, responsabilidades, danos, julgamentos, prêmios, perdas, custos, despesas ou taxas (incluindo honorários advocatícios razoáveis) decorrentes ou relacionados à sua violação destes Termos de Uso.
                  </p>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">10</span>
                  Lei Aplicável e Jurisdição
                </h2>
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 mt-1">
                    <Gavel size={24} className="text-red-600" />
                  </div>
                  <div>
                    <p className="mb-4">
                      Estes Termos de Uso e quaisquer disputas ou reclamações decorrentes de ou relacionadas a estes termos ou seu assunto ou formação (incluindo disputas ou reclamações não contratuais) serão regidos e interpretados de acordo com as leis do Brasil.
                    </p>
                    <p>
                      Qualquer disputa legal que surgir de ou relacionada ao uso de nossa plataforma será resolvida exclusivamente nos tribunais localizados em Belo Horizonte, Minas Gerais, Brasil, e você consente com a jurisdição pessoal nessas cortes.
                    </p>
                  </div>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">11</span>
                  Resilição
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 my-6">
                  <p className="mb-0">
                    Podemos encerrar ou suspender seu acesso imediatamente, sem aviso prévio ou responsabilidade, por qualquer motivo, incluindo, sem limitação, se você violar estes Termos de Uso. Após a rescisão, seu direito de usar a plataforma cessará imediatamente.
                  </p>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">12</span>
                  Disposições Gerais
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 my-6">
                  <p className="mb-4">
                    O fato de não exercermos ou aplicarmos qualquer direito ou disposição destes Termos de Uso não constituirá uma renúncia a tal direito ou disposição. Se qualquer disposição destes Termos de Uso for considerada ilegal, nula ou inexequível, essa disposição será executável na extensão máxima permitida pela lei aplicável, e a parte inexequível será considerada como separada destes Termos de Uso, tal determinação não afetando a validade e aplicabilidade de quaisquer outras disposições restantes.
                  </p>
                  <p className="mb-0">
                    Estes Termos de Uso constituem o acordo integral entre você e o Circuito Mineiro de Startup Weekend em relação à nossa plataforma e substituem quaisquer acordos anteriores e contemporâneos, comunicações e propostas, sejam verbais ou escritas, entre você e nós.
                  </p>
                </div>

                <h2 className="group flex items-center text-2xl font-bold mt-12 mb-6">
                  <span className="bg-red-50 text-red-600 w-8 h-8 inline-flex items-center justify-center rounded-full mr-3 text-sm font-bold">13</span>
                  Contato
                </h2>
                <p className="mb-6">
                  Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
                </p>
                
                <div className="bg-slate-50 p-8 rounded-lg border border-slate-100 mt-8 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-red-100 p-4 rounded-full">
                      <BookOpen size={32} className="text-red-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Contato</h3>
                    <p className="mb-2">Email: <a href="mailto:termos@startupweekendmg.com" className="text-red-600 hover:underline">termos@startupweekendmg.com</a></p>
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

export default TermsPage;
