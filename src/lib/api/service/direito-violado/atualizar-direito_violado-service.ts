import { DireitoViolado } from "@/domain/models/direito-violado";
import { prismaClient } from "@/services/prisma/prisma";

export class AtualizarDireitoVioladoService {
	async executar({ direitoViolado }: { direitoViolado: DireitoViolado }) {
		const prisma = prismaClient;

		const resposta = await prisma.direitoViolado.update({
			where: {
				id: direitoViolado.id,
			},
			data: {
				nome: direitoViolado.nome,
				sigla: direitoViolado.sigla,
				descricao: direitoViolado.descricao,
				projetos: {
					connect: direitoViolado.projetos?.map((direito) => ({
						id: direito,
					})),
				},
			},
		});
		return resposta;
	}
}
