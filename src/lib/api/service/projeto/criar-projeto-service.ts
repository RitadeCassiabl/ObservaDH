import { Projeto } from "@/domain/models/projeto";
import { prismaClient } from "@/services/prisma/prisma";

export class CriarProjetoService {
	async executar({ projeto }: { projeto: Projeto }) {
		const prisma = prismaClient;

		const resposta = await prisma.projeto.create({
			data: {
				ano: projeto.ano,
				ementa: projeto.ementa,
				pautaId: projeto.pautaId,
				esferaId: projeto.esferaId,
				numeroPl: projeto.numeroPl,
				justificativa: projeto.justificativa,

				autores: {
					create: [],
				},

				partidos: {
					create: [],
				},

				ideologias: {
					create: [],
				},

				direitosViolados: {
					create: [],
				},
			},
		});

		return resposta;
	}
}
