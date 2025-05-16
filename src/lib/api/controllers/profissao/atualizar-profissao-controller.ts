import { AtualizarProfissaoService } from "../../service/profissao/atualizar-profissao-service";

import { Profissao } from "@/domain/models/profissao";
import { RespostaApi } from "@/domain/models/resposta-api";

export class AtualizarProfissaoController {
	async executar({
		id,
		nome,
		politicos,
	}: {
		id: string;
		nome: string;
		politicos: string[];
	}) {
		if (!id || !nome) {
			const respostaApi = new RespostaApi({
				sucesso: false,
				mensagem: "Estão faltando informações para a atualização da profissão",
			});

			return respostaApi;
		}

		const service = new AtualizarProfissaoService();

		const profissao = new Profissao({
			id: id,
			nome: nome,
			politicos: politicos,
		});

		const resposta = await service.executar({ profissao: profissao });

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
