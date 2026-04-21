# Spec 05 - Ecossistema Section

## Problema Atual
- Placeholder de mapa vazio ("Aqui seria integrado um mapa") destrói a seção
- Lista de entidades à direita fica perdida sem visual
- Filtros genéricos

## Design Novo

### Layout
- **Fundo escuro:** `#1A1A1A` (carvão)
- Padding: `py-20`

### Estrutura

#### Header
1. **Eyebrow:** "Ecossistema" em vermelho
2. **Título:** "Mapa de Inovação Mineiro" — text-4xl md:text-5xl, font-black, text-white
3. **Descrição:** texto atual preservado — text-gray-400

#### Substituir Mapa por Grid Visual de Cidades
Em vez do mapa placeholder, mostrar um **grid visual de cidades** com cards:
- Grid 4 colunas (lg), 2 (md), 1 (sm)
- Cada card de cidade:
  - Imagem stock da cidade (Unsplash) com overlay gradiente escuro
  - Nome da cidade em bold branco
  - Contagem de entidades: "12 hubs, 3 aceleradoras, 5 investidores"
  - Hover: overlay vermelho sutil, scale 1.05
- Cidades: Belo Horizonte, Uberlândia, Juiz de Fora, Viçosa, Montes Claros, Poços de Caldas, Ipatinga, Divinópolis, Governador Valadares, Santa Rita do Sapucaí

#### Filtros (abaixo do grid de cidades)
- Pills horizontais por tipo: Todos | Hubs | Aceleradoras | Investidores | Universidades | Parceiros Institucionais
- Filtro de cidade: dropdown ou pills
- Design: pills fundo `#2D2D2D`, ativa = vermelho

#### Lista de Entidades
- Grid 3 colunas de cards compactos
- Cada card: fundo `#2D2D2D`, ícone do tipo, nome, cidade, tipo badge
- Hover: borda vermelha aparece

#### CTA
- "Conheça o ecossistema completo" → link para `/ecossistema`

### Conteúdo Preservado
- Todos os filtros existentes (tipo, cidade)
- Todas as entidades (San Pedro Valley, SEED, etc.)
- Descrição da seção
- Filtros de busca e localidade

### Animações
- City cards: `stagger fadeInUp`
- Entity cards: `stagger scaleIn`
- Hover city: `whileHover={{ scale: 1.05 }}`
- Filtros: `fadeIn`
