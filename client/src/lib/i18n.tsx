import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Language = "de" | "en";

type TranslationKey = keyof typeof translations.de;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const SITE_URL = "https://www.wienerbagel.com/";

const translations = {
  de: {
    "nav.home": "Startseite",
    "nav.story": "Unsere Story",
    "nav.menu": "Speisekarte",
    "nav.visit": "Besuchen",
    "nav.order": "Jetzt Bestellen",
    "nav.xmas": "X-Mas",

    "xmas.heroBadge": "Neu: unsere X-Mas Specials",
    "xmas.label": "Nur in der Weihnachtszeit",
    "xmas.subtitle": "Zwei festliche Bagels, die nach Wiener Weihnacht schmecken – mit Ente, Rotkraut, Brie und Preiselbeeren.",
    "xmas.badge": "X-Mas Special",
    "xmas.bagel1.name": "Ente & Rotkraut",
    "xmas.bagel1.desc": "Zarte Ente auf würzigem Rotkraut, dazu Essiggurkerl und Senf im knusprig getoasteten Bagel.",
    "xmas.bagel2.name": "Ente Sweet",
    "xmas.bagel2.desc": "Zarte Ente und cremiger Brie auf Rotkraut, gekrönt von fruchtigen Preiselbeeren.",
    "xmas.duo.alt": "X-Mas Special von PAM und Wienerbagel – zwei weihnachtliche Bagels",
    "xmas.availability": "Erhältlich bei PAM – solange der Vorrat reicht.",
    "xmas.cta": "So findest du uns",
    "xmas.bagel.altSuffix": "X-Mas Special Bagel bei Wienerbagel in Wien",
    "xmas.visitors.title": "Weihnachten in Wien: Frühstück vor dem Christkindlmarkt",
    "xmas.visitors.intro": "Du bist zur Adventzeit in Wien? Stärke dich bei uns in Neubau mit einem frisch belegten Bagel und Kaffee, bevor es zum Weihnachtsmarkt am Spittelberg, ins MuseumsQuartier oder zum Bummeln auf die Mariahilfer Straße geht.",
    "seo.title": "Wiener Bagel | Bagels, Frühstück & X-Mas Special in Wien",
    "seo.description": "Bagels & Frühstück in Wien-Neubau, wenige Gehminuten vom Weihnachtsmarkt am Spittelberg. Mit X-Mas Special. Täglich 07:50–17:00, auch an Feiertagen.",
    "xmas.logos.alt.pam": "PAM Logo mit Weihnachtsmütze",
    "xmas.logos.alt.wb": "Wienerbagel Logo mit Weihnachtsmütze",

    "bagels.label": "Frisch belegt",
    "bagels.title": "Unsere Bagels",
    "bagels.breakfast": "Frühstück & Simple Bagels",

    "hero.tagline": "Von Wien nach NYC & zurück",
    "hero.subtitle": "Wo der Bagel 1683 geboren wurde – und endlich nach Hause zurückgekehrt ist.",
    "hero.viewMenu": "Speisekarte",
    "hero.ourStory": "Unsere Story",

    "usp.viennaBorn.title": "In Wien Geboren",
    "usp.viennaBorn.desc": "Die Legende besagt, der Bagel wurde hier 1683 erfunden. Wir bringen das Original-Rezept nach Hause.",
    "usp.freshDaily.title": "Täglich Frisch",
    "usp.freshDaily.desc": "Jeden Morgen frisch gebacken. Keine Konservierungsstoffe, nur Mehl, Wasser, Hefe und Salz.",

    "story.label": "Unsere Geschichte",
    "story.title": "Die Reise nach Hause",
    "story.1683.location": "Wien, Österreich",
    "story.1683.title": "Die Erfindung",
    "story.1683.desc": "Die Legende erzählt von einem jüdischen Bäcker in Wien, der ein steigbügelförmiges Brot (Beugel) kreierte, um den König von Polen zu ehren, der die Stadt vor den Osmanen rettete.",
    "story.1880.location": "New York City",
    "story.1880.title": "Die Migration",
    "story.1880.desc": "Osteuropäische Einwanderer bringen ihr geliebtes Brot in die Lower East Side von Manhattan. Das 'Bagel' wird in Amerika geboren.",
    "story.1950.location": "USA",
    "story.1950.title": "Das Goldene Zeitalter",
    "story.1950.desc": "Bagels werden zum amerikanischen Grundnahrungsmittel. Lox und Schmear wird zur ultimativen Brunch-Ikone weltweit.",
    "story.2026.location": "Wien, Österreich",
    "story.2026.title": "Die Heimkehr",
    "story.2026.desc": "Wienerbagel bringt das perfektionierte NYC-Style Bagel an seinen Geburtsort zurück. Der Kreis schließt sich.",

    "menu.label": "Frisch aus dem Ofen",
    "menu.title": "Speisekarte",
    "menu.classic": "Bagel Klassiker",
    "menu.signature": "Signature",
    "menu.sweet": "Bagel Sweet",
    "menu.drinks": "Getränke",
    "menu.empty": "Aktuell keine Artikel in dieser Kategorie verfügbar.",
    "menu.img1.alt": "Speisekarte – Simple Bagels & Frühstück",
    "menu.img2.alt": "Speisekarte – Signatur Bagels",
    "menu.priceNote": "Alle Preise in Euro inkl. MwSt.",

    "menu.lachs.name": "Lachs Bagel",
    "menu.lachs.desc": "Creamcheese, Gurke, Senf oder Siracha Mayonnaise, Kapern",
    "menu.pastrami.name": "Pastrami Bagel",
    "menu.pastrami.desc": "Creamcheese, Pastrami, Bergkäse, Senf oder Siracha Mayonnaise",
    "menu.french.name": "French Bagel",
    "menu.french.desc": "Creamcheese, Brie, Bergkäse, Fruchtchutney",
    "menu.hummus.name": "Hummus Bagel",
    "menu.hummus.desc": "Hummus, Melanzani, Gurke. Vegane Option verfügbar",
    "menu.leberkaese.name": "Leberkäse Bagel",
    "menu.leberkaese.desc": "Leberkäse, Senf, Essiggurken",
    "menu.chicken.name": "Chicken Mayo Bagel",
    "menu.chicken.desc": "Chicken, Mayonnaise, Gurke",
    "menu.sloppy.name": "Sloppy Joe Bagel",
    "menu.sloppy.desc": "Rindfleisch, Sauce, Parmesan",
    "menu.apfel.name": "Apfelstrudel Bagel",
    "menu.apfel.desc": "Warme Apfel-Zimt Füllung, Vanillesauce",
    "menu.nutella.name": "Nutella Bagel",
    "menu.nutella.desc": "Nutella, Banane oder Erdbeeren",

    "visit.label": "Der originale Wienerbagel",
    "visit.title": "Unser Standort",
    "visit.subtitle1": "Unsere Reise begann beim ",
    "visit.subtitleLink": "www.pamartisan.com",
    "visit.subtitle2": ", wo Wienerbagel seine ersten Gäste begeisterte. Jetzt gehen wir den nächsten Schritt: Bald eröffnen wir unsere eigene Wienerbagel-Location im Herzen des 1. Bezirks – und bringen den Bagel zurück an seinen Ursprungsort: Wien.",
    "visit.location": "Standort",
    "visit.comingSoon": "Coming Soon",
    "visit.hours": "Öffnungszeiten",
    "visit.contact": "Kontakt",
    "visit.weekdays": "Täglich: 07:50 - 17:00 Uhr",
    "visit.weekends": "(auch an Wochenenden und Feiertagen)",
    "visit.directions": "Wegbeschreibung",
    "visit.review": "\"Der beste Bagel, den ich außerhalb von Brooklyn gegessen habe. Endlich in Wien!\"",
    "visit.reviewer": "- Anna S., Local Guide",

    "reviews.title": "Was unsere Gäste über PAM sagen",
    "reviews.subtitle": "Besuche uns bei PAM \"Bagel-Breakfast-Micro Roastery\"",
    "reviews.1.text": "„Beste Bagels in Wien! Besonders der Lachs-Bagel ist ein Traum. Man merkt die Qualität der Zutaten.“",
    "reviews.1.author": "Markus W.",
    "reviews.2.text": "„Super gemütliche Atmosphäre und die Bagels sind einfach authentisch New York Style. Der Kaffee ist auch fantastisch.“",
    "reviews.2.author": "Julia H.",
    "reviews.3.text": "„Sehr freundliches Personal und unglaublich leckere Croissants und Bagels. Ein absolutes Muss für Frühstücksfans!“",
    "reviews.3.author": "Thomas B.",

    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.established": "Gegr. 1683 in Wien. Neu-Gegr. 2026."
  },
  en: {
    "nav.home": "Home",
    "nav.story": "Our Story",
    "nav.menu": "Menu",
    "nav.visit": "Visit Us",
    "nav.order": "Order Now",
    "nav.xmas": "X-Mas",

    "xmas.heroBadge": "New: our X-Mas Specials",
    "xmas.label": "Christmas season only",
    "xmas.subtitle": "Two festive bagels that taste like a Viennese Christmas – with duck, red cabbage, brie and lingonberries.",
    "xmas.badge": "X-Mas Special",
    "xmas.bagel1.name": "Duck & Red Cabbage",
    "xmas.bagel1.desc": "Tender duck on spiced red cabbage with pickles and mustard in a crisp toasted bagel.",
    "xmas.bagel2.name": "Duck Sweet",
    "xmas.bagel2.desc": "Tender duck and creamy brie on red cabbage, topped with fruity lingonberries.",
    "xmas.duo.alt": "X-Mas Special by PAM and Wienerbagel – two Christmas bagels",
    "xmas.availability": "Available at PAM – while stocks last.",
    "xmas.cta": "How to find us",
    "xmas.bagel.altSuffix": "X-Mas Special bagel at Wienerbagel in Vienna",
    "xmas.visitors.title": "Christmas in Vienna: breakfast before the Christmas market",
    "xmas.visitors.intro": "Visiting Vienna during Advent? Start your day with a freshly filled bagel and coffee in Neubau before heading to the Spittelberg Christmas market, the MuseumsQuartier or shopping on Mariahilfer Straße.",
    "seo.title": "Wiener Bagel | Bagels, Breakfast & Christmas Special in Vienna",
    "seo.description": "New York style bagels & breakfast in Vienna-Neubau, minutes from the Spittelberg Christmas market. X-Mas Special. Open daily 7:50 am–5 pm, holidays too.",
    "xmas.logos.alt.pam": "PAM logo with Santa hat",
    "xmas.logos.alt.wb": "Wienerbagel logo with Santa hat",

    "bagels.label": "Freshly filled",
    "bagels.title": "Our Bagels",
    "bagels.breakfast": "Breakfast & Simple Bagels",

    "hero.tagline": "From Vienna to NYC & Back",
    "hero.subtitle": "Where the bagel was born in 1683 – and finally returned home.",
    "hero.viewMenu": "View Menu",
    "hero.ourStory": "Our Story",

    "usp.viennaBorn.title": "Vienna Born",
    "usp.viennaBorn.desc": "Legend says the bagel was invented here in 1683. We're bringing the original recipe back home.",
    "usp.freshDaily.title": "Fresh Daily",
    "usp.freshDaily.desc": "Baked fresh every single morning. No preservatives, just flour, water, yeast and salt.",

    "story.label": "Our History",
    "story.title": "The Journey Home",
    "story.1683.location": "Vienna, Austria",
    "story.1683.title": "The Invention",
    "story.1683.desc": "Legend tells of a Jewish baker in Vienna creating a stirrup-shaped bread (Beugel) to thank the King of Poland for saving the city from the Ottomans.",
    "story.1880.location": "New York City",
    "story.1880.title": "The Migration",
    "story.1880.desc": "Eastern European immigrants bring their beloved bread to the Lower East Side of Manhattan. The 'Bagel' is born in America.",
    "story.1950.location": "USA",
    "story.1950.title": "The Golden Age",
    "story.1950.desc": "Bagels become an American staple. Lox and Schmear becomes the ultimate brunch icon worldwide.",
    "story.2026.location": "Vienna, Austria",
    "story.2026.title": "The Homecoming",
    "story.2026.desc": "Wienerbagel brings the perfected NYC-style bagel back to its birthplace. The circle is complete.",

    "menu.label": "Fresh from the Oven",
    "menu.title": "Menu",
    "menu.classic": "Bagel Classics",
    "menu.signature": "Signature",
    "menu.sweet": "Bagel Sweet",
    "menu.drinks": "Drinks",
    "menu.empty": "No items currently available in this category.",
    "menu.img1.alt": "Menu – Simple Bagels & Breakfast",
    "menu.img2.alt": "Menu – Signature Bagels",
    "menu.priceNote": "All prices in Euro incl. VAT.",

    "menu.lachs.name": "Salmon Bagel",
    "menu.lachs.desc": "Cream cheese, cucumber, mustard or sriracha mayonnaise, capers",
    "menu.pastrami.name": "Pastrami Bagel",
    "menu.pastrami.desc": "Cream cheese, pastrami, mountain cheese, mustard or sriracha mayonnaise",
    "menu.french.name": "French Bagel",
    "menu.french.desc": "Cream cheese, brie, mountain cheese, fruit chutney",
    "menu.hummus.name": "Hummus Bagel",
    "menu.hummus.desc": "Hummus, eggplant, cucumber. Vegan option available",
    "menu.leberkaese.name": "Leberkäse Bagel",
    "menu.leberkaese.desc": "Leberkäse (Viennese meatloaf), mustard, pickles",
    "menu.chicken.name": "Chicken Mayo Bagel",
    "menu.chicken.desc": "Chicken, mayonnaise, cucumber",
    "menu.sloppy.name": "Sloppy Joe Bagel",
    "menu.sloppy.desc": "Beef, sauce, parmesan",
    "menu.apfel.name": "Apple Strudel Bagel",
    "menu.apfel.desc": "Warm apple-cinnamon filling, vanilla sauce",
    "menu.nutella.name": "Nutella Bagel",
    "menu.nutella.desc": "Nutella, banana or strawberries",

    "visit.label": "The Original Wienerbagel",
    "visit.title": "Our Location",
    "visit.subtitle1": "Our journey began at ",
    "visit.subtitleLink": "www.pamartisan.com",
    "visit.subtitle2": ", where Wienerbagel delighted its first guests. Now we're taking the next step: Soon we'll open our own Wienerbagel location in the heart of the 1st District – bringing the bagel back to its origin: Vienna.",
    "visit.location": "Location",
    "visit.comingSoon": "Coming Soon",
    "visit.hours": "Opening Hours",
    "visit.contact": "Contact",
    "visit.weekdays": "Daily: 07:50 - 17:00",
    "visit.weekends": "(including weekends and public holidays)",
    "visit.directions": "Get Directions",
    "visit.review": "\"Best Bagel I've had outside of Brooklyn. Finally in Vienna!\"",
    "visit.reviewer": "- Anna S., Local Guide",

    "reviews.title": "What our guests say about PAM",
    "reviews.subtitle": "Visit us at PAM \"Bagel-Breakfast-Micro Roastery\"",
    "reviews.1.text": "\"Best bagels in Vienna! Especially the salmon bagel is a dream. You can really taste the quality of the ingredients.\"",
    "reviews.1.author": "Markus W.",
    "reviews.2.text": "\"Super cozy atmosphere and the bagels are simply authentic New York style. The coffee is also fantastic.\"",
    "reviews.2.author": "Julia H.",
    "reviews.3.text": "\"Very friendly staff and incredibly delicious croissants and bagels. An absolute must for breakfast fans!\"",
    "reviews.3.author": "Thomas B.",

    "footer.rights": "All rights reserved.",
    "footer.established": "Est. 1683 in Wien. Re-Est. 2026."
  }
} as const;

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      // ?lang=en gives the English version its own crawlable, shareable URL.
      const fromUrl = new URLSearchParams(window.location.search).get("lang");
      if (fromUrl === "de" || fromUrl === "en") return fromUrl;
      const saved = localStorage.getItem("wienerbagel-lang");
      if (saved === "de" || saved === "en") return saved;
    }
    return "de";
  });

  useEffect(() => {
    localStorage.setItem("wienerbagel-lang", language);
    document.documentElement.lang = language;

    // Keep title, description and canonical in step with the active language
    // so search engines index the German and the English version separately.
    const title = translations[language]["seo.title"];
    const description = translations[language]["seo.description"];
    const url = language === "en" ? `${SITE_URL}?lang=en` : SITE_URL;
    document.title = title;
    const setAttr = (selector: string, attr: string, value: string) =>
      document.querySelector(selector)?.setAttribute(attr, value);
    setAttr('meta[name="description"]', "content", description);
    setAttr('link[rel="canonical"]', "href", url);
    setAttr('meta[property="og:url"]', "content", url);
    setAttr('meta[property="og:title"]', "content", title);
    setAttr('meta[property="og:description"]', "content", description);
    setAttr('meta[property="twitter:title"]', "content", title);
    setAttr('meta[property="twitter:description"]', "content", description);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
