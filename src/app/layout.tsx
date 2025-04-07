import type { Metadata } from "next";
import "./globals.css";
import { titillium_web } from "@/ui/fonts";

export const metadata: Metadata = {
    title: "ObservaDH",
    description: "Observatório de Projetos de Lei voltados aos Direitos LGBTI+.",
};  

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br" className={titillium_web.className}>
      <body className="bg-layout-principal antialiased no-scrollbar flex flex-col">
        <header className="h-[34rem] w-full">
          <NavBar />
        </header>
        <main className="h-full w-full bg-grid">
          <div className="h-full w-full my-10">
            {children}
          </div>
        </main>
        <footer className="h-[18.625rem] w-full">
          <FooterBar />
        </footer>
      </body>
    </html>
  );
}