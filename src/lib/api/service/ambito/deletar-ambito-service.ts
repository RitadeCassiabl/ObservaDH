import { prismaClient } from '@/services/prisma/prisma';

export class DeletarAmbitoService {
    async executar(id: string) {
        const prisma = prismaClient;

        const resposta = await prisma.ambito.delete({
            where: {
                id: id
            }
        })
        return resposta;
    }
}