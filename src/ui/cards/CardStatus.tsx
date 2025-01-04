import { Titillium_Web } from "next/font/google";
import React from "react";
import { StatusType } from "@/lib/types/status";

const titillium_web = Titillium_Web({
  weight: ["400", "700"],
  subsets: ["latin"]
});

interface StatusCardProps {
  status: StatusType;
}

const CardStatus: React.FC<StatusCardProps> = ({ status }) => {
  return (
    <article className="flex flex-col gap-4 border-l-[1px] border-white rounded-lg h-[20.75rem] p-8">
      <section className="flex items-center justify-center gap-4">
        <h1 className={`${titillium_web.className} text-4xl font-semibold text-white`}>
          Dados Nacionais
        </h1>
        <Divider className="w-9" />
      </section>
      <section>
        {status.dados.dados.map(item => (
          <StatusItem titulo={item.titulo} valor={item.valor} key={item.titulo} />
        ))}
      </section>
      <section className="flex items-center gap-4">
        <h1 className={`${titillium_web.className} text-4xl font-semibold text-white`}>
          Pautas
        </h1>
        <Divider className="w-9" />
      </section>
      <section>
        {status.pautas.pautas.map(item => (
          <StatusItem titulo={item.titulo} valor={item.valor} key={item.titulo} />
        ))}
      </section>
    </article>
  );
};

interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className }) => {
  return <div className={`${className} h-[1px] bg-white`} />;
};

interface StatusItemProps {
  titulo: string;
  valor: number;
}

const StatusItem: React.FC<StatusItemProps> = ({ titulo, valor }) => {
  return (
    <div className="flex gap-5 items-center text-white">
      <span className="h-3 w-3 rounded-full bg-[#91ADF4] font-normal text-xl" />
      {valor}
      <Divider className="w-4" />
      {titulo}
    </div>
  );
};

export default CardStatus;
