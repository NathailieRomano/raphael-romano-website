import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/80 py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-bold text-white mb-2">Raphael Romano</h3>
          <p>Räbacher 4<br />3627 Heimberg</p>
        </div>
        <div>
          <h3 className="font-bold text-white mb-2">Kontakt</h3>
          <p>
            <a href="mailto:info@raphaelromano.ch" className="hover:text-white transition-colors">
              info@raphaelromano.ch
            </a>
            <br />
            <a href="tel:+41787140707" className="hover:text-white transition-colors">
              078 714 07 07
            </a>
          </p>
        </div>
        <div>
          <h3 className="font-bold text-white mb-2">Navigation</h3>
          <div className="flex flex-col gap-1">
            <Link href="/verkehrstherapie" className="hover:text-white transition-colors">Verkehrstherapie</Link>
            <Link href="/buch" className="hover:text-white transition-colors">Buch</Link>
            <Link href="/biografie" className="hover:text-white transition-colors">Biografie</Link>
            <Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-8 pt-6 border-t border-white/20 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Raphael Romano. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
