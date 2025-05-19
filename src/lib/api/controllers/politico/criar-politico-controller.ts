import { CriarPolitcoService } from "../../service/politico/criar-politico-service";

import { RespostaApi } from "@/domain/models/resposta-api";
import Politico from "@/types/politico";

export class CriarPoliticoController {
	async executar({
		nome,
		genero,
		raca,
		religiao,
		partido_id,
		estado_id,
		ideologia,
		foto,
		profissaoId,
		projetos,
	}: {
		nome: string;
		genero: string;
		raca: string;
		religiao: string;
		estado_id: string;
		partido_id: string;
		ideologia: string;
		foto?: string;
		profissaoId?: string;
		projetos?: string[];
	}) {
		if (
			!nome ||
			!genero ||
			!raca ||
			!religiao ||
			!estado_id ||
			!partido_id ||
			!ideologia
		) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Falta informação para a criação do político",
			});
		}

		const politico = new Politico({
			nome: nome,
			genero: genero,
			raca: raca,
			religiao: religiao,
			estadoId: estado_id,
			partidoId: partido_id,
			ideologia: ideologia,
			foto: foto,
			profissaoId: profissaoId,
			projetos: projetos,
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
