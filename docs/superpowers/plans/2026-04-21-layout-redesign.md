# SWMG Frontend Layout Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign all 14 homepage sections + navbar + footer + 5 pages with energetic startup aesthetic (SW/Techstars branding), dark/light alternating sections, Framer Motion animations, content updated to 2026, Portuguese routes with SEO slugs.

**Architecture:** Section-based redesign — each section is an independent component that can be updated in parallel. Global design tokens are updated first (tailwind config + index.css), then sections are reworked one-by-one preserving all existing content. New pages (/eventos listing) are added last.

**Tech Stack:** React 18 + TypeScript, Vite, Tailwind CSS, Framer Motion, Embla Carousel, shadcn/ui, React Router v6, Lucide Icons

**Specs Directory:** `docs/superpowers/specs/` (21 spec files, read the relevant spec before each task)

---

## Task 0: Global Design System Update

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/index.css`

**Read first:** `docs/superpowers/specs/2026-04-21-00-global-design-system.md`

- [ ] **Step 1: Update Tailwind color palette**

In `tailwind.config.ts`, update the `extend.colors` section. Add new SW brand colors alongside existing ones:

```typescript
colors: {
  // Existing shadcn colors kept (border, input, ring, etc.)
  // Add/update SWMG brand:
  'sw-red': '#E4002B',
  'sw-carvao': '#1A1A1A',
  'sw-charcoal': '#2D2D2D',
  'sw-warm-gray': '#F5F5F0',
  'sw-off-white': '#FAFAF8',
  'sw-orange': '#FF6B35',
  // Keep existing swmg-* colors for backward compat
}
```

- [ ] **Step 2: Update global CSS variables and utility classes**

In `src/index.css`, update the `:root` CSS variables to include the new palette. Add new utility classes:

```css
/* Add to @layer components */
.section-dark {
  @apply bg-[#1A1A1A] text-white;
}
.section-light {
  @apply bg-[#FAFAF8] text-slate-900;
}
.section-warm {
  @apply bg-[#F5F5F0] text-slate-900;
}
```

- [ ] **Step 3: Verify build compiles**

Run: `yarn dev:vite`
Expected: No compilation errors, site loads at localhost:8080

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.ts src/index.css
git commit -m "style: update design system with SW brand colors and section utilities"
```

---

## Task 1: Navbar Redesign

**Files:**
- Modify: `src/components/layout/Navbar.tsx`

**Read first:** `docs/superpowers/specs/2026-04-21-15-navbar.md`

- [ ] **Step 1: Rewrite Navbar with scroll-aware background**

Replace the Navbar component. Key changes:
- Add `useScroll` and `useMotionValueEvent` from framer-motion to detect scroll position
- Background: transparent when at top, `bg-[#111]/95 backdrop-blur-xl` when scrolled (transition 300ms)
- Logo: "SW" icon red circle + "SWMG" bold white text
- Center links: Sobre, Eventos (dropdown), Recursos (dropdown), Blog — all `text-white/80 hover:text-white`
- Dropdowns: `bg-[#2D2D2D] border border-white/10 shadow-xl rounded-xl`
- Right: user icon + "Inscreva-se" red CTA button with `hover:shadow-[0_0_20px_rgba(228,0,43,0.3)]`
- Mobile: hamburger → fullscreen `bg-[#111]/98` menu with stagger animation
- All navigation links preserved from current implementation
- Dropdown "Eventos" includes: "Próximos Eventos" (scroll), "Todos os Eventos" (→ /eventos)
- Dropdown "Recursos" includes: Mentoria, Ecossistema, Blog & Notícias, FAQ

```tsx
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

// Use useState for scrolled state
const [scrolled, setScrolled] = useState(false);
const { scrollY } = useScroll();
useMotionValueEvent(scrollY, "change", (latest) => {
  setScrolled(latest > 50);
});
```

- [ ] **Step 2: Test in browser**

Open http://localhost:8080, verify:
- Navbar is transparent at top of page
- Scrolling down turns it dark with blur
- All dropdown menus work
- Mobile hamburger works
- "Inscreva-se" button has red glow on hover

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Navbar.tsx
git commit -m "feat: redesign navbar with scroll-aware transparency and dark dropdowns"
```

---

## Task 2: Hero Section Redesign

**Files:**
- Modify: `src/components/sections/HeroSection.tsx`

**Read first:** `docs/superpowers/specs/2026-04-21-01-hero-section.md`

- [ ] **Step 1: Rewrite HeroSection**

Replace the component entirely. Key structure:
- Fullscreen section (`min-h-screen`) with `bg-[#1A1A1A]`
- Background: Unsplash image of hackathon with dark overlay (70% opacity) + radial gradient red at bottom-left (15% opacity)
- Content centered vertically with `flex items-center justify-center`
- Badge: animated pill with green dot + "O Maior Evento de Empreendedorismo de MG"
- Headline: "Transformando ideias em **startups** em 54h" — "startups" in `text-[#E4002B]`, rest white, `text-5xl md:text-6xl lg:text-7xl font-black`
- Subtitle: existing text preserved, `text-lg text-gray-300 max-w-2xl mx-auto text-center`
- CTAs: "Inscreva-se agora" (bg red, hover glow) + "Veja cases →" (outline white)
- Stats bar: 4 stats horizontal — `+5.000 Participantes | 40+ Startups | 128+ Eventos | R$ 28M Investimento`
- Mini event cards: 3 horizontal cards (bg-[#2D2D2D], border-left-[#E4002B] 3px) with next events (dates updated to 2026)

Use framer-motion:
- `motion.div` with `initial={{ opacity: 0, y: 20 }}` and `animate={{ opacity: 1, y: 0 }}` with staggered delays
- Stats numbers use a simple countUp effect (animate from 0 to value with `useInView`)
- Event cards stagger in

All existing content text must be preserved exactly. Only dates change to 2026.

- [ ] **Step 2: Test in browser**

Open http://localhost:8080, verify:
- Hero fills viewport with dark background and image
- Badge animates in
- Headline and subtitle fade in
- Stats count up when visible
- Event cards appear with stagger
- Mobile responsive (text shrinks, stats 2x2 grid, cards stack)

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/HeroSection.tsx
git commit -m "feat: redesign hero section with fullscreen dark layout, countUp stats, and motion"
```

---

## Task 3: About Section Redesign

**Files:**
- Modify: `src/components/sections/AboutSection.tsx`
- Modify: `src/components/organisms/TimelineAccordion.tsx`

**Read first:** `docs/superpowers/specs/2026-04-21-02-about-section.md`

- [ ] **Step 1: Rewrite AboutSection**

Key changes:
- Background: `bg-[#FAFAF8]`
- Centered header: "Sobre nós" eyebrow (red, uppercase, tracking-widest) + "Circuito Mineiro de Startup Weekend" title (text-4xl md:text-5xl font-black)
- Description paragraph preserved
- Missão + Visão: 2 side-by-side cards (bg-white, shadow-sm, border-l-4 border-[#E4002B])
- Timeline below: vertical centered line (red 2px) with items alternating left/right
- Timeline grouped by period with accordion — only 2022-2026 expanded by default
- "Ver história completa" button expands all periods
- Add 2026 milestone: "Circuito Mineiro atinge 150+ eventos realizados"
- All existing timeline data preserved (all periods from 1972 to 2025)

framer-motion: fadeInUp staggered for intro, fadeInLeft/Right alternating for timeline items

- [ ] **Step 2: Test in browser**

Scroll to About section. Verify:
- Light background, centered header
- Mission/Vision cards side by side
- Timeline shows 2022-2026 by default
- "Ver história completa" expands all periods
- All historical data intact

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/AboutSection.tsx src/components/organisms/TimelineAccordion.tsx
git commit -m "feat: redesign about section with centered timeline and light background"
```

---

## Task 4: Events Section Redesign

**Files:**
- Modify: `src/components/sections/EventsSection.tsx`
- Modify: `src/components/organisms/EventsGrid.tsx`
- Modify: `src/components/molecules/EventCard.tsx`
- Modify: `src/modules/events/data.ts` (update dates to 2026)

**Read first:** `docs/superpowers/specs/2026-04-21-03-events-section.md`

- [ ] **Step 1: Update event dates in data.ts**

Change all event dates to 2026 equivalents. Update `src/modules/events/data.ts`:
- EdTech: 18-20 Outubro, 2026
- HealthTech: 8-10 Novembro, 2026
- Agronegócio: 6-8 Dezembro, 2026
- FinTech (past): 23-25 Agosto, 2026
- Smart Cities (past): 18-20 Julho, 2026

- [ ] **Step 2: Rewrite EventCard with image and dark theme**

Each card:
- `bg-[#2D2D2D]` rounded-2xl overflow-hidden
- Top: Unsplash stock image (aspect-ratio 16/9) with gradient overlay — use themed placeholder images (different for each theme like edtech, health, agro)
- Status badge top-right: "Em breve" (red+pulse), "Encerrado" (gray), "Ao vivo" (green+pulse)
- Ranking badge: #1, #2, #3 red circle
- Content: "STARTUP WEEKEND" eyebrow, event name white bold, city with MapPin icon gray, theme pill, date
- Footer: progress bar (red) for future events showing remaining slots, "Inscrever-se" red button or "Ver detalhes" outline
- Hover: `translateY(-8px)` + red glow shadow

- [ ] **Step 3: Rewrite EventsSection with dark background**

- Background: `bg-[#1A1A1A]`
- Header: "Próximos Eventos" eyebrow red, "Calendário Startup Weekend MG" white title, description gray-400
- Filters: single row of compact pills (bg-[#2D2D2D], active=red) — City | Tema | Ano | Status + search input
- Grid: 3 cols (lg), 2 (md), 1 (sm)
- CTA bottom: "Ver todos os eventos →" link to `/eventos`
- framer-motion stagger on cards

- [ ] **Step 4: Test in browser**

Scroll to Events. Verify dark background, cards with images, filters work, dates are 2026.

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/EventsSection.tsx src/components/organisms/EventsGrid.tsx src/components/molecules/EventCard.tsx src/modules/events/data.ts
git commit -m "feat: redesign events section with dark theme, image cards, and 2026 dates"
```

---

## Task 5: Cases / Startups Section Redesign

**Files:**
- Modify: `src/components/sections/CasesSection.tsx` (or `StartupsSection.tsx` — check which is rendered in Index.tsx)
- Modify: `src/components/organisms/StartupCard.tsx`
- Modify: `src/components/organisms/StartupGrid.tsx`

**Read first:** `docs/superpowers/specs/2026-04-21-04-cases-section.md`

- [ ] **Step 1: Rewrite startup cards and section**

- Background: `bg-[#F5F5F0]` (warm gray)
- Header: "Casos de Sucesso" eyebrow, "Startups Nascidas no Circuito" title, description preserved
- Industry filter pills: Todas | AgTech | EdTech | Fintech | etc. (active = red)
- Card design:
  - bg-white, rounded-2xl, shadow-md
  - Header: dark gradient (carvão→slate) with startup name in white bold
  - Status badge (Operacional=green, Captando=orange-pulse, Adquirida=blue, Acelerada=purple)
  - Body: city + pin, description, investment "R$ X.XM" in text-2xl font-black text-[#E4002B], year
  - Footer: industry tags as small pills
  - Hover: elevate + shadow-xl
- CTA section: "Sua startup pode ser a próxima!" with inline stats
- All 6 startups preserved with exact data

framer-motion: stagger fadeInUp, countUp on investment values

- [ ] **Step 2: Test in browser**

Verify warm background, startup cards with dark headers, investment values prominent, filters work.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/CasesSection.tsx src/components/sections/StartupsSection.tsx src/components/organisms/StartupCard.tsx src/components/organisms/StartupGrid.tsx
git commit -m "feat: redesign cases section with investment highlights and warm background"
```

---

## Task 6: Ecosystem Section Redesign

**Files:**
- Modify: `src/components/sections/EcosystemSection.tsx`
- Modify: `src/components/organisms/EntityList.tsx`

**Read first:** `docs/superpowers/specs/2026-04-21-05-ecosystem-section.md`

- [ ] **Step 1: Rewrite EcosystemSection**

Key change: replace the map placeholder with a city grid.

- Background: `bg-[#1A1A1A]`
- Header: "Ecossistema" eyebrow red, "Mapa de Inovação Mineiro" white title, description gray-400
- City grid (4 cols lg, 2 md, 1 sm): cards with Unsplash city images + dark overlay + city name + entity counts
  - Cities: Belo Horizonte, Uberlândia, Juiz de Fora, Viçosa, Montes Claros, Poços de Caldas, Ipatinga, Divinópolis, Gov. Valadares, Santa Rita do Sapucaí
  - Hover: red overlay + scale 1.05
- Entity type pills: Todos | Hubs | Aceleradoras | Investidores | Universidades | Parceiros
- Entity cards: bg-[#2D2D2D], icon + name + city + type badge, hover border-red
- CTA: "Conheça o ecossistema completo" → /ecossistema

All existing entity data preserved.

- [ ] **Step 2: Test in browser**

Verify city grid replaces map placeholder, entity cards work, filters function.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/EcosystemSection.tsx src/components/organisms/EntityList.tsx
git commit -m "feat: redesign ecosystem section with city grid replacing map placeholder"
```

---

## Task 7: Mentorship + Mentors Sections Redesign

**Files:**
- Modify: `src/components/sections/MentorshipSection.tsx`
- Modify: `src/components/sections/MentorsSection.tsx`
- Modify: `src/components/organisms/MentorsGrid.tsx`
- Modify: `src/components/molecules/MentorCard.tsx`

**Read first:** `docs/superpowers/specs/2026-04-21-06-mentorship-section.md` AND `docs/superpowers/specs/2026-04-21-07-mentors-section.md`

- [ ] **Step 1: Rewrite MentorshipSection**

- Background: `bg-[#FAFAF8]`
- Header: "Programa de Mentoria" eyebrow, title with "especialistas" in red, description preserved
- Split layout: left = Unsplash mentoring image (rounded-2xl), right = 3 benefits vertical (icon + title + description with separators)
- Benefits preserved: Sessões Flexíveis, Expertise Diversificada, Encontros Semanais
- Stats row: 50+ Mentores | 200+ Sessões | 95% Satisfação (countUp)
- CTAs: "Quero ser mentor" (red) + "Ver mentores" (outline, scrolls to MentorsSection)

- [ ] **Step 2: Rewrite MentorsSection**

- Background: `bg-[#1A1A1A]`
- Header: "Nossa Rede de Mentores" eyebrow, "Conexão com Especialistas" white title
- Compact filters: search input (bg-[#2D2D2D]) + expertise pills (Tech=blue, Business=green, Design=purple, Marketing=orange, Legal=yellow, Finance=emerald) + availability + city
- Mentor cards: bg-[#2D2D2D], circular avatar with colored border (green=available, gray=unavailable), name white, role gray, expertise colored pill, city, bio truncated 2 lines, social icons (hover red)
- Hover: border-left-[#E4002B] 4px + elevate
- Available dot pulses green
- CTA: "Quer se tornar um mentor?" card with red gradient background

All 6 mentors preserved with exact data.

- [ ] **Step 3: Test in browser**

Verify light mentorship section with image + benefits, then dark mentors grid with colored expertise badges.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/MentorshipSection.tsx src/components/sections/MentorsSection.tsx src/components/organisms/MentorsGrid.tsx src/components/molecules/MentorCard.tsx
git commit -m "feat: redesign mentorship and mentors sections with split layout and dark cards"
```

---

## Task 8: Team Section Redesign

**Files:**
- Modify: `src/components/sections/TeamSection.tsx`
- Modify: `src/components/organisms/TeamGrid.tsx`
- Modify: `src/components/organisms/TeamMemberCard.tsx`

**Read first:** `docs/superpowers/specs/2026-04-21-08-team-section.md`

- [ ] **Step 1: Rewrite TeamSection**

- Background: `bg-[#F5F5F0]`
- Header: "Nossa Equipe" eyebrow, "Quem faz acontecer" title, description preserved
- Role filter pills: Todos | Lead Organizer | Community Manager | Event Production | Volunteer (active = red)
- Card: bg-white, rounded-2xl, shadow-sm
  - Photo: Unsplash stock professional headshot, aspect-1:1, rounded-xl top
  - Role badge overlaid on photo corner (Lead=red, Community=blue, Production=green, Volunteer=gray)
  - Name: text-lg font-bold, Role: text-sm text-gray-500, Bio: 2 lines text-gray-600
  - Social: LinkedIn/Twitter icons, hover red
  - Hover: photo darkens, overlay reveals full bio
- Grid: 4 cols (lg), 3 (md), 2 (sm)
- framer-motion: stagger fadeInUp, layout animation on filter change

All team members preserved.

- [ ] **Step 2: Test in browser**

Verify warm bg, photo cards with role badges, filter switching works with layout animation.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/TeamSection.tsx src/components/organisms/TeamGrid.tsx src/components/organisms/TeamMemberCard.tsx
git commit -m "feat: redesign team section with photo cards and role badges"
```

---

## Task 9: Testimonials Section Redesign

**Files:**
- Modify: `src/components/sections/TestimonialsSection.tsx`
- Modify: `src/components/organisms/TestimonialsCarousel.tsx`
- Modify: `src/components/molecules/TestimonialCard.tsx`

**Read first:** `docs/superpowers/specs/2026-04-21-09-testimonials-section.md`

- [ ] **Step 1: Rewrite TestimonialsSection with multi-item carousel**

- Background: `bg-[#1A1A1A]` with radial gradient red (10% opacity)
- Header: "Depoimentos" eyebrow, "O que dizem sobre o Startup Weekend" white title, description gray-400
- Carousel (Embla): 3 visible (lg), 2 (md), 1 (sm) with autoplay 5s, pause on hover
- Card: bg-[#2D2D2D], rounded-2xl
  - Decorative " quote (red, 20% opacity) at top-left background
  - Stars (gold/yellow) at top
  - Quote text: text-base text-gray-300 italic
  - Divider: thin red line
  - Author: circular photo (stock), name white bold, role text-gray-500
  - Hover: card elevates, border-top-[#E4002B] 3px
- Navigation: centered dots + styled arrows (bg-[#2D2D2D], hover red)

All 5 testimonials preserved with ratings.

- [ ] **Step 2: Test in browser**

Verify dark carousel, multiple items visible, autoplay works, arrows work, hover effects.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/TestimonialsSection.tsx src/components/organisms/TestimonialsCarousel.tsx src/components/molecules/TestimonialCard.tsx
git commit -m "feat: redesign testimonials with multi-item dark carousel and autoplay"
```

---

## Task 10: Partners Section Redesign (Gamification)

**Files:**
- Modify: `src/components/sections/PartnersSection.tsx`
- Modify: `src/components/organisms/PartnersGrid.tsx`
- Modify: `src/components/organisms/TierSection.tsx`
- Modify: `src/components/organisms/RankingList.tsx`
- Modify: `src/components/molecules/PartnerCard.tsx`

**Read first:** `docs/superpowers/specs/2026-04-21-10-partners-section.md`

- [ ] **Step 1: Rewrite PartnersSection with tier-based gamification**

- Background: `bg-[#FAFAF8]`
- Header: "Parceiros" eyebrow, "Quem Apoia o SWMG" title, description preserved
- Tabs: Parceiros | Ranking (active = red pill)
- Compact filters: category pills row + locality pills row (active = red)
- Tier accordions (all expanded by default):
  - **Diamante**: large cards (4/row), logo 120px, bg-white shadow-lg, gradient red→orange border-left 4px, shimmer animation on border
  - **Platina**: medium cards (5/row), logo 96px, golden border-left
  - **Ouro**: cards (6/row), logo 80px, shadow-sm
  - **Prata**: compact (8/row), logo 64px
  - **Bronze**: inline row, logos 48px
  - **Apoio/Mídia**: logos 40px, grayscale → color on hover
- Ranking tab: leaderboard (#1-N, logo, name, tier badge, city, visibility score bar), top 3 gold/silver/bronze highlighted

ALL partners preserved, no omissions.

- [ ] **Step 2: Test in browser**

Verify tier hierarchy is visually clear (larger tiers = bigger cards), shimmer on Diamante, accordion works, ranking tab shows leaderboard, filters work.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/PartnersSection.tsx src/components/organisms/PartnersGrid.tsx src/components/organisms/TierSection.tsx src/components/organisms/RankingList.tsx src/components/molecules/PartnerCard.tsx
git commit -m "feat: redesign partners section with tier-based gamification and visibility hierarchy"
```

---

## Task 11: Pricing Section Redesign

**Files:**
- Modify: `src/components/organisms/SponsorPricingSection.tsx`
- Modify: `src/components/organisms/PricingCard.tsx`

**Read first:** `docs/superpowers/specs/2026-04-21-11-pricing-section.md`

- [ ] **Step 1: Rewrite SponsorPricingSection**

- Background: `bg-[#1A1A1A]`
- Header: "Patrocínio" eyebrow red, title white, description preserved
- 3 benefit cards (horizontal): Projeto Voluntário, Impacto no Ecossistema, Soft Skills — bg-[#2D2D2D], red icons, white text
- Pricing categories:
  - Bronze Municipal R$ 2.000: bg-[#2D2D2D], border-left bronze (#CD7F32), all benefits preserved
  - Bronze Estadual R$ 10.000: same style, "Mais escolhido" red badge
  - Apoio e Mídia Permuta: bg-[#2D2D2D], border-left gray, all partnership types preserved
- CTA: "Ver tabela comparativa" opens Dialog with full tier comparison table
- "Quero patrocinar" red button

framer-motion: stagger cards, countUp on prices, pulse on popular badge

- [ ] **Step 2: Test in browser**

Verify dark background, pricing cards with bronze borders, comparison dialog works.

- [ ] **Step 3: Commit**

```bash
git add src/components/organisms/SponsorPricingSection.tsx src/components/organisms/PricingCard.tsx
git commit -m "feat: redesign pricing section with dark theme and tier highlights"
```

---

## Task 12: Blog Section Redesign

**Files:**
- Modify: `src/components/sections/BlogSection.tsx`
- Modify: `src/components/organisms/BlogPostsGrid.tsx`
- Modify: `src/components/molecules/BlogPostCard.tsx`
- Modify: `src/modules/blog/data.ts` (update dates to 2026)

**Read first:** `docs/superpowers/specs/2026-04-21-12-blog-section.md`

- [ ] **Step 1: Update blog dates in data.ts**

Change all blog post dates to 2026 equivalents (same month/day, year → 2026). Update calendar post title to "Calendário de eventos 2026..."

- [ ] **Step 2: Rewrite BlogSection**

- Background: `bg-[#F5F5F0]`
- Header: "Blog & Notícias" eyebrow, "Dicas e histórias de sucesso" title, description, "Ver todos os artigos →" link red
- Featured post (first): horizontal layout — image left (60%, Unsplash stock) + content right (40%), bg-white shadow-lg rounded-2xl
- Grid below: 3 cols of cards — image top (Unsplash, 16/9, rounded-xl), category badge on image, title 2-line, excerpt 2-line, author+date footer
- Hover: card elevates, image zoom in (scale 1.05 with overflow-hidden)
- Newsletter inline card: bg carvão, white text, email input + "Inscrever" red button

All 6 posts preserved.

- [ ] **Step 3: Test in browser**

Verify warm bg, featured post horizontal, grid cards with images, newsletter card.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/BlogSection.tsx src/components/organisms/BlogPostsGrid.tsx src/components/molecules/BlogPostCard.tsx src/modules/blog/data.ts
git commit -m "feat: redesign blog section with featured post layout and 2026 dates"
```

---

## Task 13: FAQ Section Redesign

**Files:**
- Modify: `src/components/sections/FaqSection.tsx`
- Modify: `src/components/organisms/FaqAccordion.tsx`
- Modify: `src/components/molecules/AccordionFaqItem.tsx`

**Read first:** `docs/superpowers/specs/2026-04-21-13-faq-section.md`

- [ ] **Step 1: Rewrite FaqSection**

- Background: `bg-[#1A1A1A]`
- Header: "Perguntas Frequentes" eyebrow, "Tire suas dúvidas" white title, description gray-400
- Search: large centered input (bg-[#2D2D2D])
- Category pills: Todas | Geral | Inscrição | Evento | Mentoria | Pós-evento (active = red)
- Accordion (max-w-3xl centered):
  - Items: bg-[#2D2D2D] rounded-xl, category icon left (red), question white font-semibold, chevron right
  - Open state: border-left-[#E4002B] 3px, answer gray-400, AnimatePresence height animation
  - 8px gap between items
- CTA: "Não encontrou sua resposta?" + "Fale conosco" button

All 10 FAQ items preserved with exact answers.

- [ ] **Step 2: Test in browser**

Verify dark bg, accordion opens/closes with animation, search filters, category pills work.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/FaqSection.tsx src/components/organisms/FaqAccordion.tsx src/components/molecules/AccordionFaqItem.tsx
git commit -m "feat: redesign FAQ section with dark accordion and category filters"
```

---

## Task 14: Footer Redesign

**Files:**
- Modify: `src/components/layout/Footer.tsx`

**Read first:** `docs/superpowers/specs/2026-04-21-14-footer.md`

- [ ] **Step 1: Rewrite Footer**

Two zones:

**Newsletter Banner** (above footer):
- Gradient: `bg-gradient-to-r from-[#E4002B] to-[#1A1A1A]`
- rounded-2xl, mx container, padding 32px
- Left: "Fique por dentro" title + subtitle
- Right: email input (bg-white/10) + "Inscrever" white button
- Margin-bottom connecting to footer

**Footer Main** (bg-[#111]):
- 4-column grid:
  - Col 1: Logo + "Circuito Mineiro" + description + social icons (bg-[#2D2D2D] circles, hover red)
  - Col 2: Links Rápidos (all quick links preserved)
  - Col 3: Legal (all legal links preserved)
  - Col 4: Contato (email, address, "Fale conosco" outline button)
- Copyright bar: border-top [#2D2D2D], "© 2026 Circuito Mineiro..." + Techstars trademark

All links and content preserved, copyright updated to 2026.

- [ ] **Step 2: Test in browser**

Scroll to bottom. Verify gradient newsletter banner, dark footer, all links work, social icons hover red.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat: redesign footer with gradient newsletter banner and dark theme"
```

---

## Task 15: Update Routes + Event Slugs

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/modules/events/data.ts` (add slug field)
- Modify: `src/modules/events/types.ts` (add slug to type)
- Modify: `src/data/eventsData.ts` (add slug to historical events)

**Read first:** `docs/superpowers/specs/2026-04-21-00-global-design-system.md` (routes section)

- [ ] **Step 1: Add slug field to event types and data**

In `src/modules/events/types.ts`, add `slug: string` field.
In `src/modules/events/data.ts`, add slug to each event:
- `startup-weekend-edtech-belo-horizonte-2026`
- `startup-weekend-healthtech-belo-horizonte-2026`
- `startup-weekend-agronegocio-uberlandia-2026`
- etc.

In `src/data/eventsData.ts`, add slug to each historical event following the pattern: `startup-weekend-{tema}-{cidade}-{ano}` (lowercase, hyphenated).

- [ ] **Step 2: Update routes in App.tsx**

```tsx
// Change:
<Route path="/events/:id" element={<EventDetails />} />
// To:
<Route path="/eventos/:slug" element={<EventDetails />} />

// Add new route for events listing page:
<Route path="/eventos" element={<EventsListing />} />
```

Import the new EventsListing page (will be created in Task 16).

- [ ] **Step 3: Update EventDetails to use slug param**

In `src/pages/EventDetails.tsx`, change `useParams<{ id: string }>()` to `useParams<{ slug: string }>()` and look up event by slug instead of id.

- [ ] **Step 4: Update all internal links**

Search for `/events/` in the codebase and replace with `/eventos/` + slug-based links.

- [ ] **Step 5: Test navigation**

Verify `/eventos/startup-weekend-edtech-belo-horizonte-2026` loads the correct event.

- [ ] **Step 6: Commit**

```bash
git add src/App.tsx src/modules/events/data.ts src/modules/events/types.ts src/data/eventsData.ts src/pages/EventDetails.tsx
git commit -m "feat: migrate routes to Portuguese with SEO-friendly event slugs"
```

---

## Task 16: Events Listing Page (New)

**Files:**
- Create: `src/pages/EventsListing.tsx`

**Read first:** `docs/superpowers/specs/2026-04-21-16-page-events-listing.md`

- [ ] **Step 1: Create EventsListing page**

New page at `/eventos` showing ALL events (128+ historical + current).

- Dark background (bg-[#111])
- Hero: ~40vh, stock image bg, "Todos os Eventos" title, subtitle "128+ eventos realizados desde 2013", stats with countUp
- Sticky filter bar: bg-[#1A1A1A] backdrop-blur, search + year dropdown (2013-2026) + city dropdown + theme dropdown + status pills
- Grid: reuse EventCard component from Task 4 (3 cols lg, 2 md, 1 sm)
- Past events: "Encerrado" gray badge, show participants count + winning startup
- Pagination: 20 per page, load more button
- Import all events from both `src/modules/events/data.ts` and `src/data/eventsData.ts`

- [ ] **Step 2: Register route in App.tsx**

Ensure `/eventos` route is added (may already be done in Task 15).

- [ ] **Step 3: Test in browser**

Navigate to `/eventos`. Verify all events load, filters work, pagination works, clicking an event goes to `/eventos/:slug`.

- [ ] **Step 4: Commit**

```bash
git add src/pages/EventsListing.tsx src/App.tsx
git commit -m "feat: add events listing page with 128+ historical events and filters"
```

---

## Task 17: Event Details Page Redesign

**Files:**
- Modify: `src/pages/EventDetails.tsx`

**Read first:** `docs/superpowers/specs/2026-04-21-17-page-event-details.md`

- [ ] **Step 1: Rewrite EventDetails page**

- Dark background (bg-[#111])
- Hero (~50vh): themed stock image bg + dark overlay, theme badge, event name title text-5xl white, city text-xl gray, info row (date, location, slots), CTA "Inscrever-se" (red) for future / "Encerrado" (gray) for past
- About section: bg-[#1A1A1A], description, sponsors logos
- Schedule section: 3-column visual (Sexta | Sábado | Domingo) with placeholder activities
- Mentors section: reuse MentorCard design
- Startups born (past events): reuse StartupCard design, winner highlighted with gold border + "Vencedora" badge
- Participants (past events): counter + avatar grid with role badges (Hacker/Hustler/Hipster)
- Gallery placeholder: grid of stock photos
- CTA final: link to next event or "/eventos"

Slug-based routing (from Task 15).

- [ ] **Step 2: Test in browser**

Navigate to `/eventos/startup-weekend-edtech-belo-horizonte-2026`. Verify full page renders with all sections.

- [ ] **Step 3: Commit**

```bash
git add src/pages/EventDetails.tsx
git commit -m "feat: redesign event details page with schedule, mentors, and startups sections"
```

---

## Task 18: Apply Page Redesign

**Files:**
- Modify: `src/pages/Apply.tsx`

**Read first:** `docs/superpowers/specs/2026-04-21-18-page-apply.md`

- [ ] **Step 1: Rewrite Apply page**

- Light bg: `bg-[#FAFAF8]`
- Hero (~30vh): gradient carvão→red, "Voluntariado" badge, "Inscrição de Voluntários" title, subtitle preserved
- Split layout below:
  - Left (50%): "Por que ser voluntário?" + 4 benefits with icons (Networking, Experiência, Certificado, Conexão) + Unsplash image + volunteer testimonial
  - Right (50%): white card shadow-lg rounded-2xl, form fields:
    - Nome Completo (text, required)
    - Email (email, required)
    - LinkedIn (url, optional)
    - Papel (select: Facilitador/Mentor/Jurado, required)
    - Evento (select: updated to 2026 events, required)
    - Motivação (textarea, optional — new field)
    - "Enviar Inscrição" red full-width button
    - Note: "Entraremos em contato em até 48h"
- All existing validation preserved (zod schema)

- [ ] **Step 2: Test in browser**

Navigate to `/inscricao`. Verify split layout, form validation works, submit button.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Apply.tsx
git commit -m "feat: redesign apply page with split layout and enhanced form"
```

---

## Task 19: Matchmaking Page Redesign

**Files:**
- Modify: `src/pages/Matchmaking.tsx`

**Read first:** `docs/superpowers/specs/2026-04-21-19-page-matchmaking.md`

- [ ] **Step 1: Rewrite Matchmaking page**

- Dark background (bg-[#111])
- Hero (~30vh): gradient carvão, "Matchmaking SW" title, subtitle, 3 role icons colored
- Filters: search (bg-[#2D2D2D]) + role pills with colors:
  - Todos (red), Hacker (blue #3B82F6), Hustler (green #22C55E), Hipster (purple #A855F7)
- Stats bar: "X participantes" | "Y Hackers" | "Z Hustlers" | "W Hipsters" with proportion bar
- Cards (3 cols): bg-[#2D2D2D] rounded-2xl, border-top 4px role-color, circular avatar with role-color border, name white, role badge (pill colored + emoji), skills pills (max 4 + "+N"), "Convidar para equipe" outline button in role-color
- Hover: elevate + glow in role-color
- framer-motion: stagger, layout animation on filter

All mock participants preserved.

- [ ] **Step 2: Test in browser**

Navigate to `/matchmaking`. Verify colored role system, filters animate, cards have correct colors.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Matchmaking.tsx
git commit -m "feat: redesign matchmaking page with role-colored cards and dark theme"
```

---

## Task 20: Legal Pages Template Update

**Files:**
- Modify: `src/pages/Privacy.tsx`
- Modify: `src/pages/Terms.tsx`
- Modify: remaining legal pages (Code.tsx, Security.tsx, Cookies.tsx, Accessibility.tsx, Licenses.tsx)

**Read first:** `docs/superpowers/specs/2026-04-21-20-pages-legal.md`

- [ ] **Step 1: Update legal pages with consistent template**

For each legal page:
- Hero: gradient carvão → slate (~25vh), icon in red circle, title text-4xl font-black text-white, red decorative line
- Meta: card white shadow-sm, "Última atualização: DD/04/2026"
- Content: max-w-4xl centered, preserve ALL existing content
- Add sticky sidebar right (desktop only): links to each section, scroll-spy highlight active section
- Cards preserved (Coleta Cuidadosa, Proteção Rigorosa, etc.)
- Accordion for long content sections preserved
- Subtle animations: fadeIn, stagger cards

All legal content preserved exactly. Only update dates to 2026.

- [ ] **Step 2: Test Privacy and Terms pages**

Navigate to `/privacidade` and `/termos-de-uso`. Verify hero, sidebar navigation, all content intact.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Privacy.tsx src/pages/Terms.tsx src/pages/Code.tsx src/pages/Security.tsx src/pages/Cookies.tsx src/pages/Accessibility.tsx src/pages/Licenses.tsx
git commit -m "feat: update legal pages with dark hero, sidebar navigation, and 2026 dates"
```

---

## Task 21: Homepage Composition + Final Integration

**Files:**
- Modify: `src/pages/Index.tsx`
- Possibly remove: `src/components/templates/ParallaxBackground.tsx` (if replaced by section-specific backgrounds)

- [ ] **Step 1: Update Index.tsx section order and cleanup**

Ensure all sections render in correct order with proper alternating backgrounds:
1. Navbar (transparent → dark on scroll)
2. HeroSection (dark)
3. AboutSection (light)
4. EventsSection (dark)
5. CasesSection (warm)
6. EcosystemSection (dark)
7. MentorshipSection (light)
8. MentorsSection (dark)
9. TeamSection (warm)
10. TestimonialsSection (dark)
11. PartnersSection (light)
12. SponsorPricingSection (dark)
13. BlogSection (warm)
14. FaqSection (dark)
15. Footer (black)

Remove ParallaxBackground if sections now handle their own backgrounds.

- [ ] **Step 2: Full visual test in browser**

Open http://localhost:8080 and scroll through the entire page. Verify:
- Dark/light alternation is consistent
- All sections render without errors
- No console errors (check DevTools)
- All animations trigger on scroll
- Navbar transitions correctly
- Mobile responsive (test at 375px width)

- [ ] **Step 3: Commit**

```bash
git add src/pages/Index.tsx
git commit -m "feat: finalize homepage composition with alternating dark/light sections"
```

---

## Parallelization Guide

These tasks can be safely parallelized in groups:

**Group 1 (must be first):** Task 0 (Global Design System)

**Group 2 (homepage sections, all independent after Task 0):**
- Task 1 (Navbar)
- Task 2 (Hero)
- Task 3 (About)
- Task 4 (Events)
- Task 5 (Cases)
- Task 6 (Ecosystem)
- Task 7 (Mentorship + Mentors)
- Task 8 (Team)
- Task 9 (Testimonials)
- Task 10 (Partners)
- Task 11 (Pricing)
- Task 12 (Blog)
- Task 13 (FAQ)
- Task 14 (Footer)

**Group 3 (depends on Group 2):**
- Task 15 (Routes + Slugs)

**Group 4 (depends on Task 15):**
- Task 16 (Events Listing Page)
- Task 17 (Event Details Page)
- Task 18 (Apply Page)
- Task 19 (Matchmaking Page)
- Task 20 (Legal Pages)

**Group 5 (final, depends on all):**
- Task 21 (Homepage Integration)
