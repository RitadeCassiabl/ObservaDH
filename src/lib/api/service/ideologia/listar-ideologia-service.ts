import { prismaClient } from "@/services/prisma/prisma";

export class ListarIdeologiaService {
    async executar() {
        const prisma = prismaClient;

        const resposta = await prisma.ideologia.findMany({});

        return resposta;
    }
}