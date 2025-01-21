"use client";
import { Card } from "@/components/ui/card";
import { ProjetoLei, miniProjeto } from "@/lib/types/projetos";
import { titillium_web, oswald } from "../fonts";
import { useRouter } from "next/navigation";

interface CardProjetosProps {
  projeto: ProjetoLei;
}

interface RenderizarTextoProps {
  titulo: string;
  conteudo: string;
  className?: string;
}

interface itemRenderProps {
  titulo: string;
  valor: string;
  className?: string;
  cor_texto?: string;
  cor_segundo_texto?: string;
}

const CardProjetos: React.FC<CardProjetosProps> = ({ projeto }) => {
  return (
    <Card className="bg-gradient-to-t from-[#050B17] to-[#1A326E] h-[27.625rem] w-[38.125rem] border-[#AFC4F9] border-2 rounded-[10px] px-8 py-12 flex flex-col gap-4 select-none">
      <section className="flex gap-6">
        <RenderizarTexto conteudo={projeto.ano} titulo="Ano" />
        <RenderizarTexto conteudo={projeto.numero_pl} titulo="Número do PL" />
      </section>

      <section className="flex gap-6">
        <RenderizarTexto conteudo={projeto.pauta} titulo="Pauta" />
        <h3 className="text-white flex flex-row items-center gap-4">
          <span
            className={`${oswald.className} font-normal text-3xl text-[#AFC4F9]`}
          >
            {projeto.parlamentares.length > 1 ? "Estados:" : "Estado:"}
          </span>
          {projeto.parlamentares.map((parlamentar, index) =>
            <span
              key={index}
              className={`${titillium_web.className} font-normal text-xl text-white`}
            >
              {parlamentar.estado}
            </span>
          )}
        </h3>
      </section>

      <section>
        <h3 className="flex flex-row items-center gap-4">
          <span
            className={`${oswald.className} font-normal text-3xl text-[#AFC4F9]`}
          >
            {projeto.parlamentares.length > 1
              ? "Parlamentares:"
              : "Parlamentar:"}
          </span>
          {projeto.parlamentares.map((parlamentar, index) =>
            <span
              key={index}
              className={`${titillium_web.className} font-normal text-xl text-white`}
            >
              {parlamentar.nome} - {parlamentar.partido}
            </span>
          )}
        </h3>
      </section>

      <section>
        <h3 className={`flex flex-col gap-4 items-start`}>
          <span
            className={`${oswald.className} font-normal text-3xl text-[#AFC4F9]`}
          >
            Ementa:
          </span>
          <p
            className={`${titillium_web.className} font-normal text-xl text-white`}
          >
            {projeto.ementa}
          </p>
        </h3>
      </section>
    </Card>
  );
};

const RenderizarTexto: React.FC<RenderizarTextoProps> = ({
  titulo,
  conteudo,
  className
}) => {
  return (
    <h3 className={`flex flex-row items-center gap-4 ${className}`}>
      <span
        className={`${oswald.className} font-normal text-3xl text-[#AFC4F9]`}
      >
        {titulo}:
      </span>
      <span
        className={`${titillium_web.className} font-normal text-xl text-white`}
      >
        {conteudo}
      </span>
    </h3>
  );
};

interface miniCardProjetosProps {
  miniProjeto: miniProjeto;
}

const MiniCardProjetos: React.FC<miniCardProjetosProps> = ({ miniProjeto }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projetos/${miniProjeto.id}`);
  };
  return (
    <div
      className="flex flex-row items-center gap-4 w-[41.75rem] justify-between h-20 rounded-[10px] bg-[#4568BE] border-t-0 border-[#1A326E] border-2 cursor-pointer px-6 py-4 text-white font-medium"
      onClick={handleClick}
    >
      <ItemRender
        titulo="Número"
        valor={miniProjeto.ano}
        cor_texto="text-[#050B17]"
        cor_segundo_texto="text-[#1A326E] text-xl"
        className="font-semibold"
      />
      <ItemRender
        titulo="Ano"
        valor={miniProjeto.numero}
        cor_texto="text-[#050B17]"
        cor_segundo_texto="text-[#1A326E] text-xl"
        className="font-semibold"
      />
      <ItemRender
        titulo="Pauta"
        valor={miniProjeto.pauta}
        cor_texto="text-[#050B17]"
        cor_segundo_texto="text-[#1A326E] text-xl"
        className="font-semibold"
      />
    </div>
  );
};

const ItemRender: React.FC<itemRenderProps> = ({
  titulo,
  valor,
  className,
  cor_texto,
  cor_segundo_texto
}) => {
  return (
    <p className={`text-2xl ${className} ${oswald.className}`}>
      <span className={`mr-2  ${cor_texto ? cor_texto : "text-[#AFC4F9]"}`}>
        {titulo}
        {":"}
      </span>
      <span
        className={`truncate ${cor_segundo_texto
          ? cor_segundo_texto
          : "text-white"} `}
      >
        {valor}
      </span>
    </p>
  );
};

export { CardProjetos, MiniCardProjetos, ItemRender };
