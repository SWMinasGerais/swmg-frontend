# Spec 12 - Blog Section

## Problema Atual
- Card featured com placeholder "Blog" genérico sem imagem real
- Layout de grid não aproveita espaço
- Fundo branco genérico

## Design Novo

### Layout
- **Fundo claro:** `#F5F5F0` (warm gray)
- Padding: `py-20`

### Estrutura

#### Header
1. **Eyebrow:** "Blog & Notícias" em vermelho
2. **Título:** "Dicas e histórias de sucesso" — text-4xl md:text-5xl, font-black
3. **Descrição:** texto atual preservado
4. **CTA inline:** "Ver todos os artigos →" — link vermelho

#### Featured Post (primeiro post)
- Layout horizontal: imagem esquerda (60%) + conteúdo direita (40%)
- Imagem stock de empreendedorismo com overlay gradiente escuro sutil
- Categoria badge (pill vermelho)
- Tempo de leitura
- Título grande (text-2xl font-bold)
- Excerpt
- Autor + data
- Card: fundo branco, shadow-lg, border-radius 16px
- Hover: shadow-xl, imagem zoom sutil

#### Grid de Posts (demais posts)
- Grid 3 colunas (lg), 2 (md), 1 (sm)
- Cada card:
  - **Imagem topo:** stock foto relevante, aspect-ratio 16/9, border-radius 12px top
  - **Categoria badge:** pill posicionado sobre a imagem no canto
  - **Tempo de leitura:** text-xs text-gray-500
  - **Título:** text-lg font-bold, 2 linhas max
  - **Excerpt:** text-sm text-gray-600, 2 linhas
  - **Footer:** avatar mini + nome autor + data
  - **Hover:** card eleva, imagem zoom in sutil

#### Newsletter Signup (inline)
- Card escuro (carvão) com texto branco
- "Receba novidades do ecossistema mineiro"
- Input email + botão "Inscrever"
- Design: pill input + botão vermelho

### Conteúdo Preservado (todos os 6 posts, datas atualizadas para 2026)
1. "Como validar sua ideia de startup..." — Fernanda Oliveira, 12 Out 2026
2. "7 dicas para um pitch perfeito..." — Ricardo Ferreira, 28 Set 2026
3. "A jornada da EduTech MG..." — Ana Costa, 15 Set 2026
4. "O ecossistema de inovação em Uberlândia..." — Amanda Rocha, 03 Set 2026
5. "Calendário de eventos 2026..." — Carolina Silva, 20 Ago 2026
6. "MVP: o que é e como criar..." — Rafael Santos, 10 Ago 2026

### Animações
- Featured post: `fadeInLeft` (imagem) + `fadeInRight` (conteúdo)
- Grid cards: `stagger fadeInUp`
- Image hover: `whileHover={{ scale: 1.05 }}` com overflow hidden
- Newsletter card: `fadeInUp`
