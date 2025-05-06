import { prismaClient } from "@/services/prisma/prisma";

export class BuscarProjetoService {

    async buscarPorId(id: string) {
        const prisma = prismaClient;

        const resposta = await prisma.projeto.findUnique({
            where: {
                id: id
            }
        })

        return resposta;
    }

    async buscarPorNumeroPL(numero_pl: string) {
        const prisma = prismaClient;

        const resposta = await prisma.projeto.findUnique({
            where: {
                numero_pl: numero_pl
            }
        })
        return resposta;
    }
}