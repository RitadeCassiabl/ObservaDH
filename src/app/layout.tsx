import type { Metadata } from "next";
import "./globals.css";
import {Titillium_Web} from "next/font/google"
import NavBar from "../ui/components/NavBar";
import FooterBar from "../ui/components/FooterBar";

const titillium_web =  Titillium_Web({weight: ["400", "700"], subsets: ["latin"]})


export const metadata: Metadata = {
    title: "ObservaDH",
    description: "Observatório de Projetos de Lei voltados aos Direitos LGBTI+.",
};  

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br" className={titillium_web.className}>
      <body className="bg-layout-principal antialiased no-scrollbar">
        <header className="h-[34rem] w-full">
          <NavBar />
        </header>
        <main className="h-full w-full bg-grid">
          <div className="h-full w-full px-11 py-16">
            {children}
          </div>
        </main>
        <footer className="h-72 w-full">
          <FooterBar />
        </footer>
      </body>
    </html>
  );
}

