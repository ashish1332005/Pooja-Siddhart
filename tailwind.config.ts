import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
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
        serif: ["Cormorant Garamond", "adobe-caslon-pro", "Playfair Display", "Georgia", "serif"],
        couple: ["var(--font-couple)"],
        display: ["Runiga", "var(--font-display)", "Georgia", "serif"],
        runiga: ["Runiga", "Georgia", "serif"],
        body: ["var(--font-body)"],
        digit: ["var(--font-digit)"],
        hindi: ["var(--font-hindi)"],
        script: ["var(--font-couple)"],
        subtitle: ["Runiga", "var(--font-display)", "Georgia", "serif"],
        adorn: ["var(--font-adorn)"],
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
        ivory: "hsl(var(--ivory))",
        cream: "hsl(var(--cream))",
        champagne: {
          DEFAULT: "hsl(var(--champagne))",
          light: "hsl(var(--champagne-light))",
          dark: "hsl(var(--champagne-dark))",
          beige: "hsl(var(--champagne-beige))",
        },
        "dusty-rose": {
          DEFAULT: "hsl(var(--dusty-rose))",
          soft: "hsl(var(--dusty-rose-soft))",
        },
        greige: {
          DEFAULT: "hsl(var(--greige))",
          soft: "hsl(var(--greige-soft))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          soft: "hsl(var(--gold-soft))",
          dark: "hsl(var(--gold-dark))",
        },
        sage: {
          DEFAULT: "hsl(var(--sage))",
          dark: "hsl(var(--sage-dark))",
          light: "hsl(var(--sage-light))",
        },
        ink: "hsl(var(--ink))",
        countdown: "hsl(var(--countdown))",
        limestone: "hsl(var(--limestone))",
        olive: "hsl(var(--olive))",
        riviere: "hsl(var(--riviere))",
        terracotta: "hsl(var(--terracotta))",
        ochre: "hsl(var(--ochre))",
        lilac: "hsl(var(--lilac))",
        blush: "hsl(var(--blush))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
