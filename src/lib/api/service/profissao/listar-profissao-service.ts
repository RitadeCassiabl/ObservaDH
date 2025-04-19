import { prismaClient } from "@/services/prisma/prisma";

export class ListarProfissoesService {
    async executar() {
        const prisma = prismaClient;

        const resposta = prisma.profissao.findMany();

        return resposta;
    }
} 