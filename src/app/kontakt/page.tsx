import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Raphael Romano – Verkehrstherapie und mehr. Heimberg, Schweiz.",
};

export default function Kontakt() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-primary font-(family-name:--font-serif)">
        Kontakt
      </h1>

      <div className="max-w-lg">
        <p className="text-lg text-primary/80 mb-10">
          Nehmen Sie gerne per E-Mail oder Telefon Kontakt mit mir auf. Ich melde mich so rasch wie möglich bei Ihnen.
        </p>

        <div className="space-y-8">
          <div>
            <p className="font-medium text-primary mb-1">Adresse</p>
            <p className="text-primary/80">
              Raphael Romano<br />
              Räbacher 4<br />
              3627 Heimberg
            </p>
          </div>

          <div>
            <p className="font-medium text-primary mb-1">E-Mail</p>
            <a
              href="mailto:info@raphaelromano.ch"
              className="text-accent hover:text-accent-light transition-colors text-lg"
            >
              info@raphaelromano.ch
            </a>
          </div>

          <div>
            <p className="font-medium text-primary mb-1">Telefon</p>
            <a
              href="tel:+41787140707"
              className="text-accent hover:text-accent-light transition-colors text-lg"
            >
              078 714 07 07
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
