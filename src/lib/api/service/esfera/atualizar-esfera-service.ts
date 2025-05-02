import { prismaClient } from "@/services/prisma/prisma";

export class AtualizarEsferaService {
  async executar(
    id: string,
    nome: string,
  ) {
    const prisma = prismaClient;

    const resposta = await prisma.esfera.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
      },
    });
    return resposta;
  }
}