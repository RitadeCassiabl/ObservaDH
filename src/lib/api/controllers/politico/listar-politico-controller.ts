import { ListarPoliticoService } from "../../service/politico/listar-politico-service";

import { RespostaApi } from "@/domain/models/resposta-api";

export class ListarPoliticoContoller {
	async executar() {
		const service = new ListarPoliticoService();

		const resposta = await service.executar();

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: `${resposta.length} político(s) encontrado(s)`,
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Não foi possível encontrar políticos",
			});
		}
	}
}
