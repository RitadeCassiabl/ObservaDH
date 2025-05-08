import { prismaClient } from "@/services/prisma/prisma";

export class DeletarPoliticoService {
    async executar(id: string) {
        const prisma = prismaClient;

        const resposta = await prisma.politico.delete({
            where: {
                id: id
            }
        });

        return resposta;
    }
}