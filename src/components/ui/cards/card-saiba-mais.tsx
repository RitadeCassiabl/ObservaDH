import { FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui-shacnui/alert-dialog";

import Texto from "../componente-texto";

interface saibaMaisProps {
  className?: string;
  cor_texto?: string;
  texto: string;
}

const CardSaibaMais: React.FC<saibaMaisProps> = ({
  className,
  cor_texto,
  texto,
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          className={`flex flex-row text-xl items-center gap-4 ${className} ${cor_texto}`}
        >
          <FaPlus size={18} /> Saiba mais
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="flex flex-col h-[90%] p-12 gap-6 w-[75%]  bg-[#121A2B] border-[#4568BE] shadow-lg shadow-[#4568BE] rounded-lg">
        <AlertDialogTitle className="flex justify-between">
          <Texto.Raiz className="text-5xl w-full">
            <Texto.Linha>
              <Texto.Forte.Oswald>{"Aprofundamento"}</Texto.Forte.Oswald>
              <Texto.Espaco />
              <Texto.Pequeno.Titillium className={`${className} ${cor_texto}`}>
                {"dos dados"}
              </Texto.Pequeno.Titillium>
            </Texto.Linha>
          </Texto.Raiz>
          <AlertDialogCancel className="">
            <IoMdClose size={26} color="white" />
          </AlertDialogCancel>
        </AlertDialogTitle>
        <AlertDialogDescription>
          <p className="text-[#AFC4F9] text-3xl text-justify">{texto}</p>
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CardSaibaMais;
