import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biografie",
  description:
    "Über Raphael Romano – Psychotherapeut, Verkehrstherapeut, Notfallpsychologe, Dozent und Autor.",
};

export default function Biografie() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-primary font-(family-name:--font-serif)">
        Wussten Sie …
      </h1>

      <div className="prose prose-lg max-w-none space-y-6 text-primary/80 leading-relaxed">
        <p>
          … dass Raphael Romano aus einer kinderreichen Familie kommt und schon früh
          gelernt hat, sich in einem lebhaften Umfeld zurechtzufinden? Vielleicht erklärt
          das seinen ausgeprägten Sinn für Humor und seine Fähigkeit, auch in schwierigen
          Situationen das Menschliche zu sehen.
        </p>

        <p>
          Als <strong>Psychotherapeut</strong> und <strong>Verkehrstherapeut</strong> begleitet
          er Menschen, die im Strassenverkehr auffällig geworden sind, auf ihrem Weg zurück
          zur Fahreignung. Mit Empathie, Fachwissen und einer guten Portion Pragmatismus.
        </p>

        <p>
          Als <strong>Notfallpsychologe</strong> ist er für Menschen da, wenn es darauf ankommt –
          in Momenten, in denen die Welt aus den Fugen geraten ist.
        </p>

        <p>
          An der <strong>Pädagogischen Hochschule</strong> hat er als Dozent gewirkt und sein
          Wissen an die nächste Generation weitergegeben.
        </p>

        <p>
          Und dann hat er auch noch ein <strong>Buch geschrieben</strong>. «Von Menschen und
          Eseln» – einen Roman, der mit Leichtigkeit und Tiefe zugleich daherkommt und der
          von Jurymitgliedern des Schweizer Buchpreises gelobt wurde.
        </p>

        <p>
          Raphael Romano ist ein Mensch, der viele Hüte trägt. Aber keinen davon nur zum Schein.
        </p>
      </div>
    </section>
  );
}
