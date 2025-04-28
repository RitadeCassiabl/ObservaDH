import { RespostaApi } from "@/types/resposta-api";
import { ListarProfissoesService } from "../../service/profissao/listar-profissao-service";

export class ListarProfissoesController {
    async executar() {
        const service = new ListarProfissoesService()

        const resposta = await service.executar();

        if (resposta) {
            return new RespostaApi(
                true,
                `${resposta.length} profissão(ões) foram encontrada(s)`,
                resposta
            )
        } else {
            return new RespostaApi(
                false,
                "Nenhuma profissões encontradas"
            )
        }
    }
}