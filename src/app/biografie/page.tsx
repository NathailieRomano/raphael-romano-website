import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Biografie",
  description:
    "Über Raphael Romano – Psychotherapeut, Verkehrstherapeut, Notfallpsychologe, Dozent und Autor.",
};

const facts = [
  "Dass ich aus einer kinderreichen Familie stamme?",
  "Dass ich am Tisch, mit so vielen Kindern, immer Angst haben musste, dass die Salatschüssel, wenn sie endlich bei mir angelangt, leer ist?",
  "Dass ich wegen der Züglerei meiner Eltern vier verschiedene kantonale Schulsysteme, Lehrmittel und Dialekte über mich ergehen lassen musste?",
  "Dass wir am Mittagstisch immer dem lieben Gott gedankt haben und bei der Stelle des Gebetes \u201EHerr, lass uns bei dem Essen, deiner Liebe nicht vergessen\u201C immer verstanden habe, dass uns der Herr jetzt für einen Moment in Ruhe lassen soll? (Eben, Herr lass uns\u2026)",
  "Dass ich ein Lehrerseminar besucht habe mit einem Internatsbetrieb, der jede Rekrutenschule zum Wohlfühllager gemacht hätte?",
  "Dass ich keinen Militärdienst geleistet habe, weil ich mir ungern vorschreiben lasse, wann ich liegen, laden und schiessen soll?",
  "Dass ich Psychologie studiert habe und nachher vor allem wusste, wie man Statistiken fälscht?",
  "Dass ich keinen Alkohol trinke und noch heute von einigen Eseln als Kostverächter, Banause und Weichei bezeichnet werde?",
  "Dass ich geheiratet habe und zwei wunderbare Kinder habe? Das behaupten übrigens 99,9% der Eltern \u2013 aber woher kommen dann all die Kriminellen?",
  "Dass ich in meinem Leben vielen Menschen, aber auch einigen Eseln begegnet bin?",
  "Dass ich als Notfallpsychologe tätig bin? (\u201EWow, das ist sicher hart\u201C, meinen die andern.)",
  "Dass ich an der Pädagogischen Hochschule vor allem am Montagmorgen \u201Ehochmotivierten Studis\u201C Kommunikation, Entwicklungspsychologie und Persönlichkeitsbildung dozierte?",
  "Dass ich unser Schulsystem als hoffnungslos überholt wahrnehme?",
  "Dass ich x-mal am Knie operiert wurde, weil Spieler der gegnerischen Fussballmannschaft das Spiel nicht selten mit einer Vollkontaktsportart verwechselt haben und ich deshalb heute nur noch Sportarten betreibe, bei welchen ein Netz zwischen mir und meinem Gegner steht?",
  "Dass ich bis heute als Psychotherapeut und Ausbildner in der Notfallpsychologie für Careteams, Polizei, Feuerwehr usw. tätig bin. (\u201EWow, das ist sicher hart\u201C, meinen die andern.)",
  "Dass ich zudem als Verkehrstherapeut arbeite und versuche die Delinquenten auf den rechten Weg bzw. Strasse zu bringen?",
];

export default function Biografie() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      {/* Header with portrait */}
      <div className="flex flex-col md:flex-row gap-10 items-start mb-14">
        <div className="relative w-48 h-64 md:w-56 md:h-72 shrink-0 rounded-lg overflow-hidden shadow-lg mx-auto md:mx-0">
          <Image
            src="/images/raphael-portrait.jpg"
            alt="Raphael Romano"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary font-(family-name:--font-serif)">
            Wussten Sie …
          </h1>
          <p className="text-lg text-primary/60 italic">
            Ein paar Dinge über mich, die Sie vielleicht noch nicht wussten.
          </p>
        </div>
      </div>

      {/* Facts list */}
      <div className="space-y-5">
        {facts.map((fact, i) => (
          <div key={i} className="flex items-start gap-4">
            <span className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0" />
            <p className="text-lg leading-relaxed text-primary/80">{fact}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
