import MapaBrasil from "../mapa_brasil/MapaBrasil";
import StatusCard from "./StatusCard";
import { mockStatus } from "../../lib/mock/mock_projetos";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const CardGraficoMapa: React.FC = () => {
  return (
    <div className="w-full h-full flex">
      <div className="h-[45.625rem] w-[43.75rem]">
        <MapaBrasil />
      </div>
      <div className="w-full h-full flex items-end justify-between">
        <div className="w-[25rem] h-full flex items-end">
          <StatusCard status={mockStatus} />
        </div>
        <div className="bg- w-32 h-full">
          <Select>
            <SelectTrigger className="w-full h-12 border-[#91ADF4] text-[#91ADF4]">
              <SelectValue placeholder="Esfera" />
            </SelectTrigger>
            <SelectContent className="text-[#91ADF4] focus:text-[#91ADF4] bg-transparent border-[#91ADF4] w-32">
              <SelectItem
                value="federal"
                className="text-[#91ADF4] focus:bg-transparent focus:text-[#91ADF4]"
              >
                Federal
              </SelectItem>
              <SelectItem
                value="estadual"
                className="text-[#91ADF4] focus:bg-transparent focus:text-[#91ADF4]"
              >
                Estadual
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default CardGraficoMapa;
