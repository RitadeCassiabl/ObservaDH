import { BuscarPartidoService } from "../../service/partido/buscar-partido-service";
import { CriarPartidoService } from "../../service/partido/criar-partido-service";

import { Partido } from "@/domain/models/partido";
import { RespostaApi } from "@/domain/models/resposta-api";

class CriarPartidoController {
	async executar(nome: string, sigla: string) {
		if (!nome || !sigla) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Nome e código são obrigatórios",
			});
		}
		const serviceAuxiliar = new BuscarPartidoService();

		const nomeExiste = await serviceAuxiliar.BuscarPorNome(nome);
		if (nomeExiste) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Já existe um partido com este nome",
			});
		}

		const codigoexiste = await serviceAuxiliar.BuscarPorCodigo(sigla);

		if (codigoexiste) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Já existe um partido com este código",
			});
		}

		const service = new CriarPartidoService();

		const partido = new Partido({ nome: nome, sigla: sigla });

		const resposta = await service.executar(partido);

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: "Partido criado com sucesso",
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Houve algum problema na criação do partido",
			});
		}
	}
}

export { CriarPartidoController };
