import { prismaClient } from "@/services/prisma/prisma";

export class BuscarPautaService {
    async buscarPorID(id: string) {
        const prisma = prismaClient;

        const resposta = await prisma.pauta.findUnique({
            where: {
                id: id
            }
        });
        return resposta;
    }

    async buscarPorNome(nome: string) {
        const prisma = prismaClient;

        const resposta = await prisma.pauta.findUnique({
            where: {
                nome: nome
            }
        });
        return resposta;
    }
}