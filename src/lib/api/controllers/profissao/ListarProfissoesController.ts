import { RespostaApi } from "@/lib/database/models/RespostaApi";
import { ListarProfissoesService } from "../../service/profissao/ListarProfissoesService";

export class ListarProfissoesController {
    async executar() {
        const service = new ListarProfissoesService()

        const resposta = await service.executar();

        if (resposta) {
            return new RespostaApi(true, `${resposta.length} profissões encontradas`, resposta)
        } else {
            return new RespostaApi(false, "Nenhuma profissões encontradas")
        }
    }
}