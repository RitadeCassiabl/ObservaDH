import { prismaClient } from "@/services/prisma/prisma";

export class AtualizarProfissaoService {
	async executar(id: string, nome: string) {
		const prisma = prismaClient;
		const resposta = prisma.profissao.update({
			data: {
				nome: nome,
			},
			where: {
				id: id,
			},
		});
		return resposta;
	}
}
