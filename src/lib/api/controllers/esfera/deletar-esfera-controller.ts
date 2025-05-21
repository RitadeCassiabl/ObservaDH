import { BuscarEsferaService } from "../../service/esfera/buscar-esfera-service";
import { DeletarEsferaService } from "../../service/esfera/deletar-esfera-service";

import { RespostaApi } from "@/domain/models/resposta-api";
import {
	DeleteEsferaDto,
	EsferaResponseDto,
	ResponseDeleteEsferaDto,
} from "@/dtos/esfera.dto";

interface IBuscarEsferaService {
	buscarPorId(params: { id: string }): Promise<EsferaResponseDto | null>;
	buscarPorNome(params: { nome: string }): Promise<EsferaResponseDto | null>;
}

interface IDeletarEsferaService {
	executar({ id }: DeleteEsferaDto): Promise<ResponseDeleteEsferaDto>;
}

export class DeletarEsferaController {
	private readonly buscarEsferaService: IBuscarEsferaService;
	private readonly deletarEsferaService: IDeletarEsferaService;

	constructor(
		buscarEsferaService?: IBuscarEsferaService,
		deletarEsferaService?: IDeletarEsferaService
	) {
		this.buscarEsferaService = buscarEsferaService || new BuscarEsferaService();
		this.deletarEsferaService =
			deletarEsferaService || new DeletarEsferaService();
	}
	async executar({ id }: DeleteEsferaDto): Promise<RespostaApi> {
		try {
			if (!id || id.trim() === "") {
				return new RespostaApi({
					sucesso: false,
					mensagem: "ID da esfera não fornecido ou inválido",
				});
			}

			const esferaExistente = await this.buscarEsferaService.buscarPorId({
				id: id,
			});

			if (!esferaExistente) {
				return new RespostaApi({
					sucesso: false,
					mensagem: "A esfera não foi encontrada",
				});
			}

			const esferaDeletada = await this.deletarEsferaService.executar({
				id: id,
			});

			if (esferaDeletada) {
				return new RespostaApi({
					sucesso: true,
					mensagem: "A esfera foi deletada com sucesso",
					dados: esferaDeletada,
				});
			} else {
				return new RespostaApi({
					sucesso: false,
					mensagem: "Erro ao deletar a esfera",
				});
			}
		} catch (error) {
			console.error("Erro ao deletar esfera:", error);
			return new RespostaApi({
				sucesso: false,
				mensagem: "Erro interno do servidor",
				dados: error,
			});
		}
	}
}
