import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: "var(--rubik-font)",
        karla: "var(--karla-font)",
      },
      colors: {
        brand: "#ffb441",
        secondary: "#4436ca",
      },
      backgroundImage: {
        banner: "url('/assets/homebg.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
