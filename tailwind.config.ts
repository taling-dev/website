import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
    },
  },
  plugins: [],
} satisfies Config;