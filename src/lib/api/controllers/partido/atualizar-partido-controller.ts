import { Partido } from "@/domain/models/partido";
import { BuscarPartidoService } from "../../service/partido/buscar-partido-service";
import { AtualizarPartidoService } from "../../service/partido/atualizar-partido-service";
import { RespostaApi } from "@/domain/models/resposta-api";

export class AtualizarPartidoController {
	async executar(
		id: string,
		nome: string,
		sigla: string,
		politicos: string[],
		projetos: string[]
	) {
		const buscarService = new BuscarPartidoService();
		const atualizarService = new AtualizarPartidoService();

		const partidoExistente = await buscarService.BuscarPorID(id);

		if (!partidoExistente) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Partido não encontrado",
			});
		}

		if (nome !== partidoExistente.nome) {
			const partidoComMesmoNome = await buscarService.BuscarPorNome(nome);
			if (partidoComMesmoNome && partidoComMesmoNome.id !== id) {
				return new RespostaApi({
					sucesso: false,
					mensagem: "Já existe um partido com este nome",
				});
			}
		}

		const partidoAtualizado = new Partido({
			id: id,
			nome: nome,
			sigla: sigla,
			politicos: politicos,
			projetos: projetos,
		});

		const resultado = await atualizarService.executar(partidoAtualizado);

		if (resultado) {
			return new RespostaApi({
				sucesso: true,
				mensagem: "Partido atualizado com sucesso",
				dados: resultado,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Erro ao atualizar o partido",
			});
		}
	}
}
