// import { Profissao } from "@/lib/database/models/Profissao";
import { RespostaApi } from "@/types/resposta-api";
import { AtualizarProfissaoService } from "../../service/profissao/atualizar-profissao-service";

export class AtualizarProfissaoController {
    async executar(id: string, nome: string) {
        if (!id || !nome) {
            const respostaApi = new RespostaApi(
                false,
                "Está faltando informação para atualização da profissão"
            );

            return respostaApi;
        }

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