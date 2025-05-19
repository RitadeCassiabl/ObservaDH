import { AtualizarIdeologiaService } from "../../service/ideologia/atualizar-ideologia-service";
import { BuscarIdeologiaService } from "../../service/ideologia/buscar-ideologia-service";

import { Ideologia } from "@/domain/models/ideologia";
import { RespostaApi } from "@/domain/models/resposta-api";

export class AtualizarIdeologiaController {
	async executar({
		id,
		nome,
		sigla,
		descricao,
	}: {
		id: string;
		nome: string;
		sigla: string;
		descricao: string;
	}) {
		if (!id || !nome || !sigla || !descricao) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Estão faltando informações para a alteração da ideologia",
			});
		}

		const serviceAuxiliar = new BuscarIdeologiaService();

		const existe = await serviceAuxiliar.buscarPorId(id);

		if (!existe) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "A ideologia não existe",
			});
		}

		const novoIdeologia = await serviceAuxiliar.buscarPorNome(nome);

		if (novoIdeologia) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "A nova ideologia já existe",
			});
		}

		const service = new AtualizarIdeologiaService();

		const ideologia = new Ideologia({
			id: id,
			nome: nome,
			sigla: sigla,
			descricao: descricao,
		});

		const resposta = await service.executar({ ideologia: ideologia });

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: "A ideologia foi atualizada com sucesso",
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "A ideologia não foi atualizada, por algum motivo",
			});
		}
	}
}
