import CardApresentacao from "../../ui/cards/CardApresentacao";
import { apresentacao, projetosMock } from "../../lib/mock/mock_projetos";
import CardGraficoMapa from "@/ui/cards/CardGraficoMapa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import CardProjetos from "@/ui/cards/CardProjetos";

const projetos: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col gap-[4.25rem] py-[4.375rem] items-center">
      <div>
        <CardApresentacao
          subtitulo={apresentacao.subtitulo}
          titulo={apresentacao.titulo}
          cor={apresentacao.cor}
        >
          {apresentacao.texto}
        </CardApresentacao>
      </div>
      <div className="flex flex-col items-center w-full h-[45.625rem] gap-20">
        <div className="w-[80rem] h-full">
          <CardGraficoMapa />
        </div>
        <span className="border-b-[1.5px] shadow-bottom shadow-[#AFC4F9] w-[82rem]" />
        {/* CARROSSEL DE PL's */}
        <Carousel
          opts={{
            align: "start"
          }}
          className="w-[82rem]"
        >
          <CarouselContent className="">
            {projetosMock.map((item , index) =>
              <CarouselItem
                key={index}
                className="basis-1/2 flex justify-center"
              >
                <CardProjetos projeto={item}/>
              </CarouselItem>
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="h-[45.625rem] w-full p-8" />
      <div className="h-[45.625rem] w-full p-8" />
    </div>
  );
};
export default projetos;