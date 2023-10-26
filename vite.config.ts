import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    setupFiles: ["./test/setup.ts"],
  },
});
