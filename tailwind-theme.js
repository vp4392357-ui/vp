window.tailwind = window.tailwind || {};

window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0A0A",
        coal: "#111111",
        crimson: "#C8102E",
        "crimson-soft": "rgba(200,16,46,0.12)",
        gold: "#D4AF37",
        ivory: "#F5F5F5",
        mist: "#B8B8B8",
        ink: "#050505",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
        tech: ["Sora", "system-ui", "sans-serif"],
      },
      boxShadow: {
        luxe: "0 30px 90px rgba(0,0,0,0.45), 0 0 40px rgba(200,16,46,0.12)",
        card: "0 24px 80px rgba(0,0,0,0.42)",
      },
      backgroundImage: {
        "red-radial":
          "radial-gradient(circle at center, rgba(200,16,46,0.38) 0%, rgba(200,16,46,0) 72%)",
        "gold-radial":
          "radial-gradient(circle at center, rgba(212,175,55,0.28) 0%, rgba(212,175,55,0) 76%)",
        mesh:
          "radial-gradient(circle at top left, rgba(200,16,46,0.18), transparent 32%), radial-gradient(circle at top right, rgba(212,175,55,0.08), transparent 28%), linear-gradient(180deg, #050505 0%, #0A0A0A 100%)",
      },
      maxWidth: {
        prosewide: "72rem",
      },
      letterSpacing: {
        luxe: "0.28em",
      },
    },
  },
};
