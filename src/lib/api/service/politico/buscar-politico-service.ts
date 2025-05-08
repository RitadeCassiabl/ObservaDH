import { prismaClient } from "@/services/prisma/prisma";

export class BuscarPoliticoService {
    async executar(id: string) {
        const prisma = prismaClient;

        const resposta = await prisma.politico.findUnique({
            where: {
                id: id
            }
        });

        return resposta;
    }

}