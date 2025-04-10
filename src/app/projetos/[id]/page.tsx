"use client";

import { useParams } from "next/navigation";
import { buscarProjetoPorId } from "@/lib/utils/busca";
import { ProjetoLei } from "@/lib/types/projetos";

import { oswald } from "@/ui/fonts";
import { MainLayout } from "@/ui/layouts/MainLayout";

import Card from "@/ui/cards";
import Texto from "@/ui/ComponenteTexto";

interface TopicoProps {
  titulo: string;
  children?: React.ReactNode;
}

const Titulo = () => (
  <Texto.Raiz shadow className="text-7xl">
    <Texto.Linha>
      <Texto.Pequeno.Titillium>Dados</Texto.Pequeno.Titillium>
      <Texto.Espaco />
      <Texto.Forte.Oswald>da Proposta</Texto.Forte.Oswald>
    </Texto.Linha>
  </Texto.Raiz>
);

const Topico: React.FC<TopicoProps> = ({ titulo, children }) => (
  <section className="flex flex-col gap-4">
    <h3 className="text-4xl text-[#87D9FF]">{titulo}:</h3>
    <div className="text-[#CDDBFF] text-3xl text-justify">{children}</div>
  </section>
);

const Page = () => {
  const { id } = useParams();
  const projeto = buscarProjetoPorId(
    Array.isArray(id) ? id[0] : id
  ) as ProjetoLei;

  const parlamentarNomes = projeto.parlamentares.map((p) => p.nome).join(", ");
  const partidos = projeto.parlamentares.map((p) => p.partido).join(", ");
  const esfera = projeto.parlamentares[0].esfera;

  const infos = [
    { titulo: "Número", valor: projeto.numero_pl },
    { titulo: "Ano", valor: projeto.ano },
    { titulo: "Esfera", valor: esfera },
    { titulo: "Pauta", valor: projeto.pauta },
    {
      titulo: projeto.parlamentares.length > 1 ? "Proponentes" : "Proponente",
      valor: parlamentarNomes,
    },
    {
      titulo: projeto.parlamentares.length > 1 ? "Partidos" : "Partido",
      valor: partidos,
    },
  ];

  return (
    <MainLayout>
      <div
        className={`h-full w-full flex flex-col items-center gap-[4.5rem] border-[#87D9FF] px-11 py-16 ${oswald.className}`}
      >
        <section>
          <Titulo />
        </section>

        <article className="flex flex-col bg-gradient-to-t from-[#2C52A4]/45 to-[#050B17]/45 w-11/12 min-h-[30rem] py-16 px-[4.5rem] gap-12 border-2 border-[#87D9FF] rounded-[10px]">
          <section className="flex flex-row gap-16 flex-wrap">
            {infos.map((info, index) => (
              <Card.RenderizacaoItem
                key={index}
                titulo={info.titulo}
                valor={info.valor}
                className="text-4xl"
                cor_texto="text-[#87D9FF]"
              />
            ))}
          </section>

          <Topico titulo="Ementa">{projeto.ementa}</Topico>

          <Topico titulo="Justificativa">{projeto.justificativa}</Topico>

          <Topico
            titulo={
              projeto.violacoes.length > 1
                ? "Direitos Violados"
                : "Direito Violado"
            }
          >
            {projeto.violacoes.map((v, i) => (
              <p key={i}>{v}</p>
            ))}
          </Topico>

          <Topico
            titulo={projeto.ideologia.length > 1 ? "Ideologias" : "Ideologia"}
          >
            {projeto.ideologia.map((i, j) => (
              <p key={j}>{i}</p>
            ))}
          </Topico>
        </article>
      </div>
    </MainLayout>
  );
};

export default Page;
