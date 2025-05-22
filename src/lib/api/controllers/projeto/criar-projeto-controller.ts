import { BuscarProjetoService } from "../../service/projeto/buscar-projeto-service";
import { CriarProjetoService } from "../../service/projeto/criar-projeto-service";

import { RespostaApi } from "@/domain/models/resposta-api";
import { CreateProjetoDTO, ResponseProjetoDTO } from "@/dtos/projeto.dto";

interface IBuscarProjetoService {
	buscarPorNumeroPl(params: {
		numeroPl: string;
	}): Promise<ResponseProjetoDTO | null>;
}

interface ICriarProjetoService {
	executar(params: CreateProjetoDTO): Promise<ResponseProjetoDTO>;
}

export class CriarProjetoController {
	private readonly buscarProjetoService: IBuscarProjetoService;
	private readonly criarProjetoService: ICriarProjetoService;

	constructor(
		buscarProjetoService?: IBuscarProjetoService,
		criarProjetoService?: ICriarProjetoService
	) {
		this.buscarProjetoService =
			buscarProjetoService || new BuscarProjetoService();
		this.criarProjetoService = criarProjetoService || new CriarProjetoService();
	}

	async executar(params: CreateProjetoDTO): Promise<RespostaApi> {
		try {
			const { ano, ementa, pautaId, esferaId, numeroPl, justificativa } =
				params;

			if (
				!ano ||
				!ementa ||
				!pautaId ||
				!esferaId ||
				!numeroPl ||
				!justificativa
			) {
				return new RespostaApi({
					sucesso: false,
					mensagem: "Faltam informações obrigatórias para criar o projeto",
				});
			}

			const projetoExiste = await this.buscarProjetoService.buscarPorNumeroPl({
				numeroPl,
			});

			if (projetoExiste) {
				return new RespostaApi({
					sucesso: false,
					mensagem: `Já existe um projeto com o número PL '${numeroPl}'`,
				});
			}

			const projetoCriado = await this.criarProjetoService.executar(params);

			return new RespostaApi({
				sucesso: true,
				mensagem: "O projeto foi criado com sucesso",
				dados: projetoCriado,
			});
		} catch (error: unknown) {
			const errorMessage =
				error instanceof Error
					? error.message
					: "Houve um problema na criação do projeto";

			return new RespostaApi({
				sucesso: false,
				mensagem: errorMessage,
				dados: process.env.NODE_ENV === "development" ? error : undefined,
			});
		}
	}
}
