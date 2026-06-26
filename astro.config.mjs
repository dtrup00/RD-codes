// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
// Deployed to GitHub Pages project site: https://dtrup00.github.io/RD-codes
export default defineConfig({
  site: "https://dtrup00.github.io",
  base: "/RD-codes",
  build: {
    assets: "assets",
  },
});
