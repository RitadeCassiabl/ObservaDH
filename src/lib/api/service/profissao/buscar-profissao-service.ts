import { prismaClient } from "@/services/prisma/prisma";

export class BuscarProfissaoService {
	async buscarPorNome({ nome }: { nome: string }) {
		const prisma = prismaClient;

		const resposta = await prisma.profissao.findUnique({
			where: {
				nome: nome,
			},
		});
		return resposta;
	}
	async buscarPorId(id: string) {
		const prisma = prismaClient;

		const resposta = await prisma.profissao.findUnique({
			where: {
				id: id,
			},
		});
		return resposta;
	}
}
