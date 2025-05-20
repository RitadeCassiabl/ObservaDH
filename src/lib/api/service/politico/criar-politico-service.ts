import Politico from "@/domain/models/politico";
import { prismaClient } from "@/services/prisma/prisma";

export class CriarPolitcoService {
	async executar({ politico }: { politico: Politico }) {
		const prisma = prismaClient;

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const data: any = {
			nome: politico.nome,
			foto: politico.foto ?? undefined,
			genero: politico.genero,
			raca: politico.raca,
			religiao: politico.religiao,
			ideologia: politico.ideologia,
			estadoId: politico.estadoId,
			partidoId: politico.partidoId,
			esferaId: politico.esferaId,
			projetos: {
				connect: politico.projetos?.map((projeto) => ({ id: projeto })) ?? [],
			},
		};

		if (politico.profissaoId !== undefined) {
			data.profissaoId = politico.profissaoId;
		}

		const resposta = await prisma.politico.create({
			data: {
				...data,
			},
		});

		return resposta;
	}
}
