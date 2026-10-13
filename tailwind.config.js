/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#050A12",
        "midnight-2": "#0B1422",
        electric: "#2563FF",
        "electric-dim": "#1d4ed8",
        champ: "#E63946",
        "champ-dim": "#c12b37",
        gold: "#C8A45D",
        "gold-dim": "#a8853f",
        ink: "#F5F7FA",
        muted: "#8a96a8",
        "muted-2": "#5c6675",
        line: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.25em",
      },
      maxWidth: {
        edge: "1440px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        sweep: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
        pulseSoft: {
          "0%,100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-in": "fade-in 0.8s ease forwards",
        shimmer: "shimmer 3s linear infinite",
        sweep: "sweep 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
