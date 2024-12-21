import type { Metadata } from "next";
import "./globals.css";
import {Titillium_Web} from "next/font/google"
import NavBar from "./ui/NavBar";

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
      <body className="h-screen w-screen bg-layout-principal antialiased p-8 flex justify-center">
        <NavBar />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
