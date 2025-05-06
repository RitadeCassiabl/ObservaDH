import { Ideologia } from "@/types/ideologia";
import { prismaClient } from "@/services/prisma/prisma";
export class CriarIdeologiaService {
  async executar(ideologia: Ideologia) {
    const prisma = prismaClient;

    const resposta = await prisma.ideologia.create({
      data: {
        nome: ideologia.nome,
        projetos: {
          create: [],
        },
      },
    });
    return resposta;
  }
}