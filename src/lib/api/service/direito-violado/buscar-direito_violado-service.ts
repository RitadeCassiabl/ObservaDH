import { prismaClient } from "@/services/prisma/prisma";

export class BuscarDireitoVioladoService {

    async executar(nome: string) {
        const prisma = prismaClient;

        const resposta = await prisma.direitoViolado.findUnique({
            where: {
                nome: nome
            }
        })

        return resposta;
    }
}