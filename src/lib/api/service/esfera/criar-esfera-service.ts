import { Esfera } from "@/domain/models/esfera";
import { prismaClient } from "@/services/prisma/prisma";
export class CriarEsferaService {
  async executar(esfera: Esfera) {
    const prisma = prismaClient;

    const resposta = await prisma.esfera.create({
      data: {
        nome: esfera.nome,

        projetos: {
          create: [],
        },
      },
    });
    return resposta;
  }
}