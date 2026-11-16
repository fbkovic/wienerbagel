// Visitor FAQ shown in the X-Mas section.
// The German entries are mirrored as FAQPage JSON-LD in client/index.html –
// keep both in sync when you change a question or an answer.

export interface FaqEntry {
  q: string;
  a: string;
}

export const xmasFaq: Record<"de" | "en", FaqEntry[]> = {
  de: [
    {
      q: "Wo kann man in Wien vor dem Christkindlmarkt frühstücken?",
      a: "Bei Wienerbagel im PAM in der Kirchengasse 17/2, 1070 Wien-Neubau – wenige Gehminuten vom Weihnachtsmarkt am Spittelberg, vom MuseumsQuartier und von der Mariahilfer Straße.",
    },
    {
      q: "Wann hat Wienerbagel in der Weihnachtszeit geöffnet?",
      a: "Täglich von 07:50 bis 17:00 Uhr – auch an Wochenenden und Feiertagen.",
    },
    {
      q: "Was ist das X-Mas Special?",
      a: "Zwei Bagels, die es nur in der Weihnachtszeit gibt: „Ente & Rotkraut“ mit Essiggurkerl und Senf sowie „Ente Sweet“ mit Brie, Rotkraut und Preiselbeeren.",
    },
    {
      q: "Gibt es vegane und vegetarische Bagels?",
      a: "Ja. Vegan sind zum Beispiel der Veganoush-Bagel und das Vegasti-Frühstück, vegetarisch unter anderem der French-Bagel.",
    },
    {
      q: "Wie komme ich zu Wienerbagel?",
      a: "Mit der U3 bis Neubaugasse, von dort sind es wenige Minuten zu Fuß in die Kirchengasse 17/2.",
    },
  ],
  en: [
    {
      q: "Where can I have breakfast in Vienna before visiting the Christmas markets?",
      a: "At Wienerbagel inside PAM, Kirchengasse 17/2, 1070 Vienna (Neubau) – a few minutes' walk from the Spittelberg Christmas market, the MuseumsQuartier and Mariahilfer Straße.",
    },
    {
      q: "What are the opening hours during the Christmas season?",
      a: "Daily from 7:50 am to 5:00 pm – including weekends and public holidays.",
    },
    {
      q: "What is the X-Mas Special?",
      a: "Two bagels available only during the Christmas season: “Duck & Red Cabbage” with pickles and mustard, and “Duck Sweet” with brie, red cabbage and lingonberries.",
    },
    {
      q: "Do you have vegan and vegetarian bagels?",
      a: "Yes. The Veganoush bagel and the Vegasti breakfast are vegan, and the French bagel is one of the vegetarian options.",
    },
    {
      q: "How do I get to Wienerbagel?",
      a: "Take the U3 underground to Neubaugasse; from there it is a few minutes' walk to Kirchengasse 17/2.",
    },
  ],
};
