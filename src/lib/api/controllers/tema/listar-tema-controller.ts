import { RespostaApi } from "@/types/resposta-api";
import { ListarTemaService } from "../../service/tema/listar-tema-service";

export class ListarTemaController {
    async executar() {
        const service = new ListarTemaService();

        const resposta = await service.executar();

        if (resposta) {
            return new RespostaApi(
                true,
                `${resposta.length} tema(s) foram encontrados`,
                resposta
            );
        } else {
            return new RespostaApi(
                false,
                "Nenhum tema foi encontrado."
            )
        }
    }
}