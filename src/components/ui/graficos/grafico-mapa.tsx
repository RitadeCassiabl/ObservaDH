import CardStatus from "../cards/card-status";
import DropdownButton from "../dropdown/dropdown-button";
import MapaBrasil from "../icons/mapa-brasil";

import { mockStatus } from "@/mocks/mock-projetos";

const esferas = [
	{
		titulo: "Federal",
		value: "federal",
	},
	{
		titulo: "Estadual",
		value: "estadual 1",
	},
];

//TODO: fazer o mapa de calor funcional
const GraficoMapa: React.FC = () => {
	return (
		<article className="w-[80rem] h-[45.625rem] flex gap-2 ">
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
