import { prismaClient } from "@/services/prisma/prisma";
import { Tema } from "@/types/tema";


export class CriarTemaService {
    async executar(tema: Tema) {
        const prisma = prismaClient;

        const resposta = await prisma.tema.create({
            data: {
                nome: tema.nome,
                projetos: {
                    create: []
                }
            }
        })
        return resposta;
    }
}