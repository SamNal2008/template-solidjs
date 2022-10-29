import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import type { UserConfig } from "vitest/config";
import * as path from "path";

const vitestConfig: UserConfig = {
  test: {
    globals: true,
    environment: "jsdom",
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
    setupFiles: "./config/setupVitest.ts",
    // threads: false,
    // isolate: false,
  },
};

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    polyfillModulePreload: false,
  },
  resolve: {
    conditions: ["development", "browser"],
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
  test: vitestConfig.test,
});
