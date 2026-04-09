/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#05070a',
          container: '#0d131a',
        },
        secondary: {
          DEFAULT: '#1292e8',
          fixed: '#7fd3ff',
          container: '#173149',
        },
        'on-secondary-container': '#eaf6ff',
        tertiary: {
          DEFAULT: '#f24236',
        },
        surface: {
          DEFAULT: '#0a0f14',
          container: {
            lowest: '#060a0f',
            low: '#0d141c',
            DEFAULT: '#131c25',
            highest: '#1d2a38',
          }
        },
        outline: {
          variant: '#2f4356',
        },
        // High-contrast text scale
        prose: {
          high:   '#F4F8FC',
          mid:    '#B5C2CF',
          low:    '#708293',
          accent: '#1292e8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Work Sans', 'sans-serif'],
        headline: ['Work Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      letterSpacing: {
        'headline-tight': '-0.04em',
        'headline-ultra': '-0.06em',
        'label':           '0.12em',
        'label-wide':      '0.18em',
      },
      lineHeight: {
        'display': '0.92',
        'heading': '1.1',
        'relaxed-body': '1.75',
      },
      boxShadow: {
        ambient:  '0 8px 32px rgba(0, 0, 0, 0.28)',
        'glow-sm': '0 0 16px rgba(18,146,232,0.18)',
        'glow-md': '0 0 32px rgba(18,146,232,0.24)',
        'glow-lg': '0 0 64px rgba(18,146,232,0.30)',
        'glass':   '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)',
        'glass-lg':'0 24px 64px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
