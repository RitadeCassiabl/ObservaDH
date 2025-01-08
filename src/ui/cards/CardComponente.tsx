import { Oswald } from "next/font/google";
import CardParlamentar from "./CardParlamentar";
import { parlamentar } from "@/lib/types/projetos";

interface componentePros {
  parlamentar: parlamentar;
  propostas: number;
}

const oswald = Oswald({ weight: ["400", "700"], subsets: ["latin"] });

const CardComponente: React.FC<componentePros> = ({
  parlamentar,
  propostas
}) => {
  return (
    <div className={` ${oswald.className} flex flex-row w-11/12 h-28`}>
      <section className="flex flex-row h-full w-1/2 px-16">
        <CardParlamentar parlamentar={parlamentar}>
          <section className="flex flex-row h-full w-full gap-28 items-center imagem-hover text-white hover:text-[#93F996]">
            <img
              src={parlamentar.url_imagem}
              alt=""
              className="h-24 w-24 rounded-full object-cover"
            />
            <p className=" text-3xl  font-medium ">
              {parlamentar.nome}
            </p>
          </section>
        </CardParlamentar>
      </section>
      <div className="flex flex-row h-full w-1/2 p-7 justify-around items-center text-3xl text-white">
        <p>
          {parlamentar.partido}
        </p>
        <p>
          {parlamentar.estado}
        </p>
        <p>
          {propostas}
        </p>
      </div>
    </div>
  );
};
export default CardComponente;
