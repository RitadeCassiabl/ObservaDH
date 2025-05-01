import { Ambito } from "@/types/ambito";
import { prismaClient } from "@/services/prisma/prisma";
export class CriarAmbitoService {
  async executar(ambito: Ambito) {
    const prisma = prismaClient;

    const resposta = await prisma.ambito.create({
      data: {
        nome: ambito.nome,
        projetos: {
          create: [],
        },
      },
    });
    return resposta;
  }
}