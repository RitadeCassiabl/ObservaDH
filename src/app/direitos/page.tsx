import { projetosMock } from "@/lib/mock/mock_projetos";
import { legendas } from "@/lib/mock/mock_parlamentares";

import { obterPautasUnicas } from "@/lib/utils/projetoLeiUtils";
import CardLegenda from "@/ui/cards/CardLegenda";
import {
  TextContent,
  TextSmallTitillium,
  TextSpace,
  TextStrongOswald,
  LineText
} from "@/ui/components/ComponentesTexto";
import DropdownButton from "@/ui/dropdown/DropdownButton";
import { GraficoRosquinha } from "@/ui/graficos/GraficoRosquinha";
import GraficoBarrasVertical from "@/ui/graficos/GraficoBarrasVertical";


const direitos: React.FC = () => {
  const elementos = obterPautasUnicas(projetosMock);
  return (
    <div className="flex h-full w-full flex-col gap-[4.25rem] items-center px-11 py-16">
      <section className="w-full text-shadow-xl text-7xl text-white text-center">
        <TextContent>
          <TextSmallTitillium>Violações e Ideologias</TextSmallTitillium>
          <TextSpace />
          <TextStrongOswald> dos Projetos de Lei</TextStrongOswald>
        </TextContent>
      </section>
      <section className="w-full flex flex-col">
        <div className="w-full">
          <DropdownButton
            className="w-32"
            titulo="Pauta"
            elementos={elementos}
          />
        </div>
        <div className="flex flex-row w-full justify-center">
          <GraficoRosquinha />
          <CardLegenda cor_texto="text-[#D974FD]" resumo={legendas[0].resumo} texto={legendas[0].texto}>
            <TextContent shadow className="text-5xl">
              <LineText>
                <TextStrongOswald>Direitos</TextStrongOswald>
              </LineText>
              <LineText className="text-[#D974FD]">
                <TextSmallTitillium>Violados</TextSmallTitillium>
              </LineText>
            </TextContent>
          </CardLegenda>
        </div>
        <div />
      </section>
      <section className="w-full flex flex-col">
        <GraficoBarrasVertical />
      </section>
      <section className="h-[150rem]" />
    </div>
  );
};
export default direitos;
