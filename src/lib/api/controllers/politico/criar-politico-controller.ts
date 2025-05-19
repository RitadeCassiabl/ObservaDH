import { CriarPolitcoService } from "../../service/politico/criar-politico-service";

import Politico from "@/domain/models/politico";
import { RespostaApi } from "@/domain/models/resposta-api";

export class CriarPoliticoController {
	async executar({
		nome,
		raca,
		foto,
		genero,
		religiao,
		projetos,
		esferaId,
		estadoId,
		ideologia,
		partidoId,
		profissaoId,
	}: {
		nome: string;
		raca: string;
		foto?: string;
		genero: string;
		esferaId: string;
		religiao: string;
		estadoId: string;
		ideologia: string;
		partidoId: string;
		projetos?: string[];
		profissaoId?: string;
	}) {
		if (
			!nome ||
			!raca ||
			!genero ||
			!religiao ||
			!estadoId ||
			!ideologia ||
			!partidoId
		) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Falta informação para a criação do político",
			});
		}

		const politico = new Politico({
			nome: nome,
			raca: raca,
			foto: foto,
			genero: genero,
			esferaId: esferaId,
			religiao: religiao,
			projetos: projetos,
			estadoId: estadoId,
			ideologia: ideologia,
			partidoId: partidoId,
			profissaoId: profissaoId,
		});

		const service = new CriarPolitcoService();

		const resposta = await service.executar({ politico: politico });

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: "Político criado",
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Houve algum problema na criação do político",
			});
		}
	}
}
