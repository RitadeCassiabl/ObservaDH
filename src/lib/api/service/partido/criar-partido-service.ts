import { prismaClient } from "@/services/prisma/prisma";
import { Partido } from "@/types/partido";

export class CriarPartidoService {
    async executar(partido: Partido) {
        const prisma = prismaClient;

        const resposta = await prisma.partido.create({

            data: {
                nome: partido.nome,
                codigo: partido.codigo,
                politicos: {
                    create: []
                },
                projetos: {
                    create: []
                }
            }
        });

        return resposta;
    }
}