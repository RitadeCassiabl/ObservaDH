import { Profissao } from "@/lib/database/models/Profissao";
import { prismaClient } from "@/lib/database/prisma/prisma";

export class CriarProfissaoService {
  async executar(profissao: Profissao) {
    const prisma = prismaClient;

    const resposta = await prisma.profissao.create({
      data: {
        nome: profissao.nome,
        politicos: {
          create: [],
        },
      },
    });
    return resposta;
  }
}