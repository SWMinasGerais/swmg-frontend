import React from 'react';
import { Calendar, Users, Award, BookOpen } from "lucide-react";
import { PeriodData, TimelineItem } from "./types";

// Original timeline items for the Startup Weekend events
export const timelineItems: TimelineItem[] = [
  {
    year: "2015",
    title: "Primeiro Startup Weekend em Minas",
    description: "Início do movimento em Belo Horizonte",
    count: "120 participantes",
    icon: React.createElement(Calendar, { className: "h-8 w-8 text-red-600" })
  },
  {
    year: "2017",
    title: "Expansão pelo Estado",
    description: "Chegamos a Uberlândia, Juiz de Fora e Viçosa",
    count: "500+ participantes",
    icon: React.createElement(Users, { className: "h-8 w-8 text-red-600" })
  },
  {
    year: "2019",
    title: "Crescimento e Reconhecimento",
    description: "12 eventos em 8 cidades diferentes",
    count: "1.200+ participantes",
    icon: React.createElement(Award, { className: "h-8 w-8 text-red-600" })
  },
  {
    year: "2023",
    title: "Consolidação do Ecossistema",
    description: "Formação da Rede Mineira de Startups",
    count: "25+ startups nascidas",
    icon: React.createElement(BookOpen, { className: "h-8 w-8 text-red-600" })
  }
];

// Detailed timeline data for the startup ecosystem
export const startupEcosystemData: PeriodData[] = [
  {
    period: "2015-2018",
    title: "Início do Movimento em Minas",
    years: [
      {
        year: "2015",
        events: [
          {
            id: "2015-1",
            text: "Primeiro Startup Weekend em Belo Horizonte",
            tags: ["BH", "Pioneirismo"]
          },
          {
            id: "2015-2",
            text: "Inauguração do San Pedro Valley como hub de startups",
            tags: ["Ecossistema", "BH"]
          },
          {
            id: "2015-3",
            text: "Fundação da primeira aceleradora regional",
            tags: ["Aceleração"]
          }
        ]
      },
      {
        year: "2016",
        events: [
          {
            id: "2016-1",
            text: "Expansão do Startup Weekend para Uberlândia",
            tags: ["Uberlândia", "Expansão"]
          },
          {
            id: "2016-2",
            text: "Criação do primeiro fundo de investimento local",
            tags: ["Investimento"]
          },
          {
            id: "2016-3",
            text: "Primeiro meetup de fundadores de startups em BH",
            tags: ["Comunidade", "BH"]
          }
        ]
      },
      {
        year: "2017",
        events: [
          {
            id: "2017-1",
            text: "Startup Weekend chega a Juiz de Fora",
            tags: ["Juiz de Fora", "Expansão"]
          },
          {
            id: "2017-2",
            text: "Primeira edição em Viçosa",
            tags: ["Viçosa", "Educação"]
          },
          {
            id: "2017-3",
            text: "Lançamento do programa de mentoria estadual",
            tags: ["Mentoria", "Educação"]
          }
        ]
      },
      {
        year: "2018",
        events: [
          {
            id: "2018-1",
            text: "Recorde de 8 eventos Startup Weekend no estado",
            tags: ["Crescimento", "Estado"]
          },
          {
            id: "2018-2",
            text: "Primeira startup mineira captando mais de R$ 10M",
            tags: ["Investimento", "Sucesso"]
          },
          {
            id: "2018-3",
            text: "Integração com universidades e centros de pesquisa",
            tags: ["Educação", "Parceria"]
          }
        ]
      }
    ]
  },
  {
    period: "2019-2021",
    title: "Crescimento e Consolidação",
    years: [
      {
        year: "2019",
        events: [
          {
            id: "2019-1",
            text: "12 eventos Startup Weekend em 8 cidades",
            tags: ["Expansão", "Estado"]
          },
          {
            id: "2019-2",
            text: "Primeiro unicórnio com raízes em Minas Gerais",
            tags: ["Sucesso", "Crescimento"]
          },
          {
            id: "2019-3",
            text: "Criação da Rede Mineira de Startups",
            tags: ["Rede", "Articulação"]
          }
        ]
      },
      {
        year: "2020",
        events: [
          {
            id: "2020-1",
            text: "Adaptação para o formato online durante a pandemia",
            tags: ["Online", "Adaptação"]
          },
          {
            id: "2020-2",
            text: "Recorde de participantes em edições virtuais",
            tags: ["Online", "Crescimento"]
          },
          {
            id: "2020-3",
            text: "Startups mineiras desenvolvendo soluções para a crise",
            tags: ["Inovação", "Pandemia"]
          }
        ]
      },
      {
        year: "2021",
        events: [
          {
            id: "2021-1",
            text: "Retorno gradual aos eventos presenciais",
            tags: ["Presencial", "Retomada"]
          },
          {
            id: "2021-2",
            text: "Lançamento do programa de aceleração estadual",
            tags: ["Aceleração", "Governo"]
          },
          {
            id: "2021-3",
            text: "5 novas cidades entrando no circuito",
            tags: ["Expansão", "Interior"]
          }
        ]
      }
    ]
  },
  {
    period: "2022-2023",
    title: "Maturidade e Reconhecimento",
    years: [
      {
        year: "2022",
        events: [
          {
            id: "2022-1",
            text: "Minas se torna o segundo maior polo de startups do Brasil",
            tags: ["Crescimento", "Reconhecimento"]
          },
          {
            id: "2022-2",
            text: "Startup Weekend completa 25 edições no estado",
            tags: ["Marco", "Celebração"]
          },
          {
            id: "2022-3",
            text: "Integração formal com o ecossistema nacional",
            tags: ["Nacional", "Integração"]
          }
        ]
      },
      {
        year: "2023",
        events: [
          {
            id: "2023-1",
            text: "Formação do Circuito Mineiro de Startup Weekend",
            tags: ["Circuito", "Organização"]
          },
          {
            id: "2023-2",
            text: "25+ startups nascidas diretamente dos eventos",
            tags: ["Impacto", "Sucesso"]
          },
          {
            id: "2023-3",
            text: "Planejamento de expansão para todas as regiões",
            tags: ["Expansão", "Futuro"]
          }
        ]
      }
    ]
  }
]; 