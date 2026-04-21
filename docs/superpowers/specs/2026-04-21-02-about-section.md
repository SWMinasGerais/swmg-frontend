# Spec 02 - About / Sobre Section

## Problema Atual
- Layout split 50/50 (texto esquerda, timeline direita) não funciona bem
- Timeline compacta demais, difícil de ler
- Informações de "Nossa Missão/Visão" são genéricas
- Fundo branco sem personalidade

## Design Novo

### Layout
- **Fundo claro:** `#FAFAF8` (off-white quente)
- Padding: `py-20`
- Container max-w-6xl centralizado

### Estrutura

#### Bloco 1 - Intro (text-center)
1. **Eyebrow:** "Sobre nós" em vermelho, uppercase, tracking-widest, font-semibold
2. **Título:** "Circuito Mineiro de Startup Weekend" — text-4xl md:text-5xl, font-black, text-slate-900
3. **Descrição:** parágrafo atual preservado — text-lg, text-gray-600, max-w-3xl mx-auto
4. **Missão + Visão** em 2 cards lado a lado:
   - Card com ícone vermelho, título bold, texto — fundo branco, shadow-sm, border-l-4 vermelho
   - Missão: conteúdo atual preservado
   - Visão: conteúdo atual preservado

#### Bloco 2 - Timeline Vertical (centralizada)
- Linha vertical central vermelha (2px)
- Items alternando esquerda/direita
- Cada item: card branco com shadow, hover elevation
  - Ano em badge vermelho circular
  - Título do marco
  - Descrição
  - Ícone representativo
- Timeline agrupada por períodos (preservar todos os períodos existentes):
  - 1972-1997: Raízes Acadêmicas
  - 1998-1999: Fundações
  - 2000-2009: Pioneirismo Digital
  - 2010-2014: Surgimento das Comunidades
  - 2015-2018: Fortalecimento
  - 2019-2021: Ascensão Global
  - 2022-2026: Maturidade e Reconhecimento (atualizado)
- Por padrão mostrar apenas 2022-2026 expandido
- Botão "Ver história completa" expande todos os períodos

### Conteúdo Preservado
- Toda a descrição do Circuito Mineiro
- Missão e Visão completas
- TODOS os marcos da timeline (1972 até 2025)
- Atualizar período final para incluir 2026

### Conteúdo Adicionado para 2026
- 2026: "Circuito Mineiro atinge 150+ eventos realizados; expansão para novas cidades do interior"

### Animações
- Intro block: `fadeInUp` staggered
- Timeline items: `fadeInLeft` / `fadeInRight` alternando, trigger `whileInView`
- Linha da timeline: cresce de cima para baixo animada
- Year badges: `scaleIn` com bounce

### Responsivo
- Mobile: timeline single-column (tudo à direita da linha)
- Desktop: alternância esquerda/direita
