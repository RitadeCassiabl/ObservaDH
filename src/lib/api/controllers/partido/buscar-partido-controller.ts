import { RespostaApi } from "@/types/resposta-api";
import { BuscarPartidoService } from "../../service/partido/buscar-partido-service";

export class BuscarPartidoController {
    async executar(id: string) {
        const service = new BuscarPartidoService();

        const partido = await service.BuscarPorID(id);

        if (partido) {
            return new RespostaApi({ sucesso: true, mensagem: "Partido encontrado", dados: partido });
        } else {
            return new RespostaApi({ sucesso: false, mensagem: "Partido não encontrado" });
        }

    }
}