import { prismaClient } from "@/services/prisma/prisma";

export class ListarEstadoService {
	async executar() {
		const prisma = prismaClient;

		const resposta = await prisma.estado.findMany({});

		return resposta;
	}
}
