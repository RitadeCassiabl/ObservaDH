import { prismaClient } from "@/services/prisma/prisma";

export class BuscarDireitoVioladoService {
	async buscarPorId({ id }: { id: string }) {
		const prisma = prismaClient;

		const resposta = await prisma.direitoViolado.findUnique({
			where: {
				id: id,
			},
		});

		return resposta;
	}

	async buscarPorNome({ nome }: { nome: string }) {
		const prisma = prismaClient;

		const resposta = await prisma.direitoViolado.findFirst({
			where: {
				nome: nome,
			},
		});

		return resposta;
	}
}
