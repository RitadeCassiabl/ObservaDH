/* eslint-disable @next/next/no-img-element */
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTrigger,
} from "@/components/ui-shacnui/alert-dialog";
import { parlamentar } from "@/types/interfaces/parlamentar";
import React from "react";

import { IoMdClose } from "react-icons/io";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui-shacnui/carousel";
import { projetosMock } from "@/mocks/mock-projetos";
import CardItemRenderizacao from "./card-item-renderizacao";
import CardMiniProjetos from "./card-mini-projeto";
import Texto from "../componente-texto";

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
                  className="h-44 w-44 rounded-full border-2 border-white object-cover"
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
            <section className="text-white grid grid-cols-3 gap-4">
              {[
                ["Gênero", parlamentar.genero],
                ["Religião", parlamentar.religiao],
                ["Raça", parlamentar.raca],
                ["Esfera", parlamentar.esfera],
                ["Estado", parlamentar.estado],
                ["Profissão", parlamentar.profissao],
                ["Partido", parlamentar.partido],
                ["Ideologia Política", parlamentar.ideologia],
              ].map(([titulo, valor], index) => (
                <CardItemRenderizacao
                  key={index}
                  titulo={titulo}
                  valor={valor}
                />
              ))}
            </section>
            <div className="w-full bg-white/50 h-[2px]" />
          </article>
          <section className="flex flex-col w-full items-center gap-8">
            <div>
              <Texto.Linha className="text-4xl text-white text-shadow-xl text-center ">
                <Texto.Forte.Oswald>{"Projetos"}</Texto.Forte.Oswald>
                <Texto.Espaco />
                <Texto.Pequeno.Titillium className={`text-[#F693F9]`}>
                  {"de Lei"}
                </Texto.Pequeno.Titillium>
              </Texto.Linha>
            </div>
            <div>
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-[40rem]"
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
