/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useParams } from "next/navigation";
import { buscarProjetoPorId } from "@/lib/utils/busca";
import { ProjetoLei } from "@/lib/types/projetos";
import {
  TextContent,
  LineText,
  TextSmallTitillium,
  TextSpace,
  TextStrongOswald
} from "@/ui/components/ComponentesTexto";
const page: React.FC = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const projeto: ProjetoLei | undefined = buscarProjetoPorId(id);
  if (!projeto) {
    return null;
  }
  return (
    <div className="h-full w-full flex flex-col items-center py-[4.5rem] gap-[4.5rem] border-[#87D9FF]">
      <section>
        <Titulo />
      </section>
      <article className="bg-gradient-to-t from-[#2C52A4]/45 to-[#050B17]/45 h-5/6 w-11/12 min-h-[30rem] py-16 px-[4.5rem]">

      </article>
    </div>
  );
};

const Titulo = () => {
  return (
    <TextContent shadow className="text-7xl">
      <LineText>
        <TextSmallTitillium>Dados</TextSmallTitillium>
        <TextSpace />
        <TextStrongOswald>da Proposta</TextStrongOswald>
      </LineText>
    </TextContent>
  );
};
export default page;
