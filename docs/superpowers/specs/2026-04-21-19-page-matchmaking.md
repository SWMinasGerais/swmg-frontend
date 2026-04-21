# Spec 19 - Página /matchmaking

## Problema Atual
- Visual funcional mas genérico
- Cards de participantes sem personalidade
- Filtros básicos
- Cores por role (azul/verde/roxo) são os únicos diferenciadores

## Design Novo

### Layout
- **Fundo:** `#111` (escuro)

### Estrutura

#### Hero da Página
- Altura reduzida (~30vh)
- Fundo: gradiente carvão
- **Título:** "Matchmaking SW" — text-4xl font-black text-white
- **Subtítulo:** "Encontre a equipe perfeita. Filtre talentos por perfis e habilidades."
- 3 ícones coloridos representando os roles: Hacker (azul) | Hustler (verde) | Hipster (roxo)

#### Filtros
- Search input: fundo `#2D2D2D`
- Role pills com cores:
  - Todos (vermelho)
  - Hacker (azul `#3B82F6`)
  - Hustler (verde `#22C55E`)
  - Hipster (roxo `#A855F7`)
- Skills pills (baseado nos skills disponíveis)

#### Grid de Participantes
- Grid 3 colunas (lg), 2 (md), 1 (sm)
- Cada card:
  - **Fundo:** `#2D2D2D`, border-radius 16px
  - **Borda top:** cor do role (4px) — azul/verde/roxo
  - **Avatar:** foto stock, circular 72px, border cor do role
  - **Nome:** text-lg font-bold text-white
  - **Role badge:** pill com cor e ícone
    - Hacker: 💻 Tech/Code — azul
    - Hustler: 📈 Business — verde
    - Hipster: 🎨 Design — roxo
  - **Skills:** pills pequenos em row (max 4 visíveis + "+N")
  - **Botão:** "Convidar para equipe" — outline cor do role, hover fill
  - **Hover:** card eleva, glow sutil na cor do role

#### Stats Bar (topo, após filtros)
- "X participantes encontrados" | "Y Hackers" | "Z Hustlers" | "W Hipsters"
- Barra de proporção visual (azul/verde/roxo)

### Conteúdo Preservado
- Search e filtros por role
- Estrutura de participante: nome, role, skills, contato
- Todos os mock participants existentes
- Lógica de filtro

### Animações
- Cards: `stagger fadeInUp`
- Role pills: `fadeIn` com cor
- Stats: `countUp`
- Hover: `whileHover={{ y: -6, boxShadow: "0 0 20px {roleColor}40" }}`
- Filter change: `layout` animation com AnimatePresence
