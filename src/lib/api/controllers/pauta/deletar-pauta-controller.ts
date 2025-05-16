import { BuscarPautaService } from "../../service/pauta/buscar-pauta-service";
import { DeletarPautaService } from "../../service/pauta/deletar-pauta-service";

import { RespostaApi } from "@/domain/models/resposta-api";

export class DeletarPautaController {
	async executar(id: string) {
		if (!id) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Falta informações para deletar a pauta",
			});
		}

		const serviceAuxiliar = new BuscarPautaService();

		const existe = await serviceAuxiliar.buscarPorID(id);

		if (!existe) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "A pauta já não existe",
			});
		}

		const service = new DeletarPautaService();

		const resposta = await service.executar(id);

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: `${resposta.nome} foi deletado`,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Houve algum problema ao deletar a pauta",
			});
		}
	}
}
