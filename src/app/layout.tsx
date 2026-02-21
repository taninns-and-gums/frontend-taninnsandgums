import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tannins and Gums - Calidad y Sostenibilidad en Derivados de Tara",
  description:
    "Tannins and Gums es una empresa peruana líder en la producción y exportación de derivados de la tara: Goma, Polvo y Germen. Comprometidos con la calidad premium y la sostenibilidad, ofrecemos productos naturales para diversas industrias a nivel global.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased font-sans">
        <Navbar />
        {/* El padding-top (pt-20) asegura que el contenido no quede oculto tras el menú fijo */}
        {/* <div className="pt-20">{children}</div> */}
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
