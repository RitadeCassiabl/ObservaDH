import { Esfera } from "@/domain/models/esfera";
import { ResponseEsferaDTO } from "@/dtos/esfera.dto";
import { prismaClient } from "@/services/prisma/prisma";
export class AtualizarEsferaService {
	private readonly prisma = prismaClient;
	async executar({ esfera }: { esfera: Esfera }): Promise<ResponseEsferaDTO> {
		try {
			if (!esfera || !esfera.id) {
				throw new Error("Dados inválidos para atualização da esfera");
			}
			const dadosAtualizacao: { nome?: string } = {};

			if (esfera.nome) {
				dadosAtualizacao.nome = esfera.nome;
			}
			if (Object.keys(dadosAtualizacao).length === 0) {
				throw new Error("Nenhum campo fornecido para atualização");
			}
			const esferaAtualizada = await this.prisma.esfera.update({
				where: {
					id: esfera.id,
				},
				data: dadosAtualizacao,
			});
			return {
				id: esferaAtualizada.id,
				nome: esferaAtualizada.nome,
			};
		} catch (error) {
			if (typeof error === "object" && error !== null && "code" in error) {
				const prismaError = error as {
					code: string;
					meta?: Record<string, unknown>;
				};
				if (prismaError.code === "P2025") {
					throw new Error(`Esfera com ID ${esfera.id} não encontrada`);
				}

				if (prismaError.code === "P2002") {
					throw new Error(`Já existe uma esfera com este nome`);
				}
			}

			console.error("Erro ao atualizar esfera:", error);

			throw error;
		}
	}
}
