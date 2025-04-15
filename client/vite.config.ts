import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // Optional: pass custom env vars if needed
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  };
});
