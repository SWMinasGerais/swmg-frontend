# Spec 17 - Página /eventos/:slug (Event Details)

## Problema Atual
- Design escuro funcional mas cards de info muito simples
- Sem seção de membros/participantes
- Sem seção de startups nascidas
- Rota em inglês `/events/:id`

## Mudança de Rota
- De: `/events/:id`
- Para: `/eventos/:slug`
- Slug format: `startup-weekend-{tema}-{cidade}-{ano}`
- Exemplo: `/eventos/startup-weekend-edtech-belo-horizonte-2026`

## Design Novo

### Layout
- **Fundo base:** `#111` (escuro)

### Estrutura

#### Hero do Evento
- Fullwidth, ~50vh
- Imagem de fundo stock do tema (edtech=sala de aula, health=hospital, agro=campo) com overlay escuro
- Badge de tema (pill colorido)
- **Título:** nome completo do evento — text-5xl font-black text-white
- **Cidade** — text-xl text-gray-300
- **Info row:** Data | Local | Vagas (ícones + texto)
- **CTA:** "Inscrever-se" (vermelho, grande) para futuros / "Encerrado" (gray) para passados

#### Sobre o Evento
- Fundo `#1A1A1A`
- Descrição completa do evento
- Sponsors com logos
- Tema e objetivos

#### Cronograma (3 dias)
- Layout visual de 3 colunas: Sexta | Sábado | Domingo
- Cada dia com horários e atividades
- Design: cards `#2D2D2D`, ícones por tipo de atividade

#### Mentores do Evento
- Grid de mentor cards (reutilizar design spec 07)
- Filtrado para mentores relevantes ao evento

#### Startups Nascidas (para eventos passados)
- Grid de startup cards (reutilizar design spec 04)
- Destaque para a vencedora (borda dourada + badge "Vencedora")

#### Participantes/Membros (para eventos passados)
- Contador de participantes (countUp)
- Grid de avatares (fotos stock) com role badges (Hacker/Hustler/Hipster)
- Stats: total participantes, por role, por gênero

#### Galeria (placeholder)
- Grid de fotos (stock temporário)
- Lightbox ao clicar

#### CTA Final
- "Próximo Evento" card com link para o próximo evento
- Ou "Ver todos os eventos" → `/eventos`

### Conteúdo Preservado
- Todos os dados de cada evento (nome, data, local, tema, descrição, vagas, sponsors)
- Adicionar: seções de membros e startups (mock data por enquanto)

### SEO
- Title: "{Nome do Evento} | Startup Weekend MG"
- Meta description dinâmica com tema, cidade, data
- URL: `/eventos/startup-weekend-{tema}-{cidade}-{ano}`

### Animações
- Hero: parallax sutil
- Info cards: `stagger fadeInUp`
- Timeline: `stagger fadeInLeft`
- Startup cards: `stagger scaleIn`
- Galeria: `stagger fadeIn`
