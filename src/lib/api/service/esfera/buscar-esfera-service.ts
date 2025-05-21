import { ResponseEsferaDto, SearchEsferaDto } from "@/dtos/esfera.dto";
import { prismaClient } from "@/services/prisma/prisma";

interface IBuscarEsferaService {
	buscarPorId(
		params: Pick<SearchEsferaDto, "id">
	): Promise<ResponseEsferaDto | null>;
	buscarPorNome(
		params: Pick<SearchEsferaDto, "nome">
	): Promise<ResponseEsferaDto | null>;
}

export class BuscarEsferaService implements IBuscarEsferaService {
	constructor(private readonly prisma = prismaClient) {}
	async buscarPorId({
		id,
	}: Pick<SearchEsferaDto, "id">): Promise<ResponseEsferaDto | null> {
		if (!id) return null;

		const esferaData = await this.prisma.esfera.findUnique({
			where: {
				id: id,
			},
		});
		return esferaData ? (esferaData as ResponseEsferaDto) : null;
	}

	async buscarPorNome({
		nome,
	}: Pick<SearchEsferaDto, "nome">): Promise<ResponseEsferaDto | null> {
		if (!nome) return null;
		const esferaData = await this.prisma.esfera.findFirst({
			where: {
				nome: nome,
			},
			include: {
				politicos: true,
				projetos: true,
			},
		});
		return esferaData;
	}
}
