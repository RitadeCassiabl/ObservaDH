import { prismaClient } from "@/services/prisma/prisma";

export class ListarPautaService {
    async executar() {
        const prisma = prismaClient;

        const resposta = await prisma.pauta.findMany()

        return resposta;
    }
}