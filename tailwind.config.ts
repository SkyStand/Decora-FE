import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Libre Baskerville"],
        secondary: ["Roboto Slab"],
      },
      colors: {
        primary: '#FCFCFB',
        secondary: '#2B2B2B',
        emascoklat: '#D0B386',
      },
    },
  },
  plugins: [],
};
export default config;
