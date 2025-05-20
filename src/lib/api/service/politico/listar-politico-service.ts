import { prismaClient } from "@/services/prisma/prisma";

export class ListarPoliticoService {
	async executar() {
		const prisma = prismaClient;

		const resposta = await prisma.politico.findMany({
			include: {
				partido: true,
				estado: true,
				profissao: true,
				projetos: true,
			},
		});

		return resposta;
	}
}
