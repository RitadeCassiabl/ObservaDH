import { prismaClient } from "@/services/prisma/prisma";

export class BuscarProjetoService {

    async buscarPorId({ id }: { id: string }) {
        const prisma = prismaClient;

        const resposta = await prisma.projeto.findUnique({
            where: {
                id: id
            }
        })

        return resposta;
    }

    async buscarPorNumeroPL({ numeroPl }: { numeroPl: string }) {
        const prisma = prismaClient;

        const resposta = await prisma.projeto.findUnique({
            where: {
                numeroPl: numeroPl
            }
        })
        return resposta;
    }
}