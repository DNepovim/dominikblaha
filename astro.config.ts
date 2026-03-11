// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import { resolve } from "path";

import { envConfig } from "./env.config.ts";

import { imageService } from "@unpic/astro/service";

const { SITE_URL } = loadEnv("", process.cwd(), "");

export default defineConfig({
  env: envConfig,
  site: SITE_URL ?? "http://localhost:4321",
  integrations: [
    mdx(),
    sitemap({ lastmod: new Date() }),
  ],

  vite: {
    resolve: {
      alias: {
        "@": resolve("./src"),
      },
    },
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),

  image: {
    service: imageService({
      placeholder: "lqip",
    }),
  },
});
