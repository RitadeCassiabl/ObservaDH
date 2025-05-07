import { RespostaApi } from "@/types/resposta-api";
import { ListarPartidoService } from "../../service/partido/listar-partido-service";

export class ListarPartidoController {
    async executar() {
        const service = new ListarPartidoService();
        const resposta = await service.executar()

        if (resposta) {
            return new RespostaApi(true, `${resposta.length} Partido(s) encontrado(s)`, resposta);
        } else {
            return new RespostaApi(false, "Nenhum partido encontrado");
        }
    }
}