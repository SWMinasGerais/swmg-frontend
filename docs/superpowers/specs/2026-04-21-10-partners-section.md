# Spec 10 - Parceiros Section (com Gamificação)

## Problema Atual
- Seção ENORME (~9700px, um terço da página)
- Filtros demais ocupando espaço
- Cards grandes com muito whitespace
- Tabs Parceiros/Ranking adicionam complexidade

## Design Novo — Gamificação por Visibilidade

### Conceito de Gamificação
Parceiros de tiers mais altos ganham MAIS visibilidade:
- **Diamante:** logo grande (120px), card com glow vermelho, posição destacada, animação especial
- **Platina:** logo médio-grande (96px), card com borda dourada
- **Ouro:** logo médio (80px), card normal com borda sutil
- **Prata:** logo pequeno-médio (64px), card compacto
- **Bronze:** logo pequeno (48px), lista compacta
- **Apoio/Mídia:** logo mini (40px), row simples

Isso incentiva parceiros a subir de tier para ganhar mais exposição.

### Layout
- **Fundo claro:** `#FAFAF8` (off-white)
- Padding: `py-20`

### Estrutura

#### Header
1. **Eyebrow:** "Parceiros" em vermelho
2. **Título:** "Quem Apoia o SWMG" — text-4xl md:text-5xl, font-black
3. **Descrição:** texto atual preservado
4. **Tabs:** Parceiros | Ranking — pills, ativa = vermelho

#### Filtros (compactos)
- Row 1: Categoria pills — Todas | Governo | Acadêmico | Desenvolvimento | Privado | Hubs | Mídia | Associações
- Row 2: Localidade pills — Todos | Estado | BH | Uberlândia | JF | Montes Claros | etc.
- Design: pills menores, fundo branco/borda, ativa = vermelho

#### Tiers como Accordions
Cada tier é um accordion que começa expandido:

**Diamante (expandido por padrão):**
- Header: badge "Diamante" com ícone diamante + glow, count "(11)"
- Grid: cards grandes 4 por linha
- Card: fundo branco, shadow-lg, borda esquerda 4px gradiente vermelho→laranja
- Logo 120px centralizado
- Nome abaixo, cidade badge
- **Animação especial:** shimmer/glow effect contínuo no border

**Platina:**
- Header: badge "Platina" com ícone
- Grid: cards médios 5 por linha
- Card: fundo branco, shadow-md, borda esquerda 4px dourada
- Logo 96px

**Ouro:**
- Header: badge "Ouro" com ícone
- Grid: cards menores 6 por linha
- Card: fundo branco, shadow-sm
- Logo 80px

**Prata:**
- Grid: 8 por linha, cards compactos
- Logo 64px, nome small

**Bronze:**
- Lista compacta, logos inline
- Logo 48px em row com wrap

**Apoio & Mídia:**
- Row simples de logos 40px
- Grayscale, hover = cor

#### Tab Ranking
- Leaderboard visual
- Cada parceiro: posição (#1, #2...), logo, nome, tier badge, cidade, score de visibilidade
- Top 3 destacados com cores (ouro, prata, bronze)
- Barra de progresso mostrando "visibilidade" relativa

### Conteúdo Preservado
- TODOS os parceiros mantidos (nenhum omitido)
- Todas as categorias e localidades
- Todos os tiers e classificações
- Sistema de ranking existente

### Animações
- Accordion open/close: `AnimatePresence` com height animation
- Cards dentro do tier: `stagger fadeInUp` ao expandir
- Diamante cards: `shimmer` keyframe contínuo no border
- Hover cards: `whileHover={{ y: -4, shadow: "xl" }}`
- Ranking list: `stagger slideInLeft`
- Logo hover: grayscale → cor (para tiers menores)
