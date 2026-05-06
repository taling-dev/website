import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#E879A0',
          rose: '#F4B8CB',
          purple: '#7E22CE',
          crimson: '#BC185C',
          'crimson-dark': '#BD185D',
          light: '#EBEEFF',
          bg: '#FAF7FF',
          text: '#4A586B',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;