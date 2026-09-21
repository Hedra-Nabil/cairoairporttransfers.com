/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: '#141238',
            dark: '#0e0c29',
            light: '#1e1b4b',
            card: '#1d1948',
            hover: '#27225d',
          },
          yellow: {
            DEFAULT: '#f59e0b',
            light: '#fbbf24',
            dark: '#d97706',
            hover: '#e69507',
          },
          purple: {
            DEFAULT: '#4f46e5',
            light: '#6366f1',
            soft: '#eef2ff',
          },
          gray: {
            light: '#f8fafc',
            border: '#e2e8f0',
            text: '#64748b',
            heading: '#1e293b',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        outfit: ['Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.08)',
        'hero-search': '0 20px 40px -15px rgba(15, 23, 42, 0.18)',
      }
    },
  },
  plugins: [],
};
