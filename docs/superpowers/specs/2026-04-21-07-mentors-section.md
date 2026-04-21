# Spec 07 - Mentores (Rede de Mentores) Section

## Problema Atual
- Avatares com iniciais gigantes em vermelho parecem quebrados
- Cards muito uniformes sem personalidade
- Filtros ocupam muito espaço

## Design Novo

### Layout
- **Fundo escuro:** `#1A1A1A` (carvão)
- Padding: `py-20`

### Estrutura

#### Header
1. **Eyebrow:** "Nossa Rede de Mentores" em vermelho
2. **Título:** "Conexão com Especialistas" — text-4xl md:text-5xl, font-black, text-white
3. **Descrição:** texto atual preservado — text-gray-400

#### Filtros (compactos)
- Search input: fundo `#2D2D2D`, placeholder "Buscar mentores por nome..."
- Filter pills inline: Todos | Disponíveis | por cidade | por expertise
- Expertise pills: Tech | Business | Design | Marketing | Legal | Finance
- City pills: BH | Uberlândia | Juiz de Fora
- Ativa = fundo vermelho

#### Grid de Mentores
- Grid 3 colunas (lg), 2 (md), 1 (sm)
- Cada card:
  - **Fundo:** `#2D2D2D`, border-radius 16px
  - **Avatar:** foto stock profissional (placeholder), circular 80px, border 3px vermelho para disponível, border gray para indisponível
  - **Nome:** text-xl font-bold text-white
  - **Cargo + Empresa:** text-sm text-gray-400
  - **Expertise badge:** pill colorido por área (Tech=blue, Business=green, Design=purple, Marketing=orange, Legal=yellow, Finance=emerald)
  - **Cidade:** pin icon + texto gray-500
  - **Bio:** text-sm text-gray-400, 2 linhas max com truncate
  - **Status:** dot verde "Disponível" ou dot vermelho "Indisponível"
  - **Links:** ícones de LinkedIn, email, twitter, website — hover vermelho
  - **Hover:** borda lateral vermelha aparece, card eleva

#### Paginação
- 6 mentores por página
- Botões Previous/Next com estilo escuro

#### CTA
- "Quer se tornar um mentor?" — card destaque com fundo gradiente vermelho → carvão
- Botão "Candidate-se" → link para `/inscricao`

### Conteúdo Preservado (todos os 6 mentores)
1. Ana Silva — CTO, TechMinas, BH, Tech, Disponível
2. Carlos Mendes — CEO, Startup BH, BH, Business, Indisponível
3. Mariana Costa — UX Designer, DesignLab MG, Uberlândia, Design, Disponível
4. Ricardo Oliveira — Head Marketing, GrowthMinas, JF, Marketing, Disponível
5. Juliana Alves — Head Legal, JurisTech, BH, Legal, Disponível
6. Fernando Souza — CFO, InvestBH, BH, Finance, Indisponível

### Animações
- Cards: `stagger fadeInUp` 0.1s
- Avatar: `scaleIn`
- Expertise badge: `fadeIn` delay
- Hover: `whileHover={{ y: -6, borderLeft: "4px solid #E4002B" }}`
- Status dot: pulse animation para disponível
