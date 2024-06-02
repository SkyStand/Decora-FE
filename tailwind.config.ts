import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        crete: ['Crete Round',],
        worksans: ['Work Sans', ],
      },
      colors: {
        primary: '#FCFCFB',
        secondary: '#2B2B2B',
        emascoklat: '#D0B386',
        salmon:{
          1: '#FFF6EF',
          2: '#FDEBE4',
          3: '#F08E80',
        },
        blue: {
          tua: '#152035'
        },
        abu: '#505050',
      },
    },
  },
  plugins: [],
};
export default config;
