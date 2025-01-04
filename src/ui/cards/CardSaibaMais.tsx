import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { FaPlus } from "react-icons/fa6";
import {
  TextStrongOswald,
  TextContent,
  LineText,
  TextSpace,
  TextSmallTitillium
} from "../components/ComponentesTexto";
import { IoMdClose } from "react-icons/io";

interface saibaMaisProps {
  className?: string;
  cor_texto?: string;
  texto: string;
}

const CardSaibaMais: React.FC<saibaMaisProps> = ({ className, cor_texto, texto }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          className={`flex flex-row text-xl items-center gap-4 ${className} ${cor_texto}`}
        >
          <FaPlus size={18} /> Saiba mais
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="flex flex-col h-[702px] p-12 gap-6 w-[1015px] bg-[#121A2B] border-[#4568BE] shadow-lg shadow-[#4568BE] rounded-lg">
        <AlertDialogTitle className="flex justify-between">
          <TextContent className="text-5xl w-full">
            <LineText>
              <TextStrongOswald>
                {"Aprofundamento"}
              </TextStrongOswald>
              <TextSpace />
              <TextSmallTitillium className={`${className} ${cor_texto}`}>
                {"dos dados"}
              </TextSmallTitillium>
            </LineText>
          </TextContent>
          <AlertDialogCancel className="">
            <IoMdClose size={26} color="white" />
          </AlertDialogCancel>
        </AlertDialogTitle>
        <AlertDialogDescription>
          <p className="text-[#AFC4F9] text-3xl text-justify">
            {texto}
          </p>
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CardSaibaMais;
