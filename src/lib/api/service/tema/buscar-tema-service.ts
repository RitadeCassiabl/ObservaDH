import { prismaClient } from "@/services/prisma/prisma";

export class BuscarTemaService {
    async buscarPorID(id: string) {
        const prisma = prismaClient;

        const resposta = await prisma.tema.findUnique({
            where: {
                id: id
            }
        });
        return resposta;
    }

    async buscarPorNome(nome: string) {
        const prisma = prismaClient;

        const resposta = await prisma.tema.findUnique({
            where: {
                nome: nome
            }
        });
        return resposta;
    }
}