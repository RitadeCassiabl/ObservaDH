import { prismaClient } from "@/services/prisma/prisma";

export class AtualizarTemaService {
    async executar(nome: string, novoNome: string) {
        const prisma = prismaClient;

        const resposta = prisma.tema.update({
            where: {
                nome: nome,
            }, data: {
                nome: novoNome
            }
        });

        return resposta;
    }
}