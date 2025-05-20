import { BuscarProjetoService } from "../../service/projeto/buscar-projeto-service";
import { CriarProjetoService } from "../../service/projeto/criar-projeto-service";

import { Projeto } from "@/domain/models/projeto";
import { RespostaApi } from "@/domain/models/resposta-api";

export class CriarProjetoController {
	async executar({
		ano,
		numeroPl,
		pautaId,
		justificativa,
		ementa,
		esferaId,
	}: {
		ano: string;
		numeroPl: string;
		pautaId: string;
		justificativa: string;
		ementa: string;
		esferaId: string;
	}) {
		if (
			!ano ||
			!numeroPl ||
			!pautaId ||
			!justificativa ||
			!ementa ||
			!esferaId
		) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Estão faltando informações para criar o projeto de lei",
			});
		}

		const serviceAuxiliar = new BuscarProjetoService();

		const existe = await serviceAuxiliar.buscarPorNumeroPL({ numeroPl });

		if (existe) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "O projeto de lei já existe",
			});
		}

		const service = new CriarProjetoService();

		const projeto = new Projeto({
			ano,
			numeroPl,
			pautaId,
			justificativa,
			ementa,
			esferaId,
		});

		const resposta = await service.executar({ projeto: projeto });

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: "Projeto de lei criado com sucesso",
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Houve algum problema na criação do projeto de lei",
			});
		}
	}
}
