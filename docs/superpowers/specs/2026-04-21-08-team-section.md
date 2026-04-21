# Spec 08 - Equipe Section

## Problema Atual
- Avatares com iniciais "SW" genéricos
- Cards uniformes sem diferenciação de papel
- Sem foto, aparência amadora

## Design Novo

### Layout
- **Fundo claro:** `#F5F5F0` (warm gray)
- Padding: `py-20`

### Estrutura

#### Header
1. **Eyebrow:** "Nossa Equipe" em vermelho
2. **Título:** "Quem faz acontecer" — text-4xl md:text-5xl, font-black
3. **Descrição:** texto atual preservado

#### Filtros por Papel
- Pills: Todos | Lead Organizer | Community Manager | Event Production | Volunteer
- Ativa = vermelho

#### Grid de Membros
- Grid 4 colunas (lg), 3 (md), 2 (sm)
- Cada card:
  - **Fundo branco**, border-radius 16px, shadow-sm
  - **Foto:** placeholder stock profissional, aspect-ratio 1:1, border-radius 12px no topo
  - **Role badge** sobreposto no canto da foto:
    - Lead Organizer = vermelho
    - Community Manager = azul
    - Event Production = verde
    - Volunteer = gray
  - **Nome:** text-lg font-bold
  - **Papel:** text-sm text-gray-500
  - **Bio:** text-sm text-gray-600, 2 linhas
  - **Social links:** ícones pequenos (LinkedIn, Twitter) — hover vermelho
  - **Hover:** foto escurece levemente, overlay com bio completa reveal

### Conteúdo Preservado (todos os membros)
1. Fernanda Oliveira — Lead Organizer (bio preservada)
2. Pedro Almeida — Co-Lead Organizer (bio preservada)
3. Carolina Silva — Community Manager (bio preservada)
- E todos os demais membros existentes no data

### Animações
- Cards: `stagger fadeInUp` 0.08s (mais rápido por ser mais cards)
- Foto hover: `whileHover` overlay fade in com bio
- Role badge: `scaleIn`
- Filter change: `layout` animation (Framer Motion layout)
