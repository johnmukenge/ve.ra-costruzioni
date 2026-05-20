import { defineConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const entryPath = fileURLToPath(new URL("./utils/index.ts", import.meta.url));

export default defineConfig({
  root: ".",
  build: {
    outDir: "dist-utils",
    emptyOutDir: true,
    lib: {
      entry: path.resolve(entryPath),
      name: "VeraUtils",
      formats: ["es"],
      fileName: "vera-utils",
    },
  },
});
