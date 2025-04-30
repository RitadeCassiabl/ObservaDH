import { RespostaApi } from "@/types/resposta-api";
import { ListarProjetoService } from "../../service/projeto/listar-projeto-service";

export class ListarProjetoController {
    async executar() {
        const service = new ListarProjetoService();

        const resposta = await service.executar();

        if (resposta) {
            return new RespostaApi(
                true,
                `${resposta.length} Projeto(s) de lei foram encontrados`,
                resposta
            );
        } else {
            return new RespostaApi(
                false,
                "Nenhum Projeto de lei foi encontrado"
            );
        }
    }
}