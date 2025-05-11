import { BuscarPoliticoService } from "../../service/politico/buscar-politico-service";

import { RespostaApi } from "@/domain/models/resposta-api";

export class BuscarPoliticoController {
	async executar(id: string) {
		const controller = new BuscarPoliticoService();

		const resposta = await controller.executar({ id: id });

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: "Político encontrado com sucesso",
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Político não encontrado",
			});
		}
	}
}
