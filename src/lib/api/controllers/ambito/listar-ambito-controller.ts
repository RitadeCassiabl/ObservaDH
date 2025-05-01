import { RespostaApi } from "@/types/resposta-api";
import { ListarAmbitoService } from "../../service/ambito/listar-ambito-service";

export class ListarAmbitoController {
    async executar() {
        const service = new ListarAmbitoService();

        const resposta = await service.executar();

        if (resposta) {
            return new RespostaApi(
                true,
                `${resposta.length} Âmbito(s) foram encontrados`,
                resposta
            );
        } else {
            return new RespostaApi(
                false,
                "Nenhum Ambito foi encontrado"
            );
        }
    }
}