import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Tiles */}
      <section className="grid md:grid-cols-2 min-h-[70vh]">
        {/* Verkehrstherapie Tile */}
        <Link href="/verkehrstherapie" className="relative group overflow-hidden min-h-[50vh] md:min-h-[70vh]">
          <Image
            src="/images/hero-therapie-bergpass.png"
            alt="Verkehrstherapie"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-(family-name:--font-serif)">
              Verkehrstherapie
            </h2>
            <p className="text-lg mb-6 max-w-md opacity-90">
              Professionelle Begleitung zurück auf den richtigen Weg
            </p>
            <span className="border-2 border-white px-6 py-2 text-sm uppercase tracking-widest group-hover:bg-white group-hover:text-primary transition-colors">
              Mehr erfahren
            </span>
          </div>
        </Link>

        {/* Buch Tile */}
        <Link href="/buch" className="relative group overflow-hidden min-h-[50vh] md:min-h-[70vh] bg-warm-dark">
          <Image
            src="/images/buch-esel.png"
            alt="Von Menschen und Eseln – Buchcover"
            fill
            className="object-contain p-12 transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/40 transition-colors" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-(family-name:--font-serif)">
              Von Menschen und Eseln
            </h2>
            <p className="text-lg mb-6 max-w-md opacity-90">
              Der Roman von Raphael Romano
            </p>
            <span className="border-2 border-white px-6 py-2 text-sm uppercase tracking-widest group-hover:bg-white group-hover:text-primary transition-colors">
              Mehr erfahren
            </span>
          </div>
        </Link>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 font-(family-name:--font-serif) text-primary">
          Raphael Romano
        </h1>
        <p className="text-lg leading-relaxed text-primary/80 max-w-2xl mx-auto">
          Psychotherapeut, Verkehrstherapeut, Notfallpsychologe und Autor.
          Willkommen auf meiner persönlichen Webseite – hier finden Sie
          Informationen zu meiner therapeutischen Arbeit und meinem literarischen Schaffen.
        </p>
      </section>
    </>
  );
}
