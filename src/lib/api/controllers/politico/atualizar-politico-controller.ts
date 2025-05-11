import Politico from "@/types/politico";
import { RespostaApi } from "@/types/resposta-api";
import { AtualizarPoliticoService } from "../../service/politico/atualizar-politico-service";
import { BuscarPoliticoService } from "../../service/politico/buscar-politico-service";

export class AtualizarPoliticoController {
	async executar(
		id: string,
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
		if (
			!id ||
			!nome ||
			!sexo ||
			!raca ||
			!religiao ||
			!estado_id ||
			!partido_id ||
			!ideologia ||
			!data_nascimento
		) {
			return new RespostaApi(
				false,
				"Falta informação para a criação do político"
			);
		}

		const serviceAuxiliar = new BuscarPoliticoService();

		const existe = await serviceAuxiliar.executar(id);

		if (!existe) {
			return new RespostaApi(false, "o politico não existe");
		}

		const service = new AtualizarPoliticoService();

		const nascimento = new Date(data_nascimento);

		const politico = new Politico({
			nome: nome,
			sexo: sexo,
			raca: raca,
			religiao: religiao,
			estadoId: estado_id,
			partidoId: partido_id,
			ideologia: ideologia,
			dataNascimento: nascimento,
			foto: foto ?? "",
			profissoes: profissoes ?? [],
			projetos: projetos ?? [],
			id: id,
		});
		const resposta = await service.executar(politico);

		if (resposta) {
			return new RespostaApi(true, "Político atualizado com sucesso", resposta);
		} else {
			return new RespostaApi(false, "Político atualizado com sucesso");
		}
	}
}
