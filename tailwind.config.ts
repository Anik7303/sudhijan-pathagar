import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        kalpurush: ["var(--font-kalpurush)"],
        noto: ["var(--font-noto-sans)"],
        sirajee: ["var(--font-sirajee)"],
        solaiman: ["var(--font-solaiman-lipi)"],
      },
      colors: {
        primary: {
          default: "rgb(0,155,33)",
          light: "rgb(38,217,77)",
          dark: "rgb(13,115,35)",
        },
        secondary: {
          default: "rgb(138,38,15)",
          light: "rgb(217,71,38)",
          dark: "rgb(114,31,13)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
