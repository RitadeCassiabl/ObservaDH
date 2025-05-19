import { Estado } from "@/domain/models/estado";
import { prismaClient } from "@/services/prisma/prisma";
export class AtualizarEstadoService {
	async executar({ estado }: { estado: Estado }) {
		const prisma = prismaClient;

		const resposta = await prisma.estado.update({
			where: {
				id: estado.id,
			},
			data: {
				sigla: estado.sigla,
				nome: estado.nome,
			},
		});
		return resposta;
	}
}
