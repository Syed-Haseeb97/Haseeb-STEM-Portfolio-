import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--color-ink)',
        bone: 'var(--color-bone)',
        paper: 'var(--color-paper)',
        graphite: 'var(--color-graphite)',
        hairlineLight: 'var(--color-hairline-light)',
        hairlineDark: 'var(--color-hairline-dark)',
        accent: 'var(--color-accent)',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'serif'],
        sans: ['Geist', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
