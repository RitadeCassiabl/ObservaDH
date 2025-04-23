import { prismaClient } from "@/services/prisma/prisma";

export class DeletarTemaService {
    async executar(nome: string) {
        const prisma = prismaClient;

        const resposta = prisma.tema.delete({
            where: {
                nome: nome
            }
        })

        return resposta;
    }
}