import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        muted: '#6B7280',
        accent: '#2563EB',
        line: '#E5E7EB',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 18px 48px rgba(17, 24, 39, 0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config;
