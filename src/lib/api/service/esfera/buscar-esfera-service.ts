import { ResponseEsferaDTO, SearchEsferaDTO } from "@/dtos/esfera.dto";
import { prismaClient } from "@/services/prisma/prisma";

export interface IBuscarEsferaService {
	buscarPorId(
		params: Pick<SearchEsferaDTO, "id">
	): Promise<ResponseEsferaDTO | null>;
	// Nome is not unique in schema, no specific service method for unique lookup by name
}

export class BuscarEsferaService implements IBuscarEsferaService {
	constructor(private readonly prisma = prismaClient) {}

	async buscarPorId({
		id,
	}: Pick<SearchEsferaDTO, "id">): Promise<ResponseEsferaDTO | null> {
		if (!id) return null;

		const esferaData = await this.prisma.esfera.findUnique({
			where: { id },
			include: {
				politicos: true,
				projetos: true,
			},
		});

		if (!esferaData) return null;

		return {
			id: esferaData.id,
			nome: esferaData.nome,
			politicos: esferaData.politicos,
			projetos: esferaData.projetos,
		};
	}
}
