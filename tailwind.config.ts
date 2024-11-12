import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
      },
      screens: {
        '2xl': '1688px'
      }
    },
    extend: {
      fontFamily: {
        allianceSemiBold:  ['allianceSemiBold']
      },
      colors: {
        primary: "var(--primary)",
        'primary-dark': 'var(--primary-dark)',
        'primary-darken': 'var(--primary-darken)',
        background: "var(--background)",
        foreground: "var(--foreground)",
        'black-light': 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
