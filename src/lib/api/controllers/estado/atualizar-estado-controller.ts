import { AtualizarEstadoService } from "../../service/estado/atualizar-estado-service";
import { BuscarEstadoService } from "../../service/estado/buscar-estado-service";

import { Estado } from "@/domain/models/estado";
import { RespostaApi } from "@/domain/models/resposta-api";

export class AtualizarEstadoController {
	async executar({
		id,
		nome,
		sigla,
	}: {
		id: string;
		nome: string;
		sigla: string;
	}) {
		if (!id || !nome || !sigla) {
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

		const estado = new Estado({ nome: nome, sigla: sigla, id: id });
		const resposta = await service.executar({ estado });

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
