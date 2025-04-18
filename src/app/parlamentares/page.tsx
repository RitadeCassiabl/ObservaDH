"use client";

import GraficoBarraMultiplas from "@/ui/graficos/GraficoBarrasMultiplas";
import { projetosMock, partidosMock } from "@/lib/mocks/mock_projetos";
import {
  contarGeneroPorIdeologia,
  contarPropostasPorParlamentar,
  contarReligiaoPorEtnia,
  obterEsferasUnicas,
  obterEstadosUnicos,
  obterGeneroUnico,
  obterIdeologiasUnica,
  obterPartidosUnicos,
  obterProfissoesUnicas,
} from "@/lib/utils/projetoLeiUtils";

import GraficoBarraEmpilhadaVertical from "@/ui/graficos/GraficoBarraEmpilhadaVertical";
import CardLegenda from "@/ui/cards/CardLegenda";

import { legendas } from "@/lib/mocks/mock_parlamentares";
import DropdownButton from "@/ui/dropdown/DropdownButton";
import { Button } from "@/components/ui/button";
import { MdOutlineFilterAlt } from "react-icons/md";

import { MainLayout } from "@/ui/layouts/MainLayout";
import Card from "@/ui/cards";
import Texto from "@/ui/ComponenteTexto";
import { Partido } from "@/lib/types/partido";
import { ProjetoLei } from "@/lib/types/projeto-lei";
import { elemento } from "@/lib/types/elemento-dropdown";

// ô_ô

const page: React.FC = () => {

  
  const partidosOrdenados = [...partidosMock].sort(
    (a, b) => parseInt(b.propostas) - parseInt(a.propostas)
  );
  const esferas = obterEsferasUnicas(projetosMock);
  const estados = obterEstadosUnicos(projetosMock);
  const genero = obterGeneroUnico(projetosMock);
  const partidos = obterPartidosUnicos(projetosMock);
  const ideologias = obterIdeologiasUnica(projetosMock);
  const profissoes = obterProfissoesUnicas(projetosMock);

  const dropdown_items = [
    {
      elementos: esferas,
      titulo: "Esfera",
    },
    {
      elementos: estados,
      titulo: "Estado",
    },
    {
      elementos: genero,
      titulo: "Gênero",
    },
    {
      elementos: partidos,
      titulo: "Partidos",
    },
    {
      elementos: ideologias,
      titulo: "Ideologia",
    },
    {
      elementos: profissoes,
      titulo: "Profissão",
    },
  ];

  //!render
  return (
    <MainLayout>
      <div className="flex h-full w-full flex-col gap-[4.5rem] items-center px-11">
        <RankingParlamentares
          projetos={projetosMock}
          items_filtro={dropdown_items}
        />
        <RankingPartidos partidosOrdenados={partidosOrdenados} />
        <DadosEstatisticos projetos={projetosMock} />
      </div>
    </MainLayout>
  );
};

interface FiltroElementosProps {
  items: {
    elementos: elemento[];
    titulo: string;
  }[];
}

const Filtro = ({ items }: FiltroElementosProps) => {
  return (
    <section className="w-full flex items-center justify-start gap-24">
      <section className="flex gap-12 px-10">
        {items.map((item, index) => (
          <DropdownButton
            key={index}
            elementos={item.elementos}
            titulo={item.titulo}
            className="w-32"
          />
        ))}
      </section>
      <Button className="flex flex-row justify-center border-[#D974FD] text-[#D974FD] bg-transparent border-[1px] rounded-[3px] w-32 h-12 hover:bg-inherit active:text-white active:bg-[#D974FD] transition-colors duration-75">
        Filtrar <MdOutlineFilterAlt />
      </Button>
    </section>
  );
};

interface RankingParlamentaresProps {
  projetos: ProjetoLei[];
  items_filtro: {
    elementos: elemento[];
    titulo: string;
  }[];
}

