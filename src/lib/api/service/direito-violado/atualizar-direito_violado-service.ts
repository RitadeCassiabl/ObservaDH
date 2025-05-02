import { prismaClient } from "@/services/prisma/prisma";

export class AtualizarDireitoVioladoService {
    async executar(id: string, nome: string) {
        const prisma = prismaClient;

        const resposta = await prisma.direitoViolado.update({
            where: {
                id: id
            },
            data: {
                nome: nome
            }
        })
        return resposta;
    }
}