import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#101418",
        panel: "#171d22",
        line: "#28323a",
        pitch: "#2e6b3f",
        turf: "#77aa6b",
        ember: "#f0b429",
        signal: "#37d67a",
        cyanline: "#41c7d7",
        danger: "#ff5570"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(0, 0, 0, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
