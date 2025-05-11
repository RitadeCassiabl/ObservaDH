import { prismaClient } from "@/services/prisma/prisma";
import { Partido } from "@/domain/models/partido";

export class CriarPartidoService {
	async executar(partido: Partido) {
		const prisma = prismaClient;

		const resposta = await prisma.partido.create({
			data: {
				nome: partido.nome,
				sigla: partido.sigla,

				projetos: {
					create: [],
				},
				politicos: {
					create: [],
				},
			},
		});

		return resposta;
	}
}
