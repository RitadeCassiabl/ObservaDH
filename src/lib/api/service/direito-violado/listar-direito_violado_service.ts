import { prismaClient } from "@/services/prisma/prisma";

export class ListarDireitoVioladoService {
    async executar() {
        const prisma = prismaClient;

        const resposta = await prisma.direitoViolado.findMany({});

        return resposta;
    }
}