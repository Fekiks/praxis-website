import { defineConfig } from "astro/config";

/** Canonical site URL für Canonical-Tags, OG und Sitemap. Bei eigener Domain: PUBLIC_SITE_URL setzen. */
const site =
  process.env.PUBLIC_SITE_URL?.trim().replace(/\/+$/, "") ||
  "https://fekiks.github.io/praxis-website";

export default defineConfig({
  output: "static",
  site,
});
