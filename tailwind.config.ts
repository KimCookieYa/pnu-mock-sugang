import type { Config } from "tailwindcss";

function generateCSSObject(property: string): Record<string, string> {
  let cssObject: Record<string, string> = {};
  for (let i = 1; i <= 2000; i++) {
    cssObject[`${i}`] = `${i}px`;
  }
  return cssObject;
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pnuBlue: "#043d92",
        pnuText: "#333",
      },
      width: generateCSSObject("width"),
      minWidth: generateCSSObject("minWidth"),
      maxWidth: generateCSSObject("maxWidth"),
      height: generateCSSObject("height"),
      minHeight: generateCSSObject("minHeight"),
      maxHeight: generateCSSObject("maxHeight"),
      padding: generateCSSObject("padding"),
      margin: generateCSSObject("margin"),
    },
  },
  plugins: [],
};
export default config;
