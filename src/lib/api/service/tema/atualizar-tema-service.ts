import { prismaClient } from "@/services/prisma/prisma";

export class AtualizarTemaService {
    async executar(id: string, nome: string) {
        const prisma = prismaClient;

        const resposta = prisma.tema.update({
            where: {
                id: id,
            }, data: {
                nome: nome
            }
        });

        return resposta;
    }
}