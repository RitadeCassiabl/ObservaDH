import { prismaClient } from "@/services/prisma/prisma";

export class DeletarProfissaoService {
    async executar(id: string) {
        const prisma = prismaClient;

        const resposta = await prisma.profissao.delete({
            where: {
                id: id
            }
        })
        return resposta;
    }
}