import { prismaClient } from "@/services/prisma/prisma";

export class AtualizarDireitoVioladoService {
    async executar(nome: string, novoNome: string) {
        const prisma = prismaClient;

        const resposta = await prisma.direitoViolado.update({
            where: {
                nome: nome
            },
            data: {
                nome: novoNome
            }
        })
        return resposta;
    }
}