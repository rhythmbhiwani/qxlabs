import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "var(--inter-font)",
        redHatDisplay: "var(--redHatDisplay-font)",
      },
      backgroundImage: {
        "green-purplish":
          "linear-gradient(to right,rgba(71,15,74,.3)20%,rgba(8,77,102,.2)80%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
