import { AtualizarEstadoService } from "../../service/estado/atualizar-estado-service";
import { BuscarEstadoService } from "../../service/estado/buscar-estado-service";

import { Estado } from "@/domain/models/estado";
import { RespostaApi } from "@/domain/models/resposta-api";
import {
	EstadoResponseDto,
	UpdateEstadoDto,
	UpdateEstadoSchema,
} from "@/dtos/estado.dto";

interface IBuscarEstadoService {
	buscarPorId(params: { id: string }): Promise<EstadoResponseDto | null>;
	buscarPorNome(params: { nome: string }): Promise<EstadoResponseDto | null>;
	buscarPorSigla(params: { sigla: string }): Promise<EstadoResponseDto | null>;
}

interface IAtualizarEstadoService {
	executar(params: { estado: Estado }): Promise<EstadoResponseDto>;
}

export class AtualizarEstadoController {
	private readonly buscarEstadoService: IBuscarEstadoService;
	private readonly atualizarEstadoService: IAtualizarEstadoService;

	constructor(
		buscarEstadoService?: IBuscarEstadoService,
		atualizarEstadoService?: IAtualizarEstadoService
	) {
		this.buscarEstadoService = buscarEstadoService || new BuscarEstadoService();
		this.atualizarEstadoService =
			atualizarEstadoService || new AtualizarEstadoService();
	}

	async executar(params: UpdateEstadoDto): Promise<RespostaApi> {
		try {
			let dadosValidados: UpdateEstadoDto;
			try {
				dadosValidados = UpdateEstadoSchema.parse({
					id: params.id,
					nome: params.nome,
					sigla: params.sigla,
				});
			} catch (error) {
				return new RespostaApi({
					sucesso: false,
					mensagem: "Dados para atualização do estado são inválidos",
					dados: error,
				});
			}

			const { id, nome, sigla } = dadosValidados;

			if (!id || (!nome && !sigla)) {
				return new RespostaApi({
					sucesso: false,
					mensagem:
						"É necessário fornecer pelo menos um campo para atualização",
				});
			}

			const estadoExistente = await this.buscarEstadoService.buscarPorId({
				id,
			});

			if (!estadoExistente) {
				return new RespostaApi({
					sucesso: false,
					mensagem: "O estado não foi encontrado",
				});
			}

			if (nome && nome !== estadoExistente.nome) {
				const estadoComMesmoNome = await this.buscarEstadoService.buscarPorNome(
					{ nome }
				);
				if (estadoComMesmoNome && estadoComMesmoNome.id !== id) {
					return new RespostaApi({
						sucesso: false,
						mensagem: "Já existe outro estado com este nome",
					});
				}
			}

			if (sigla && sigla !== estadoExistente.sigla) {
				const estadoComMesmaSigla =
					await this.buscarEstadoService.buscarPorSigla({ sigla });
				if (estadoComMesmaSigla && estadoComMesmaSigla.id !== id) {
					return new RespostaApi({
						sucesso: false,
						mensagem: "Já existe outro estado com esta sigla",
					});
				}
			}

			const estadoAtualizado = new Estado({
				id,
				nome: nome || estadoExistente.nome,
				sigla: sigla || estadoExistente.sigla,
			});

			const estadoAtualizadoResult = await this.atualizarEstadoService.executar(
				{
					estado: estadoAtualizado,
				}
			);

			const resultado: EstadoResponseDto = {
				id: estadoAtualizadoResult.id ?? "",
				nome: estadoAtualizadoResult.nome,
				sigla: estadoAtualizadoResult.sigla,
			};

			if (resultado.id) {
				return new RespostaApi({
					sucesso: true,
					mensagem: "O estado foi atualizado com sucesso",
					dados: resultado,
				});
			} else {
				throw new Error("Falha na operação de atualização: id indefinido");
			}
		} catch (error) {
			console.error("Erro ao atualizar estado:", error);

			return new RespostaApi({
				sucesso: false,
				mensagem: "Ocorreu um erro durante a atualização do estado",
				dados: process.env.NODE_ENV === "development" ? error : undefined,
			});
		}
	}
}
