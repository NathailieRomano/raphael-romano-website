import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Raphael Romano – Verkehrstherapie & Autor",
    template: "%s | Raphael Romano",
  },
  description:
    "Raphael Romano – Verkehrstherapeut, Psychotherapeut und Autor von «Von Menschen und Eseln». Verkehrstherapie in Heimberg, Schweiz.",
  metadataBase: new URL("https://raphaelromano.ch"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Raphael Romano",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
