import { prismaClient } from "@/services/prisma/prisma";
import { Pauta } from "@/types/pauta";



export class CriarPautaService {
    async executar(pauta: Pauta) {
        const prisma = prismaClient;

        const resposta = await prisma.pauta.create({
            data: {
                nome: pauta.nome,
                Projetos: {
                    create: []
                }
            }
        })
        return resposta;
    }
}