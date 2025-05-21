import { Prisma } from "@prisma/client";

import { CreateEsferaDto, ResponseEsferaDto } from "@/dtos/esfera.dto";
import { prismaClient } from "@/services/prisma/prisma";
export class CriarEsferaService {
	private readonly prisma = prismaClient;

	async executar({ nome }: CreateEsferaDto): Promise<ResponseEsferaDto> {
		try {
			const esfera = await this.prisma.esfera.create({
				data: {
					nome: nome,
					projetos: {
						create: [],
					},
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
				if (error.code === "P2002") {
					throw new Error(
						`Já existe um estado com essas informações: ${error.meta?.target}`
					);
				}
			}
			throw error;
		}
	}
}
