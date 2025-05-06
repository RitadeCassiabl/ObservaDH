import { prismaClient } from "@/services/prisma/prisma";
export class AtualizarEstadoService {
  async executar(id: string, nome: string) {
    const prisma = prismaClient;

    const resposta = await prisma.estado.update({
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
