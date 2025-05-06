import { prismaClient } from '@/services/prisma/prisma';

export class DeletarEsferaService {
    async executar(id: string) {
        const prisma = prismaClient;

        const resposta = await prisma.esfera.delete({
            where: {
                id: id
            }
        })
        return resposta;
    }
}