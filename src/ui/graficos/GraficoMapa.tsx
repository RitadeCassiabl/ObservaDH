import MapaBrasil from "../mapa/MapaBrasil";
import CardStatus from "../cards/CardStatus";
import { mockStatus } from "../../lib/mock/mock_projetos";
import DropdownButton from "../dropdown/DropdownButton";

const esferas = [
  {
    titulo: "Federal",
    value: "federal"
  },
  {
    titulo: "Estadual",
    value: "estadual 1"
  }
];

const GraficoMapa: React.FC = () => {
  return (
    <article className="w-full h-[45.625rem] flex gap-2">
      <section className="h-[45.625rem] w-[43.75rem]">
        <MapaBrasil />
      </section>
      <section className="w-full h-full flex items-end justify-between">
        <div className="w-[25rem] h-full flex items-end">
          <CardStatus status={mockStatus} />
        </div>
        <div className="bg- w-32 h-full">
          <DropdownButton elementos={esferas} titulo="Esfera" />
        </div>
      </section>
    </article>
  );
};

export default GraficoMapa;
