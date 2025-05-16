import { prismaClient } from "@/services/prisma/prisma";

export class ListarPartidoService {
	async executar() {
		const prisma = prismaClient;

		const resposta = await prisma.partido.findMany();

		return resposta;
	}
}
