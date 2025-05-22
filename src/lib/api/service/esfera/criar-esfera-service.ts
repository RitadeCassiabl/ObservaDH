import { Prisma } from "@prisma/client";

import { CreateEsferaDTO, ResponseEsferaDTO } from "@/dtos/esfera.dto";
import { prismaClient } from "@/services/prisma/prisma";

interface ICriarEsferaService {
	executar(params: CreateEsferaDTO): Promise<ResponseEsferaDTO>;
}

export class CriarEsferaService implements ICriarEsferaService {
	private readonly prisma = prismaClient;

	async executar({ nome }: CreateEsferaDTO): Promise<ResponseEsferaDTO> {
		try {
			const esfera = await this.prisma.esfera.create({
				data: {
					nome,
					politicos: {}, // Relação one-to-many através do Politico
					projetos: {}, // Relação one-to-many através do Projeto
				},
				select: {
					id: true,
					nome: true,
				},
			});

			return {
				id: esfera.id,
				nome: esfera.nome,
			};
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				// P2002: Unique constraint failed - Nome is not unique in schema
				// P2003: Foreign key constraint failed (not applicable here)
			}

			throw error;
		}
	}
}
