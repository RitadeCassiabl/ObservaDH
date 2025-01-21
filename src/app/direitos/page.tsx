//!MOCKs
import { projetosMock } from "@/lib/mock/mock_projetos";
import { legendas } from "@/lib/mock/mock_parlamentares";

//!componentes
import { obterPautasUnicas } from "@/lib/utils/projetoLeiUtils";
import {
  TextContent,
  TextSmallTitillium,
  TextSpace,
  TextStrongOswald,
  LineText
} from "@/ui/components/ComponentesTexto";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import CardLegenda from "@/ui/cards/CardLegenda";
import DropdownButton from "@/ui/dropdown/DropdownButton";
import GraficoRosquinha from "@/ui/graficos/GraficoRosquinha";
import GraficoBarrasVertical from "@/ui/graficos/GraficoBarrasVertical";

import { CardProjetos } from "@/ui/cards/CardProjetos";
import { graficoRosquinhaDadosMock, graficoBarrasVerticalDadosMock } from "@/lib/mock/mock_direitos";


const direitos: React.FC = () => {
  const elementos = obterPautasUnicas(projetosMock);

  //render
  return (
    <div className="flex flex-col h-full w-full gap-24 px-11 py-16 justify-center items-center  ">
      <section className="w-full text-shadow-xl text-7xl text-white text-center">
        <TextContent>
          <TextSmallTitillium>Violações e Ideologias</TextSmallTitillium>
          <TextSpace />
          <TextStrongOswald> dos Projetos de Lei</TextStrongOswald>
        </TextContent>
      </section>
      <section className="w-full flex flex-col justify-center">
        <div className="w-full">
          <DropdownButton
            className="w-32"
            titulo="Pauta"
            elementos={elementos}
          />
        </div>
        <div className="flex flex-row w-full items-center justify-center gap-20">
          <GraficoRosquinha dados={graficoRosquinhaDadosMock} />
          <CardLegenda
            cor_texto="text-[#D974FD]"
            resumo={legendas[0].resumo}
            texto={legendas[0].texto}
          >
            <TextContent shadow className="text-5xl">
              <LineText>
                <TextStrongOswald>Direitos</TextStrongOswald>
              </LineText>
              <LineText className="text-[#D974FD]">
                <TextSmallTitillium>Violados</TextSmallTitillium>
              </LineText>
            </TextContent>
          </CardLegenda>
        </div>
        <div />
      </section>
      <section className="w-full flex flex-row gap-[4.5rem] justify-center ">
        <CardLegenda
          cor_texto="text-[#FDFF78]"
          resumo={legendas[0].resumo}
          texto={legendas[0].texto}
        >
          <TextContent shadow className="text-5xl">
            <LineText>
              <TextStrongOswald>Ideologia dos</TextStrongOswald>
            </LineText>
            <LineText className="text-[#FDFF78]">
              <TextSmallTitillium>Projetos de Lei</TextSmallTitillium>
            </LineText>
          </TextContent>
        </CardLegenda>
        <GraficoBarrasVertical dados={graficoBarrasVerticalDadosMock} />
      </section>
      <section className="flex flex-col gap-14 justify-center text-center">
        <TextContent className="text-6xl" shadow>
          <TextSmallTitillium>Projetos</TextSmallTitillium>
          <TextSpace />
          <TextStrongOswald className="text-[#87D9FF]">de Lei</TextStrongOswald>
        </TextContent>
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
      </section>
    </div>
  );
};
export default direitos;
