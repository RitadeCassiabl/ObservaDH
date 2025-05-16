import { AtualizarEstadoService } from "../../service/estado/atualizar-estado-service";
import { BuscarEstadoService } from "../../service/estado/buscar-estado-service";

import { RespostaApi } from "@/domain/models/resposta-api";

export class AtualizarEstadoController {
	async executar(id: string, nome: string) {
		if (!id || !nome) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Estão faltando informações para a alteração do estado",
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

		const novoEstado = await serviceAuxiliar.buscarPorNome(nome);

		if (novoEstado) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "O novo estado já existe",
			});
		}

		const service = new AtualizarEstadoService();

		const resposta = await service.executar(id, nome);

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: "O estado foi atualizado com sucesso",
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "O estado não foi atualizado, por algum motivo",
			});
		}
	}
}