const RankingParlamentares = ({
  projetos,
  items_filtro,
}: RankingParlamentaresProps) => {
  return (
    <article className="flex flex-col w-full  gap-20">
      <div className="w-full text-shadow-xl text-7xl text-white text-center">
        <Texto.Raiz>
          <Texto.Pequeno.Titillium>Ranking</Texto.Pequeno.Titillium>
          <Texto.Espaco />
          <Texto.Forte.Oswald>dos Parlamentares</Texto.Forte.Oswald>
        </Texto.Raiz>
      </div>
      <Filtro items={items_filtro} />
      <div className="flex flex-col gap-10 justify-center">
        <div className="flex flex-row w-full px-16 h-[4.25rem] bg-[#122144] border border-b-0 border-[#87D9FF] rounded-t-[5px] font-semibold text-2xl text-[#87D9FF]">
          <section className="w-1/2 h-full px-16 grid grid-cols-2 gap-4 items-center">
            <p>{"Deputado(a)"}</p>
            <p>{"Nome"}</p>
          </section>
          <section className="w-1/2 h-full px-12 grid grid-cols-3 gap-4 items-center">
            <p>{"Partido"}</p>
            <p>{"Estado"}</p>
            <p>{"Propostas"}</p>
          </section>
        </div>
        <div
          className="h-[800px] w-full rounded-md flex flex-col items-center gap-10 overflow-auto "
          color="black"
        >
          {projetos.map((item) => {
            return item.parlamentares.map((parlamentar) => (
              <Card.ComponenteParlamentar
                key={`${item.numero_pl}-${parlamentar.nome}`}
                parlamentar={parlamentar}
                propostas={contarPropostasPorParlamentar(
                  projetos,
                  parlamentar.nome
                )}
              />
            ));
          })}
        </div>
      </div>
    </article>
  );
};

interface RankingPartidosProps {
  partidosOrdenados: Partido[];
}

const RankingPartidos = ({ partidosOrdenados }: RankingPartidosProps) => {
  return (
    <article className="flex flex-col w-full  gap-20">
      <div className="w-full text-shadow-xl text-7xl text-white text-center">
        <Texto.Raiz>
          <Texto.Pequeno.Titillium>Ranking</Texto.Pequeno.Titillium>
          <Texto.Espaco />
          <Texto.Forte.Oswald>dos Partidos</Texto.Forte.Oswald>
        </Texto.Raiz>
      </div>
      <div className="flex flex-col gap-10 justify-center">
        <div className="flex flex-row w-full px-16 h-[4.25rem] bg-[#122144] border border-b-0 border-[#87D9FF] rounded-t-[5px] font-semibold text-2xl text-[#87D9FF]">
          <section className="w-1/2 h-full px-16 grid grid-cols-2 gap-4 items-center">
            <p>{"Partido"}</p>
            <p>{"Nome"}</p>
          </section>
          <section className="w-1/2 h-full px-12 grid grid-cols-3 gap-4 items-center">
            <p className="text-center">{"Sigla"}</p>
            <p>{"Parlamentares"}</p>
            <p>{"Propostas"}</p>
          </section>
        </div>
        <div
          className="h-[800px] w-full rounded-md flex flex-col items-center gap-10 overflow-auto "
          color="black"
        >
          {partidosOrdenados.map((item) => {
            return (
              <Card.ComponentePartido
                key={`${item.nome}-${item.sigla}`}
                partido={item}
              />
            );
          })}
        </div>
      </div>
    </article>
  );
};

interface DadosEstatisticosProps {
  projetos: ProjetoLei[];
}

const DadosEstatisticos = ({ projetos }: DadosEstatisticosProps) => {
  return (
    <>
      <article className="flex flex-col justify-center gap-20">
        <Texto.Raiz className="text-7xl text-shadow-xl text-white text-center">
          <Texto.Pequeno.Oswald>Dados Estatísticos</Texto.Pequeno.Oswald>
        </Texto.Raiz>
        <div className="flex flex-col gap-20">
          <section className="flex justify-center gap-20">
            <GraficoBarraMultiplas dados={contarGeneroPorIdeologia(projetos)} />
            <CardLegenda
              texto={legendas[0].texto}
              cor_texto={legendas[0].cor_texto}
              resumo={legendas[0].resumo}
            >
              <Texto.Raiz className="text-5xl w-full">
                <Texto.Linha>
                  <Texto.Forte.Oswald>
                    {"Ideologia Política"}
                  </Texto.Forte.Oswald>
                </Texto.Linha>
                <Texto.Linha>
                  <Texto.Pequeno.Titillium className="text-[#D974FD]">
                    {"x Gênero"}
                  </Texto.Pequeno.Titillium>
                </Texto.Linha>
              </Texto.Raiz>
            </CardLegenda>
          </section>
          <section className="flex justify-center gap-20">
            <CardLegenda
              texto={legendas[1].texto}
              cor_texto={legendas[1].cor_texto}
              resumo={legendas[1].resumo}
            >
              <Texto.Raiz className="text-5xl w-full">
                <Texto.Linha>
                  <Texto.Forte.Oswald>{"Religião"}</Texto.Forte.Oswald>
                </Texto.Linha>
                <Texto.Linha>
                  <Texto.Pequeno.Titillium className="text-[#FF977A]">
                    {"x Raça"}
                  </Texto.Pequeno.Titillium>
                </Texto.Linha>
              </Texto.Raiz>
            </CardLegenda>
            <GraficoBarraEmpilhadaVertical
              dados={contarReligiaoPorEtnia(projetos)}
            />
          </section>
        </div>
      </article>
    </>
  );
};

export default page;
