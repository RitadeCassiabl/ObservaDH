import { RespostaApi } from "@/types/resposta-api";
import { ListarPautaService } from "../../service/pauta/listar-pauta-service";

export class ListarPautaController {
    async executar() {
        const service = new ListarPautaService();

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