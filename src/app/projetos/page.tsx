import { apresentacao, legendas, projetosMock } from "../../lib/mock/mock_projetos";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { LineChartDots } from "@/ui/graficos/LineChartDots";

import Legenda from "@/ui/Legenda";
import DropdownButton from "@/ui/dropdown/DropdownButton";
import CardGraficoMapa from "@/ui/graficos/MapaGrafico";
import CardProjetos from "@/ui/cards/CardProjetos";
import CardApresentacao from "@/ui/cards/CardApresentacao";
import {
  pegarAno,
  obterAnos,
  obterEstados,
  obterPautas,
  pegarPautas
} from "@/lib/hooks/calcularProjetos";

import { Titillium_Web, Oswald } from "next/font/google";
import { Button } from "@/components/ui/button";
import { MdOutlineFilterAlt } from "react-icons/md";
import BarChartStacked from "@/ui/graficos/BarChartStacked";
import {
  TextContent,
  LineText,
  TextStrongOswald,
  TextSpace,
  TextSmallTitillium
} from "@/ui/TextoDiferente";

const oswald = Oswald({ weight: ["400", "700"], subsets: ["latin"] });

const titillium_web = Titillium_Web({
  weight: ["400", "700"],
  subsets: ["latin"]
});

const esferas = [
  {
    titulo: "Federal",
    value: "federal"
  },
  {
    titulo: "Estadual",
    value: "estadual"
  }
];

const anos = obterAnos(projetosMock);

const estados = obterEstados(projetosMock);

const pautas = obterPautas(projetosMock);

const projetos: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col gap-[4.25rem]  items-center">
      <section>
        <CardApresentacao
          subtitulo={apresentacao.subtitulo}
          titulo={apresentacao.titulo}
          cor={apresentacao.cor}
        >
          {apresentacao.texto}
        </CardApresentacao>
      </section>
      <article className="flex flex-col items-center w-full  gap-20 bg-">
        <section className="w-[80rem] h-full">
          <CardGraficoMapa />
        </section>
        <span className="border-b-[1.5px] shadow-bottom shadow-[#AFC4F9] w-full" />
        {/* FILTROS */}
        <section className="text-7xl text-white text-shadow-xl">
          <span className={`${titillium_web.className} font-light`}>
            Propostas{" "}
          </span>
          <span className={`${oswald.className} font-normal`}>
            e Dados Estatísticos
          </span>
        </section>
        {/* FILTROS - DROPDOWN*/}
        <section className="w-full flex items-center justify-start gap-24">
          <section className="flex gap-12 px-10">
            <DropdownButton
              elementos={esferas}
              titulo="Esfera"
              className="w-32"
            />
            <DropdownButton elementos={anos} titulo="Ano" className="w-32" />
            <DropdownButton
              elementos={estados}
              titulo="Estado"
              className="w-32 text-center"
            />
            <DropdownButton
              elementos={pautas}
              titulo="Pauta"
              className="w-32"
            />
          </section>
          <Button className="flex flex-row justify-center border-[#D974FD] text-[#D974FD] bg-transparent border-[1px] rounded-[3px] w-32 h-12 hover:bg-inherit active:text-white active:bg-[#D974FD] transition-colors duration-75">
            Filtrar <MdOutlineFilterAlt />
          </Button>
        </section>
        {/* CARROSSEL DE PL's */}
        <section>
          <Carousel
            opts={{
              align: "start"
            }}
            className="w-[82rem]"
          >
            <CarouselContent className="">
              {projetosMock.map((item, index) =>
                <CarouselItem
                  key={index}
                  className="basis-1/2 flex justify-center"
                >
                  <CardProjetos projeto={item} />
                </CarouselItem>
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
        <section className="w-full flex justify-center gap-[4.5rem]">
          <Legenda
            color={legendas.find((item) => item.titulo === "PL's")?.cor}
            texto={legendas.find((item) => item.titulo === "PL's")?.texto}
            resumo={legendas.find((item) => item.titulo === "PL's")?.resumo}
            >
            <TextContent className="text-6xl">
              <LineText>
                <TextStrongOswald>
                  {"Número"}
                </TextStrongOswald>
                <TextSpace />
                <TextSmallTitillium>
                  {"de"}
                </TextSmallTitillium>
              </LineText>
              <LineText className="text-[#93F996]">
                <TextSmallTitillium>
                  {"PL's"}
                </TextSmallTitillium>
                <TextSpace />
                <TextStrongOswald>
                  {"por ano"}
                </TextStrongOswald>
              </LineText>
            </TextContent>
          </Legenda>
          <LineChartDots data={pegarAno(projetosMock)} />
        </section>
        <section className="w-full flex justify-center gap-[4.5rem]">
          <BarChartStacked data={pegarPautas(projetosMock)} />
          <Legenda 
          color={legendas.find((item) => item.titulo === "Pautas")?.cor} 
          texto={legendas.find((item) => item.titulo === "Pautas")?.texto} 
          resumo={legendas.find((item) => item.titulo === "Pautas")?.resumo}
            >
            <div>
              <TextContent className="text-6xl w-[374px]">
                <LineText className="w-full">
                  <TextStrongOswald>
                    {"Número"}
                  </TextStrongOswald>
                  <TextSpace />
                  <TextSmallTitillium>
                    {"de"}
                  </TextSmallTitillium>
                </LineText>
                <LineText className="text-[#F693F9]">
                  <TextSmallTitillium>
                    {"Pautas"}
                  </TextSmallTitillium>
                  <TextSpace />
                  <TextStrongOswald>
                    {"por ano"}
                  </TextStrongOswald>
                </LineText>
              </TextContent>
            </div>
          </Legenda>
        </section>
      </article>
    </div>
  );
};
export default projetos;
