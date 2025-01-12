import {
  TextContent,
  TextSmallTitillium,
  TextSpace,
  TextStrongOswald
} from "@/ui/components/ComponentesTexto";
import DropdownButton from "@/ui/dropdown/DropdownButton";
import { GraficoRosquinha } from "@/ui/graficos/GraficoRosquinha";

const direitos: React.FC = () => {
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
            elementos={[
              { titulo: "A", value: "A" },
              { titulo: "A", value: "b" },
              { titulo: "A", value: "c" },
              { titulo: "A", value: "d" }
            ]}
          />
        </div>
        <div>
          <GraficoRosquinha />
        </div>
        <div />
      </section>
      <section className="h-[150rem]" />
    </div>
  );
};
export default direitos;
