/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useParams } from "next/navigation";
import { buscarProjetoPorId } from "@/lib/utils/busca";
import { ProjetoLei } from "@/lib/types/projetos";
const page: React.FC = () => {
  
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const projeto: ProjetoLei | undefined = buscarProjetoPorId(id);

  return (
    <div className="h-full w-full flex justify-center">
      <div className="bg-gradient-to-t from-[#2C52A4]/45 to-[#050B17]/45 h-5/6 w-11/12 min-h-[30rem]">
        {projeto ? 
        <div>
          {projeto.pauta}
        </div> : (
          <p>Projeto não encontrado</p>
        )}
      </div>
    </div>
  );
};

export default page;
