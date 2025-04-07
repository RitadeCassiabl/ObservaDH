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
      <body>
     {children}
      </body>
    </html>
  );
}