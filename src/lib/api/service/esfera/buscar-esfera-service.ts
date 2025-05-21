import { ResponseEsferaDTO, SearchEsferaDTO } from "@/dtos/esfera.dto";
import { prismaClient } from "@/services/prisma/prisma";

interface IBuscarEsferaService {
	buscarPorId(
		params: Pick<SearchEsferaDTO, "id">
	): Promise<ResponseEsferaDTO | null>;
	buscarPorNome(
		params: Pick<SearchEsferaDTO, "nome">
	): Promise<ResponseEsferaDTO | null>;
}

export class BuscarEsferaService implements IBuscarEsferaService {
	constructor(private readonly prisma = prismaClient) {}
	async buscarPorId({
		id,
	}: Pick<SearchEsferaDTO, "id">): Promise<ResponseEsferaDTO | null> {
		if (!id) return null;

		const esferaData = await this.prisma.esfera.findUnique({
			where: {
				id: id,
			},
		});
		return esferaData ? (esferaData as ResponseEsferaDTO) : null;
	}

	async buscarPorNome({
		nome,
	}: Pick<SearchEsferaDTO, "nome">): Promise<ResponseEsferaDTO | null> {
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
