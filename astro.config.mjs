import { defineConfig } from "astro/config";

/**
 * Canonical site URL für Canonical-Tags, OG und Sitemap.
 * Auf Vercel: für Production `PUBLIC_SITE_URL` setzen (z. B. Custom Domain oder *.vercel.app),
 * damit Preview-Deployments keine falschen Canonicals erzeugen.
 */
const site =
  process.env.PUBLIC_SITE_URL?.trim().replace(/\/+$/, "") ||
  "https://praxis-website-sand.vercel.app";

export default defineConfig({
  output: "static",
  site,
});
