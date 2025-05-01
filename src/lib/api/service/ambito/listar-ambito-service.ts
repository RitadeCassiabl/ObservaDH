import { prismaClient } from "@/services/prisma/prisma";

export class ListarAmbitoService {
    async executar() {
        const prisma = prismaClient;

        const resposta = await prisma.ambito.findMany({});

        return resposta;
    }
}