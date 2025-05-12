import { prismaClient } from "@/services/prisma/prisma";

export class DeletarProjetoService {
	async executar(id: string) {
		const prisma = prismaClient;

		const resposta = await prisma.projeto.delete({
			where: {
				id: id,
			},
		});
		return resposta;
	}
}
