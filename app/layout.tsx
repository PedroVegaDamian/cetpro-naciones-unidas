import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s - CETPRO Naciones Unidas",
    default: "CETPRO Naciones Unidas",
  },
  description: "Página web de CETPRO Naciones Unidas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <div className="px-4">
          <main className="max-w-[1140px] mx-auto  min-h-[calc(100vh-292px)]">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
