import { RespostaApi } from "@/types/resposta-api";
import { ListarTemaService } from "../../service/pauta/listar-pauta-service";

export class ListarTemaController {
    async executar() {
        const service = new ListarTemaService();

        const resposta = await service.executar();

        if (resposta) {
            return new RespostaApi(
                true,
                `${resposta.length} pauta(s) foram encontrados`,
                resposta
            );
        } else {
            return new RespostaApi(
                false,
                "Nenhum pauta foi encontrado."
            )
        }
    }
}