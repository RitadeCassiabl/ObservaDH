import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'layout-principal': 'linear-gradient(135deg, #060C18 0%, #122144 49%, #1A326E 100%)',
      },
      boxShadow: {
        'bottom': '0 1px 10px 1px rgba(0, 0, 0, 0.1), 0 0 0 0 0  rgba(0, 0, 0, 0)',
      },
    },
  },
  plugins: [],
};
export default config;
