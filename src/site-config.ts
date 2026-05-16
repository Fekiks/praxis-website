/** Logo unter `public/` (Breite/Höhe für Layout-Attribute & Schema.org). */
export const PRACTICE_LOGO = {
  file: "images/Praxis_Logo_beige.jpg",
  width: 1774,
  height: 887,
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
