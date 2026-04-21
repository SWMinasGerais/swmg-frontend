# Spec 04 - Cases / Startups Nascidas Section

## Problema Atual
- Cards sem imagem, só texto + badges soltos
- Fundo branco genérico
- Tags de indústria ficam perdidas
- Valores de investimento sem destaque

## Design Novo

### Layout
- **Fundo claro:** `#F5F5F0` (warm gray)
- Padding: `py-20`

### Estrutura

#### Header
1. **Eyebrow:** "Casos de Sucesso" em vermelho
2. **Título:** "Startups Nascidas no Circuito" — text-4xl md:text-5xl, font-black
3. **Descrição:** texto atual preservado

#### Filtros de Indústria
- Pills horizontais: Todas | AgTech | B2B | ESG | EdTech | Fintech | FoodTech | Gestão | HealthTech | IA | IoT | Marketplace | etc.
- Design: pills com borda, ativa = bg vermelho text-white

#### Grid de Startups
- Grid 3 colunas (lg), 2 (md), 1 (sm)
- Cada card:
  - **Fundo branco** com border radius 16px, shadow-md
  - **Header do card:** gradiente escuro (carvão→slate) com nome da startup em branco bold + logo placeholder estilizado
  - **Status badge** canto superior direito:
    - Operacional = verde
    - Captando = laranja pulse
    - Adquirida = azul
    - Acelerada = roxo
  - **Corpo:**
    - Cidade com pin icon
    - Descrição (2-3 linhas)
    - **Investimento em destaque:** "R$ X.XM" em text-2xl font-black text-vermelho
    - Ano de fundação
  - **Footer:** tags de indústria como pills pequenos
  - **Hover:** card eleva, shadow-xl

#### CTA Section (preservar)
- "Sua startup pode ser a próxima!"
- Stats inline: startups criadas, investimento total, taxa de sobrevivência
- Botão "Inscreva-se no próximo evento"

### Conteúdo Preservado (todas as 6 startups)
1. EduTech MG — BH, 2019, R$ 1.2M, Operacional
2. AgroSense — Uberlândia, 2020, R$ 3.5M, Captando
3. HealthTrack — Juiz de Fora, 2018, R$ 5M, Adquirida
4. MinasPay — BH, 2021, R$ 800K, Acelerada
5. TourConnect — Ouro Preto, 2022, R$ 500K, Operacional
6. EcoMinas — Montes Claros, 2020, R$ 1.8M, Operacional

### Animações
- Cards: `stagger fadeInUp`
- Investimento valor: `countUp` animado
- Status badges: `scaleIn`
- Tags: `fadeIn` staggered
- Hover: `whileHover={{ y: -8, scale: 1.02 }}`
