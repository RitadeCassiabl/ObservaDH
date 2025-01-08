import { Card } from "@/components/ui/card";
import { ProjetoLei, miniProjeto } from "@/lib/types/projetos";
import { Titillium_Web, Oswald } from "next/font/google";

const oswald = Oswald({ weight: ["400", "700"], subsets: ["latin"] });

const titillium_web = Titillium_Web({
  weight: ["400", "700"],
  subsets: ["latin"]
});

interface CardProjetosProps {
  projeto: ProjetoLei;
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

interface RenderizarTextoProps {
  titulo: string;
  conteudo: string;
  className?: string;
}

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

const MiniCardProjetos: React.FC<miniCardProjetosProps> = ({
  miniProjeto
}) => {
  return (
    <div className="">
      {miniProjeto.numero}
    </div>
  )
};

export { CardProjetos, MiniCardProjetos };
