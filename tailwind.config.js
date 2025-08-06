/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-orange': 'var(--color-primary)',
        'brand-primary': 'var(--color-primary)',
        'brand-secondary': 'var(--color-secondary)',
        'brand-tertiary': 'var(--color-tertiary)',
        'brand-accent': 'var(--color-accent)',
        'brand-success': 'var(--color-success)',
        'brand-warning': 'var(--color-warning)',
        'brand-info': 'var(--color-info)',
      },
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: ['light', 'dark', 'luxury', 'retro', 'corporate', 'cyberpunk'],
  },
  plugins: [require('daisyui')],
};
