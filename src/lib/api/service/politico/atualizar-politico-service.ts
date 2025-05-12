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
				sexo: politico.sexo,
				raca: politico.raca,

				dataNascimento: nascimento,
				religiao: politico.religiao,
				estadoId: politico.estadoId,
				ideologia: politico.ideologia,
				partidoId: politico.partidoId,
				foto: politico.foto ?? undefined,
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
