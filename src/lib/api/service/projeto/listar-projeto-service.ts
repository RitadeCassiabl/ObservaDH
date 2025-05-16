import { prismaClient } from "@/services/prisma/prisma";

export class ListarProjetoService {
	async executar() {
		const prisma = prismaClient;

		const resposta = await prisma.projeto.findMany({});

		return resposta;
	}
}
