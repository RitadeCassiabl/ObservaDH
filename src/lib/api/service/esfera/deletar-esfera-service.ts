import { DeleteEsferaDto, ResponseDeleteEsferaDto } from "@/dtos/esfera.dto";
import { prismaClient } from "@/services/prisma/prisma";

export class DeletarEsferaService {
	private readonly prisma = prismaClient;

	async executar({ id }: DeleteEsferaDto): Promise<ResponseDeleteEsferaDto> {
		try {
			if (!id || typeof id !== "string") {
				throw new Error("ID inválido para deleção");
			}

			await this.prisma.esfera.delete({
				where: { id },
			});

			return { sucesso: true };
		} catch (error) {
			console.error("Erro ao deletar esfera:", error);
			if (typeof error === "object" && error !== null && "code" in error) {
				const prismaError = error as { code?: string };
				if (prismaError.code === "P2025") {
					throw new Error(`Esfera com ID ${id} não encontrada`);
				}
				if (prismaError.code === "P2003") {
					throw new Error(
						`Não é possível deletar a esfera pois existem registros relacionados`
					);
				}
			}
			return { sucesso: false };
		}
	}
}
