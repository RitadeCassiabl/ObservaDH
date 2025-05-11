// import { Profissao } from "@/lib/database/models/Profissao";
import { RespostaApi } from "@/domain/models/resposta-api";
import { AtualizarProfissaoService } from "../../service/profissao/atualizar-profissao-service";

export class AtualizarProfissaoController {
	async executar(id: string, nome: string) {
		if (!id || !nome) {
			const respostaApi = new RespostaApi({
				sucesso: false,
				mensagem: "Estão faltando informações para a atualização da profissão",
			});

			return respostaApi;
		}

		const service = new AtualizarProfissaoService();

		//TODO: adicionar Políticos
		//const profissao = new Profissao(nome, politicos, id)
		const resposta = await service.executar(id, nome);

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: "Profissão atualizada com sucesso",
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Houve algum problema na atualização da profissão",
			});
		}
	}
}
