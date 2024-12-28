import { Card } from "@/components/ui/card";
import { ProjetoLei } from "@/lib/types/projetos";
import { Titillium_Web, Oswald } from "next/font/google";
import React from "react";

const oswald = Oswald({ weight: ["400", "700"], subsets: ["latin"] });

const titillium_web = Titillium_Web({
  weight: ["400", "700"],
  subsets: ["latin"]
});

interface CardProjetosProps {
  projeto: ProjetoLei;
}

const CardProjetos: React.FC<CardProjetosProps> = ({ projeto }) => {
  return (
    <Card className="bg-[#1A326E] h-[27.625rem] w-[38.125rem] border-[#AFC4F9] border-2 rounded-[10px] px-8 py-12 flex flex-col gap-4">
      {/* ANO - Nª PL */}
      <section className="flex gap-6">
        <RenderText conteudo={projeto.ano} titulo="Ano" />
        <RenderText conteudo={projeto.numero_pl} titulo="Número do PL" />
      </section>
      {/* PAUTA - ESTADO */}
      <section className="flex gap-6">
        <RenderText conteudo={projeto.pauta} titulo="Pauta" />
        <h3 className="text-white flex flex-row items-center gap-4">
          <span
            className={`${oswald.className} font-normal text-3xl text-[#AFC4F9]`}
          >
            {projeto.parlamentares.length > 1 ? "Estados:" : "Estado:"}
          </span>
          {projeto.parlamentares.map((parlamentar, index) =>
            <span
              key={index}
              className={`${titillium_web.className} font-normal text-xl text-white`}
            >
              {parlamentar.estado}
            </span>
          )}
        </h3>
      </section>
      {/* PARLAMENTAR  */}
      <section>
        <h3 className="flex flex-row items-center gap-4">
          <span
            className={`${oswald.className} font-normal text-3xl text-[#AFC4F9]`}
          >
            {projeto.parlamentares.length > 1
              ? "Parlamentares:"
              : "Parlamentar:"}
          </span>
          {projeto.parlamentares.map((parlamentar, index) =>
            <span
              key={index}
              className={`${titillium_web.className} font-normal text-xl text-white`}
            >
              {parlamentar.nome} - {parlamentar.partido}
            </span>
          )}
        </h3>
      </section>
      {/* EMENTA  */}
      <section>
        <p className={`flex flex-col gap-4 items-start`}>
          <span
            className={`${oswald.className} font-normal text-3xl text-[#AFC4F9]`}
          >
            Ementa:
          </span>
          <p
            className={`${titillium_web.className} font-normal text-xl text-white`}
          >
            {projeto.ementa}
          </p>
        </p>
      </section>
    </Card>
  );
};

interface RenderTextProps {
  titulo: string;
  conteudo: string;
  className?: string;
}

const RenderText: React.FC<RenderTextProps> = ({
  titulo,
  conteudo,
  className
}) => {
  return (
    <h3 className={`flex flex-row items-center gap-4 ${className}`}>
      <span
        className={`${oswald.className} font-normal text-3xl text-[#AFC4F9]`}
      >
        {titulo}:
      </span>
      <span
        className={`${titillium_web.className} font-normal text-xl text-white`}
      >
        {conteudo}
      </span>
    </h3>
  );
};

export default CardProjetos;
