import { prismaClient } from "@/services/prisma/prisma";

export class AtualizarAmbitoService {
  async executar(
    id: string,
    nome: string,
  ) {
    const prisma = prismaClient;

    const resposta = await prisma.ambito.update({
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