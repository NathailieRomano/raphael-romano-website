import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Von Menschen und Eseln",
  description:
    "«Von Menschen und Eseln» – der Roman von Raphael Romano. Nominiert für den Schweizer Buchpreis.",
};

const zitate = [
  {
    text: "Diese zutiefst menschliche Geschichte über das Leben und die Liebe, die in einer leichtfüssigen und pointierten Sprache daherkommt. So unterhaltsam und klug, dass man einmal begonnen, das Buch nicht mehr aus der Hand legen kann.",
    author: "Annette König",
    role: "Literaturredaktion SRF, Mitglied der Jury «Schweizer Buchpreis 2020»",
  },
  {
    text: "Wenn man denkt, man hat schon alles gelesen … und dann den neuen Roman von Raphael Romano in den Händen hält, dann merkt man, es gibt sie noch, die absolut unerwarteten Entdeckungen zwischen Buchdeckeln.",
    author: "Manuela Hofstätter",
    role: "Mitglied der Jury «Schweizer Buchpreis 2019»",
  },
  {
    text: "In dieses Buch, dieses schöne, habe ich mich verliebt!",
    author: "Kulturredaktion ORF",
    role: "",
  },
];

export default function Buch() {
  return (
    <>
      {/* Hero */}
      <section className="bg-warm py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] max-w-sm mx-auto md:mx-0">
            <Image
              src="/images/buch-esel.png"
              alt="Von Menschen und Eseln – Buchcover"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary font-(family-name:--font-serif)">
              Von Menschen und Eseln
            </h1>
            <p className="text-xl text-accent mb-6 font-(family-name:--font-serif) italic">
              Ein Roman von Raphael Romano
            </p>
            <p className="text-lg leading-relaxed text-primary/80">
              Eine zutiefst menschliche Geschichte über das Leben und die Liebe,
              erzählt mit Leichtigkeit, Humor und einer unerwarteten Tiefe.
            </p>
          </div>
        </div>
      </section>

      {/* Zitate */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-10 text-center text-primary font-(family-name:--font-serif)">
          Stimmen zum Buch
        </h2>
        <div className="space-y-8">
          {zitate.map((zitat, i) => (
            <blockquote
              key={i}
              className="border-l-4 border-accent pl-6 py-2"
            >
              <p className="text-lg italic leading-relaxed mb-3 text-primary/80">
                «{zitat.text}»
              </p>
              <footer className="text-sm text-accent">
                <strong>{zitat.author}</strong>
                {zitat.role && <span className="text-primary/50"> — {zitat.role}</span>}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}
