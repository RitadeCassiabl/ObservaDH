import { AtualizarDireitoVioladoService } from "../../service/direito-violado/atualizar-direito_violado-service";
import { BuscarDireitoVioladoService } from "../../service/direito-violado/buscar-direito_violado-service";

import { DireitoViolado } from "@/domain/models/direito-violado";
import { RespostaApi } from "@/domain/models/resposta-api";

export class AtualizarDireitoVioladoController {
	async executar({
		id,
		nome,
		sigla,
		projetos,
		descricao,
	}: {
		id: string;
		nome: string;
		sigla: string;
		descricao: string;
		projetos: string[];
	}) {
		if (!id || !nome) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Faltam informações para a alteração do direito violado",
			});
		}

		const serviceAuxiliar = new BuscarDireitoVioladoService();

		const existe = await serviceAuxiliar.buscarPorId({ id: id });

		if (!existe) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "O direito violado não existe",
			});
		}

		const novoDireitoViolado = await serviceAuxiliar.buscarPorNome({
			nome: nome,
		});

		if (novoDireitoViolado) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "O novo direito violado já existe",
			});
		}

		const service = new AtualizarDireitoVioladoService();

		const direito = new DireitoViolado({
			id: id,
			nome: nome,
			sigla: sigla,
			projetos: projetos,
			descricao: descricao,
		});

		const resposta = await service.executar({ direitoViolado: direito });

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: "O Direito violado foi atualizado com sucesso",
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "O Direito violado não foi atualizado, por algum motivo",
			});
		}
	}
}
