import { prismaClient } from "@/services/prisma/prisma";

export class DeletarTemaService {
    async executar(id: string) {
        const prisma = prismaClient;

        const resposta = prisma.tema.delete({
            where: {
                id: id,
            }
        })

        return resposta;
    }
}