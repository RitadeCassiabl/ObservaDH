import { prismaClient } from "@/services/prisma/prisma";
export class AtualizarIdeologiaService {
	async executar(id: string, nome: string) {
		const prisma = prismaClient;

		const resposta = await prisma.ideologia.update({
			where: {
				id: id,
			},
			data: {
				nome: nome,
			},
		});
		return resposta;
	}
}
