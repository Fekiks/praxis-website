/** Transparentes Raster am Seitenfuß unter `public/`. */
export const FOOTER_MARK = {
  file: "images/praxis_footer_logo.png",
  width: 1536,
  height: 1024,
} as const;

/** Öffentliche Praxisdaten für Meta-Tags und strukturierte Daten (Schema.org). */
export const PRACTICE = {
  siteName: "Praxis für Psychotherapie – Katja Stumper",
  practitionerName: "Katja Stumper",
  telephone: "+4915510039425",
  email: "k.stumper.psychotherapie@gmail.com",
  streetAddress: "Cäsarstraße 70A",
  postalCode: "50968",
  addressLocality: "Köln",
  addressRegion: "NW",
  country: "DE",
} as const;

/** Fallback, wenn eine Seite keine eigene Meta-Beschreibung setzt. */
export const DEFAULT_META_DESCRIPTION =
  "Psychologische Psychotherapie in Köln-Bayenthal: Verhaltenstherapie mit Kassenzulassung und für Privatpatientinnen. Katja Stumper – Erstgespräch vereinbaren.";
