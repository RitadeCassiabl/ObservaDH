'use client'

import { miniProjeto } from "@/lib/types/projetos";
import { useRouter } from "next/navigation";
import Card from ".";

interface miniCardProjetosProps {
  miniProjeto: miniProjeto;
}

const CardMiniProjetos: React.FC<miniCardProjetosProps> = ({ miniProjeto }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projetos/${miniProjeto.id}`);
  };
  return (
    <div
      className="flex flex-row items-center gap-4 w-[41.75rem] justify-between h-20 rounded-[10px] bg-[#4568BE] border-t-0 border-[#1A326E] border-2 cursor-pointer px-6 py-4 text-white font-medium"
      onClick={handleClick}
    >
      <Card.RenderizacaoItem
        titulo="Número"
        valor={miniProjeto.ano}
        cor_texto="text-[#050B17]"
        cor_segundo_texto="text-[#1A326E] text-xl"
        className="font-semibold"
      />
      <Card.RenderizacaoItem
        titulo="Ano"
        valor={miniProjeto.numero}
        cor_texto="text-[#050B17]"
        cor_segundo_texto="text-[#1A326E] text-xl"
        className="font-semibold"
      />
      <Card.RenderizacaoItem
        titulo="Pauta"
        valor={miniProjeto.pauta}
        cor_texto="text-[#050B17]"
        cor_segundo_texto="text-[#1A326E] text-xl"
        className="font-semibold"
      />
    </div>
  );
};

export default CardMiniProjetos;
