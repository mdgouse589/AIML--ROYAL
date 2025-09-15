/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Background Colors
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        surface: 'var(--color-surface)',
        card: {
          DEFAULT: 'var(--color-card)',
          foreground: 'var(--color-card-foreground)'
        },
        popover: {
          DEFAULT: 'var(--color-popover)',
          foreground: 'var(--color-popover-foreground)'
        },
        muted: {
          DEFAULT: 'var(--color-muted)',
          foreground: 'var(--color-muted-foreground)'
        },
        
        // Border and Input
        border: 'var(--color-border)',
        input: 'var(--color-input)',
        ring: 'var(--color-ring)',
        
        // Brand Colors
        primary: {
          DEFAULT: 'var(--color-primary)',
          foreground: 'var(--color-primary-foreground)'
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          foreground: 'var(--color-secondary-foreground)'
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          foreground: 'var(--color-accent-foreground)'
        },
        
        // Status Colors
        success: {
          DEFAULT: 'var(--color-success)',
          foreground: 'var(--color-success-foreground)'
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          foreground: 'var(--color-warning-foreground)'
        },
        error: {
          DEFAULT: 'var(--color-error)',
          foreground: 'var(--color-error-foreground)'
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)',
          foreground: 'var(--color-destructive-foreground)'
        },
        
        // Additional Colors
        cta: {
          DEFAULT: 'var(--color-cta)',
          foreground: 'var(--color-cta-foreground)'
        },
        'royal-gold': {
          DEFAULT: "var(--color-royal-gold)",
          foreground: "var(--color-royal-gold-foreground)"
        },
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': "var(--color-text-secondary)",
      },
      fontFamily: {
        'sans': ['Source Sans Pro', 'sans-serif'],
        'heading': ['Inter', 'sans-serif'],
        'accent': ['Playfair Display', 'serif'],
        'cta': ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'code': ['Source Code Pro', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.2' }],
        'section': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.3' }]
      },
      spacing: {
        '13': '3.25rem',
        '18': '4.5rem',
        '21': '5.25rem',
        '34': '8.5rem',
        '55': '13.75rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        'royal': '0 4px 20px rgba(128, 0, 0, 0.15)',
        'royal-lg': '0 20px 40px rgba(128, 0, 0, 0.1)',
        'golden': '0 4px 6px -1px rgba(255, 215, 0, 0.1)',
        'golden-lg': '0 20px 25px -5px rgba(255, 215, 0, 0.1)'
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translate3d(0, 100vh, 0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translate3d(0, -100px, 0)', opacity: '0' }
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        counter: {
          'from': { transform: 'scale(0.8)', opacity: '0' },
          'to': { transform: 'scale(1)', opacity: '1' }
        },
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "slide-in-from-top": { "0%": { transform: "translateY(-100%)" }, "100%": { transform: "translateY(0)" } },
        "slide-in-from-bottom": { "0%": { transform: "translateY(100%)" }, "100%": { transform: "translateY(0)" } },
        "slide-in-from-left": { "0%": { transform: "translateX(-100%)" }, "100%": { transform: "translateX(0)" } },
        "slide-in-from-right": { "0%": { transform: "translateX(100%)" }, "100%": { transform: "translateX(0)" } },
        "scale-in": { "0%": { transform: "scale(0.95)", opacity: "0" }, "100%": { transform: "scale(1)", opacity: "1" } },
        "glow": { "0%, 100%": { boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)" }, "50%": { boxShadow: "0 0 30px rgba(255, 215, 0, 0.6)" } },
        "float": { "0%, 100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-10px)" } },
      },
      animation: {
        'float-up': 'floatUp 6s infinite linear',
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'pulse-golden': 'pulse 2s infinite',
        'counter': 'counter 2.5s ease-out',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in-from-top": "slide-in-from-top 0.3s ease-out",
        "slide-in-from-bottom": "slide-in-from-bottom 0.3s ease-out",
        "slide-in-from-left": "slide-in-from-left 0.3s ease-out",
        "slide-in-from-right": "slide-in-from-right 0.3s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "glow": "glow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
      },
      backdropBlur: { xs: '2px' },
      transitionTimingFunction: { 'royal': 'cubic-bezier(0.4, 0, 0.2, 1)' },
      transitionDuration: { '400': '400ms', '600': '600ms' }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate')
  ]
}
