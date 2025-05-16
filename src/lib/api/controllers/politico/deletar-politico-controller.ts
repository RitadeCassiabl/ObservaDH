import { BuscarPoliticoService } from "../../service/politico/buscar-politico-service";
import { DeletarPoliticoService } from "../../service/politico/deletar-politico-service";

import { RespostaApi } from "@/domain/models/resposta-api";

export class DeletarPoliticoController {
	async executar(id: string) {
		const serviceAuxiliar = new BuscarPoliticoService();

		const existe = await serviceAuxiliar.executar({ id: id });

		if (!existe) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "O politico não existe",
			});
		}

		const service = new DeletarPoliticoService();

		const resposta = await service.executar(id);

		if (resposta) {
			return new RespostaApi({ sucesso: true, mensagem: "Político deletado" });
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Houve um problema ao deletar o politico",
			});
		}
	}
}
