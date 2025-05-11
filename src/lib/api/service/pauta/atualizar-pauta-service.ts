import { prismaClient } from "@/services/prisma/prisma";

export class AtualizarPautaService {
	async executar(id: string, nome: string) {
		const prisma = prismaClient;

		const resposta = prisma.pauta.update({
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
