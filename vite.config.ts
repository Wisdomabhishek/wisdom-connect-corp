import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  base: "/wisdom-connect-corp/",

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

  vite: {
    plugins: [
      nitro({
        preset: "node-server",
      }),
    ],
  },
});
