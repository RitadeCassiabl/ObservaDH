import Politico from "@/domain/models/politico";
import { prismaClient } from "@/services/prisma/prisma";

export class CriarPolitcoService {
	async executar({ politico }: { politico: Politico }) {
		const prisma = prismaClient;

		const resposta = await prisma.politico.create({
			data: {
				nome: politico.nome,
				foto: politico.foto ?? undefined,
				genero: politico.genero,
				raca: politico.raca,
				religiao: politico.religiao,
				ideologia: politico.ideologia,
				estadoId: politico.estadoId,
				partidoId: politico.partidoId,
				profissaoId: politico.profissaoId,
				projetos: {
					connect: politico.projetos?.map((projeto) => ({ id: projeto })) ?? [],
				},
			},
		});

		return resposta;
	}
}
