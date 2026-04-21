# Spec 11 - Sponsor Pricing Section

## Problema Atual
- Cards apertados horizontalmente
- Visualmente fraco, parece tabela de preços genérica
- Não conecta visualmente com a seção de parceiros

## Design Novo

### Layout
- **Fundo escuro:** `#1A1A1A` (carvão)
- Padding: `py-20`

### Estrutura

#### Header
1. **Eyebrow:** "Patrocínio" em vermelho
2. **Título:** "Seja parte do maior evento de empreendedorismo" — text-4xl md:text-5xl, font-black, text-white
3. **Descrição:** texto atual preservado (empresa pode fazer parte... ecossistema de inovação em MG)

#### Benefícios Gerais (3 cards horizontais)
- Projeto Voluntário — ícone Heart
- Impacto no Ecossistema — ícone Globe
- Soft Skills Desenvolvidas — ícone Lightbulb
- Cards: fundo `#2D2D2D`, ícone vermelho, texto branco
- Descrições preservadas

#### Categorias de Patrocínio
- Accordion/cards para cada categoria:

**Bronze Municipal — R$ 2.000** (a partir de)
- Escopo: "Cota para evento em sua região"
- Benefícios listados (todos preservados)
- Card: fundo `#2D2D2D`, borda esquerda bronze (#CD7F32)

**Bronze Estadual — R$ 10.000** (por 1 ano)
- Escopo: "Cota para todos os eventos em MG"
- Benefícios listados (todos preservados)
- Card: fundo `#2D2D2D`, borda esquerda bronze (#CD7F32)

**Apoio e Mídia — Permuta**
- Tipos de parceria listados (todos preservados)
- Card: fundo `#2D2D2D`, borda esquerda gray

- **Destaque no tier mais popular:** "Mais escolhido" badge em vermelho no Bronze Estadual
- **CTA:** "Ver tabela comparativa" → dialog/modal com tabela completa de todos os tiers
- **Botão:** "Quero patrocinar" → link para contato

#### Tabela Comparativa (dialog)
- Comparação de features por tier (Diamante, Platina, Ouro, Prata, Bronze)
- Checkmarks vermelhos, X cinzas
- Preservar todos os benefícios por tier existentes

### Conteúdo Preservado
- Todos os 3 benefícios gerais com descrições
- Bronze Municipal: preço R$ 2.000, todos benefícios
- Bronze Estadual: preço R$ 10.000, todos benefícios
- Apoio e Mídia: todos tipos de parceria
- Tabela comparativa completa

### Animações
- Cards de benefícios: `stagger fadeInUp`
- Pricing cards: `fadeInUp` staggered
- Preços: `countUp` (R$ 0 → R$ 2.000)
- Popular badge: `pulse` sutil
- Hover cards: `whileHover={{ y: -6, borderLeftWidth: "6px" }}`
- Modal: `AnimatePresence` fade + scale
