import { prismaClient } from "@/services/prisma/prisma";

export class DeletarPartidoService {
	async executar(id: string) {
		const prisma = prismaClient;

		const resposta = prisma.partido.delete({
			where: {
				id: id,
			},
		});
		return resposta;
	}
}
