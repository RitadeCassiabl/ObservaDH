import { AtualizarEsferaService } from "../../service/esfera/atualizar-esfera-service";
import { BuscarEsferaService } from "../../service/esfera/buscar-esfera-service";

import { Esfera } from "@/domain/models/esfera";
import { RespostaApi } from "@/domain/models/resposta-api";
import {
	ResponseEsferaDTO,
	UpdateEsferaDTO,
	UpdateEsferaSchema,
} from "@/dtos/esfera.dto";

interface IBuscarEsferaService {
	buscarPorId(params: { id: string }): Promise<ResponseEsferaDTO | null>;
	buscarPorNome(params: { nome: string }): Promise<ResponseEsferaDTO | null>;
}

interface IAtualizarEsferaService {
	executar(params: { esfera: Esfera }): Promise<ResponseEsferaDTO>;
}
export class AtualizarEsferaController {
	private readonly buscarEsferaService: IBuscarEsferaService;
	private readonly atualizarEsferaService: IAtualizarEsferaService;
	constructor(
		buscarEsferaService?: IBuscarEsferaService,
		atualizarEsferaService?: IAtualizarEsferaService
	) {
		this.buscarEsferaService = buscarEsferaService || new BuscarEsferaService();
		this.atualizarEsferaService =
			atualizarEsferaService || new AtualizarEsferaService();
	}

	async executar(params: UpdateEsferaDTO): Promise<RespostaApi> {
		try {
			let dadosValidados: UpdateEsferaDTO;
			try {
				dadosValidados = UpdateEsferaSchema.parse({
					id: params.id,
					nome: params.nome,
				});
			} catch (error) {
				return new RespostaApi({
					sucesso: false,
					mensagem: "Dados inválidos",
					dados: error,
				});
			}
			const { id, nome } = dadosValidados;

			if (!id || !nome) {
				return new RespostaApi({
					sucesso: false,
					mensagem: "Estão faltando informações para a alteração da esfera",
				});
			}

			const esferaExiste = await this.buscarEsferaService.buscarPorId({ id });

			if (!esferaExiste) {
				return new RespostaApi({
					sucesso: false,
					mensagem: "A esfera não foi encontrada",
				});
			}

			if (nome && nome === esferaExiste.nome) {
				const esferaComMesmoNome = await this.buscarEsferaService.buscarPorNome(
					{
						nome,
					}
				);
				if (esferaComMesmoNome) {
					return new RespostaApi({
						sucesso: false,
						mensagem: "A nova esfera já existe",
					});
				}
			}
			const esferaAtualizada = new Esfera({
				id: esferaExiste.id,
				nome: nome || esferaExiste.nome,
			});

			const esferaAtualizadaResult = await this.atualizarEsferaService.executar(
				{
					esfera: esferaAtualizada,
				}
			);

			if (esferaAtualizadaResult) {
				return new RespostaApi({
					sucesso: true,
					mensagem: "A esfera foi atualizada com sucesso",
					dados: esferaAtualizada,
				});
			}
		} catch (error) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Erro ao validar os dados",
				dados: error,
			});
		}

		return new RespostaApi({
			sucesso: false,
			mensagem: "Não foi possível atualizar a esfera",
		});
	}
}
