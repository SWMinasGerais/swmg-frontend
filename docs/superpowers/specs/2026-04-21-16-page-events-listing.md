# Spec 16 - Página /eventos (Nova - Listagem Completa)

## Descrição
Nova página dedicada à listagem de TODOS os eventos (128+ históricos + atuais). Serve como arquivo completo e para SEO com slugs descritivos.

## Layout
- **Fundo:** `#111` (escuro)
- Navbar fixa (escura)
- Footer padrão

### Estrutura

#### Hero da Página
- Altura reduzida (~40vh)
- Fundo: imagem stock de evento com overlay escuro
- Título: "Todos os Eventos" — text-5xl font-black text-white
- Subtítulo: "128+ eventos realizados desde 2013 em Minas Gerais"
- Stats: Eventos | Cidades | Participantes | Startups nascidas (countUp)

#### Filtros (sticky ao scrollar)
- Barra sticky: fundo `#1A1A1A` com blur
- Search input
- Ano: dropdown ou pills (2013-2026)
- Cidade: dropdown
- Tema: dropdown
- Status: Todos | Próximos | Encerrados
- Botão "Limpar filtros"

#### Grid de Eventos
- Grid 3 colunas (lg), 2 (md), 1 (sm)
- Cards iguais ao da seção de eventos na homepage (spec 03)
- **Diferencial para eventos passados:**
  - Badge "Encerrado" cinza
  - Mostra: número de participantes, startups nascidas, vencedor
  - Imagem com overlay cinza leve (diferencia dos futuros)
- Load more ou paginação (20 por página)

#### Cada card de evento passado mostra
- Imagem (stock)
- Nome completo do evento
- Data e local
- Tema badge
- Número de participantes
- Startup vencedora (se houver)
- Link "Ver detalhes" → `/eventos/startup-weekend-{tema}-{cidade}-{ano}`

### Conteúdo
- TODOS os 128+ eventos do eventsData.ts
- 5 eventos atuais do modules/events/data.ts (datas 2026)
- Manter todos os dados: nome, data, local, tema, vencedor, participantes

### SEO
- Title: "Eventos Startup Weekend Minas Gerais | SWMG"
- Meta description: "Confira todos os eventos do Circuito Mineiro de Startup Weekend desde 2013. 128+ edições em diversas cidades de MG."
- URL: `/eventos`

### Animações
- Cards: `stagger fadeInUp` ao carregar mais
- Filtros: transição suave ao filtrar (layout animation)
- Stats hero: `countUp`
