import { prismaClient } from "@/services/prisma/prisma";

export class BuscarEstadoService {
	async buscarPorId(id: string) {
		const prisma = prismaClient;

		const resposta = await prisma.estado.findUnique({
			where: {
				id: id,
			},
		});

		return resposta;
	}

	async buscarPorNome(nome: string) {
		const prisma = prismaClient;

		const resposta = await prisma.estado.findFirst({
			where: {
				nome: nome,
			},
		});
		return resposta;
	}
}
