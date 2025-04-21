import { prismaClient } from '@/services/prisma/prisma';

export class DeletarDireitoVioladoService {
    async executar(nome: string) {
        const prisma = prismaClient;

        const resposta = await prisma.direitoViolado.delete({
            where: {
                nome: nome
            }
        })
        return resposta;
    }
}