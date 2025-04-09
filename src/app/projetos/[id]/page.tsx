/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useParams } from "next/navigation";
import { buscarProjetoPorId } from "@/lib/utils/busca";
import { ProjetoLei } from "@/lib/types/projetos";
import {
  TextContent,
  LineText,
  TextSmallTitillium,
  TextSpace,
  TextStrongOswald,
} from "@/ui/components/ComponentesTexto";
import { ItemRender } from "@/ui/cards/CardProjeto";
import { oswald } from "@/ui/fonts";
import { MainLayout } from "@/ui/Layouts/MainLayout";

interface topicoProps {
  titulo: string;
  children?: React.ReactNode;
}

const Titulo: React.FC = () => {
  return (
    <TextContent shadow className="text-7xl">
      <LineText>
        <TextSmallTitillium>Dados</TextSmallTitillium>
        <TextSpace />
        <TextStrongOswald>da Proposta</TextStrongOswald>
      </LineText>
    </TextContent>
  );
};

const page: React.FC = () => {
  const params = useParams();

  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const projeto: ProjetoLei | undefined = buscarProjetoPorId(id) as ProjetoLei;

  return (
    <MainLayout>
      <div
        className={`h-full w-full flex flex-col items-center  gap-[4.5rem] border-[#87D9FF] px-11 py-16 ${oswald.className}`}
      >
        <section>
          <Titulo />
        </section>
        <article className="flex flex-col bg-gradient-to-t from-[#2C52A4]/45 to-[#050B17]/45 h-5/6 w-11/12 min-h-[30rem] py-16 px-[4.5rem] gap-12 border-2 border-[#87D9FF] rounded-[10px]">
          <section className="flex flex-row gap-16">
            <ItemRender
              titulo="Número"
              valor={projeto.numero_pl}
              className="text-4xl"
              cor_texto="text-[#87D9FF]"
            />
            <ItemRender
              titulo="Ano"
              valor={projeto.ano}
              className="text-4xl"
              cor_texto="text-[#87D9FF]"
            />
            <ItemRender
              titulo="Esfera"
              valor={projeto.parlamentares[0].esfera}
              className="text-4xl"
              cor_texto="text-[#87D9FF]"
            />
            <ItemRender
              titulo="Pauta"
              valor={projeto.pauta}
              className="text-4xl"
              cor_texto="text-[#87D9FF]"
            />
          </section>
          <section className="flex flex-row gap-16">
            <ItemRender
              titulo={
                projeto.parlamentares.length > 1 ? "Proponentes" : "Proponente"
              }
              valor={
                projeto.parlamentares.length > 1
                  ? projeto.parlamentares[0].nome
                  : projeto.parlamentares
                      .map((parlamentar) => parlamentar.nome)
                      .join(", ")
              }
              className="text-4xl"
              cor_texto="text-[#87D9FF]"
            />
            <ItemRender
              titulo={projeto.parlamentares.length > 1 ? "Partidos" : "Partido"}
              valor={
                projeto.parlamentares.length > 1
                  ? projeto.parlamentares[0].partido
                  : projeto.parlamentares
                      .map((parlamentar) => parlamentar.partido)
                      .join(", ")
              }
              className="text-4xl"
              cor_texto="text-[#87D9FF]"
            />
          </section>
          <Topico titulo="Ementa">
            {projeto.ementa +
              " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste porro et asperiores, maxime tenetur dicta quis consequuntur error nulla illum ab nisi, aspernatur nesciunt veniam itaque unde sapiente libero voluptate!"}
          </Topico>
          <Topico titulo="Justificativa">{projeto.justificativa}</Topico>
          <Topico
            titulo={
              projeto.violacoes.length > 1
                ? "Direitos Violados"
                : "Direito Violado"
            }
          >
            {projeto.violacoes.map((direito, index) => (
              <p key={index} className="flex flex-col gap-2">
                {direito}
              </p>
            ))}
          </Topico>
          <Topico
            titulo={projeto.ideologia.length > 1 ? "Ideologias" : "Ideologia"}
          >
            {projeto.ideologia.map((ideologia, index) => (
              <p key={index} className="flex flex-col gap-2">
                {ideologia}
              </p>
            ))}
          </Topico>
        </article>
      </div>
    </MainLayout>
  );
};

const Topico: React.FC<topicoProps> = ({ titulo, children }) => {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="text-4xl text-[#87D9FF]">
        {titulo}
        {": "}
      </h3>
      <div className="text-[#CDDBFF] text-3xl text-justify">{children}</div>
    </section>
  );
};

export default page;
