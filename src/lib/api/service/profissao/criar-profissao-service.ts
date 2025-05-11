import { Profissao } from "@/types/profissao";
import { prismaClient } from "@/services/prisma/prisma";

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
