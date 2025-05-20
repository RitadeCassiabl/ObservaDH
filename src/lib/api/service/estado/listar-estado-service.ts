import { EstadoResponseDto } from "@/dtos/estado.dto";
import { prismaClient } from "@/services/prisma/prisma";
import { Estado } from "@prisma/client";

export interface IListarEstadoService {
	executar(): Promise<EstadoResponseDto[]>;
}

export class ListarEstadoService implements IListarEstadoService {
	constructor(private readonly prisma = prismaClient) { }

	async executar(): Promise<EstadoResponseDto[]> {
		const estados = await this.prisma.estado.findMany({});
		return estados.map(estado => ({
			id: estado.id,
			nome: estado.nome,
			sigla: estado.sigla,
		}));
	}
}
