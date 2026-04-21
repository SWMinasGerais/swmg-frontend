# Spec 01 - Hero Section

## Problema Atual
- Layout split com cards de evento à direita fica apertado
- Fundo branco genérico sem impacto
- Badge "O Maior Evento" sem presença visual
- Cards de "Próximos Eventos" competem com o headline

## Design Novo

### Layout
- **Fullscreen hero** (100vh) com fundo escuro (carvão `#1A1A1A`)
- Gradiente radial vermelho sutil no canto inferior esquerdo (`#E4002B` at 15% opacity)
- Imagem de fundo: foto stock de hackathon/pessoas colaborando com overlay escuro (70% opacity)
- Conteúdo centralizado verticalmente

### Estrutura (top → bottom)
1. **Badge animado** (topo): pill vermelho pulsante com dot verde + "O Maior Evento de Empreendedorismo de MG"
2. **Headline principal**: "Transformando ideias em **startups** em 54h" — texto branco, "startups" em vermelho SW, Outfit 900, text-6xl md:text-7xl lg:text-8xl
3. **Subtítulo**: texto atual preservado, text-lg text-gray-300, max-w-2xl mx-auto
4. **CTAs** (flex row gap-4 centered):
   - Primário: "Inscreva-se agora" — bg vermelho, hover glow, size lg
   - Secundário: "Veja cases →" — outline branco, hover fill branco/texto preto
5. **Stats bar** (flex row, mt-12): 4 stats em linha horizontal com separadores
   - `+5.000` Participantes
   - `40+` Startups criadas
   - `128+` Eventos realizados
   - `R$ 28M` Investimento captado
   - Números animam com `countUp` ao entrar na view
6. **Próximos Eventos mini-cards** (mt-8): 3 cards horizontais compactos dos próximos eventos
   - Cada card: fundo `#2D2D2D`, border-left vermelho 3px, nome do evento + data + cidade
   - Hover: elevação + borda brilha
   - Link para `/eventos/slug-do-evento-2026`

### Conteúdo Preservado
- Tagline: "O Maior Evento de Empreendedorismo de MG"
- Título: "Transformando ideias em startups em 54h"
- Subtítulo completo mantido
- CTA textos mantidos
- Social proof "+5.000 participantes"
- 3 próximos eventos mantidos (datas atualizadas para 2026)

### Eventos Atualizados para 2026
1. EdTech & Future of Learning → 18-20 Outubro, 2026
2. HealthTech Innovation → 8-10 Novembro, 2026
3. Agronegócio & Sustentabilidade → 6-8 Dezembro, 2026

### Animações (Framer Motion)
- Badge: `fadeIn` com delay 0.2s
- Headline: `fadeInUp` com delay 0.4s, palavras revelam em sequência
- Subtítulo: `fadeInUp` delay 0.6s
- CTAs: `fadeInUp` delay 0.8s
- Stats: `countUp` cada número com delay staggered 0.1s, trigger `whileInView`
- Event cards: `stagger` fadeInUp 0.1s entre cards
- Background: parallax sutil (translateY lento no scroll)

### Responsivo
- Mobile: text-4xl, stats em grid 2x2, event cards empilhados vertical
- Tablet: text-5xl, stats em linha, event cards em row
- Desktop: text-7xl+, layout completo
