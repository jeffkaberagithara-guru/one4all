import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'rgb(var(--c-paper) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        coal: 'rgb(var(--c-coal) / <alpha-value>)',
        steel: 'rgb(var(--c-steel) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        display: ['"Inter Tight"', ...fontFamily.sans],
        mono: [...fontFamily.mono],
      },
      letterSpacing: {
        tightest: '-0.045em',
        caps: '0.14em',
        wider2: '0.28em',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
