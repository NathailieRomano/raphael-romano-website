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

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-primary">Raphael Romano</h2>
          <div className="space-y-4 text-primary/80">
            <div>
              <p className="font-medium text-primary">Adresse</p>
              <p>Räbacher 4<br />3627 Heimberg</p>
            </div>
            <div>
              <p className="font-medium text-primary">E-Mail</p>
              <a
                href="mailto:info@raphaelromano.ch"
                className="text-accent hover:text-accent-light transition-colors"
              >
                info@raphaelromano.ch
              </a>
            </div>
            <div>
              <p className="font-medium text-primary">Telefon</p>
              <a
                href="tel:+41787140707"
                className="text-accent hover:text-accent-light transition-colors"
              >
                078 714 07 07
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-primary">Nachricht senden</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-primary/20 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50 bg-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-primary/20 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50 bg-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">
                Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full border border-primary/20 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50 bg-white resize-vertical"
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-8 py-3 rounded hover:bg-primary-light transition-colors text-sm uppercase tracking-wide"
            >
              Absenden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
