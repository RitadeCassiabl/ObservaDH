import { prismaClient } from "@/services/prisma/prisma";

export class ListarPoliticoService {
    async executar() {

        const prisma = prismaClient;

        const resposta = await prisma.politico.findMany({
            include: {
                partido: true,
                estado: true,
                profissoes: true,
                projetos: true,
            }
        });

        return resposta;
    }
}