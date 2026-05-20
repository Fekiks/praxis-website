import type { APIRoute } from "astro";

/** Öffentliche Routen (ohne /agz – privat). */
const PATHS = [
  "/",
  "/about/",
  "/about/mein-ansatz/",
  "/about/qualifikation/",
  "/about/werdegang/",
  "/about/mitgliedschaften/",
  "/contact/",
  "/services/",
  "/impressum/",
  "/datenschutz/",
  "/therapieplatz-hilfe/",
];

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    return new Response("Missing site in astro.config", { status: 500 });
  }

  const siteBaseHref = site.href.endsWith("/") ? site.href : `${site.href}/`;

  const urls = PATHS.map((pathname) => {
    const rel = pathname === "/" ? "./" : `${pathname.replace(/^\/+|\/+$/g, "")}/`;
    const loc = new URL(rel, siteBaseHref).href;
    const priority = pathname === "/" ? "1.0" : "0.75";
    return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};

function escapeXml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
