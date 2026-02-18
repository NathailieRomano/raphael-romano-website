import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum – raphaelromano.ch",
};

export default function Impressum() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-primary font-(family-name:--font-serif)">
        Impressum
      </h1>

      <div className="prose prose-lg max-w-none space-y-10 text-primary/80">
        <div>
          <h2 className="text-xl font-bold text-primary mb-2">Kontaktadresse</h2>
          <p>
            Raphael Romano<br />
            Räbacher 4<br />
            CH-3627 Heimberg<br />
            <a href="mailto:info@raphaelromano.ch" className="text-accent hover:text-accent-light transition-colors">
              info@raphaelromano.ch
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-primary mb-2">Design</h2>
          <p>Nathanael Romano</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-primary mb-2">Haftungsausschluss</h2>
          <p>
            Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit,
            Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
          </p>
          <p>
            Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art,
            welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten
            Informationen, durch Missbrauch der Verbindung oder durch technische Störungen
            entstanden sind, werden ausgeschlossen.
          </p>
          <p>
            Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile
            der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu
            ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-primary mb-2">Haftung für Links</h2>
          <p>
            Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres
            Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten
            abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene
            Gefahr des Nutzers oder der Nutzerin.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-primary mb-2">Urheberrechte</h2>
          <p>
            Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen
            Dateien auf der Website gehören ausschliesslich Nathanael Romano oder den speziell
            genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die
            schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-primary mb-2">Datenschutz</h2>
          <p>
            Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die
            datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede
            Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch
            ihrer persönlichen Daten. Wir halten diese Bestimmungen ein. Persönliche Daten
            werden streng vertraulich behandelt und weder an Dritte verkauft noch weiter gegeben.
          </p>
          <p>
            In enger Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die
            Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch oder
            vor Fälschung zu schützen.
          </p>
          <p>
            Beim Zugriff auf unsere Webseiten werden folgende Daten in Logfiles gespeichert:
            IP-Adresse, Datum, Uhrzeit, Browser-Anfrage und allg. übertragene Informationen
            zum Betriebssystem resp. Browser. Diese Nutzungsdaten bilden die Basis für
            statistische, anonyme Auswertungen, so dass Trends erkennbar sind, anhand derer
            wir unsere Angebote entsprechend verbessern können.
          </p>
        </div>
      </div>
    </section>
  );
}
