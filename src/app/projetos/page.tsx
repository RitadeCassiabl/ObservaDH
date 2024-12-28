import CardApresentacao from "../../ui/cards/CardApresentacao";
import { apresentacao } from "../../lib/mock/mock_projetos";
import CardGraficoMapa from "@/ui/cards/CardGraficoMapa";

const projetos: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col gap-[4.25rem] py-[4.375rem] items-center">
      <CardApresentacao
        subtitulo={apresentacao.subtitulo}
        titulo={apresentacao.titulo}
        cor={apresentacao.cor}
      >
        {apresentacao.texto}
      </CardApresentacao>
      {/*GRÁFICO - MAPA DO BRASIL*/}
      <div className="h-[45.625rem] w-full p-8">
        <CardGraficoMapa  />
      </div>
      <div className="h-[45.625rem] w-full p-8" />
      <div className="h-[45.625rem] w-full p-8" />
      <div className="h-[45.625rem] w-full p-8" />
      <div className="h-[45.625rem] w-full p-8" />
      <div className="h-[45.625rem] w-full p-8" />
    </div>
  );
};
export default projetos;
