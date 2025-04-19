import { prismaClient } from "@/services/prisma/prisma";

export class DeletarProfissaoService {
    async executar(nome: string) {
        const prisma = prismaClient;

        const resposta = prisma.profissao.delete({
            where: {
                nome: nome
            }
        })
        return resposta;
    }
}