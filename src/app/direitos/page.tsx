import {
  graficoBarrasVerticalDadosMock,
  graficoRosquinhaDadosMock,
} from "@/mocks/mock-direitos";
import { legendas } from "@/mocks/mock-parlamentares";
import { projetosMock } from "@/mocks/mock-projetos";

import { obterPautasUnicas } from "@/lib/utils/projeto-projeto-utils";

import { CarrosselPlsProps } from "@/domain/interfaces/carrossel-interface";
import { elemento } from "@/domain/interfaces/elemento-dropdown";
import { DadosGraficoBarrasVertical } from "@/domain/graficos/barras-vertical";
import { DadosGraficoRosquinha } from "@/domain/graficos/rosquinha";

import Card from "@/components/ui/cards";
import Texto from "@/components/ui/componente-texto";
import DropdownButton from "@/components/ui/dropdown/dropdown-button";
import GraficoBarrasVertical from "@/components/ui/graficos/barras-vertical";

import MainLayout from "@/components/ui/layouts/main-layout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui-shacnui/carousel";
import Titulo from "@/components/ui/titulo-pages";
import GraficoRosquinha from "@/components/ui/graficos/Rosquinha";

const direitos: React.FC = () => {
  const elementos_dropdown = obterPautasUnicas(projetosMock);

  //render
  return (
    <MainLayout>
      <div className="flex flex-col h-full w-full gap-24 px-11 justify-center items-center">
        <Titulo
          pequeno={"Violações e Ideologias"}
          grande={"dos Projetos de Lei"}
        />
        <DadosEstatisticos
          dados_grafico_vertical={graficoBarrasVerticalDadosMock}
          dados_rosquinha={graficoRosquinhaDadosMock}
          elementos_dropdown={elementos_dropdown}
        />
        <Carrossel projetos={projetosMock} />
      </div>
    </MainLayout>
  );
};

interface DadosEstastisticosProps {
  elementos_dropdown: elemento[];
  dados_rosquinha: DadosGraficoRosquinha[];
  dados_grafico_vertical: DadosGraficoBarrasVertical[];
}

const DadosEstatisticos = ({
  elementos_dropdown,
  dados_rosquinha,
  dados_grafico_vertical,
}: DadosEstastisticosProps) => {
  return (
    <>
      <section className="w-full flex flex-col justify-center">
        <div className="w-full">
          <DropdownButton
            className="w-32"
            titulo="Pauta"
            elementos={elementos_dropdown}
          />
        </div>
        <div className="flex flex-row w-full items-center justify-center gap-20">
          <GraficoRosquinha dados={dados_rosquinha} />
          <Card.Legenda
            cor_texto="text-[#D974FD]"
            resumo={legendas[0].resumo}
            texto={legendas[0].texto}
          >
            <Titulo pequeno={"Projetos de"} grande={"Lei"} />
          </Card.Legenda>
        </div>
        <div />
      </section>
      <section className="w-full flex flex-row gap-[4.5rem] justify-center ">
        <Card.Legenda
          cor_texto="text-[#FDFF78]"
          resumo={legendas[0].resumo}
          texto={legendas[0].texto}
        >
          <Texto.Raiz shadow className="text-5xl">
            <Texto.Linha>
              <Texto.Forte.Oswald>Ideologia dos</Texto.Forte.Oswald>
            </Texto.Linha>
            <Texto.Linha className="text-[#FDFF78]">
              <Texto.Pequeno.Titillium>Projetos de Lei</Texto.Pequeno.Titillium>
            </Texto.Linha>
          </Texto.Raiz>
        </Card.Legenda>
        <GraficoBarrasVertical dados={dados_grafico_vertical} />
      </section>
    </>
  );
};

const Carrossel = ({ projetos }: CarrosselPlsProps) => {
  return (
    <section className="flex flex-col gap-14 justify-center text-center">
      <Texto.Raiz className="text-6xl" shadow>
        <Texto.Pequeno.Titillium>Projetos</Texto.Pequeno.Titillium>
        <Texto.Espaco />
        <Texto.Forte.Oswald className="text-[#87D9FF]">
          de Lei
        </Texto.Forte.Oswald>
      </Texto.Raiz>
      <section>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[82rem]"
        >
          <CarouselContent className="">
            {projetos.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 flex justify-center"
              >
                <Card.Projeto projeto={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </section>
  );
};

export default direitos;
