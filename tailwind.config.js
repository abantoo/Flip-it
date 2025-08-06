/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'flip-it-orange': 'var(--color-primary)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        accent: 'var(--color-accent)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        info: 'var(--color-info)',
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
