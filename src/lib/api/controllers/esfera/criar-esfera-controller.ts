import { ZodError } from "zod";

import { BuscarEsferaService } from "../../service/esfera/buscar-esfera-service";
import { CriarEsferaService } from "../../service/esfera/criar-esfera-service";

import {
	CreateEsferaSchema,
	SearchEsferaDTO,
} from "./../../../../dtos/esfera.dto";

import { RespostaApi } from "@/domain/models/resposta-api";
import { CreateEsferaDTO, ResponseEsferaDTO } from "@/dtos/esfera.dto";

interface IBuscarEsferaService {
	buscarPorNome(params: SearchEsferaDTO): Promise<ResponseEsferaDTO | null>;
}
interface ICriarEsferaService {
	executar(params: CreateEsferaDTO): Promise<ResponseEsferaDTO>;
}
export class CriarEsferaController {
	private readonly criarEsferaService: ICriarEsferaService;
	private readonly buscarEsferaService: IBuscarEsferaService;

	constructor(
		criarEsferaService?: ICriarEsferaService,
		buscarEsferaService?: IBuscarEsferaService
	) {
		this.criarEsferaService = criarEsferaService || new CriarEsferaService();
		this.buscarEsferaService = buscarEsferaService || new BuscarEsferaService();
	}

	async executar(params: CreateEsferaDTO): Promise<RespostaApi> {
		try {
			const dados = CreateEsferaSchema.parse(params);

			if (!dados) {
				return new RespostaApi({
					sucesso: false,
					mensagem: "Estão faltando informações para criar a esfera",
				});
			}

			const esferaExiste = await this.buscarEsferaService.buscarPorNome({
				nome: dados.nome,
			});

			if (esferaExiste) {
				return new RespostaApi({
					sucesso: false,
					mensagem: "A esfera já existe",
				});
			}

			const resposta = await this.criarEsferaService.executar({
				nome: dados.nome,
			});

			return new RespostaApi({
				sucesso: true,
				mensagem: "A esfera foi criada com sucesso",
				dados: resposta,
			});
		} catch (error: unknown) {
			if (error instanceof ZodError) {
				return new RespostaApi({
					sucesso: false,
					mensagem: "Houve um problema na criação da esfera",
					dados: error,
				});
			}

			return new RespostaApi({
				sucesso: false,
				mensagem: "Houve um problema na criação da esfera",
				dados: process.env.NODE_ENV === "development" ? error : undefined,
			});
		}
	}
}
