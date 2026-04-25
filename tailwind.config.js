/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      /* ═══════════════════════════════════════════════════════════
         COLOR SYSTEM — 9-Token Dark Luxury Editorial Palette
         Built around wine-smoke #2B0F14 and #6D2E46
         ═══════════════════════════════════════════════════════════ */
      colors: {
        // ── Core Backgrounds ──
        obsidian:    '#0D0709',   // True background — near-black with warm undertone
        wine: {
          deep:      '#2B0F14',   // Primary dark surface — deep burgundy-black
          DEFAULT:   '#6D2E46',   // Primary brand accent — rich wine
          light:     '#8A3A5A',   // Wine hover / lighter variant
          muted:     '#4A1E30',   // Subtle wine for borders, dividers
        },

        // ── Accent & Highlight ──
        gold: {
          mist:      '#C9A96E',   // Rare accent — warm champagne gold
          light:     '#DFC48B',   // Gold hover / glow state
          dark:      '#A68B4B',   // Gold muted / pressed state
        },

        // ── Text Hierarchy ──
        smoke: {
          DEFAULT:   '#C4A8B0',   // Muted text — pinkish smoke
          light:     '#E8D5DA',   // Secondary headings — warm off-white
          bright:    '#F5EEF0',   // Primary text — almost white, warm
        },

        // ── Utility ──
        surface: {
          DEFAULT:   '#1A0C10',   // Card surface — slightly lifted from obsidian
          elevated:  '#231218',   // Elevated card / modal surface
          glass:     'rgba(43, 15, 20, 0.6)',  // Glassmorphism base
        },
      },

      /* ═══════════════════════════════════════════════════════════
         TYPOGRAPHY — 5 Font Families Mapped to Design Roles
         ═══════════════════════════════════════════════════════════ */
      fontFamily: {
        'display':   ['"Cormorant Garamond"', 'Georgia', 'serif'],           // Hero, big headings
        'heading':   ['"Syne"', '"Inter"', 'system-ui', 'sans-serif'],       // Section labels, nav
        'body':      ['"DM Sans"', '"Inter"', 'system-ui', 'sans-serif'],    // Body text
        'mono':      ['"JetBrains Mono"', '"Fira Code"', 'monospace'],       // Tech tags, code
        'editorial': ['"Playfair Display"', 'Georgia', 'serif'],             // Quotes, callouts
      },

      /* ═══════════════════════════════════════════════════════════
         SPACING & LAYOUT
         ═══════════════════════════════════════════════════════════ */
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '120': '30rem',
        'section': '6rem',      // Standard section padding
        'section-lg': '8rem',   // Large section padding
      },

      maxWidth: {
        'portfolio': '1280px',
        'content':   '960px',
        'narrow':    '720px',
      },

      /* ═══════════════════════════════════════════════════════════
         FONT SIZES — Editorial Scale
         ═══════════════════════════════════════════════════════════ */
      fontSize: {
        'hero':       ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'hero-sub':   ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.4', letterSpacing: '0.02em' }],
        'section':    ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section-sm': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'label':      ['0.75rem', { lineHeight: '1', letterSpacing: '0.2em', fontWeight: '600' }],
        'body-lg':    ['1.125rem', { lineHeight: '1.75' }],
        'body-sm':    ['0.875rem', { lineHeight: '1.6' }],
        'caption':    ['0.75rem', { lineHeight: '1.5' }],
        'quote':      ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.35', letterSpacing: '-0.01em' }],
      },

      /* ═══════════════════════════════════════════════════════════
         BORDER RADIUS
         ═══════════════════════════════════════════════════════════ */
      borderRadius: {
        'card': '1rem',
        'pill': '9999px',
        'soft': '0.5rem',
      },

      /* ═══════════════════════════════════════════════════════════
         SHADOWS — Warm-toned to match palette
         ═══════════════════════════════════════════════════════════ */
      boxShadow: {
        'glow-wine':  '0 0 30px rgba(109, 46, 70, 0.3)',
        'glow-gold':  '0 0 30px rgba(201, 169, 110, 0.2)',
        'card':       '0 4px 24px rgba(13, 7, 9, 0.5)',
        'card-hover': '0 8px 40px rgba(109, 46, 70, 0.2)',
        'elevated':   '0 16px 48px rgba(13, 7, 9, 0.6)',
      },

      /* ═══════════════════════════════════════════════════════════
         BACKDROP BLUR
         ═══════════════════════════════════════════════════════════ */
      backdropBlur: {
        'glass': '16px',
        'heavy': '24px',
      },

      /* ═══════════════════════════════════════════════════════════
         ANIMATIONS & TRANSITIONS
         ═══════════════════════════════════════════════════════════ */
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },

      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',    // Smooth deceleration
        'dramatic': 'cubic-bezier(0.77, 0, 0.175, 1)', // Snappy with weight
        'editorial': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Gentle ease
      },

      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(109, 46, 70, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(109, 46, 70, 0.4)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'text-reveal': {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        'line-grow': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'grain': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '30%': { transform: 'translate(3%, -15%)' },
          '50%': { transform: 'translate(12%, 9%)' },
          '70%': { transform: 'translate(9%, 4%)' },
          '90%': { transform: 'translate(-1%, 7%)' },
        },
      },

      animation: {
        'fade-in-up':     'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-down':   'fade-in-down 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in':        'fade-in 0.6s ease forwards',
        'slide-in-left':  'slide-in-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slide-in-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in':       'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float':          'float 6s ease-in-out infinite',
        'pulse-glow':     'pulse-glow 3s ease-in-out infinite',
        'shimmer':        'shimmer 3s ease infinite',
        'text-reveal':    'text-reveal 1s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        'line-grow':      'line-grow 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'grain':          'grain 8s steps(10) infinite',
        'spin-slow':      'spin 12s linear infinite',
      },
    },
  },
  plugins: [],
}