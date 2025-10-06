// @ts-check
import { defineConfig, envField } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

import { loadEnv } from "vite";

const { SECRET_VAR_ONE } = loadEnv(
  process.env.TEST_SECRET || "",
  process.cwd(),
  ""
);

console.log("SECRET_VAR_ONE in astro.config.mjs", SECRET_VAR_ONE);

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  env: {
    schema: {
      SECRET_VAR_ONE: envField.string({ context: "server", access: "secret" }),
    },
  },
});
