// import { Profissao } from "@/lib/database/models/Profissao";
import { RespostaApi } from "@/lib/database/models/RespostaApi";
import { AtualizarProfissaoService } from "../../service/profissao/AtualizarProfissaoService";

export class AtualizarProfissaoController {
    async executar(id: string, nome: string) {
        const service = new AtualizarProfissaoService()


        //TODO: adicionar Políticos
        //const profissao = new Profissao(nome, politicos, id)
        const resposta = await service.executar(id, nome)

        if (resposta) {
            return new RespostaApi(true, "Profissão atualizada com sucesso", resposta)
        } else {
            return new RespostaApi(false, "Houve algum problema na atualização de profissão")

        }
    }
}