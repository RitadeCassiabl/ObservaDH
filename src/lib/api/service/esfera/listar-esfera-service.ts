import { ResponseEsferaDTO } from "@/dtos/esfera.dto";
import { prismaClient } from "@/services/prisma/prisma";

export interface IListarEsferaService {
	executar(): Promise<ResponseEsferaDTO[]>;
}
export class ListarEsferaService implements IListarEsferaService {
	constructor(private readonly prisma = prismaClient) {}
	async executar(): Promise<ResponseEsferaDTO[]> {
		const resposta = await this.prisma.esfera.findMany({});
		return resposta.map((esfera) => ({
			id: esfera.id,
			nome: esfera.nome,
		}));
	}
}
