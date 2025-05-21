import { ResponseEstadoDto } from "@/dtos/estado.dto";
import { prismaClient } from "@/services/prisma/prisma";

export interface IListarEstadoService {
	executar(): Promise<ResponseEstadoDto[]>;
}

export class ListarEstadoService implements IListarEstadoService {
	constructor(private readonly prisma = prismaClient) {}

	async executar(): Promise<ResponseEstadoDto[]> {
		const estados = await this.prisma.estado.findMany({
			include: {
				politicos: true,
			},
		});
		return estados.map((estado) => ({
			id: estado.id,
			nome: estado.nome,
			sigla: estado.sigla,
			politico: estado.politicos,
		}));
	}
}
