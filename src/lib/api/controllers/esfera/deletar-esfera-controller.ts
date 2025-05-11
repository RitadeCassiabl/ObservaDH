import { BuscarEsferaService } from "../../service/esfera/buscar-esfera-service";
import { DeletarEsferaService } from "../../service/esfera/deletar-esfera-service";

import { RespostaApi } from "@/domain/models/resposta-api";

export class DeletarEsferaController {
	async executar(id: string) {
		if (!id) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Estão faltando informações para deletar a esfera",
			});
		}

		const serviceAuxiliar = new BuscarEsferaService();

		const existe = await serviceAuxiliar.buscarPorId(id);

		if (!existe) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "A esfera não existe",
			});
		}

		const service = new DeletarEsferaService();

		const resposta = await service.executar(id);

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: "A esfera foi deletada com sucesso",
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Houve um erro na hora de deletar a esfera",
			});
		}
	}
}
