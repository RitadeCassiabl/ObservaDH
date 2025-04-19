import { prismaClient } from "@/services/prisma/prisma";

export class BuscarProfissaoService {
    async executar(nome: string) {
        const prisma = prismaClient;

        const resposta = await prisma.profissao.findUnique({
            where: {
                nome: nome
            }
        })
        return resposta;
    }
}