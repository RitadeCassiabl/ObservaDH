import { prismaClient } from "@/services/prisma/prisma";

export class BuscarEsferaService {

    async buscarPorId(id: string) {
        const prisma = prismaClient;

        const resposta = await prisma.esfera.findUnique({
            where: {
                id: id
            }
        })

        return resposta;
    }

    async buscarPorNome(nome: string) {
        const prisma = prismaClient;

        const resposta = await prisma.esfera.findFirst({
            where: {
                nome: nome
            }
        })
        return resposta;
    }
}