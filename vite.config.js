import minifyHTML from "rollup-plugin-minify-html-literals";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [minifyHTML.default()],
});
