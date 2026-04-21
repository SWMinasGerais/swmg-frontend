# Spec 06 - Mentoria (Programa de Mentoria) Section

## Problema Atual
- 3 cards genéricos de benefícios sem apelo visual
- Sem imagem ou elemento visual forte
- Fundo branco genérico

## Design Novo

### Layout
- **Fundo claro:** `#FAFAF8` (off-white)
- Padding: `py-20`

### Estrutura

#### Header
1. **Eyebrow:** "Programa de Mentoria" em vermelho
2. **Título:** "Conecte-se com **especialistas** do ecossistema" — text-4xl md:text-5xl, font-black, "especialistas" em vermelho
3. **Descrição:** texto atual preservado

#### Split Layout (imagem + benefícios)
- **Esquerda (50%):** Imagem stock de mentoria/reunião (Unsplash), border-radius 16px, com overlay gradiente vermelho sutil no canto
- **Direita (50%):** 3 benefícios em lista vertical:
  1. **Sessões Flexíveis** — ícone Clock vermelho, título bold, descrição preservada
  2. **Expertise Diversificada** — ícone Users vermelho, título bold, descrição preservada
  3. **Encontros Semanais** — ícone Calendar vermelho, título bold, descrição preservada
  - Cada benefício: flex row com ícone à esquerda, texto à direita, padding-y entre items
  - Separador sutil entre items

#### Stats de Mentoria (abaixo do split)
- Row de 3 stats:
  - `50+` Mentores ativos
  - `200+` Sessões realizadas
  - `95%` Satisfação
- Números animados com `countUp`

#### CTA
- "Quero ser mentor" — botão vermelho
- "Ver mentores" — botão outline → ancora para seção de mentores

### Conteúdo Preservado
- Título e descrição completos
- 3 benefícios com títulos e descrições exatas
- CTA "Quero ser mentor"

### Animações
- Imagem: `fadeInLeft`
- Benefícios: `stagger fadeInRight` 0.15s
- Stats: `countUp` whileInView
- CTAs: `fadeInUp`
