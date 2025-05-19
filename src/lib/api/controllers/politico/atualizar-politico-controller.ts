import { AtualizarPoliticoService } from "../../service/politico/atualizar-politico-service";
import { BuscarPoliticoService } from "../../service/politico/buscar-politico-service";

import { RespostaApi } from "@/domain/models/resposta-api";
import Politico from "@/types/politico";

export class AtualizarPoliticoController {
	async executar({
		id,
		nome,
		genero,
		raca,
		religiao,
		estadoId,
		partidoId,
		ideologia,
		foto,
		profissaoId,
		projetos,
	}: {
		id: string;
		nome: string;
		genero: string;
		raca: string;
		religiao: string;
		estadoId: string;
		partidoId: string;
		ideologia: string;
		foto?: string;
		profissaoId?: string;
		projetos?: string[];
	}) {
		if (
			!id ||
			!nome ||
			!genero ||
			!raca ||
			!religiao ||
			!estadoId ||
			!partidoId ||
			!ideologia
		) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Falta informação para a criação do político",
			});
		}

		const serviceAuxiliar = new BuscarPoliticoService();

		const existe = await serviceAuxiliar.executar({ id: id });

		if (!existe) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "o politico não existe",
			});
		}

		const service = new AtualizarPoliticoService();

		const politico = new Politico({
			id: id,
			nome: nome,
			raca: raca,
			genero: genero,
			foto: foto ?? "",
			estadoId: estadoId,
			religiao: religiao,
			partidoId: partidoId,
			ideologia: ideologia,
			projetos: projetos ?? [],
			profissaoId: profissaoId,
		});
		const resposta = await service.executar({ politico: politico });

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: "Político atualizado com sucesso",
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Político atualizado com sucesso",
			});
		}
	}
}
