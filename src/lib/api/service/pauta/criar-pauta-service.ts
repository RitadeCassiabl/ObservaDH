import { Pauta } from "@/domain/models/pauta";
import { prismaClient } from "@/services/prisma/prisma";

export class CriarPautaService {
	async executar(pauta: Pauta) {
		const prisma = prismaClient;

		const resposta = await prisma.pauta.create({
			data: {
				nome: pauta.nome,
				projetos: {
					create: [],
				},
			},
		});
		return resposta;
	}
}
