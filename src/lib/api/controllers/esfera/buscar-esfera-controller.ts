import { BuscarEsferaService } from "../../service/esfera/buscar-esfera-service";

import { RespostaApi } from "@/domain/models/resposta-api";

export interface IBuscarEsferaController {
	buscarPorId(id: string): Promise<RespostaApi>;
	buscarPorNome(nome: string): Promise<RespostaApi>;
}

export class BuscarEsferaController implements IBuscarEsferaController {
	constructor(
		private readonly buscarEsferaService: BuscarEsferaService = new BuscarEsferaService()
	) {}

	async buscarPorId(id: string): Promise<RespostaApi> {
		try {
			if (!id) {
				return new RespostaApi({
					sucesso: false,
					mensagem: "Estão faltando informações para a busca da esfera",
				});
			}

			const esfera = await this.buscarEsferaService.buscarPorId({ id });

			if (esfera) {
				return new RespostaApi({
					sucesso: true,
					mensagem: "A esfera foi encontrada com sucesso",
					dados: esfera,
				});
			} else {
				return new RespostaApi({
					sucesso: false,
					mensagem: "Nenhuma esfera foi encontrada",
				});
			}
		} catch (error) {
			console.error("Erro ao buscar esfera por ID:", error);
			return new RespostaApi({
				sucesso: false,
				mensagem: "Ocorreu um erro ao buscar a esfera",
				dados: process.env.NODE_ENV === "development" ? error : undefined,
			});
		}
	}

	async buscarPorNome(nome: string): Promise<RespostaApi> {
		try {
			if (!nome) {
				return new RespostaApi({
					sucesso: false,
					mensagem: "É necessário informar o nome da esfera",
				});
			}
			const esfera = await this.buscarEsferaService.buscarPorNome({ nome });
			if (esfera) {
				return new RespostaApi({
					sucesso: true,
					mensagem: "A esfera foi encontrada com sucesso",
					dados: esfera,
				});
			} else {
				return new RespostaApi({
					sucesso: false,
					mensagem: "Nenhuma esfera foi encontrada",
				});
			}
		} catch (error) {
			console.error("Erro ao buscar esfera por nome:", error);
			return new RespostaApi({
				sucesso: false,
				mensagem: "Ocorreu um erro ao buscar a esfera",
				dados: process.env.NODE_ENV === "development" ? error : undefined,
			});
		}
	}
}
