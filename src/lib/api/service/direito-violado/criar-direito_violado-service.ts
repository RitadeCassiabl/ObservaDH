import { prismaClient } from "@/services/prisma/prisma";
import { DireitoViolado } from "@/types/direito-violado";

export class CriarDireitoVioladoService {
    async executar(direitoViolado: DireitoViolado) {
        const prisma = prismaClient;

        const resposta = await prisma.direitoViolado.create({
            data: {
                nome: direitoViolado.nome,
                projetos: {
                    create: []
                }
            }
        })
        return resposta;
    }
}