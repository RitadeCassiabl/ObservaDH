//!MOCKs
import { projetosMock } from "@/lib/mocks/mock_projetos";
import { legendas } from "@/lib/mocks/mock_parlamentares";

//!componentes
import { obterPautasUnicas } from "@/lib/utils/projetoLeiUtils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import DropdownButton from "@/ui/dropdown/DropdownButton";
import GraficoRosquinha from "@/ui/graficos/GraficoRosquinha";
import GraficoBarrasVertical from "@/ui/graficos/GraficoBarrasVertical";

import {
  graficoRosquinhaDadosMock,
  graficoBarrasVerticalDadosMock,
} from "@/lib/mocks/mock_direitos";
import { MainLayout } from "@/ui/layouts/MainLayout";
import Card from "@/ui/cards";
import Texto from "@/ui/ComponenteTexto";

const direitos: React.FC = () => {
  const elementos = obterPautasUnicas(projetosMock);

  //render
  return (
    <MainLayout>
      <div className="flex flex-col h-full w-full gap-24 px-11 py-16 justify-center items-center  ">
        <section className="w-full text-shadow-xl text-7xl text-white text-center">
          <Texto.Raiz>
            <Texto.Pequeno.Titillium>
              Violações e Ideologias
            </Texto.Pequeno.Titillium>
            <Texto.Espaco />
            <Texto.Forte.Oswald> dos Projetos de Lei</Texto.Forte.Oswald>
          </Texto.Raiz>
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
            <Card.Legenda
              cor_texto="text-[#D974FD]"
              resumo={legendas[0].resumo}
              texto={legendas[0].texto}
            >
              <Texto.Raiz shadow className="text-5xl">
                <Texto.Linha>
                  <Texto.Forte.Oswald>Direitos</Texto.Forte.Oswald>
                </Texto.Linha>
                <Texto.Linha className="text-[#D974FD]">
                  <Texto.Pequeno.Titillium>Violados</Texto.Pequeno.Titillium>
                </Texto.Linha>
              </Texto.Raiz>
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
                <Texto.Pequeno.Titillium>
                  Projetos de Lei
                </Texto.Pequeno.Titillium>
              </Texto.Linha>
            </Texto.Raiz>
          </Card.Legenda>
          <GraficoBarrasVertical dados={graficoBarrasVerticalDadosMock} />
        </section>
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
                {projetosMock.map((item, index) => (
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
      </div>
    </MainLayout>
  );
};
export default direitos;
