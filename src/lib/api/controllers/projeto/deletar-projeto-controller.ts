import { BuscarProjetoService } from "../../service/projeto/buscar-projeto-service";
import { DeletarProjetoService } from "../../service/projeto/deletar-projeto-service";

import { RespostaApi } from "@/domain/models/resposta-api";

export class DeletarProjetoController {
	async executar(id: string) {
		if (!id) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Estão faltando informações para deletar o projeto de lei",
			});
		}

		const serviceAuxiliar = new BuscarProjetoService();

		const existe = await serviceAuxiliar.buscarPorId({ id: id });

		if (!existe) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "O projeto de lei não existe",
			});
		}

		const service = new DeletarProjetoService();

		const resposta = await service.executar(id);

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: "O projeto de lei foi deletado com sucesso",
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Houve um erro na hora de deletar o projeto de lei",
			});
		}
	}
}
