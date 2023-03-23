import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [sveltekit(), tsconfigPaths()],
  server: {
    host: true,
  },
  ssr: {
    noExternal: ["three"],
  },
});
