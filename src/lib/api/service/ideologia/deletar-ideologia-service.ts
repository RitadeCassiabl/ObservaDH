import { prismaClient } from '@/services/prisma/prisma';

export class DeletarIdeologiaService {
    async executar(id: string) {
        const prisma = prismaClient;

        const resposta = await prisma.ideologia.delete({
            where: {
                id: id,
            },
        });
        return resposta;
    }
}