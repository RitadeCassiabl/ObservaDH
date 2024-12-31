import MapaBrasil from "../mapa_brasil/MapaBrasil";
import StatusCard from "../cards/StatusCard";
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

const CardGraficoMapa: React.FC = () => {
  return (
    <article className="w-full h-[45.625rem] flex gap-2">
      <section className="h-[45.625rem] w-[43.75rem]">
        <MapaBrasil />
      </section>
      <section className="w-full h-full flex items-end justify-between">
        <div className="w-[25rem] h-full flex items-end">
          <StatusCard status={mockStatus} />
        </div>
        <div className="bg- w-32 h-full">
          <DropdownButton elementos={esferas} titulo="Esfera" />
        </div>
      </section>
    </article>
  );
};

export default CardGraficoMapa;
