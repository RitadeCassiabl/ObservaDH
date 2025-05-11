import { prismaClient } from "@/services/prisma/prisma";

export class DeletarDireitoVioladoService {
	async executar(id: string) {
		const prisma = prismaClient;

		const resposta = await prisma.direitoViolado.delete({
			where: {
				id: id,
			},
		});
		return resposta;
	}
}
