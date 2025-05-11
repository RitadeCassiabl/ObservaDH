import { BuscarEstadoService } from "../../service/estado/buscar-estado-service";
import { DeletarEstadoService } from "../../service/estado/deletar-estado-service";

import { RespostaApi } from "@/domain/models/resposta-api";

export class DeletarEstadoController {
	async executar(id: string) {
		if (!id) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Estão faltando informações para deletar o estado",
			});
		}

		const serviceAuxiliar = new BuscarEstadoService();

		const existe = await serviceAuxiliar.buscarPorId(id);

		if (!existe) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "O estado não existe",
			});
		}

		const service = new DeletarEstadoService();

		const resposta = await service.executar(id);

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: "O estado foi deletado com sucesso",
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Houve um erro na hora de deletar o estado",
			});
		}
	}
}
