import { Projeto } from "@/types/projeto";
import { prismaClient } from "@/services/prisma/prisma";

export class CriarProjetoService {
  async executar(projeto: Projeto) {
    const prisma = prismaClient;

    const resposta = await prisma.projeto.create({
      data: {
        ano: projeto.ano,
        numero_pl: projeto.numero_pl,
        pauta: projeto.pauta,
        justificativa: projeto.justificativa,
        ementa: projeto.ementa,
        ambitoId: projeto.ambitoId,
        ambito: projeto.ambito,
        autores: {
          create: [],
        },
        partidos: {
          create: [],
        },
        direitosViolados: {
          create: [],
        },
        ideologias: {
          create: [],
        },
      },
    });
    return resposta;
  }
}
