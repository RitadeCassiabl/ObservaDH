import { ResponseEsferaDto } from "@/dtos/esfera.dto";
import { prismaClient } from "@/services/prisma/prisma";

export interface IListarEsferaService {
	executar(): Promise<ResponseEsferaDto[]>;
}
export class ListarEsferaService implements IListarEsferaService {
	constructor(private readonly prisma = prismaClient) {}
	async executar(): Promise<ResponseEsferaDto[]> {
		const resposta = await this.prisma.esfera.findMany({});
		return resposta.map((esfera) => ({
			id: esfera.id,
			nome: esfera.nome,
		}));
	}
}
