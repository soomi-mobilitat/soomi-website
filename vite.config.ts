import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    tailwindcss(),
  ].filter(Boolean),
  define: {
    // Year of the build, baked into both the client bundle and the prerendered HTML (see Footer)
    __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()),
  },
  build: {
    // The SSR build only produces the prerender entry: public/ is already in the client build
    copyPublicDir: !isSsrBuild,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
