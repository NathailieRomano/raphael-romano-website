import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Verkehrstherapie",
  description:
    "Verkehrstherapie bei Raphael Romano – umfassende Förderung der Fahreignung, vor Ort oder online. Heimberg, Schweiz.",
};

const themen = [
  "Informationsvermittlung, Informationsdefizit beheben",
  "Detaillierte Analyse der jeweiligen Delikte",
  "Erarbeitung einer realistischen und selbstkritischen Einstellung zum eigenen Verhalten im Strassenverkehr",
  "Bearbeitung und Veränderung des Konsum- bzw. Fahrverhaltens (bei Drogen- oder Alkoholauffälligkeiten)",
  "Klärung des Zusammenhanges von Auffälligkeiten und persönlicher Lebenssituation sowie problematischer Wahrnehmungs-, Bewertungs- und Verhaltensmuster",
  "Klärung des Ausmasses der Problematik und der Frage, inwieweit diese das Verkehrsverhalten direkt oder indirekt beeinflusst hat",
  "Aufbau realistischer Wahrnehmungs-, Bewertungs- und Verhaltensmuster",
  "Besprechen von rückfallrelevanten Situationen",
  "Präzisierung von Handlungsabsichten, klares Festlegen von Verhaltenszielen für die Zukunft",
];

export default function Verkehrstherapie() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px]">
        <Image
          src="/images/hero-therapie.jpeg"
          alt="Verkehrstherapie"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-(family-name:--font-serif)">
            Verkehrstherapie
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-8">
            In meiner Praxis biete ich Verkehrstherapie-Sitzungen an – vor Ort oder auch online.
            Ziel einer solchen Therapie ist eine umfassende Förderung der Fahreignung,
            um zukünftige Verkehrsverstösse zu verhindern.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-primary font-(family-name:--font-serif)">
            Ablauf
          </h2>
          <p className="leading-relaxed mb-8">
            Nach der ersten telefonischen oder schriftlichen Kontaktaufnahme wird ein Termin
            für ein erstes Beratungsgespräch vereinbart. Das Gespräch dient dazu, einen Überblick
            über die jeweilige Situation des Klienten zu erhalten. Zum anderen dient das Gespräch
            dazu, Ansatzpunkte für die Therapie zu überlegen und dem Klienten einen Einblick in
            die gemeinsame, bevorstehende Arbeit zu ermöglichen.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-primary font-(family-name:--font-serif)">
            Therapie-Themen
          </h2>
          <ul className="space-y-3">
            {themen.map((thema, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                <span>{thema}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-warm rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold mb-3 text-primary">Interesse an einer Verkehrstherapie?</h3>
          <p className="mb-6 text-primary/70">
            Kontaktieren Sie mich für ein unverbindliches Erstgespräch.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-primary text-white px-8 py-3 rounded hover:bg-primary-light transition-colors text-sm uppercase tracking-wide"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
