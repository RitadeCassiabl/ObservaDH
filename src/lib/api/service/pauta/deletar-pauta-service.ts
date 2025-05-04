import { prismaClient } from "@/services/prisma/prisma";

export class DeletarTemaService {
    async executar(id: string) {
        const prisma = prismaClient;

        const resposta = prisma.pauta.delete({
            where: {
                id: id,
            }
        })

        return resposta;
    }
}