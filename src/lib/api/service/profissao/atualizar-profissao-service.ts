import { Profissao } from "@/domain/models/profissao";
import { prismaClient } from "@/services/prisma/prisma";

export class AtualizarProfissaoService {
	async executar({ profissao }: { profissao: Profissao }) {
		const prisma = prismaClient;
		const resposta = prisma.profissao.update({
			data: {
				politicos: {
					connect: profissao.politicos?.map((politico) => ({
						id: politico,
					})),
				},
				nome: profissao.nome,
			},
			where: {
				id: profissao.id,
			},
		});
		return resposta;
	}
}
