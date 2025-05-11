import { RespostaApi } from "@/domain/models/resposta-api";
import { BuscarPautaService } from "../../service/pauta/buscar-pauta-service";
import { AtualizarPautaService } from "../../service/pauta/atualizar-pauta-service";

export class AtualizarPautaController {
	async executar(id: string, nome: string) {
		if (!id || !nome) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Faltam informações para atualizar a pauta.",
			});
		}

		const buscarPautaService = new BuscarPautaService();

		const temaExistente = await buscarPautaService.buscarPorID(id);

		if (!temaExistente) {
			return new RespostaApi({
				sucesso: false,
				mensagem: `A pauta não existe.`,
			});
		}

		const novoTemaExistente = await buscarPautaService.buscarPorNome(nome);
		if (novoTemaExistente) {
			return new RespostaApi({
				sucesso: false,
				mensagem: `O novo pauta já existe.`,
			});
		}

		const service = new AtualizarPautaService();

		const resposta = await service.executar(id, nome);

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: `A pauta foi atualizado para ${nome || ""} com sucesso`,
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Houve algum problema na atualização da pauta",
			});
		}
	}
}
