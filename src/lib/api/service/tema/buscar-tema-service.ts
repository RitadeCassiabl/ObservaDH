import { prismaClient } from "@/services/prisma/prisma";

export class BuscarTemaService {
    async executar(nome: string) {
        const prisma = prismaClient;

        const resposta = await prisma.tema.findUnique({
            where: {
                nome: nome
            }
        });
        return resposta;
    }
}