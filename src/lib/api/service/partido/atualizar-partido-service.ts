import { Partido } from "@/domain/models/partido";
import { prismaClient } from "@/services/prisma/prisma";

export class AtualizarPartidoService {
	async executar({ partido }: { partido: Partido }) {
		const prisma = prismaClient;

		const resposta = await prisma.partido.update({
			where: {
				id: partido.id,
			},
			data: {
				nome: partido.nome,
				sigla: partido.sigla,
				imagem: partido.imagem,
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
