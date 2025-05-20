import { BuscarPautaService } from "../../service/pauta/buscar-pauta-service";

import { RespostaApi } from "@/domain/models/resposta-api";

export class BuscarPautaController {
	async executar(id: string) {
		if (!id) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Falta informações para a busca da pauta",
			});
		}

		const service = new BuscarPautaService();

		const resposta = await service.buscarPorID(id);

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: "A pauta foi encontrada com sucesso",
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "A pauta não foi encontrada",
			});
		}
	}
}
