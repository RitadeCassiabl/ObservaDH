import { prismaClient } from "@/services/prisma/prisma";

export class ListarEsferaService {
    async executar() {
        const prisma = prismaClient;

        const resposta = await prisma.esfera.findMany({});

        return resposta;
    }
}