/**
 * SWMG Design System — Tokens
 *
 * Single source of truth for colors, spacing, typography, and animation
 * presets used across the entire project.
 *
 * Usage:
 *   import { colors, animations } from '@/design-system/tokens';
 */

// ─── Colors ──────────────────────────────────────────────────
export const colors = {
  // Brand — Startup Weekend / Techstars aligned
  brand: {
    red: '#E4002B',        // SW official red
    redHover: '#C8001F',
    redLight: '#FEF2F2',   // bg-red-50 equivalent
    redMuted: 'rgba(228, 0, 43, 0.10)',
  },

  // Backgrounds
  bg: {
    dark: '#0f172a',       // slate-900 — primary dark
    darker: '#020617',     // slate-950
    light: '#f8fafc',      // slate-50
    white: '#ffffff',
    warmGray: '#F5F5F0',
    offWhite: '#FAFAF8',
    card: '#ffffff',
    cardHover: '#f8fafc',
  },

  // Text
  text: {
    primary: '#0f172a',    // slate-900
    secondary: '#475569',  // slate-600
    muted: '#94a3b8',      // slate-400
    inverse: '#ffffff',
    accent: '#E4002B',
  },

  // Status
  status: {
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
    upcoming: '#E4002B',
    past: '#6b7280',
    live: '#22c55e',
  },

  // Expertise / Roles (for mentor & matchmaking badges)
  expertise: {
    tech: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
    business: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
    design: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
    marketing: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
    legal: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200' },
    finance: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  },

  // Partner Tiers
  tiers: {
    diamond: { color: '#7C3AED', label: 'Diamante' },
    platinum: { color: '#6B7280', label: 'Platina' },
    gold: { color: '#D97706', label: 'Ouro' },
    silver: { color: '#9CA3AF', label: 'Prata' },
    bronze: { color: '#B45309', label: 'Bronze' },
    support: { color: '#6B7280', label: 'Apoio' },
    media: { color: '#6B7280', label: 'Mídia' },
  },

  // Matchmaking Roles
  roles: {
    hacker: { color: '#3B82F6', label: 'Hacker', emoji: '💻' },
    hustler: { color: '#22C55E', label: 'Hustler', emoji: '📈' },
    hipster: { color: '#A855F7', label: 'Hipster', emoji: '🎨' },
  },
} as const;

// ─── Typography ──────────────────────────────────────────────
export const typography = {
  heading: {
    hero: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
    section: 'text-3xl md:text-4xl font-bold',
    subsection: 'text-xl md:text-2xl font-semibold',
    card: 'text-lg font-semibold',
  },
  body: {
    large: 'text-lg md:text-xl leading-relaxed',
    base: 'text-base leading-relaxed',
    small: 'text-sm',
    caption: 'text-xs',
  },
  eyebrow: 'text-sm font-medium text-red-600 tracking-wide',
} as const;

// ─── Spacing ─────────────────────────────────────────────────
export const spacing = {
  section: {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-24',
    xl: 'py-32',
  },
  container: 'container mx-auto px-4 sm:px-6 lg:px-8',
  cardPadding: 'p-5 md:p-6',
  gap: {
    sm: 'gap-3',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  },
} as const;

// ─── Borders & Radius ────────────────────────────────────────
export const radius = {
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  full: 'rounded-full',
  card: 'rounded-xl',
  button: 'rounded-xl',
  pill: 'rounded-full',
} as const;

// ─── Shadows ─────────────────────────────────────────────────
export const shadows = {
  card: 'shadow-sm hover:shadow-md transition-shadow duration-300',
  cardElevated: 'shadow-md hover:shadow-xl transition-shadow duration-300',
  glow: {
    red: 'hover:shadow-[0_0_20px_rgba(228,0,43,0.15)]',
    soft: 'hover:shadow-lg',
  },
} as const;

// ─── Animation presets (for framer-motion) ───────────────────
export const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  },
  hoverLift: {
    whileHover: { y: -4, transition: { duration: 0.2 } },
  },
  hoverScale: {
    whileHover: { scale: 1.02, transition: { duration: 0.2 } },
  },
  stagger: (delay = 0.08) => ({
    transition: { staggerChildren: delay },
  }),
  viewport: { once: true, margin: '-50px' as const },
} as const;

// ─── Section backgrounds (matching the alternation pattern) ──
export const sectionBg = {
  hero: 'bg-white',
  about: 'bg-gradient-to-b from-white to-slate-50/50',
  events: 'bg-white',
  cases: 'bg-slate-50',
  ecosystem: 'bg-white',
  mentorship: 'bg-gradient-to-b from-slate-50 to-white',
  mentors: 'bg-white',
  team: 'bg-slate-50',
  testimonials: 'bg-white',
  partners: 'bg-slate-50',
  pricing: 'bg-white',
  blog: 'bg-white',
  faq: 'bg-slate-50',
} as const;
