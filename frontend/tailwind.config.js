/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
      // Every text-* size across the site, scaled up 20% from Tailwind's
      // defaults (line-heights scaled to match so the proportions/rhythm
      // stay the same, just bigger). This covers every text-xs..text-9xl
      // class already used in the codebase, so no component files need to
      // change — only a handful of one-off text-[11px]-style arbitrary
      // values elsewhere are NOT covered by this and would need their own
      // bump if you want those scaled too.
      fontSize: {
        xs: ['0.9rem', { lineHeight: '1.2rem' }],
        sm: ['1.05rem', { lineHeight: '1.5rem' }],
        base: ['1.2rem', { lineHeight: '1.8rem' }],
        lg: ['1.35rem', { lineHeight: '2.1rem' }],
        xl: ['1.5rem', { lineHeight: '2.1rem' }],
        '2xl': ['1.8rem', { lineHeight: '2.4rem' }],
        '3xl': ['2.25rem', { lineHeight: '2.7rem' }],
        '4xl': ['2.7rem', { lineHeight: '3rem' }],
        '5xl': ['3.6rem', { lineHeight: '1' }],
        '6xl': ['4.5rem', { lineHeight: '1' }],
        '7xl': ['5.4rem', { lineHeight: '1' }],
        '8xl': ['7.2rem', { lineHeight: '1' }],
        '9xl': ['9.6rem', { lineHeight: '1' }],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        forest: {
          900: '#17170F',
          800: '#26251A',
          700: '#45443A',
          500: '#77766A',
          300: '#A9A797',
          100: '#E7E1D5',
        },
        cream: {
          900: '#E3D9C8',
          500: '#EFE9DE',
          100: '#F7F3EC',
        },
        gold: '#B79367',
        lime: {
          DEFAULT: '#CBEF4A',
          dark: '#B4D92F',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'marquee': 'marquee 40s linear infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};