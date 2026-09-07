import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  vite: {
    base: "/",
    plugins: [
      nitro({
        preset: "node-server",
      }),
    ],
  },

  tanstackStart: {
    server: {
      entry: "server",
    },
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
    },
  },
});
