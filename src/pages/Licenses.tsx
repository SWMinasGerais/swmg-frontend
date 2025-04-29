import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LicensesPage = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString('pt-BR');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Licenças de Software</h1>
              <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            </div>

            <div className="prose prose-slate max-w-none">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-8">
                <p className="text-sm text-slate-700">
                  <strong>Última atualização:</strong> {lastUpdated}
                </p>
              </div>

              <p className="lead text-xl text-slate-700 mb-8">
                O Circuito Mineiro de Startup Weekend utiliza vários softwares de código aberto para proporcionar 
                a melhor experiência possível. Abaixo, listamos as principais licenças e bibliotecas utilizadas em nosso site.
              </p>

              <h2>1. Bibliotecas e Frameworks Principais</h2>
              
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Next.js</h3>
                <p className="mb-2">Versão: 14.x</p>
                <p className="mb-2">Licença: MIT</p>
                <p className="text-sm">
                  Copyright (c) Vercel, Inc.<br />
                  A permissão é concedida, gratuitamente, a qualquer pessoa que obtenha uma cópia deste software e 
                  dos arquivos de documentação associados, para lidar com o software sem restrição, incluindo, 
                  sem limitação, os direitos de usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar 
                  e/ou vender cópias do software.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-3">React</h3>
                <p className="mb-2">Versão: 18.x</p>
                <p className="mb-2">Licença: MIT</p>
                <p className="text-sm">
                  Copyright (c) Meta Platforms, Inc. e afiliados.<br />
                  A permissão é concedida, gratuitamente, a qualquer pessoa que obtenha uma cópia deste software e 
                  dos arquivos de documentação associados, para lidar com o software sem restrição, incluindo, 
                  sem limitação, os direitos de usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar 
                  e/ou vender cópias do software.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Tailwind CSS</h3>
                <p className="mb-2">Versão: 3.x</p>
                <p className="mb-2">Licença: MIT</p>
                <p className="text-sm">
                  Copyright (c) Tailwind Labs, Inc.<br />
                  A permissão é concedida, gratuitamente, a qualquer pessoa que obtenha uma cópia deste software e 
                  dos arquivos de documentação associados, para lidar com o software sem restrição, incluindo, 
                  sem limitação, os direitos de usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar 
                  e/ou vender cópias do software.
                </p>
              </div>

              <h2>2. Bibliotecas e Dependências Adicionais</h2>

              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">axios</h3>
                  <p className="mb-1">Versão: 1.x</p>
                  <p>Licença: MIT</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">lucide-react</h3>
                  <p className="mb-1">Versão: 0.x</p>
                  <p>Licença: ISC</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">framer-motion</h3>
                  <p className="mb-1">Versão: 10.x</p>
                  <p>Licença: MIT</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">date-fns</h3>
                  <p className="mb-1">Versão: 2.x</p>
                  <p>Licença: MIT</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">react-hook-form</h3>
                  <p className="mb-1">Versão: 7.x</p>
                  <p>Licença: MIT</p>
                </div>
              </div>

              <h2 className="mt-10">3. Licença MIT</h2>
              <p>A maioria das dependências utilizadas neste projeto está sob a licença MIT, que estabelece:</p>
              
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-8 text-sm">
                <p className="mb-2">
                  A permissão é concedida, gratuitamente, a qualquer pessoa que obtenha uma cópia deste software e 
                  dos arquivos de documentação associados (o "Software"), para lidar com o Software sem restrição, 
                  incluindo, sem limitação, os direitos de usar, copiar, modificar, mesclar, publicar, distribuir, 
                  sublicenciar e/ou vender cópias do Software, e permitir que as pessoas a quem o Software é 
                  fornecido o façam, sob as seguintes condições:
                </p>
                <p className="mb-2">
                  O aviso de direitos autorais acima e este aviso de permissão devem ser incluídos em todas as 
                  cópias ou partes substanciais do Software.
                </p>
                <p>
                  O SOFTWARE É FORNECIDO "COMO ESTÁ", SEM GARANTIA DE QUALQUER TIPO, EXPRESSA OU IMPLÍCITA, 
                  INCLUINDO, MAS NÃO SE LIMITANDO ÀS GARANTIAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UM DETERMINADO FIM 
                  E NÃO VIOLAÇÃO. EM NENHUMA CIRCUNSTÂNCIA, OS AUTORES OU TITULARES DE DIREITOS AUTORAIS SERÃO 
                  RESPONSÁVEIS POR QUALQUER RECLAMAÇÃO, DANOS OU OUTRA RESPONSABILIDADE, SEJA EM AÇÃO DE CONTRATO, 
                  DELITO OU DE OUTRA FORMA, DECORRENTE DE, OU EM CONEXÃO COM O SOFTWARE OU O USO OU OUTRAS 
                  NEGOCIAÇÕES NO SOFTWARE.
                </p>
              </div>

              <h2>4. Atribuições e Agradecimentos</h2>
              <p>
                Gostaríamos de agradecer às comunidades de código aberto que desenvolvem e mantêm estas bibliotecas, 
                tornando possível construir experiências web modernas e de alta qualidade.
              </p>
              <p>
                Para obter mais informações sobre qualquer uma destas bibliotecas, visite seus respectivos 
                repositórios no GitHub ou sites oficiais.
              </p>

              <h2 className="mt-10">5. Licenças de Conteúdo</h2>
              <p>
                As imagens, logotipos e conteúdos textuais do Circuito Mineiro de Startup Weekend são propriedade 
                do evento e seus respectivos criadores, salvo indicação em contrário. A utilização deste conteúdo 
                fora deste site requer autorização prévia.
              </p>
              <p>
                Alguns ícones e imagens utilizados neste site podem ser licenciados sob outras licenças como 
                Creative Commons ou similares, com as devidas atribuições mantidas conforme exigido.
              </p>

              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mt-12">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Contato</h3>
                <p>Para quaisquer dúvidas relacionadas às licenças utilizadas neste site, entre em contato:</p>
                <p>Email: <a href="mailto:legal@startupweekendmg.com" className="text-red-600 hover:underline">legal@startupweekendmg.com</a></p>
                <p>Telefone: +55 (31) 9999-7777</p>
              </div>

              <div className="mt-12 text-center">
                <p className="text-sm text-slate-500">
                  © {currentYear} Circuito Mineiro de Startup Weekend. Todos os direitos reservados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LicensesPage;
