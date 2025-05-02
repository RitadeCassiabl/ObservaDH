import { prismaClient } from "@/services/prisma/prisma";

export class BuscarIdeologiaService {
  async buscarPorId(id: string) {
    const prisma = prismaClient;

    const resposta = await prisma.ideologia.findUnique({
      where: {
        id: id,
      },
    });

    return resposta;
  }

  async buscarPorNome(nome: string) {
    const prisma = prismaClient;

    const resposta = await prisma.ideologia.findFirst({
      where: {
        nome: nome,
      },
    });
    return resposta;
  }
}
