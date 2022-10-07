import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/phy-website",
  server: { port: 3000 },
  plugins: [react()],
});
