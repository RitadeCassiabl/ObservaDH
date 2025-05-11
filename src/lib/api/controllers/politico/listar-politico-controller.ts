import { RespostaApi } from "@/types/resposta-api";
import { ListarPoliticoService } from "../../service/politico/listar-politico-service";

export class ListarPoliticoContoller {
	async executar() {
		const service = new ListarPoliticoService();

		const resposta = await service.executar();

		if (resposta) {
			return new RespostaApi(
				true,
				`${resposta.length} político(s) encontrado(s)`,
				resposta
			);
		} else {
			return new RespostaApi(false, "Não foi possível encontrar políticos");
		}
	}
}
