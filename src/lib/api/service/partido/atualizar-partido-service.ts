import { prismaClient } from "@/services/prisma/prisma";
import { Partido } from "@/types/partido";

export class AtualizarPartidoService {
    async executar(partido: Partido) {
        const prisma = prismaClient;

        const resposta = await prisma.partido.update({
            where: {
                id: partido.id
            },
            data: {
                sigla: partido.sigla,
                nome: partido.nome,
                projetos: {
                    connect: partido.projetos?.map(projeto => ({ id: projeto })) || []
                },
                politicos: {
                    connect: partido.politicos?.map(politico => ({ id: politico })) || []
                }
            }
        });

        return resposta;
    }
}