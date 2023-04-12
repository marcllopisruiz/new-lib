import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
// import * as packageJson from "./package.json";

export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      include: ["src"],
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.js",
  },
  build: {
    lib: {
      entry: resolve("src", "index.ts"),
      name: "llopis",
      formats: ["umd"],
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    // rollupOptions: {
    //   external: [...Object.keys(packageJson.peerDependencies)],
    // },
  },
}));
