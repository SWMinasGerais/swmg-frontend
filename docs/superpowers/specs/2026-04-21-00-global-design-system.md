# Spec 00 - Global Design System

## Direção de Design
**Estilo:** Energético e Startup (ProductHunt/TechCrunch vibe)
**Identidade:** Alinhada com Startup Weekend / Techstars branding

## Paleta de Cores

### Primárias
- **SW Red:** `#E4002B` (vermelho oficial Startup Weekend)
- **Carvão:** `#1A1A1A` (preto quase puro para fundos escuros)
- **Charcoal:** `#2D2D2D` (cards escuros)

### Secundárias
- **Slate Dark:** `#0F172A` (manter para navbar/footer)
- **Warm Gray:** `#F5F5F0` (fundos claros quentes)
- **Off-White:** `#FAFAF8` (fundo de seções claras)

### Accent
- **Orange Energy:** `#FF6B35` (CTAs secundários, badges destaque)
- **Success Green:** `#22C55E` (status ativo/disponível)
- **Electric Blue:** `#3B82F6` (links, tech badges)

## Tipografia
- **Headings:** Outfit, weight 700-900, tracking tight
- **Body:** Inter, weight 400-500
- **Display (hero):** Outfit, weight 900, size 4xl-7xl

## Princípio de Alternância de Seções
Seções alternam entre fundo escuro e claro para criar ritmo visual:
- Hero: Escuro (carvão + gradiente vermelho)
- Sobre: Claro (off-white)
- Eventos: Escuro (carvão)
- Cases: Claro (warm gray)
- Ecossistema: Escuro (carvão)
- Mentoria: Claro (off-white)
- Mentores: Escuro (carvão)
- Equipe: Claro (warm gray)
- Depoimentos: Escuro (carvão com gradiente)
- Parceiros: Claro (off-white)
- Pricing: Escuro (carvão)
- Blog: Claro (warm gray)
- FAQ: Escuro (carvão)
- Footer: Preto (#111)

## Animações (Framer Motion)
Todas as seções usam:
- `fadeInUp` - elementos entram de baixo com fade (staggered 0.1s entre items)
- `scaleIn` - cards aparecem com scale 0.95 → 1
- `countUp` - números/stats animam de 0 ao valor final
- `slideInLeft/Right` - elementos laterais deslizam
- `whileHover` - cards elevam com shadow (y: -8, shadow-2xl)
- `whileInView` - trigger quando 20% do elemento está visível
- `viewport: { once: true }` - anima apenas na primeira vez

## Imagens Stock (Unsplash)
Usar URLs do Unsplash para imagens temporárias:
- Eventos/Hackathons: pessoas colaborando, post-its, laptops em grupo
- Coworking: espaços modernos, whiteboards
- Pitch: pessoas apresentando, palco
- Networking: grupos conversando, coffee break
- Cidades de MG: BH skyline, paisagens mineiras

## Componentes Compartilhados
- **SectionTitle:** eyebrow (vermelho) + título bold + descrição + linha vermelha decorativa
- **Cards:** border radius 16px, hover elevation, transição 300ms
- **Badges/Pills:** border radius full, font-medium, cores por categoria
- **CTAs:** botão primário vermelho com hover glow, botão secundário outline

## Conteúdo - Regra Geral
- Todo conteúdo textual existente DEVE ser preservado
- Datas atualizadas para 2026 onde aplicável
- Valores monetários e stats mantidos
- Nomes de pessoas, empresas e parceiros inalterados

## Rotas - Migração para Português
| Rota Atual | Nova Rota |
|---|---|
| `/` | `/` (mantém) |
| `/inscricao` | `/inscricao` (mantém) |
| `/matchmaking` | `/matchmaking` (mantém) |
| `/events/:id` | `/eventos/:slug` (slug = nome-do-evento-completo-ano) |
| `/ecossistema` | `/ecossistema` (mantém) |
| `/privacidade` | `/privacidade` (mantém) |
| `/termos-de-uso` | `/termos-de-uso` (mantém) |
| N/A (novo) | `/eventos` (listagem completa de todos os eventos) |
| N/A (novo) | `/eventos/:slug` (detalhe com membros, startups, etc.) |

### Slugs de Evento (SEO)
Formato: `startup-weekend-{tema}-{cidade}-{ano}`
Exemplos:
- `startup-weekend-edtech-belo-horizonte-2026`
- `startup-weekend-healthtech-belo-horizonte-2026`
- `startup-weekend-agronegocio-uberlandia-2026`

### Página de Eventos Passados
Nova página `/eventos` com:
- Listagem de TODOS os eventos (128+ históricos + atuais)
- Filtros por ano, cidade, tema
- Cada evento passado mostra: membros, startups nascidas, vencedores
- Link para página de detalhe individual
