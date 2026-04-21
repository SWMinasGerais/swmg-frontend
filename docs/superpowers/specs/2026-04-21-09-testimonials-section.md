# Spec 09 - Depoimentos Section

## Problema Atual
- Layout com aspas enormes e avatar vermelho genérico
- Carrossel mostra apenas 1 item por vez
- Sem foto, iniciais grandes em vermelho parecem placeholder
- Pouco impacto visual

## Design Novo

### Layout
- **Fundo escuro:** `#1A1A1A` com gradiente radial vermelho sutil (10% opacity)
- Padding: `py-20`

### Estrutura

#### Header
1. **Eyebrow:** "Depoimentos" em vermelho
2. **Título:** "O que dizem sobre o Startup Weekend" — text-4xl md:text-5xl, font-black, text-white
3. **Descrição:** texto atual preservado — text-gray-400

#### Carrossel Multi-Item
- **Desktop:** 3 cards visíveis por vez
- **Tablet:** 2 cards
- **Mobile:** 1 card com swipe
- Usar Embla Carousel (já instalado) com autoplay suave

#### Card de Depoimento
- **Fundo:** `#2D2D2D`, border-radius 16px
- **Aspas:** ícone grande " em vermelho (opacity 20%) como decoração de fundo no canto superior esquerdo
- **Estrelas:** 5 estrelas amarelas/douradas no topo
- **Texto do depoimento:** text-base text-gray-300, itálico
- **Divisor:** linha fina vermelha
- **Autor:**
  - Foto circular stock (placeholder) 48px
  - Nome em font-bold text-white
  - Cargo/Empresa em text-sm text-gray-500
- **Hover:** card eleva, borda top vermelha aparece (3px)

#### Navegação do Carrossel
- Dots indicadores centralizados embaixo
- Setas laterais (< >) estilizadas — fundo `#2D2D2D`, hover vermelho
- Auto-play com pausa no hover

### Conteúdo Preservado (todos os 5 depoimentos)
1. Ana Carvalho — Fundadora, TechMinas — 5/5 — depoimento completo
2. Ricardo Mendes — CTO, EdTech MG — 5/5 — depoimento completo
3. Juliana Souza — CEO, FinMG — 5/5 — depoimento completo
4. Carlos Eduardo — Participante, SW Uberlândia 2023 — 4/5 — depoimento completo
5. Fernanda Lima — Mentor, SW MG — 5/5 — depoimento completo

### Animações
- Cards: `fadeIn` ao entrar no carrossel
- Estrelas: `stagger scaleIn`
- Aspas decorativas: `fadeIn` sutil
- Transição de slides: slide horizontal suave (300ms)
- Auto-play: 5s entre slides
