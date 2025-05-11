import { prismaClient } from "@/services/prisma/prisma";
import { Partido } from "@/domain/models/partido";

export class AtualizarPartidoService {
	async executar(partido: Partido) {
		const prisma = prismaClient;

		const resposta = await prisma.partido.update({
			where: {
				id: partido.id,
			},
			data: {
				nome: partido.nome,
				sigla: partido.sigla,

				projetos: {
					connect: partido.projetos?.map((projeto) => ({ id: projeto })) || [],
				},
				politicos: {
					connect:
						partido.politicos?.map((politico) => ({ id: politico })) || [],
				},
			},
		});

		return resposta;
	}
}
