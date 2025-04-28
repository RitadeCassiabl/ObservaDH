import { prismaClient } from "@/services/prisma/prisma";

export class BuscarDireitoVioladoService {

    async buscarPorId(id: string) {
        const prisma = prismaClient;

        const resposta = await prisma.direitoViolado.findUnique({
            where: {
                id: id
            }
        })

        return resposta;
    }

    async buscarPorNome(nome: string) {
        const prisma = prismaClient;

        const resposta = await prisma.direitoViolado.findUnique({
            where: {
                nome: nome
            }
        })

        return resposta;
    }
}