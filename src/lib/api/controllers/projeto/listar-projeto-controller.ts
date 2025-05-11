import { ListarProjetoService } from "../../service/projeto/listar-projeto-service";

import { RespostaApi } from "@/domain/models/resposta-api";

export class ListarProjetoController {
	async executar() {
		const service = new ListarProjetoService();

		const resposta = await service.executar();

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: `${resposta.length} projeto(s) de lei foram encontrados`,
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Nenhum projeto de lei foi encontrado",
			});
		}
	}
}
