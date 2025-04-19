import { RespostaApi } from "@/types/resposta-api";
import { DeletarProfissaoService } from "../../service/profissao/deletar-profissao-service";

export class DeletarProfissaoController {
    async executar(nome: string) {
        const service = new DeletarProfissaoService()

        const resposta = await service.executar(nome)

        if (resposta) {
            return new RespostaApi(true, "A profissão foi deletada com sucesso", resposta)
        } else {
            return new RespostaApi(false, "Houve algum erro para deletar o profissão")
        }
    }
}