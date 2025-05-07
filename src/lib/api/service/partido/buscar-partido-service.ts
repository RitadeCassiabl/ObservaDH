import { prismaClient } from "@/services/prisma/prisma";

export class BuscarPartidoService {
    async BuscarPorID(id: string) {
        const prisma = prismaClient;

        const resposta = await prisma.partido.findUnique(
            {
                where: { id: id }
            }
        )
        return resposta
    }

    async BuscarPorCodigo(codigo: string) {
        const prisma = prismaClient;

        const resposta = await prisma.partido.findUnique(
            {
                where: { codigo: codigo }
            }
        )
        return resposta
    }

    async BuscarPorNome(nome: string) {
        const prisma = prismaClient;

        const resposta = await prisma.partido.findUnique(
            {
                where: { nome: nome }
            }
        )
        return resposta
    }
}