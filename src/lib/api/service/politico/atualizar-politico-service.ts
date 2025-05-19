import { prismaClient } from "@/services/prisma/prisma";
import Politico from "@/types/politico";
export class AtualizarPoliticoService {
	async executar({ politico }: { politico: Politico }) {
		const prisma = prismaClient;

		const resposta = prisma.politico.update({
			where: {
				id: politico.id,
			},

			data: {
				nome: politico.nome,
				genero: politico.genero,
				raca: politico.raca,
				religiao: politico.religiao,
				estadoId: politico.estadoId,
				ideologia: politico.ideologia,
				partidoId: politico.partidoId,
				foto: politico.foto ?? undefined,
				profissaoId: politico.profissaoId,
				projetos: {
					connect: politico.projetos?.map((projeto) => ({ id: projeto })) ?? [],
				},
			},
		});
		return resposta;
	}
}
