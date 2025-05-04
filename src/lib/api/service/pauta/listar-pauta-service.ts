import { prismaClient } from "@/services/prisma/prisma";

export class ListarTemaService {
    async executar() {
        const prisma = prismaClient;

        const resposta = await prisma.pauta.findMany()

        return resposta;
    }
}