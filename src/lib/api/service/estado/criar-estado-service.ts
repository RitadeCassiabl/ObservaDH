import { Estado } from "@/domain/models/estado";
import { prismaClient } from "@/services/prisma/prisma";
export class CriarEstadoService {
  async executar(estado: Estado) {
    const prisma = prismaClient;

    const resposta = await prisma.estado.create({
      data: {
        nome: estado.nome,
        
        politicos: {
          create: [],
        },
      },
    });
    return resposta;
  }
}