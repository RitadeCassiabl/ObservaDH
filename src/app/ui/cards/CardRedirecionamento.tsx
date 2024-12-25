import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";


interface CardRedirecionamentoProps {
  titulo: string;
  subtitulo: string;
  texto: string;
  rota: string;
  cor: string;
}

const cardRedirecionamento: React.FC<CardRedirecionamentoProps> = ({
  cor,
  rota,
  texto,
  titulo,
  subtitulo
}) => {
  console.log(cor);
  return (
    <article className="w-[47.125rem] h-[43rem] bg-brasil p-12 border-[1px] border-[#87D9FF] rounded-[5px] shadow-lg shadow-[#87D9FF]">
      <section className="w-full h-full flex flex-col gap-4 content">
        <div>
          <h2 className={`text-[5rem] text-white text-shadow-xl font-normal`}>
            {subtitulo} <span className={`${cor} font-light`}>{titulo}</span>
          </h2>
          <section className="h-[21.25rem] w-full overflow-y-auto shadow-inner no-scrollbar">
            <div className="text-white text-2xl font-light text-justify ">
              {texto}
            </div>
          </section>
        </div>
        <div className="w-full h-10 flex justify-end">
          <Link href={rota}>
            <BsArrowRight size={90}/>
          </Link>
        </div>
      </section>
    </article>
  );
};
export default cardRedirecionamento;
