import { CriarPolitcoService } from "../../service/politico/criar-politico-service";

import { RespostaApi } from "@/domain/models/resposta-api";
import Politico from "@/types/politico";

export class CriarPoliticoController {
	async executar(
		nome: string,
		sexo: string,
		raca: string,
		religiao: string,
		estado_id: string,
		partido_id: string,
		ideologia: string,
		data_nascimento: string,
		foto?: string,
		profissoes?: string[],
		projetos?: string[]
	) {
		const nascimento = new Date(data_nascimento);

		if (
			!nome ||
			!sexo ||
			!raca ||
			!religiao ||
			!estado_id ||
			!partido_id ||
			!ideologia ||
			!data_nascimento
		) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Falta informação para a criação do político",
			});
		}

		const politico = new Politico({
			nome: nome,
			sexo: sexo,
			raca: raca,
			religiao: religiao,
			estadoId: estado_id,
			partidoId: partido_id,
			ideologia: ideologia,
			dataNascimento: nascimento,
			foto: foto,
			profissoes: profissoes,
			projetos: projetos,
		});

		const service = new CriarPolitcoService();

		const resposta = await service.executar(politico);

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
