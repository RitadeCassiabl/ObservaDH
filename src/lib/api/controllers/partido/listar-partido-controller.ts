import { RespostaApi } from "@/types/resposta-api";
import { ListarPartidoService } from "../../service/partido/listar-partido-service";

export class ListarPartidoController {
    async executar() {
        const service = new ListarPartidoService();
        const resposta = await service.executar()

        if (resposta) {
            return new RespostaApi({ sucesso: true, mensagem: `${resposta.length} Partido(s) encontrado(s)`, dados: resposta });
        } else {
            return new RespostaApi({ sucesso: false, mensagem: "Nenhum partido encontrado" });
        }
    }
}