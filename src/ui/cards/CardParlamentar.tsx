/* eslint-disable @next/next/no-img-element */
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { parlamentar } from "@/lib/types/projetos";
import React from "react";

import { IoMdClose } from "react-icons/io";
import {
  LineText,
  TextStrongOswald,
  TextSpace,
  TextSmallTitillium,
} from "../components/ComponentesTexto";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { projetosMock } from "@/lib/mock/mock_projetos";
import CardItemRenderizacao from "./CardItemRenderizacao";
import CardMiniProjetos from "./CardMiniProjeto";

interface saibaMaisProps {
  parlamentar: parlamentar;
  children: React.ReactNode;
}

const CardParlamentar: React.FC<saibaMaisProps> = ({
  children,
  parlamentar,
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className={`text-xl items-center gap-4 w-full`}>
          {children}
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="flex-col max-h-[90vh] max-w-[50vw] h-full w-full p-12 flex bg-gradient-to-t from-[#050B17] to-[#121A2B] border-[#4568BE] shadow-lg shadow-[#4568BE] rounded-lg">
        <AlertDialogDescription className="flex flex-col w-full h-full gap-6">
          <article className="flex flex-col gap-8">
            <section className="flex flex-row w-full justify-between items-start">
              <div className="flex flex-row items-center gap-10">
                <img
                  src={parlamentar.url_imagem}
                  className="h-52 w-52 rounded-full border-2 border-white object-cover"
                  alt=""
                />
                <p className="text-5xl text-shadow-xl font-normal text-white truncate">
                  {parlamentar.nome}
                </p>
              </div>
              <AlertDialogCancel className="">
                <IoMdClose size={26} color="white" />
              </AlertDialogCancel>
            </section>
            <section className="text-white flex flex-col gap-4">
              <div className="flex gap-6">
                <CardItemRenderizacao
                  titulo="Gênero"
                  valor={parlamentar.genero}
                />
                <CardItemRenderizacao
                  titulo="Religião"
                  valor={parlamentar.religiao}
                />
                <CardItemRenderizacao titulo="Raça" valor={parlamentar.raca} />
              </div>
              <div className="flex gap-6">
                <CardItemRenderizacao
                  titulo="Esfera"
                  valor={parlamentar.esfera}
                />
                <CardItemRenderizacao
                  titulo="Estado"
                  valor={parlamentar.estado}
                />
                <CardItemRenderizacao
                  titulo="Profissão"
                  valor={parlamentar.profissao}
                />
              </div>
              <div className="flex gap-6">
                <CardItemRenderizacao
                  titulo="Partido"
                  valor={parlamentar.partido}
                />
                <CardItemRenderizacao
                  titulo="Ideologia Política"
                  valor={parlamentar.ideologia}
                />
              </div>
            </section>
          </article>
          <div className="w-full bg-white/50 h-[2px]" />
          <section className="flex flex-col w-full items-center gap-8">
            <div>
              <LineText className="text-4xl text-white text-shadow-xl text-center ">
                <TextStrongOswald>{"Projetos"}</TextStrongOswald>
                <TextSpace />
                <TextSmallTitillium className={`text-[#F693F9]`}>
                  {"de Lei"}
                </TextSmallTitillium>
              </LineText>
            </div>
            <div>
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-[41.75rem]"
              >
                <CarouselContent className="">
                  {projetosMock.map((item, index) => (
                    <CarouselItem key={index} className="flex justify-center">
                      <CardMiniProjetos
                        miniProjeto={{
                          id: item.id,
                          numero: item.numero_pl,
                          ano: item.ano,
                          pauta: item.pauta,
                        }}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </section>
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CardParlamentar;
