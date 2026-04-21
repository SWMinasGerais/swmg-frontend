# Spec 03 - Events / Eventos Section

## Problema Atual
- Cards sem imagem, muito planos
- Filtros ocupam muito espaço vertical
- Fundo branco genérico
- Não diferencia visualmente eventos futuros de passados

## Design Novo

### Layout
- **Fundo escuro:** `#1A1A1A` (carvão)
- Padding: `py-20`
- Texto claro sobre fundo escuro

### Estrutura

#### Header
1. **Eyebrow:** "Próximos Eventos" em vermelho
2. **Título:** "Calendário Startup Weekend MG" — text-4xl md:text-5xl, font-black, text-white
3. **Descrição:** texto atual preservado — text-gray-400

#### Filtros (compactos, inline)
- Row de pills/chips horizontais com scroll horizontal em mobile
- Search input com ícone (fundo `#2D2D2D`, border sutil)
- Filter pills: Cidade | Tema | Ano | Status
- Design: pills com fundo `#2D2D2D`, ativa = fundo vermelho
- Total compacto: 1 linha de filtros máximo

#### Grid de Eventos
- Grid 3 colunas (lg), 2 (md), 1 (sm)
- Cada card:
  - **Fundo:** `#2D2D2D` com hover → `#333`
  - **Imagem topo:** foto stock de hackathon (aspect-ratio 16/9) com overlay gradiente
  - **Badge status** no canto: "Em breve" (vermelho pulse), "Encerrado" (gray), "Ao vivo" (verde pulse)
  - **Badge numérico** ranking: #1, #2, #3 em circle vermelho
  - **Conteúdo:**
    - "STARTUP WEEKEND" em eyebrow small uppercase gray-500
    - Nome do evento — text-xl font-bold text-white
    - Cidade com pin icon — text-gray-400
    - Tema badge — pill colorido
    - Data — text-sm text-gray-500
  - **Footer do card:**
    - Vagas restantes (progress bar vermelho) para futuros
    - Participantes total para passados
    - Botão "Inscrever-se" (vermelho) ou "Ver detalhes" (outline)
  - **Hover:** translateY -8px, shadow glow vermelho sutil

#### CTA bottom
- Link "Ver todos os eventos →" para `/eventos` (nova página de listagem completa)

### Conteúdo Preservado (datas atualizadas 2026)
1. EdTech & Future of Learning — 18-20 Out 2026, PUC Minas, BH — 15/120 vagas
2. HealthTech Innovation — 8-10 Nov 2026, UFMG, BH — 28/80 vagas
3. Agronegócio & Sustentabilidade — 6-8 Dez 2026, UFTM, Uberlândia — 40/100 vagas
4. FinTech Revolution (ENCERRADO) — 23-25 Ago 2026, BDMG, BH — 90 participantes
5. Smart Cities (ENCERRADO) — 18-20 Jul 2026, Parque Tecnológico, Viçosa — 80 participantes
- Sponsors de cada evento preservados

### Animações
- Cards: `stagger fadeInUp` 0.1s entre cards
- Filter pills: `fadeIn` rápido
- Progress bars: animam de 0 ao valor
- Badges: `scaleIn` com delay
- Hover: `whileHover={{ y: -8, transition: { duration: 0.3 } }}`
