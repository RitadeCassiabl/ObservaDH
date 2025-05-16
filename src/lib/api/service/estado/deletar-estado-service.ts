import { prismaClient } from "@/services/prisma/prisma";

export class DeletarEstadoService {
	async executar(id: string) {
		const prisma = prismaClient;

		const resposta = await prisma.estado.delete({
			where: {
				id: id,
			},
		});
		return resposta;
	}
}
