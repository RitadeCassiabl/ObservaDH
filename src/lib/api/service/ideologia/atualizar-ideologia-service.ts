import { Ideologia } from "@/domain/models/ideologia";
import { prismaClient } from "@/services/prisma/prisma";
export class AtualizarIdeologiaService {
	async executar({ ideologia }: { ideologia: Ideologia }) {
		const prisma = prismaClient;

		const resposta = await prisma.ideologia.update({
			where: {
				id: ideologia.id,
			},
			data: {
				nome: ideologia.nome,
				descricao: ideologia.descricao,
				sigla: ideologia.sigla,
			},
		});
		return resposta;
	}
}
