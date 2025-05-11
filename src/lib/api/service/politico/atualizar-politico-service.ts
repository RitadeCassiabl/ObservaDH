import { prismaClient } from "@/services/prisma/prisma";
import Politico from "@/types/politico";
export class AtualizarPoliticoService {
	async executar(politico: Politico) {
		const prisma = prismaClient;

		const nascimento = new Date(politico.dataNascimento);

		const resposta = prisma.politico.update({
			where: {
				id: politico.id,
			},

			data: {
				nome: politico.nome,
				foto: politico.foto ?? undefined,
				sexo: politico.sexo,
				raca: politico.raca,
				religiao: politico.religiao,
				ideologia: politico.ideologia,
				dataNascimento: nascimento,
				partidoId: politico.partidoId,
				estadoId: politico.estadoId,
				profissoes: {
					connect:
						politico.profissoes?.map((profissao) => ({ id: profissao })) ?? [],
				},
				projetos: {
					connect: politico.projetos?.map((projeto) => ({ id: projeto })) ?? [],
				},
			},
		});
		return resposta;
	}
}
