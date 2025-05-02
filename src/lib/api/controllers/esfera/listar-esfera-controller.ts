import { RespostaApi } from "@/types/resposta-api";
import { ListarEsferaService } from "../../service/esfera/listar-esfera-service";

export class ListarEsferaController {
    async executar() {
        const service = new ListarEsferaService();

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
                "Nenhum Esfera foi encontrado"
            );
        }
    }
}