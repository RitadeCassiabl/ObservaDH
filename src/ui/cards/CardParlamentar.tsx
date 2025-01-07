/* eslint-disable @next/next/no-img-element */
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { parlamentar } from "@/lib/types/projetos";
import React from "react";

import { IoMdClose } from "react-icons/io";
import {
  LineText,
  TextStrongOswald,
  TextSpace,
  TextSmallTitillium
} from "../components/ComponentesTexto";

interface saibaMaisProps {
  parlamentar: parlamentar;
  children: React.ReactNode;
}

const CardParlamentar: React.FC<saibaMaisProps> = ({
  children,
  parlamentar
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className={`flex flex-row text-xl items-center gap-4 `}>
          {children}
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="flex-col max-h-[90vh] max-w-[50vw] h-full w-full p-12 flex bg-[#121A2B] border-[#4568BE] shadow-lg shadow-[#4568BE] rounded-lg">
        <AlertDialogDescription className="flex flex-col w-full h-full gap-6">
          <div className="flex flex-col gap-8">
            <div className="flex flex-row w-full justify-between items-start">
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
            </div>
            <div className=" text-white flex flex-col gap-4">
              <div className="flex gap-6">
                <Item titulo="Gênero" valor={parlamentar.genero} />
                <Item titulo="Religião" valor={parlamentar.religiao} />
                <Item titulo="Raça" valor={parlamentar.raca} />
              </div>
              <div className="flex gap-6">
                <Item titulo="Esfera" valor={parlamentar.esfera} />
                <Item titulo="Estado" valor={parlamentar.estado} />
                <Item titulo="Profissão" valor={parlamentar.profissao} />
              </div>
              <div className="flex gap-6">
                <Item titulo="Partido" valor={parlamentar.partido} />
                <Item
                  titulo="Ideologia Política"
                  valor={parlamentar.ideologia}
                />
              </div>
            </div>
          </div>
          <div className="w-full bg-white/50 h-[2px]" />
          <div className="w-full justify-center">
            <div>
              <LineText className="text-4xl text-white text-shadow-xl text-center ">
                <TextStrongOswald>
                  {"Projetos"}
                </TextStrongOswald>
                <TextSpace />
                <TextSmallTitillium className={`text-[#F693F9]`}>
                  {"de Lei"}
                </TextSmallTitillium>
              </LineText>
            </div>
          </div>
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  );
};

interface itemProps {
  titulo: string;
  valor: string;
}

const Item: React.FC<itemProps> = ({ titulo, valor }) => {
  return (
    <p>
      <span className="text-3xl mr-2 text-[#AFC4F9]">
        {titulo}
        {":"}
      </span>
      <span className="text-2xl">
        {valor}
      </span>
    </p>
  );
};

export default CardParlamentar;
