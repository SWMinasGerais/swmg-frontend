/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "pulse-slow": {
          '0%, 100%': { 
            opacity: 0.4,
            transform: 'scale(1)'
          },
          '50%': { 
            opacity: 0.9,
            transform: 'scale(1.05)'
          },
        },
        "float-slow": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        "shine": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" }
        },
        "line-flow": {
          "0%": { 
            transform: "translate(120%, 120%)",
            opacity: 0
          },
          "10%": {
            opacity: 0.7
          },
          "90%": {
            opacity: 0.7
          },
          "100%": { 
            transform: "translate(-120%, -120%)",
            opacity: 0
          }
        },
        "dot-pulse": {
          "0%, 100%": {
            transform: "scale(0.7)",
            boxShadow: "0 0 0 0 rgba(220, 38, 38, 0.7)",
            opacity: 0.7
          },
          "50%": {
            transform: "scale(1.3)",
            boxShadow: "0 0 0 10px rgba(220, 38, 38, 0)",
            opacity: 1
          }
        },
        "orbit": {
          "0%": {
            transform: "rotate(0deg) translateX(100px) rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(100px) rotate(-360deg)",
          }
        },
        "ripple": {
          "0%": {
            transform: "scale(0.8)",
            opacity: 1
          },
          "100%": {
            transform: "scale(2)",
            opacity: 0
          }
        },
        "move-diagonal": {
          "0%": {
            transform: "translate(0, 0)"
          },
          "100%": {
            transform: "translate(-30px, -30px)"
          }
        },
        "move-reverse-diagonal": {
          "0%": {
            transform: "translate(0, 0)"
          },
          "100%": {
            transform: "translate(30px, -30px)"
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-25px) scale(1.05)' },
        },
        'line-flow': {
          '0%': { opacity: 0, transform: 'translate(120%, 120%)' },
          '5%': { opacity: 1 },
          '95%': { opacity: 1 },
          '100%': { opacity: 0, transform: 'translate(-20%, -20%)' },
        },
        'dot-pulse': {
          '0%, 100%': { transform: 'scale(0.8)', opacity: 0.6 },
          '50%': { transform: 'scale(1.2)', opacity: 1 },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg) translateX(20px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(20px) rotate(-360deg)' },
        },
        'ripple': {
          '0%': { transform: 'scale(0)', opacity: 1 },
          '100%': { transform: 'scale(4)', opacity: 0 },
        },
        'move-diagonal': {
          '0%': { transform: 'translate(0px, 0px)' },
          '100%': { transform: 'translate(20px, 20px)' },
        },
        'shine': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 0%' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "shine": "shine 4s linear infinite",
        "line-flow": "line-flow 6s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "dot-pulse": "dot-pulse 3s ease-in-out infinite",
        "orbit": "orbit 12s linear infinite",
        "ripple": "ripple 4s ease-out infinite",
        "move-diagonal": "move-diagonal 25s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
} 