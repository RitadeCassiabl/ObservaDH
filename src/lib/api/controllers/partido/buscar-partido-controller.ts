import { RespostaApi } from "@/types/resposta-api";
import { BuscarPartidoService } from "../../service/partido/buscar-partido-service";

export class BuscarPartidoController {
    async executar(id: string) {
        const service = new BuscarPartidoService();

        const partido = await service.BuscarPorID(id);

        if (partido) {
            return new RespostaApi(true, "Partido encontrado", partido);
        } else {
            return new RespostaApi(false, "Partido não encontrado");
        }

    }
}