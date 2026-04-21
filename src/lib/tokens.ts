/**
 * SWMG Design Tokens
 *
 * Single source of truth for colors, spacing, typography, and animation
 * presets used across the entire project.
 *
 * Usage:
 *   import { colors, animations } from '@/lib/tokens';
 */

// ─── Colors ──────────────────────────────────────────────────
export const colors = {
  brand: {
    red: '#E4002B',
    redHover: '#C8001F',
    redLight: '#FEF2F2',
    redMuted: 'rgba(228, 0, 43, 0.10)',
  },
  bg: {
    dark: '#0f172a',
    darker: '#020617',
    light: '#f8fafc',
    white: '#ffffff',
    warmGray: '#F5F5F0',
    offWhite: '#FAFAF8',
  },
  text: {
    primary: '#0f172a',
    secondary: '#475569',
    muted: '#94a3b8',
    inverse: '#ffffff',
    accent: '#E4002B',
  },
  status: {
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
    upcoming: '#E4002B',
    past: '#6b7280',
    live: '#22c55e',
  },
  expertise: {
    tech: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
    business: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
    design: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
    marketing: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
    legal: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200' },
    finance: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  },
  tiers: {
    diamond: { color: '#7C3AED', label: 'Diamante' },
    platinum: { color: '#6B7280', label: 'Platina' },
    gold: { color: '#D97706', label: 'Ouro' },
    silver: { color: '#9CA3AF', label: 'Prata' },
    bronze: { color: '#B45309', label: 'Bronze' },
    support: { color: '#6B7280', label: 'Apoio' },
    media: { color: '#6B7280', label: 'Mídia' },
  },
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
    section: 'text-3xl md:text-4xl font-bold tracking-tight',
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
  hoverLift: {
    whileHover: { y: -4, transition: { duration: 0.2 } },
  },
  stagger: (delay = 0.08) => ({
    transition: { staggerChildren: delay },
  }),
  viewport: { once: true, margin: '-50px' as const },
} as const;
