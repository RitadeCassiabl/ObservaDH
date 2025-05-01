import { prismaClient } from "@/services/prisma/prisma";

export class BuscarAmbitoService {

    async buscarPorId(id: string) {
        const prisma = prismaClient;

        const resposta = await prisma.ambito.findUnique({
            where: {
                id: id
            }
        })

        return resposta;
    }

    async buscarPorNome(nome: string) {
        const prisma = prismaClient;

        const resposta = await prisma.ambito.findFirst({
            where: {
                nome: nome
            }
        })
        return resposta;
    }
}