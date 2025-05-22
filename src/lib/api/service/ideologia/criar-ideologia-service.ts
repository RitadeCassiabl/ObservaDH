import { Prisma } from "@prisma/client";

import { CreateIdeologiaDTO, ResponseIdeologiaDTO } from "@/dtos/ideologia.dto";
import { prismaClient } from "@/services/prisma/prisma";

interface ICriarIdeologiaService {
	executar(params: CreateIdeologiaDTO): Promise<ResponseIdeologiaDTO>;
}

export class CriarIdeologiaService implements ICriarIdeologiaService {
	private readonly prisma = prismaClient;

	async executar({
		nome,
		descricao,
		sigla,
	}: CreateIdeologiaDTO): Promise<ResponseIdeologiaDTO> {
		try {
			const ideologia = await this.prisma.ideologia.create({
				data: {
					nome,
					descricao,
					sigla,
					projetos: {}, // Relação many-to-many não criada diretamente aqui
				},
				select: {
					id: true,
					nome: true,
					descricao: true,
					sigla: true,
				},
			});

			return {
				id: ideologia.id,
				nome: ideologia.nome,
				descricao: ideologia.descricao,
				sigla: ideologia.sigla,
			};
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				// P2002: Unique constraint failed - Nome and Sigla are not unique in schema
				// P2003: Foreign key constraint failed (not applicable here)
			}

			throw error;
		}
	}
}
