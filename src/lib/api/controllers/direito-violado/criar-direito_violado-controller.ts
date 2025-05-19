import { BuscarDireitoVioladoService } from "../../service/direito-violado/buscar-direito_violado-service";
import { CriarDireitoVioladoService } from "../../service/direito-violado/criar-direito_violado-service";

import { DireitoViolado } from "@/domain/models/direito-violado";
import { RespostaApi } from "@/domain/models/resposta-api";

export class CriarDireitoVioladoController {
	async executar({
		nome,
		descricao,
		sigla,
		projetos,
	}: {
		nome: string;
		descricao: string;
		sigla: string;
		projetos?: string[];
	}) {
		if (!nome || sigla || descricao) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Estão faltando infomações para a criação do direito violado",
			});
		}

		const serviceAuxiliar = new BuscarDireitoVioladoService();

		const existe = await serviceAuxiliar.buscarPorNome({ nome: nome });

		if (existe) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "O direito violado já existe",
			});
		}

		const direitoViolado = new DireitoViolado({
			nome: nome,
			sigla: sigla,
			descricao: descricao,
			projetos: projetos,
		});

		const service = new CriarDireitoVioladoService();

		const resposta = await service.executar({ direitoViolado: direitoViolado });

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: "Direito Violado criado com sucesso",
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Houve algum problema na criação do direito violado",
			});
		}
	}
}
