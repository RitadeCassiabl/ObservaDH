import { SearchEstadoDto } from "@/dtos/estado.dto";
import { prismaClient } from "@/services/prisma/prisma";

export class BuscarEstadoService {
	async buscarPorId({ id }: SearchEstadoDto) {
		const prisma = prismaClient;

		const resposta = await prisma.estado.findUnique({
			where: {
				id: id,
			},
		});

		return resposta;
	}

	async buscarPorNome({ nome }: SearchEstadoDto) {
		const prisma = prismaClient;

		const resposta = await prisma.estado.findFirst({
			where: {
				nome: nome,
			},
		});
		return resposta;
	}

	async buscarPorSigla({ sigla }: SearchEstadoDto) {
		const prisma = prismaClient;

		const resposta = await prisma.estado.findFirst({
			where: {
				sigla: sigla,
			},
		});
		return resposta;
	}
}
