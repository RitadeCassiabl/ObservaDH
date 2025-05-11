import { BuscarProfissaoService } from "../../service/profissao/buscar-profissao-service";
import { CriarProfissaoService } from "../../service/profissao/criar-profissao-service";

import { Profissao } from "@/domain/models/profissao";
import { RespostaApi } from "@/domain/models/resposta-api";

export class CriarProfissaoController {
	async executar(nome: string) {
		if (!nome) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Faltam informações para criar a profissão",
			});
		}

		const serviceAuxiliar = new BuscarProfissaoService();

		const existe = await serviceAuxiliar.buscarPorNome(nome);

		if (existe) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "A profissão já existe",
			});
		}

		const service = new CriarProfissaoService();

		const profissao = new Profissao({ nome: nome });

		const resposta = await service.executar(profissao);

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: "Profissão criada com sucesso",
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Houve algum problema na criação da profissão",
			});
		}
	}
}
