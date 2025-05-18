import { DireitoViolado } from "@/domain/models/direito-violado";
import { prismaClient } from "@/services/prisma/prisma";

export class CriarDireitoVioladoService {
	async executar({ direitoViolado }: { direitoViolado: DireitoViolado }) {
		const prisma = prismaClient;

		const resposta = await prisma.direitoViolado.create({
			data: {
				nome: direitoViolado.nome,
				sigla: direitoViolado.sigla,
				descricao: direitoViolado.descricao,
				projetos: {
					connect: direitoViolado.projetos?.map((id: string) => ({ id })) ?? [],
				},
			},
		});
		return resposta;
	}
}
