import { ResponseEstadoDto, SearchEstadoDto } from "@/dtos/estado.dto";
import { prismaClient } from "@/services/prisma/prisma";

export interface IBuscarEstadoService {
	buscarPorId(
		params: Pick<SearchEstadoDto, "id">
	): Promise<ResponseEstadoDto | null>;
	buscarPorNome(
		params: Pick<SearchEstadoDto, "nome">
	): Promise<ResponseEstadoDto | null>;
	buscarPorSigla(
		params: Pick<SearchEstadoDto, "sigla">
	): Promise<ResponseEstadoDto | null>;
}

export class BuscarEstadoService implements IBuscarEstadoService {
	constructor(private readonly prisma = prismaClient) {}

	async buscarPorId({
		id,
	}: Pick<SearchEstadoDto, "id">): Promise<ResponseEstadoDto | null> {
		if (!id) return null;

		const estadoData = await this.prisma.estado.findUnique({
			where: { id },
			include: {
				politicos: true,
			},
		});
		return estadoData;
	}

	async buscarPorNome({
		nome,
	}: Pick<SearchEstadoDto, "nome">): Promise<ResponseEstadoDto | null> {
		if (!nome) return null;

		const estadoData = await this.prisma.estado.findFirst({
			where: { nome },
			include: {
				politicos: true,
			},
		});
		return estadoData;
	}

	async buscarPorSigla({
		sigla,
	}: Pick<SearchEstadoDto, "sigla">): Promise<ResponseEstadoDto | null> {
		if (!sigla) return null;

		const estadoData = await this.prisma.estado.findFirst({
			where: { sigla },
			include: {
				politicos: true,
			},
		});
		return estadoData;
	}
}
